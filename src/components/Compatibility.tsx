"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export function Compatibility() {
  const t = useTranslations("Compatibility");

  const trustIcons = [
    { icon: "/Screenshot_2026-03-19_211516-removebg-preview.png", label: t("physio") },
    { icon: "/Screenshot_2026-03-19_211529-removebg-preview.png", label: t("imaging") },
    { icon: "/Screenshot_2026-03-19_211457-removebg-preview.png", label: t("rehab") },
  ];

  return (
    <section className="bg-brand-bg py-16 lg:py-24">
      <div className="container mx-auto px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-brand-teal mb-8 leading-tight">
              {t("title")}
            </h2>
            
            <div className="space-y-6 text-lg lg:text-xl text-brand-teal-deep/70 mb-16 leading-relaxed font-medium">
              <p>{t("description")}</p>
              <p>{t("support")}</p>
            </div>

            <div className="flex flex-wrap justify-center gap-12 lg:gap-24">
              {trustIcons.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col items-center space-y-5"
                >
                  <div className="w-20 h-20 rounded-full bg-white shadow-clinical flex items-center justify-center transition-transform duration-300 hover:scale-110">
                    <img 
                      src={item.icon} 
                      alt={item.label}
                      className="w-14 h-14 object-contain opacity-90 brightness-110 drop-shadow-[0_2px_2px_rgba(0,0,0,0.1)]" 
                    />
                  </div>
                  <span className="text-sm font-bold text-brand-teal/50 uppercase tracking-[0.2em] leading-relaxed">
                    {item.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
