import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { ButtonLink, Container } from "./ui";
import { links, track } from "../lib/site";

const navLinks = [
  { href: "#product", label: "Product" },
  { href: "#demo", label: "Demo" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#proof", label: "Proof" },
  { href: "#about", label: "About" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color] duration-(--duration-modal) ${
        scrolled || open ? "border-b border-white/[0.08] bg-ink-950/80 backdrop-blur-xl" : "border-b border-transparent"
      }`}
    >
      <Container className="flex h-18 items-center justify-between gap-6">
        <a href="#top" className="flex shrink-0 items-center" aria-label="Nodes home">
          <img src="/brand/nodes-wordmark-dark.svg" alt="Nodes" className="h-8 w-auto" />
        </a>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.04] px-1.5 py-1.5 text-sm font-medium text-white/70 backdrop-blur-md">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="block rounded-full px-4 py-1.5 transition-colors hover:bg-white/10 hover:text-white"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <ButtonLink
            href={links.demoRequest}
            className="min-h-10 bg-white px-5 text-ink-950 shadow-none hover:bg-teal-50"
            onClick={() => track("cta_demo_request", { location: "nav" })}
          >
            Request a demo
          </ButtonLink>
          <button
            type="button"
            className="inline-flex size-10 items-center justify-center rounded-full text-white/80 hover:bg-white/10 md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </Container>

      {open && (
        <nav id="mobile-nav" aria-label="Primary mobile" className="border-t border-white/[0.08] md:hidden">
          <ul className="flex flex-col px-5 py-2">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="block py-3 text-base font-medium text-white/85"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
