import { Container } from "./ui";
import { links, track } from "../lib/site";

export function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-neutral-50 py-12">
      <Container className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
        <div className="max-w-md">
          <img src="/brand/nodes-lockup.svg" alt="Nodes · Controlled Reconciliation Workspace" className="h-10 w-auto" />
          <p className="mt-4 text-sm leading-6 text-neutral-600">
            Finance-controlled reconciliation. Rules reconcile. AI explains exceptions. Finance decides.
          </p>
          <p className="mt-2 text-sm leading-6 text-neutral-600">Built by Fahad Tahir.</p>
        </div>
        <nav aria-label="Footer">
          <ul className="flex gap-6 text-sm font-medium text-neutral-700">
            <li>
              <a
                href={links.portfolio}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-teal-800"
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                href={links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-teal-800"
                onClick={() => track("cta_linkedin_click", { location: "footer" })}
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href={links.demoRequest}
                className="hover:text-teal-800"
                onClick={() => track("cta_demo_request", { location: "footer" })}
              >
                Request demo
              </a>
            </li>
          </ul>
        </nav>
      </Container>
    </footer>
  );
}
