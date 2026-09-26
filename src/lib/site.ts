// External destinations. Values marked TODO are confirmed with Fahad before launch
// (see nodes-landing-copy.md §7). Keep the UTM convention on every outbound link.
export const links = {
  workspace: import.meta.env.VITE_WORKSPACE_URL ?? "https://reconciliation-workspace.lovable.app",
  caseDeepLink:
    import.meta.env.VITE_CASE_DEEPLINK_URL ??
    "https://reconciliation-workspace.lovable.app/review-queue", // TODO: direct link to SET-202608-033
  github: "https://github.com/itsfahadtahir-spec/reconciliation_copilot",
  githubWorkspace: "https://github.com/itsfahadtahir-spec/reconciliation-workspace",
  linkedin: import.meta.env.VITE_LINKEDIN_URL ?? "https://www.linkedin.com/", // TODO
  cv: import.meta.env.VITE_CV_URL ?? "/fahad-cv.pdf", // TODO
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
