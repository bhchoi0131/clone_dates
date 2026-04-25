import { FAQSection } from '@/components/faq-section';
import { FeaturesSection } from '@/components/features-section';
import { FinalCTASection } from '@/components/final-cta-section';
import { HeroSection } from '@/components/hero-section';
import { HowItWorksSection } from '@/components/how-it-works-section';
import { ResultsSection } from '@/components/results-section';
import { SafetySection } from '@/components/safety-section';
import { SimulationPreviewSection } from '@/components/simulation-preview-section';
import { SocialProofSection } from '@/components/social-proof-section';
import { WaitlistFormSection } from '@/components/waitlist-form-section';

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-20%] h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-fuchsia-500/20 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] h-[28rem] w-[28rem] rounded-full bg-cyan-500/20 blur-[120px]" />
      </div>

      <HeroSection />
      <SocialProofSection />
      <HowItWorksSection />
      <SimulationPreviewSection />
      <FeaturesSection />
      <ResultsSection />
      <WaitlistFormSection />
      <SafetySection />
      <FAQSection />
      <FinalCTASection />
    </main>
  );
}
