"use client";

import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ArrowRight, Calendar } from "lucide-react";
import { Link } from "@/i18n/routing";
import { Insight } from "@/lib/substack";

export function Insights({ latestInsights }: { latestInsights?: Insight[] }) {
  const t = useTranslations("Insights");
  const locale = useLocale();

  const defaultArticles = [
    { 
      id: "1",
      slug: "#",
      category: t("article1_cat"), 
      title: t("article1_title"), 
      description: t("article1_desc") 
    },
    { 
      id: "2",
      slug: "#",
      category: t("article2_cat"), 
      title: t("article2_title"), 
      description: t("article2_desc") 
    },
    { 
      id: "3",
      slug: "#",
      category: t("article3_cat"), 
      title: t("article3_title"), 
      description: t("article3_desc") 
    },
  ];

  const LOCALE_MAP: Record<string, string> = { en: "en-MY", ms: "ms-MY", zh: "zh-MY" };
  const safeLocale = LOCALE_MAP[locale] ?? "en-MY";

  // Map dynamic insights to matching properties if available
  const articlesToRender = latestInsights && latestInsights.length > 0 
    ? latestInsights.map(insight => ({
        id: insight.slug,
        slug: `/insights/${insight.slug}`,
        category: new Date(insight.pubDate).toLocaleDateString(safeLocale, { year: 'numeric', month: 'long', day: 'numeric' }),
        title: insight.title,
        description: insight.snippet
      }))
    : defaultArticles;

  return (
    <section className="bg-brand-bg py-16 lg:py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 lg:mb-24 gap-8">
          <div className="max-w-3xl text-left">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-h3 text-brand-teal mb-6"
            >
              {t("headline")}
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-body-lg text-brand-teal-deep/70"
            >
              {t("description")}
            </motion.p>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Link href="/insights">
              <Button 
                className="rounded-full px-10 h-14 text-label bg-brand-teal text-white shadow-lg hover:shadow-xl transition-all duration-300"
                id="cta_publications_all"
              >
                {t("cta")}
              </Button>
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {articlesToRender.map((article, index) => (
            <Link href={article.slug} key={article.id} className="block group h-full">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 lg:p-12 rounded-3xl shadow-clinical hover:shadow-xl transition-all duration-500 border border-brand-teal/5 flex flex-col h-full"
              >
                <div className="text-label mb-6 flex items-center gap-2">
                  <Calendar size={14} className="group-hover:text-brand-teal transition-colors" /> {article.category}
                </div>
                <h3 className="text-h4 text-brand-teal mb-4 lg:mb-6 group-hover:text-brand-teal-deep transition-colors line-clamp-3">
                  {article.title}
                </h3>
                <p className="text-body text-brand-teal-deep/60 mb-8 lg:mb-10 line-clamp-4">
                  {article.description}
                </p>
                <div className="mt-auto flex items-center text-label group-hover:gap-2 transition-all">
                  <span>Read Article</span>
                  <ArrowRight className="ml-2 w-4 h-4" />
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

