import { Nav } from "./components/Nav";
import { Footer } from "./components/Footer";
import { Hero } from "./sections/Hero";
import { ProofStrip } from "./sections/ProofStrip";
import { BeforeAfter } from "./sections/BeforeAfter";
import { HowItWorks } from "./sections/HowItWorks";
import { ReviewCase } from "./sections/ReviewCase";
import { MatchProof } from "./sections/MatchProof";
import { Proof } from "./sections/Proof";
import { About } from "./sections/About";
import { Faq } from "./sections/Faq";
import { FinalCta } from "./sections/FinalCta";

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <ProofStrip />
        <BeforeAfter />
        <HowItWorks />
        <ReviewCase />
        <MatchProof />
        <Proof />
        <About />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
