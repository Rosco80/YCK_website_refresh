import Parser from 'rss-parser';
import sanitizeHtml from 'sanitize-html';

export interface Insight {
  title: string;
  slug: string;
  link: string;
  pubDate: string;
  content: string;
  snippet: string;
  imageUrl: string;
}

const parser = new Parser({
  customFields: {
    item: ['content:encoded', 'enclosure'],
  }
});

export async function getInsights(): Promise<Insight[]> {
  try {
    const response = await fetch('https://yckpainclinic.substack.com/feed', {
      next: { revalidate: 3600 } // Cache for 1 hour; allows static sitemap generation
    });
    
    if (!response.ok) {
        throw new Error(`Substack API responded with status: ${response.status}`);
    }
    
    const xmlText = await response.text();
    const feed = await parser.parseString(xmlText);
    
    if (!feed.items) return [];

    return feed.items.map(item => {
      // Create a slug from the link (Substack links end with /p/post-slug)
      const slugMatch = item.link?.match(/\/p\/([a-zA-Z0-9-]+)/);
      const slug = slugMatch ? slugMatch[1] : (item.guid || '').replace(/[^a-zA-Z0-9-]/g, '-');

      const rawHtml = item['content:encoded'] || item.content || '';
      
      // Sanitization options allowing typical Substack elements including images, iframes for embeds
      const sanitizeOptions = {
        allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img', 'iframe', 'figure', 'figcaption', 'h1', 'h2', 'table', 'thead', 'tbody', 'tr', 'th', 'td']),
        allowedAttributes: {
          ...sanitizeHtml.defaults.allowedAttributes,
          img: ['src', 'alt', 'width', 'height', 'class', 'srcset'],
          iframe: ['src', 'width', 'height', 'allowfullscreen', 'frameborder'],
          '*': ['class', 'style', 'id']
        },
        allowedIframeHostnames: ['www.youtube.com', 'player.vimeo.com', 'substack.com']
      };

      const sanitizedContent = sanitizeHtml(rawHtml, sanitizeOptions);

      // Extract the first image to use as a cover if none provided in XML
      let imageUrl = '/images/yck_home_hero.webp'; // Meaningful fallback
      if (item.enclosure && item.enclosure.url) {
        imageUrl = item.enclosure.url;
      } else {
        const imgMatch = rawHtml.match(/<img[^>]+src="([^">]+)"/);
        if (imgMatch) {
          imageUrl = imgMatch[1];
        }
      }

      // Generate a snippet safely by removing all tags
      const textOnly = sanitizeHtml(rawHtml, { allowedTags: [] });
      const snippet = textOnly.length > 150 ? textOnly.substring(0, 150) + '...' : textOnly;

      return {
        title: item.title || 'Untitled',
        slug,
        link: item.link || '',
        pubDate: item.pubDate || new Date().toISOString(),
        content: sanitizedContent,
        snippet,
        imageUrl
      };
    });
  } catch (error) {
    // ⚠️ CIRCUIT BREAKER: Trap fetch failures gracefully. 
    // This prevents local development or production initial-build crashes 
    // if the Substack API is temporarily unreachable.
    console.error("[Circuit Breaker] Failed to fetch Substack Insights. Suppressing error to keep Homepage stable.", error);
    return [];
  }
}

export async function getInsightBySlug(slug: string): Promise<Insight | null> {
  const insights = await getInsights();
  const decodedSlug = decodeURIComponent(slug);
  return insights.find(insight => insight.slug === decodedSlug) || null;
}
