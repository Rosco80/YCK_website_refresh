"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export function Outcomes() {
  const t = useTranslations("Outcomes");

  return (
    <section className="bg-brand-bg py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Sticky Visual Column */}
          <div className="lg:sticky lg:top-32 h-fit">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-4/5 rounded-3xl overflow-hidden bg-brand-teal/5 border border-brand-teal/10 shadow-[0_32px_64px_-16px_rgba(1,102,94,0.12)]"
            >
            <div className="absolute inset-0">
              <img 
                src="/images/knee.png" 
                alt="Patient Success" 
                className="w-full h-full object-cover opacity-60"
              />
            </div>
            <div className="absolute inset-0 bg-linear-to-t from-brand-teal/80 to-transparent" />
            
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white/40 font-bold uppercase tracking-widest relative z-10">
                Patient Success Stories
              </span>
            </div>
              
              <div className="absolute bottom-12 left-12 right-12 p-8 rounded-2xl bg-white/80 backdrop-blur-xl border border-white/40 shadow-lg">
                <h3 className="text-2xl font-bold text-brand-teal mb-2">95% Success Rate</h3>
                <p className="text-sm text-brand-teal-deep/70">
                  in improving functional mobility for chronic joint and muscle conditions reported by patients.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Scrolling Cards Column */}
          <div>
            <div className="mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-brand-teal mb-6">
                {t("headline")}
              </h2>
              <p className="text-xl text-brand-teal-deep/70">
                {t("description")}
              </p>
            </div>

            <div className="space-y-8">
              <OutcomeCard 
                title={t("condition1Title")}
                problem={t("condition1Problem")}
                result={t("condition1Result")}
              />
              <OutcomeCard 
                title={t("condition2Title")}
                problem={t("condition2Problem")}
                result={t("condition2Result")}
              />
              <OutcomeCard 
                title={t("condition3Title")}
                problem={t("condition3Problem")}
                result={t("condition3Result")}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function OutcomeCard({ title, problem, result }: { title: string; problem: string; result: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="p-10 rounded-3xl bg-white border border-brand-teal/5 shadow-clinical hover:shadow-clinical-hover transition-all"
    >
      <h3 className="text-2xl font-bold text-brand-teal mb-8 border-b border-brand-teal/5 pb-6 tracking-tight">
        {title}
      </h3>
      
      <div className="grid gap-8">
        <div>
          <span className="text-[10px] font-bold text-brand-gold uppercase tracking-[0.2em] block mb-2 opacity-60">Baseline Condition</span>
          <p className="text-brand-teal-deep/80 font-medium leading-relaxed">{problem}</p>
        </div>
        <div className="p-6 rounded-2xl bg-brand-teal/5 border border-brand-teal/5">
          <span className="text-[10px] font-bold text-brand-teal uppercase tracking-[0.2em] block mb-2 opacity-60">Functional Outcome</span>
          <p className="text-brand-teal font-bold text-lg leading-relaxed">{result}</p>
        </div>
      </div>
    </motion.div>
  );
}
