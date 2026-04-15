import { useTranslations } from "next-intl";
import Image from "next/image";

export function Compatibility() {
  const t = useTranslations("Compatibility");

  const trustIcons = [
    { icon: "/images/Screenshot_2026-04-16_003855-removebg-preview.png", label: t("physio") },
    { icon: "/images/Screenshot_2026-03-19_211529-removebg-preview.webp", label: t("imaging") },
    { icon: "/images/Screenshot_2026-03-19_211457-removebg-preview.webp", label: t("rehab") },
  ];

  return (
    <section className="bg-brand-bg py-16 lg:py-24">
      <div className="container mx-auto px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-brand-teal mb-8 leading-tight">
              {t("title")}
            </h2>
            
            <div className="space-y-6 text-lg lg:text-xl text-brand-teal-deep/70 mb-16 leading-relaxed font-medium">
              <p>{t("description")}</p>
              <p>{t("support")}</p>
            </div>

            <div className="flex flex-wrap justify-center gap-12 lg:gap-24">
              {trustIcons.map((item, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center space-y-5"
                >
                  <div className="w-20 h-20 rounded-full bg-white shadow-clinical flex items-center justify-center transition-transform duration-300 hover:scale-110">
                    <Image
                      src={item.icon}
                      alt={item.label}
                      width={56}
                      height={56}
                      className="w-14 h-14 object-contain opacity-90 brightness-110 drop-shadow-[0_2px_2px_rgba(0,0,0,0.1)]"
                    />
                  </div>
                  <span className="text-sm font-bold text-brand-teal/50 uppercase tracking-[0.2em] leading-relaxed">
                    {item.label}
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
