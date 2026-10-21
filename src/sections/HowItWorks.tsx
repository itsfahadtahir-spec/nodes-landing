import { H2, Section } from "../components/ui";

const steps = [
  {
    num: "01",
    label: "Reconcile",
    body: "Deterministic rules handle repeatable matching across the reconciliation workflow. AI does not decide financial matches.",
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
    <Section id="how-it-works">
      <div className="max-w-3xl">
        <H2>Automation where the evidence is clear. Human judgment where it is not.</H2>
      </div>
      <ol className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        {steps.map((s) => (
          <li key={s.num} className="border-l-2 border-teal-700 pl-5">
            <span className="num font-mono text-sm font-semibold text-teal-700">{s.num}</span>
            <h3 className="mt-2 text-sm font-bold uppercase tracking-[0.08em] text-neutral-900">{s.label}</h3>
            <p className="mt-3 leading-7 text-neutral-600">{s.body}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
