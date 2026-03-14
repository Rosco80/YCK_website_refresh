"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export function Insights() {
  const t = useTranslations("Insights");

  const articles = [
    { 
      id: 1, 
      category: t("article1_cat"), 
      title: t("article1_title"), 
      description: t("article1_desc") 
    },
    { 
      id: 2, 
      category: t("article2_cat"), 
      title: t("article2_title"), 
      description: t("article2_desc") 
    },
    { 
      id: 3, 
      category: t("article3_cat"), 
      title: t("article3_title"), 
      description: t("article3_desc") 
    },
  ];

  return (
    <section className="bg-brand-bg py-16 lg:py-40">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 lg:mb-24 gap-8">
          <div className="max-w-3xl text-left">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl lg:text-5xl font-bold text-brand-teal mb-6"
            >
              {t("headline")}
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-base lg:text-xl text-brand-teal-deep/70 font-medium leading-relaxed"
            >
              {t("description")}
            </motion.p>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Button 
              className="rounded-full px-10 h-14 text-sm uppercase tracking-widest font-bold shadow-lg hover:shadow-xl transition-all duration-300"
              id="cta_publications_all"
            >
              {t("cta")}
            </Button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {articles.map((article, index) => (
            <motion.div 
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white p-8 lg:p-12 rounded-3xl shadow-clinical hover:shadow-xl transition-all duration-500 border border-brand-teal/5 flex flex-col h-full"
            >
              <div className="text-[10px] lg:text-xs font-bold text-brand-gold uppercase tracking-[0.2em] mb-6">
                {article.category}
              </div>
              <h3 className="text-lg lg:text-2xl font-bold text-brand-teal mb-4 lg:mb-6 leading-tight group-hover:text-brand-teal-deep transition-colors">
                {article.title}
              </h3>
              <p className="text-sm lg:text-base text-brand-teal-deep/60 mb-8 lg:mb-10 leading-relaxed font-medium">
                {article.description}
              </p>
              <div className="mt-auto flex items-center text-brand-teal font-bold tracking-widest uppercase text-[10px] lg:text-xs group-hover:gap-2 transition-all">
                <span>Read Article</span>
                <ArrowRight className="ml-2 w-4 h-4" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
