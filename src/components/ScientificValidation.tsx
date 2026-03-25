"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Microscope, Beaker, Activity } from "lucide-react";

export function ScientificValidation() {
  const t = useTranslations("ScientificValidation");

  return (
    <section className="bg-brand-bg py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.03] z-0">
        <img src="/images/science.png" alt="" className="w-full h-full object-cover" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-4xl lg:text-6xl font-bold text-brand-teal mb-8 tracking-tight">
              {t("headline")}
            </h2>
            <p className="text-xl text-brand-teal-deep/70 leading-relaxed font-medium">
              {t("description")}
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <ValidationCard 
            icon={<Microscope className="w-8 h-8" />}
            title={t("monashTitle")}
            text={t("monashText")}
            delay={0}
          />
          <ValidationCard 
            icon={<Activity className="w-8 h-8" />}
            title={t("markerTitle")}
            text={t("markerText")}
            delay={0.1}
          />
          <ValidationCard 
            icon={<Beaker className="w-8 h-8" />}
            title={t("recoveryTitle")}
            text={t("recoveryText")}
            delay={0.2}
          />
        </div>

        {/* Citation Box */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 p-8 rounded-2xl bg-brand-teal/5 border border-brand-teal/10 text-sm italic text-brand-teal-deep/60 text-center"
        >
          <div className="flex flex-col items-center space-y-2">
            <span className="font-bold text-brand-teal uppercase tracking-widest text-[10px]">Clinical Research Citation</span>
            <p>Monash University Laboratory Research (Phytotherapy Division): "Anti-inflammatory and Tissue Recovery Efficacy of Proprietary Clinical Formulations in YAPCHANKOR Treatment Protocols."</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ValidationCard({ icon, title, text, delay }: { icon: React.ReactNode; title: string; text: string; delay: number }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="p-10 rounded-3xl bg-white border border-brand-teal/5 shadow-clinical hover:shadow-clinical-hover transition-all hover:-translate-y-1 group"
    >
      <div className="text-brand-gold mb-8 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-brand-teal mb-4 leading-tight tracking-tight">
        {title}
      </h3>
      <p className="text-brand-teal-deep/70 leading-relaxed font-medium">
        {text}
      </p>
    </motion.div>
  );
}
