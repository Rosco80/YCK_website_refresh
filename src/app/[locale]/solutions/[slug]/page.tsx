import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ShieldCheck, CheckCircle2, ChevronDown } from "lucide-react";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { conditionSlugs, ConditionSlug, conditionsData } from "@/data/conditions";
import { getConditionsContent } from "@/data/conditions-content";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { ConditionTestimonials } from "@/components/ConditionTestimonials";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedConditions } from "@/components/RelatedConditions";

const SOLUTION_SLUGS = ["sports-injury", "post-surgery-rehab", "chronic-pain"];

export async function generateMetadata({ params }: { params: Promise<{ locale: string, slug: string }> }) {
  const { locale, slug } = await params;
  if (!SOLUTION_SLUGS.includes(slug)) return {};
  
  const t = await getTranslations({ locale, namespace: "Conditions" });
  
  return {
    title: `${t(`list.${slug}.title`)} | Specialty Clinic Malaysia`,
    description: t(`list.${slug}.desc`),
  };
}

export function generateStaticParams() {
  const locales = ['en', 'ms', 'zh'];
  const params: { locale: string, slug: string }[] = [];
  
  for (const locale of locales) {
    for (const slug of SOLUTION_SLUGS) {
      params.push({ locale, slug });
    }
  }
  
  return params;
}

export default async function SolutionDetail({
  params
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  if (!SOLUTION_SLUGS.includes(slug)) {
    notFound();
  }

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
        "name": "YAPCHANKOR Therapeutic Solution",
        "description": "Integrated clinical recovery protocols for complex musculoskeletal issues.",
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
        {/* Solution Hero */}
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-brand-teal-deep text-white">
          <div className="absolute inset-0 bg-linear-to-br from-brand-teal-deep to-brand-teal z-0" />
          
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
                <span>Integrated Clinical Solution</span>
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

        {/* Dynamic Intro Block */}
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
                    <p>{t(`list.${slug}.intro`)}</p>
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

        {/* ... Rest of sections like Condition Detail ... */}
        {/* Skipping full replication to keep this focused on the routing logic */}
        
        <RelatedConditions currentSlug={slug} />

        <ConditionTestimonials slug={slug} />

        {/* Booking CTA Section */}
        <section className="py-24 bg-brand-teal-deep text-white relative overflow-hidden">
          <div className="container mx-auto px-6 relative z-10 text-center">
            <ShieldCheck className="w-16 h-16 text-brand-gold mb-8 mx-auto" />
            <h2 className="text-h3 lg:text-5xl text-white mb-6">
              Ready for specialized recovery?
            </h2>
            <Button asChild className="w-full sm:w-auto px-12 bg-white hover:bg-brand-gold text-brand-teal-deep hover:text-white h-16 rounded-2xl text-label shadow-xl transition-transform hover:scale-[1.02]">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  Book Clinical Assessment
                </a>
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
