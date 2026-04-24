import { SanityTestimonial } from "@/lib/sanity-testimonials";
import { PortableText } from "@portabletext/react";
import { CheckCircle2, MapPin, Activity, ShieldCheck, ArrowRight } from "lucide-react";
import { Link } from "@/i18n/routing";
import { Button } from "./ui/button";

interface TestimonialFullStoryProps {
  testimonial: SanityTestimonial;
}

export function TestimonialFullStory({ testimonial }: TestimonialFullStoryProps) {
  const { details, before, treatment, outcome, patientWords, relatedConditions } = testimonial;

  return (
    <div className="max-w-4xl mx-auto space-y-16 py-12">
      {/* Header Info */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-8 rounded-[2.5rem] bg-brand-teal/5 border border-brand-teal/10">
        {details?.conditionTag && (
          <div className="space-y-1">
            <span className="text-[10px] uppercase tracking-wider text-brand-teal/60 font-bold">Condition</span>
            <p className="text-brand-teal font-bold">{details.conditionTag}</p>
          </div>
        )}
        {details?.caseType && (
          <div className="space-y-1">
            <span className="text-[10px] uppercase tracking-wider text-brand-teal/60 font-bold">Type</span>
            <p className="text-brand-teal font-bold">{details.caseType}</p>
          </div>
        )}
        {details?.severity && (
          <div className="space-y-1">
            <span className="text-[10px] uppercase tracking-wider text-brand-teal/60 font-bold">Severity</span>
            <p className="text-brand-teal font-bold">{details.severity}</p>
          </div>
        )}
        {details?.location && (
          <div className="space-y-1">
            <span className="text-[10px] uppercase tracking-wider text-brand-teal/60 font-bold">Location</span>
            <p className="text-brand-teal font-bold">{details.location}</p>
          </div>
        )}
      </div>

      {/* Main Content Sections */}
      <div className="grid md:grid-cols-3 gap-12">
        {/* Before */}
        <div className="space-y-6">
          <div className="flex items-center space-x-3 text-brand-gold">
            <Activity className="w-5 h-5" />
            <h3 className="text-h4 uppercase text-sm tracking-widest font-bold">Before</h3>
          </div>
          <ul className="space-y-4">
            {before?.map((item, i) => (
              <li key={i} className="flex items-start space-x-3 text-body text-sm text-brand-teal-deep/80">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-gold shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Treatment */}
        <div className="space-y-6">
          <div className="flex items-center space-x-3 text-brand-teal">
            <ShieldCheck className="w-5 h-5" />
            <h3 className="text-h4 uppercase text-sm tracking-widest font-bold">Treatment</h3>
          </div>
          <ul className="space-y-4">
            {treatment?.map((item, i) => (
              <li key={i} className="flex items-start space-x-3 text-body text-sm text-brand-teal-deep/80">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Outcome */}
        <div className="space-y-6">
          <div className="flex items-center space-x-3 text-green-600">
            <CheckCircle2 className="w-5 h-5" />
            <h3 className="text-h4 uppercase text-sm tracking-widest font-bold text-green-700">Outcome</h3>
          </div>
          <ul className="space-y-4">
            {outcome?.map((item, i) => (
              <li key={i} className="flex items-start space-x-3 text-body text-sm text-brand-teal-deep/80 font-medium">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-green-500 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Full Story Text */}
      <div className="space-y-8 pt-12 border-t border-brand-teal/10">
        <h3 className="text-h3 text-brand-teal uppercase tracking-tight">Patient Words</h3>
        <div className="prose prose-teal max-w-none text-brand-teal-deep/90 leading-relaxed italic border-l-4 border-brand-gold pl-8 py-4">
          <PortableText value={patientWords} />
        </div>
      </div>

      {/* Related Conditions */}
      {relatedConditions && relatedConditions.length > 0 && (
        <div className="space-y-6 pt-12 border-t border-brand-teal/10">
          <h3 className="text-sm uppercase tracking-widest font-bold text-brand-teal/60">Related Conditions</h3>
          <div className="flex flex-wrap gap-3">
            {relatedConditions.map((cond, i) => (
              <span key={i} className="px-4 py-2 rounded-full bg-brand-bg border border-brand-teal/10 text-brand-teal text-sm font-medium">
                {cond}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* CTA */}
      <div className="pt-16 text-center">
        <Button asChild size="lg" className="bg-brand-teal hover:bg-brand-teal-deep text-white rounded-full px-12 py-8 text-lg h-auto shadow-xl">
          <Link href="/book" className="flex items-center space-x-3">
            <span>Book Clinical Assessment</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
