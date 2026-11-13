import { Check } from "lucide-react";
import { ButtonLink, Container } from "../components/ui";
import { links, track } from "../lib/site";

export function FinalCta() {
  return (
    <section id="final-cta" className="relative overflow-hidden bg-ink-950 py-24 sm:py-36">
      <div aria-hidden="true" className="ink-grid pointer-events-none absolute inset-0" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[560px] w-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,rgb(8_145_178/0.35),transparent)]"
      />
      <Container className="relative text-center">
        <h2 className="mx-auto max-w-[860px] text-[2.5rem] font-semibold leading-[1.04] tracking-[-0.045em] text-white sm:text-6xl lg:text-7xl">
          Spend month-end on the <span className="text-gradient">exceptions</span>, not the matching.
        </h2>
        <p className="mx-auto mt-7 max-w-[620px] text-lg leading-8 text-white/65">
          I can walk you through the reconciliation workflow, control model, exception-handling experience and the
          product decisions behind it.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <ButtonLink
            href={links.demoRequest}
            size="lg"
            className="w-full sm:w-auto"
            onClick={() => track("cta_demo_request", { location: "final" })}
          >
            Request a demo
          </ButtonLink>
          <ButtonLink
            href={links.productOverview}
            variant="secondary"
            size="lg"
            external
            className="w-full sm:w-auto"
            onClick={() => track("cta_product_overview", { location: "final" })}
          >
            Watch the product overview
          </ButtonLink>
        </div>
        <p className="mt-6 inline-flex items-center gap-2 text-sm text-white/50">
          <Check size={14} strokeWidth={2.5} className="text-teal-300" aria-hidden="true" />
          Prefer to talk first?{" "}
          <a
            href={links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-white/80 underline decoration-white/30 underline-offset-4 hover:text-white"
            onClick={() => track("cta_linkedin_click", { location: "final" })}
          >
            Message me on LinkedIn
          </a>
        </p>
      </Container>
    </section>
  );
}
