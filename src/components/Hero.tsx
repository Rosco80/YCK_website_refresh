"use client";

import { useTranslations } from "next-intl";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import { Button } from "./ui/button";
import { CheckCircle2 } from "lucide-react";

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
      className="relative min-h-[90vh] lg:min-h-screen flex items-center justify-center overflow-hidden bg-black pt-32 pb-24 lg:pt-12 lg:pb-40"
    >
      {/* Background Layer with Cinematic Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/hero_cinematic.png" 
          alt="Hands-on treatment at YAPCHANKOR" 
          className="w-full h-full object-cover opacity-80"
        />
        {/* Very subtle vignette - primarily at the top for navbar contrast */}
        <div className="absolute inset-0 bg-linear-to-b from-black/60 via-transparent to-black/40" />
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
            
            <p className="text-xs sm:text-base lg:text-xl font-medium text-brand-gold mb-10 tracking-[0.2em] uppercase drop-shadow-sm">
              {t("heritageHeadline")}
            </p>

            <p className="text-lg sm:text-xl lg:text-2xl text-white/90 mb-12 leading-relaxed max-w-3xl mx-auto font-medium drop-shadow-lg">
              {t("description")}
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 lg:mb-20">
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

            {/* Trust Bar - Adjusted for mobile alignment */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-6 gap-x-8 lg:gap-8 border-t border-white/20 pt-12 items-start text-left">
              <TrustItem text={tb("since")} />
              <TrustItem text={tb("validation")} />
              <TrustItem text={tb("formulation")} />
              <TrustItem text={tb("approach")} />
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Subtle Bottom Blend */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-linear-to-t from-brand-bg to-transparent opacity-40 z-10" />
    </section>
  );
}

function TrustItem({ text }: { text: string }) {
  return (
    <div className="flex items-start space-x-3 group text-left">
      <CheckCircle2 className="w-5 h-5 text-brand-gold shrink-0 transition-transform group-hover:scale-110 mt-0.5" />
      <span className="text-sm lg:text-base font-medium text-white/70 tracking-wide leading-snug">
        {text}
      </span>
    </div>
  );
}
