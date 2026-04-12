"use client";

import { useMemo } from "react";
import { TestimonialCard } from "./TestimonialCard";
import { getConditionTestimonials } from "@/data/testimonials";
import { useTranslations } from "next-intl";

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
          <h2 className="text-3xl lg:text-5xl font-bold text-brand-teal mb-4 tracking-tight">
            {t("heroTitle")}
          </h2>
          <p className="text-lg font-medium text-brand-teal-deep/60">
            {t("heroSubtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {relevantTestimonials.map((testimonial) => (
            <div key={testimonial.id} className="h-full">
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
