"use client";

import { Check } from "lucide-react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export function ScientificProof() {
  const t = useTranslations("ScientificProof");

  const findings = [
    t("finding1"),
    t("finding2"),
    t("finding3"),
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ScholarlyArticle",
    "name": "Laboratory Evaluation of Anti-Inflammatory Efficacy in YAPCHANKOR Clinical Formulations",
    "author": {
      "@type": "Organization",
      "name": "Monash University Research Collaboration"
    },
    "headline": t("monashStudy"),
    "description": t("description"),
    "about": [
      {
        "@type": "MedicalCondition",
        "name": "Chronic Inflammation"
      },
      {
        "@type": "MedicalProcedure",
        "name": "Phytotherapy"
      }
    ]
  };

  return (
    <section className="bg-white py-16 lg:py-32 relative overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-3xl lg:text-5xl font-bold text-brand-teal leading-tight mb-4 text-center lg:text-left">
              {t("title")}
            </h2>
            <p className="text-xl sm:text-2xl lg:text-3xl font-medium text-brand-gold uppercase tracking-[0.2em] mb-10 text-center lg:text-left">
              {t("heritage")}
            </p>

            <div className="space-y-6 text-lg lg:text-xl text-brand-teal-deep/80 mb-12 leading-relaxed font-medium text-center lg:text-left">
              <p>{t("description")}</p>
              <p className="text-brand-teal-deep/70 italic">
                {t("monashStudy")}
              </p>
            </div>

            <div className="pt-8">
              <h4 className="text-brand-teal font-bold text-xl mb-8 text-center lg:text-left">{t("findingsTitle")}</h4>
              <div className="flex flex-col space-y-4">
                {findings.map((finding, i) => (
                  <FindingItem key={i} text={finding} />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Visuals */}
          <div className="w-full space-y-12">
            {/* ... visuals section ... */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="bg-brand-bg rounded-2xl p-8 shadow-clinical group overflow-hidden flex items-center justify-center"
            >
              <img
                src="/images/painfix_professional.webp"
                alt="PainFix Recovery Range - Clinical Formulation"
                className="w-full h-auto max-h-120 object-contain transition-transform duration-500 group-hover:scale-105"
              />
            </motion.div>

            {/* Monash Graphics - Hidden on mobile for optimization */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="hidden lg:block bg-brand-bg rounded-2xl p-6 lg:p-8 border border-brand-teal/5 shadow-clinical"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="bg-white p-2 rounded-lg shadow-sm">
                  <img
                    src="/images/monash_test_1.png"
                    alt="Monash Study Result 1"
                    className="w-full h-auto object-contain"
                  />
                </div>
                <div className="bg-white p-2 rounded-lg shadow-sm">
                  <img
                    src="/images/monash_test_2.png"
                    alt="Monash Study Result 2"
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
              <p className="text-sm font-bold text-brand-teal/60 uppercase tracking-widest leading-relaxed text-center lg:text-left">
                {t("graphicCaption")}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FindingItem({ text }: { text: string }) {
  return (
    <div className="flex items-center space-x-4 group">
      <div className="shrink-0 w-6 h-6 rounded-full bg-brand-teal/10 flex items-center justify-center group-hover:bg-brand-teal/20 transition-colors">
        <Check className="w-4 h-4 text-brand-teal" strokeWidth={3} />
      </div>
      <p className="text-lg text-brand-teal-deep/90 font-medium">
        {text}
      </p>
    </div>
  );
}
