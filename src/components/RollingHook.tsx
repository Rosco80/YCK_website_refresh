"use client";

import { useTranslations, useLocale } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Link } from "@/i18n/routing";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { Button } from "./ui/button";
import { useSiteSettings } from "./SiteSettingsProvider";

export function RollingHook({ 
  hideLinks = false,
  primaryCtaDestination = 'form',
  whatsappMessage,
  whatsappNumber
}: { 
  hideLinks?: boolean;
  primaryCtaDestination?: string;
  whatsappMessage?: string | { en?: string, ms?: string, zh?: string };
  whatsappNumber?: string;
} = {}) {
  const t = useTranslations("RollingHook");
  const tw = useTranslations("WhatsApp");
  const [index, setIndex] = useState(0);
  const siteSettings = useSiteSettings();

  const conditions = [
    t("condition1"),
    t("condition2"),
    t("condition3"),
    t("condition4"),
    t("condition5"),
    t("condition6"),
  ];

  const conditionSlugs = [
    "back-pain",            // condition1 (chronic back pain)
    "osteoarthritis-knee",  // condition2 (knee osteoarthritis)
    "frozen-shoulder",      // condition3 (frozen shoulder)
    "sciatica",             // condition4 (sciatica)
    "slipped-disc",         // condition5 (slipped disc)
    "hip-pain"              // condition6 (hip pain)
  ];

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

  const currentSlug = conditionSlugs[index];
  const locale = useLocale() as 'en' | 'ms' | 'zh';
  const override = siteSettings?.websiteWhatsappMessages?.localizedConditionOverrides?.find(
    (o: any) => o.condition === currentSlug
  );
  const conditionTemplate = siteSettings?.websiteWhatsappMessages?.localizedConditionMessage?.[locale];
  const overrideMessage = override?.message?.[locale];
  
  const localizedCustomMessage = typeof whatsappMessage === 'string' 
    ? whatsappMessage 
    : whatsappMessage?.[locale as keyof typeof whatsappMessage];

  const finalMessage = localizedCustomMessage 
    ? localizedCustomMessage 
    : (overrideMessage 
      ? overrideMessage 
      : (conditionTemplate 
          ? conditionTemplate.replace('{condition}', conditions[index])
          : tw("conditionMessage", { condition: conditions[index] })));

  const whatsappUrl = getWhatsAppUrl(finalMessage, whatsappNumber);
  const ctaHref = hideLinks && primaryCtaDestination !== 'whatsapp' ? '#booking-form' : whatsappUrl;
  const target = hideLinks && primaryCtaDestination !== 'whatsapp' ? '_self' : '_blank';

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
                  href={`/conditions/${currentSlug}`}
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
              <a href={ctaHref} target={target} rel="noopener noreferrer" id="cta_rolling_hook_click">
                {t("cta")}
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
