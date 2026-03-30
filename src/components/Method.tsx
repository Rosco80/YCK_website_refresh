import { useTranslations } from "next-intl";

export function Method() {
  const t = useTranslations("Method");

  return (
    <section className="bg-brand-bg py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Text Content Column */}
          <div className="order-2 lg:order-1">
            <div
              className="mb-16"
            >
              <h2 className="text-4xl lg:text-6xl font-bold text-brand-teal mb-6 tracking-tight">
                {t("title")}
              </h2>
              <p className="text-xl text-brand-teal-deep/70 max-w-xl leading-relaxed font-medium">
                {t("subtitle")}
              </p>
            </div>

            <div className="space-y-16">
              <MethodStep 
                num="01"
                title={t("step1Title")}
                text={t("step1Text")}
                delay={0.1}
              />
              <MethodStep 
                num="02"
                title={t("step2Title")}
                text={t("step2Text")}
                delay={0.2}
              />
              <MethodStep 
                num="03"
                title={t("step3Title")}
                text={t("step3Text")}
                delay={0.3}
              />
              <MethodStep 
                num="04"
                title={t("step4Title")}
                text={t("step4Text")}
                delay={0.4}
              />
            </div>
          </div>

          {/* Sticky Visual Column */}
          <div className="lg:sticky lg:top-32 h-fit order-1 lg:order-2">
            <div 
              className="relative aspect-square rounded-full border-2 border-brand-teal/5 p-12 flex items-center justify-center bg-white shadow-[0_32px_64px_-16px_rgba(1,102,94,0.08)]"
            >
              {/* Method Circle Graphic - Subtle & Weighted */}
              <div className="absolute inset-4 border-r border-brand-gold/30 rounded-full animate-[spin_60s_linear_infinite]" />
              <div className="absolute inset-8 border-l border-brand-teal/20 rounded-full animate-[spin_40s_linear_infinite_reverse]" />
              
              <div className="relative text-center p-14 bg-white rounded-full border border-brand-teal/5 shadow-inner z-10">
                <span className="block text-brand-gold font-bold text-xs uppercase tracking-[0.2em] mb-3">
                  Clinical Framework
                </span>
                <span className="block text-4xl font-bold text-brand-teal leading-tight tracking-tight">
                  Structured<br />Recovery
                </span>
              </div>

              {/* Step Indicators - Refined */}
              <StepIndicator pos="top" num="1" active />
              <StepIndicator pos="right" num="2" />
              <StepIndicator pos="bottom" num="3" />
              <StepIndicator pos="left" num="4" />
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}

function MethodStep({ num, title, text, delay }: { num: string; title: string; text: string; delay: number }) {
  return (
    <div 
      className="group flex gap-8 items-start"
    >
      <span className="text-sm font-bold text-brand-gold/40 tracking-widest mt-2">{num}</span>
      <div>
        <h3 className="text-2xl font-bold text-brand-teal mb-3 group-hover:text-brand-gold transition-colors">
          {title}
        </h3>
        <p className="text-brand-teal-deep/70 leading-relaxed max-w-lg font-medium">
          {text}
        </p>
      </div>
    </div>
  );
}

function StepIndicator({ pos, num, active }: { pos: "top" | "right" | "bottom" | "left"; num: string; active?: boolean }) {
  const positions = {
    top: "-top-6 left-1/2 -translate-x-1/2",
    right: "top-1/2 -right-6 -translate-y-1/2",
    bottom: "-bottom-6 left-1/2 -translate-x-1/2",
    left: "top-1/2 -left-6 -translate-y-1/2",
  };

  return (
    <div className={`absolute ${positions[pos]} w-14 h-14 rounded-full flex items-center justify-center font-bold text-lg border-2 z-20 ${active ? 'bg-brand-gold border-brand-gold text-white shadow-[0_8px_24px_-4px_rgba(204,167,116,0.3)]' : 'bg-white border-brand-teal/10 text-brand-teal/40'}`}>
      {num}
    </div>
  );
}
