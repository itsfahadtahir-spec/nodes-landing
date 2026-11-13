import { ButtonLink, H2, Reveal, Section } from "../components/ui";
import { links, track } from "../lib/site";

const results = [
  {
    value: "95%",
    body: "were automatically reconciled by deterministic rules.",
  },
  {
    value: "5%",
    body: "were routed for analyst review instead of being forced.",
  },
  { value: "0", body: "incorrect automated matches." },
];

export function Proof() {
  return (
    <Section id="proof">
      <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-center lg:gap-20">
        <Reveal>
          <p className="eyebrow mb-4">The evidence</p>
          <H2>Designed to automate confidently, not aggressively.</H2>
          <p className="mt-6 text-lg leading-8 text-white/65">
            Nodes was run against a controlled known-answer test of more than 1,000 e-commerce transactions, where the
            correct outcome for every record was set before the run.
          </p>
          <p className="mt-4 text-lg leading-8 text-white/65">
            The objective was not to maximise automation at any cost. The objective was to automate only where the
            available evidence justified it.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={links.demoRequest} onClick={() => track("cta_demo_request", { location: "proof" })}>
              Walk through the test in a demo
            </ButtonLink>
          </div>
        </Reveal>

        <div className="space-y-4">
          {results.map((r, i) => (
            <Reveal key={r.value} delay={i * 120}>
              <div className="flex items-center gap-6 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 sm:p-7">
                <span className="num text-gradient w-28 shrink-0 text-5xl font-semibold tracking-[-0.045em] sm:text-6xl">
                  {r.value}
                </span>
                <span className="text-lg leading-7 text-white/75">{r.body}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
