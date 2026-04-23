import { client } from '@/sanity/lib/client';
import { urlForImage } from '@/sanity/lib/image';

export interface Insight {
  title: string;
  slug: string;
  link?: string;
  pubDate: string;
  content: any;
  snippet: string;
  imageUrl: string;
}

export async function getInsights(): Promise<Insight[]> {
  const query = `*[_type == "article"] | order(publishedAt desc) {
    title,
    "slug": slug.current,
    "pubDate": publishedAt,
    "snippet": subtitle,
    coverImage,
    content
  }`;
  
  const articles = await client.fetch(query);
  
  return articles.map((article: any) => ({
    title: article.title,
    slug: article.slug,
    link: `/insights/${article.slug}`,
    pubDate: article.pubDate,
    snippet: article.snippet,
    imageUrl: article.coverImage ? urlForImage(article.coverImage).url() : '/images/yck_home_hero.webp',
    content: article.content
  }));
}

export async function getInsightBySlug(slug: string): Promise<Insight | null> {
  const query = `*[_type == "article" && slug.current == $slug][0] {
    title,
    "slug": slug.current,
    "pubDate": publishedAt,
    "snippet": subtitle,
    coverImage,
    content
  }`;
  
  const article = await client.fetch(query, { slug });
  
  if (!article) return null;
  
  return {
    title: article.title,
    slug: article.slug,
    link: `/insights/${article.slug}`,
    pubDate: article.pubDate,
    snippet: article.snippet,
    imageUrl: article.coverImage ? urlForImage(article.coverImage).url() : '/images/yck_home_hero.webp',
    content: article.content
  };
}
