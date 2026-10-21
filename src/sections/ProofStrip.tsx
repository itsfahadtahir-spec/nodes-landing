import { Container } from "../components/ui";

const figures = [
  { value: "1,000+", label: "Transactions assessed" },
  { value: "95%", label: "Automatically reconciled" },
  { value: "0", label: "Incorrect automated matches" },
];

export function ProofStrip() {
  return (
    <section aria-label="Selected performance evidence" className="border-y border-neutral-200 bg-neutral-0">
      <Container className="py-10 sm:py-12">
        <dl className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-3">
          {figures.map((f) => (
            <div key={f.label} className="border-l-2 border-teal-700 pl-4">
              <dd className="num text-4xl font-bold tracking-[-0.03em] text-neutral-900 sm:text-5xl">{f.value}</dd>
              <dt className="mt-1 text-sm leading-5 text-neutral-600">{f.label}</dt>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
