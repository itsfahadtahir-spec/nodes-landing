import { H2, Section } from "../components/ui";

const pillars = [
  "Matching logic remains deterministic.",
  "AI is limited to helping explain available evidence.",
  "The finance user remains responsible for reviewing exceptions and deciding the final outcome.",
];

export function ControlPhilosophy() {
  return (
    <Section id="control">
      <div className="max-w-3xl">
        <H2>Rules reconcile. AI explains exceptions. Finance decides.</H2>
        <p className="mt-5 text-lg leading-8 text-neutral-600">
          Nodes deliberately separates calculation, interpretation and decision authority.
        </p>
      </div>
      <ul className="mt-10 divide-y divide-neutral-200 border-y border-neutral-200">
        {pillars.map((p) => (
          <li key={p} className="py-4 text-lg leading-8 text-neutral-800">
            {p}
          </li>
        ))}
      </ul>
      <p className="mt-8 max-w-3xl text-lg leading-8 text-neutral-600">
        The objective is not autonomous finance. It is faster reconciliation without giving up control.
      </p>
    </Section>
  );
}
