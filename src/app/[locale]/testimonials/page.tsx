import { getTranslations, setRequestLocale } from "next-intl/server";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { TestimonialGrid } from "@/components/TestimonialGrid";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Testimonials" });
  
  return {
    title: `${t("title")} | YAP_CHAN_KOR Pain Treatment`,
    description: t("subtitle"),
  };
}

export default async function TestimonialsPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "Testimonials" });
  
  return (
    <div className="min-h-screen flex flex-col bg-brand-bg">
      <Header />
      
      <main className="grow">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-brand-teal-deep text-white">
          <div className="absolute inset-0 bg-linear-to-br from-brand-teal-deep to-brand-teal z-0" />
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl">
              <div className="text-label inline-flex items-center space-x-3 px-4 py-1.5 rounded-full border border-brand-gold/30 bg-brand-gold/10 mb-6">
                <span>{t("title")}</span>
              </div>
              
              <h1 className="text-h2 lg:text-8xl mb-8">
                {t("heroTitle")}
              </h1>
              
              <p className="text-body-lg text-white/80 max-w-2xl">
                {t("heroSubtitle")}
              </p>
            </div>
          </div>
          
          {/* Abstract Decorations */}
          <div className="absolute top-0 right-0 w-1/2 h-full z-0 opacity-10 pointer-events-none">
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-brand-gold/40 to-transparent blur-3xl translate-x-1/2 -translate-y-1/2" />
          </div>
        </section>

        {/* Testimonials Grid Section */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <TestimonialGrid />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
