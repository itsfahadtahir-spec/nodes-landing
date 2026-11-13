import { Nav } from "./components/Nav";
import { Footer } from "./components/Footer";
import { Hero } from "./sections/Hero";
import { ProofStrip } from "./sections/ProofStrip";
import { BeforeAfter } from "./sections/BeforeAfter";
import { HowItWorks } from "./sections/HowItWorks";
import { ProductPreview } from "./sections/ProductPreview";
import { ControlPhilosophy } from "./sections/ControlPhilosophy";
import { Proof } from "./sections/Proof";
import { About } from "./sections/About";
import { Faq } from "./sections/Faq";
import { FinalCta } from "./sections/FinalCta";
import { VideoDemo } from "./sections/VideoDemo";
import { Sources } from "./sections/Sources";
import { StickyCta } from "./components/StickyCta";

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <ProofStrip />
        <VideoDemo />
        <BeforeAfter />
        <HowItWorks />
        <ProductPreview />
        <Sources />
        <ControlPhilosophy />
        <Proof />
        <About />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <StickyCta />
    </>
  );
}
