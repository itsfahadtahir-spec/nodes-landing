import { ChevronDown } from "lucide-react";
import { H2, Section } from "../components/ui";
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
    q: "Can I see the full workflow?",
    a: (
      <>
        Yes. The public site intentionally focuses on the product, results and control model. A demo can go deeper
        into the workflow, exception handling and product decisions.{" "}
        <a
          href={links.demoRequest}
          className="font-semibold text-teal-700 underline-offset-4 hover:underline"
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
      <div className="mx-auto max-w-3xl">
        <H2>Questions</H2>
        <div className="mt-10 divide-y divide-neutral-200 border-y border-neutral-200">
          {faqs.map((f) => (
            <details key={f.q} className="group py-2">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 rounded-md py-3 text-lg font-semibold text-neutral-900 [&::-webkit-details-marker]:hidden">
                {f.q}
                <ChevronDown
                  size={20}
                  aria-hidden="true"
                  className="shrink-0 text-neutral-500 transition-transform duration-(--duration-standard) group-open:rotate-180"
                />
              </summary>
              <p className="pb-4 leading-7 text-neutral-600">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </Section>
  );
}
