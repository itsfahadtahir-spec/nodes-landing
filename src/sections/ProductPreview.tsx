import { useState, type ReactNode } from "react";
import { Check } from "lucide-react";
import { Badge, ButtonLink, H2, Reveal, Section } from "../components/ui";
import { links, track } from "../lib/site";

function Window({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="nx-window w-full max-w-none">
      <div className="nx-bar">
        <img src="/brand/nodes-mark.svg" alt="" width={16} height={16} />
        <span className="t text-sm">Nodes</span>
        <span className="run">{label}</span>
      </div>
      <div className="space-y-3 p-5 sm:p-7">{children}</div>
    </div>
  );
}

function Row({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`flex items-center justify-between gap-4 rounded-lg border border-neutral-200 px-4 py-3.5 ${className}`}
    >
      {children}
    </div>
  );
}

function RunSummaryCard() {
  return (
    <Window label="Run summary">
      <Row>
        <span className="text-sm font-medium text-neutral-800">Reconciled by rules</span>
        <Badge tone="ok">Complete</Badge>
      </Row>
      <Row className="border-amber-border bg-amber-surface">
        <span className="text-sm font-medium text-neutral-800">Exceptions awaiting review</span>
        <Badge tone="review">Open</Badge>
      </Row>
      <Row>
        <span className="text-sm font-medium text-neutral-800">Validation checks</span>
        <span className="text-sm font-semibold text-neutral-900">Passed</span>
      </Row>
    </Window>
  );
}

function ReviewQueueCard() {
  return (
    <Window label="Review queue">
      {["Unresolved settlement", "Duplicate bank line", "Amount variance"].map((r) => (
        <Row key={r}>
          <span className="text-sm font-medium text-neutral-800">{r}</span>
          <Badge tone="review">Review required</Badge>
        </Row>
      ))}
    </Window>
  );
}

function DetailedCaseCard() {
  return (
    <Window label="Detailed case">
      <div className="rounded-lg border border-neutral-200 px-4 py-3.5">
        <p className="text-xs font-semibold uppercase tracking-[0.08em] text-neutral-500">Evidence</p>
        <p className="mt-1 text-sm leading-6 text-neutral-800">
          Candidate records and supporting context brought together for review.
        </p>
      </div>
      <div className="rounded-lg border border-ai-border bg-ai-surface px-4 py-3.5">
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
    </Window>
  );
}

const tabs = [
  {
    title: "Run summary",
    body: "See what reconciled automatically and what still requires attention.",
    points: [
      "What cleared by rule and what did not",
      "Validation checks before matching",
      "One status for the whole run",
    ],
    proof: "95% reconciled by rule in the known-answer test",
    card: <RunSummaryCard />,
  },
  {
    title: "Review queue",
    body: "Focus analyst time on the cases that could not be resolved safely by deterministic rules.",
    points: [
      "Only the cases rules could not clear",
      "Each case labelled by exception type",
      "Evidence attached before you open it",
    ],
    proof: "The remaining 5% routed to review, none forced",
    card: <ReviewQueueCard />,
  },
  {
    title: "Detailed case",
    body: "Review the relevant evidence, understand why the case remains open and make the final finance decision.",
    points: [
      "Candidate records side by side",
      "AI explanation, labelled advisory",
      "Your decision recorded in the audit history",
    ],
    proof: "0 incorrect automated matches",
    card: <DetailedCaseCard />,
  },
];

export function ProductPreview() {
  const [active, setActive] = useState(0);
  const tab = tabs[active];
  return (
    <Section id="product">
      <Reveal className="max-w-3xl">
        <p className="eyebrow mb-4">The product</p>
        <H2>Built for the point where automation stops.</H2>
        <p className="mt-6 text-lg leading-8 text-white/65">
          Go from the status of the whole run to the cases that need judgment, without the process turning into a black
          box.
        </p>
      </Reveal>

      <div className="mt-14 grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-14">
        <div role="tablist" aria-label="Product views" className="flex flex-col gap-3">
          {tabs.map((t, i) => {
            const on = i === active;
            return (
              <button
                key={t.title}
                type="button"
                role="tab"
                id={`tab-${i}`}
                aria-selected={on}
                aria-controls="product-panel"
                onClick={() => setActive(i)}
                className={`rounded-2xl border p-6 text-left transition-colors duration-(--duration-standard) ${
                  on
                    ? "border-teal-300/35 bg-[linear-gradient(180deg,rgb(8_145_178/0.14),rgb(8_145_178/0.02))]"
                    : "border-white/[0.08] bg-white/[0.02] hover:border-white/20"
                }`}
              >
                <span className="flex items-center gap-3">
                  <span className={`font-mono text-xs ${on ? "text-teal-300" : "text-white/40"}`}>0{i + 1}</span>
                  <span className={`text-lg font-semibold tracking-[-0.01em] ${on ? "text-white" : "text-white/70"}`}>
                    {t.title}
                  </span>
                </span>
                <span className={`mt-2 block leading-7 ${on ? "text-white/70" : "text-white/45"}`}>{t.body}</span>
                {on && (
                  <span className="mt-4 block space-y-2">
                    {t.points.map((p) => (
                      <span key={p} className="flex items-center gap-2.5 text-sm text-white/80">
                        <Check size={14} strokeWidth={2.5} className="text-teal-300" aria-hidden="true" />
                        {p}
                      </span>
                    ))}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        <div className="flex flex-col">
          <div
            id="product-panel"
            role="tabpanel"
            aria-labelledby={`tab-${active}`}
            className="on-ink relative rounded-[22px] border border-white/10 bg-white/[0.03] p-3 shadow-[0_50px_100px_-40px_rgb(8_145_178/0.5)]"
          >
            <div key={active} className="reveal in">
              {tab.card}
            </div>
          </div>
          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="flex items-center gap-2 text-sm text-white/60">
              <span className="size-1.5 rounded-full bg-teal-300" aria-hidden="true" />
              {tab.proof}
            </p>
            <ButtonLink href={links.demoRequest} onClick={() => track("cta_demo_request", { location: "tour" })}>
              See it in a demo
            </ButtonLink>
          </div>
        </div>
      </div>
    </Section>
  );
}
