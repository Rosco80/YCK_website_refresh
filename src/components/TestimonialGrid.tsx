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

const CATEGORY_IDS = [
  "all",
  "sports-injury",
  "post-surgery-rehab",
  "chronic-pain",
  "knee-pain",
  "back-pain",
  "shoulder-pain",
  "neck-pain",
  "sprained-ankle",
  "wrist-pain",
];

export function TestimonialGrid() {
  const t = useTranslations("Testimonials");
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  
  const initialCategory = searchParams.get("filter") || "all";
  const [activeCategory, setActiveCategory] = useState(initialCategory);

  // Sync state with URL changes
  useEffect(() => {
    const filter = searchParams.get("filter");
    if (filter && CATEGORY_IDS.includes(filter)) {
      setActiveCategory(filter);
    } else if (!filter) {
      setActiveCategory("all");
    }
  }, [searchParams]);

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

  const filteredTestimonials = useMemo(() => {
    if (activeCategory === "all") {
      // Use helper to get the 15 most comprehensive cases
      return getTopTestimonials(15);
    }
    return testimonialsData.filter(t => t.slug === activeCategory || t.slug.includes(activeCategory.split('-')[0]));
  }, [activeCategory]);

  return (
    <div className="space-y-16">
      {/* Category Filter Navigation */}
      <nav className="flex flex-wrap justify-center gap-4 mb-20">
        {CATEGORY_IDS.map((catId) => (
          <Button
            key={catId}
            variant={activeCategory === catId ? "default" : "outline"}
            onClick={() => handleCategoryChange(catId)}
            className={cn(
              "rounded-full px-8 py-6 text-label transition-all",
              activeCategory === catId 
                ? "bg-brand-teal text-white shadow-lg scale-105" 
                : "border-brand-teal/20 text-brand-teal hover:bg-brand-teal/5"
            )}
          >
            {t(`categories.${catId}`)}
          </Button>
        ))}
      </nav>

      {/* Masonry Layout using CSS Columns */}
      <div className="columns-1 md:columns-2 lg:columns-3 gap-8 lg:gap-12 [column-fill:balance]">
        <AnimatePresence mode="popLayout">
          {filteredTestimonials.map((testimonial, idx) => (
            <motion.div
              key={testimonial.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ 
                duration: 0.5, 
                delay: idx * 0.05,
                ease: [0.16, 1, 0.3, 1] 
              }}
              className="break-inside-avoid-column mb-8 lg:mb-12"
            >
              <TestimonialCard 
                testimonial={testimonial} 
                isHero={activeCategory === "all" && idx < 3}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {filteredTestimonials.length === 0 && (
        <div className="text-center py-20 bg-white rounded-[3rem] border border-brand-teal/5 shadow-inner">
          <p className="text-body text-brand-teal/40 italic">
            No specific cases found for this category yet. Select another to see more results.
          </p>
        </div>
      )}
    </div>
  );
}
