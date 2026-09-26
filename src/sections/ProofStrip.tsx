import { Container } from "../components/ui";

// Claims register (nodes-landing-copy.md §7). Values and labels must not change without sign-off.
const figures = [
  { value: "1,000", label: "transactions in" },
  { value: "950", label: "tied out by rules" },
  { value: "50", label: "flagged, evidence attached" },
  { value: "0", label: "wrong answers from the rules" },
];

export function ProofStrip() {
  return (
    <section aria-label="Reference run results" className="border-y border-neutral-200 bg-neutral-0">
      <Container className="py-10 sm:py-12">
        <dl className="grid grid-cols-2 gap-x-6 gap-y-8 md:grid-cols-4">
          {figures.map((f) => (
            <div key={f.label} className="border-l-2 border-teal-700 pl-4">
              <dd className="num text-4xl font-bold tracking-[-0.03em] text-neutral-900 sm:text-5xl">{f.value}</dd>
              <dt className="mt-1 text-sm leading-5 text-neutral-600">{f.label}</dt>
            </div>
          ))}
        </dl>
        <p className="mt-8 text-sm text-neutral-500">
          August 2026 test run on synthetic data, scored against answers known in advance.
        </p>
      </Container>
    </section>
  );
}
