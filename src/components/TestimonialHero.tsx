"use client";

import { useTranslations } from "next-intl";

export function TestimonialHero() {
  const t = useTranslations("Testimonials");

  const scrollToFilter = () => {
    const element = document.getElementById('filter-bar');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-24 pb-20 lg:pb-32 overflow-hidden bg-brand-teal-deep text-white">
      <div className="container mx-auto px-6 relative z-10 text-center lg:text-left">
        <div className="max-w-4xl mx-auto lg:mx-0">
          <div className="text-label inline-flex items-center space-x-3 px-4 py-1.5 rounded-full border border-brand-gold/30 bg-brand-gold/10 mb-8 uppercase text-brand-gold">
            <span>{t("heroLabel")}</span>
          </div>
          
          <h1 className="text-h2 lg:text-8xl mb-8 uppercase">
            {t("heroLabel")}
          </h1>
          
          <p className="text-body-lg text-white/90 max-w-2xl mb-12">
            {t("heroDescription")}
          </p>



          <div className="flex flex-col sm:flex-row items-center gap-6">
            <button className="w-full sm:w-auto px-8 py-5 rounded-full bg-brand-gold text-brand-teal-deep font-bold text-lg hover:bg-white transition-all shadow-lg hover:shadow-brand-gold/20">
              {t("heroCTA")}
            </button>
            <button 
              onClick={scrollToFilter}
              className="w-full sm:w-auto px-8 py-5 rounded-full border border-white/20 text-white font-bold text-lg hover:bg-white/10 transition-all"
            >
              {t("heroBrowse")}
            </button>
          </div>
        </div>
      </div>
      
      {/* Abstract Decorations */}
      <div className="absolute top-0 right-0 w-1/2 h-full z-0 opacity-10 pointer-events-none">
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-brand-gold/40 to-transparent blur-3xl translate-x-1/2 -translate-y-1/2" />
      </div>
    </section>
  );
}
