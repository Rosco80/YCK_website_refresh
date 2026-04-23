"use client";

import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Link } from "@/i18n/routing";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { Button } from "./ui/button";

export function RollingHook({ hideLinks = false }: { hideLinks?: boolean } = {}) {
  const t = useTranslations("RollingHook");
  const tw = useTranslations("WhatsApp");
  const [index, setIndex] = useState(0);

  const conditions = [
    t("condition1"),
    t("condition2"),
    t("condition3"),
    t("condition4"),
    t("condition5"),
    t("condition6"),
  ];

  const conditionMap: Record<string, string> = {
    "chronic back pain": "/conditions/back-pain",
    "knee osteoarthritis": "/conditions/osteoarthritis-knee",
    "frozen shoulder": "/conditions/frozen-shoulder",
    "sciatica": "/conditions/sciatica",
    "slipped disc": "/conditions/slipped-disc",
    "hip pain": "/conditions/hip-pain",
    "sports injuries": "/solutions/sports-injury",
    "post-surgery rehab": "/solutions/post-surgery-rehab",
    "chronic pain": "/solutions/chronic-pain",
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    "name": "YAPCHANKOR Physiotherapy & Hub",
    "medicalSpecialty": ["Physiotherapy", "TraditionalChineseMedicine"],
    "knowsAbout": conditions.map(condition => ({
      "@type": "MedicalCondition",
      "name": condition,
      "associatedAnatomy": {
        "@type": "AnatomicalStructure",
        "name": condition.includes("back") ? "Spine" : 
              condition.includes("knee") ? "Knee" : 
              condition.includes("shoulder") ? "Shoulder" : 
              condition.includes("hip") ? "Hip" : "Musculoskeletal System"
      }
    }))
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev: number) => (prev + 1) % conditions.length);
    }, 3000); // 3 seconds per condition
    return () => clearInterval(timer);
  }, [conditions.length]);

  return (
    <section className="bg-brand-bg py-16 lg:py-24 border-y border-brand-teal/5 relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Static Heading */}
          <h2 className="text-h2 text-brand-teal/40 -mb-3 lg:-mb-10">
            {t("staticHeading")}
          </h2>

          {/* Rotating Condition */}
          <div className="h-24 lg:h-40 flex items-center justify-center overflow-hidden relative mb-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
              >
                <Link
                  href={conditionMap[conditions[index]] || "/conditions"}
                  className="text-h2 text-brand-teal capitalize leading-tight px-4 hover:text-brand-teal-deep transition-colors"
                >
                  {conditions[index]}
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Subtext */}
          <div className="mb-12 max-w-4xl mx-auto space-y-8">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="text-lead italic"
            >
              {t("subtext")}
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="text-body-lg text-brand-teal-deep/60 max-w-3xl mx-auto"
            >
              {t("secondaryText")}
            </motion.p>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <Button 
              asChild
              className="rounded-full px-12 h-14 text-sm uppercase tracking-widest font-bold shadow-brand-premium"
            >
              <a href={hideLinks ? "#booking-form" : getWhatsAppUrl(tw("conditionMessage", { condition: conditions[index] }))} target={hideLinks ? "_self" : "_blank"} rel="noopener noreferrer" id="cta_rolling_hook_click">
                {t("cta")}
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
