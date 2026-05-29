import { unstable_cache } from "next/cache";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import { PUBLIC_REVALIDATE_SECONDS } from "@/lib/cache";

export const getSiteSettings = unstable_cache(
  async () => client.fetch(`*[_type == "siteSettings"][0]`),
  ["site-settings"],
  { revalidate: PUBLIC_REVALIDATE_SECONDS, tags: ["site-settings"] }
);

export const getWebsiteImages = unstable_cache(
  async () => client.fetch(`*[_type == "websiteImages"][0]`),
  ["website-images"],
  { revalidate: PUBLIC_REVALIDATE_SECONDS, tags: ["website-images"] }
);

export interface SanityPhysio {
  name: string;
  title: string;
  bio: string;
  branch: string;
  image: string | null;
}

interface RawSanityPhysio {
  name: string;
  title: string;
  bio: string;
  branch: string;
  image?: unknown;
}

export const getPhysiotherapists = unstable_cache(
  async (): Promise<SanityPhysio[]> => {
    const rawPhysios = await client.fetch<RawSanityPhysio[]>(
      `*[_type == "physiotherapist"] | order(order asc)`
    );

    return rawPhysios.map((physio) => ({
      name: physio.name,
      title: physio.title,
      bio: physio.bio,
      branch: physio.branch,
      image: physio.image ? urlForImage(physio.image)?.url() : null,
    }));
  },
  ["physiotherapists"],
  { revalidate: PUBLIC_REVALIDATE_SECONDS, tags: ["physiotherapists"] }
);

export const getLandingPageBySlug = unstable_cache(
  async (slug: string) =>
    client.fetch(`*[_type == "landingPage" && slug.current == $slug][0]`, {
      slug,
    }),
  ["landing-page-by-slug"],
  { revalidate: PUBLIC_REVALIDATE_SECONDS, tags: ["landing-pages"] }
);

export const getLandingPageSlugs = unstable_cache(
  async (): Promise<string[]> =>
    client.fetch(`*[_type == "landingPage" && defined(slug.current)].slug.current`),
  ["landing-page-slugs"],
  { revalidate: PUBLIC_REVALIDATE_SECONDS, tags: ["landing-pages"] }
);
