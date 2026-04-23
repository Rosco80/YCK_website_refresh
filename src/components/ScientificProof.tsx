import { Check } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Link } from "@/i18n/routing";

export function ScientificProof({ hideLinks = false }: { hideLinks?: boolean } = {}) {
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
          <div>
            <h2 className="text-h3 text-brand-teal mb-4 text-center lg:text-left">
              {t("title")}
            </h2>
            <p className="text-label text-xl lg:text-2xl mb-10 text-center lg:text-left">
              {t("heritage")}
            </p>

            <div className="text-body-lg text-brand-teal-deep/80 mb-12 text-center lg:text-left space-y-6">
              <p>{t("description")}</p>
              <p className="text-brand-teal-deep/70 italic">
                {t("monashStudy")}
              </p>
            </div>

            <div className="pt-8">
              <h4 className="text-h4 text-brand-teal mb-8 text-center lg:text-left">{t("findingsTitle")}</h4>
              <div className="flex flex-col space-y-4">
                {findings.map((finding, i) => (
                  <FindingItem key={i} text={finding} />
                ))}
              </div>
            </div>
            </div>

          {/* Right Visuals */}
          <div className="w-full space-y-12">
            {/* ... visuals section ... */}
            <div
              className="bg-brand-bg rounded-2xl p-8 shadow-clinical group overflow-hidden flex items-center justify-center"
            >
              <Image
                src="/images/painfix_professional.webp"
                alt="PainFix Recovery Range - Clinical Formulation"
                width={800}
                height={800}
                className="w-full h-auto max-h-120 object-contain transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Monash Graphics - Hidden on mobile for optimization */}
            <div
              className="hidden lg:block bg-brand-bg rounded-2xl p-6 lg:p-8 border border-brand-teal/5 shadow-clinical"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="bg-white p-2 rounded-lg shadow-sm">
                  <Image
                    src="/images/monash_test_1.png"
                    alt="Monash Study Result 1"
                    width={400}
                    height={400}
                    className="w-full h-auto object-contain"
                  />
                </div>
                <div className="bg-white p-2 rounded-lg shadow-sm">
                  <Image
                    src="/images/monash_test_2.png"
                    alt="Monash Study Result 2"
                    width={400}
                    height={400}
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
              <p className="text-label text-brand-teal/60 text-center lg:text-left">
                {hideLinks ? (
                  <span className="inline-flex items-center">
                    {t("graphicCaption")}
                  </span>
                ) : (
                  <Link href="/formulations" className="hover:text-brand-gold transition-colors inline-flex items-center group/link">
                    {t("graphicCaption")}
                    <span className="ml-2 opacity-0 group-hover/link:opacity-100 transition-opacity">→</span>
                  </Link>
                )}
              </p>
            </div>
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
      <p className="text-body text-brand-teal-deep/90 font-bold">
        {text}
      </p>
    </div>
  );
}
