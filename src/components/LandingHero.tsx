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
            <div className="grid sm:grid-cols-2 gap-6 mb-12">
              <BenefitItem title={tb("item1.title")} desc={tb("item1.desc")} />
              <BenefitItem title={tb("item2.title")} desc={tb("item2.desc")} />
              <BenefitItem title={tb("item3.title")} desc={tb("item3.desc")} />
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
