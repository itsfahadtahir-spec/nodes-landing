import { H2, Reveal, Section } from "../components/ui";

const principles = [
  ["Calculation", "Clear rules"],
  ["Review", "Visible evidence"],
  ["Interpretation", "AI, only where it helps"],
  ["Decision", "Finance, always"],
];

export function About() {
  return (
    <Section id="about" tone="raised">
      <div className="grid gap-14 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center lg:gap-20">
        <Reveal className="max-w-2xl">
          <p className="eyebrow mb-4">About Fahad</p>
          <H2>Built from a finance problem, not an AI demo.</H2>
          <p className="mt-6 text-lg leading-8 text-white/65">
            I built Nodes to explore how finance teams can reduce repetitive reconciliation work without weakening
            review, control or accountability.
          </p>
          <p className="mt-4 text-lg leading-8 text-white/65">
            My background spans FP&amp;A, accounting, management reporting, ERP implementation and UAT, commercial
            finance and finance transformation. That shaped every design decision in the product.
          </p>
          <p className="mt-8 text-lg font-semibold text-white">Fahad Tahir</p>
          <p className="mt-1 text-sm font-medium text-white/50">
            Finance Business Partner · FP&amp;A · Commercial Finance · Finance Transformation
          </p>
        </Reveal>

        <Reveal delay={120}>
          <div className="rounded-[22px] border border-white/10 bg-ink-950/60 p-3">
            <p className="px-4 pb-3 pt-2 font-mono text-[11px] uppercase tracking-[0.14em] text-white/40">
              Design principles
            </p>
            <dl className="divide-y divide-white/[0.06] rounded-2xl border border-white/[0.08] bg-ink-900">
              {principles.map(([k, v]) => (
                <div key={k} className="flex items-center justify-between gap-6 px-5 py-5">
                  <dt className="text-sm text-white/50">{k}</dt>
                  <dd className="text-right text-lg font-semibold text-white">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
