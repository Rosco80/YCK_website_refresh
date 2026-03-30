import { useTranslations } from "next-intl";
import Image from "next/image";

export function WhyChooseUs() {
  const t = useTranslations("WhyChooseUs");

  const features = [
    {
      icon: "/images/manual therapy.webp",
      label: t("item1"),
    },
    {
      icon: "/images/structuredrehab.webp",
      label: t("item2"),
    },
    {
      icon: "/images/clinicalformulation.webp",
      label: t("item3"),
    },
  ];

  return (
    <section className="bg-brand-bg py-16 lg:py-24 border-y border-brand-teal/5 relative">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-6xl mx-auto">
          <div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-medium text-brand-gold uppercase tracking-[0.2em] mb-10">
              {t("title")}
            </h2>
            
            <h3 className="text-2xl lg:text-4xl font-bold text-brand-teal mb-8 lg:mb-12 leading-tight max-w-5xl mx-auto">
              {t("subtitle")}
            </h3>

            <p className="text-base lg:text-xl text-brand-teal-deep/70 mb-12 lg:mb-20 max-w-3xl mx-auto leading-relaxed font-medium">
              {t("description")}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
              {features.map((feature, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center group"
                >
                  <div className="w-40 h-40 lg:w-48 lg:h-48 rounded-full bg-white shadow-clinical mb-4 transition-transform group-hover:scale-105 duration-500 flex items-center justify-center p-8 relative">
                    <Image 
                      src={feature.icon} 
                      alt={feature.label}
                      fill
                      sizes="192px"
                      className="object-contain mix-multiply p-8" 
                    />
                  </div>
                  <span className="text-sm lg:text-base font-bold text-brand-teal-deep uppercase tracking-widest mt-4">
                    {feature.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
