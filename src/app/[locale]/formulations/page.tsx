import { getTranslations, setRequestLocale } from "next-intl/server";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Image from "next/image";
import { Check, Shield, Zap, Microscope, Activity, FlaskConical } from "lucide-react";
import { FinalCTA } from "@/components/FinalCTA";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Science" });
  
  return {
    title: `${t("heroTitle")} | YAPCHANKOR Clinical Science`,
    description: t("heroSubtitle"),
  };
}

export default async function SciencePage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "Science" });
  
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="grow">
        {/* Science Hero */}
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-brand-teal-deep text-white">
          <div className="absolute inset-0 z-0">
             <Image 
              src="/science_hero_clinical_1776349608829.png"
              alt="Clinical Science"
              fill
              priority
              className="object-cover opacity-30 grayscale saturate-0"
             />
             <div className="absolute inset-0 bg-linear-to-br from-brand-teal-deep via-brand-teal-deep/90 to-brand-teal/80" />
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl">
              <div className="text-label inline-flex items-center space-x-3 px-4 py-1.5 rounded-full border border-brand-gold/30 bg-brand-gold/10 mb-6 text-brand-gold">
                <FlaskConical size={14} className="mr-2" />
                <span>{t("heroLabel")}</span>
              </div>
              
              <h1 className="text-display text-white mb-8">
                {t("heroTitle")}
              </h1>
              
              <p className="text-lead text-white/80 max-w-2xl">
                {t("heroSubtitle")}
              </p>
            </div>
          </div>
        </section>

        {/* Heritage & Background */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row gap-12 items-center">
                <div className="md:w-1/2">
                  <h2 className="text-h3 text-brand-teal mb-6">{t("heritageTitle")}</h2>
                  <div className="text-body-lg text-brand-teal-deep/70 space-y-6">
                    <p>
                      The study of medicine and martial arts was deeply linked in ancient China. Our founder's ancestor, <strong>Yap Feng Qi</strong>, trained at the Shaolin Temple in the early 20th century, mastering secret formulations for the treatment of external injuries.
                    </p>
                    <p>
                      This lineage of healing was brought to Malaysia by <strong>Yap Shu Shen</strong>, a kung-fu grandmaster who treated patients for over 50 years before his son, <strong>Yap Chan Kor</strong>, established our first clinic in 1979.
                    </p>
                    <p>
                      Today, we blend this generational knowledge with modern physiotherapy to deliver results that are both faster and more cost-effective than conventional treatments alone.
                    </p>
                  </div>
                </div>
                <div className="md:w-1/2 relative aspect-square w-full max-w-sm">
                   <div className="absolute inset-0 bg-brand-bg rounded-3xl -rotate-3" />
                   <Image 
                    src="/images/heritage.png" 
                    alt="Clinical Heritage" 
                    fill 
                    className="object-cover rounded-3xl shadow-clinical rotate-3 transition-transform hover:rotate-0 duration-500" 
                   />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Monash Study Section */}
        <section className="py-24 bg-brand-bg relative overflow-hidden">
          <div className="container mx-auto px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-h3 text-brand-teal mb-4">{t("studyTitle")}</h2>
              <p className="text-label text-xl lg:text-2xl mb-8 text-brand-gold">{t("studySubtitle")}</p>
              <p className="text-body-lg text-brand-teal-deep/70">
                {t("studyBackground")}
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
              {/* Western Blot Visuals */}
              <div className="space-y-8">
                <div className="bg-white p-8 rounded-3xl shadow-clinical border border-brand-teal/5">
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-label text-brand-teal/40">Western Blot Analysis</span>
                    <span className="text-xs font-mono text-brand-teal/20">Fig 1.2a</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <Image src="/images/monash_test_1.png" alt="Study Result 1" width={400} height={400} className="rounded-lg shadow-sm" />
                    <Image src="/images/monash_test_2.png" alt="Study Result 2" width={400} height={400} className="rounded-lg shadow-sm" />
                  </div>
                  <p className="mt-6 text-xs text-brand-teal-deep/50 italic text-center">
                    Visual evidence of suppressed inflammatory markers (IL-6, TNF-α) following application of the proprietary herbal extract.
                  </p>
                </div>
              </div>

              {/* Study Methodology */}
              <div className="space-y-10">
                <div className="bg-white/50 p-8 rounded-3xl border border-brand-teal/5 backdrop-blur-sm">
                  <h3 className="text-h4 text-brand-teal mb-4">Methodology</h3>
                  <p className="text-body text-brand-teal-deep/70 mb-6">
                    {t("studyMethod")}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {["P-P38MAPK", "IL-6", "IL-1β", "TNF-α"].map(marker => (
                      <span key={marker} className="px-3 py-1 bg-brand-teal/10 text-brand-teal text-xs font-bold rounded-md uppercase tracking-wider">
                        {marker}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="p-6 bg-white rounded-2xl shadow-clinical">
                    <Shield className="text-brand-gold mb-3" size={32} />
                    <h4 className="text-h4 text-brand-teal text-lg mb-2">{t("result1Title")}</h4>
                    <p className="text-sm text-brand-teal-deep/70">{t("result1Text")}</p>
                  </div>
                  <div className="p-6 bg-white rounded-2xl shadow-clinical">
                    <Activity className="text-brand-gold mb-3" size={32} />
                    <h4 className="text-h4 text-brand-teal text-lg mb-2">{t("result3Title")}</h4>
                    <p className="text-sm text-brand-teal-deep/70">{t("result3Text")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mechanism of Action */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-h3 text-brand-teal mb-4">{t("mechanismTitle")}</h2>
              <p className="text-body-lg text-brand-teal-deep/70">
                {t("mechanismSubtitle")}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
              <div className="flex flex-col items-center text-center group">
                <div className="w-24 h-24 rounded-full bg-brand-bg flex items-center justify-center text-brand-teal mb-6 group-hover:scale-110 transition-transform duration-500 shadow-clinical">
                  <Zap size={40} />
                </div>
                <h3 className="text-h4 mb-4">{t("step1Title")}</h3>
                <p className="text-body text-brand-teal-deep/60">{t("step1Text")}</p>
              </div>

              <div className="flex flex-col items-center text-center group">
                <div className="w-24 h-24 rounded-full bg-brand-bg flex items-center justify-center text-brand-teal mb-6 group-hover:scale-110 transition-transform duration-500 shadow-clinical">
                  <Microscope size={40} />
                </div>
                <h3 className="text-h4 mb-4">{t("step2Title")}</h3>
                <p className="text-body text-brand-teal-deep/60">{t("step2Text")}</p>
              </div>

              <div className="flex flex-col items-center text-center group">
                <div className="w-24 h-24 rounded-full bg-brand-bg flex items-center justify-center text-brand-teal mb-6 group-hover:scale-110 transition-transform duration-500 shadow-clinical">
                  <Shield size={40} />
                </div>
                <h3 className="text-h4 mb-4">{t("step3Title")}</h3>
                <p className="text-body text-brand-teal-deep/60">{t("step3Text")}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Closing Conclusion */}
        <section className="py-24 bg-brand-bg">
          <div className="container mx-auto px-6 text-center">
            <div className="max-w-4xl mx-auto">
              <p className="text-h3 text-brand-teal leading-relaxed font-normal">
                "{t("conclusion")}"
              </p>
            </div>
          </div>
        </section>

        <FinalCTA />
      </main>

      <Footer />
    </div>
  );
}
