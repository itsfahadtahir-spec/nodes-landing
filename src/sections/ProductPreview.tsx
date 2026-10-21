import { Badge, H2, Section } from "../components/ui";

function RunSummaryCard() {
  return (
    <div className="nx-window w-full">
      <div className="nx-bar">
        <img src="/brand/nodes-mark.svg" alt="" width={16} height={16} />
        <span className="t text-sm">Nodes</span>
        <span className="run">Run summary</span>
      </div>
      <div className="space-y-3 p-5">
        <div className="flex items-center justify-between rounded-md border border-neutral-200 px-4 py-3">
          <span className="text-sm font-medium text-neutral-800">Reconciled by rules</span>
          <Badge tone="ok">Complete</Badge>
        </div>
        <div className="flex items-center justify-between rounded-md border border-amber-border bg-amber-surface px-4 py-3">
          <span className="text-sm font-medium text-neutral-800">Exceptions awaiting review</span>
          <Badge tone="review">Open</Badge>
        </div>
        <div className="flex items-center justify-between rounded-md border border-neutral-200 px-4 py-3">
          <span className="text-sm font-medium text-neutral-800">Validation checks</span>
          <span className="text-sm font-semibold text-neutral-900">Passed</span>
        </div>
      </div>
    </div>
  );
}

function ReviewQueueCard() {
  const rows = ["Unresolved settlement", "Duplicate bank line", "Amount variance"];
  return (
    <div className="nx-window w-full">
      <div className="nx-bar">
        <img src="/brand/nodes-mark.svg" alt="" width={16} height={16} />
        <span className="t text-sm">Nodes</span>
        <span className="run">Review queue</span>
      </div>
      <div className="p-5">
        <ul className="space-y-3">
          {rows.map((r) => (
            <li
              key={r}
              className="flex items-center justify-between rounded-md border border-neutral-200 px-4 py-3"
            >
              <span className="text-sm font-medium text-neutral-800">{r}</span>
              <Badge tone="review">Review required</Badge>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function DetailedCaseCard() {
  return (
    <div className="nx-window w-full">
      <div className="nx-bar">
        <img src="/brand/nodes-mark.svg" alt="" width={16} height={16} />
        <span className="t text-sm">Nodes</span>
        <span className="run">Detailed case</span>
      </div>
      <div className="space-y-3 p-5">
        <div className="rounded-md border border-neutral-200 px-4 py-3">
          <p className="text-xs font-semibold uppercase tracking-[0.08em] text-neutral-500">Evidence</p>
          <p className="mt-1 text-sm leading-6 text-neutral-800">
            Candidate records and supporting context brought together for review.
          </p>
        </div>
        <div className="rounded-md border border-ai-border bg-ai-surface px-4 py-3">
          <Badge tone="ai">AI explanation · Advisory</Badge>
          <p className="mt-2 text-sm leading-6 text-neutral-800">
            The available evidence does not establish a single safe match.
          </p>
        </div>
        <div className="flex gap-2">
          <span className="rounded-md bg-teal-700 px-3 py-1.5 text-xs font-semibold text-white">Resolve</span>
          <span className="rounded-md border border-neutral-300 px-3 py-1.5 text-xs font-semibold text-neutral-800">
            Escalate
          </span>
        </div>
      </div>
    </div>
  );
}

const previews = [
  {
    title: "Run summary",
    body: "See what reconciled automatically and what still requires attention.",
    card: <RunSummaryCard />,
  },
  {
    title: "Review queue",
    body: "Focus analyst time on the cases that could not be resolved safely by deterministic rules.",
    card: <ReviewQueueCard />,
  },
  {
    title: "Detailed case",
    body: "Review the relevant evidence, understand why the case remains open and make the final finance decision.",
    card: <DetailedCaseCard />,
  },
];

export function ProductPreview() {
  return (
    <Section id="product" tone="muted">
      <div className="max-w-3xl">
        <H2>Built for the point where automation stops.</H2>
        <p className="mt-5 text-lg leading-8 text-neutral-600">
          Nodes is designed to move from overall reconciliation status into the cases that require judgment without
          turning the process into a black box.
        </p>
      </div>
      <div className="mt-12 grid gap-8 lg:grid-cols-3">
        {previews.map((p) => (
          <div key={p.title}>
            {p.card}
            <h3 className="mt-5 text-sm font-bold uppercase tracking-[0.08em] text-neutral-900">{p.title}</h3>
            <p className="mt-2 leading-7 text-neutral-600">{p.body}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
