"use client";

import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";

export function RollingHook() {
  const t = useTranslations("RollingHook");
  const [index, setIndex] = useState(0);

  const conditions = [
    t("condition1"),
    t("condition2"),
    t("condition3"),
    t("condition4"),
    t("condition5"),
    t("condition6"),
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % conditions.length);
    }, 3000); // 3 seconds per condition
    return () => clearInterval(timer);
  }, [conditions.length]);

  return (
    <section className="bg-brand-bg py-24 lg:py-40 border-y border-brand-teal/5 relative">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Static Heading */}
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-base lg:text-lg font-bold text-brand-teal/60 uppercase tracking-widest mb-8"
          >
            {t("staticHeading")}
          </motion.h2>

          {/* Rotating Condition */}
          <div className="h-32 lg:h-48 flex items-center justify-center overflow-hidden relative mb-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                className="text-4xl lg:text-8xl font-bold text-brand-teal capitalize leading-tight tracking-tight px-4"
              >
                {conditions[index]}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg lg:text-xl text-brand-teal-deep/60 mb-12 max-w-2xl mx-auto leading-relaxed font-medium italic"
          >
            {t("subtext")}
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <Button 
              className="rounded-full px-12 h-14 text-sm uppercase tracking-widest font-bold"
              id="cta_rolling_hook_click"
            >
              {t("cta")}
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
