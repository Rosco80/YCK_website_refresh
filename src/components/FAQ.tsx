"use client";

import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export function FAQ() {
  const t = useTranslations("FAQ");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    { q: t("q1"), a: t("a1") },
    { q: t("q2"), a: t("a2") },
    { q: t("q3"), a: t("a3") },
    { q: t("q4"), a: t("a4") },
  ];

  return (
    <section className="bg-brand-bg py-16 lg:py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-bold text-brand-teal mb-6"
          >
            {t("headline")}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-brand-teal-deep/70"
          >
            {t("description")}
          </motion.p>
        </div>

        <div className="max-w-2xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-brand-teal/10">
              <button 
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full py-6 flex items-center justify-between text-left group"
              >
                <span className="text-xl font-bold text-brand-teal group-hover:text-brand-gold transition-colors">{faq.q}</span>
                <div className="shrink-0 ml-4 text-brand-gold">
                  {openIndex === index ? <Minus size={24} /> : <Plus size={24} />}
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="pb-8 text-brand-teal-deep/70 leading-relaxed text-lg">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
