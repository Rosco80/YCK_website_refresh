import { client } from '@/sanity/lib/client';
import { urlForImage } from '@/sanity/lib/image';
import { unstable_cache } from 'next/cache';
import { PUBLIC_REVALIDATE_SECONDS } from '@/lib/cache';
import type { PortableTextBlock } from '@portabletext/types';

export interface Insight {
  title: string;
  slug: string;
  link?: string;
  pubDate: string;
  content: string | PortableTextBlock[] | null;
  snippet: string;
  imageUrl: string;
}

interface SanityArticle {
  title: string;
  slug: string;
  pubDate: string;
  snippet: string;
  coverImage?: unknown;
  content: PortableTextBlock[] | null;
}

const getSanityArticles = unstable_cache(
  async () => {
    // Fetch from Sanity
    const query = `*[_type == "article"] | order(publishedAt desc) {
      title,
      "slug": slug.current,
      "pubDate": publishedAt,
      "snippet": subtitle,
      coverImage,
      content
    }`;

    return client.fetch<SanityArticle[]>(query);
  },
  ['sanity-articles'],
  { revalidate: PUBLIC_REVALIDATE_SECONDS, tags: ['sanity-articles'] }
);

const getSanityArticleBySlug = unstable_cache(
  async (slug: string) => {
    const query = `*[_type == "article" && slug.current == $slug][0] {
      title,
      "slug": slug.current,
      "pubDate": publishedAt,
      "snippet": subtitle,
      coverImage,
      content
    }`;

    return client.fetch<SanityArticle | null>(query, { slug });
  },
  ['sanity-article-by-slug'],
  { revalidate: PUBLIC_REVALIDATE_SECONDS, tags: ['sanity-articles'] }
);

async function getInsightsUncached(): Promise<Insight[]> {
  const sanityArticles = await getSanityArticles();
  
  const insights: Insight[] = sanityArticles.map((article) => ({
    title: article.title,
    slug: article.slug,
    link: `/insights/${article.slug}`,
    pubDate: article.pubDate,
    snippet: article.snippet,
    imageUrl: article.coverImage ? urlForImage(article.coverImage).url() : '/images/yck_home_hero.webp',
    content: article.content
  }));

  insights.sort((a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime());

  return insights;
}

export const getInsights = unstable_cache(
  getInsightsUncached,
  ['combined-insights'],
  { revalidate: PUBLIC_REVALIDATE_SECONDS, tags: ['insights'] }
);

async function getInsightBySlugUncached(slug: string): Promise<Insight | null> {
  // Try Sanity first
  const sanityArticle = await getSanityArticleBySlug(slug);
  
  if (sanityArticle) {
    return {
      title: sanityArticle.title,
      slug: sanityArticle.slug,
      link: `/insights/${sanityArticle.slug}`,
      pubDate: sanityArticle.pubDate,
      snippet: sanityArticle.snippet,
      imageUrl: sanityArticle.coverImage ? urlForImage(sanityArticle.coverImage).url() : '/images/yck_home_hero.webp',
      content: sanityArticle.content
    };
  }

  return null;
}

export const getInsightBySlug = unstable_cache(
  getInsightBySlugUncached,
  ['combined-insight-by-slug'],
  { revalidate: PUBLIC_REVALIDATE_SECONDS, tags: ['insights'] }
);
