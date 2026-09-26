# Nodes landing page: copy and build spec (v3)

**For:** Devin (build) and Fahad (content owner)
**Prepared by:** Bisma
**Method:** Corey Haines marketing skills: copywriting (clarity, benefits, specificity, customer language), copy-editing (Seven Sweeps and an expert-panel review), CRO and marketing psychology
**Status:** Ready to build once the items in section 8 are confirmed

---

## 1. What this page has to do

**Who lands here:** recruiters and hiring managers for finance transformation, FP&A and fintech roles, plus controllers and CFOs Fahad sends the link to. Most arrive from LinkedIn, often on a phone, with 30 to 60 seconds to spare.

**The real conversion** is a conversation with Fahad. The workspace and GitHub are the proof that gets him there.

| Level | Action | Where it appears |
|---|---|---|
| Primary | Open the live workspace | Nav, hero, review case, final CTA |
| Proof | Read the code on GitHub | Proof section, final CTA |
| Outcome | Message Fahad / get the CV | "Who built this", final CTA, footer |

**The 5-second test.** From the hero alone, a finance visitor should know what it is (a reconciliation tool), what changes (rules tie out the volume, you review the leftovers) and whether it's real (a working prototype with scored results).

---

## 2. Brand voice

Nodes sounds like a sharp senior accountant who also builds software. It knows the job from the inside, speaks plainly, and has a dry sense of humour about month-end.

**Voice rules**

1. **Talk like the reader's colleague.** Use the words finance teams use at their desks: tie out, month-end, close, sign-off, working papers, the bank file, XLOOKUP, Ctrl+F. Avoid "solution", "platform", "empower" and "streamline".
2. **Show the scene, then the fix.** Before any claim, show the moment the reader already knows: two bank lines for the same amount, and a controller asking which one.
3. **Be specific or cut it.** "Rows 40 and 42" beats "the relevant records". "AED 24,474.81" beats "a settlement".
4. **Confident, never loud.** No exclamation marks, no superlatives, no "revolutionary". The product's pitch is restraint, so the copy shows restraint.
5. **One dry joke per section, at most.** "XLOOKUP and hope" lands because it's true. Two jokes in a row turns into a bit.
6. **AI is never the hero.** The rules do the work and the reviewer makes the call. AI explains and is always labelled.
7. **First person only in "Who built this".** Everywhere else, speak to "you".

**Machine-sounding habits removed in this version**
- Headlines built as three-part lists ("Rules X. AI Y. Humans Z.") in every section. The page keeps one, in the review case, where it earns its place.
- "Not X, it's Y" reversals, colon reveals, and stacked sentence fragments.
- Abstract nouns ("controlled workflow", "evidence narrowing", "review-ready decisions") replaced with what the reader sees and does.
- Symmetrical headlines on every section ("Proof, not promises"). Real brands vary rhythm.

---

## 3. Page structure

1. Sticky nav
2. Hero with animated product window
3. Proof strip
4. The problem (your close today vs with Nodes)
5. How it works (5 steps)
6. The review case: SET-202608-033
7. Pick any match and check it
8. Proof and known limits
9. Who built this
10. FAQ
11. Final CTA and footer

---

## 4. Section-by-section copy

Quoted blocks are final copy. Italic notes are for Devin.

### 4.1 Nav

- **Left:** `brand/nodes-wordmark.svg`, 28px high
- **Links:** How it works · Case 033 · Proof · About
- **Button:** Open workspace →

*Sticky. White background and 1px bottom border after 8px of scroll. On mobile, links go into a menu but the button stays visible.*

### 4.2 Hero

> **Eyebrow:** Reconciliation for teams who sign off on it
>
> **H1:** Reconcile the volume. Review the exceptions.
>
> **Subhead:** Nodes ties out your ERP, payment-provider and bank records automatically, with rules you can read line by line. Whatever it can't prove lands on your desk with the exact rows attached. You make the call. Nodes keeps the receipts.
>
> **Primary CTA:** Open the live workspace →
> **Secondary CTA:** See how it works
>
> **Under the buttons:** No sign-up, no demo call. A real run on synthetic data.

**Right side:** `animation/nodes-hero-animation.html`

*Copy notes:* the H1 stays because it passes every sweep. It's clear, it names the change in the reader's working day, and it doesn't mention AI. "Keeps the receipts" is the audit trail in plain words and gives the subhead a human ending. "No demo call" answers the objection every B2B visitor has: "is this going to turn into a sales call?"

*Devin notes:* hero height fits its content (no `100vh`). Under 768px, put the animation below the buttons, start it on scene 3 and turn autoplay off.

### 4.3 Proof strip

> **1,000** transactions in
> **950** tied out by rules
> **50** flagged, evidence attached
> **0** wrong answers from the rules
>
> *Small label:* August 2026 test run on synthetic data, scored against answers known in advance.

### 4.4 The problem

> **H2:** Matching is the easy part. The leftovers eat the close.
>
> **Body:** You know the routine. Export from the ERP. Pull the settlement file from the payment provider. Download the bank statement. Build the XLOOKUPs. Most lines tie out before lunch.
>
> Then come the leftovers. A payout that doesn't match any settlement. Two bank lines for exactly the same amount. A fee that's a few fils out. Each one means another trip through the bank file, another email to the payments team, and another note in the working papers so the auditors can follow your logic at year-end.

| Your close today | Your close with Nodes |
|---|---|
| Export three files | Load one run |
| Clean columns until they line up | Validation runs before anything else |
| XLOOKUP and hope | Rules tie out what they can prove |
| Ctrl+F through the bank file | The two rows that matter, already pulled |
| Email the payments team | A short summary of what's known and what isn't |
| Write it all up for audit | Every step logged as it happens |

> **Under the table:** Nodes does the tying out. You get the leftovers, with everything you need already on screen.

*Copy notes:* this is the "heightened emotion" sweep. The reader should recognise their own week before they see a single feature. "XLOOKUP and hope" is the one joke in the section.

*Devin notes:* left column neutral grey, right column with a teal-700 left border. No green (green means "resolved" in the product). Stack on mobile.

### 4.5 How it works

> **H2:** What happens between upload and sign-off
>
> **1. Drop in the files.** ERP orders, payment-provider transactions, the bank statement. Every row keeps its file name and row number, so nothing loses its paper trail.
>
> **2. Catch bad data first.** Duplicates and missing fields get flagged before matching starts, so a broken row can't slip through looking like a clean match.
>
> **3. Tie out by rule.** Exact reference matches first, then a tightly controlled fallback. Fees, VAT and expected payouts are calculated line by line. Run it twice and you get the same answer twice.
>
> **4. Flag what doesn't tie.** Every exception opens as a case with the candidate rows, file names and row numbers attached. No Ctrl+F required.
>
> **5. You sign off.** AI writes a short, labelled summary of what's known, what isn't and what to check next. You pick the outcome. Nodes logs who did what, and when.

*Devin notes:* on desktop, a sticky product panel on the right changes as each step scrolls into view. On mobile, a plain list.

### 4.6 The review case (signature section)

> **Eyebrow:** Case SET-202608-033
>
> **H2:** Two bank lines. Same amount. Nodes won't guess.
>
> **Intro:** Settlement 033 should reach the bank as one payout of AED 24,474.81. The bank file has two lines for exactly that amount, a day apart.

**Step 1: the settlement**

| | |
|---|---:|
| PSP transactions | 24 |
| Gross | AED 24,999.81 |
| Fees | -AED 499.98 |
| VAT on fees | -AED 25.02 |
| **Expected payout** | **AED 24,474.81** |

**Step 2: the bank file**
- `BANK-202608-0039` · row 40 · 31 Aug 2026 · AED 24,474.81
- `BANK-202608-0041` · row 42 · 1 Sep 2026 · AED 24,474.81

**Step 3: what Nodes says** (verbatim from the product)
> Two bank records satisfy the available matching evidence. The supplied evidence is insufficient to determine which record belongs to this settlement. Human review required.

**Step 4: who decides what** (click a column to dim the other two)

| The rules | AI | You |
|---|---|---|
| Match records, calculate amounts, classify exceptions, trace every row to its source | Summarise the evidence, list what's still unknown, suggest what to check | Choose the outcome, escalate, resolve, own the accounting |

> **Closing copy:** A tool built to look clever would pick the earlier date and move on. If it picked wrong, the cash is booked to the wrong settlement, and you might not find out until next month's close. Or the audit. Nodes stops, pulls rows 40 and 42, and waits for you.
>
> **CTA:** Open case 033 in the workspace →

*Copy notes:* this is the section people will remember. The visitor expects the AI to pick one, and it doesn't. "Or the audit." is a two-word sentence on purpose. Every finance reader feels it.

*Devin notes:* deep link straight to the case. Rules column: neutral with `#174B5D` top border. AI column: violet `#F7F5FF` with `#DED8FF` border and an "AI explanation · Advisory" label. You column: teal-700 border. Never style either bank line as the preferred one.

### 4.7 Pick any match and check it

> **H2:** Pick any of the 950. Make it prove itself.
>
> **Body:** Click a reconciled transaction and Nodes shows you the ERP row, the payment-provider row, the rule that matched them and the source file each one came from. It's what your auditor will ask for, already done.

**Proof card footer** (verbatim from the product):
> *Established by the deterministic reconciliation engine. No AI judgment used.*

*Devin notes:* 3 to 5 real sample transactions from the workspace data. No invented IDs. IDs and rule names in IBM Plex Mono.

### 4.8 Proof and known limits

> **H2:** Every claim on this page links to the evidence
>
> **The live workspace.** The full August 2026 run: the review queue, every case, every match.
> **The code.** The reconciliation engine and the test suite, on GitHub.
> **The test results.** 993 automated tests, 235 of them scored against known answers. Zero wrong answers from the rules.
> **The architecture.** How data moves through validation, matching, explanation and review.

> **H3:** What it doesn't do (yet)
> - It runs on synthetic data built to look like an e-commerce business. No client data has touched it.
> - It works from file uploads. There are no live ERP, payment-provider or bank connections.
> - It handles one currency, AED.
> - It hasn't been timed against a manual close. That test comes before any time-saving claim does.

*Copy notes:* the "prove it" and "zero risk" sweeps. Listing the limits makes every other number on the page easier to believe.

### 4.9 Who built this

> **Eyebrow:** Who built this
>
> **H2:** Built by someone who's sat through month-end
>
> **Body:** I'm Fahad. I've spent about ten years in finance and commercial roles, five of them at Canon in financial analysis, reporting and an ERP migration. I've passed 9 of 13 ACCA papers.
>
> [**Fahad's real moment goes here.** One or two sentences about a specific reconciliation that went wrong or took days. Example shape only: "At [company], I once spent [time] tracing a single payout across three files. Nodes is the tool I wanted that week."]
>
> I built Nodes around one rule: automate what can be proven, explain what can't, and leave the judgment with finance.
>
> **Primary CTA:** Let's talk on LinkedIn →
> **Secondary CTA:** Get my CV
> **Email, shown as text:** [email]

*Copy notes:* the real story is the most important line on the page, and only Fahad can write it. A true two-sentence anecdote does more than every other section combined to make this sound human. Don't ship the example sentence.

### 4.10 FAQ

> **Wait, is AI doing the accounting?**
> No. Every match, amount and exception type comes from rules. AI only summarises what the rules already found, and it's labelled "advisory" everywhere it appears.
>
> **Is this real company data?**
> No. It's a synthetic August 2026 dataset built to look like an e-commerce business. Every correct answer was known in advance, which is how the results are scored.
>
> **Can I plug it into our ERP?**
> Not yet. This version works from file uploads. Live connections are a production job.
>
> **What if two records both look right?**
> Nodes stops and opens a case with both records attached. It never picks between two plausible matches. Case 033 above is a live example.
>
> **What's under the hood?**
> [Confirm with Fahad, for example: Python and FastAPI for the engine, React and TypeScript for the workspace, Supabase for storage, an OpenAI model for the summaries.]

### 4.11 Final CTA

> **H2:** Open the workspace and try to catch it guessing
>
> **Body:** Start with the review queue. Then open case 033.
>
> **Buttons:** Open the live workspace → · Read the code on GitHub
>
> **Under the buttons:** Hiring for finance transformation? Let's talk on LinkedIn.

*Copy notes:* the close is a challenge instead of a request. It invites the sceptical finance reader to test the product's main promise.

### 4.12 Footer

> Nodes · Controlled Reconciliation Workspace
> A finance transformation prototype by Fahad [surname]. Synthetic data, real logic. Limits documented in the repo.
> Workspace · GitHub · LinkedIn

---

## 5. Expert panel review (copy-editing skill)

Four reviewer personas scored v3 from 1 to 10. The skill's bar is an average of 8 or above.

| Reviewer | Score | What they'd push on |
|---|---:|---|
| CFO / controller | 8 | Likes "Nodes won't guess" and the limits list. Will check the AED 25.02 VAT line (section 8). |
| Finance recruiter | 8 | Gets the point from the hero. Needs the real anecdote and a headshot to remember Fahad. |
| Reconciliation analyst | 9 | "XLOOKUP and hope" and "Ctrl+F through the bank file" feel like their job. |
| Conversion copywriter | 8 | Clear hierarchy and strong CTAs. Missing real social proof, which only real quotes can fix. |
| **Average** | **8.25** | Passes. The two gaps left (anecdote, quotes) need Fahad, not more rewriting. |

---

## 6. Microcopy, meta and tracking

**Meta**
- `<title>`: Nodes · Reconcile the volume. Review the exceptions.
- Description (≤155 characters): Nodes ties out ERP, payment and bank records with rules you can read, and flags only what it can't prove, with the exact rows attached.
- OG image 1200×630: lockup on the left, scene 3 of the hero animation on the right. This is what recruiters see inside LinkedIn.
- Favicon: `brand/favicon.svg`

**Buttons:** always "Open the live workspace" (never "Get started" or "Sign up", since there's no sign-up). Arrows only on links that leave the page.

**Events to track**
| Event | Fires when |
|---|---|
| `cta_workspace_click` | Any "Open workspace" button, with `location` (nav, hero, case, final) |
| `cta_case_deeplink` | "Open case 033 in the workspace" |
| `cta_github_click` | Any GitHub link |
| `cta_linkedin_click` | Any LinkedIn CTA |
| `cv_download` | CV link |
| `scroll_case_section` | Case section 50% visible |

Tag every shared link with UTMs, for example `utm_source=linkedin&utm_medium=dm&utm_campaign=nodes`.

---

## 7. Claims register (do not change without Fahad's sign-off)

| Claim | Value | Required context |
|---|---|---|
| Transactions in | 1,000 | ERP↔payment-provider outcomes, synthetic August 2026 run |
| Tied out by rules | 950 (95%) | 880 exact reference, 70 controlled fallback |
| Flagged | 50 | ERP↔payment-provider exceptions only |
| Wrong answers from the rules | 0 | Known-answer evaluation, frozen deterministic V1 |
| Automated tests | 993, of which 235 evaluation | Gate 9H |
| Settlements | 40, expected net AED 917,286.03 | August 2026 run |
| Case 033 | 24 txns, AED 24,999.81 gross, -AED 499.98 fees, -AED 25.02 VAT, AED 24,474.81 payout | Exact engine values |
| Bank lines | BANK-202608-0039 row 40, BANK-202608-0041 row 42 | `bank_aug_sep_2026.csv` |

**Never on this page:** time-saving percentages, "hours saved", customer logos, made-up testimonials, or anything that says AI made a match.

---

## 8. Confirm with Fahad before launch

1. **His real month-end story** for section 4.9. This matters most.
2. **VAT on fees.** 5% of AED 499.98 is AED 25.00, but the case shows AED 25.02. If fees and VAT are rounded per transaction, add a note under the table: "Fees and VAT calculated and rounded per transaction."
3. **Total review cases.** Case 033 is a settlement-to-bank exception, so it isn't one of the 50 ERP↔payment-provider exceptions.
4. **Test counts** (993 / 235) are still current.
5. **Surname, LinkedIn URL, email, CV and headshot.**
6. **Tech stack** for the FAQ.
7. **Deep link** that opens case 033 directly.
8. **Real quotes.** Ask two or three controllers from his network to try the workspace. One attributed line from a real finance manager, placed above the final CTA, would be the strongest proof on the page. Only add quotes that are real and approved.

---

## 9. How to validate the page

A portfolio page gets tens of visits, not thousands, so an A/B test won't tell you anything. Do this instead:

1. **5-second test.** Show the hero to five finance contacts for five seconds. Ask what it does and who it's for. If three can't answer, fix the subhead.
2. **Watch two people.** One recruiter and one controller go through it on a phone, thinking out loud. Note where they stop reading.
3. **Monthly funnel check.** If fewer than 20% of visitors open the workspace, the hero or the line under the buttons isn't working.

---

## 10. Alternatives worth trying

**Hero headline**
| Option | Copy | Best for |
|---|---|---|
| A (current) | Reconcile the volume. Review the exceptions. | Default |
| B | Stop Ctrl+F-ing the bank file. | Posts aimed at analysts and finance managers |
| C | 950 tied out. 50 flagged. Zero guesses. | Numbers-first audiences |
| D | Reconciliation your auditor will actually like. | CFO and audit-minded posts |

**Primary CTA**
| Option | Copy |
|---|---|
| A (current) | Open the live workspace → |
| B | See the August run → |
| C | Try to catch it guessing → |

**Review case headline**
| Option | Copy |
|---|---|
| A (current) | Two bank lines. Same amount. Nodes won't guess. |
| B | When the evidence runs out, Nodes stops. |
| C | Most tools would pick one. Nodes asks you. |
