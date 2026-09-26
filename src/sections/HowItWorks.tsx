import { useEffect, useRef, useState } from "react";
import { Badge, H2, Mono, Section } from "../components/ui";

const steps = [
  {
    title: "Drop in the files.",
    body: "ERP orders, payment-provider transactions, the bank statement. Every row keeps its file name and row number, so nothing loses its paper trail.",
  },
  {
    title: "Catch bad data first.",
    body: "Duplicates and missing fields get flagged before matching starts, so a broken row can't slip through looking like a clean match.",
  },
  {
    title: "Tie out by rule.",
    body: "Exact reference matches first, then a tightly controlled fallback. Fees, VAT and expected payouts are calculated line by line. Run it twice and you get the same answer twice.",
  },
  {
    title: "Flag what doesn't tie.",
    body: "Every exception opens as a case with the candidate rows, file names and row numbers attached. No Ctrl+F required.",
  },
  {
    title: "You sign off.",
    body: "AI writes a short, labelled summary of what's known, what isn't and what to check next. You pick the outcome. Nodes logs who did what, and when.",
  },
];

function PanelRow({ k, v, mono = false }: { k: string; v: string; mono?: boolean }) {
  return (
    <div className="flex items-baseline justify-between gap-4 border-b border-neutral-100 py-2 text-sm last:border-0">
      <span className="text-neutral-600">{k}</span>
      {mono ? <Mono className="text-neutral-900">{v}</Mono> : <span className="font-medium text-neutral-900">{v}</span>}
    </div>
  );
}

function Panel({ step }: { step: number }) {
  return (
    <div className="nx-window w-full" aria-hidden="true">
      <div className="nx-bar">
        <img src="/brand/nodes-mark.svg" alt="" width={16} height={16} />
        <span className="t text-sm">Nodes</span>
        <span className="run">
          {["Sources", "Validation", "Matching", "Review queue", "Case SET-202608-033"][step]}
        </span>
      </div>
      <div className="p-5">
        {step === 0 && (
          <>
            <PanelRow k="erp_aug_2026.csv" v="1,000 rows · ERP" mono />
            <PanelRow k="psp_aug_2026.csv" v="Transactions, fees, settlements" mono />
            <PanelRow k="bank_aug_sep_2026.csv" v="Statement lines" mono />
            <p className="mt-4 text-xs text-neutral-500">Every row carries source file + row number from here on.</p>
          </>
        )}
        {step === 1 && (
          <>
            <PanelRow k="Duplicate source rows" v="5 flagged" />
            <PanelRow k="Missing required fields" v="Checked" />
            <PanelRow k="Control checks" v="18 of 18 passed" />
            <p className="mt-4 text-xs text-neutral-500">Nothing enters matching until validation is done.</p>
          </>
        )}
        {step === 2 && (
          <>
            <div className="flex items-center justify-between py-2 text-sm">
              <span className="text-neutral-700">Exact reference match</span>
              <span className="flex items-center gap-2"><Badge tone="ok">Reconciled</Badge><Mono>880</Mono></span>
            </div>
            <div className="flex items-center justify-between py-2 text-sm">
              <span className="text-neutral-700">Controlled fallback match</span>
              <span className="flex items-center gap-2"><Badge tone="ok">Reconciled</Badge><Mono>70</Mono></span>
            </div>
            <PanelRow k="Settlements calculated" v="40" mono />
            <PanelRow k="Expected net settlement" v="AED 917,286.03" mono />
          </>
        )}
        {step === 3 && (
          <>
            <div className="flex items-center justify-between py-2 text-sm">
              <Mono className="text-neutral-900">SET-202608-033</Mono>
              <Badge tone="review">Review required</Badge>
            </div>
            <PanelRow k="Candidate" v="BANK-202608-0039 · row 40" mono />
            <PanelRow k="Candidate" v="BANK-202608-0041 · row 42" mono />
            <p className="mt-4 text-xs text-neutral-500">Both rows attached. Neither is marked as preferred.</p>
          </>
        )}
        {step === 4 && (
          <>
            <div className="rounded-md border border-ai-border bg-ai-surface p-3">
              <Badge tone="ai">AI explanation · Advisory</Badge>
              <p className="mt-2 text-xs leading-5 text-neutral-700">
                Two bank records satisfy the available matching evidence. Human review required.
              </p>
            </div>
            <div className="mt-3 flex gap-2">
              <span className="rounded-md bg-teal-700 px-3 py-1.5 text-xs font-semibold text-white">Resolve</span>
              <span className="rounded-md border border-neutral-300 px-3 py-1.5 text-xs font-semibold text-neutral-800">Escalate</span>
            </div>
            <p className="mt-3 text-xs text-neutral-500">Logged with reviewer, disposition and timestamp.</p>
          </>
        )}
      </div>
    </div>
  );
}

export function HowItWorks() {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(Number((e.target as HTMLElement).dataset.step));
        }
      },
      { rootMargin: "-40% 0px -50% 0px" },
    );
    for (const el of refs.current) if (el) obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <Section id="how-it-works">
      <div className="max-w-3xl">
        <H2>What happens between upload and sign-off</H2>
      </div>
      <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_440px] lg:gap-16">
        <ol className="space-y-10 lg:space-y-16">
          {steps.map((s, i) => (
            <li
              key={s.title}
              data-step={i}
              ref={(el) => { refs.current[i] = el; }}
              className={`grid grid-cols-[2.5rem_1fr] gap-4 transition-opacity duration-(--duration-standard) ${
                active === i ? "opacity-100" : "lg:opacity-60"
              }`}
            >
              <span className="num flex h-10 w-10 items-center justify-center rounded-full border border-teal-700 font-mono text-sm font-semibold text-teal-700">
                {i + 1}
              </span>
              <div>
                <h3 className="text-xl font-semibold text-neutral-900">{s.title}</h3>
                <p className="mt-2 leading-7 text-neutral-600">{s.body}</p>
              </div>
            </li>
          ))}
        </ol>
        <div className="hidden lg:block">
          <div className="sticky top-28">
            <Panel step={active} />
          </div>
        </div>
      </div>
    </Section>
  );
}
