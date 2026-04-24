import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { LandingHeader } from "@/components/LandingHeader";
import { Hero } from "@/components/Hero";
import { Branches } from "@/components/Branches";

import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { RollingHook } from "@/components/RollingHook";

import { Differentiation } from "@/components/Differentiation";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { ScientificProof } from "@/components/ScientificProof";
import { Compatibility } from "@/components/Compatibility";
import { ClinicalResults } from "@/components/ClinicalResults";
import { FloatingContactPanel } from "@/components/FloatingContactPanel";
import { LeadForm } from "@/components/LeadForm";


export const metadata: Metadata = {
  title: "Proven Pain Relief Treatment | YAPCHANKOR",
  description:
    "Specialized clinical care for chronic muscle and joint pain using Shaolin injury medicine and modern physiotherapy. Book your clinical assessment today.",
};

export const revalidate = 3600;

export default async function PainReliefLandingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);


  return (
    <div className="min-h-screen flex flex-col">
      <LandingHeader />
      <main className="grow">
        <Hero hideLinks={true} />
        <RollingHook hideLinks={true} />
        <Differentiation hideLinks={true} />
        <WhyChooseUs hideLinks={true} />
        <ScientificProof hideLinks={true} />
        <Compatibility hideLinks={true} />
        <ClinicalResults hideLinks={true} />

        <section id="booking-form" className="py-16 lg:py-24 bg-brand-bg relative scroll-mt-20">
          <div className="container mx-auto px-6 max-w-4xl">
            <LeadForm />
          </div>
        </section>

        <Branches hideLinks={true} />
        <FAQ />
        <FinalCTA hideLinks={true} />
      </main>
      <Footer />

      {/* Landing page specific: floating contact panel */}
      <FloatingContactPanel />
    </div>
  );
}
