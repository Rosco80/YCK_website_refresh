"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export function Differentiation() {
  const t = useTranslations("Differentiation");

  const points = [
    t("point1"),
    t("point2"),
    t("point3"),
  ];

  return (
    <section className="bg-white py-16 lg:py-40 overflow-hidden">
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

              <div className="space-y-6 lg:space-y-8 text-base lg:text-lg text-brand-teal-deep/80 leading-relaxed font-medium">
                <p>{t("description")}</p>
                
                <div className="space-y-6 pt-4 border-t border-brand-teal/10">
                  <p className="text-brand-teal font-bold">{t("transition")}</p>
                  
                  <ul className="space-y-4">
                    {points.map((point, i) => (
                      <li key={i} className="flex items-center space-x-3">
                        <CheckCircle2 className="w-6 h-6 text-brand-gold shrink-0" />
                        <span className="capitalize">{point}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <p className="text-brand-teal font-bold pt-4">{t("conclusion")}</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Visual */}
          <div className="lg:w-1/2 w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-4/5 rounded-3xl overflow-hidden shadow-clinical"
            >
              <img 
                src="/images/differentiation_rehab.png" 
                alt="Structured Rehabilitation at YAPCHANKOR" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-brand-teal-deep/10 to-transparent" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
