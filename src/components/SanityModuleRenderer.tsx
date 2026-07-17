import { Hero } from "@/components/Hero";
import { LandingHero } from "@/components/LandingHero";
import { LandingLocations } from "@/components/LandingLocations";
import { Branches } from "@/components/Branches";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { RollingHook } from "@/components/RollingHook";
import { Differentiation } from "@/components/Differentiation";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { ScientificProof } from "@/components/ScientificProof";
import { Compatibility } from "@/components/Compatibility";
import { ClinicalResults } from "@/components/ClinicalResults";
import { LeadForm } from "@/components/LeadForm";
import { PortableText } from "@portabletext/react";

interface ModuleProps {
  module: any;
  whatsappMessage?: string;
  whatsappNumber?: string;
}

function ConditionContent({ title, content }: { title: string; content: any }) {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-black text-brand-teal-deep mb-8 font-banda">{title}</h2>
        <div className="prose prose-lg prose-teal max-w-none text-brand-teal-deep/80">
          <PortableText value={content} />
        </div>
      </div>
    </section>
  );
}

export function SanityModuleRenderer({ module, whatsappMessage, whatsappNumber }: ModuleProps) {
  const { _type } = module;

  switch (_type) {
    case 'heroModule':
      return <Hero hideLinks={true} customTitle={module.title} customSubtitle={module.subtitle} />;

    case 'landingHeroModule':
      return <LandingHero />;
      
    case 'conditionModule':
      return <ConditionContent title={module.title} content={module.content} />;
      
    case 'leadFormModule':
      return (
        <section id="booking-form" className="py-16 lg:py-24 bg-brand-bg relative scroll-mt-20">
          <div className="container mx-auto px-6 max-w-4xl">
            <LeadForm />
          </div>
        </section>
      );
      
    case 'predefinedModule':
      switch (module.sectionType) {
        case 'rollingHook':
          return <RollingHook hideLinks={true} />;
        case 'differentiation':
          return <Differentiation hideLinks={true} />;
        case 'whyChooseUs':
          return <WhyChooseUs hideLinks={true} />;
        case 'scientificProof':
          return <ScientificProof hideLinks={true} />;
        case 'compatibility':
          return <Compatibility hideLinks={true} />;
        case 'clinicalResults':
          return <ClinicalResults hideLinks={true} />;
        case 'branches':
          return <Branches hideLinks={true} />;
        case 'landingLocations':
          return <LandingLocations customMessage={whatsappMessage} customNumber={whatsappNumber} />;
        case 'faq':
          return <FAQ />;
        case 'finalCta':
          return <FinalCTA hideLinks={true} />;
        default:
          return null;
      }

    default:
      console.warn(`Unknown module type: ${_type}`);
      return null;
  }
}
