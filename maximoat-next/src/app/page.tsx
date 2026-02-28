"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { ComparisonGrid } from "@/components/sections/ComparisonGrid";
import { OTPChallenge } from "@/components/sections/OTPChallenge";
import { ScoreChallenge } from "@/components/sections/ScoreChallenge";
import { PricingSteps } from "@/components/sections/PricingSteps";
import { FAQ } from "@/components/sections/FAQ";
import { ReasonsToChoose } from "@/components/sections/ReasonsToChoose";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen selection:bg-emerald-500 selection:text-white">
      <Navbar />
      <Hero />
      <ComparisonGrid />
      <ScoreChallenge />
      <OTPChallenge />
      <ReasonsToChoose />
      <PricingSteps />
      <FAQ />
      <Footer />
    </main>
  );
}
