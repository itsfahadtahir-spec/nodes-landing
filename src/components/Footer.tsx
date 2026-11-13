import { Container } from "./ui";
import { links, track } from "../lib/site";

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-ink-950 pb-28 pt-12 md:pb-12">
      <Container className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
        <div className="max-w-md">
          <img src="/brand/nodes-wordmark-dark.svg" alt="Nodes" className="h-8 w-auto" />
          <p className="mt-4 text-sm leading-6 text-white/50">
            Finance-controlled reconciliation. Rules reconcile. AI explains exceptions. Finance decides.
          </p>
          <p className="mt-2 text-sm leading-6 text-white/50">Built by Fahad Tahir.</p>
        </div>
        <nav aria-label="Footer">
          <ul className="flex gap-6 text-sm font-medium text-white/60">
            <li>
              <a href={links.portfolio} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                Portfolio
              </a>
            </li>
            <li>
              <a
                href={links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
                onClick={() => track("cta_linkedin_click", { location: "footer" })}
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href={links.demoRequest}
                className="hover:text-white"
                onClick={() => track("cta_demo_request", { location: "footer" })}
              >
                Request a demo
              </a>
            </li>
          </ul>
        </nav>
      </Container>
    </footer>
  );
}
