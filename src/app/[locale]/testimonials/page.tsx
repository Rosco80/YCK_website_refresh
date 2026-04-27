import { getTranslations, setRequestLocale } from "next-intl/server";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { TestimonialGrid } from "@/components/TestimonialGrid";
import { TestimonialHero } from "@/components/TestimonialHero";
import { getFeaturedTestimonials, getTestimonialImageOverrides } from "@/lib/sanity-testimonials";

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
  
  // Fetch featured testimonials and image overrides from Sanity for SSR
  const [featuredTestimonials, imageOverrides] = await Promise.all([
    getFeaturedTestimonials(6),
    getTestimonialImageOverrides()
  ]);
  
  return (
    <div className="min-h-screen flex flex-col bg-brand-bg">
      <Header />
      
      <main className="grow">
        <TestimonialHero />

        {/* Testimonials Grid Section */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <TestimonialGrid 
              featuredTestimonials={featuredTestimonials}
              imageOverrides={imageOverrides}
            />
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-24 bg-brand-teal-deep text-white text-center">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl lg:text-5xl font-bold mb-8 uppercase tracking-tight">
                {t("finalCTA.title")}
              </h2>
              <p className="text-xl lg:text-2xl mb-12 opacity-80 leading-relaxed">
                {t("finalCTA.description")}
              </p>
              <button className="px-12 py-6 rounded-full bg-brand-gold text-brand-teal-deep font-bold text-xl hover:bg-white transition-all shadow-2xl hover:shadow-brand-gold/30">
                {t("finalCTA.button")}
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
