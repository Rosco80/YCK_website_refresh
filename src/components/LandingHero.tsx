"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { LeadForm } from "./LeadForm";
import { CheckCircle2 } from "lucide-react";

export function LandingHero() {
  const t = useTranslations("LandingPage.hero");
  const tb = useTranslations("LandingPage.benefits");

  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-24 overflow-hidden bg-brand-bg">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/yck_home_hero.webp" 
          alt="Clinical treatment"
          fill
          priority
          className="object-cover object-center opacity-20"
        />
        <div className="absolute inset-0 bg-linear-to-b from-brand-bg/95 via-brand-bg/80 to-brand-bg" />
      </div>

      <div className="container mx-auto px-6 z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Content Side */}
          <div className="lg:col-span-7">
            {/* Top Image */}
            <div className="mb-10 rounded-3xl overflow-hidden shadow-clinical border border-brand-teal/5 relative aspect-2/1 max-w-3xl">
              <Image 
                src="/images/yck-about.webp" 
                alt="YAPCHANKOR Clinical Heritage"
                fill
                className="object-contain"
              />
            </div>

            <span className="inline-block px-4 py-1.5 rounded-full bg-brand-teal/10 text-brand-teal text-xs font-bold tracking-widest uppercase mb-6">
              {t("label")}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-teal-deep mb-6 leading-tight">
              {t("title")}
            </h1>
            <p className="text-xl text-brand-teal-deep/80 mb-8 font-medium">
              {t("subtitle")}
            </p>
            <p className="text-lg text-brand-teal-deep/60 mb-12 max-w-2xl leading-relaxed">
              {t("description")}
            </p>

            {/* Benefits List */}
            <div className="grid sm:grid-cols-2 gap-6 mb-16">
              <BenefitItem title={tb("item1.title")} desc={tb("item1.desc")} />
              <BenefitItem title={tb("item2.title")} desc={tb("item2.desc")} />
              <BenefitItem title={tb("item3.title")} desc={tb("item3.desc")} />
            </div>

            {/* Monash Study Section */}
            <div className="bg-white/50 border border-brand-teal/10 rounded-3xl p-8 shadow-clinical">
              <h3 className="text-xl font-bold text-brand-teal-deep mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-brand-teal/10 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-brand-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </span>
                {useTranslations("LandingPage.monashStudy")("title")}
              </h3>
              <p className="text-brand-teal-deep/70 mb-6 text-sm font-medium">
                {useTranslations("LandingPage.monashStudy")("subtitle")}
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm text-brand-teal-deep/80 font-bold">
                  <div className="w-1.5 h-1.5 bg-brand-teal rounded-full" />
                  {useTranslations("LandingPage.monashStudy")("finding1")}
                </div>
                <div className="flex items-center gap-3 text-sm text-brand-teal-deep/80 font-bold">
                  <div className="w-1.5 h-1.5 bg-brand-teal rounded-full" />
                  {useTranslations("LandingPage.monashStudy")("finding2")}
                </div>
                <div className="flex items-center gap-3 text-sm text-brand-teal-deep/80 font-bold">
                  <div className="w-1.5 h-1.5 bg-brand-teal rounded-full" />
                  {useTranslations("LandingPage.monashStudy")("finding3")}
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-5 relative">
            <div className="absolute -inset-4 bg-brand-gold/10 rounded-3xl blur-2xl z-0" />
            <LeadForm className="relative z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}

function BenefitItem({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="flex gap-4">
      <div className="mt-1">
        <CheckCircle2 className="w-6 h-6 text-brand-teal" />
      </div>
      <div>
        <h4 className="font-bold text-brand-teal-deep">{title}</h4>
        <p className="text-sm text-brand-teal-deep/60">{desc}</p>
      </div>
    </div>
  );
}
