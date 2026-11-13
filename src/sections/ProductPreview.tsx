import { useEffect, useRef, useState, type ReactNode } from "react";
import { ArrowRight, ClipboardList, History, PlayCircle, Sparkles } from "lucide-react";
import { ButtonLink, H2, Reveal, Section } from "../components/ui";
import { links, track } from "../lib/site";

const STEP_MS = 6500;

type Tone = "ok" | "review" | "ai" | "muted";
const pill: Record<Tone, string> = {
  ok: "border-teal-300/25 bg-teal-300/10 text-teal-200",
  review: "border-[#FCD34D]/25 bg-[#FCD34D]/10 text-[#FDE68A]",
  ai: "border-[#C4B5FD]/30 bg-[#C4B5FD]/10 text-[#DDD6FE]",
  muted: "border-white/10 bg-white/[0.04] text-white/60",
};

function Pill({ tone, children }: { tone: Tone; children: ReactNode }) {
  return (
    <span
      className={`inline-flex items-center gap-1 whitespace-nowrap rounded-md border px-2 py-0.5 text-[11px] font-semibold ${pill[tone]}`}
    >
      {children}
    </span>
  );
}

function Panel({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`rounded-xl border border-white/[0.08] bg-white/[0.03] ${className}`}>{children}</div>;
}

function Label({ children }: { children: ReactNode }) {
  return <p className="font-mono text-[10.5px] font-medium uppercase tracking-[0.12em] text-white/40">{children}</p>;
}

function RunView() {
  return (
    <div className="space-y-4">
      <div>
        <Label>Reconciliation run</Label>
        <p className="mt-1 text-xl font-semibold tracking-[-0.02em] text-white">August 2026</p>
      </div>
      <div className="grid gap-3 sm:grid-cols-3">
        <Panel className="p-4">
          <Label>Assessed</Label>
          <p className="num mt-2 text-3xl font-semibold tracking-[-0.03em] text-white">1,000</p>
          <p className="mt-1 text-xs text-white/50">ERP and PSP transactions</p>
        </Panel>
        <Panel className="border-teal-300/25 bg-teal-300/[0.07] p-4">
          <Label>Reconciled by rule</Label>
          <p className="num mt-2 text-3xl font-semibold tracking-[-0.03em] text-teal-200">950</p>
          <p className="mt-1 text-xs text-white/50">No AI in any match</p>
        </Panel>
        <Panel className="border-[#FCD34D]/25 bg-[#FCD34D]/[0.06] p-4">
          <Label>Exceptions</Label>
          <p className="num mt-2 text-3xl font-semibold tracking-[-0.03em] text-[#FDE68A]">50</p>
          <p className="mt-1 text-xs text-white/50">Routed to review</p>
        </Panel>
      </div>
      <Panel className="flex flex-wrap items-center gap-x-5 gap-y-2 px-4 py-3 text-xs text-white/60">
        {["Duplicates checked", "Fields validated", "Source rows traced"].map((c) => (
          <span key={c} className="inline-flex items-center gap-1.5">
            <span className="size-1.5 rounded-full bg-teal-300" aria-hidden="true" />
            {c}
          </span>
        ))}
      </Panel>
    </div>
  );
}

const queue = [
  { name: "Ambiguous bank candidate", ref: "PSP settlement" },
  { name: "Unresolved settlement", ref: "PSP payout" },
  { name: "Duplicate bank line", ref: "Bank statement" },
  { name: "Amount variance", ref: "ERP order" },
];

function QueueView() {
  return (
    <div className="space-y-4">
      <div className="flex items-end justify-between gap-4">
        <div>
          <Label>Review queue</Label>
          <p className="mt-1 text-xl font-semibold tracking-[-0.02em] text-white">50 exceptions need a decision</p>
        </div>
        <span className="hidden sm:inline-flex">
          <Pill tone="muted">Sorted by exception type</Pill>
        </span>
      </div>
      <Panel className="divide-y divide-white/[0.06]">
        {queue.map((q, i) => (
          <div
            key={q.name}
            className={`flex items-center justify-between gap-4 px-4 py-3.5 ${i === 0 ? "bg-white/[0.03]" : ""}`}
          >
            <span className="min-w-0">
              <span className="block truncate text-sm font-medium text-white">{q.name}</span>
              <span className="block text-xs text-white/45">{q.ref}</span>
            </span>
            <Pill tone="review">Review required</Pill>
          </div>
        ))}
      </Panel>
    </div>
  );
}

function CaseView() {
  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center gap-2">
        <Pill tone="review">Review required</Pill>
        <span className="text-sm text-white/60">Ambiguous bank candidate</span>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        {["A", "B"].map((c) => (
          <Panel key={c} className="border-[#FCD34D]/20 p-4">
            <div className="flex items-center justify-between">
              <span className="font-mono text-sm font-semibold text-white">Candidate record {c}</span>
              <span className="text-xs text-white/45">Bank statement</span>
            </div>
            <p className="mt-2 text-xs text-[#FDE68A]/80">Plausible match</p>
          </Panel>
        ))}
      </div>
      <Panel className="border-[#C4B5FD]/25 bg-[#A78BFA]/[0.07] p-4">
        <Pill tone="ai">
          <Sparkles size={11} aria-hidden="true" /> AI explanation · Advisory
        </Pill>
        <p className="mt-2.5 text-sm leading-6 text-white/80">
          Two bank records satisfy the available matching evidence. The supplied evidence does not establish which one
          belongs to this settlement.
        </p>
      </Panel>
      <Panel className="flex flex-wrap items-center justify-between gap-3 border-teal-300/25 p-4">
        <span className="text-sm font-semibold text-white">Your decision</span>
        <span className="flex gap-2">
          <span className="rounded-md bg-teal-300 px-3 py-1.5 text-xs font-semibold text-ink-950">Resolve</span>
          <span className="rounded-md border border-white/15 px-3 py-1.5 text-xs font-semibold text-white/80">
            Escalate
          </span>
        </span>
      </Panel>
    </div>
  );
}

const steps = [
  {
    title: "See the whole run",
    short: "Run",
    body: "What cleared by rule, what did not and whether the source files passed validation, in one view.",
    proof: "95% reconciled by rule in the known-answer test",
    nav: "Runs",
    view: <RunView />,
  },
  {
    title: "Work only the exceptions",
    short: "Queue",
    body: "The queue holds only what rules could not clear safely, each case labelled so you know where to start.",
    proof: "The remaining 5% routed to review, none forced",
    nav: "Review Queue",
    view: <QueueView />,
  },
  {
    title: "Decide with the evidence in front of you",
    short: "Decide",
    body: "Candidate records, an advisory explanation and your decision in one place, recorded in the audit history.",
    proof: "0 incorrect automated matches",
    nav: "Review Queue",
    view: <CaseView />,
  },
];

const sidebar = [
  { label: "Runs", icon: PlayCircle },
  { label: "Review Queue", icon: ClipboardList },
  { label: "Audit History", icon: History },
];

export function ProductPreview() {
  const [active, setActive] = useState(0);
  const [auto, setAuto] = useState(
    () => typeof window === "undefined" || !window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), { threshold: 0.35 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!auto || !visible) return;
    const t = window.setTimeout(() => setActive((a) => (a + 1) % steps.length), STEP_MS);
    return () => window.clearTimeout(t);
  }, [active, auto, visible]);

  const step = steps[active];
  const running = auto && visible;

  return (
    <Section id="product">
      <Reveal className="mx-auto max-w-3xl text-center">
        <p className="eyebrow mb-4">Built for the point where automation stops</p>
        <H2>
          From the whole run to the <span className="text-gradient">few cases that need you.</span>
        </H2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/65">
          Rules clear what the evidence supports. Everything else arrives in one queue, with the evidence already
          gathered and the decision left to you.
        </p>
      </Reveal>

      <div ref={ref} className="mt-14">
        <div role="tablist" aria-label="Product walkthrough" className="grid grid-cols-3 gap-2 md:gap-3">
          {steps.map((s, i) => {
            const on = i === active;
            return (
              <button
                key={s.title}
                type="button"
                role="tab"
                id={`tour-tab-${i}`}
                aria-selected={on}
                aria-controls="tour-panel"
                onClick={() => {
                  setActive(i);
                  setAuto(false);
                }}
                className={`group relative overflow-hidden rounded-xl border p-3 text-left md:rounded-2xl md:p-5 transition-colors duration-(--duration-standard) ${
                  on
                    ? "border-teal-300/35 bg-teal-300/[0.06]"
                    : "border-white/[0.08] bg-white/[0.02] hover:border-white/20"
                }`}
              >
                <span className="flex items-center gap-2 md:gap-3">
                  <span
                    className={`grid size-7 shrink-0 place-items-center rounded-full font-mono text-[11px] font-semibold ${
                      on ? "bg-teal-300 text-ink-950" : "bg-white/[0.06] text-white/50"
                    }`}
                  >
                    {i + 1}
                  </span>
                  <span className={`font-semibold tracking-[-0.01em] ${on ? "text-white" : "text-white/70"}`}>
                    <span className="md:hidden">{s.short}</span>
                    <span className="hidden md:inline">{s.title}</span>
                  </span>
                </span>
                <span className={`mt-3 hidden text-sm leading-6 md:block ${on ? "text-white/65" : "text-white/40"}`}>
                  {s.body}
                </span>
                <span aria-hidden="true" className="absolute inset-x-0 bottom-0 h-0.5 bg-white/[0.04]">
                  {on && (
                    <span
                      key={`${active}-${running}`}
                      className={`block h-full bg-teal-300 ${running ? "tour-progress" : "w-full"}`}
                      style={running ? { animationDuration: `${STEP_MS}ms` } : undefined}
                    />
                  )}
                </span>
              </button>
            );
          })}
        </div>

        <p className="mt-4 text-sm leading-6 text-white/65 md:hidden">{step.body}</p>

        <div className="relative mt-4 md:mt-6">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-px rounded-[22px] bg-[linear-gradient(180deg,rgb(103_232_249/0.35),rgb(255_255_255/0.03)_45%)]"
          />
          <div
            id="tour-panel"
            role="tabpanel"
            aria-labelledby={`tour-tab-${active}`}
            className="relative overflow-hidden rounded-[22px] bg-ink-900 shadow-[0_60px_120px_-40px_rgb(8_145_178/0.45)]"
          >
            <div className="flex items-center gap-3 border-b border-white/[0.06] px-5 py-3">
              <img src="/brand/nodes-mark-white.svg" alt="" width={16} height={16} />
              <span className="text-sm font-semibold text-white">Nodes</span>
              <span className="hidden text-xs text-white/40 sm:inline">Controlled Reconciliation Workspace</span>
              <span className="ml-auto rounded-md border border-white/10 px-2 py-0.5 font-mono text-[10.5px] text-white/50">
                RUN · AUG 2026
              </span>
            </div>
            <div className="grid md:grid-cols-[200px_minmax(0,1fr)]">
              <nav aria-hidden="true" className="hidden border-r border-white/[0.06] p-3 md:block">
                {sidebar.map((n) => {
                  const on = n.label === step.nav;
                  return (
                    <span
                      key={n.label}
                      className={`flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm ${
                        on ? "bg-teal-300/10 font-medium text-teal-200" : "text-white/45"
                      }`}
                    >
                      <n.icon size={15} />
                      {n.label}
                    </span>
                  );
                })}
              </nav>
              <div key={active} className="tour-in min-h-[360px] min-w-0 p-5 sm:p-7">
                {step.view}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="flex items-center gap-2 text-sm text-white/60">
            <span className="size-1.5 rounded-full bg-teal-300" aria-hidden="true" />
            {step.proof}
          </p>
          <div className="flex items-center gap-3">
            {active < steps.length - 1 && (
              <button
                type="button"
                onClick={() => {
                  setActive(active + 1);
                  setAuto(false);
                }}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-white/70 hover:text-white"
              >
                Next step <ArrowRight size={14} aria-hidden="true" />
              </button>
            )}
            <ButtonLink href={links.demoRequest} onClick={() => track("cta_demo_request", { location: "tour" })}>
              See it in a demo
            </ButtonLink>
          </div>
        </div>
      </div>
    </Section>
  );
}
