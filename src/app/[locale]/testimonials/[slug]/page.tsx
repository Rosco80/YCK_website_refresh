import { getTranslations, setRequestLocale } from "next-intl/server";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { getTestimonialBySlug } from "@/lib/sanity-testimonials";
import { TestimonialFullStory } from "@/components/TestimonialFullStory";
import { notFound } from "next/navigation";
import { Link } from "@/i18n/routing";
import { ArrowLeft } from "lucide-react";
import { Metadata } from "next";

export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ locale: string; slug: string }> 
}): Promise<Metadata> {
  const { slug } = await params;
  const testimonial = await getTestimonialBySlug(slug);
  
  if (!testimonial) return { title: "Testimonial Not Found" };

  return {
    title: `${testimonial.title} | YAPCHANKOR Recovery Stories`,
    description: testimonial.summary || testimonial.quote || `Recovery story for ${testimonial.details?.conditionTag || 'condition'}.`,
  };
}

export default async function TestimonialPage({
  params
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  
  const testimonial = await getTestimonialBySlug(slug);
  
  if (!testimonial) {
    notFound();
  }

  const t = await getTranslations({ locale, namespace: "Testimonials" });
  
  return (
    <div className="min-h-screen flex flex-col bg-brand-bg">
      <Header />
      
      <main className="grow">
        {/* Hero Section */}
        <section className="relative pt-32 pb-16 lg:pt-48 lg:pb-24 overflow-hidden bg-brand-teal-deep text-white">
          <div className="container mx-auto px-6 relative z-10 text-center">
            <div className="max-w-4xl mx-auto">
              <Link 
                href="/testimonials"
                className="inline-flex items-center space-x-2 text-brand-gold hover:text-white transition-colors mb-8 group"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                <span className="text-xs font-bold uppercase tracking-widest">Back to all stories</span>
              </Link>
              
              <div className="block">
                <div className="text-label inline-flex items-center space-x-3 px-4 py-1.5 rounded-full border border-brand-gold/30 bg-brand-gold/10 mb-8 uppercase text-brand-gold">
                  <span>Recovery Case Study</span>
                </div>
              </div>
              
              <h1 className="text-h2 lg:text-7xl mb-8 leading-tight">
                {testimonial.title}
              </h1>
              
              {testimonial.quote && (
                <p className="text-xl lg:text-3xl text-brand-gold font-bold italic max-w-3xl mx-auto">
                  "{testimonial.quote}"
                </p>
              )}
            </div>
          </div>
          
          <div className="absolute top-0 right-0 w-1/2 h-full z-0 opacity-10 pointer-events-none">
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-brand-gold/40 to-transparent blur-3xl translate-x-1/2 -translate-y-1/2" />
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20 lg:py-32">
          <div className="container mx-auto px-6">
            <TestimonialFullStory testimonial={testimonial} />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
