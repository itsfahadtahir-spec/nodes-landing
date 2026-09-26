import { ChevronDown } from "lucide-react";
import { H2, Section } from "../components/ui";

// TODO(launch): confirm the "under the hood" answer with Fahad (docs/nodes-landing-copy.md §8.6).
const faqs = [
  {
    q: "Wait, is AI doing the accounting?",
    a: "No. Every match, amount and exception type comes from rules. AI only summarises what the rules already found, and it's labelled \"advisory\" everywhere it appears.",
  },
  {
    q: "Is this real company data?",
    a: "No. It's a synthetic August 2026 dataset built to look like an e-commerce business. Every correct answer was known in advance, which is how the results are scored.",
  },
  {
    q: "Can I plug it into our ERP?",
    a: "Not yet. This version works from file uploads. Live connections are a production job.",
  },
  {
    q: "What if two records both look right?",
    a: "Nodes stops and opens a case with both records attached. It never picks between two plausible matches. Case 033 above is a live example.",
  },
  {
    q: "What's under the hood?",
    a: "Python and FastAPI for the engine, React and TypeScript for the workspace, Supabase for storage, an OpenAI model for the summaries.",
  },
];

export function Faq() {
  return (
    <Section id="faq">
      <div className="mx-auto max-w-3xl">
        <H2>Questions finance people ask</H2>
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
