import { H2, Reveal, Section } from "../components/ui";

const steps = [
  {
    num: "01",
    label: "Reconcile",
    body: "Deterministic rules handle repeatable matching across your ERP, payment-provider and bank files. AI does not decide financial matches.",
  },
  {
    num: "02",
    label: "Explain",
    body: "When a case remains unresolved, Nodes brings the relevant evidence together and uses AI to help explain what requires attention.",
  },
  {
    num: "03",
    label: "Review",
    body: "The finance analyst reviews the exception, supporting evidence and explanation in one place.",
  },
  {
    num: "04",
    label: "Approve",
    body: "Finance decides the outcome. When the evidence is ambiguous, Nodes does not guess.",
  },
];

export function HowItWorks() {
  return (
    <Section id="how-it-works" tone="raised">
      <Reveal className="mx-auto max-w-3xl text-center">
        <p className="eyebrow mb-4">How it works</p>
        <H2>
          Rules where the evidence is clear.
          <br className="hidden sm:block" /> <span className="text-gradient">Judgment where it is not.</span>
        </H2>
      </Reveal>
      <div className="relative mt-16">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-[12.5%] right-[12.5%] top-0 hidden h-px bg-[linear-gradient(90deg,transparent,rgb(103_232_249/0.5),transparent)] lg:block"
        />
        <ol className="grid gap-10 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
          {steps.map((s, i) => (
            <li key={s.num}>
              <Reveal delay={i * 120} className="h-full">
                <div className="relative h-full rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 pt-0 lg:text-center">
                  <span className="relative -top-px inline-grid size-14 -translate-y-1/2 place-items-center rounded-2xl border border-teal-300/40 bg-ink-900 font-mono text-sm font-semibold text-teal-300 shadow-[0_0_30px_-6px_rgb(34_211_238/0.6)]">
                    {s.num}
                  </span>
                  <h3 className="-mt-2 text-sm font-bold uppercase tracking-[0.14em] text-white">{s.label}</h3>
                  <p className="mt-3 leading-7 text-white/60">{s.body}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
