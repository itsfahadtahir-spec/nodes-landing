import { ButtonLink, Eyebrow, H2, Section } from "../components/ui";
import { links, track } from "../lib/site";

// TODO(launch): add Fahad's real month-end anecdote (docs/nodes-landing-copy.md §4.9) and headshot.
export function About() {
  return (
    <Section id="about" tone="muted">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-20">
        <div className="max-w-2xl">
          <Eyebrow>Who built this</Eyebrow>
          <H2>Built by someone who's sat through month-end</H2>
          <p className="mt-6 text-lg leading-8 text-neutral-700">
            I'm Fahad. I've spent about ten years in finance and commercial roles, five of them at Canon in
            financial analysis, reporting and an ERP migration. I've passed 9 of 13 ACCA papers.
          </p>
          <p className="mt-4 text-lg leading-8 text-neutral-700">
            I built Nodes around one rule: automate what can be proven, explain what can't, and leave the judgment
            with finance.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <ButtonLink
              href={links.linkedin}
              external
              size="lg"
              onClick={() => track("cta_linkedin_click", { location: "about" })}
            >
              Let's talk on LinkedIn
            </ButtonLink>
            <ButtonLink
              href={links.cv}
              variant="secondary"
              size="lg"
              download
              onClick={() => track("cv_download", { location: "about" })}
            >
              Get my CV
            </ButtonLink>
          </div>
          {links.email && (
            <p className="mt-4 text-sm text-neutral-600">
              <a href={`mailto:${links.email}`} className="font-mono text-teal-700 hover:text-teal-800">
                {links.email}
              </a>
            </p>
          )}
        </div>
        <div className="hidden lg:block">
          <div
            aria-hidden="true"
            className="aspect-square w-full rounded-lg border border-neutral-200 bg-[linear-gradient(135deg,#ECFEFF,#F8FAFC)]"
          />
        </div>
      </div>
    </Section>
  );
}
