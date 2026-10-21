import { ButtonLink } from "../components/ui";
import { links, track } from "../lib/site";

export function FinalCta() {
  return (
    <section id="final-cta" className="bg-[linear-gradient(180deg,#F8FAFC_0%,#ECFEFF_100%)] py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
        <h2 className="text-3xl font-bold tracking-[-0.02em] text-neutral-900 sm:text-4xl lg:text-5xl">
          Want to see how Nodes works?
        </h2>
        <p className="mt-5 text-lg leading-8 text-neutral-600">
          I can walk you through the reconciliation workflow, control model, exception-handling experience and the
          product decisions behind it.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <ButtonLink
            href={links.demoRequest}
            size="lg"
            onClick={() => track("cta_demo_request", { location: "final" })}
          >
            Request a demo
          </ButtonLink>
          <ButtonLink
            href={links.productOverview}
            variant="secondary"
            size="lg"
            external
            onClick={() => track("cta_product_overview", { location: "final" })}
          >
            Watch product overview
          </ButtonLink>
          <ButtonLink
            href={links.linkedin}
            variant="secondary"
            size="lg"
            external
            onClick={() => track("cta_linkedin_click", { location: "final" })}
          >
            Connect on LinkedIn
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
