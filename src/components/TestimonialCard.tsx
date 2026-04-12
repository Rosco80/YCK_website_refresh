"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Testimonial } from "@/data/testimonials";

interface TestimonialCardProps {
  testimonial: Testimonial;
  className?: string;
  isHero?: boolean;
}

export function TestimonialCard({ testimonial, className, isHero = false }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "p-8 lg:p-10 rounded-[2.5rem] bg-white border border-brand-teal/5 shadow-clinical hover:shadow-clinical-hover transition-all flex flex-col h-full",
        isHero && "border-l-4 border-l-brand-gold bg-linear-to-br from-white to-brand-bg/30",
        className
      )}
    >
      <div className="flex justify-between items-start mb-8">
        <div className="space-y-1">
          <span className="text-[10px] font-bold text-brand-gold uppercase tracking-[0.2em] block opacity-70">
            Official Case
          </span>
          <h4 className="text-lg font-bold text-brand-teal tracking-tight capitalize">
            {testimonial.slug.replace(/-/g, ' ')}
          </h4>
        </div>
        <Quote className="w-8 h-8 text-brand-gold/20" />
      </div>

      <div className="grow mb-10">
        <span className="text-[10px] font-bold text-brand-teal-deep/40 uppercase tracking-[0.2em] block mb-4">
          Patient experience
        </span>
        <blockquote className="text-lg text-brand-teal-deep/80 leading-relaxed font-medium italic">
          "{testimonial.content}"
        </blockquote>
      </div>

      <div className="pt-8 border-t border-brand-teal/5">
        <span className="text-[10px] font-bold text-brand-gold uppercase tracking-[0.2em] block mb-3 opacity-70">
          Functional Outcome
        </span>
        <div className="p-5 rounded-2xl bg-brand-teal/5 border border-brand-teal/5">
          <p className="text-brand-teal font-bold text-base leading-relaxed">
            {testimonial.outcome}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
