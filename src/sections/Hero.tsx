import { useEffect, useState } from "react";
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

export function Hero() {
  const mobile = useIsMobile();
  return (
    <section id="top" className="relative overflow-hidden bg-[linear-gradient(180deg,#FFFFFF_0%,#F8FAFC_60%,#ECFEFF_100%)]">
      <Container className="grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-[1fr_minmax(0,620px)] lg:gap-16 lg:py-24">
        <div className="max-w-xl">
          <p className="eyebrow mb-4">Finance Reconciliation Workspace</p>
          <h1 className="text-4xl font-bold leading-[1.1] tracking-[-0.025em] text-neutral-900 sm:text-5xl lg:text-[3.5rem]">
            Reconcile the volume.
            <br />
            Review the exceptions.
          </h1>
          <p className="mt-6 text-lg leading-8 text-neutral-600">
            Nodes brings ERP, payment-provider and bank reconciliation into one controlled workflow.
          </p>
          <p className="mt-4 text-lg leading-8 text-neutral-600">
            Deterministic rules handle repeatable matching. AI helps explain unresolved cases. Finance keeps the final
            decision.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <ButtonLink
              href={links.demoRequest}
              size="lg"
              onClick={() => track("cta_demo_request", { location: "hero" })}
            >
              Request a demo
            </ButtonLink>
            <ButtonLink
              href={links.productOverview}
              variant="secondary"
              size="lg"
              external
              onClick={() => track("cta_product_overview", { location: "hero" })}
            >
              Watch product overview
            </ButtonLink>
          </div>
          <p className="mt-4 text-sm text-neutral-500">
            Built by Fahad Tahir as a practical finance transformation product.
          </p>
        </div>

        <div className="flex justify-center lg:justify-end">
          <HeroAnimation key={mobile ? "m" : "d"} initialScene={mobile ? 3 : 1} autoplay={!mobile} />
        </div>
      </Container>
    </section>
  );
}
