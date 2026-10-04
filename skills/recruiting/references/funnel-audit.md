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

**Healthy:** 6% is the small-business median (CareerPlug 2025, Appcast 2025). 10% or better means the post is doing real work. Below 4% means the post itself is losing people.

**Leak signs:**
- Title is a company term, not a search term
- Requirements listed before benefits
- Resume or account required to apply
- First two lines are about the company, not the pay

**Fixes in order:**
1. Change the title to what people search. Test with Indeed's search autocomplete.
2. Move pay and hours to line one and two. Indeed reports up to 2.5x more applications when pay is listed, and 50% more apply starts when pay, schedule, and benefits all appear.
3. Switch to one-tap apply (name and phone only).
4. Rewrite using the templates in `job-post-templates.md`.

## Stage 3: Traffic

**Measure:** cost per applicant per source.

**Healthy:** $5–25 per applicant for cleaners, $30–120 for skilled trades. Indeed bills sponsored posts per application, typically $15–50 for most roles and $5–8 for entry-level service roles, with a $25/day minimum per post. One source should not be more than 70% of volume.

**Leak signs:**
- One free Indeed post and nothing else
- A free post that was never sponsored, or a sponsored post that has not been touched in 60+ days
- No referral program for current staff

**Fixes in order:**
1. Sponsor the Indeed post with a daily budget. Keep one active post per role and update it when the offer changes; Indeed ranks duplicate and frequently reposted jobs lower.
2. Add a Facebook/Instagram job ad with a lead form to the same area. Target by zip, not interest. Use a photo of a real team member, not stock. See `ads`.
3. Launch a referral bonus for current staff: a number, half paid within two weeks of the hire's start and half at day 90. Referred hires retain roughly 40% better than job-board hires and stay about 70% longer.
4. Post in local Facebook groups and on the company page, with the same two-line offer.

## Stage 4: Speed-to-contact

**Measure:** minutes from application to first outbound text or call. Percentage of applicants contacted within 15 minutes.

**Healthy:** median under 15 minutes, 90% within 2 hours, including evenings and weekends. For context, the median employer response is about a week, and hourly applicants take the first credible reply.

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

**Healthy:** 80% or better with text reminders. Industry no-show averages run 30–50%, and multi-touch text reminders bring no-shows down to 8–12%. Below 50% is a scheduling and reminder problem, not an applicant quality problem.

**Leak signs:**
- Interviews booked same-day (about 70% show) or more than 72 hours out; the 24–72 hour window shows at about 90%
- No reminder, or one email reminder
- Interview requires a trip to the office before any phone conversation
- Applicant has not spoken to a human before the interview

**Fixes in order:**
1. Insert a 10-minute phone screen before any in-person interview. Book it on the first text. Five questions, then book the interview on that call.
2. Book interviews 24 to 72 hours out. Offer two slots, not "when are you free." 42% of candidates drop out when scheduling drags; 55% give up if there is no interview within a week.
3. Send three reminders: on booking, the evening before, and 2 hours before. Text, not email. Include the address and a photo of the building or a map pin.
4. Offer a video option for the first interview for roles where it makes sense.
5. Make the interview itself worth showing up to: a paid working interview or trial shift for cleaners and installers converts better than a sit-down. Pay it at the full rate; federal law requires at least minimum wage whenever an applicant does real work.
6. For high-volume cleaner hiring, a group interview session (6–10 applicants, pay and schedule covered once, short individual chats after) turns no-shows into an empty chair instead of an empty morning.

## Stage 6: Offer to start

**Measure:** offers accepted → actually started day 1.

**Healthy:** 80% or better. About 1 in 5 hourly hires accept and never show on day 1; employers with automated reminders and background-check tracking report pushing day-1 attendance above 90%.

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

**Healthy:** 75% or better at day 30, 60% at day 90 for cleaning; higher for trades. Across frontline roles, 43% of new hires leave within 90 days, and 29% decide in the first week.

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
