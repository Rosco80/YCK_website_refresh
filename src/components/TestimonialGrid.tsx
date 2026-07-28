"use client";

import { useEffect, useState, useMemo } from "react";
import { useRouter, usePathname } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { TestimonialCard } from "./TestimonialCard";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import type { SanityTestimonial } from "@/lib/sanity-testimonials";

const CATEGORY_IDS = [
  "all",
  "knee-pain",
  "back-pain",
  "shoulder-pain",
  "neck-pain",
  "ankle-foot",
  "wrist-pain",
  "sprained-ankle",
  "sports-injury",
  "post-surgery-rehab",
  "chronic-pain",
];

const SLUG_MAP: Record<string, string[]> = {
  "knee-pain": ["knee-pain"],
  "back-pain": ["back-pain", "slipped-disc"],
  "shoulder-pain": ["shoulder-pain", "frozen-shoulder"],
  "neck-pain": ["neck-pain"],
  "ankle-foot": ["sprained-ankle", "plantar-fasciitis"],
  "wrist-pain": ["wrist-pain"],
  "sprained-ankle": ["sprained-ankle"],
  "sports-injury": ["sports-injury"],
  "post-surgery-rehab": ["post-surgery-rehab"],
  "chronic-pain": ["chronic-pain", "general"],
};

interface TestimonialGridProps {
  featuredTestimonials?: SanityTestimonial[];
  staticTestimonials?: SanityTestimonial[];
  imageOverrides?: { testimonialId: string; imageUrl: string }[];
}

export function TestimonialGrid({ 
  featuredTestimonials = [], 
  staticTestimonials = [],
  imageOverrides = [] 
}: TestimonialGridProps) {
  const t = useTranslations("Testimonials");
  const router = useRouter();
  const pathname = usePathname();
  
  const [activeCategory, setActiveCategory] = useState("all");
  const [visibleCount, setVisibleCount] = useState(12);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const filter = params.get("filter");

    if (filter && CATEGORY_IDS.includes(filter)) {
      window.setTimeout(() => setActiveCategory(filter), 0);
    }
  }, []);

  // Featured: only from the premium "Testimonial" collection
  const featured = useMemo(() => {
    return featuredTestimonials.slice(0, 6);
  }, [featuredTestimonials]);

  // Main Grid: from the "Static Testimonial" collection
  const allFiltered = useMemo(() => {
    let baseData = [...staticTestimonials];

    if (activeCategory !== "all") {
      const slugs = SLUG_MAP[activeCategory] || [activeCategory];
      baseData = baseData.filter(item => slugs.includes(item.category));
    }

    return baseData.map(item => {
      const legacyId = "id" in item ? String((item as SanityTestimonial & { id?: string }).id) : undefined;
      const override = imageOverrides.find(o => o.testimonialId === item.slug || o.testimonialId === legacyId);
      if (override && !item.imageUrl) {
        return { ...item, imageUrl: override.imageUrl };
      }
      return item;
    });
  }, [activeCategory, staticTestimonials, imageOverrides]);

  const visibleItems = useMemo(() => {
    return allFiltered.slice(0, visibleCount);
  }, [allFiltered, visibleCount]);

  const handleCategoryChange = (id: string) => {
    setActiveCategory(id);
    setVisibleCount(12);
    const params = new URLSearchParams(window.location.search);
    if (id === "all") {
      params.delete("filter");
    } else {
      params.set("filter", id);
    }
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const loadMore = () => {
    setVisibleCount(prev => prev + 12);
  };

  return (
    <div className="space-y-24">
      {/* Premium Featured Section */}
      {activeCategory === "all" && featured.length > 0 && (
        <div className="space-y-12">
          <div className="flex items-center space-x-4 mb-8">
            <div className="h-px grow bg-brand-teal/10" />
            <h2 className="text-label text-brand-gold font-bold uppercase tracking-[0.2em] shrink-0">
              FEATURED RECOVERY CASES
            </h2>
            <div className="h-px grow bg-brand-teal/10" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {featured.map((testimonial) => (
              <TestimonialCard 
                key={testimonial._id}
                testimonial={testimonial} 
                isHero={true}
              />
            ))}
          </div>
        </div>
      )}

      {/* Filter Bar */}
      <div id="filter-bar" className="sticky top-24 z-30 py-8 bg-brand-bg/80 backdrop-blur-md -mx-6 px-6">
        <div className="container mx-auto">
          <nav className="flex flex-wrap justify-center gap-3">
            {CATEGORY_IDS.map((catId) => (
              <Button
                key={catId}
                variant={activeCategory === catId ? "default" : "outline"}
                onClick={() => handleCategoryChange(catId)}
                className={cn(
                  "rounded-full px-6 py-4 text-xs font-bold uppercase tracking-wider transition-all",
                  activeCategory === catId 
                    ? "bg-brand-teal text-white shadow-lg scale-105 border-transparent" 
                    : "border-brand-teal/20 text-brand-teal hover:bg-brand-teal hover:text-white"
                )}
              >
                {t(`categories.${catId}`)}
              </Button>
            ))}
          </nav>
        </div>
      </div>

      {/* Shared Methods bridge */}
      {activeCategory === "all" && (
        <section className="relative overflow-hidden bg-brand-teal-deep rounded-[3rem] p-8 lg:p-16 text-white my-16">
          <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-8 uppercase tracking-tight">
              {t("bridgeTitle")}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {(t.raw("bridgeItems") as string[]).map((item, i) => (
                <div key={i} className="flex items-start space-x-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group">
                  <div className="w-12 h-12 flex items-center justify-center shrink-0">
                    <img 
                      src="/images/Untitled_design-removebg-preview.webp" 
                      alt="Icon" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <p className="text-lg lg:text-xl font-medium leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/10 blur-[100px] -translate-y-1/2 translate-x-1/2 rounded-full" />
        </section>
      )}

      {/* Main Grid — Migrated Static Content */}
      <div className="space-y-16">
        {activeCategory !== "all" && (
          <div className="flex items-center space-x-4 mb-4">
            <div className="h-px grow bg-brand-teal/10" />
            <h2 className="text-label text-brand-gold font-bold uppercase tracking-[0.2em] shrink-0">
              {t(`categories.${activeCategory}`)} — {allFiltered.length} Cases
            </h2>
            <div className="h-px grow bg-brand-teal/10" />
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          <AnimatePresence mode="popLayout">
            {visibleItems.map((testimonial, idx) => (
              <motion.div
                key={testimonial._id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ 
                  duration: 0.5, 
                  delay: Math.min(idx * 0.03, 0.5),
                  ease: [0.16, 1, 0.3, 1] 
                }}
              >
                <TestimonialCard 
                  testimonial={testimonial} 
                  isHero={false}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {allFiltered.length > visibleCount && (
          <div className="flex justify-center pt-8">
            <Button
              onClick={loadMore}
              className="rounded-full px-12 py-8 bg-white border-2 border-brand-teal text-brand-teal font-bold uppercase tracking-widest hover:bg-brand-teal hover:text-white transition-all shadow-xl hover:shadow-brand-teal/20"
            >
              Load More Stories
            </Button>
          </div>
        )}

        {allFiltered.length === 0 && (
          <div className="text-center py-24 bg-white rounded-[3rem] border border-brand-teal/5 shadow-clinical">
            <p className="text-xl text-brand-teal/60 italic">
              {t("noResults")}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
