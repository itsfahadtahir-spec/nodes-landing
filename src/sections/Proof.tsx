import { H2, Section } from "../components/ui";

export function Proof() {
  return (
    <Section id="proof">
      <div className="max-w-3xl">
        <H2>Designed to automate confidently, not aggressively.</H2>
        <p className="mt-5 text-lg leading-8 text-neutral-600">
          Across high-volume reconciliation scenarios covering more than 1,000 e-commerce transactions:
        </p>
        <ul className="mt-6 space-y-3">
          <li className="border-l-2 border-teal-700 pl-4 text-lg leading-8 text-neutral-800">
            95% were automatically reconciled.
          </li>
          <li className="border-l-2 border-teal-700 pl-4 text-lg leading-8 text-neutral-800">
            The remaining 5% were routed for analyst review.
          </li>
          <li className="border-l-2 border-teal-700 pl-4 text-lg leading-8 text-neutral-800">
            There were zero incorrect automated matches.
          </li>
        </ul>
        <p className="mt-8 text-lg leading-8 text-neutral-600">
          The objective was not to maximise automation at any cost. The objective was to automate only where the
          available evidence justified it.
        </p>
      </div>
    </Section>
  );
}
