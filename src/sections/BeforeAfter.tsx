import { Check, Minus } from "lucide-react";
import { H2, Reveal, Section } from "../components/ui";

const before = [
  "Fragmented source files",
  "Repetitive manual matching",
  "Time spent tracing exceptions",
  "Evidence scattered across systems",
  "Unclear review handoffs",
];

const withNodes = [
  "Repeatable matches handled by rule",
  "Exceptions surfaced for review",
  "Relevant evidence brought together",
  "Finance judgment focused where it matters",
  "Clear ownership of the final decision",
];

function Column({ title, items, variant }: { title: string; items: string[]; variant: "without" | "with" }) {
  const isWith = variant === "with";
  return (
    <div
      className={`relative h-full rounded-2xl border p-7 sm:p-9 ${
        isWith
          ? "border-teal-300/30 bg-[linear-gradient(180deg,rgb(8_145_178/0.16),rgb(8_145_178/0.02))] shadow-[0_0_80px_-30px_rgb(34_211_238/0.5)]"
          : "border-white/[0.08] bg-white/[0.02]"
      }`}
    >
      <h3 className={`text-xs font-bold uppercase tracking-[0.14em] ${isWith ? "text-teal-300" : "text-white/45"}`}>
        {title}
      </h3>
      <ul className="mt-6 space-y-4">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-base leading-6">
            <span
              className={`mt-0.5 grid size-5 shrink-0 place-items-center rounded-full ${
                isWith ? "bg-teal-300 text-ink-950" : "bg-white/[0.06] text-white/40"
              }`}
              aria-hidden="true"
            >
              {isWith ? <Check size={12} strokeWidth={3} /> : <Minus size={12} strokeWidth={3} />}
            </span>
            <span className={isWith ? "text-white" : "text-white/50"}>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function BeforeAfter() {
  return (
    <Section id="problem">
      <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:items-center lg:gap-20">
        <Reveal>
          <p className="eyebrow mb-4">The problem</p>
          <H2>Reconciliation gets difficult where the exceptions begin.</H2>
          <p className="mt-6 text-lg leading-8 text-white/65">
            Matching the bulk is the easy part. Month-end runs long on the rest, tracing why two records disagree,
            pulling evidence from three systems and deciding what is safe to clear.
          </p>
          <p className="mt-4 text-lg leading-8 text-white/65">
            Nodes gives that work a structure, a trail and a clear owner.
          </p>
        </Reveal>
        <div className="grid gap-5 sm:grid-cols-2">
          <Reveal>
            <Column title="Your close today" variant="without" items={before} />
          </Reveal>
          <Reveal delay={150}>
            <Column title="With Nodes" variant="with" items={withNodes} />
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
