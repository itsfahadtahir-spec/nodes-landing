import { ChevronDown } from "lucide-react";
import { H2, Reveal, Section } from "../components/ui";
import { links, track } from "../lib/site";

const faqs: { q: string; a: React.ReactNode }[] = [
  {
    q: "What problem does Nodes solve?",
    a: "Nodes helps structure high-volume reconciliation across ERP, payment-provider and bank records, while directing finance attention toward the exceptions that genuinely require investigation.",
  },
  {
    q: "Does AI perform the reconciliation?",
    a: "No. Financial matching is handled using deterministic logic. AI is used only to help explain unresolved cases using the evidence available to the system.",
  },
  {
    q: "What happens when the evidence is unclear?",
    a: "Nodes does not force a match. The case remains open and is routed to Finance for review and decision.",
  },
  {
    q: "Where do the 95% and 0 figures come from?",
    a: "From a controlled known-answer test of more than 1,000 e-commerce transactions, where the correct outcome for every record was set before the run. They are test results, not figures from live customer data.",
  },
  {
    q: "Can I trace a match back to the source?",
    a: "Yes. Every match stays traceable to the source rows it came from, and every review decision is recorded in the case history.",
  },
  {
    q: "What does a demo cover?",
    a: (
      <>
        A live walkthrough of the reconciliation workflow, the control model, exception handling and the product
        decisions behind them. Bring the reconciliation that costs your team the most time and we can talk it through.{" "}
        <a
          href={links.demoRequest}
          className="font-semibold text-teal-300 underline-offset-4 hover:underline"
          onClick={() => track("cta_demo_request", { location: "faq" })}
        >
          Request a demo
        </a>
      </>
    ),
  },
];

export function Faq() {
  return (
    <Section id="faq">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-20">
        <Reveal>
          <p className="eyebrow mb-4">FAQ</p>
          <H2>Questions finance teams ask first.</H2>
          <p className="mt-6 text-lg leading-8 text-white/65">
            Something else on your mind?{" "}
            <a
              href={links.demoRequest}
              className="font-semibold text-white underline decoration-teal-300/60 underline-offset-4 hover:decoration-teal-300"
              onClick={() => track("cta_demo_request", { location: "faq" })}
            >
              Ask it in a demo.
            </a>
          </p>
        </Reveal>
        <Reveal delay={120}>
          <div className="divide-y divide-white/[0.08] border-y border-white/[0.08]">
            {faqs.map((f) => (
              <details key={f.q} className="group py-2">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 rounded-md py-4 text-lg font-semibold text-white [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <ChevronDown
                    size={20}
                    aria-hidden="true"
                    className="shrink-0 text-white/40 transition-transform duration-(--duration-standard) group-open:rotate-180"
                  />
                </summary>
                <p className="pb-5 pr-10 leading-7 text-white/60">{f.a}</p>
              </details>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
