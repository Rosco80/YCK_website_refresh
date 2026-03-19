"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function ProblemReframe() {
  const t = useTranslations("ProblemReframe");

  return (
    <section className="bg-white text-brand-teal-deep py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mb-16"
        >
          <h2 className="text-4xl lg:text-6xl font-bold text-brand-teal mb-8 tracking-tight">
            {t("title")}
          </h2>
          <div className="space-y-8 text-lg font-medium text-brand-teal-deep/70 leading-relaxed italic">
            <p>"{t("quote")}"</p>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-20">
          <div className="space-y-12">
            <ReframeCard 
              title={t("problemTitle")}
              text={t("problemText")}
              type="problem"
            />
            <ReframeCard 
              title={t("standardTitle")}
              text={t("standardText")}
              type="standard"
            />
            <ReframeCard 
              title={t("solutionTitle")}
              text={t("solutionText")}
              type="solution"
            />
          </div>

          {/* Video/Visual Sticky */}
          <div className="lg:sticky lg:top-32 h-fit">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-video rounded-3xl overflow-hidden bg-brand-teal/5 border border-brand-teal/10 group shadow-2xl"
            >
              <div className="absolute inset-0">
                <img 
                  src="/images/video-thumb.png" 
                  alt="Clinical Treatment Video" 
                  className="w-full h-full object-cover opacity-30"
                />
              </div>
              {/* Video Placeholder */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-brand-teal/10 flex items-center justify-center backdrop-blur-sm border border-brand-teal/20 text-brand-teal transition-transform group-hover:scale-110">
                  <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-current border-b-8 border-b-transparent ml-1" />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Scrolling Content Column */}
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl lg:text-5xl font-bold leading-tight mb-16 text-brand-gold"
            >
              {t("headline")}
            </motion.h2>

            <div className="space-y-16 lg:space-y-24">
              <BenefitSection 
                number="01"
                title={t("benefit1Title")}
                text={t("benefit1Text")}
              />
              <BenefitSection 
                number="02"
                title={t("benefit2Title")}
                text={t("benefit2Text")}
              />
              <BenefitSection 
                number="03"
                title={t("benefit3Title")}
                text={t("benefit3Text")}
              />
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}

function BenefitSection({ number, title, text }: { number: string; title: string; text: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="max-w-xl"
    >
      <div className="text-brand-gold font-mono text-xl mb-4 opacity-50">{number}</div>
      <h3 className="text-2xl lg:text-3xl font-bold mb-4">{title}</h3>
      <p className="text-lg text-brand-teal-deep/70 leading-relaxed font-medium">
        {text}
      </p>
    </motion.div>
  );
}

function ReframeCard({ title, text, type }: { title: string; text: string; type: "problem" | "standard" | "solution" }) {
  const styles = {
    problem: "border-l-4 border-red-500/30 bg-red-500/5",
    standard: "border-l-4 border-brand-teal/20 bg-brand-teal/5",
    solution: "border-l-4 border-brand-gold bg-brand-gold/5",
  };

  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={cn("p-8 rounded-2xl transition-all hover:shadow-[0_20px_40px_-20px_rgba(1,102,94,0.15)] group", styles[type])}
    >
      <h3 className={cn("text-xl font-bold mb-3 transition-colors", 
        type === "problem" ? "text-red-600/80" : 
        type === "standard" ? "text-brand-teal/60" : "text-brand-teal")}>
        {title}
      </h3>
      <p className="text-brand-teal-deep/70 leading-relaxed font-medium">
        {text}
      </p>
    </motion.div>
  );
}
