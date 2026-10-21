import { useCallback, useEffect, useRef, useState } from "react";

type Scene = 1 | 2 | 3;
const DUR: Record<Scene, number> = { 1: 4200, 2: 5000, 3: 7500 };

function useReducedMotion() {
  const [reduce, setReduce] = useState(
    () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReduce(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  return reduce;
}

function MarkIcon({ size, light }: { size: number; light?: boolean }) {
  const line = light ? ["#A5F3FC", "#67E8F9"] : ["#0891B2", "#06B6D4"];
  const node = light ? "#fff" : "#0E7490";
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" aria-hidden="true">
      <g fill="none" strokeLinecap="round" strokeWidth="4">
        <path d="M13,35 L13,13" stroke={line[0]} />
        <path d="M13,13 L35,35" stroke={line[1]} />
        <path d="M35,35 L35,22" stroke={line[0]} />
      </g>
      <g fill={node}>
        <circle cx="13" cy="35" r="4.75" />
        <circle cx="13" cy="13" r="4.75" />
        <circle cx="35" cy="35" r="4.75" />
      </g>
      <circle cx="35" cy="13" r="4.1" fill="none" stroke={node} strokeWidth="2.6" />
    </svg>
  );
}

interface Props {
  /** Scene shown first. Mobile starts on 3 (the review case). */
  initialScene?: Scene;
  autoplay?: boolean;
}

export function HeroAnimation({ initialScene = 1, autoplay: autoplayProp = true }: Props) {
  const reduce = useReducedMotion();
  const [scene, setScene] = useState<Scene>(reduce ? 3 : initialScene);
  const [playing, setPlaying] = useState(autoplayProp && !reduce);
  const [count, setCount] = useState("1,000+");
  const [done, setDone] = useState(false);
  const [wires, setWires] = useState<{ d: string; i: number }[]>([]);
  const s1Ref = useRef<HTMLDivElement>(null);
  const tileRef = useRef<HTMLDivElement>(null);
  const sourceRefs = useRef<(HTMLDivElement | null)[]>([]);

  const drawWires = useCallback(() => {
    const wrap = s1Ref.current;
    const tile = tileRef.current;
    if (!wrap || !tile) return;
    const box = wrap.getBoundingClientRect();
    const tb = tile.getBoundingClientRect();
    const tx = tb.left - box.left;
    const ty = tb.top - box.top + tb.height / 2;
    setWires(
      sourceRefs.current.flatMap((el, i) => {
        if (!el) return [];
        const b = el.getBoundingClientRect();
        const x1 = b.right - box.left;
        const y1 = b.top - box.top + b.height / 2;
        const mx = (x1 + tx) / 2;
        return [{ d: `M${x1},${y1} C${mx},${y1} ${mx},${ty} ${tx},${ty}`, i }];
      }),
    );
  }, []);

  // Scene side-effects: wires, count-up, candidate reveal.
  useEffect(() => {
    let raf = 0;
    let t: ReturnType<typeof setTimeout> | undefined;
    if (scene === 1) {
      drawWires();
      window.addEventListener("resize", drawWires);
    }
    if (scene === 2 && !reduce) {
      const t0 = performance.now();
      const tick = (now: number) => {
        const p = Math.min(1, (now - t0) / 1100);
        const e = 1 - Math.pow(1 - p, 3);
        setCount(p < 1 ? Math.round(1000 * e).toLocaleString("en-US") : "1,000+");
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    }
    if (scene === 3) {
      t = setTimeout(() => setDone(true), reduce ? 0 : 3700);
    }
    return () => {
      cancelAnimationFrame(raf);
      if (t) clearTimeout(t);
      window.removeEventListener("resize", drawWires);
    };
  }, [scene, reduce, drawWires]);

  // Autoplay loop.
  useEffect(() => {
    if (!playing) return;
    const t = setTimeout(() => {
      setDone(false);
      setScene((s) => (s === 3 ? 1 : ((s + 1) as Scene)));
    }, DUR[scene]);
    return () => clearTimeout(t);
  }, [scene, playing]);

  const go = (n: Scene) => {
    setPlaying(false);
    setScene(n);
    setDone(false);
  };

  return (
    <div
      className={`nx-window ${playing ? "playing" : ""}`}
      data-scene={scene}
      style={{ ["--dur" as string]: `${DUR[scene]}ms` }}
      role="group"
      aria-roledescription="animation"
      aria-label="How Nodes works: load, reconcile, review"
    >
      <div className="nx-bar">
        <MarkIcon size={22} />
        <span className="t">Nodes</span>
        <span className="s">Controlled Reconciliation Workspace</span>
        <span className="run">RUN · AUG 2026</span>
      </div>

      <div className="nx-stage" aria-live="polite">
        <section className={`nx-scene ${scene === 1 ? "on" : ""}`} aria-label="Step 1, load source data" aria-hidden={scene !== 1}>
          <p className="eyebrow">1 · Drop in the files</p>
          <div className="s1" ref={s1Ref}>
            <svg className="wires" aria-hidden="true">
              {wires.map(({ d, i }) => (
                <g key={i}>
                  <path d={d} />
                  {!reduce && (
                    <circle r="3">
                      <animateMotion dur="1.6s" begin={`${0.3 + i * 0.25}s`} repeatCount="indefinite" path={d} />
                    </circle>
                  )}
                </g>
              ))}
            </svg>
            <div className="sources">
              <div className="src rv d1" ref={(el) => { sourceRefs.current[0] = el; }}>
                <b>ERP orders</b>
                <span className="num">1,000+ transactions</span>
              </div>
              <div className="src rv d2" ref={(el) => { sourceRefs.current[1] = el; }}>
                <b>Payment provider</b>
                <span>Transactions, fees, settlements</span>
              </div>
              <div className="src rv d3" ref={(el) => { sourceRefs.current[2] = el; }}>
                <b>Bank statement</b>
                <span>Statement lines</span>
              </div>
            </div>
            <div className="engine">
              <div className="tile rv d3" ref={tileRef}>
                <MarkIcon size={40} light />
              </div>
            </div>
            <ul className="checks">
              <li className="rv d4">Duplicates checked</li>
              <li className="rv d5">Fields validated</li>
              <li className="rv d6">Source rows traced</li>
            </ul>
            <p className="s1-cap rv d6">Every row keeps its file name and row number. Nothing loses its paper trail.</p>
          </div>
        </section>

        <section className={`nx-scene ${scene === 2 ? "on" : ""}`} aria-label="Step 2, reconcile with rules" aria-hidden={scene !== 2}>
          <p className="eyebrow">2 · Tie out by rule</p>
          <div className="big">
            <span className="v num">{reduce ? "1,000+" : count}</span>
            <span className="l">Transactions assessed</span>
          </div>
          <div className="bar" role="img" aria-label="Most transactions reconciled by rules, the remainder sent to review">
            <i className="a" />
            <i className="b" />
            <i className="c" />
          </div>
          <div className="legend">
            <div className="rv d3">
              <span className="sw" style={{ background: "var(--color-green)" }} />
              <span>Reconciled by deterministic rules</span>
              <span className="badge ok">RECONCILED</span>
              <span className="ct num">95%</span>
            </div>
            <div className="rv d5">
              <span className="sw" style={{ background: "#D99A1E" }} />
              <span>Flagged, evidence attached</span>
              <span className="badge rv2">REVIEW</span>
              <span className="ct num">5%</span>
            </div>
          </div>
          <p className="s2-foot rv d7">Run it twice, get the same answer twice. No AI in any match.</p>
        </section>

        <section className={`nx-scene ${scene === 3 ? "on" : ""}`} aria-label="Step 3, review an exception" aria-hidden={scene !== 3}>
          <p className="eyebrow">3 · You sign off</p>
          <div className="case-h rv d1">
            <span className="id">Exception under review</span>
            <span className="badge rv2">REVIEW REQUIRED</span>
            <span className="k">Ambiguous bank candidate</span>
          </div>
          <div className="s3">
            <div className="panel rv d2">
              <h4>Bank candidates</h4>
              <div className="cands">
                {["Candidate record A", "Candidate record B"].map((c) => (
                  <div key={c} className={`cand ${done ? "done" : ""}`}>
                    <span className="rid">{c}</span>
                    <span className="meta">Bank statement</span>
                    <span />
                    <span className="tag">Plausible match</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="panel ai-note rv d6">
              <span className="badge ai">AI EXPLANATION · ADVISORY</span>
              <p>Two bank records satisfy the available matching evidence. The supplied evidence does not establish which one belongs to this settlement.</p>
            </div>
            <div className="panel human rv d7">
              <h4>Your decision</h4>
              <div className="sel">
                <span>Select disposition…</span>
                <span aria-hidden="true">▾</span>
              </div>
              <span className="btn">Record review</span>
            </div>
            <p className="s3-cap rv d7">Nodes won't guess. You decide.</p>
          </div>
        </section>
      </div>

      <nav className="nx-steps" aria-label="Animation steps">
        {([1, 2, 3] as Scene[]).map((n) => (
          <button key={n} type="button" onClick={() => go(n)} aria-current={scene === n ? "step" : undefined}>
            <span className="i">{n}</span>
            {n === 1 ? "Load" : n === 2 ? "Reconcile" : "Review"}
            <span className="prog" key={`${n}-${scene}`} />
          </button>
        ))}
      </nav>
    </div>
  );
}
