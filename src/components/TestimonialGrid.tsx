"use client";

import { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useRouter, usePathname } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { TestimonialCard } from "./TestimonialCard";
import { Button } from "./ui/button";
import { getTopTestimonials, testimonialsData } from "@/data/testimonials";
import { cn } from "@/lib/utils";
import { SanityTestimonial, getTestimonials } from "@/lib/sanity-testimonials";

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

interface TestimonialGridProps {
  initialTestimonials?: SanityTestimonial[];
  featuredTestimonials?: SanityTestimonial[];
}

export function TestimonialGrid({ initialTestimonials = [], featuredTestimonials = [] }: TestimonialGridProps) {
  const t = useTranslations("Testimonials");
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  
  const initialCategory = searchParams.get("filter") || "all";
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [testimonials, setTestimonials] = useState<any[]>(initialTestimonials);
  const [isLoading, setIsLoading] = useState(false);

  // Sync state with URL changes and fetch if needed
  useEffect(() => {
    const filter = searchParams.get("filter") || "all";
    setActiveCategory(filter);
    
    if (filter === "all") {
      // If we're at 'all', and we have initial testimonials, use them (merged with featured)
      const combined = [...featuredTestimonials, ...initialTestimonials.filter(it => !featuredTestimonials.some(ft => ft._id === it._id))];
      // If combined is empty, fallback to static data
      if (combined.length === 0) {
         setTestimonials(getTopTestimonials(15));
      } else {
         setTestimonials(combined);
      }
    } else {
      // Fetch from Sanity for specific category
      setIsLoading(true);
      getTestimonials(filter).then(res => {
        if (res.length > 0) {
          setTestimonials(res);
        } else {
          // Fallback to static data if no Sanity results
          const fallback = testimonialsData.filter(t => t.slug === filter || t.slug.includes(filter.split('-')[0]));
          setTestimonials(fallback);
        }
        setIsLoading(false);
      });
    }
  }, [searchParams, initialTestimonials, featuredTestimonials]);

  const handleCategoryChange = (id: string) => {
    setActiveCategory(id);
    const params = new URLSearchParams(searchParams.toString());
    if (id === "all") {
      params.delete("filter");
    } else {
      params.set("filter", id);
    }
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const featured = featuredTestimonials.length > 0 ? featuredTestimonials : initialTestimonials.slice(0, 3);
  const remaining = activeCategory === 'all' 
    ? testimonials.filter(t => !featured.some(f => f._id === t._id))
    : testimonials;

  return (
    <div className="space-y-24">
      {/* Featured Section (Only on 'all' view) */}
      {activeCategory === "all" && (
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
                key={'_id' in testimonial ? testimonial._id : (testimonial as any).id}
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
          {/* Decorative background element */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/10 blur-[100px] -translate-y-1/2 translate-x-1/2 rounded-full" />
        </section>
      )}

      {/* Main Grid Section */}
      <div className="space-y-12">
        <div className={cn(
          "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 transition-opacity duration-500",
          isLoading ? "opacity-50" : "opacity-100"
        )}>
          <AnimatePresence mode="popLayout">
            {remaining.map((testimonial, idx) => (
              <motion.div
                key={'_id' in testimonial ? testimonial._id : (testimonial as any).id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ 
                  duration: 0.5, 
                  delay: idx * 0.05,
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

        {remaining.length === 0 && !isLoading && (
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
