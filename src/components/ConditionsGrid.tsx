"use client";

import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { 
  Activity, 
  ChevronRight, 
  Smartphone as Spine, 
  Zap, 
  ShieldCheck, 
  Stethoscope as Knee,
  UserCheck as Shoulder,
  Flame as Injury 
} from "lucide-react";
import { motion } from "framer-motion";

export function ConditionsGrid() {
  const t = useTranslations("Conditions");
  const th = useTranslations("Home.ConditionsGrid");

  const mainConditions = [
    { slug: "back-pain", name: "Back Pain", icon: Spine },
    { slug: "slipped-disc", name: "Slipped Disc", icon: Activity },
    { slug: "sciatica", name: "Sciatica", icon: Zap },
    { slug: "knee-pain", name: "Knee Pain", icon: Knee },
    { slug: "frozen-shoulder", name: "Frozen Shoulder", icon: Shoulder },
    { slug: "sports-injury", name: "Sports Injury", icon: Injury, isSolution: true },
    { slug: "post-surgery-rehab", name: "Post-Surgery Rehab", icon: ShieldCheck, isSolution: true },
    { slug: "chronic-pain", name: "Chronic Pain", icon: Activity, isSolution: true },
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
            const Icon = condition.icon;
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
                  <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-brand-teal group-hover:bg-brand-gold group-hover:text-white mb-6 shadow-sm transition-all duration-500">
                    <Icon size={24} />
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
