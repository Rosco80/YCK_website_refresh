"use client";

import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { 
  ChevronRight, 
} from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { conditionsData, ConditionSlug } from "@/data/conditions";

export function ConditionsGrid() {
  const t = useTranslations("Conditions");
  const th = useTranslations("Home.ConditionsGrid");

  const mainConditions: { slug: ConditionSlug; isSolution?: boolean }[] = [
    { slug: "back-pain" },
    { slug: "slipped-disc" },
    { slug: "sciatica" },
    { slug: "knee-pain" },
    { slug: "frozen-shoulder" },
    { slug: "sports-injury", isSolution: true },
    { slug: "post-surgery-rehab", isSolution: true },
    { slug: "chronic-pain", isSolution: true },
  ];

  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16 lg:mb-24">
          <h2 className="text-h3 text-brand-teal mb-6">
             {th("title") || "Conditions We Treat"}
          </h2>
          <p className="text-body-lg text-brand-teal-deep/60">
            {th("subtitle") || "Specialized clinical care shaped by 40 years of treatment experience."}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-8">
          {mainConditions.map((condition, idx) => {
            const basePath = condition.isSolution ? "/solutions" : "/conditions";
            
            return (
              <motion.div
                key={condition.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
              >
                <Link
                  href={`${basePath}/${condition.slug}`}
                  className="group block h-full p-8 border border-brand-teal/10 rounded-3xl bg-brand-bg/30 hover:bg-brand-teal hover:border-brand-teal transition-all duration-500 text-left"
                >
                  <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center text-brand-teal group-hover:bg-brand-gold group-hover:text-white mb-6 shadow-sm transition-all duration-500 overflow-hidden p-2">
                    <Image 
                      src={conditionsData[condition.slug].iconPath} 
                      alt="" 
                      width={40} 
                      height={40} 
                      className="object-contain transition-all duration-500 group-hover:brightness-0 group-hover:invert"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-brand-teal-deep group-hover:text-white transition-colors mb-4 leading-tight">
                    {t(`list.${condition.slug}.title`)}
                  </h3>
                  <div className="flex items-center text-brand-teal group-hover:text-brand-gold font-bold text-sm tracking-widest uppercase transition-colors">
                    <span>{th("viewMore") || "Explore"}</span>
                    <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
