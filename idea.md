# PlansHero copy rewrite — decisions & rationale

Grilling + stop-slop pass on `src/components/PlansHero.astro`.

## Context

The **plans page** sells a different product than the homepage:

- **Homepage (`Hero.astro`)** — a two-sister dev studio (Vivian & Daniela Guillen, 12+ years) selling retainer dev work to startups & agencies. Warm, first-person "we" voice.
- **Plans page (`PlansHero.astro`)** — fully-managed websites for **non-technical small-business owners** at a flat monthly price.
- Price anchor lives in `MonthlyBill.astro`: **From $99/mo, $0 setup, cancel anytime.** It's a fully-managed service — if you cancel, the managed site + domain don't continue with you.

## Decisions locked

| Decision | Choice | Why |
|---|---|---|
| Core promise of H1 | **Zero hassle / done-for-you relief** | Emotional relief is the strongest hook for a nervous non-technical owner |
| Pain framing | **Name specific dreaded tasks** (hosting, domains, plugin updates) | Concrete beats abstract; more believable than "headache" |
| Price visibility | **Surface $99/mo in the hero** | A concrete low number kills the "this'll be expensive" fear above the fold |
| Voice / POV | **First-person "we"** | Matches the sisters' homepage; "we handle it" reads like a person taking responsibility |
| Eyebrow badge | **"Websites, done for you"** | Lead with the outcome, not the service category |
| Primary CTA | **"Get my website"** | Outcome-specific beats generic "Get started" |

## Before → After

**Eyebrow:** `Fully-managed websites` → `Websites, done for you`

**H1:** `A professional website for your business — without the headache.`
→ `You run your business. We run your website.`

**Subhead:** `You don't need to know a thing about websites, hosting, or domains. Red Pixel designs, builds, hosts, and manages everything — for one simple monthly price.`
→ `No hosting to set up, no domains to renew, no plugins to update. We design, build, and run the whole website for you, from $99 a month. No setup fee, cancel anytime.`

**Primary CTA:** `Get started` → `Get my website`

## Stop-slop notes

- Removed both **em dashes** (rule 6).
- Cut the **"headache"** cliché and the **"simple"** filler.
- Replaced vague "you don't need to know a thing" with three concrete dread-tasks.
- H1 uses deliberate **you/we anaphora** — parallel structure, not metronomic.
- **41/50** scorecard (Directness 9, Rhythm 8, Trust 9, Authenticity 8, Density 9).

### Known tension

The negative triple ("no hosting… no domains… no plugins") is a negative listing, which stop-slop flags. Kept on purpose for believable specificity. If it ever reads too listy, drop to two items.

---

# MonthlyBill copy rewrite — decisions & rationale

Grilling + stop-slop pass on `src/components/MonthlyBill.astro` (section 2 on the plans page, right after the hero).

## Key context

- The FAQ (`FAQ.astro`) already answers **"What happens if I cancel?"** in full. So MonthlyBill doesn't need to carry the whole cancellation explanation.
- "Cancel anytime / no contract / no lock-in" was stated **4×** on one screen (chips, body, footer micro-row, and two of the four cards) — anxious over-reassurance.

## Decisions locked

| Decision | Choice | Why |
|---|---|---|
| Cancellation clause | **Soften here, full detail in FAQ** | Keep momentum positive in section 2; one calm line, FAQ does the heavy lifting |
| Trust cards | **Four DISTINCT promises** — Value / Price / Freedom / Honesty | Two cards were just "cancel anytime" restated |
| Headline | **Keep meaning, kill em dash** | Line already works; just needed the em dash gone |
| Footer micro-row | **Cut entirely** | Chips + cards already cover all three claims |

## Before → After

**H2:** `One monthly bill — and we handle the rest, for as long as you want it.`
→ `One monthly bill. We handle the rest, for as long as you want it.`

**Body:** `…a one-time setup fee on larger, more complex sites — and it's scoped clearly before anything starts, so there are no surprises.`
→ `Bigger, more complex sites may carry a one-time setup fee. We scope it before anything starts, so nothing surprises you.`

**Trust cards:**
1. `While you're subscribed, we keep your website and domain hosted, secure, and up to date.` (Value)
2. `No big upfront cost. One flat monthly price, the same rate every month.` (Price)
3. `No contract, no lock-in. Cancel anytime, with no penalties.` (Freedom)
4. `You're paying for an all-in, done-for-you website, not a one-time build.` (Honesty)

**Micro-row:** removed.

## Stop-slop notes

- Removed **4 em dashes**, the adverb **"clearly,"** and the self-praising closer **"Simple and honest, start to finish"** (you don't get to call your own copy honest).
- "Cancel anytime" went from 4× on screen to 2× (chips + Freedom card).
- **44/50** scorecard.

---

---

# Included copy rewrite — decisions & rationale

Grilling + stop-slop pass on `src/components/Included.astro` (the 9-card features grid, section 3 on the plans page).

## Decisions locked

| Decision | Choice | Why |
|---|---|---|
| Card titles | **Hybrid: de-jargon the three** | Audience is a non-technical owner; "SEO/Accessibility/Professionally coded" made them guess |
| Card bodies | **Tighten, keep natural variety** | Forcing all 9 into "we…" voice reads robotic and flattens rhythm |

## Title changes

- `Professionally coded` → **`Built to last`**
- `SEO optimization` → **`Found on Google`**
- `Accessibility compliance` → **`Works for everyone`**
- (Custom design, Hosting included, Domain & SSL, Fully responsive, Security & backups, Fast customer support — kept)

## Body changes

- Custom design: em dash → comma
- Found on Google: dropped adverb "properly"
- Works for everyone: `Anyone can use it, however they browse.` (was passive "Built to accessibility standards…")
- Security & backups: `Backed up daily and monitored around the clock.` (killed the backups/security echo + "always running")
- Fast customer support: `Message us and get a real reply, no ticket queues.` (em dash gone, second "fast" gone)

## Stop-slop notes

- Removed 2 em dashes, 1 adverb ("properly"), 3 title/body word echoes.
- H2 "Everything. One monthly price." and the intro line were already clean — left untouched.
- **45/50** scorecard (highest of the three; copy started close).

---

# Process copy rewrite — decisions & rationale

Grilling + stop-slop pass on `src/components/Process.astro` and the `planSteps` array in `src/pages/plans.astro`.

## Key structural note

`Process.astro` is shared by the homepage and the plans page. The section **header** (eyebrow, H2, intro) is hardcoded and shows on BOTH. The **steps** come from a prop: homepage uses `defaultSteps` (in Process.astro), plans uses `planSteps` (in plans.astro). The plans Build step was copied from the homepage's dev-studio voice — an audience mismatch.

## Decisions locked

| Decision | Choice | Why |
|---|---|---|
| Shared H2 'A simple, honest process' | **Replace with concrete line** | Same self-praise tic as MonthlyBill's "Simple and honest"; you can't claim your own honesty |
| Plans 'Build' step | **Reframe for the owner** | "Two senior devs heads-down, shipping increments" is dev-speak on a non-technical-owner page |
| Other plans steps (Define/Design) | **Reframe for the owner too** | Consistency with the new Build voice |

## Changes

**Process.astro (shared header + homepage steps):**
- H2: `A simple, honest process` → `From first hello to launch, in four steps.`
- Intro: `…Four clear steps from first hello to shipped.` → `…You always know what's happening and what comes next.` (avoids echoing the new H2)
- `defaultSteps` (homepage): removed 2 em dashes (Design, Ship), wording untouched.

**plans.astro (planSteps):**
- Define → `We learn how your business works and agree on what success looks like.`
- Design → `We map out every page before we start building.`
- Build → `We build your site in clear stages, so you can watch it come together.`
- Maintenance → `…we keep it running with updates, fixes, and changes whenever you need them.` (em dash gone)

## Stop-slop notes

- Removed self-praising "honest," 4 em dashes total, and the audience-mismatched dev jargon.
- **44/50** scorecard. Biggest win was the audience fix, not the slop.

---

# FAQ copy rewrite — decisions & rationale

Grilling + stop-slop pass on `src/components/FAQ.astro` (now the single place the cancellation truth is fully explained, after we softened it in MonthlyBill).

## Decisions locked

| Decision | Choice | Why |
|---|---|---|
| Cancellation answer closer | **Cut 'We'll always be upfront about this'** | Tells the reader you're honest instead of showing it; the clear explanation already does the showing |
| Phantom term '"monthly help"' | **Rename to a plain question** | The term appears nowhere else on the site — quotes implied a feature the visitor had never seen |

## Changes

- Q1: em dash → colon before the service list.
- Q2: `Correct, $0 down. You start on the monthly price with nothing upfront.` (em dash gone).
- Q3: `What does "monthly help" include?` → `What can I ask you to change after launch?`; answer ends `…send it over and we take care of it` (de-dupes the "message us" echo with Q7).
- Q5 (cancel): dropped self-telling closer; em dash → comma. This answer now carries the full cancellation explanation for the page.
- Q6: `We do, completely.` (em dash gone).
- Q7: removed adverb "quickly" → concrete `you'll hear back the same day`.

## Stop-slop notes

- Removed **6 em dashes**, 1 adverb, the self-telling "upfront" closer, and a phantom glossary term.
- **44/50** scorecard.

---

# ReadyCTA copy rewrite — decisions & rationale

Grilling + stop-slop pass on `src/components/ReadyCTA.astro` (closing contact/CTA section with the enquiry form).

## Decisions locked

| Decision | Choice | Why |
|---|---|---|
| H2 'Ready for a website without the headache?' | **Bookend the hero promise** | Reintroduced the 'headache' cliché we cut from PlansHero; now closes the loop on the opening line |
| Subhead ending | **Swap 'the website' → 'the rest'** | Keeps the you/we mirror but avoids echoing the new H2's 'run your website' |
| Submit button 'Get started' | **Match hero: 'Get my website'** | Same action verb across the page; consistent momentum |

## Changes

- H2: `Ready for a website without the headache?` → `Ready to let us run your website?`
- Subhead: `…You run the shop — we'll handle the website.` → `…You run the shop, we handle the rest.`
- Button: `Get started` → `Get my website`

## Stop-slop notes

- Removed the resurrected 'headache' cliché and 1 em dash.
- Page now reads as a composed unit: opening hero promise, repeated action verb, shared price chip line, closing bookend.
- **44/50** scorecard.

---

## Open / parked ideas

- Consider whether `$99 a month` belongs inline in the PlansHero subhead vs. its own visual chip (like `MonthlyBill`'s `From $99/mo` chips).
- Same grilling pass could be applied to the homepage `Hero.astro`, plus the plans-page `Work`, `Testimonials`, and `ReadyCTA` sections.
- Optional structural change: give `Process.astro` a `title`/`intro` prop so the homepage and plans page can have different headers (currently shared).

## Plans page — completed passes

PlansHero, MonthlyBill, Included, Process (+ planSteps), FAQ, ReadyCTA — all done. Plans page copy pass complete.

---

# HOMEPAGE PASS

The homepage sells to a different buyer than the plans page: **agencies, startups, and technical founders** evaluating whether Red Pixel is *competent and reliable*, not whether websites are scary. Voice stays warm first-person "we," but the proof points get sharper and more technical. Slop dies faster here because the audience can smell it.

## Hero copy rewrite — decisions & rationale

Grilling + stop-slop pass on `src/components/Hero.astro` (homepage opener: two-sister senior dev studio on retainer).

### Decisions locked

| Decision | Choice | Why |
|---|---|---|
| H1 angle | **Lead with the retainer relationship** | "We solve business problems with tech solutions" was abstract-on-abstract; says nothing a competitor couldn't. The retainer relationship is what they actually buy. |
| Subhead | **Rewrite to add new info** | New H1 owns "reliable/retainer"; subhead must not echo. Use the space for names + senior/no-juniors proof instead. Also avoids echoing the eyebrow's "12+ years". |
| Primary CTA | **"Book a call"** | Lower commitment than "Start a project" — suits a buyer still evaluating fit. Kept the mailto (subject → "Book a call") until a real scheduling link exists. |
| Mockup year | **10 → 12** | Eyebrow says "12+ years"; mockup hardcoded `years: 10` two inches away. Technical buyers read mockup values. |

### Before → After

**H1:** `We solve business problems with tech solutions`
→ `The reliable dev team your team keeps on retainer.` (`reliable` in brand color, `on retainer` keeps the orange underline)

**Subhead:** `A two-person studio run by sisters Vivian & Daniela Guillen. We plug into your team, ship to your timeline, and become the reliable dev partner startups and agencies keep on retainer.`
→ `Run by sisters Vivian & Daniela Guillen. Two senior devs who plug into your roadmap, ship on your timeline, and don't need hand-holding.`

**Primary CTA:** `Start a project` → `Book a call` (href subject updated to match)

**Mockup:** `years: 10` → `years: 12`

### Stop-slop notes

- Killed the abstract "business problems / tech solutions" placeholder H1.
- De-duped: "reliable/retainer" now fire once (H1), not twice (was H1 idea + subhead tail).
- Cut "two-person studio" from subhead (eyebrow + mockup already establish team size).
- Removed the only em dash; ended subhead on the differentiator "don't need hand-holding."
- New cohesion: H1 says `reliable` → mockup renders `reliable: true` + `ship(studio).onTime()` → subhead says `ship on your timeline`. The decorative code block became a third proof point.
- **43/50** scorecard.

### Known follow-up

- "Book a call" CTA opens an email, not a scheduler. Swap the `href` to a Calendly/Cal.com link when available — the label is already right.

## About copy rewrite — decisions & rationale

Grilling + stop-slop pass on `src/components/About.astro` (homepage section 2: the two-sister story + stat cards).

### Decisions locked

| Decision | Choice | Why |
|---|---|---|
| Para 1 closer ('communicate like our lives depend on it. Because reliable beats flashy every single time.') | **Replace with concrete proof** | Slogan-shaped pull-quote + lazy extreme ('every single time') + claims reliability instead of showing it. This audience distrusts slogans most. |
| Stat-card vs prose overlap (12+ years, no handoffs) | **De-dupe: cards own the numbers** | Repeating a stat card's fact in prose two inches away wastes the prose. Cards carry 12+/90+/2; prose adds how you work + what it feels like. |

### Before → After

**Para 1:** `Two sisters, both professional full-stack developers with a dozen-plus years of full-time freelance work behind us. We understand your needs, define a clear scope, deliver to your timeline, and communicate like our lives depend on it. Because reliable beats flashy every single time.`
→ `Two sisters, both full-stack developers. We learn how your business works, agree on the scope up front, and ship to your timeline. You hear from us before you have to ask, and the work lands when we said it would.`

**Para 2:** `…we move fast without losing focus. You get a senior pair, not a handoff chain.`
→ `…we move fast and stay focused. One senior pair, start to finish.`

### Stop-slop notes

- Cut the 'reliable beats flashy every single time' slogan and the 'communicate like our lives depend on it' hyperbole — replaced with a checkable behavior (proactive comms + on-time delivery).
- Cut 'professional' (empty filler) and the 'dozen-plus years' echo of the stat card.
- Killed a 'not X' contrast ('a senior pair, not a handoff chain') AND its same-screen echo of the 'no handoffs' stat → positive 'One senior pair, start to finish.'
- Removed the adverb 'clearly' (→ 'agree on the scope up front').
- Reinforces (not repeats) the Hero: both now say 'on retainer.'
- **45/50** scorecard.

## Services copy rewrite — decisions & rationale

Grilling + stop-slop pass on `src/components/Services.astro` (homepage section: 4 service rows + intro). Already strong; surgical pass.

### Decisions locked

| Decision | Choice | Why |
|---|---|---|
| Intro 'Four ways we can help…' | **Sharpen to the range** | 'ways we can help' is generic; lead with the span (Shopify storefront → Laravel app), which is the real sell to an agency sizing capability. Previews the list in the buyer's stack vocabulary. |
| 'Robust' (Service 02) | **Cut (banned word)** | On the global banned list — everyone claims it, no one can verify it. → 'Maintainable, well-tested' (checkable). |
| 'pixel-perfect' (Service 03) | **Keep (brand pun)** | Deliberate wink for a company named Red Pixel, not lazy filler. |
| Service 04 tail 'showing real, measurable performance' | **Cut filler, fix grammar** | 'Core Web Vitals tuned to green' is the concrete proof; the tail was filler with limping grammar. |

### Before → After

**Intro:** `Four ways we can help, from storefront to full app, plus the speed to back it up.`
→ `From a Shopify storefront to a full Laravel app, with the speed to back it up.`

**02:** `Robust, maintainable apps built with Vue/React, Inertia, and Laravel.`
→ `Maintainable, well-tested apps built with Vue/React, Inertia, and Laravel.`

**04:** `Core Web Vitals tuned to green showing real, measurable performance.`
→ `Core Web Vitals tuned to green, with the numbers to prove it.`

### Stop-slop notes

- Removed banned word 'Robust', filler tail 'real, measurable performance', generic 'ways we can help'.
- Kept the technical register (real stack names) — correct for this buyer.
- Kept 'pixel-perfect' as intentional brand voice.
- **44/50** scorecard.

## TechStack — reviewed, no change (intentional)

`src/components/TechStack.astro` is a logo strip; the only prose is the label 'Our stack'. Decided to **leave it bare** — a clean logo wall is the strongest format for a technical buyer scanning for their stack. Adding a framing sentence would introduce slop into a section that currently has none. The logos are the message.

## Process homepage steps — decisions & rationale

Grilling + stop-slop pass on `defaultSteps` in `src/components/Process.astro` (the homepage step descriptions). Shared header (eyebrow/H2/intro) was already rewritten in the plans pass. The plans page injects its own `planSteps`, so this change is homepage-only.

### Decisions locked

| Decision | Choice | Why |
|---|---|---|
| Step 01 'Define' | **Tighten, keep substance** | Wordiest, most corporate of the four (3 stacked clauses + 'what success looks like' biz-speak). |
| Steps 02–04 incl. 'Two senior devs heads-down' | **Keep the dev-voice** | Right for agencies/founders. The line was only wrong on the *plans* page (non-technical owners); here it's an asset that differentiates from junior-staffed shops. |

### Before → After (homepage Define only)

`We sit down with you to understand the problem, define the scope, and agree on what success looks like.`
→ `We dig into the problem with you and agree on what a win looks like before we scope it.`

### Stop-slop notes

- Cut the three-clause stack; 'a win' > 'what success looks like' (the word the buyer uses in standups, not the word a proposal template uses).
- Steps 02 (Design), 03 (Build), 04 (Ship) untouched — already concrete and audience-right.
- Same shared component, two audience-tuned copies: this edit doesn't touch the plans page's owner-voice Define.
- **44/50** scorecard.

## Products copy rewrite — decisions & rationale

Grilling + stop-slop pass on `src/components/Products.astro` (homepage section: 5 self-built product cards + 'More in the works' tile).

### Decisions locked

| Decision | Choice | Why |
|---|---|---|
| Intro 'We don't just build for clients — we ship our own ideas, too.' | **State it positively** | Trips TWO hard rules: the banned 'not just X' construction + an em dash. The 5 product cards below already prove the point, so the line should label evidence, not argue. |
| Product descriptions | **Keep** | Concrete and clean already ('Calendly for newsletter sponsorships' is an excellent X-for-Y analogy). |

### Before → After

`We don't just build for clients — we ship our own ideas, too.`
→ `Between client work, we build and ship our own products.`

### Stop-slop notes

- Killed the banned 'not just X' pattern and an em dash in one line.
- 'Between client work' signals these shipped around a full client load = capacity/energy to a buyer.
- Product cards + 'More in the works' tile untouched.
- **45/50** scorecard.

## CTA copy rewrite — decisions & rationale

Grilling + stop-slop pass on `src/components/CTA.astro` (homepage closing call-to-action; separate from the plans page's ReadyCTA).

### Decisions locked

| Decision | Choice | Why |
|---|---|---|
| Subhead 'a clear, honest plan' + 'reply fast' | **Show honesty via specifics** | 'honest' is the site-wide self-praise tic (4th appearance). Replace with the concrete thing it means: real numbers on cost + timeline. Kills vague 'fast' too. |
| Email button vs Hero's 'Book a call' | **Keep distinct** | Funnel design: low-commitment call at top while evaluating; real email at the bottom once ready to reach out. |
| H2 'Have a project? Let's build it.' | **Keep** | Strong, punchy closer. |

### Before → After

`Tell us what you're working on. We'll reply fast with a clear, honest plan to ship it.`
→ `Tell us what you're working on. You'll get a clear plan with real numbers on cost and timeline.`

### Stop-slop notes

- Killed 'honest' (4th sitewide instance of the self-praise tic) and the vague 'reply fast'.
- 'Real numbers on cost and timeline' pre-sets what the reply email contains = a soft lead qualifier.
- **45/50** scorecard.

## Work copy rewrite — decisions & rationale

Grilling + stop-slop pass on `src/components/Work.astro` (homepage project showcase). Default header props show on homepage; plans page overrides title + passes `intro=''`, so default-prop edits are homepage-only.

### Decisions locked

| Decision | Choice | Why |
|---|---|---|
| Intro 'Real projects with real results.' | **Name the work, drop the claim** | Empty alliterative filler; 'results' is unsubstantiated (cards show sites, not metrics). Name the verbs instead. |
| Nine client descriptions | **Em dashes + Boostrap fix only** | Safe pass: 4 dashes → colons, stop Boostrap restating its own name. No meaning changes to factual client blurbs (kept 'delicious'/'proudly' as brand flavor). |

### Before → After

**Intro:** `Real projects with real results. Visit any project to see it in action.`
→ `Sites we built and shipped for clients. Click any one to see it live.`

> Accuracy note: an earlier draft said 'designed, built, and shipped' but **not all nine were designed by Red Pixel**, so 'designed' was pulled from the blanket claim. 'Built and shipped' is true for every card. If a subset was fully designed in-house, flag it per-card via the `tags` array, not in the header.

**Descriptions:** em dash → colon on Cornelia, Source, Fairplay, Accessability Officer. Boostrap: `Boostrap Logos is a curated gallery…` → `A curated gallery…`

### Stop-slop notes

- Killed the filler intro, 4 em dashes, and a self-referential name repeat.
- Left client blurbs factually intact to avoid misrepresenting clients.
- Default `intro` change is homepage-only (plans passes `intro=''`).
- **44/50** scorecard.

## Testimonials — integrity pass (not stop-slop)

Pass on `src/components/Testimonials.astro`. Key principle: **real quotes from named people are off-limits.** Editing a quote attributed to someone = fabrication, not copy polish. Only keep/remove/replace-with-real are allowed.

### Decisions locked

| Decision | Choice | Why |
|---|---|---|
| Two live quotes (Nick Sergeant, Dries) | **Untouched, verbatim** | Real people's words. Stop-slop never applies to attributed quotes. |
| Commented-out testimonials (Priya Raman, Marco Bianchi) | **Deleted from source** | Fabricated (invented names + randomuser.me stock avatars). Disabled code gets re-enabled; fake social proof is a trust-killer for technical buyers. |
| Header 'What clients say' | **Keep** | Honest, clear, unpretentious. The quotes are the point. |

### Leftover (flagged, not changed)

- Both real testimonials still carry `randomuser.me` avatar URLs (Nick's is `women/44.jpg`). Harmless now — the `<img>` is commented out in both grid + carousel, so nothing renders. Clean up the dead data when real headshots exist or going avatar-free.

---

## HOMEPAGE PASS — COMPLETE

All sections reviewed: Hero, About, Services, TechStack (no-change), Process (homepage steps), Products, CTA, Work, Testimonials.

Cross-site patterns fixed on the homepage:
- Killed the abstract placeholder H1 ('business problems / tech solutions') → retainer-relationship lead.
- Self-praise tic 'honest' removed again in CTA (4th sitewide instance).
- Banned words/constructions: 'Robust' (Services), 'not just X' (Products).
- Em dashes removed: Work descriptions (4) + scattered others.
- Audience kept technical where it belongs (Process 'two senior devs', Services stack names) — the opposite of the plans-page fix.
- Integrity: fabricated testimonials deleted; Work intro corrected from over-claiming 'designed' (not all 9 were designed in-house) to 'built and shipped'.

### Parked / open
- 'Book a call' Hero CTA opens a mailto, not a scheduler — swap href when a Calendly/Cal.com link exists.
- Testimonials avatars: dead randomuser.me URLs to clean up.
- Optional: preview the homepage in a browser to sanity-check the Hero headline wrap (forced `<br />` was stripped by the formatter).
