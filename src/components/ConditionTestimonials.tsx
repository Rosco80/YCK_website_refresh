"use client";

import { useMemo } from "react";
import { TestimonialCard } from "./TestimonialCard";
import { getConditionTestimonials } from "@/data/testimonials";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { ArrowRight } from "lucide-react";

interface ConditionTestimonialsProps {
  slug: string;
}

export function ConditionTestimonials({ slug }: ConditionTestimonialsProps) {
  const t = useTranslations("Testimonials");

  const relevantTestimonials = useMemo(() => {
    return getConditionTestimonials(slug, 3);
  }, [slug]);

  if (relevantTestimonials.length === 0) return null;

  return (
    <section className="py-24 bg-brand-bg/50 border-t border-brand-teal/5">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-h3 text-brand-teal mb-4">
            {t("heroTitle")}
          </h2>
          <p className="text-body text-brand-teal-deep/60">
            {t("heroSubtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {relevantTestimonials.map((testimonial) => (
            <div key={testimonial.id} className="h-full">
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <Link 
            href={`/testimonials?filter=${slug}`}
            className="group inline-flex items-center gap-2 px-10 py-5 bg-brand-teal text-white rounded-full text-label hover:bg-brand-gold transition-colors shadow-lg hover:shadow-xl"
          >
            {t("viewAllFor", { condition: slug.replace(/-/g, ' ') })}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
