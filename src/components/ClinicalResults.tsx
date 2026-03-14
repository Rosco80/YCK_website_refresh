"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";

export function ClinicalResults() {
  const t = useTranslations("ClinicalResults");

  const results = [
    {
      title: t("kneeTitle"),
      problem: t("kneeProblem"),
      result: t("kneeResult"),
      image: "/images/outcome_knee.png",
    },
    {
      title: t("backTitle"),
      problem: t("backProblem"),
      result: t("backResult"),
      image: "/images/outcome_back.png",
    },
    {
      title: t("shoulderTitle"),
      problem: t("shoulderProblem"),
      result: t("shoulderResult"),
      image: "/images/outcome_shoulder.png",
    },
  ];

  return (
    <section className="bg-white py-16 lg:py-40">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-24">
          <motion.h2 
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-2xl sm:text-3xl lg:text-5xl font-bold text-brand-teal mb-6"
          >
            {t("title")}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-base lg:text-xl text-brand-teal-deep/60 font-medium"
          >
            {t("subtitle")}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-12 lg:mb-24">
          {results.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group bg-brand-bg rounded-3xl overflow-hidden shadow-clinical flex flex-col h-full ring-1 ring-brand-teal/5"
            >
              <div className="aspect-4/3 overflow-hidden relative">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-brand-teal-deep/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="p-6 lg:p-10 flex flex-col grow">
                <h3 className="text-lg lg:text-2xl font-bold text-brand-teal mb-4 leading-tight">
                  {item.title}
                </h3>
                <div className="space-y-4 mb-8">
                  <p className="text-brand-teal-deep/60 font-medium italic text-sm lg:text-base">
                    "{item.problem}"
                  </p>
                  <div className="flex items-start space-x-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-brand-gold shrink-0" />
                    <p className="text-brand-teal font-bold leading-snug text-sm lg:text-base">
                      {item.result}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <Button 
            className="rounded-full px-12 h-14 lg:h-16 text-sm lg:text-lg uppercase tracking-widest font-bold shadow-xl hover:shadow-2xl transition-all duration-300"
            id="cta_clinical_results_assessment"
          >
            {t("cta")}
            <ChevronRight className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
