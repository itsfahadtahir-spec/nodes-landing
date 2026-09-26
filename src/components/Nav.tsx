import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { ButtonLink, Container } from "./ui";
import { links, track } from "../lib/site";

const navLinks = [
  { href: "#how-it-works", label: "How it works" },
  { href: "#review-case", label: "Case 033" },
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
      className={`sticky top-0 z-50 bg-neutral-0 transition-[border-color,box-shadow] duration-(--duration-standard) ${
        scrolled ? "border-b border-neutral-200 shadow-sm" : "border-b border-transparent"
      }`}
    >
      <Container className="flex h-16 items-center justify-between gap-6">
        <a href="#top" className="flex shrink-0 items-center" aria-label="Nodes home">
          <img src="/brand/nodes-wordmark.svg" alt="Nodes" className="h-7 w-auto" />
        </a>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-7 text-sm font-medium text-neutral-700">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="hover:text-teal-800">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <ButtonLink
            href={links.workspace}
            external
            className="min-h-10 px-4"
            onClick={() => track("cta_workspace_click", { location: "nav" })}
          >
            Open workspace
          </ButtonLink>
          <button
            type="button"
            className="inline-flex size-10 items-center justify-center rounded-md text-neutral-700 hover:bg-neutral-100 md:hidden"
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
        <nav id="mobile-nav" aria-label="Primary mobile" className="border-t border-neutral-200 bg-neutral-0 md:hidden">
          <ul className="flex flex-col px-5 py-2">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="block py-3 text-base font-medium text-neutral-800"
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
