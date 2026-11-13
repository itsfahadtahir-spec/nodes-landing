import { useEffect, useRef, useState, type AnchorHTMLAttributes, type ReactNode } from "react";
import { ArrowRight } from "lucide-react";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[1200px] px-5 sm:px-8 ${className}`}>{children}</div>;
}

export function Section({
  id,
  children,
  className = "",
  tone = "ink",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  tone?: "ink" | "raised";
}) {
  return (
    <section
      id={id}
      className={`relative py-20 sm:py-32 ${tone === "raised" ? "border-y border-white/[0.06] bg-ink-900" : "bg-ink-950"} ${className}`}
    >
      <Container>{children}</Container>
    </section>
  );
}

export function Eyebrow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <p className={`eyebrow mb-4 ${className}`}>{children}</p>;
}

export function H2({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <h2
      className={`text-[2.125rem] font-semibold leading-[1.08] tracking-[-0.035em] text-white sm:text-5xl ${className}`}
    >
      {children}
    </h2>
  );
}

/** Fades content up once it scrolls into view. */
export function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -10% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className={`reveal ${inView ? "in" : ""} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

type ButtonVariant = "primary" | "secondary" | "text";

const variantClass: Record<ButtonVariant, string> = {
  primary: "bg-teal-300 text-ink-950 shadow-[0_0_40px_-8px_rgb(103_232_249/0.7)] hover:bg-teal-200",
  secondary: "border border-white/15 bg-white/[0.04] text-white backdrop-blur hover:bg-white/10",
  text: "text-teal-300 hover:text-teal-200 px-0",
};

interface ButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: ButtonVariant;
  size?: "md" | "lg";
  /** Renders a trailing arrow. Required for any link that leaves the page. */
  external?: boolean;
  children: ReactNode;
}

export function ButtonLink({
  variant = "primary",
  size = "md",
  external = false,
  className = "",
  children,
  ...rest
}: ButtonLinkProps) {
  const sizeClass = size === "lg" ? "min-h-12 px-7 text-[15px]" : "min-h-11 px-5 text-sm";
  return (
    <a
      {...rest}
      target={external ? "_blank" : rest.target}
      rel={external ? "noopener noreferrer" : rest.rel}
      className={`group inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-semibold transition-colors duration-(--duration-standard) ease-(--ease-standard) ${sizeClass} ${variantClass[variant]} ${className}`}
    >
      {children}
      {external && (
        <ArrowRight
          size={16}
          strokeWidth={2}
          aria-hidden="true"
          className="transition-transform duration-(--duration-standard) group-hover:translate-x-0.5"
        />
      )}
    </a>
  );
}

export function Badge({ tone, children }: { tone: "ok" | "review" | "ai"; children: ReactNode }) {
  const cls = {
    ok: "bg-green-surface text-green border-green/30",
    review: "bg-amber-surface text-amber border-amber-border",
    ai: "bg-ai-surface text-ai-text border-ai-border",
  }[tone];
  return (
    <span
      className={`inline-block whitespace-nowrap rounded border px-1.5 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-[0.08em] ${cls}`}
    >
      {children}
    </span>
  );
}

export function Mono({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <span className={`font-mono num ${className}`}>{children}</span>;
}
