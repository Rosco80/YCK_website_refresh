"use client";

import { useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { useRouter, usePathname } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { TestimonialCard } from "./TestimonialCard";
import { Button } from "./ui/button";
import { getTopTestimonials, testimonialsData } from "@/data/testimonials";
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

// Map filter IDs to static data slugs (some filters match multiple slugs)
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
  initialTestimonials?: SanityTestimonial[];
  featuredTestimonials?: SanityTestimonial[];
  imageOverrides?: { testimonialId: string; imageUrl: string }[];
}

export function TestimonialGrid({ featuredTestimonials = [], imageOverrides = [] }: TestimonialGridProps) {
  const t = useTranslations("Testimonials");
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  
  const initialCategory = searchParams.get("filter") || "all";
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [visibleCount, setVisibleCount] = useState(12);

  // Featured: always from Sanity (max 6, managed in CMS)
  // ... (useMemo code remains same, but I'll include it for context)
  const featured = useMemo(() => {
    const sanityCount = featuredTestimonials.length;
    if (sanityCount >= 6) return featuredTestimonials.slice(0, 6);
    
    const topStatic = getTopTestimonials(6);
    const needed = 6 - sanityCount;
    const fillers = topStatic
      .filter(st => !featuredTestimonials.some(ft => ft.slug === st.slug || ft.title === st.title))
      .slice(0, needed);
    
    return [...featuredTestimonials, ...fillers];
  }, [featuredTestimonials]);

  // Filtered static testimonials based on active category, merged with Sanity image overrides
  const allFilteredStatic = useMemo(() => {
    let baseData = [];
    if (activeCategory === "all") {
      // For 'all', we use the full set (filtered by featured later)
      baseData = [...testimonialsData].sort((a, b) => (b.content.length || 0) - (a.content.length || 0));
    } else {
      const slugs = SLUG_MAP[activeCategory] || [activeCategory];
      baseData = testimonialsData
        .filter(t => slugs.includes(t.slug))
        .sort((a, b) => (b.content.length || 0) - (a.content.length || 0));
    }

    // Merge image overrides from Sanity
    const merged = baseData.map(testimonial => {
      const override = imageOverrides.find(o => 
        o.testimonialId === testimonial.id || o.testimonialId === testimonial.slug
      );
      if (override) {
        return { ...testimonial, imageUrl: override.imageUrl };
      }
      return testimonial;
    });

    // Filter out testimonials that are already in the featured section
    return merged.filter(st => !featured.some(ft => 
      ('_id' in ft && ft.title === st.title) || 
      (ft.slug === st.slug) || 
      ((ft as any).id === st.id)
    ));
  }, [activeCategory, imageOverrides, featured]);

  // The actually visible subset
  const visibleStatic = useMemo(() => {
    return allFilteredStatic.slice(0, visibleCount);
  }, [allFilteredStatic, visibleCount]);

  const handleCategoryChange = (id: string) => {
    setActiveCategory(id);
    setVisibleCount(12); // Reset count on category change
    const params = new URLSearchParams(searchParams.toString());
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
      {/* Featured Section (Only on 'all' view) — from Sanity CMS */}
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
                key={'_id' in testimonial ? (testimonial as any)._id : (testimonial as any).id}
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

      {/* Bridge Section (Only on 'all' view) */}
      {activeCategory === "all" && (
        <section className="bg-brand-teal-deep rounded-[3rem] p-12 lg:p-20 text-white relative overflow-hidden shadow-2xl">
          <div className="relative z-10 max-w-4xl mx-auto text-center lg:text-left">
            <h2 className="text-2xl lg:text-3xl font-bold mb-10 tracking-tight opacity-90">
              {t("bridgeTitle")}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {(t.raw("bridgeItems") as string[]).map((item, i) => (
                <div key={i} className="flex items-start space-x-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group">
                  <div className="w-10 h-10 rounded-full bg-brand-gold/20 flex items-center justify-center shrink-0 group-hover:bg-brand-gold/40 transition-colors">
                    <span className="text-brand-gold font-bold text-lg">✓</span>
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

      {/* Main Grid — Static testimonials */}
      <div className="space-y-16">
        {activeCategory !== "all" && (
          <div className="flex items-center space-x-4 mb-4">
            <div className="h-px grow bg-brand-teal/10" />
            <h2 className="text-label text-brand-gold font-bold uppercase tracking-[0.2em] shrink-0">
              {t(`categories.${activeCategory}`)} — {allFilteredStatic.length} Cases
            </h2>
            <div className="h-px grow bg-brand-teal/10" />
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          <AnimatePresence mode="popLayout">
            {visibleStatic.map((testimonial, idx) => (
              <motion.div
                key={testimonial.id}
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

        {allFilteredStatic.length > visibleCount && (
          <div className="flex justify-center pt-8">
            <Button
              onClick={loadMore}
              className="rounded-full px-12 py-8 bg-white border-2 border-brand-teal text-brand-teal font-bold uppercase tracking-widest hover:bg-brand-teal hover:text-white transition-all shadow-xl hover:shadow-brand-teal/20"
            >
              Load More Stories
            </Button>
          </div>
        )}

        {allFilteredStatic.length === 0 && (
          <div className="text-center py-24 bg-white rounded-[3rem] border border-brand-teal/5 shadow-clinical">
            <p className="text-xl text-brand-teal/40 italic">
              {t("noResults")}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
