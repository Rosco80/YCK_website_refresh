"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

export function ScientificProof() {
  const t = useTranslations("ScientificProof");

  const findings = [
    t("finding1"),
    t("finding2"),
    t("finding3"),
  ];

  return (
    <section className="bg-white py-16 lg:py-40">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          {/* Left Content */}
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2 className="text-3xl lg:text-5xl font-bold text-brand-teal leading-tight mb-4">
                {t("title")}
              </h2>
              <p className="text-sm sm:text-base lg:text-lg font-bold text-brand-gold uppercase tracking-[0.2em] mb-8">
                {t("heritage")}
              </p>

              <div className="space-y-6 text-base lg:text-lg text-brand-teal-deep/80 leading-relaxed font-medium mb-10 lg:mb-12">
                <p>{t("description")}</p>
                <p>{t("monashStudy")}</p>
              </div>

              <div className="space-y-6">
                <h4 className="text-brand-teal font-bold text-xl">{t("findingsTitle")}</h4>
                <ul className="space-y-4">
                  {findings.map((finding, i) => (
                    <li key={i} className="flex items-start space-x-3 text-brand-teal-deep/90">
                      <div className="mt-1 bg-brand-teal/10 p-1 rounded-full shrink-0">
                        <Check className="w-4 h-4 text-brand-teal" />
                      </div>
                      <span className="text-base lg:text-lg">{finding}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>

          {/* Right Visuals */}
          <div className="lg:w-1/2 w-full space-y-12">
            {/* PainFix Product Single Image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="bg-brand-bg rounded-2xl p-8 shadow-clinical group overflow-hidden flex items-center justify-center"
            >
              <img 
                src="/images/painfix_single.jpg" 
                alt="PainFix Recovery Range" 
                className="w-full h-auto max-h-100 object-contain transition-transform duration-500 group-hover:scale-105"
              />
            </motion.div>

            {/* Monash Graphic Placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="bg-brand-bg rounded-2xl p-8 lg:p-12 border border-brand-teal/5 text-center shadow-clinical"
            >
              <div className="aspect-video bg-white/50 rounded-xl mb-6 flex items-center justify-center border border-dashed border-brand-teal/20">
                <span className="text-brand-teal/40 italic font-medium">Simplified Monash Study Graphic</span>
              </div>
              <p className="text-sm font-bold text-brand-teal/60 uppercase tracking-widest leading-relaxed">
                {t("graphicCaption")}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
