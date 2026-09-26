import { H2, Section } from "../components/ui";

const rows: [string, string][] = [
  ["Export three files", "Load one run"],
  ["Clean columns until they line up", "Validation runs before anything else"],
  ["XLOOKUP and hope", "Rules tie out what they can prove"],
  ["Ctrl+F through the bank file", "The two rows that matter, already pulled"],
  ["Email the payments team", "A short summary of what's known and what isn't"],
  ["Write it all up for audit", "Every step logged as it happens"],
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
        <H2>Matching is the easy part. The leftovers eat the close.</H2>
        <p className="mt-5 text-lg leading-8 text-neutral-600">
          You know the routine. Export from the ERP. Pull the settlement file from the payment provider. Download the
          bank statement. Build the XLOOKUPs. Most lines tie out before lunch.
        </p>
        <p className="mt-4 text-lg leading-8 text-neutral-600">
          Then come the leftovers. A payout that doesn't match any settlement. Two bank lines for exactly the same
          amount. A fee that's a few fils out. Each one means another trip through the bank file, another email to
          the payments team, and another note in the working papers so the auditors can follow your logic at
          year-end.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        <Column title="Your close today" variant="without" items={rows.map((r) => r[0])} />
        <Column title="Your close with Nodes" variant="with" items={rows.map((r) => r[1])} />
      </div>

      <p className="mt-8 text-lg font-semibold text-neutral-900">
        Nodes does the tying out. You get the leftovers, with everything you need already on screen.
      </p>
    </Section>
  );
}
