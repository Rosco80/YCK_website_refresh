import { notFound } from "next/navigation";
import { useTranslations } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle2, ShieldCheck, ChevronDown } from "lucide-react";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { conditionSlugs, ConditionSlug, conditionsData } from "@/data/conditions";
import { getConditionsContent } from "@/data/conditions-content";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { ConditionTestimonials } from "@/components/ConditionTestimonials";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedConditions } from "@/components/RelatedConditions";

export async function generateMetadata({ params }: { params: Promise<{ locale: string, slug: string }> }) {
  const { locale, slug } = await params;
  if (!conditionSlugs.includes(slug as ConditionSlug)) return {};
  
  const t = await getTranslations({ locale, namespace: "Conditions" });
  
  return {
    title: `${t(`list.${slug}.title`)} | Treatment in Malaysia`,
    description: t(`list.${slug}.desc`),
  };
}

export function generateStaticParams() {
  const locales = ['en', 'ms', 'zh'];
  const params: { locale: string, slug: string }[] = [];
  
  for (const locale of locales) {
    for (const slug of conditionSlugs) {
      params.push({ locale, slug });
    }
  }
  
  return params;
}

export default async function ConditionDetail({
  params
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  if (!conditionSlugs.includes(slug as ConditionSlug)) {
    notFound();
  }

  // At the moment, since this is an RSC, we can fetch useTranslations directly inside server components in Next-Intl
  const t = await getTranslations("Conditions");
  const tw = await getTranslations("WhatsApp");
  const title = t(`list.${slug}.title`);
  const desc = t(`list.${slug}.desc`);
  const conditionData = getConditionsContent(locale)[slug];

  const whatsappUrl = getWhatsAppUrl(tw("conditionMessage", { condition: title }));

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalCondition",
    "name": title,
    "description": desc,
    "possibleTreatment": [
      {
        "@type": "MedicalTherapy",
        "name": "YAPCHANKOR Shaolin Physiotherapy",
        "description": "Integration of traditional medicinal patches and modern physical therapy.",
      }
    ]
  };

  return (
    <div className="min-h-screen flex flex-col bg-brand-bg">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Header />
      
      <main className="grow">
        {/* Dynamic Abstract Hero */}
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-brand-teal-deep text-white">
          <div className="absolute inset-0 bg-linear-to-br from-brand-teal-deep to-brand-teal z-0" />
          {/* Abstract DNA/Spine Pattern */}
          <div className="absolute inset-0 z-0 opacity-10 flex border-y border-white/5 mx-auto max-w-7xl rotate-3 scale-110">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="flex-1 border-r border-white/10 skew-x-12" />
            ))}
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            <Breadcrumbs />
            
            <div className="max-w-4xl">
              <div className="text-label inline-flex items-center space-x-3 px-4 py-1.5 rounded-full border border-brand-gold/30 bg-brand-gold/10 mb-6">
                <div className="w-5 h-5 relative">
                  <Image 
                    src={conditionsData[slug as ConditionSlug].iconPath} 
                    alt="" 
                    fill 
                    className="object-contain brightness-0 invert" 
                  />
                </div>
                <span>{t("targetedRecovery")}</span>
              </div>
              <h1 className="text-h2 lg:text-8xl mb-8 drop-shadow-lg">
                {title}
              </h1>
              <p className="text-lead text-white/80 max-w-3xl">
                {desc}
              </p>
            </div>
          </div>
        </section>

        {/* Dynamic Intro Block from conditions-content.ts */}
        {conditionData && (
          <section className="py-24 bg-brand-bg relative z-20 -mt-10 rounded-t-[3rem] shadow-2xl">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-label mb-6">
                  {conditionData.title || title}
                </h2>
                <h3 className="text-h3 text-brand-teal-deep mb-10">
                  {conditionData.subtitle || ""}
                </h3>
                <div className="text-body-lg text-brand-teal-deep/80 space-y-6 text-left lg:text-center">
                  {conditionData.intro ? conditionData.intro.split('\n').filter(Boolean).map((para: string, i: number) => (
                    <p key={i}>{para}</p>
                  )) : (
                    <p>
                      {t.rich(`list.${slug}.intro`, {
                        link: (chunks) => <Link href="/conditions" className="text-brand-gold font-bold hover:underline">{chunks}</Link>,
                        back: (chunks) => <Link href="/conditions/back-pain" className="text-brand-gold font-bold hover:underline">{chunks}</Link>,
                        knee: (chunks) => <Link href="/conditions/knee-pain" className="text-brand-gold font-bold hover:underline">{chunks}</Link>,
                        shoulder: (chunks) => <Link href="/conditions/shoulder-pain" className="text-brand-gold font-bold hover:underline">{chunks}</Link>,
                        sciatica: (chunks) => <Link href="/conditions/sciatica" className="text-brand-gold font-bold hover:underline">{chunks}</Link>,
                        slipped: (chunks) => <Link href="/conditions/slipped-disc" className="text-brand-gold font-bold hover:underline">{chunks}</Link>,
                        chronic: (chunks) => <Link href="/solutions/chronic-pain" className="text-brand-gold font-bold hover:underline">{chunks}</Link>,
                        sports: (chunks) => <Link href="/solutions/sports-injury" className="text-brand-gold font-bold hover:underline">{chunks}</Link>,
                        surgery: (chunks) => <Link href="/solutions/post-surgery-rehab" className="text-brand-gold font-bold hover:underline">{chunks}</Link>
                      })}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </section>
        )}



        {/* Why It Doesn't Improve Section */}
        {conditionData && (
          <section className="py-24 bg-brand-teal/5 border-t border-brand-teal/10">
            <div className="container mx-auto px-6">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-h3 text-brand-teal-deep mb-8">
                  {t("whyDoesntImprove", { condition: title })}
                </h2>
                <p className="text-body text-brand-teal-deep/70">
                  {conditionData.whyNotImprove}
                </p>
              </div>
            </div>
          </section>
        )}

        {/* What Causes It Section */}
        {conditionData && (
          <section className="py-24 bg-white border-t border-brand-teal/5">
            <div className="container mx-auto px-6">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-h3 text-brand-teal-deep mb-12">
                  {t("whatCausing")}
                </h2>
                <div className="space-y-3">
                  {conditionData.whatCauses.map((cause, idx) => (
                    <div key={idx} className="flex gap-4 items-start">
                      <div className="shrink-0 w-6 h-6 rounded-full bg-brand-gold/20 text-brand-gold flex items-center justify-center text-sm font-bold mt-1">
                        •
                      </div>
                      <p className="text-body text-brand-teal-deep/70">{cause}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Approach Section */}
        {conditionData && (
          <section className="py-24 bg-brand-teal/5 border-t border-brand-teal/10">
            <div className="container mx-auto px-6">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-h3 text-brand-teal-deep mb-8">
                  {t("ourApproach")}
                </h2>
                <p className="text-body text-brand-teal-deep/70 mb-8">
                  {conditionData.approach}
                </p>
                <div className="bg-white rounded-2xl p-8 border border-brand-teal/10">
                  <p className="text-label mb-4">{t("weCombine")}</p>
                  <ul className="space-y-4">
                    {conditionData.approachPoints.map((point, idx) => (
                      <li key={idx} className="flex gap-3">
                        <CheckCircle2 className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                        <span className="text-body text-brand-teal-deep/70">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Expectation Section */}
        {conditionData && (
          <section className="py-24 bg-white border-t border-brand-teal/5">
            <div className="container mx-auto px-6">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-h3 text-brand-teal-deep mb-8">
                  {t("whatToExpect")}
                </h2>
                <p className="text-body text-brand-teal-deep/70">
                  {conditionData.expectation}
                </p>
              </div>
            </div>
          </section>
        )}

        {/* When to Seek Assessment */}
        {conditionData && (
          <section className="py-24 bg-brand-teal/5 border-t border-brand-teal/10">
            <div className="container mx-auto px-6">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-h3 text-brand-teal-deep mb-12">
                  {t("whenToSeekTitle")}
                </h2>
                <p className="text-body text-brand-teal-deep/70 mb-8">
                  {t("ifYourCondition")}
                </p>
                <div className="space-y-3">
                  {conditionData.whenToSeek.map((condition, idx) => (
                    <div key={idx} className="flex gap-4 items-start">
                      <div className="shrink-0 w-6 h-6 rounded-full bg-brand-gold/20 text-brand-gold flex items-center justify-center text-sm font-bold mt-1">
                        •
                      </div>
                      <p className="text-body text-brand-teal-deep/70">{condition}</p>
                    </div>
                  ))}
                </div>
                <p className="text-body text-brand-teal-deep/70 mt-8">
                  {t("clinicalAssessmentNote")}
                </p>
              </div>
            </div>
          </section>
        )}

        {/* FAQs Section */}
        {conditionData && (
          <section className="py-24 bg-white border-t border-brand-teal/5">
            <div className="container mx-auto px-6">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-h3 text-brand-teal-deep mb-12">
                  {t("faqTitle")}
                </h2>
                <div className="space-y-6">
                  {conditionData.faqs.map((faq, idx) => (
                    <div key={idx} className="border-b border-brand-teal/10 pb-6 last:border-0 last:pb-0">
                      <h3 className="text-h4 text-brand-teal-deep mb-3 uppercase">{faq.question}</h3>
                      <p className="text-body text-brand-teal-deep/70">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Booking CTA Section */}
        <section className="py-24 bg-brand-teal-deep text-white relative overflow-hidden">
          {/* Abstract pattern to match hero */}
          <div className="absolute inset-0 z-0 opacity-10 flex border-y border-white/5 mx-auto max-w-7xl rotate-3 scale-110">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="flex-1 border-r border-white/10 skew-x-12" />
            ))}
          </div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <ShieldCheck className="w-16 h-16 text-brand-gold mb-8 mx-auto" />
              <h2 className="text-h3 lg:text-5xl text-white mb-6">
                {t("readyCure", { condition: (conditionData?.title || title).toLowerCase() })}
              </h2>
              <p className="text-lead text-white/80 mb-10">
                {t("bookAssessment")}
              </p>
              <Button asChild className="w-full sm:w-auto px-12 bg-white hover:bg-brand-gold text-brand-teal-deep hover:text-white h-16 rounded-2xl text-label shadow-xl transition-transform hover:scale-[1.02]">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  {t("btnBook")}
                </a>
              </Button>
              <div className="mt-8 flex justify-center text-label text-white/50">
                {t("noReferral")}
              </div>
            </div>
          </div>
        </section>

        <RelatedConditions currentSlug={slug} />

        <ConditionTestimonials slug={slug} />
      </main>
      
      <Footer />
    </div>
  );
}
