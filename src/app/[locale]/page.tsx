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

export default function Home() {
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
        <Insights />
        <Branches />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
