import { ButtonLink } from "../components/ui";
import { links, track } from "../lib/site";

export function FinalCta() {
  return (
    <section id="final-cta" className="bg-[linear-gradient(180deg,#F8FAFC_0%,#ECFEFF_100%)] py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
        <h2 className="text-3xl font-bold tracking-[-0.02em] text-neutral-900 sm:text-4xl lg:text-5xl">
          Open the workspace and try to catch it guessing
        </h2>
        <p className="mt-5 text-lg leading-8 text-neutral-600">Start with the review queue. Then open case 033.</p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <ButtonLink
            href={links.reviewQueue}
            external
            size="lg"
            onClick={() => track("cta_workspace_click", { location: "final" })}
          >
            Open the live workspace
          </ButtonLink>
          <ButtonLink
            href={links.github}
            variant="secondary"
            size="lg"
            external
            onClick={() => track("cta_github_click", { location: "final" })}
          >
            Read the code on GitHub
          </ButtonLink>
        </div>
        <p className="mt-6 text-sm text-neutral-600">
          Hiring for finance transformation?{" "}
          <a
            href={links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => track("cta_linkedin_click", { location: "final" })}
            className="font-semibold text-teal-700 underline-offset-4 hover:underline"
          >
            Let's talk on LinkedIn.
          </a>
        </p>
      </div>
    </section>
  );
}
