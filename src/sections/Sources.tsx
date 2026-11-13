import { Building2, CreditCard, Landmark } from "lucide-react";
import { H2, Reveal, Section } from "../components/ui";

const sources = [
  { icon: Building2, name: "ERP orders", detail: "Order records" },
  {
    icon: CreditCard,
    name: "Payment provider",
    detail: "Transactions, fees, settlements",
  },
  { icon: Landmark, name: "Bank statement", detail: "Statement lines" },
];

export function Sources() {
  return (
    <Section id="sources">
      <div className="grid gap-14 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center lg:gap-20">
        <Reveal>
          <p className="eyebrow mb-4">Your sources</p>
          <H2>Three sources. One run. One trail.</H2>
          <p className="mt-6 text-lg leading-8 text-white/65">
            Bring the files you already reconcile by hand. Nodes validates them, ties them out by rule and keeps every
            match traceable to the source row it came from.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <div className="relative rounded-[22px] border border-white/10 bg-white/[0.02] p-6 sm:p-8">
            <div className="grid items-center gap-6 sm:grid-cols-[minmax(0,1fr)_auto_minmax(0,0.7fr)]">
              <ul className="space-y-3">
                {sources.map((s) => (
                  <li
                    key={s.name}
                    className="flex items-center gap-4 rounded-xl border border-white/[0.08] bg-ink-900 px-4 py-3.5"
                  >
                    <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-white/[0.06] text-teal-300">
                      <s.icon size={18} aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block font-semibold text-white">{s.name}</span>
                      <span className="block text-sm text-white/50">{s.detail}</span>
                    </span>
                  </li>
                ))}
              </ul>
              <div
                aria-hidden="true"
                className="mx-auto h-10 w-px bg-[linear-gradient(180deg,transparent,#67E8F9,transparent)] sm:h-px sm:w-14 sm:bg-[linear-gradient(90deg,transparent,#67E8F9,transparent)]"
              />
              <div className="flex flex-col items-center rounded-2xl border border-teal-300/35 bg-[linear-gradient(180deg,rgb(8_145_178/0.2),rgb(8_145_178/0.04))] p-6 text-center shadow-[0_0_60px_-20px_rgb(34_211_238/0.6)]">
                <img src="/brand/nodes-mark-white.svg" alt="" width={44} height={44} />
                <span className="mt-3 font-semibold text-white">One reconciliation run</span>
                <span className="mt-1 text-sm text-white/55">Validated, matched by rule, traced to source</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
