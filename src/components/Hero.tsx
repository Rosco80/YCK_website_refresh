"use client";

import { useTranslations } from "next-intl";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";


export function Hero() {
  const t = useTranslations("Hero");
  const tb = useTranslations("TrustBar");
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[90vh] lg:min-h-screen flex items-center justify-center overflow-hidden bg-black pt-32 pb-24 lg:pt-12 lg:pb-24"
    >
      {/* Background Layer with Cinematic Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/yck_home_hero.png" 
          alt="Hands-on treatment at YAPCHANKOR" 
          className="w-full h-full object-cover opacity-60"
        />
        {/* Darkened overlay for better text readability */}
        <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/30 to-black/60" />
      </div>

      <div className="container mx-auto px-6 z-10 text-center">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold leading-[1.05] text-white mb-6 tracking-tight drop-shadow-md">
              {t("title")}
            </h1>
            
            <p className="text-xl sm:text-2xl lg:text-3xl font-medium text-brand-gold mb-10 tracking-[0.2em] drop-shadow-sm">
              {t("heritageHeadline")}
            </p>

            <p className="text-lg sm:text-xl lg:text-2xl text-white/90 mb-16 lg:mb-20 leading-relaxed max-w-3xl mx-auto font-medium drop-shadow-lg">
              {t("description1")}
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 lg:mb-20 text-center">
              <Button 
                size="lg"
                className="bg-brand-gold hover:bg-brand-gold/90 text-brand-teal-deep rounded-full px-12 h-14 lg:h-16 text-sm lg:text-lg uppercase tracking-widest font-bold shadow-2xl transition-all hover:scale-105"
                id="cta_book_hero_click"
              >
                {t("primaryCTA")}
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-white/40 text-white hover:bg-white/10 rounded-full px-12 h-14 lg:h-16 text-sm lg:text-lg uppercase tracking-widest font-bold backdrop-blur-md"
              >
                {t("secondaryCTA")}
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Trust Bar - Expanded & Integrated */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="max-w-7xl mx-auto border-t border-white/15 pt-16 mt-16"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-12 lg:gap-0">
            <TrustItem 
              title={tb("item1.title")} 
              sub={tb("item1.sub")} 
            />
            <TrustItem 
              title={tb("item2.title")} 
              sub={tb("item2.sub")} 
              showDivider
            />
            <TrustItem 
              title={tb("item3.title")} 
              sub={tb("item3.sub")} 
              showDivider
            />
            <TrustItem 
              title={tb("item4.title")} 
              sub={tb("item4.sub")} 
              showDivider
            />
          </div>
        </motion.div>
      </div>
      
      {/* Subtle Bottom Blend */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-linear-to-t from-brand-bg to-transparent opacity-40 z-10" />
    </section>
  );
}

function TrustItem({ title, sub, showDivider }: { title: string; sub: string; showDivider?: boolean }) {
  return (
    <div className={cn(
      "flex items-center space-x-6 px-4 sm:px-6 lg:px-10 group transition-all justify-center sm:justify-start",
      showDivider && "lg:border-l lg:border-white/10"
    )}>
      <div className="w-16 h-16 rounded-full bg-brand-gold/10 flex items-center justify-center p-3.5 shadow-inner group-hover:bg-brand-gold/20 transition-colors shrink-0">
        <img 
          src="/Untitled_design-removebg-preview.png" 
          alt="" 
          className="w-full h-full object-contain brightness-110" 
        />
      </div>
      <div className="text-left">
        <div className="text-lg lg:text-xl font-bold text-white leading-tight">
          {title}
        </div>
        <div className="text-xs font-bold text-brand-gold uppercase tracking-widest mt-1 opacity-90 group-hover:opacity-100 transition-opacity">
          {sub}
        </div>
      </div>
    </div>
  );
}
