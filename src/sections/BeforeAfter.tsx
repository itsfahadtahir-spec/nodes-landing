import { H2, Section } from "../components/ui";

const before = [
  "Fragmented source files",
  "Repetitive manual matching",
  "Time spent tracing exceptions",
  "Evidence scattered across systems",
  "Unclear review handoffs",
];

const withNodes = [
  "Repeatable matches handled automatically",
  "Exceptions surfaced for review",
  "Relevant evidence brought together",
  "Finance judgment focused where it matters",
  "Clear ownership of the final decision",
];

function Column({ title, items, variant }: { title: string; items: string[]; variant: "without" | "with" }) {
  const isWith = variant === "with";
  return (
    <div
      className={`rounded-lg border p-6 sm:p-8 ${
        isWith ? "border-neutral-200 border-l-4 border-l-teal-700 bg-neutral-0" : "border-neutral-200 bg-neutral-100"
      }`}
    >
      <h3 className={`text-sm font-bold uppercase tracking-[0.08em] ${isWith ? "text-teal-800" : "text-neutral-500"}`}>
        {title}
      </h3>
      <ol className="mt-5 space-y-3">
        {items.map((item, i) => (
          <li key={item} className="flex gap-3 text-[15px] leading-6">
            <span className={`num w-5 shrink-0 font-mono text-xs leading-6 ${isWith ? "text-teal-700" : "text-neutral-500"}`}>
              {i + 1}
            </span>
            <span className={isWith ? "text-neutral-900" : "text-neutral-600"}>{item}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}

export function BeforeAfter() {
  return (
    <Section id="problem" tone="muted">
      <div className="max-w-3xl">
        <H2>Reconciliation gets difficult where the exceptions begin.</H2>
        <p className="mt-5 text-lg leading-8 text-neutral-600">High-volume matching is only part of the work.</p>
        <p className="mt-4 text-lg leading-8 text-neutral-600">
          Finance teams lose time tracing why records disagree, gathering evidence across different sources and
          deciding what can safely be cleared.
        </p>
        <p className="mt-4 text-lg leading-8 text-neutral-600">
          Nodes is designed to make that investigation more structured, visible and controlled.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        <Column title="Before" variant="without" items={before} />
        <Column title="With Nodes" variant="with" items={withNodes} />
      </div>
    </Section>
  );
}
