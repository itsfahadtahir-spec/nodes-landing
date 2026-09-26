import type { AnchorHTMLAttributes, ReactNode } from "react";
import { ArrowRight } from "lucide-react";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[1200px] px-5 sm:px-8 ${className}`}>{children}</div>;
}

export function Section({
  id,
  children,
  className = "",
  tone = "white",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  tone?: "white" | "muted";
}) {
  return (
    <section
      id={id}
      className={`py-16 sm:py-24 ${tone === "muted" ? "bg-neutral-50" : "bg-neutral-0"} ${className}`}
    >
      <Container>{children}</Container>
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="eyebrow mb-3">{children}</p>;
}

export function H2({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <h2 className={`text-3xl font-bold tracking-[-0.02em] text-neutral-900 sm:text-4xl ${className}`}>
      {children}
    </h2>
  );
}

type ButtonVariant = "primary" | "secondary" | "text";

const variantClass: Record<ButtonVariant, string> = {
  primary:
    "bg-teal-700 text-white hover:bg-teal-800 shadow-sm",
  secondary:
    "bg-neutral-0 text-neutral-800 border border-neutral-300 hover:bg-neutral-50",
  text: "text-teal-700 hover:text-teal-800 px-0",
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
  const sizeClass = size === "lg" ? "min-h-12 px-6 text-base" : "min-h-11 px-5 text-sm";
  return (
    <a
      {...rest}
      target={external ? "_blank" : rest.target}
      rel={external ? "noopener noreferrer" : rest.rel}
      className={`inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-semibold transition-colors duration-(--duration-standard) ease-(--ease-standard) ${sizeClass} ${variantClass[variant]} ${className}`}
    >
      {children}
      {external && <ArrowRight size={18} strokeWidth={2} aria-hidden="true" />}
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
