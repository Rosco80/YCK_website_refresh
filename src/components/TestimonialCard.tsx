"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "@/i18n/routing";
import type { Testimonial } from "@/data/testimonials";

const SOLUTION_SLUGS = ["sports-injury", "post-surgery-rehab", "chronic-pain"];

interface TestimonialCardProps {
  testimonial: Testimonial;
  className?: string;
  isHero?: boolean;
}

export function TestimonialCard({ testimonial, className, isHero = false }: TestimonialCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  
  // Similarity check: hide outcome if it's already in the content
  const outcomeSnippet = testimonial.outcome.replace(/\.\.\.$/, "").trim();
  const isDuplicate = outcomeSnippet.length > 10 && 
    testimonial.content.toLowerCase().includes(outcomeSnippet.toLowerCase().slice(0, 50));

  const paragraphs = testimonial.content.split('\n').filter(p => p.trim());
  const shouldTruncate = testimonial.content.length > 1000;
  
  const contentToProcess = (shouldTruncate && !isExpanded) 
    ? testimonial.content.slice(0, 600).split('\n').slice(0, 2).join('\n') + "..."
    : testimonial.content;

  const displayParagraphs = contentToProcess.split('\n').filter(p => p.trim());

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "p-8 lg:p-12 rounded-[2.5rem] bg-white border border-brand-teal/5 shadow-clinical hover:shadow-clinical-hover transition-all flex flex-col break-inside-avoid mb-8",
        isHero && "border-l-4 border-l-brand-gold bg-linear-to-br from-white to-brand-bg/30",
        className
      )}
    >
      <div className="flex justify-between items-start mb-8">
        <div className="space-y-1">
          <span className="text-label text-[10px] text-brand-gold block opacity-70">
            Official Case
          </span>
          <Link 
            href={`${SOLUTION_SLUGS.includes(testimonial.slug) ? "/solutions" : "/conditions"}/${testimonial.slug}`}
            className="group/title inline-block"
          >
            <h4 className="text-h4 text-brand-teal capitalize group-hover/title:text-brand-gold transition-colors">
              {testimonial.slug.replace(/-/g, ' ')}
            </h4>
          </Link>
        </div>
        <Quote className="w-8 h-8 text-brand-gold/20" />
      </div>

      <div className="mb-0">
        <span className="text-label text-[10px] text-brand-teal-deep/40 block mb-6">
          Patient Experience
        </span>
        <div className={cn(
          "text-body text-[1.05rem] text-brand-teal-deep/80 italic space-y-6 relative",
          shouldTruncate && !isExpanded && "after:absolute after:bottom-0 after:left-0 after:right-0 after:h-12 after:bg-linear-to-t after:from-white after:to-transparent"
        )}>
          {displayParagraphs.map((p, idx) => (
            <p key={idx}>
              {idx === 0 ? `“${p}` : p}
              {idx === displayParagraphs.length - 1 && !shouldTruncate ? "”" : ""}
              {idx === displayParagraphs.length - 1 && shouldTruncate && isExpanded ? "”" : ""}
            </p>
          ))}
        </div>
        
        {shouldTruncate && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-6 text-label text-[10px] text-brand-teal hover:text-brand-gold transition-colors relative z-10 flex items-center space-x-2"
          >
            <span>{isExpanded ? "View Less" : "Read Full Story"}</span>
            {isExpanded ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
          </button>
        )}
      </div>

      {!isDuplicate && (
        <div className="pt-8 border-t border-brand-teal/5">
          <span className="text-label text-[10px] text-brand-gold block mb-3 opacity-70">
            Functional Outcome
          </span>
          <div className="p-5 rounded-2xl bg-brand-teal/5 border border-brand-teal/5">
            <p className="text-body font-bold text-brand-teal">
              {testimonial.outcome}
            </p>
          </div>
        </div>
      )}
    </motion.div>
  );
}
