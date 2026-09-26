import { Nav } from "./components/Nav";
import { Footer } from "./components/Footer";
import { Hero } from "./sections/Hero";
import { ProofStrip } from "./sections/ProofStrip";
import { BeforeAfter } from "./sections/BeforeAfter";

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <ProofStrip />
        <BeforeAfter />
      </main>
      <Footer />
    </>
  );
}
