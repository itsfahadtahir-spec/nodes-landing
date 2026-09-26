import { Container } from "./ui";
import { links, track } from "../lib/site";

export function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-neutral-50 py-12">
      <Container className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
        <div className="max-w-md">
          <img src="/brand/nodes-lockup.svg" alt="Nodes · Controlled Reconciliation Workspace" className="h-10 w-auto" />
          <p className="mt-4 text-sm leading-6 text-neutral-600">
            A finance transformation prototype by Fahad. Synthetic data, real logic. Limits documented in the
            repository.
          </p>
        </div>
        <nav aria-label="Footer">
          <ul className="flex gap-6 text-sm font-medium text-neutral-700">
            <li>
              <a
                href={links.workspace}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-teal-800"
                onClick={() => track("cta_workspace_click", { location: "footer" })}
              >
                Workspace
              </a>
            </li>
            <li>
              <a
                href={links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-teal-800"
                onClick={() => track("cta_github_click", { location: "footer" })}
              >
                GitHub
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
          </ul>
        </nav>
      </Container>
    </footer>
  );
}
