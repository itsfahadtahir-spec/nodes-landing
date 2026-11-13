import { Calculator, Sparkles, UserCheck } from "lucide-react";
import { H2, Reveal, Section } from "../components/ui";

const pillars = [
  {
    icon: Calculator,
    title: "Rules reconcile.",
    body: "Matching logic remains deterministic. Run it twice, get the same answer twice.",
  },
  {
    icon: Sparkles,
    title: "AI explains exceptions.",
    body: "AI is limited to helping explain available evidence, and every explanation is labelled advisory.",
  },
  {
    icon: UserCheck,
    title: "Finance decides.",
    body: "The finance user remains responsible for reviewing exceptions and deciding the final outcome.",
  },
];

export function ControlPhilosophy() {
  return (
    <Section id="control" tone="raised" className="overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgb(8_145_178/0.22),transparent)]"
      />
      <Reveal className="relative mx-auto max-w-3xl text-center">
        <p className="eyebrow mb-4">The control model</p>
        <H2>Faster reconciliation, without giving up control.</H2>
        <p className="mt-6 text-lg leading-8 text-white/65">
          Nodes deliberately separates calculation, interpretation and decision authority.
        </p>
      </Reveal>
      <div className="relative mt-14 grid gap-5 md:grid-cols-3">
        {pillars.map((p, i) => (
          <Reveal key={p.title} delay={i * 120}>
            <div className="h-full rounded-2xl border border-white/[0.08] bg-ink-950/60 p-7 backdrop-blur">
              <span className="grid size-11 place-items-center rounded-xl border border-teal-300/30 bg-teal-300/10 text-teal-300">
                <p.icon size={20} aria-hidden="true" />
              </span>
              <h3 className="mt-6 text-2xl font-semibold tracking-[-0.02em] text-white">{p.title}</h3>
              <p className="mt-3 leading-7 text-white/60">{p.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
