import { client } from '@/sanity/lib/client';
import { urlForImage } from '@/sanity/lib/image';

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
  patientWords?: any;
  relatedConditions?: string[];
  imageUrl?: string;
}

export async function getTestimonials(category?: string): Promise<SanityTestimonial[]> {
  const filter = category && category !== 'all' ? `&& category == "${category}"` : '';
  const query = `*[_type == "testimonial" ${filter}] | order(featured desc, priority asc) {
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
}

export async function getTestimonialBySlug(slug: string): Promise<SanityTestimonial | null> {
  const query = `*[_type == "testimonial" && slug.current == $slug][0] {
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
}

export async function getFeaturedTestimonials(limit: number = 3): Promise<SanityTestimonial[]> {
  const query = `*[_type == "testimonial" && featured == true] | order(priority asc) [0...${limit}] {
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
}
