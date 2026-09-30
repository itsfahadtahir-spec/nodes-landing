// External destinations. Values marked TODO are confirmed with Fahad before launch
// (see docs/nodes-landing-copy.md §8). Keep the UTM convention on every outbound link.
const workspace = import.meta.env.VITE_WORKSPACE_URL ?? "https://reconciliation-studio.lovable.app";

// August 2026 reference run on the production API (label: gate-13-full-live-evaluation).
export const referenceRun = {
  runId: import.meta.env.VITE_RUN_ID ?? "191def20-cacb-47b3-865e-bb44aac4491b",
  // Review case for the SET-202608-033 ambiguous-bank-candidate event in that run.
  case033Id: import.meta.env.VITE_CASE_033_ID ?? "2c492df3-730d-4952-a17e-4df8d47e9e82",
} as const;

export const links = {
  workspace: `${workspace}/runs`,
  reviewQueue: `${workspace}/runs/${referenceRun.runId}/review-queue`,
  caseDeepLink:
    import.meta.env.VITE_CASE_DEEPLINK_URL ??
    `${workspace}/runs/${referenceRun.runId}/review-queue/${referenceRun.case033Id}`,
  matchProof: (traceId: string) =>
    `${workspace}/runs/${referenceRun.runId}/reconciled/${encodeURIComponent(traceId)}`,
  github: "https://github.com/itsfahadtahir-spec/reconciliation_copilot",
  githubWorkspace: "https://github.com/itsfahadtahir-spec/reconciliation-workspace",
  tests: "https://github.com/itsfahadtahir-spec/reconciliation_copilot/tree/main/tests",
  architecture: "https://github.com/itsfahadtahir-spec/reconciliation_copilot/tree/main/docs",
  linkedin: import.meta.env.VITE_LINKEDIN_URL ?? "https://www.linkedin.com/", // TODO
  cv: import.meta.env.VITE_CV_URL ?? "/fahad-cv.pdf", // TODO
  email: import.meta.env.VITE_EMAIL ?? "", // TODO
} as const;

export type TrackEvent =
  | "cta_workspace_click"
  | "cta_case_deeplink"
  | "cta_github_click"
  | "cta_linkedin_click"
  | "cv_download"
  | "scroll_case_section";

export type CtaLocation = "nav" | "hero" | "case" | "final" | "proof" | "about" | "footer";

declare global {
  interface Window {
    plausible?: (event: string, options?: { props?: Record<string, string> }) => void;
  }
}

export function track(event: TrackEvent, props?: Record<string, string>) {
  window.plausible?.(event, props ? { props } : undefined);
}
