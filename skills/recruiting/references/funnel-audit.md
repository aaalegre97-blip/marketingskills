# Recruiting Funnel Audit

Stage-by-stage diagnostic for hourly and field roles. For each stage: what to measure, what healthy looks like, how to spot the leak, and the fix in order of leverage.

Work top to bottom, but fix the worst stage first. Early leaks compound through every stage below them.

## Setup: the numbers you need

Last 30 days, per source if possible:

| Metric | Count |
|--------|-------|
| Ad spend | |
| Applicants | |
| Contacted (any reply from you) | |
| Contacted within 15 minutes | |
| Phone screens completed | |
| Interviews booked | |
| Interviews attended | |
| Offers made | |
| Offers accepted | |
| Started day 1 | |
| Still employed day 30 | |

Derived: cost per applicant, cost per hire, cost per retained hire (spend ÷ still employed at day 30).

If the owner cannot fill this in, the first fix is a tracking sheet. Do not skip to tactics.

## Stage 1: The offer

**Measure:** pay versus the local market for the same title. Check Indeed salary data, three competitor posts, and what the last two people who quit went to earn.

**Healthy:** at or above the 60th percentile locally, or below it with a clear non-pay edge the post leads with (guaranteed hours, weekly pay, set schedule, no weekends, vehicle provided).

**Leak signs:**
- Applicants apply, screen well, then take another job before the interview
- The last three departures went to a competitor for more money or better hours
- The post says "competitive pay" without a number

**Fixes in order:**
1. Put a number in the post. Weekly take-home, not hourly rate. "$720–$880/week" beats "$18–$22/hr" because people budget weekly.
2. Add one non-pay lever that costs you less than a raise. Guaranteed minimum hours is usually the strongest. See `job-offer.md`.
3. If you are genuinely below market with no edge, raise pay. Nothing below this stage will hold otherwise, and the math usually works: one retained cleaner produces more per month than a $2/hour raise costs.

## Stage 2: The job post

**Measure:** click-to-apply rate on Indeed (visible in the employer dashboard), or applications per 100 views on Facebook.

**Healthy:** 8–15% on Indeed. Below 5% means the post itself is losing people.

**Leak signs:**
- Title is a company term, not a search term
- Requirements listed before benefits
- Resume or account required to apply
- First two lines are about the company, not the pay

**Fixes in order:**
1. Change the title to what people search. Test with Indeed's search autocomplete.
2. Move pay and hours to line one and two.
3. Switch to one-tap apply (name and phone only).
4. Rewrite using the templates in `job-post-templates.md`.

## Stage 3: Traffic

**Measure:** cost per applicant per source.

**Healthy:** $10–40 per applicant for cleaners, $30–120 for skilled trades. One source should not be more than 70% of volume.

**Leak signs:**
- One free Indeed post and nothing else
- Sponsored post running with the same copy for 60+ days (Indeed deprioritizes stale posts)
- No referral program for current staff

**Fixes in order:**
1. Sponsor the Indeed post with a daily budget, and repost (not edit) it every 2–3 weeks so it reads as new.
2. Add a Facebook/Instagram job ad with a lead form to the same area. Target by zip, not interest. Use a photo of a real team member, not stock. See `ads`.
3. Launch a referral bonus for current staff: a number, paid half at day 30 and half at day 90. Referred hires retain better than any ad source.
4. Post in local Facebook groups and on the company page, with the same two-line offer.

## Stage 4: Speed-to-contact

**Measure:** minutes from application to first outbound text or call. Percentage of applicants contacted within 15 minutes.

**Healthy:** median under 15 minutes, 90% within 2 hours, including evenings and weekends.

**Leak signs:**
- Applicants are contacted the next business day
- Contact is a single phone call from an unknown number
- The owner does the contacting personally and is on job sites all day
- "They never answer" is the explanation

**Fixes in order:**
1. Automate the first text. Application → text within 2 minutes with a booking link. This is a Zapier or n8n flow from Indeed email notifications or the Facebook lead form to an SMS tool or CRM. See `follow-up-sequences.md`.
2. Assign one person who owns replies during business hours, with a 15-minute standard. Not the owner.
3. Add the 4-touch sequence over 3 days.
4. Use a local number and sign texts with a first name.

This is usually the biggest leak and the cheapest fix. A funnel going from 30% contacted to 90% contacted triples hires with zero added ad spend.

## Stage 5: Phone screen and interview show

**Measure:** interviews booked → attended.

**Healthy:** 60–75% show rate. Below 50% is a scheduling and reminder problem, not an applicant quality problem.

**Leak signs:**
- Interviews booked more than 48 hours out
- No reminder, or one email reminder
- Interview requires a trip to the office before any phone conversation
- Applicant has not spoken to a human before the interview

**Fixes in order:**
1. Insert a 10-minute phone screen before any in-person interview. Book it on the first text. Five questions, then book the interview on that call.
2. Book interviews within 48 hours. Offer two slots, not "when are you free."
3. Send three reminders: on booking, the evening before, and 2 hours before. Text, not email. Include the address and a photo of the building or a map pin.
4. Offer a video option for the first interview for roles where it makes sense.
5. Make the interview itself worth showing up to: a working interview or paid trial shift for cleaners and installers converts better than a sit-down.

## Stage 6: Offer to start

**Measure:** offers accepted → actually started day 1.

**Healthy:** 80% or better.

**Leak signs:**
- Silence between the offer and the start date
- Start date more than 7 days out
- Paperwork or background check takes longer than the gap and nobody tells them
- Pay or schedule on paper differs from what was said in the interview

**Fixes in order:**
1. Make the offer on the spot or the same day. Verbal, then a one-page written offer by text or email within an hour.
2. Start within 7 days. If background checks take longer, start them in paid training on day 1 and let the check clear in parallel where legal.
3. Day-before text with everything they need: time, address, who to ask for, what to wear, what to bring, first paycheck date.
4. Keep the runner-up warm until day 3 of the new hire.

## Stage 7: Thirty-day retention

**Measure:** started → still employed at day 30. Also ask every departing person why, and log it.

**Healthy:** 75% or better at day 30, 60% at day 90 for cleaning; higher for trades.

**Leak signs:**
- "They just stopped showing up" with no exit reason logged
- First day is a ride-along with whoever is available
- First paycheck is smaller than expected (training hours unpaid, deductions not explained)
- One lead tech or trainer has far worse retention than others

**Fixes in order:**
1. Pay for training from hour one and say so in the post, the offer, and the welcome text.
2. Assign a named trainer with a checklist. Track retention by trainer. Replace or retrain the trainer with the worst numbers.
3. Check-ins at day 3, 7, 14, 30 by a manager, logged.
4. First-paycheck walkthrough: show them the math before they see the stub.
5. A 30-day milestone: a bonus, a raise step, or a title. Small and stated in the offer.

## Output format

Deliver the audit as:

**Funnel table** with actuals, benchmark, and gap per stage.

**Worst stage** and why it was chosen over the others.

**The one fix** with the exact script, template, or automation, and who owns it.

**Re-measure date** one week out, with the metric that should move.

**Next two fixes** in priority order, so the owner knows what comes after.
