import { useEffect, useState } from "react";
import { ButtonLink } from "./ui";
import { links, track } from "../lib/site";

/** Mobile-only demo bar, shown once the hero CTA has scrolled away and hidden again at the final CTA. */
export function StickyCta() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      const final = document.getElementById("final-cta");
      const pastHero = window.scrollY > window.innerHeight * 0.9;
      const atFinal = final ? final.getBoundingClientRect().top < window.innerHeight : false;
      setShow(pastHero && !atFinal);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-ink-950/90 px-5 pb-[max(12px,env(safe-area-inset-bottom))] pt-3 backdrop-blur-xl transition-transform duration-(--duration-modal) md:hidden ${
        show ? "translate-y-0" : "translate-y-full"
      }`}
      aria-hidden={!show}
    >
      <ButtonLink
        href={links.demoRequest}
        className="w-full"
        tabIndex={show ? 0 : -1}
        onClick={() => track("cta_demo_request", { location: "sticky" })}
      >
        Request a demo
      </ButtonLink>
    </div>
  );
}
