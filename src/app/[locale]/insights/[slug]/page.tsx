import { getInsightBySlug, getInsights } from '@/lib/sanity-insights';
import { PortableText } from '@portabletext/react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Link } from '@/i18n/routing';
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import { ArrowLeft, Calendar } from 'lucide-react';
import Image from 'next/image';
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const insight = await getInsightBySlug(slug);
  if (!insight) return { title: 'Not Found' };
  
  return {
    title: `${insight.title} | YAPCHANKOR Insights`,
    description: insight.snippet,
  };
}

export const revalidate = 3600; // Cache and statically regenerate the detail pages hourly

// Removed generateStaticParams temporarily for debugging 404

export default async function InsightDetailPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { slug, locale } = await params;
  setRequestLocale(locale);
  const LOCALE_MAP: Record<string, string> = { en: 'en-MY', ms: 'ms-MY', zh: 'zh-MY' };
  const safeLocale = LOCALE_MAP[locale] ?? 'en-MY';
  console.log("==> Incoming slug from Next.js:", slug);
  const insights = await getInsights();
  console.log("==> Available slugs from Substack:", insights.map(i => i.slug));
  const insight = await getInsightBySlug(slug);

  if (!insight) {
    console.log("==> No insight found matching slug:", slug);
    notFound();
  }

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "headline": insight.title,
    "description": insight.snippet,
    "url": `https://yapchankor.com/${locale}/insights/${insight.slug}`,
    "datePublished": insight.pubDate,
    "publisher": {
      "@type": "MedicalClinic",
      "name": "YAPCHANKOR Pain Treatment Centre",
      "logo": {
        "@type": "ImageObject",
        "url": "https://yapchankor.com/logo.png"
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-brand-bg font-inter">
      <Header />
      
      <main className="grow">
        <article className="pb-32" itemScope itemType="https://schema.org/MedicalWebPage">
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
          />
          {/* Header Section */}
          <div className="bg-brand-teal-deep text-white pt-24 pb-32 relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-4xl relative z-10 text-left">
              <Link 
                href="/insights" 
                className="inline-flex items-center text-brand-gold hover:text-white transition-colors mb-10 text-label"
                aria-label="Back to Clinical Insights"
              >
                <ArrowLeft size={14} className="mr-2" /> Back to Insights
              </Link>
              <div className="text-label text-brand-gold/80 mb-6 gap-2 flex items-center">
                 <Calendar size={14} />
                 {new Date(insight.pubDate).toLocaleDateString(safeLocale, { year: 'numeric', month: 'long', day: 'numeric' })}
              </div>
              <h1 className="text-h2 text-white mb-8 drop-shadow-lg text-left" itemProp="headline">
                {insight.title}
              </h1>
            </div>
          </div>

          {/* Content Section */}
          <div className="container mx-auto px-6 max-w-3xl -mt-16 relative z-20">
            <div className="bg-white rounded-4xl p-8 md:p-12 lg:p-16 shadow-xl border border-brand-teal/5">
              
              {/* AI Summary Block (AEO Optimization) */}
              <div className="bg-brand-bg/50 rounded-2xl p-6 sm:p-8 mb-12 border-l-4 border-brand-gold">
                <h2 className="text-label mb-3">Key Takeaways</h2>
                <p className="text-body text-brand-teal-deep/80" itemProp="description">
                  {insight.snippet}
                </p>
              </div>

              <div 
                className="
                  text-body text-brand-teal-deep/80 text-lg
                  [&>p]:mb-8
                  [&>h1]:text-h3 [&>h1]:text-brand-teal-deep [&>h1]:mb-6 [&>h1]:mt-12
                  [&>h2]:text-h4 [&>h2]:text-brand-teal-deep [&>h2]:mb-6 [&>h2]:mt-10
                  [&>h3]:text-body-lg [&>h3]:font-bold [&>h3]:text-brand-teal-deep [&>h3]:mb-4 [&>h3]:mt-8
                  [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-8 [&>ul>li]:mb-2
                  [&>ol]:list-decimal [&>ol]:pl-6 [&>ol]:mb-8 [&>ol>li]:mb-2
                  [&>img]:w-full [&>img]:rounded-2xl [&>img]:my-10 [&>img]:shadow-sm
                  [&>figure]:my-10 [&>figure>img]:w-full [&>figure>img]:rounded-2xl [&>figcaption]:text-center [&>figcaption]:text-sm [&>figcaption]:text-brand-teal-deep/50 [&>figcaption]:mt-4
                  [&>blockquote]:border-l-4 [&>blockquote]:border-brand-gold [&>blockquote]:pl-6 [&>blockquote]:italic [&>blockquote]:text-xl [&>blockquote]:my-10
                  [&>a]:text-brand-teal [&>a]:underline [&>a]:underline-offset-4 hover:[&>a]:text-brand-teal-deep
                "
              >
                {insight.content ? (
                  <PortableText value={insight.content} />
                ) : (
                  <p>Content is coming soon.</p>
                )}
              </div>
            </div>
            
            {insight.link && insight.link.includes('substack.com') && (
              <div className="mt-20 text-center">
                  <a 
                    href={insight.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-8 py-4 bg-brand-bg border-2 border-brand-teal/20 text-brand-teal-deep text-label rounded-xl hover:border-brand-teal hover:bg-brand-teal hover:text-white transition-all"
                  >
                    View original on Substack
                  </a>
              </div>
            )}
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
