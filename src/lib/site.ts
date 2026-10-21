// External destinations for the public Nodes website.
// The public site links to email, the product overview video, LinkedIn and the
// portfolio only. It intentionally does not link the live workspace, source
// code or implementation repositories.
export const links = {
  demoRequest: "mailto:itsfahadtahir@gmail.com?subject=Nodes%20demo%20request",
  productOverview: "https://youtu.be/wSmjMcULRRM",
  linkedin: "https://www.linkedin.com/in/fahadtahiruae/",
  portfolio: "https://fahadtahir.vercel.app",
} as const;

export type TrackEvent = "cta_demo_request" | "cta_product_overview" | "cta_linkedin_click";

export type CtaLocation = "nav" | "hero" | "faq" | "final" | "footer";

declare global {
  interface Window {
    plausible?: (event: string, options?: { props?: Record<string, string> }) => void;
  }
}

export function track(event: TrackEvent, props?: Record<string, string>) {
  window.plausible?.(event, props ? { props } : undefined);
}
