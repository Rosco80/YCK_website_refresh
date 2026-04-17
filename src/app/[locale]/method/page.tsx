"use client";

import { useTranslations } from "next-intl";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/routing";
import { CheckCircle2, ArrowRight, ShieldCheck, Microscope, Activity } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export default function MethodPage() {
  const t = useTranslations("MethodPage");
  const tw = useTranslations("WhatsApp");
  const whatsappUrl = getWhatsAppUrl(tw("defaultMessage"));
  
  const revealVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8, 
        ease: [0.16, 1, 0.3, 1]
      } 
    }
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TherapeuticProcedure",
    "name": "The YAPCHANKOR Method",
    "alternateName": ["Shaolin-Based Physiotherapy", "Integrated Pain Resolution"],
    "description": t("hero.subtitle"),
    "procedureType": "PhysicalTherapy",
    "relevantSpecialty": ["Physiotherapy", "TraditionalChineseMedicine"],
    "howItWorks": [
      t("treatment.physio.title"),
      t("treatment.rehab.title"),
      t("treatment.herbal.title")
    ]
  };

  return (
    <div className="min-h-screen flex flex-col bg-brand-bg">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      
      <main className="grow">
        {/* Section 1: Full-width Hook */}
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-brand-teal-deep text-white">
          <div className="absolute inset-0 z-0 opacity-20">
            <Image 
              src="/images/hero_cinematic.png" 
              className="object-cover"
              fill
              sizes="100vw"
              priority
              alt=""
            />
            <div className="absolute inset-0 bg-linear-to-b from-brand-teal-deep/80 via-transparent to-brand-teal-deep" />
          </div>
          
          <div className="container mx-auto px-6 relative z-10 text-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={revealVariants}
            >
              <h1 className="text-display mb-6 drop-shadow-lg">
                {t("hero.title")}
              </h1>
              <p className="text-label text-xl lg:text-2xl max-w-4xl mx-auto mb-12">
                {t("hero.subtitle")}
              </p>
              <div className="max-w-3xl mx-auto text-body-lg text-white/90 space-y-6">
                <p>{t("hero.hook")}</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Section 2: Three-column Treatment Section */}
        <section className="py-24 lg:py-32 bg-white">
          <div className="container mx-auto px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={revealVariants}
              className="text-center mb-16"
            >
              <h2 className="text-h2 text-brand-teal-deep mb-4">{t("treatment.title")}</h2>
              <div className="w-24 h-1 bg-brand-gold mx-auto" />
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
              <TreatmentCard 
                icon={<CheckCircle2 className="w-10 h-10 text-brand-teal" />}
                title={t("treatment.physio.title")}
                text={t("treatment.physio.text")}
                delay={0}
              />
              <TreatmentCard 
                icon={<Activity className="w-10 h-10 text-brand-teal" />}
                title={t("treatment.rehab.title")}
                text={t("treatment.rehab.text")}
                delay={0.2}
              />
              <TreatmentCard 
                icon={<ShieldCheck className="w-10 h-10 text-brand-teal" />}
                title={t("treatment.herbal.title")}
                text={t("treatment.herbal.text")}
                delay={0.4}
              />
            </div>
          </div>
        </section>

        {/* Section 3: Why Integration Matters */}
        <section className="py-24 lg:py-32 bg-brand-bg relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-gold/5 blur-3xl rounded-full" />
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={revealVariants}
              >
                <h2 className="text-h2 text-brand-teal-deep mb-12">
                  {t("integration.title")}
                </h2>
                <div className="text-lead space-y-8 italic">
                  <p>{t("integration.text1")}</p>
                  <p className="not-italic text-body-lg">{t("integration.text2")}</p>
                  <p className="text-brand-teal font-bold border-t border-brand-teal/10 pt-8 not-italic">
                    {t("integration.text3")}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Section 4: Clinical Practice (Pull Quote) */}
        <section className="py-24 lg:py-32 bg-white">
          <div className="container mx-auto px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={revealVariants}
              className="max-w-5xl mx-auto"
            >
              <div className="flex flex-col md:flex-row items-center gap-12 p-12 lg:p-20 rounded-[3rem] bg-brand-teal-deep text-white relative overflow-hidden">
                <div className="absolute top-0 left-0 w-24 h-24 bg-brand-gold/10 rounded-br-full" />
                <div className="relative z-10 flex-1">
                  <h2 className="text-h3 text-brand-gold mb-8">
                    {t("clinical.title")}
                  </h2>
                  <div className="text-body-lg text-white/90 space-y-6">
                    <p className="border-l-4 border-brand-gold pl-8 italic">{t("clinical.text1")}</p>
                    <p>{t("clinical.text2")}</p>
                  </div>
                </div>
                <div className="relative z-10 hidden lg:block">
                  <Image 
                    src="/images/yck-about.webp" 
                    width={400} 
                    height={500} 
                    className="rounded-3xl shadow-2xl border-4 border-white/20"
                    alt="Clinical Practice"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Section 5: Science Section */}
        <section className="py-24 lg:py-32 bg-brand-bg">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={revealVariants}
              >
                <div className="text-label inline-block px-4 py-1.5 rounded-full bg-brand-teal/10 mb-6 border border-brand-teal/20">
                  Laboratory Linked
                </div>
                <h2 className="text-h2 text-brand-teal-deep mb-8">
                  {t("science.title")}
                </h2>
                <p className="text-body-lg text-brand-teal-deep/70 mb-8">
                  {t("science.intro")}
                </p>
                <p className="text-h4 text-brand-teal mb-4">{t("science.findings")}</p>
                <div className="space-y-4">
                  {[1, 2, 3].map((num) => (
                    <div key={num} className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-brand-teal/10">
                      <div className="shrink-0 w-8 h-8 rounded-full bg-brand-teal text-white flex items-center justify-center font-bold">
                        {num}
                      </div>
                      <p className="text-body font-bold text-brand-teal-deep">{t(`science.finding${num}`)}</p>
                    </div>
                  ))}
                </div>
                <p className="text-body text-brand-teal-deep/60 mt-8 italic font-bold">{t("science.conclusion")}</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative aspect-square lg:aspect-4/5 xl:aspect-square bg-white rounded-[3rem] p-12 shadow-xl border border-brand-teal/10 flex flex-col justify-center"
              >
                <Microscope className="w-24 h-24 text-brand-gold/40 mb-8" />
                <h3 className="text-h3 text-brand-teal-deep mb-6 uppercase">
                  Independent Scientific Research
                </h3>
                <p className="text-label text-xl tracking-widest leading-loose">
                  RELI<span className="text-brand-gold">VIUM</span> SCIENCES × YAP<span className="text-brand-gold">CHAN</span>KOR
                </p>
                <div className="absolute bottom-12 right-12 opacity-10">
                  <Microscope className="w-48 h-48" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Section 6: Heritage Section */}
        <section className="py-24 lg:py-40 bg-white relative">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={revealVariants}
                className="grid lg:grid-cols-12 gap-12 lg:gap-24"
              >
                <div className="lg:col-span-7">
                  <div className="text-label inline-block px-4 py-1.5 rounded-full border border-brand-teal/20 bg-brand-teal/5 mb-8">
                    Ancient Wisdom Meets Modern Science
                  </div>
                  <h2 className="text-h2 text-brand-teal-deep mb-12">
                    {t("heritage.title")}
                  </h2>
                  <div className="text-body-lg text-brand-teal-deep/80 space-y-8">
                    <p className="text-h3 text-brand-teal border-l-4 border-brand-gold pl-8 lg:pl-12 mb-12">
                      {t("heritage.text1")}
                    </p>
                    <p>{t("heritage.text2")}</p>
                    <p>{t("heritage.text3")}</p>
                    <p className="text-label pt-8 border-t border-brand-teal/10 text-center">
                      {t("heritage.text4")}
                    </p>
                  </div>
                </div>
                <div className="lg:col-span-5">
                  <div className="sticky top-32">
                    <div className="relative aspect-3/4 rounded-[2.5rem] overflow-hidden shadow-2xl group border-8 border-white">
                      <Image 
                        src="/images/about-history.webp" 
                        className="object-cover transition-transform duration-1000 group-hover:scale-105"
                        fill
                        alt="Our Heritage"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-brand-teal-deep/40 to-transparent" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Section 7: Clinic to Product */}
        <section className="py-24 bg-brand-teal-deep text-white">
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={revealVariants}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-h2 text-brand-gold mb-8">
                {t("product.title")}
              </h2>
              <div className="text-lead text-white/90 space-y-8">
                <p>{t("product.text1")}</p>
                <p className="text-body-lg text-white/70 italic border-t border-white/10 pt-8">
                  {t("product.text2")}
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Section 8: Measurement */}
        <section className="py-16 bg-brand-gold text-brand-teal-deep text-center">
          <div className="container mx-auto px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={revealVariants}
            >
              <h2 className="text-h3 uppercase mb-4">
                {t("measurement.title")}
              </h2>
              <p className="text-lead font-bold max-w-4xl mx-auto">
                {t("measurement.text")}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Section 9: What This Means */}
        <section className="py-24 lg:py-40 bg-brand-bg relative overflow-hidden">
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-5xl mx-auto">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={revealVariants}
                className="text-center"
              >
                <h2 className="text-h2 text-brand-teal-deep mb-16">
                  {t("summary.title")}
                </h2>
                <div className="grid md:grid-cols-2 gap-12 text-left">
                  <div className="p-10 rounded-[2.5rem] bg-white shadow-xl border border-brand-teal/5">
                    <p className="text-body-lg font-bold text-brand-teal-deep/80">
                      {t("summary.text1")}
                    </p>
                  </div>
                  <div className="p-10 rounded-[2.5rem] bg-brand-teal text-white shadow-xl flex items-center">
                    <p className="text-h3">
                      {t("summary.text2")}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Section 10: Final CTA */}
        <section id="book-now" className="py-24 lg:py-40 bg-brand-teal-deep text-white text-center">
          <div className="container mx-auto px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={revealVariants}
            >
              <h2 className="text-h2 text-brand-gold mb-8">
                {t("cta.title")}
              </h2>
              <p className="text-lead text-white/80 max-w-3xl mx-auto mb-12 italic">
                {t("cta.text")}
              </p>
              <Button 
                size="lg" 
                className="w-full sm:w-auto h-16 sm:h-20 px-6 sm:px-12 text-label text-lg sm:text-2xl bg-white text-brand-teal-deep hover:scale-105 hover:bg-brand-gold hover:text-white transition-all duration-300 rounded-full shadow-[0_20px_40px_-10px_rgba(255,255,255,0.2)]"
                asChild
              >
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                  {t("cta.button")} <ArrowRight className="ml-2 sm:ml-4 w-5 h-5 sm:w-8 sm:h-8" />
                </a>
              </Button>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

function TreatmentCard({ icon, title, text, delay }: { icon: React.ReactNode; title: string; text: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6 }}
      className="p-10 rounded-[2.5rem] bg-brand-bg border border-brand-teal/10 hover:border-brand-teal/30 transition-colors group h-full flex flex-col"
    >
      <div className="mb-8 p-4 rounded-2xl bg-white w-fit shadow-lg group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-h3 text-brand-teal-deep mb-6">
        {title}
      </h3>
      <p className="text-body text-brand-teal-deep/70 grow">
        {text}
      </p>
    </motion.div>
  );
}
