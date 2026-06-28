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
