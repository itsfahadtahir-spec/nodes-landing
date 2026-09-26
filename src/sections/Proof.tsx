import { ArrowUpRight } from "lucide-react";
import { H2, Section } from "../components/ui";
import { links, track, type TrackEvent } from "../lib/site";

const evidence: { title: string; body: string; href: string; event: TrackEvent; location?: string }[] = [
  {
    title: "The live workspace.",
    body: "The full August 2026 run: the review queue, every case, every match.",
    href: links.reviewQueue,
    event: "cta_workspace_click",
    location: "proof",
  },
  {
    title: "The code.",
    body: "The reconciliation engine and the test suite, on GitHub.",
    href: links.github,
    event: "cta_github_click",
  },
  {
    title: "The test results.",
    body: "993 automated tests, 235 of them scored against known answers. Zero wrong answers from the rules.",
    href: links.tests,
    event: "cta_github_click",
  },
  {
    title: "The architecture.",
    body: "How data moves through validation, matching, explanation and review.",
    href: links.architecture,
    event: "cta_github_click",
  },
];

const limits = [
  "It runs on synthetic data built to look like an e-commerce business. No client data has touched it.",
  "It works from file uploads. There are no live ERP, payment-provider or bank connections.",
  "It handles one currency, AED.",
  "It hasn't been timed against a manual close. That test comes before any time-saving claim does.",
];

export function Proof() {
  return (
    <Section id="proof">
      <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
        <div>
          <H2>Every claim on this page links to the evidence</H2>
          <ul className="mt-10 divide-y divide-neutral-200 border-y border-neutral-200">
            {evidence.map((e) => (
              <li key={e.title}>
                <a
                  href={e.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => track(e.event, e.location ? { location: e.location } : undefined)}
                  className="group flex items-start justify-between gap-6 py-5"
                >
                  <div>
                    <p className="text-lg font-semibold text-neutral-900 group-hover:text-teal-700">{e.title}</p>
                    <p className="mt-1 leading-7 text-neutral-600">{e.body}</p>
                  </div>
                  <ArrowUpRight
                    size={20}
                    aria-hidden="true"
                    className="mt-1.5 shrink-0 text-neutral-400 group-hover:text-teal-700"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <aside className="rounded-lg border border-neutral-200 bg-neutral-50 p-8 lg:self-start">
          <h3 className="text-xl font-bold text-neutral-900">What it doesn't do (yet)</h3>
          <ul className="mt-5 space-y-4">
            {limits.map((l) => (
              <li key={l} className="flex gap-3 leading-7 text-neutral-700">
                <span aria-hidden="true" className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-400" />
                {l}
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </Section>
  );
}
