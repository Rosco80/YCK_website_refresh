import { client } from '@/sanity/lib/client';
import { urlForImage } from '@/sanity/lib/image';
import { getInsights as getSubstackInsights, getInsightBySlug as getSubstackInsightBySlug } from './substack';

export interface Insight {
  title: string;
  slug: string;
  link?: string;
  pubDate: string;
  content: any; // string (from Substack) or PortableText (from Sanity)
  snippet: string;
  imageUrl: string;
  source?: 'sanity' | 'substack';
}

export async function getInsights(): Promise<Insight[]> {
  // Fetch from Sanity
  const query = `*[_type == "article"] | order(publishedAt desc) {
    title,
    "slug": slug.current,
    "pubDate": publishedAt,
    "snippet": subtitle,
    coverImage,
    content
  }`;
  
  const sanityArticles = await client.fetch(query);
  
  const formattedSanityArticles: Insight[] = sanityArticles.map((article: any) => ({
    title: article.title,
    slug: article.slug,
    link: `/insights/${article.slug}`,
    pubDate: article.pubDate,
    snippet: article.snippet,
    imageUrl: article.coverImage ? urlForImage(article.coverImage).url() : '/images/yck_home_hero.webp',
    content: article.content,
    source: 'sanity'
  }));

  // Fetch from Substack
  const substackArticles = await getSubstackInsights();
  const formattedSubstackArticles: Insight[] = substackArticles.map(a => ({
    ...a,
    source: 'substack'
  }));

  // Merge and sort by date descending
  const merged = [...formattedSanityArticles, ...formattedSubstackArticles];
  merged.sort((a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime());

  return merged;
}

export async function getInsightBySlug(slug: string): Promise<Insight | null> {
  // Try Sanity first
  const query = `*[_type == "article" && slug.current == $slug][0] {
    title,
    "slug": slug.current,
    "pubDate": publishedAt,
    "snippet": subtitle,
    coverImage,
    content
  }`;
  
  const sanityArticle = await client.fetch(query, { slug });
  
  if (sanityArticle) {
    return {
      title: sanityArticle.title,
      slug: sanityArticle.slug,
      link: `/insights/${sanityArticle.slug}`,
      pubDate: sanityArticle.pubDate,
      snippet: sanityArticle.snippet,
      imageUrl: sanityArticle.coverImage ? urlForImage(sanityArticle.coverImage).url() : '/images/yck_home_hero.webp',
      content: sanityArticle.content,
      source: 'sanity'
    };
  }
  
  // Fallback to Substack
  const substackArticle = await getSubstackInsightBySlug(slug);
  if (substackArticle) {
    return {
      ...substackArticle,
      source: 'substack'
    };
  }

  return null;
}
