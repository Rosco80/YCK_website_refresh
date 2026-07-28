"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import type { Testimonial } from "@/data/testimonials";
import type { SanityTestimonial } from "@/lib/sanity-testimonials";

const SOLUTION_SLUGS = ["sports-injury", "post-surgery-rehab", "chronic-pain"];

interface TestimonialCardProps {
  testimonial: Testimonial | SanityTestimonial;
  className?: string;
  isHero?: boolean;
}

export function TestimonialCard({ testimonial, className, isHero = false }: TestimonialCardProps) {
  const t = useTranslations("Testimonials");
  const [isExpanded, setIsExpanded] = useState(false);
  const isSanity = '_id' in testimonial;
  const content = isSanity ? (typeof testimonial.patientWords === 'string' ? testimonial.patientWords : testimonial.summary || '') : testimonial.content;
  const outcomes = isSanity ? (testimonial.outcome || []) : [];
  const quote = isSanity ? testimonial.quote : '';
  const summary = isSanity ? (testimonial.summary || '') : content;

  // For legacy cards, truncate long content
  const shouldTruncate = !isSanity && content.length > 300;
  const displaySummary = shouldTruncate && !isExpanded
    ? content.slice(0, 200) + "..."
    : isSanity ? summary : content;

  const handleTrackView = () => {
    const dataLayer = (window as any).dataLayer || [];
    dataLayer.push({
      event: "testimonial_view_full",
      testimonial_id: isSanity ? testimonial.slug : (testimonial as any).id,
      testimonial_title: isSanity ? testimonial.title : testimonial.slug
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "group rounded-2xl bg-white border shadow-clinical hover:shadow-clinical-hover transition-all flex flex-col h-full overflow-hidden",
        isHero 
          ? "border-brand-gold/20 ring-1 ring-brand-gold/10" 
          : "border-brand-teal/5",
        className
      )}
    >
      {/* Icon Area */}
      <div className="pt-8 pb-4 flex justify-center">
        <div className="w-16 h-16 rounded-full bg-brand-teal/5 border-2 border-brand-gold/20 flex items-center justify-center overflow-hidden">
          {testimonial.imageUrl ? (
            <img 
              src={testimonial.imageUrl} 
              alt={isSanity ? testimonial.title : testimonial.title} 
              className="w-full h-full object-cover"
            />
          ) : (
            <svg className="w-8 h-8 text-brand-teal/40" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>
          )}
        </div>
      </div>

      {/* Card Body */}
      <div className="p-6 lg:p-8 flex flex-col grow">
        {/* Tags */}
        {isSanity && testimonial.details && (
          <div className="flex flex-wrap gap-2 mb-4">
            {testimonial.details.caseType && (
              <span className="px-3 py-1 rounded-full bg-brand-teal/5 text-[10px] font-bold text-brand-teal uppercase tracking-wider border border-brand-teal/10">
                {testimonial.details.caseType}
              </span>
            )}
            {testimonial.details.conditionTag && (
              <span className="px-3 py-1 rounded-full bg-brand-gold/5 text-[10px] font-bold text-brand-gold uppercase tracking-wider border border-brand-gold/10">
                {testimonial.details.conditionTag}
              </span>
            )}
          </div>
        )}

        {/* Headline */}
        <Link 
          href={isSanity ? `/testimonials/${testimonial.slug}` : `${SOLUTION_SLUGS.includes(testimonial.slug) ? "/solutions" : "/conditions"}/${testimonial.slug}`}
          onClick={handleTrackView}
          className="group/title inline-block mb-3"
        >
          <h4 className="text-lg lg:text-xl font-bold text-brand-teal capitalize group-hover/title:text-brand-gold transition-colors leading-tight line-clamp-2">
            {isSanity ? testimonial.title : testimonial.slug.replace(/-/g, ' ')}
          </h4>
        </Link>

        {/* Summary / Content */}
        <p className={cn(
          "text-sm text-brand-teal-deep/70 leading-relaxed mb-5",
          !isExpanded && "line-clamp-2"
        )}>
          {displaySummary}
        </p>

        {/* Outcome Bullets */}
        {isSanity && outcomes.length > 0 && (
          <ul className="space-y-2 mb-5">
            {outcomes.slice(0, 3).map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-brand-teal-deep/80">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-gold mt-1.5 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Spacer to push quote + link to bottom */}
        <div className="grow" />

        {/* Quote */}
        {quote && (
          <p className="text-sm italic text-brand-teal/80 border-l-2 border-brand-gold/30 pl-4 mb-5 line-clamp-2">
            &ldquo;{quote}&rdquo;
          </p>
        )}

        {/* Read Story Link */}
        {isSanity ? (
          <Link
            href={`/testimonials/${testimonial.slug}`}
            onClick={handleTrackView}
            className="inline-flex items-center gap-2 text-xs font-bold text-brand-teal hover:text-brand-gold transition-colors uppercase tracking-wider mt-auto pt-4 border-t border-brand-teal/5"
          >
            <span>{t("readFullStory")}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        ) : (
          <button
            onClick={() => {
              setIsExpanded(!isExpanded);
              if (!isExpanded) handleTrackView();
            }}
            className="inline-flex items-center gap-2 text-xs font-bold text-brand-teal hover:text-brand-gold transition-colors uppercase tracking-wider mt-auto pt-4 border-t border-brand-teal/5"
          >
            <span>{isExpanded ? t("viewLess", { defaultValue: "View Less" }) : t("readFullStory")}</span>
            {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </button>
        )}
      </div>
    </motion.div>
  );
}
