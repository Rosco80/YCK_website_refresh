"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { FlaskConical, History } from "lucide-react";

export function ClinicalFormulation() {
  const t = useTranslations("ClinicalFormulation");

  return (
    <section className="bg-brand-teal-deep text-white py-24 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-4 relative">
        {/* Background Accent */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 bg-brand-gold/5 rounded-full blur-[120px] -z-10" />

        <div className="max-w-4xl mx-auto text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl lg:text-7xl font-bold mb-8 tracking-tight"
          >
            {t("headline")}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-xl text-white/70 leading-relaxed font-medium max-w-2xl mx-auto"
          >
            {t("description")}
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative p-10 rounded-3xl bg-white/5 border border-white/10 flex flex-col items-center text-center group hover:bg-white/10 transition-colors overflow-hidden"
          >
            <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity">
              <img src="/images/heritage.png" alt="" className="w-full h-full object-cover" />
            </div>
            <div className="relative z-10 w-16 h-16 rounded-2xl bg-brand-gold/20 flex items-center justify-center mb-6 text-brand-gold group-hover:scale-110 transition-transform">
              <History size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-4 relative z-10">{t("heritageTitle")}</h3>
            <p className="text-white/70 leading-relaxed relative z-10">
              {t("heritageText")}
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative p-10 rounded-3xl bg-white/5 border border-white/10 flex flex-col items-center text-center group hover:bg-white/10 transition-colors overflow-hidden"
          >
            <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity">
              <img src="/images/painfix.png" alt="" className="w-full h-full object-cover" />
            </div>
            <div className="relative z-10 w-16 h-16 rounded-2xl bg-brand-teal/40 flex items-center justify-center mb-6 text-brand-teal group-hover:scale-110 transition-transform">
              <FlaskConical size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-4 relative z-10">{t("modernTitle")}</h3>
            <p className="text-white/70 leading-relaxed relative z-10">
              {t("modernText")}
            </p>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <Button 
            variant="outline"
            className="border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-brand-teal-deep rounded-full px-10 h-14 text-lg font-bold transition-all"
          >
            {t("cta")}
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
