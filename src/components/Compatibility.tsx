"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Stethoscope, Scan, Activity } from "lucide-react";

export function Compatibility() {
  const t = useTranslations("Compatibility");

  const trustIcons = [
    { icon: <Stethoscope className="w-8 h-8" />, label: t("physio") },
    { icon: <Scan className="w-8 h-8" />, label: t("imaging") },
    { icon: <Activity className="w-8 h-8" />, label: t("rehab") },
  ];

  return (
    <section className="bg-brand-bg py-24 lg:py-40">
      <div className="container mx-auto px-6 text-center">
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

            <div className="flex flex-wrap justify-center gap-8 lg:gap-16">
              {trustIcons.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col items-center space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-white shadow-clinical flex items-center justify-center text-brand-teal/60">
                    {item.icon}
                  </div>
                  <span className="text-sm font-bold text-brand-teal/40 uppercase tracking-widest">
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
