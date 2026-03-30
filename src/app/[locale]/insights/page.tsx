import { getInsights } from '@/lib/substack';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Link } from '@/i18n/routing';
import { getTranslations } from 'next-intl/server';
import { ArrowRight, Calendar } from 'lucide-react';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Insights & Articles | YAPCHANKOR Pain Clinic',
  description: 'Clinical insights on chronic pain, rehabilitation, and injury management from YAPCHANKOR.'
};

export const revalidate = 3600; // 1-hour Incremental Static Regeneration cache

export default async function InsightsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations('Insights');
  const insights = await getInsights();

  return (
    <div className="min-h-screen flex flex-col bg-brand-bg font-inter">
      <Header />
      
      <main className="grow pt-24 pb-32">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="max-w-3xl mb-16">
            <h1 className="text-4xl lg:text-6xl font-black text-brand-teal-deep tracking-tight mb-6">
              {t('headline')}
            </h1>
            <p className="text-xl text-brand-teal-deep/60 leading-relaxed font-medium">
              {t('description')}
            </p>
          </div>

          {insights.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-4xl border border-brand-teal/10 shadow-sm">
              <p className="text-brand-teal-deep/50 font-medium">No insights available at the moment. Please check back later.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {insights.map((insight) => (
                <Link 
                  href={`/insights/${insight.slug}`} 
                  key={insight.slug}
                  className="group bg-white rounded-4xl overflow-hidden border border-brand-teal/5 shadow-md hover:shadow-xl transition-all flex flex-col h-full"
                >
                  <div className="aspect-video relative overflow-hidden bg-brand-teal/5">
                    <Image 
                      src={insight.imageUrl} 
                      alt={insight.title}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-8 flex flex-col grow">
                    <div className="flex items-center text-brand-gold font-bold text-xs uppercase tracking-widest mb-4 gap-2">
                       <Calendar size={14} />
                       {new Date(insight.pubDate).toLocaleDateString(locale, { year: 'numeric', month: 'long', day: 'numeric' })}
                    </div>
                    <h2 className="text-xl font-bold text-brand-teal-deep mb-4 leading-tight group-hover:text-brand-teal transition-colors line-clamp-2">
                      {insight.title}
                    </h2>
                    <p className="text-brand-teal-deep/60 text-sm leading-relaxed mb-8 grow line-clamp-3">
                      {insight.snippet}
                    </p>
                    <div className="flex items-center text-brand-teal font-bold text-sm tracking-widest uppercase mt-auto group-hover:text-brand-teal-deep transition-colors">
                      Read Article <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
