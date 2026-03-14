"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Hand, Activity, FlaskConical } from "lucide-react";

export function WhyChooseUs() {
  const t = useTranslations("WhyChooseUs");

  const features = [
    {
      icon: <Hand className="w-10 h-10 lg:w-12 lg:h-12 text-brand-teal mb-6" />,
      label: t("item1"),
    },
    {
      icon: <Activity className="w-10 h-10 lg:w-12 lg:h-12 text-brand-teal mb-6" />,
      label: t("item2"),
    },
    {
      icon: <FlaskConical className="w-10 h-10 lg:w-12 lg:h-12 text-brand-teal mb-6" />,
      label: t("item3"),
    },
  ];

  return (
    <section className="bg-brand-bg py-16 lg:py-40">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-[10px] lg:text-base font-bold text-brand-gold uppercase tracking-[0.25em] mb-6">
              {t("title")}
            </h2>
            
            <h3 className="text-3xl lg:text-5xl font-bold text-brand-teal mb-6 lg:mb-8 leading-tight">
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
                  <div className="p-8 rounded-full bg-white shadow-clinical mb-4 transition-transform group-hover:scale-110 duration-500">
                    {feature.icon}
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
