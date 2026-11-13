import { Container, Reveal } from "../components/ui";

const figures = [
  { value: "1,000+", label: "Transactions assessed" },
  { value: "95%", label: "Automatically reconciled" },
  { value: "0", label: "Incorrect automated matches" },
];

export function ProofStrip() {
  return (
    <section aria-label="Selected performance evidence" className="border-y border-white/[0.06] bg-ink-900">
      <Container className="py-14 sm:py-16">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.16em] text-white/45">
          Results from a controlled known-answer test of 1,000+ e-commerce transactions
        </p>
        <dl className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-6">
          {figures.map((f, i) => (
            <Reveal key={f.label} delay={i * 120} className="text-center">
              <dd className="num text-gradient text-6xl font-semibold tracking-[-0.045em] sm:text-7xl">{f.value}</dd>
              <dt className="mt-2 text-sm text-white/60">{f.label}</dt>
            </Reveal>
          ))}
        </dl>
      </Container>
    </section>
  );
}
