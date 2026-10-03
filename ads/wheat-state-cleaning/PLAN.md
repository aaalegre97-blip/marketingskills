# WSC Meta Static Ads Plan

Items marked **[CONFIRM]** need an answer before launch.

## Campaign setup
- **Objective:** Leads
- **Conversion location:** Instant form (prices stay off the ads)
- **Structure:** 1 campaign, 2 ad sets at $15/day each (one ad per ad set, same targeting) so both ads get equal spend during the test. Merge the winner into one ad set after day 7–10. 2 ads (bathtub + toilet; one photo each, same offer, different hook). Fan ad dropped: weakest proof, and 2 ads gives each about $105/week instead of $70.
- **Location:** Kansas side only. Lawrence and Topeka with a radius (no state line nearby). Lenexa, Olathe, Overland Park and Kansas City KS targeted by city or ZIP name, with **no radius around the KC metro** (a radius spills into KCMO, Independence and North Kansas City). **[CONFIRM ZIP list]**
- **Audience:** broad / Advantage+, ages 28–60. No interest targeting; let the creative find the busy professionals.
- **Placements:** Advantage+ (Feed, Stories, Reels). Upload per placement: 1080x1350 for Feed, 1080x1920 for Stories/Reels, 1080x1080 as fallback.
- **Advantage+ creative enhancements: all OFF** (especially "expand image" and visual touch-ups). AI-generated fill around real before/after photos is a trust and policy risk.
- **Budget:** $30/day to start **[CONFIRM]**
- **Pixel:** WSC Pixel 1387712950066071

## The offer (same on both ads)
Full Home Transformation: a full deep clean of the whole house. Miss a spot and we come back and redo it free. No prices on the ads.

## Ad 1: Bathtub
**Text on image:**
- Headline: "Your last cleaner \"did the bathroom.\" Nobody touched the tub." (guarantee-led)
- Support line: "Miss a spot? We redo it free." (offer name lives in the Meta headline and primary text)
- Labels: Before / After
- Logo: none (removed per Alan; the page name and photo already show above the ad)
- Trust strip: "4.9★ from 100+ Google reviews · A+ BBB · Lawrence, KS" (confirmed by Alan: 4.9 rating, 100+ Google reviews, A+ BBB rating). Say "A+ BBB" only, not "BBB Accredited," unless WSC is accredited.

**Meta fields:**
- Primary text:
  > Pull back the curtain after the cleaner leaves. That's where the skipped spots are. Miss one? We come back and redo it free.
  >
  > We deep clean the whole house, tub included. You check it when you get home.
  >
  > Lawrence, KS. Tap below for your Full Home Deep Clean price.
- Headline: "Get Your Full Home Deep Clean Price" (35 chars; the image carries the guarantee, so the headline names what tapping gets them). Follow-up scripts must use the same name: "Full Home Deep Clean".
- Description: "Lawrence, KS"
- CTA button: Get Quote

## Ad 2: Toilet
**Text on image:**
- Headline: "Your kid asks you to play. You say, \"After I clean.\"" (busy professionals, time with family)
- Support line, labels, logo and trust strip: same as Ad 1

**Meta fields:**
- Primary text:
  > The cleaning takes all afternoon. By the time you're done, they've stopped asking.
  >
  > We deep clean the whole house so Saturday goes back to them. Then we keep it that way on a schedule. Miss a spot? We come back and redo it free.
  >
  > Lawrence, KS. Tap below for your Full Home Deep Clean price.
- Headline, description and CTA: same as Ad 1

## Ad 3: Ceiling fan (DROPPED)
Cut from launch. The change in the photo is mostly lighting, so it proves little, and a third ad splits a $30/day budget too thin. Revisit with a stronger photo once budget rises.

Primary text rule: open on the beat after the image hook (never repeat it), and get the offer inside the first ~125 characters.

## Image rules
- Sizes: 1080x1350 (Feed, 4:5), 1080x1920 (Stories/Reels, 9:16, all text inside y 270–1250), 1080x1080 (fallback)
- Real WSC photos only. Using the existing job graphics with the logo and pill bars cropped out; results are not edited.
- No prices, no fake buttons, no more than about 25 words
- Keep text at least 100px from the edges
- Colors: WSC blue, green and light blue, sampled from the logo

## Instant form
- **Type:** Higher intent (adds a review screen, so leads are better quality)
- **Intro headline:** "Get your deep clean price"
- **Intro text:** "Tell us about your home. We'll send your price. Miss a spot? We redo it free."
- **Questions:**
  1. Full name
  2. Phone
  3. Email
  4. ZIP code
  5. Bedrooms / bathrooms (multiple choice)
  6. When do you want your clean? (This week / Next 2 weeks / Just pricing). Call "This week" leads first.
  7. Interested in regular cleanings? (Yes / Maybe / Just once). Keep "Maybe" in the pipeline. "Just once" leads go to a GHL text sequence that pitches the recurring plan (default until a one-time price is decided). Do not list frequencies until the offered ones are confirmed. **[CONFIRM frequencies + one-time price decision]**
- **Thank-you screen:** "Got it. We'll text you in the next few minutes."
- **Thank-you button:** "Call us now", dialing (785) 592-3337
- **Lead routing:** form goes to GHL, which sends an automatic text within 60 seconds and assigns a human follow-up for the same day. If the ZIP is outside the service area, GHL auto-texts "Sorry, we're not in your area yet" and no follow-up task is created. **[CONFIRM workflow is built]**

## Testing plan
- **Days 1–7:** let both run. Don't touch anything.
- **Pick the winner on:** cost per lead **plus** contact rate (did they answer the text or call). These are the only signals with enough volume at $30/day.
- **Day 7 check:** kill an ad with no leads after $70 spent, or with cost per lead 2x the other ad's and a lower contact rate.
- **Bookings are a gut check, not a verdict:** if the winner books zero out of 8+ leads, investigate (lead quality, follow-up, offer) before scaling.
- **Scale:** raise the budget on the winner by 20% every 3 days.
- **Next test:** keep the winning photo and test 1 new headline. Run the challenger in its own ad set (same targeting) at a fixed $10/day for 7 days, then compare cost per lead with the winner. Don't add it to the winner's ad set; Meta would starve it.
- **Round 2 headline challengers:** Ad 1 "Your in-laws land Friday. This is your tub." Ad 2 "You pay someone to do your taxes. Why are you scrubbing this?"
- **Round 2 photo:** use a non-bathroom room (kitchen, stovetop, baseboards). Round 1 is two bathroom shots, so it tests hooks, not angles.

## Track weekly
- Cost per lead
- Lead to booked-clean rate
- Booked to recurring (3-visit gate) rate
- CTR (link) and thumb-stop rate (3-second video views don't apply to statics, so use CTR plus comments)

## Open items before launch
1. Guarantee wording sign-off
2. Daily budget
3. GHL workflow built: 60-second auto-text plus same-day human follow-up
4. A2P 10DLC registration done in GHL, and SMS consent wording added to the instant form
5. Which recurring frequencies WSC actually offers
6. One-time deep clean price: yes or no (until decided, "Just once" leads get the plan-pitch text sequence)
7. Privacy policy URL live on wheatstatecleaning.com (Meta instant forms require it)
8. Kansas-side ZIP list for targeting and the out-of-area auto-text
