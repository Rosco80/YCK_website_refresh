import { notFound } from "next/navigation";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle2, ShieldCheck, Activity } from "lucide-react";
import { Link } from "@/i18n/routing";
import { conditionSlugs, ConditionSlug } from "@/data/conditions";

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
  const { slug } = await params;
  
  if (!conditionSlugs.includes(slug as ConditionSlug)) {
    notFound();
  }

  // At the moment, since this is an RSC, we can fetch useTranslations directly inside server components in Next-Intl
  const t = await getTranslations("Conditions");
  const title = t(`list.${slug}.title`);
  const desc = t(`list.${slug}.desc`);

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
            <Link href="/conditions" className="inline-flex items-center space-x-2 text-brand-gold hover:text-white transition-colors mb-8 group">
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              <span className="text-xs font-bold uppercase tracking-widest">All Conditions</span>
            </Link>
            
            <div className="max-w-4xl">
              <div className="inline-flex items-center space-x-3 px-4 py-1.5 rounded-full border border-brand-gold/30 bg-brand-gold/10 text-brand-gold text-xs font-bold uppercase tracking-widest mb-6">
                <Activity className="w-4 h-4" />
                <span>Targeted Recovery</span>
              </div>
              <h1 className="text-4xl lg:text-7xl font-black mb-8 tracking-tight drop-shadow-lg">
                {title}
              </h1>
              <p className="text-xl lg:text-3xl font-medium text-white/80 max-w-3xl leading-relaxed">
                {desc}
              </p>
            </div>
          </div>
        </section>

        {/* Dynamic Legacy Intro Block */}
        <section className="py-16 bg-brand-bg relative z-20 -mt-10 rounded-t-[3rem] shadow-2xl">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-xl font-medium text-brand-teal-deep/80 leading-relaxed text-center">
              <p>{t(`list.${slug}.intro`)}</p>
            </div>
          </div>
        </section>

        {/* Universal Treatment Method Component */}
        <section className="py-24 bg-white border-t border-brand-teal/5">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">
              
              <div className="lg:col-span-8">
                <h2 className="text-3xl lg:text-5xl font-bold text-brand-teal-deep mb-12 tracking-tight">
                  Clinical Approach to <span className="text-brand-gold">{title}</span>
                </h2>
                
                <div className="space-y-12">
                  <div className="flex gap-6">
                    <div className="shrink-0 w-16 h-16 rounded-2xl bg-brand-teal/5 text-brand-teal hidden sm:flex items-center justify-center border border-brand-teal/10 shadow-inner">
                      <span className="text-xl font-black">1</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-brand-teal-deep mb-4 flex items-center gap-3">
                        <span className="sm:hidden text-brand-teal">1.</span>
                        Assess & Diagnose
                      </h3>
                      <p className="text-lg font-medium text-brand-teal-deep/70 leading-relaxed">
                        {t(`list.${slug}.step1`)}
                      </p>
                    </div>
                  </div>

                  <div className="w-full h-px bg-brand-teal/10" />

                  <div className="flex gap-6">
                    <div className="shrink-0 w-16 h-16 rounded-2xl bg-brand-teal/5 text-brand-teal hidden sm:flex items-center justify-center border border-brand-teal/10 shadow-inner">
                      <span className="text-xl font-black">2</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-brand-teal-deep mb-4 flex items-center gap-3">
                        <span className="sm:hidden text-brand-teal">2.</span>
                        Integrative Therapy
                      </h3>
                      <p className="text-lg font-medium text-brand-teal-deep/70 leading-relaxed">
                        {t(`list.${slug}.step2`)}
                      </p>
                    </div>
                  </div>

                  <div className="w-full h-px bg-brand-teal/10" />

                  <div className="flex gap-6">
                    <div className="shrink-0 w-16 h-16 rounded-2xl bg-brand-teal/5 text-brand-teal hidden sm:flex items-center justify-center border border-brand-teal/10 shadow-inner">
                      <span className="text-xl font-black">3</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-brand-teal-deep mb-4 flex items-center gap-3">
                        <span className="sm:hidden text-brand-teal">3.</span>
                        Results & Regimen
                      </h3>
                      <p className="text-lg font-medium text-brand-teal-deep/70 leading-relaxed">
                        {t(`list.${slug}.step3`)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              
              <aside className="lg:col-span-4 bg-brand-bg p-10 lg:p-14 rounded-[3rem] border border-brand-teal/10 shadow-xl sticky top-24 mt-12 lg:mt-0">
                <ShieldCheck className="w-12 h-12 text-brand-gold mb-6" />
                <h3 className="text-2xl font-bold text-brand-teal-deep mb-4">Ready to cure your {title.toLowerCase()}?</h3>
                <p className="text-brand-teal-deep/60 mb-10 font-medium">Book a certified clinical assessment with our physiotherapy specialists today.</p>
                <Link href="/#branches">
                  <Button className="w-full bg-brand-teal hover:bg-brand-teal-deep text-white h-16 rounded-2xl text-base font-bold uppercase tracking-widest shadow-xl transition-transform hover:scale-[1.02]">
                    Book Assessment
                  </Button>
                </Link>
                <div className="mt-6 flex justify-center text-xs font-bold text-brand-teal-deep/30 uppercase tracking-widest">
                  No Referral Required
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
