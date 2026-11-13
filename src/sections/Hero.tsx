import { useEffect, useState } from "react";
import { Check, ShieldCheck, Sparkles } from "lucide-react";
import { ButtonLink, Container } from "../components/ui";
import { links, track } from "../lib/site";
import { HeroAnimation } from "./HeroAnimation";

function useIsMobile() {
  const [mobile, setMobile] = useState(() => typeof window !== "undefined" && window.innerWidth < 768);
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const onChange = () => setMobile(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  return mobile;
}

const reassurances = ["Live walkthrough with the builder", "No AI in any match", "Every decision stays with Finance"];

function FloatCard({ className, children }: { className: string; children: React.ReactNode }) {
  return (
    <div
      className={`float-y absolute z-20 hidden w-[250px] rounded-2xl border border-white/10 bg-ink-800/80 p-4 text-left text-[13px] text-white shadow-[0_30px_60px_-20px_rgb(0_0_0/0.7)] backdrop-blur-xl min-[1500px]:block ${className}`}
    >
      {children}
    </div>
  );
}

export function Hero() {
  const mobile = useIsMobile();
  return (
    <section id="top" className="relative overflow-hidden bg-ink-950">
      <div aria-hidden="true" className="ink-grid pointer-events-none absolute inset-0" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[44%] h-[720px] w-[1100px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgb(8_145_178/0.38),transparent)] blur-2xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[-260px] h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgb(103_232_249/0.14),transparent)]"
      />

      <Container className="relative z-10 flex flex-col items-center pb-24 pt-32 text-center sm:pt-40">
        <span className="inline-flex items-center gap-2 rounded-full border border-teal-400/25 bg-teal-400/10 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-teal-200 sm:text-xs">
          <span className="size-1.5 rounded-full bg-teal-300 shadow-[0_0_10px_#67E8F9]" />
          Finance Reconciliation Workspace
        </span>

        <h1 className="mt-7 max-w-[980px] text-[2.75rem] font-semibold leading-[1.02] tracking-[-0.045em] text-white sm:text-7xl lg:text-[5.5rem]">
          Reconcile the volume.
          <br />
          <span className="text-gradient">Review the exceptions.</span>
        </h1>

        <p className="mt-7 max-w-[660px] text-lg leading-8 text-white/65 sm:text-xl">
          Nodes ties out your ERP, payment-provider and bank records by rule, then hands Finance only the exceptions,
          with the evidence already gathered.
        </p>

        <div className="mt-10 flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row">
          <ButtonLink
            href={links.demoRequest}
            size="lg"
            className="w-full sm:w-auto"
            onClick={() => track("cta_demo_request", { location: "hero" })}
          >
            Request a demo
          </ButtonLink>
          <ButtonLink
            href="#demo"
            variant="secondary"
            size="lg"
            className="w-full sm:w-auto"
            onClick={() => track("cta_product_overview", { location: "hero" })}
          >
            Watch the demo
          </ButtonLink>
        </div>

        <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-white/55">
          {reassurances.map((r) => (
            <li key={r} className="inline-flex items-center gap-2">
              <Check size={14} strokeWidth={2.5} className="text-teal-300" aria-hidden="true" />
              {r}
            </li>
          ))}
        </ul>

        <div className="relative mt-16 w-full max-w-[1000px] sm:mt-20">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-px rounded-[22px] bg-[linear-gradient(180deg,rgb(103_232_249/0.45),rgb(255_255_255/0.04)_40%)]"
          />
          <div className="relative rounded-[22px] bg-white/[0.04] p-2 shadow-[0_60px_120px_-30px_rgb(8_145_178/0.55)] sm:p-3">
            <div className="hero-anim flex justify-center text-left">
              <HeroAnimation key={mobile ? "m" : "d"} initialScene={mobile ? 3 : 1} autoplay={!mobile} />
            </div>
          </div>

          <FloatCard className="-left-[205px] top-[70px]">
            <div className="flex items-center gap-2">
              <span className="grid size-7 place-items-center rounded-lg bg-teal-400/15 text-teal-300">
                <ShieldCheck size={15} aria-hidden="true" />
              </span>
              <span className="font-semibold">Controlled known-answer test</span>
            </div>
            <div className="mt-3 flex items-end justify-between">
              <span className="num text-3xl font-semibold tracking-[-0.03em]">95%</span>
              <span className="pb-1 text-xs text-white/60">reconciled by rule</span>
            </div>
            <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/10">
              <div className="h-full w-[95%] rounded-full bg-[linear-gradient(90deg,#0891B2,#67E8F9)]" />
            </div>
            <div className="mt-3 flex items-center justify-between border-t border-white/10 pt-3 text-xs">
              <span className="text-white/60">Incorrect automated matches</span>
              <span className="num font-semibold">0</span>
            </div>
          </FloatCard>

          <FloatCard className="-right-[205px] bottom-[90px] [animation-delay:-3.5s]">
            <span className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-md bg-ai/25 px-2 py-1 font-mono text-[10px] font-semibold tracking-[0.06em] text-[#C9C1FF]">
              <Sparkles size={11} aria-hidden="true" /> AI EXPLANATION · ADVISORY
            </span>
            <p className="mt-3 leading-5 text-white/80">
              Explains the evidence on file. Never selects a match or sets a disposition.
            </p>
            <div className="mt-3 flex items-center gap-2 border-t border-white/10 pt-3 text-xs text-white/60">
              <Check size={13} className="text-teal-300" aria-hidden="true" /> Finance makes the call
            </div>
          </FloatCard>
        </div>
      </Container>
    </section>
  );
}
