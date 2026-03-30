import { useTranslations } from "next-intl";
import Image from "next/image";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";

export function ClinicalResults() {
  const t = useTranslations("ClinicalResults");

  const results = [
    {
      title: t("kneeTitle"),
      problem: t("kneeProblem"),
      result: t("kneeResult"),
      image: "/images/outcome_knee_poster.webp",
    },
    {
      title: t("backTitle"),
      problem: t("backProblem"),
      result: t("backResult"),
      image: "/images/outcome_back_poster.webp",
    },
    {
      title: t("shoulderTitle"),
      problem: t("shoulderProblem"),
      result: t("shoulderResult"),
      image: "/images/outcome_shoulder_poster.webp",
    },
  ];

  return (
    <section className="bg-white py-16 lg:py-32">
      <div className="container mx-auto px-6 lg:px-8 text-center">
        <div
          className="text-center max-w-3xl mx-auto mb-12 lg:mb-24">
          <h2 
            className="text-2xl sm:text-3xl lg:text-5xl font-bold text-brand-teal mb-6"
          >
            {t("title")}
          </h2>
          <p 
            className="text-base lg:text-xl text-brand-teal-deep/60 font-medium"
          >
            {t("subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-12 lg:mb-24">
          {results.map((item, i) => (
            <div
              key={i}
              className="group bg-brand-bg rounded-3xl overflow-hidden shadow-clinical flex flex-col h-full ring-1 ring-brand-teal/5 text-left"
            >
              <div className="aspect-3/4 overflow-hidden relative bg-white p-4 flex items-center justify-center">
                <Image 
                  src={item.image} 
                  alt={item.title} 
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-contain transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-brand-teal-deep/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
              <div className="p-6 lg:p-10 flex flex-col grow">
                <h3 className="text-lg lg:text-2xl font-bold text-brand-teal mb-4 leading-tight">
                  {item.title}
                </h3>
                <div className="space-y-4">
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
            </div>
          ))}
        </div>

        <div 
          className="text-center"
        >
          <Button 
            className="rounded-full px-12 h-14 lg:h-16 text-sm lg:text-lg uppercase tracking-widest font-bold shadow-xl hover:shadow-2xl transition-all duration-300"
            id="cta_clinical_results_assessment"
          >
            {t("cta")}
            <ChevronRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
