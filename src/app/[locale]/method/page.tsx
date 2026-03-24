"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, ShieldCheck, Microscope, History } from "lucide-react";
import { cn } from "@/lib/utils";

export default function MethodPage() {
  const t = useTranslations("MethodPage");
  
  const revealVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
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
                  Custodian of a <span className="text-brand-gold">Centuries-Old</span> Heritage
                </h2>
                <div className="space-y-6 text-lg text-brand-teal-deep/70 font-medium leading-relaxed">
                  <p>{t("whoWeAre.text1")}</p>
                  <p>{t("whoWeAre.text2")}</p>
                </div>
                
                <div className="mt-12 flex flex-col sm:flex-row gap-6">
                  <Button className="bg-brand-teal hover:bg-brand-teal-deep text-white rounded-full px-10 h-14 uppercase tracking-widest font-bold shadow-clinical hover:shadow-clinical-hover transition-all">
                    Discover Our Story
                  </Button>
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
                    src="/images/method_portrait_placeholder.png" 
                    className="w-full h-full object-cover grayscale-20 group-hover:grayscale-0 transition-all duration-700 hover:scale-105"
                    alt="Who We Are - Portrait"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-brand-teal-deep/30 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 p-6 glassmorphism rounded-2xl border border-white/20 shadow-lg backdrop-blur-md">
                    <p className="text-brand-teal-deep text-sm font-bold tracking-tight mb-1">FOUNDED 1979</p>
                    <p className="text-brand-gold text-xs font-bold uppercase tracking-widest">A legacy of clinical excellence</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Section 3: How It Works (3 Steps) */}
        <section className="py-24 lg:py-40 bg-zinc-900 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-gold/5 blur-[120px] rounded-full translate-x-1/2" />
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-20 lg:mb-32">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={revealVariants}
              >
                <h2 className="text-3xl lg:text-7xl font-bold mb-8 text-brand-gold tracking-tight">{t("howItWorks.title")}</h2>
                <div className="h-1 w-24 bg-brand-gold mx-auto rounded-full" />
              </motion.div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
              <StepCard 
                icon={<ShieldCheck className="w-8 h-8 text-brand-gold" />}
                title={t("howItWorks.step1")}
                desc={t("howItWorks.step1Desc")}
                number="01"
                delay={0.1}
              />
              <StepCard 
                icon={<Microscope className="w-8 h-8 text-brand-gold" />}
                title={t("howItWorks.step2")}
                desc={t("howItWorks.step2Desc")}
                number="02"
                delay={0.3}
              />
              <StepCard 
                icon={<CheckCircle2 className="w-8 h-8 text-brand-gold" />}
                title={t("howItWorks.step3")}
                desc={t("howItWorks.step3Desc")}
                number="03"
                delay={0.5}
              />
            </div>
          </div>
        </section>

        {/* Section 4: Why It Works (Landscape Images) */}
        <section className="py-24 lg:py-40 bg-brand-bg">
          <div className="container mx-auto px-6">
            <div className="text-center mb-20 lg:mb-32">
              <motion.h2 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={revealVariants}
                className="text-3xl lg:text-7xl font-bold text-brand-teal-deep mb-6 tracking-tight"
              >
                {t("whyItWorks.title")}
              </motion.h2>
              <p className="text-brand-gold font-bold uppercase tracking-[0.3em] text-sm lg:text-lg">Science Meets Tradition</p>
            </div>

            <div className="space-y-24 lg:space-y-40">
              <WhyReason 
                title={t("whyItWorks.reason1")}
                desc={t("whyItWorks.reason1Desc")}
                image="/images/method_landscape_1_placeholder.png"
                reverse={false}
              />
              <WhyReason 
                title={t("whyItWorks.reason2")}
                desc={t("whyItWorks.reason2Desc")}
                image="/images/method_landscape_2_placeholder.png"
                reverse={true}
              />
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
              <div className="grid lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-1 text-brand-gold opacity-30 hidden lg:block">
                  <History className="w-24 h-24" />
                </div>
                <div className="lg:col-span-11">
                  <h2 className="text-3xl lg:text-6xl font-black mb-10 text-brand-gold tracking-tight">
                    {t("history.title")}
                  </h2>
                  <div className="text-xl lg:text-3xl font-medium text-white/80 leading-relaxed border-l-4 border-brand-gold pl-8 lg:pl-16 italic">
                    {t("history.text")}
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

function StepCard({ icon, title, desc, number, delay }: { icon: React.ReactNode; title: string; desc: string; number: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.8 }}
      className="bg-white/5 border border-white/10 p-10 lg:p-14 rounded-3xl hover:bg-white/10 transition-all group relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 p-6 text-6xl font-black text-white/5 group-hover:text-brand-gold/10 transition-colors pointer-events-none">
        {number}
      </div>
      <div className="w-16 h-16 rounded-2xl bg-brand-gold/10 flex items-center justify-center mb-10 group-hover:scale-110 transition-transform duration-500">
        {icon}
      </div>
      <h3 className="text-2xl lg:text-3xl font-bold mb-6 text-brand-gold tracking-tight">{title}</h3>
      <p className="text-white/60 font-medium leading-relaxed text-lg">{desc}</p>
    </motion.div>
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
