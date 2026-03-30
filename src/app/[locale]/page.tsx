import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Branches } from "@/components/Branches";
import { Insights } from "@/components/Insights";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { RollingHook } from "@/components/RollingHook";
import { Differentiation } from "@/components/Differentiation";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { ScientificProof } from "@/components/ScientificProof";
import { Compatibility } from "@/components/Compatibility";
import { ClinicalResults } from "@/components/ClinicalResults";

export const metadata: Metadata = {
  title: "Shaolin-Based Physiotherapy & Chronic Pain Treatment",
  description: "Experience the unique Shaolin heritage method for chronic pain resolution. We treat back pain, knee osteoarthritis, frozen shoulder, and more since 1979.",
};

export const revalidate = 3600; // Cache and statically regenerate the homepage every hour

import { getInsights } from "@/lib/substack";

export default async function Home() {
  const insights = await getInsights();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="grow">
        <Hero />
        <RollingHook />
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
    </div>
  );
}
