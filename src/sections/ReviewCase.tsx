import { useEffect, useRef, useState } from "react";
import { Badge, ButtonLink, Eyebrow, Mono } from "../components/ui";
import { links, track } from "../lib/site";

// Exact engine values (docs/nodes-landing-copy.md §7). Never recalculate in the frontend.
const settlement: [string, string, boolean][] = [
  ["PSP transactions", "24", false],
  ["Gross", "AED 24,999.81", false],
  ["Fees", "-AED 499.98", false],
  ["VAT on fees", "-AED 25.02", false],
  ["Expected payout", "AED 24,474.81", true],
];

const bankLines = [
  { id: "BANK-202608-0039", row: 40, date: "31 Aug 2026", amount: "AED 24,474.81" },
  { id: "BANK-202608-0041", row: 42, date: "1 Sep 2026", amount: "AED 24,474.81" },
];

type Col = "rules" | "ai" | "you";

const columns: { key: Col; title: string; body: string; label?: string }[] = [
  {
    key: "rules",
    title: "The rules",
    body: "Match records, calculate amounts, classify exceptions, trace every row to its source",
  },
  {
    key: "ai",
    title: "AI",
    label: "AI explanation · Advisory",
    body: "Summarise the evidence, list what's still unknown, suggest what to check",
  },
  {
    key: "you",
    title: "You",
    body: "Choose the outcome, escalate, resolve, own the accounting",
  },
];

const colStyle: Record<Col, string> = {
  rules: "border-t-4 border-t-rules-border bg-neutral-50 border-neutral-200",
  ai: "border-t-4 border-t-ai bg-ai-surface border-ai-border",
  you: "border-t-4 border-t-teal-700 bg-neutral-0 border-neutral-200",
};

function StepLabel({ n, children }: { n: number; children: string }) {
  return (
    <p className="mb-3 text-xs font-bold uppercase tracking-[0.08em] text-neutral-500">
      <span className="num font-mono">Step {n}</span> · {children}
    </p>
  );
}

export function ReviewCase() {
  const [focus, setFocus] = useState<Col | null>(null);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          track("scroll_case_section");
          obs.disconnect();
        }
      },
      { threshold: 0.5 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="review-case" ref={ref} className="bg-neutral-900 py-16 text-neutral-100 sm:py-24">
      <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-8">
        <div className="max-w-3xl">
          <Eyebrow>
            <span className="text-teal-300">Case <Mono>SET-202608-033</Mono></span>
          </Eyebrow>
          <h2 className="text-3xl font-bold tracking-[-0.02em] text-white sm:text-4xl">
            Two bank lines. Same amount. Nodes won't guess.
          </h2>
          <p className="mt-5 text-lg leading-8 text-neutral-300">
            Settlement 033 should reach the bank as one payout of <Mono className="text-white">AED 24,474.81</Mono>.
            The bank file has two lines for exactly that amount, a day apart.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          <div className="rounded-lg border border-neutral-700 bg-neutral-800 p-6">
            <StepLabel n={1}>The settlement</StepLabel>
            <dl>
              {settlement.map(([k, v, strong]) => (
                <div
                  key={k}
                  className={`flex items-baseline justify-between gap-4 py-2 text-sm ${
                    strong ? "mt-1 border-t border-neutral-600 pt-3 font-semibold text-white" : "border-b border-neutral-700 text-neutral-300"
                  }`}
                >
                  <dt>{k}</dt>
                  <dd><Mono className={strong ? "text-white" : "text-neutral-100"}>{v}</Mono></dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="rounded-lg border border-neutral-700 bg-neutral-800 p-6">
            <StepLabel n={2}>The bank file</StepLabel>
            <ul className="space-y-3">
              {bankLines.map((b) => (
                <li key={b.id} className="rounded-md border border-neutral-600 bg-neutral-900 p-4">
                  <div className="flex items-center justify-between gap-3">
                    <Mono className="text-sm font-semibold text-white">{b.id}</Mono>
                    <Badge tone="review">Candidate</Badge>
                  </div>
                  <p className="num mt-2 font-mono text-xs text-neutral-400">
                    row {b.row} · {b.date}
                  </p>
                  <p className="num mt-1 font-mono text-sm text-neutral-100">{b.amount}</p>
                </li>
              ))}
            </ul>
            <p className="mt-3 font-mono text-[11px] text-neutral-500">bank_aug_sep_2026.csv</p>
          </div>

          <div className="rounded-lg border border-ai-border/40 bg-neutral-800 p-6">
            <StepLabel n={3}>What Nodes says</StepLabel>
            <div className="rounded-md border border-ai-border bg-ai-surface p-4 text-neutral-800">
              <Badge tone="ai">AI explanation · Advisory</Badge>
              <blockquote className="mt-3 text-sm leading-6">
                Two bank records satisfy the available matching evidence. The supplied evidence is insufficient to
                determine which record belongs to this settlement. Human review required.
              </blockquote>
            </div>
            <p className="mt-3 text-xs text-neutral-400">Verbatim from the product.</p>
          </div>
        </div>

        <div className="mt-12">
          <StepLabel n={4}>Who decides what</StepLabel>
          <p className="mb-4 text-sm text-neutral-400">Select a column to dim the other two.</p>
          <div className="grid gap-4 md:grid-cols-3" role="group" aria-label="Who decides what">
            {columns.map((c) => (
              <button
                key={c.key}
                type="button"
                aria-pressed={focus === c.key}
                onClick={() => setFocus(focus === c.key ? null : c.key)}
                className={`rounded-lg border p-6 text-left text-neutral-900 transition-opacity duration-(--duration-standard) ${colStyle[c.key]} ${
                  focus && focus !== c.key ? "opacity-40" : "opacity-100"
                }`}
              >
                {c.label && <Badge tone="ai">{c.label}</Badge>}
                <h3 className={`text-lg font-bold ${c.label ? "mt-2" : ""}`}>{c.title}</h3>
                <p className="mt-2 text-sm leading-6 text-neutral-700">{c.body}</p>
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 max-w-3xl">
          <p className="text-lg leading-8 text-neutral-200">
            A tool built to look clever would pick the earlier date and move on. If it picked wrong, the cash is
            booked to the wrong settlement, and you might not find out until next month's close. Or the audit. Nodes
            stops, pulls rows 40 and 42, and waits for you.
          </p>
          <div className="mt-8">
            <ButtonLink
              href={links.caseDeepLink}
              external
              size="lg"
              onClick={() => {
                track("cta_case_deeplink");
                track("cta_workspace_click", { location: "case" });
              }}
            >
              Open case 033 in the workspace
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
