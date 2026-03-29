"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export function WhyChooseUs() {
  const t = useTranslations("WhyChooseUs");

  const features = [
    {
      icon: "/manual therapy.webp",
      label: t("item1"),
    },
    {
      icon: "/structuredrehab.webp",
      label: t("item2"),
    },
    {
      icon: "/clinicalformulation.webp",
      label: t("item3"),
    },
  ];

  return (
    <section className="bg-brand-bg py-16 lg:py-24 border-y border-brand-teal/5 relative">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-medium text-brand-gold uppercase tracking-[0.2em] mb-10">
              {t("title")}
            </h2>
            
            <h3 className="text-2xl lg:text-4xl font-bold text-brand-teal mb-8 lg:mb-12 leading-tight max-w-5xl mx-auto">
              {t("subtitle")}
            </h3>

            <p className="text-base lg:text-xl text-brand-teal-deep/70 mb-12 lg:mb-20 max-w-3xl mx-auto leading-relaxed font-medium">
              {t("description")}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
              {features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col items-center group"
                >
                  <div className="w-40 h-40 lg:w-48 lg:h-48 rounded-full bg-white shadow-clinical mb-4 transition-transform group-hover:scale-105 duration-500 flex items-center justify-center p-8">
                    <img 
                      src={feature.icon} 
                      alt={feature.label}
                      className="w-full h-full object-contain mix-multiply" 
                    />
                  </div>
                  <span className="text-sm lg:text-base font-bold text-brand-teal-deep uppercase tracking-widest mt-4">
                    {feature.label}
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
