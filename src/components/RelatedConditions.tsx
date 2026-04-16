"use client";

import { Link } from "@/i18n/routing";
import { ChevronRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { getRelatedConditions, getClusterTitle, CLUSTER_MAP } from "@/data/link-clusters";

interface RelatedConditionsProps {
  currentSlug: string;
}

export function RelatedConditions({ currentSlug }: RelatedConditionsProps) {
  const t = useTranslations("Conditions");
  const relatedSlugs = getRelatedConditions(currentSlug);
  const clusterType = CLUSTER_MAP[currentSlug]?.cluster;
  const clusterTitle = clusterType ? getClusterTitle(clusterType) : t("relatedConditionsTitle");

  if (relatedSlugs.length === 0) return null;

  return (
    <section className="py-24 bg-brand-teal/5 border-t border-brand-teal/10">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-h3 text-brand-teal-deep">
              {clusterTitle}
            </h2>
          </div>
          
          <div className="grid grid-cols-1 gap-4">
            {relatedSlugs.map((slug, idx) => {
              // Determine if it's a solution or condition for the link
              const isSolution = CLUSTER_MAP[slug]?.cluster === 'solutions';
              const basePath = isSolution ? '/solutions' : '/conditions';
              
              return (
                <Link
                  key={slug}
                  href={`${basePath}/${slug}`}
                  className="group flex items-center justify-between p-6 bg-white rounded-2xl border border-brand-teal/10 hover:border-brand-gold/30 hover:bg-brand-gold/5 transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  <div className="flex flex-col">
                    <span className="text-label text-brand-gold text-xs mb-1 uppercase tracking-widest">
                      {isSolution ? 'Specialized Solution' : 'Related Condition'}
                    </span>
                    <span className="text-xl font-bold text-brand-teal-deep group-hover:text-brand-teal transition-colors">
                      {t(`list.${slug}.title`)}
                    </span>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-brand-bg flex items-center justify-center text-brand-gold group-hover:bg-brand-gold group-hover:text-white transition-all">
                    <ChevronRight className="w-5 h-5 -rotate-90 group-hover:rotate-0 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
