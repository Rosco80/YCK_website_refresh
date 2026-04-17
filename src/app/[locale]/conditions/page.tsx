import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { conditionSlugs, conditionsData } from "@/data/conditions";

export const metadata = {
  title: "Conditions We Treat | YAPCHANKOR",
  description: "Explore the medical conditions we successfully treat using integrating Shaolin-based physiotherapy methods.",
};

export default function ConditionsIndex() {
  const t = useTranslations("Conditions");

  return (
    <div className="min-h-screen flex flex-col bg-brand-bg">
      <Header />
      <main className="grow">
        {/* Abstract Hero Section */}
        <section className="pt-40 pb-20 lg:pt-56 lg:pb-32 bg-brand-teal-deep text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-b from-brand-teal-deep/80 via-transparent to-brand-teal-deep z-10" />
          <div className="absolute inset-0 z-0 opacity-10 flex flex-wrap gap-8 justify-center mix-blend-overlay">
            {/* Just an abstract background pattern replacing images */}
            {Array.from({ length: 48 }).map((_, i) => (
              <div key={i} className="w-24 h-24 border border-white/20 rounded-full shrink-0" />
            ))}
          </div>

          <div className="container mx-auto px-6 relative z-20 text-center">
            <h1 className="text-display text-4xl lg:text-7xl mb-6 drop-shadow-lg">
              {t("title")}
            </h1>
            <p className="text-lead text-brand-gold max-w-4xl mx-auto">
              {t("subtitle")}
            </p>
          </div>
        </section>

        {/* Dynamic Navigational Grid */}
        <section className="py-24 bg-brand-bg">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {conditionSlugs.map((slug) => {
                const isSolution = ["sports-injury", "post-surgery-rehab", "chronic-pain"].includes(slug);
                const basePath = isSolution ? "/solutions" : "/conditions";
                
                return (
                  <Link 
                    key={slug}
                    href={`${basePath}/${slug}`}
                    className="bg-white p-8 lg:p-10 rounded-[2.5rem] border border-brand-teal/5 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group flex flex-col h-full"
                  >
                    <div className="w-16 h-16 bg-brand-teal/5 rounded-2xl flex items-center justify-center text-brand-teal mb-8 group-hover:bg-brand-teal group-hover:text-white transition-colors duration-300 shadow-inner overflow-hidden p-2">
                      <Image 
                        src={conditionsData[slug].iconPath} 
                        alt="" 
                        width={40} 
                        height={40} 
                        className="object-contain transition-all duration-300 group-hover:brightness-0 group-hover:invert"
                      />
                    </div>
                    <h3 className="text-h4 text-brand-teal-deep mb-4 line-clamp-2">
                      {t(`list.${slug}.title`)}
                    </h3>
                    <p className="text-body text-brand-teal-deep/60 mb-8 grow line-clamp-4">
                      {t(`list.${slug}.desc`)}
                    </p>
                    <div className="text-label text-brand-teal mt-auto pt-6 border-t border-brand-teal/10 w-full flex items-center space-x-2">
                      <span>{t("viewTreatment")}</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
