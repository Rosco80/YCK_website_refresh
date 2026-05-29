import { getPhysiotherapists } from "@/lib/sanity-queries";
import LocationClientPage from "./LocationClientPage";

export const revalidate = 3600;

const locationSlugs = [
  "ampang",
  "old-klang-road",
  "shah-alam",
  "subang-jaya",
  "okr",
  "shahAlam",
  "subangJaya",
];

const locationSlugMap: Record<string, string> = {
  "ampang": "ampang",
  "old-klang-road": "okr",
  "shah-alam": "shahAlam",
  "subang-jaya": "subangJaya",
  "okr": "okr",
  "shahAlam": "shahAlam",
  "subangJaya": "subangJaya",
};

export function generateStaticParams() {
  const locales = ["en", "ms", "zh"];

  return locales.flatMap((locale) =>
    locationSlugs.map((slug) => ({ locale, slug }))
  );
}

export default async function LocationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const branchId = locationSlugMap[slug] || slug;
  const sanityPhysios = await getPhysiotherapists();

  return <LocationClientPage branchId={branchId} sanityPhysios={sanityPhysios} />;
}
