import { useState } from "react";
import { Play } from "lucide-react";
import { H2, Reveal, Section } from "../components/ui";
import { links, track } from "../lib/site";

const VIDEO_ID = "wSmjMcULRRM";

export function VideoDemo() {
  const [playing, setPlaying] = useState(false);
  return (
    <Section id="demo">
      <Reveal className="mx-auto max-w-3xl text-center">
        <p className="eyebrow mb-4">Product demo</p>
        <H2>Watch a full reconciliation run.</H2>
        <p className="mt-6 text-lg leading-8 text-white/65">
          From source files and deterministic matching through exception review, AI explanation and finance approval.
        </p>
      </Reveal>

      <Reveal delay={120} className="relative mx-auto mt-14 max-w-[1000px]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -inset-px rounded-[22px] bg-[linear-gradient(180deg,rgb(103_232_249/0.45),rgb(255_255_255/0.04)_40%)]"
        />
        <div className="relative rounded-[22px] bg-white/[0.04] p-2 shadow-[0_60px_120px_-30px_rgb(8_145_178/0.55)] sm:p-3">
          <div className="relative aspect-video overflow-hidden rounded-[14px] bg-ink-900">
            {playing ? (
              <iframe
                className="absolute inset-0 size-full"
                src={`https://www.youtube-nocookie.com/embed/${VIDEO_ID}?autoplay=1&rel=0&modestbranding=1`}
                title="Nodes: Finance Reconciliation Workspace product demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            ) : (
              <button
                type="button"
                onClick={() => {
                  setPlaying(true);
                  track("cta_product_overview", { location: "video" });
                }}
                className="group absolute inset-0 size-full"
                aria-label="Play the Nodes product demo"
              >
                <img
                  src="/nodes-demo-cover.webp"
                  alt=""
                  width={2560}
                  height={1440}
                  loading="lazy"
                  decoding="async"
                  className="size-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                />
                <span className="absolute bottom-4 right-4 hidden items-center gap-2 rounded-full border border-white/15 bg-ink-950/80 px-4 py-2 text-sm font-semibold text-white backdrop-blur-md transition-colors group-hover:border-teal-300/50 sm:bottom-6 sm:right-6 sm:inline-flex">
                  <Play size={14} className="fill-current text-teal-300" aria-hidden="true" />
                  Play the demo
                </span>
              </button>
            )}
          </div>
        </div>
        <p className="mt-6 text-center text-sm text-white/50">
          Prefer YouTube?{" "}
          <a
            href={links.productOverview}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-white/80 underline decoration-white/30 underline-offset-4 hover:text-white"
            onClick={() => track("cta_product_overview", { location: "video" })}
          >
            Open it there
          </a>
        </p>
      </Reveal>
    </Section>
  );
}
