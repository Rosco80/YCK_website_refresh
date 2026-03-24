"use client";

import { useTranslations } from "next-intl";
import { motion, Variants } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, ShieldCheck, Microscope, History } from "lucide-react";
import { cn } from "@/lib/utils";

export default function MethodPage() {
  const t = useTranslations("MethodPage");
  
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

  return (
    <div className="min-h-screen flex flex-col bg-brand-bg">
      <Header />
      
      <main className="grow">
        {/* Section 1: Hero Section */}
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-brand-teal-deep text-white">
          <div className="absolute inset-0 z-0 opacity-20">
            <img 
              src="/images/hero_cinematic.png" 
              className="w-full h-full object-cover"
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
              <h1 className="text-4xl lg:text-8xl font-black mb-6 tracking-tight drop-shadow-lg">
                {t("hero.title")}
              </h1>
              <p className="text-xl lg:text-3xl font-medium text-brand-gold max-w-3xl mx-auto uppercase tracking-widest leading-relaxed">
                {t("hero.subtitle")}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Section 2: Who We Are (Portrait Image) */}
        <section id="who-we-are" className="py-20 lg:py-32">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={revealVariants}
                className="order-2 lg:order-1"
              >
                <div className="inline-block px-4 py-1.5 rounded-full bg-brand-teal/10 text-brand-teal text-xs font-bold uppercase tracking-widest mb-6 border border-brand-teal/20">
                  {t("whoWeAre.title")}
                </div>
                <h2 className="text-3xl lg:text-6xl font-bold mb-8 text-brand-teal-deep leading-tight">
                  Over <span className="text-brand-gold">20,000</span> Patients Helped Since 1979
                </h2>
                <div className="space-y-6 text-lg text-brand-teal-deep/70 font-medium leading-relaxed">
                  <p>{t("whoWeAre.text1")}</p>
                  <p>{t("whoWeAre.text2")}</p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="order-1 lg:order-2"
              >
                <div className="relative aspect-3/4 max-w-md mx-auto rounded-3xl overflow-hidden shadow-2xl border-8 border-white group">
                  <img 
                    src="/images/yck-about.png" 
                    className="w-full h-full object-cover transition-all duration-700 hover:scale-105"
                    alt="Who We Are - Portrait"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-brand-teal-deep/30 to-transparent" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Section 3: How It Works (Narrative Style) */}
        <section className="py-24 lg:py-40 bg-zinc-900 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-gold/5 blur-[120px] rounded-full translate-x-1/2" />
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={revealVariants}
                className="text-center mb-16 lg:mb-24"
              >
                <h2 className="text-3xl lg:text-7xl font-bold mb-8 text-brand-gold tracking-tight">{t("howItWorks.title")}</h2>
                <p className="text-xl lg:text-2xl text-white/80 leading-relaxed italic">{t("howItWorks.intro")}</p>
              </motion.div>

              <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
                <motion.div 
                   initial="hidden"
                   whileInView="visible"
                   viewport={{ once: true }}
                   variants={revealVariants}
                   className="space-y-8"
                >
                  <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
                    <p className="text-white/70 leading-relaxed text-lg">{t("howItWorks.downside1")}</p>
                  </div>
                  <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
                    <p className="text-white/70 leading-relaxed text-lg">{t("howItWorks.downside2")}</p>
                  </div>
                </motion.div>

                <motion.div 
                   initial="hidden"
                   whileInView="visible"
                   viewport={{ once: true }}
                   variants={revealVariants}
                   transition={{ delay: 0.3 }}
                   className="p-10 lg:p-14 rounded-3xl bg-brand-gold text-brand-teal-deep shadow-2xl"
                >
                  <h3 className="text-2xl lg:text-4xl font-black mb-8 uppercase tracking-tight">Our Better Solution</h3>
                  <p className="text-xl lg:text-2xl font-bold leading-relaxed">
                    {t("howItWorks.solution")}
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Why It Works (Landscape Images) */}
        <section className="py-24 lg:py-40 bg-brand-bg text-brand-teal-deep">
          <div className="container mx-auto px-6">
            <div className="text-center mb-20 lg:mb-32">
              <motion.h2 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={revealVariants}
                className="text-3xl lg:text-7xl font-bold mb-6 tracking-tight"
              >
                {t("whyItWorks.title")}
              </motion.h2>
              <p className="text-brand-gold font-bold uppercase tracking-[0.3em] text-sm lg:text-lg">Science Meets Tradition</p>
            </div>

            <div className="space-y-24 lg:space-y-40">
              <WhyReason 
                title="Scientific Rigor"
                desc={t("whyItWorks.science")}
                image="/images/yck-about-who-768x361.jpg"
                reverse={false}
              />
              <WhyReason 
                title="Objective Results"
                desc={t("whyItWorks.evidence")}
                image="/images/yck-about.png"
                reverse={true}
              />
              <motion.div 
                initial="hidden" 
                whileInView="visible" 
                viewport={{ once: true }} 
                variants={revealVariants}
                className="max-w-3xl mx-auto text-center pt-12"
              >
                <p className="text-lg lg:text-2xl text-brand-teal-deep/60 italic font-medium">
                  {t("whyItWorks.placebo")}
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Section 5: A Proud History */}
        <section className="py-24 lg:py-40 bg-brand-teal-deep text-white relative">
          <div className="container mx-auto px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={revealVariants}
              className="max-w-5xl mx-auto"
            >
              <div className="grid lg:grid-cols-12 gap-12 items-start">
                <div className="lg:col-span-1 text-brand-gold opacity-30 hidden lg:block">
                  <History className="w-24 h-24" />
                </div>
                <div className="lg:col-span-11">
                  <h2 className="text-3xl lg:text-6xl font-black mb-12 text-brand-gold tracking-tight lowercase">
                    {t("history.title")}
                  </h2>
                  
                  <div className="space-y-12 text-lg lg:text-2xl text-white/80 font-medium leading-relaxed">
                    <p className="text-2xl lg:text-4xl text-white font-bold leading-tight mb-16">{t("history.text")}</p>
                    <div className="grid sm:grid-cols-2 gap-12">
                       <div className="border-l-2 border-brand-gold pl-6">
                         <p>{t("history.detail1")}</p>
                       </div>
                       <div className="border-l-2 border-brand-gold pl-6">
                         <p>{t("history.detail2")}</p>
                       </div>
                    </div>
                    <p className="pt-12 text-brand-gold font-bold">
                      {t("history.conclusion")}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}



function WhyReason({ title, desc, image, reverse }: { title: string; desc: string; image: string; reverse: boolean }) {
  return (
    <div className={cn(
      "grid lg:grid-cols-2 gap-12 lg:gap-24 items-center",
      reverse && "lg:flex-row-reverse"
    )}>
      <motion.div
        initial={{ opacity: 0, x: reverse ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className={cn(reverse ? "lg:order-2" : "lg:order-1")}
      >
        <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl relative group bg-zinc-100">
          <img src={image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt={title} />
          <div className="absolute inset-0 bg-brand-teal-deep/10 group-hover:bg-transparent transition-colors duration-500" />
        </div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, x: reverse ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className={cn(reverse ? "lg:order-1" : "lg:order-2")}
      >
        <h3 className="text-3xl lg:text-5xl font-bold mb-8 text-brand-teal-deep tracking-tight">{title}</h3>
        <p className="text-lg lg:text-2xl text-brand-teal-deep/70 font-medium leading-relaxed mb-10">
          {desc}
        </p>
        <div className="flex items-center text-brand-teal font-black tracking-widest uppercase text-xs cursor-pointer group">
          <span>Explore Details</span>
          <ArrowRight className="w-4 h-4 ml-3 group-hover:translate-x-2 transition-transform" />
        </div>
      </motion.div>
    </div>
  );
}
