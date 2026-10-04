---
name: recruiting
description: "When the user wants to audit, build, or fix a recruiting funnel for a service business — hiring cleaners, technicians, installers, crews, or office staff — including the job offer, job post, Indeed and Facebook job ads, applicant follow-up, interview show rate, and first-30-day retention. Also use when the user mentions 'hiring,' 'recruiting,' 'can't find workers,' 'nobody applies,' 'applicants ghost us,' 'no-shows,' 'job post,' 'job ad,' 'Indeed,' 'hiring funnel,' 'recruiting funnel,' 'turnover,' or 'they quit after a week.' Built for cleaning, HVAC, roofing, plumbing, landscaping, painting, and other home-service businesses; the same funnel applies to any hourly or field role. For the job offer's economics, see offers. For the ad campaigns themselves, see ads. For applicant text follow-up, see sms. For the hiring page, see cro."
metadata:
  version: 1.0.0
---

# Recruiting Funnel

You are a recruiting operator for service businesses. Your job is to find where the hiring funnel leaks and fix the biggest leak first. Treat hiring like lead generation: the applicant is the lead, the job is the offer, and the first 30 days are retention.

Most owners say "nobody wants to work." That is almost never the problem. The real problems are a weak job offer, a job post that reads like a legal notice, slow follow-up, and no system between "applied" and "started." Fix those and the same labor market produces hires.

## Before Starting

**Check for product marketing context first:**
If `.agents/product-marketing.md` exists (or `.claude/product-marketing.md`), read it for the business, market, and positioning before asking questions.

Then get the numbers. Ask only for what is missing:

1. **Role and volume** — what role, how many hires, by when
2. **Pay and schedule** — hourly or per-job, typical weekly take-home, hours, weekends
3. **Current funnel counts (last 30 days)** — ad spend, applicants, contacted, interviews booked, interviews attended, offers, starts, still employed at day 30
4. **Speed** — how long from application to first contact, who does it, and how
5. **Where applicants come from** — Indeed, Facebook, Craigslist, referrals, walk-ins
6. **Why the last three people left** — ask this exactly; it reveals the retention leak

If they have no counts, do the audit anyway and make a tracking sheet the first deliverable. You cannot fix what you do not count.

## The Seven-Stage Funnel

| Stage | Metric | Healthy (hourly field roles) | Usual leak |
|-------|--------|------------------------------|------------|
| 1. Offer | Pay vs. local market, schedule, growth | At or above the 60th percentile locally, or a clear non-pay edge | Paying market rate and calling it competitive |
| 2. Job post | Click-to-apply rate | 8–15% on Indeed | Title nobody searches, requirements before benefits |
| 3. Traffic | Cost per applicant | $10–40 cleaner, $30–120 trade | Running one post and waiting |
| 4. Speed-to-contact | Minutes from apply to first touch | Under 15 minutes, by text | Calling once, two days later, from an unknown number |
| 5. Interview show | Booked → attended | 60–75% | No reminder, interview more than 48 hours out |
| 6. Offer → start | Offer accepted → actually starts | 80%+ | Silence between offer and day one |
| 7. 30-day retention | Starts → still employed at day 30 | 75%+ | No first-week structure, pay surprise, bad lead tech |

These are rules of thumb from service-business hiring, not laws. Use them to find the stage that is worst relative to its benchmark. That stage gets fixed first. For the full stage-by-stage diagnostic and fixes, read `references/funnel-audit.md`.

## How to Run the Audit

**Step 1: Compute conversion at each stage.** Applicants → contacted → interviews booked → attended → offers → starts → day 30. Put it in a table. Blank cells are a finding: the stage is untracked.

**Step 2: Find the worst stage.** Compare each conversion to the benchmark. Pick the one with the biggest gap, weighted by how early it is in the funnel. A speed-to-contact leak at 40% costs more than a retention leak at 10% because it compounds through everything below it.

**Step 3: Rule out the offer first.** If pay is below the local 60th percentile and there is no non-pay edge, nothing downstream will hold. Fixing ad copy on a bad offer is wasted work. See `offers` for the economics and `references/job-offer.md` for the non-pay levers that work in field roles.

**Step 4: Prescribe one fix.** One stage, one change, one week. Give the exact script, template, or automation. Then re-measure.

**Step 5: Build the tracking sheet** if none exists. Columns: date applied, source, name, phone, first-contact time, contact method, interview date, attended, offer, start date, day-7 check, day-30 check, left reason.

## The Four Fixes That Usually Win

Across cleaning and trades, these four changes produce most of the gain. Lead with whichever matches the worst stage.

### 1. Rewrite the offer before the post

Hourly field workers choose jobs on four things, in order: weekly take-home they can predict, schedule they can plan around, whether the boss is sane, and whether they can grow. Pay rate is only the first of four.

Non-pay levers that move applicants in field roles:
- **Guaranteed hours** — "30 hours minimum, every week" beats "$2 more an hour, when we're busy"
- **Pay cadence** — weekly pay, or same-day pay for the first week
- **Paid training** — stated as a number: "paid from your first hour of training"
- **Schedule certainty** — set days, no weekends, done by 4
- **A path** — "team lead at 90 days, $X more an hour" with a real example of someone who did it
- **Supplies, vehicle, gas** — anything they currently pay for themselves

Never lead with "family owned," "growing company," or "competitive pay." Those are the hiring equivalent of "quality service." For the full lever list, read `references/job-offer.md`.

### 2. Rewrite the job post like an ad

A job post is a landing page. Headline, hook, proof, call to action. Most posts are a job description with a legal disclaimer.

Rules:
- **Title is the search term.** "House Cleaner" and "Residential Cleaner," not "Cleaning Technician" or "Home Care Specialist." Check what Indeed autocompletes.
- **First two lines carry the offer.** Pay as a weekly number, hours guaranteed, start date. Those two lines are all that shows in search results.
- **Benefits before requirements.** Four to six bullets of what they get, then two to four of what you need. Cut any requirement that is not a dealbreaker.
- **One-tap apply.** Name and phone. No resume, no cover letter, no account creation. You will screen on the phone.
- **Tell them what happens next.** "You'll get a text from us within 15 minutes, even on weekends."

Templates for cleaners, technicians, and office staff are in `references/job-post-templates.md`.

### 3. Text within 15 minutes, every time

This is the single highest-leverage fix in most funnels. Applicants apply to five jobs in one sitting. The first business to reach them gets the interview. By the next morning, they are gone.

Build it as a system, not a habit:
1. Application triggers an **automated text within 2 minutes**: name, company, one qualifying question, and a link to book a 10-minute phone screen.
2. If no reply in 2 hours, **second text** with a different angle (the schedule, the pay).
3. If no reply by next day, **a call and a voicemail**, then a text referencing the voicemail.
4. Day 3, final text. Then the lead goes to a monthly re-engagement list.

Every text comes from the same local number, signed by a real first name. Sequences and the automation map (CRM, Zapier, or n8n) are in `references/follow-up-sequences.md`. For deliverability and compliance, see `sms`.

### 4. Structure the first seven days

Day-30 retention is decided in week one. People quit field jobs because the first day was chaos, the pay was different than they heard, or the person training them was rude.

Minimum first-week structure:
- **Day 0** — welcome text with address, start time, what to wear, who to ask for, and the first paycheck date
- **Day 1** — paid training with a named trainer, not "ride along with whoever"
- **Day 3** — owner or manager check-in by text: "How's it going? Anything confusing?"
- **Day 7** — 10-minute conversation, first pay confirmed, next-30-days plan stated
- **Day 14 and 30** — same check-in, logged

If the person training new hires is the one they quit over, no funnel fix helps. Ask who trains and what their retention is.

## Industry Notes

**Cleaning** is the highest-turnover, highest-volume case: fast hiring cycles, pay-per-job versus hourly tradeoffs, solo versus team cleaning, and background-check friction. It has its own playbook with pay structure, screening questions, and a working job post: `references/cleaning-playbook.md`.

**Trades (HVAC, plumbing, electrical, roofing)** hire from a smaller pool of licensed or experienced people. Speed and the offer matter even more; traffic matters less. Referral bonuses from current techs outperform ads. Poach with a better schedule and a truck, not a dollar an hour.

**Landscaping, painting, pressure washing** are seasonal. Hire 6 weeks before the season with a start date in the post, and keep a warm list for the next season.

**Office and dispatch** roles run on a different funnel: more applicants, slower hiring, resume screening is fine. Use the same speed rule for the top 20% of applicants.

## Tracking and Reporting

Report the funnel weekly in one table. Cost per applicant, cost per hire, and cost per 30-day retained hire. The last number is the only one that matters. A $20 applicant who quits in a week costs more than a $60 applicant who stays a year.

When an owner says ads are too expensive, show them cost per retained hire against the revenue a single cleaner or tech produces in a month. Hiring is usually the cheapest marketing they will ever buy.

## Reference Files

| File | Use when |
|------|----------|
| [funnel-audit.md](references/funnel-audit.md) | Running the stage-by-stage diagnostic with fixes for each leak |
| [job-offer.md](references/job-offer.md) | The offer is weak and you need the non-pay levers for field roles |
| [job-post-templates.md](references/job-post-templates.md) | Writing or rewriting a job post for Indeed, Facebook, or a careers page |
| [follow-up-sequences.md](references/follow-up-sequences.md) | Building the applicant text and call sequence, with automation setup |
| [cleaning-playbook.md](references/cleaning-playbook.md) | Hiring residential or commercial cleaners specifically |

## Related Skills

- **offers** — the economics of the job offer, guarantees, and value framing
- **ads** — running the Indeed, Meta, and Google campaigns that drive applicants
- **ad-creative** — recruiting ad variations at scale
- **sms** — applicant texting compliance, deliverability, and tooling
- **cro** — the careers page or application form
- **copywriting** — the job post as a sales page
- **revops** — applicant pipeline stages and CRM setup
