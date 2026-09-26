import { Badge, H2, Mono, Section } from "../components/ui";
import { links, track } from "../lib/site";

// Real matched transactions from the August 2026 reference run
// (GET /runs/{run_id}/reconciled-transactions). Do not invent IDs.
const samples = [
  {
    traceId: "TXN|MATCHED|ERP-202608-0001|PSP-202608-0001",
    orderId: "ORD-202608-0003",
    amount: "AED 1,874.73",
    erp: { id: "ERP-202608-0001", file: "erp_aug_2026.csv", row: 2 },
    psp: { id: "PSP-202608-0001", file: "psp_aug_2026.csv", row: 2 },
    rule: "ERP_PSP_REF_EXACT_V1",
    settlement: "SET-202608-003",
  },
  {
    traceId: "TXN|MATCHED|ERP-202608-0530|PSP-202608-0531",
    orderId: "ORD-202608-0001",
    amount: "AED 58.88",
    erp: { id: "ERP-202608-0530", file: "erp_aug_2026.csv", row: 532 },
    psp: { id: "PSP-202608-0531", file: "psp_aug_2026.csv", row: 535 },
    rule: "ERP_PSP_REF_EXACT_V1",
    settlement: "SET-202608-023",
  },
  {
    traceId: "TXN|MATCHED|ERP-202608-0785|PSP-202608-0782",
    orderId: "ORD-202608-0002",
    amount: "AED 138.63",
    erp: { id: "ERP-202608-0785", file: "erp_aug_2026.csv", row: 791 },
    psp: { id: "PSP-202608-0782", file: "psp_aug_2026.csv", row: 786 },
    rule: "ERP_PSP_REF_EXACT_V1",
    settlement: "SET-202608-032",
  },
  {
    traceId: "TXN|MATCHED|ERP-202608-0825|PSP-202608-0822",
    orderId: "ORD-202608-0006",
    amount: "AED 1,376.62",
    erp: { id: "ERP-202608-0825", file: "erp_aug_2026.csv", row: 831 },
    psp: { id: "PSP-202608-0822", file: "psp_aug_2026.csv", row: 826 },
    rule: "ERP_PSP_ORDER_FALLBACK_V1",
    settlement: "SET-202608-034",
  },
];

function Lineage({ label, rec }: { label: string; rec: { id: string; file: string; row: number } }) {
  return (
    <div>
      <p className="text-[11px] font-bold uppercase tracking-[0.08em] text-neutral-500">{label}</p>
      <Mono className="mt-1 block text-sm text-neutral-900">{rec.id}</Mono>
      <Mono className="block text-xs text-neutral-500">
        {rec.file} · row {rec.row}
      </Mono>
    </div>
  );
}

export function MatchProof() {
  return (
    <Section id="match-proof" tone="muted">
      <div className="max-w-3xl">
        <H2>Pick any of the 950. Make it prove itself.</H2>
        <p className="mt-5 text-lg leading-8 text-neutral-600">
          Click a reconciled transaction and Nodes shows you the ERP row, the payment-provider row, the rule that
          matched them and the source file each one came from. It's what your auditor will ask for, already done.
        </p>
      </div>

      <ul className="mt-12 grid gap-4 md:grid-cols-2">
        {samples.map((s) => (
          <li key={s.traceId}>
            <a
              href={links.matchProof(s.traceId)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => track("cta_workspace_click", { location: "proof" })}
              className="block h-full rounded-lg border border-neutral-200 bg-neutral-0 p-6 transition-colors duration-(--duration-standard) hover:border-teal-700"
            >
              <div className="flex flex-wrap items-center justify-between gap-3">
                <Mono className="text-sm font-semibold text-neutral-900">{s.orderId}</Mono>
                <div className="flex items-center gap-3">
                  <Mono className="text-sm text-neutral-900">{s.amount}</Mono>
                  <Badge tone="ok">Reconciled</Badge>
                </div>
              </div>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <Lineage label="ERP" rec={s.erp} />
                <Lineage label="Payment provider" rec={s.psp} />
              </div>
              <dl className="mt-5 grid gap-1 border-t border-neutral-200 pt-4 text-xs">
                <div className="flex justify-between gap-4">
                  <dt className="text-neutral-500">Rule</dt>
                  <dd><Mono className="text-neutral-800">{s.rule}</Mono></dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-neutral-500">Settlement</dt>
                  <dd><Mono className="text-neutral-800">{s.settlement}</Mono></dd>
                </div>
              </dl>
              <p className="mt-4 text-xs italic text-neutral-500">
                Established by the deterministic reconciliation engine. No AI judgment used.
              </p>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}
