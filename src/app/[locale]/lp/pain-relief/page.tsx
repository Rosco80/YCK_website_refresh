import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { LandingHeader } from "@/components/LandingHeader";
import { Hero } from "@/components/Hero";
import { Branches } from "@/components/Branches";
import { Insights } from "@/components/Insights";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { RollingHook } from "@/components/RollingHook";
import { ConditionsGrid } from "@/components/ConditionsGrid";
import { Differentiation } from "@/components/Differentiation";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { ScientificProof } from "@/components/ScientificProof";
import { Compatibility } from "@/components/Compatibility";
import { ClinicalResults } from "@/components/ClinicalResults";
import { FloatingContactPanel } from "@/components/FloatingContactPanel";
import { getInsights } from "@/lib/substack";

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
  const insights = await getInsights();

  return (
    <div className="min-h-screen flex flex-col">
      <LandingHeader />
      <main className="grow">
        <Hero />
        <RollingHook />
        <ConditionsGrid />
        <Differentiation />
        <WhyChooseUs />
        <ScientificProof />
        <Compatibility />
        <ClinicalResults />
        <Insights latestInsights={insights.slice(0, 3)} />
        <Branches />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />

      {/* Landing page specific: floating contact panel */}
      <FloatingContactPanel />
    </div>
  );
}
