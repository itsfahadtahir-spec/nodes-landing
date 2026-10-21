import { Eyebrow, H2, Section } from "../components/ui";

export function About() {
  return (
    <Section id="about" tone="muted">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-20">
        <div className="max-w-2xl">
          <Eyebrow>About Fahad</Eyebrow>
          <H2>Built from a finance problem, not an AI demo.</H2>
          <p className="mt-6 text-lg leading-8 text-neutral-700">
            I built Nodes to explore how finance teams can reduce repetitive reconciliation work without weakening
            review, control or accountability.
          </p>
          <p className="mt-4 text-lg leading-8 text-neutral-700">
            My background spans FP&amp;A, accounting, management reporting, ERP implementation and UAT, commercial
            finance and finance transformation.
          </p>
          <p className="mt-4 text-lg leading-8 text-neutral-700">That shaped the way Nodes was designed:</p>
          <ul className="mt-4 space-y-2">
            {[
              "clear rules for calculation,",
              "visible evidence for review,",
              "AI used only where interpretation helps,",
              "and Finance retaining decision authority.",
            ].map((l) => (
              <li key={l} className="border-l-2 border-teal-700 pl-4 text-lg leading-8 text-neutral-800">
                {l}
              </li>
            ))}
          </ul>
          <p className="mt-8 text-lg font-semibold text-neutral-900">Fahad Tahir</p>
          <p className="mt-1 text-sm font-medium text-neutral-600">
            Finance Business Partner · FP&amp;A · Commercial Finance · Finance Transformation
          </p>
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
