import { client } from '@/sanity/lib/client';
import { unstable_cache } from 'next/cache';
import { PUBLIC_REVALIDATE_SECONDS } from '@/lib/cache';
import type { PortableTextBlock } from '@portabletext/types';

export interface TestimonialDetails {
  conditionTag?: string;
  caseType?: string;
  severity?: string;
  location?: string;
}

export interface SanityTestimonial {
  _id: string;
  title: string;
  slug: string;
  featured: boolean;
  priority: number;
  category: string;
  quote?: string;
  summary?: string;
  details?: TestimonialDetails;
  before?: string[];
  treatment?: string[];
  outcome?: string[];
  patientWords?: PortableTextBlock[] | null;
  relatedConditions?: string[];
  imageUrl?: string;
}

// Fetch specifically featured testimonials from the main collection
export const getFeaturedTestimonials = unstable_cache(
  async (limit: number = 6): Promise<SanityTestimonial[]> => {
    const query = `*[_type == "testimonial"] | order(featured desc, priority asc) [0...${limit}] {
      _id,
      title,
      "slug": slug.current,
      featured,
      priority,
      category,
      quote,
      summary,
      details,
      before,
      treatment,
      outcome,
      patientWords,
      relatedConditions,
      "imageUrl": image.asset->url
    }`;

    return client.fetch(query);
  },
  ['featured-testimonials'],
  { revalidate: PUBLIC_REVALIDATE_SECONDS, tags: ['testimonials'] }
);

// Fetch the 300+ static testimonials from the new dedicated collection
export const getStaticTestimonials = unstable_cache(
  async (): Promise<SanityTestimonial[]> => {
    const query = `*[_type == "staticTestimonial"] | order(priority asc) {
      _id,
      title,
      "slug": slug.current,
      category,
      patientWords,
      outcome,
      "imageUrl": image.asset->url
    }`;

    return client.fetch(query);
  },
  ['static-testimonials'],
  { revalidate: PUBLIC_REVALIDATE_SECONDS, tags: ['testimonials'] }
);

export const getTestimonialBySlug = unstable_cache(
  async (slug: string): Promise<SanityTestimonial | null> => {
    const query = `*[_type in ["testimonial", "staticTestimonial"] && slug.current == $slug][0] {
      _id,
      title,
      "slug": slug.current,
      featured,
      priority,
      category,
      quote,
      summary,
      details,
      before,
      treatment,
      outcome,
      patientWords,
      relatedConditions,
      "imageUrl": image.asset->url
    }`;

    return client.fetch(query, { slug });
  },
  ['testimonial-by-slug'],
  { revalidate: PUBLIC_REVALIDATE_SECONDS, tags: ['testimonials'] }
);

export interface TestimonialImageOverride {
  testimonialId: string;
  imageUrl: string;
}

export const getTestimonialImageOverrides = unstable_cache(
  async (): Promise<TestimonialImageOverride[]> => {
    const query = `*[_type == "testimonialImageOverride"] {
      testimonialId,
      "imageUrl": image.asset->url
    }`;

    return client.fetch(query);
  },
  ['testimonial-image-overrides'],
  { revalidate: PUBLIC_REVALIDATE_SECONDS, tags: ['testimonials'] }
);

export const getTestimonialSlugs = unstable_cache(
  async (): Promise<string[]> => {
    const query = `*[_type in ["testimonial", "staticTestimonial"] && defined(slug.current)].slug.current`;

    return client.fetch(query);
  },
  ['testimonial-slugs'],
  { revalidate: PUBLIC_REVALIDATE_SECONDS, tags: ['testimonials'] }
);
