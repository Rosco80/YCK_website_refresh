import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import Image from "next/image";

export function Differentiation() {
  const t = useTranslations("Differentiation");

  const points = [
    t("point1"),
    t("point2"),
    t("point3"),
  ];

  return (
    <section className="bg-white py-16 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          {/* Left Content */}
          <div className="lg:w-1/2">
            <div>
              <h2 className="text-h3 text-brand-teal mb-4">
                {t("title")}
              </h2>
              
              <p className="text-label text-xl md:text-2xl lg:text-3xl mb-10">
                {t("heritage")}
              </p>

              <div className="text-body-lg text-brand-teal-deep/80 space-y-6 lg:space-y-8">
                <p>
                  {t.rich("description", {
                    link: (chunks) => <Link href="/conditions" className="text-brand-gold font-bold hover:underline">{chunks}</Link>
                  })}
                </p>
                
                <div className="space-y-6 pt-4 border-t border-brand-teal/10">
                  <p className="text-brand-teal font-bold">{t("transition")}</p>
                  
                  <ul className="space-y-4">
                    {points.map((point, i) => (
                      <li key={i} className="flex items-center space-x-4">
                        <Image 
                          src="/images/lines_circle-removebg-preview.webp" 
                          alt="" 
                          width={24}
                          height={24}
                          className="w-5 h-5 lg:w-6 lg:h-6 shrink-0 object-contain drop-shadow-sm" 
                        />
                        <span className="capitalize">{point}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <p className="text-body-lg font-bold text-brand-teal pt-8 tracking-tight border-t border-brand-teal/10">
                    {t("conclusion")}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="lg:w-1/2 w-full">
            <div
              className="relative aspect-4/5 rounded-3xl overflow-hidden shadow-clinical"
            >
              <Image 
                src="/images/differentiation_rehab.png" 
                alt="Structured Rehabilitation at YAPCHANKOR" 
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover px-8 py-2"
              />
              <div className="absolute inset-0 bg-linear-to-t from-brand-teal-deep/10 to-transparent" />
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
