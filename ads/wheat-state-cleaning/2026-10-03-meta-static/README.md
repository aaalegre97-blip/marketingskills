# Wheat State Cleaning: Meta static ads (2026-10-03)

Cold lead gen with a "Get Quote" instant form. The offer is the Full Home Transformation with the redo guarantee. No prices on the ads.
This is a draft for approval. Nothing here is live.

## Files

| File | What it is |
|---|---|
| `founder-letter-feed-1080x1350.html` | Concept 1, Feed 4:5 |
| `founder-letter-story-1080x1920.html` | Concept 1, Stories/Reels 9:16 (add `?guides` to the URL to see the unsafe zones) |
| `png/founder-letter-feed-1080x1350.png` | Rendered feed ad |
| `png/founder-letter-story-1080x1920.png` | Rendered story ad |
| `png/founder-letter-story-1080x1920-guides.png` | Safe-zone check only. **Never upload this one.** |
| `export-png.mjs` | Re-renders the PNGs: `node export-png.mjs` (needs Playwright) |

To add Alan's real photo, save it as `alan.jpg` in this folder and re-run the export. The "A" initial shows until you do.

---

## 1. Three concepts

Each concept differs in angle, format and the job it does in the funnel. All three carry the same offer and guarantee.

### Concept 1: Founder Letter (TOP PICK, built)

- **Angle:** trust and accountability. A named local owner stands behind the work. Letting strangers into your home is the #1 fear in hiring a cleaner, and a real owner answers it.
- **Why it's the top pick:** founder content is the S-tier cold-audience format in the ad-creative skill. It's also the only concept that doesn't wait on raw photos, and it reads like a post, not an ad.
- **Visual:** a plain typed note on off-white paper with the owner's photo and name at the top. Three short lines, with the guarantee highlighted in yellow marker. "Alan" signs at the bottom. The service-area cities run small along the bottom. No logo slab, no stock, no gradient.
- **CTA button:** Get Quote
- **Headline (below the image):** `Miss a Spot? We Redo It Free.` (29 chars)
- **Description:** `Lawrence, Topeka & JoCo` (23 chars)
- **Primary text:**

```
Ever paid a cleaner, then spent Sunday redoing the baseboards yourself?

I'm Alan. I run Wheat State Cleaning out of Lawrence.

Here's how it works:
• We deep clean the whole house.
• You check it when you get home.
• Miss a spot? Tell us. We come back and redo it free.

Most homes start with one full deep clean, then stay on a regular schedule so it never gets that bad again.

We clean in Lawrence, Topeka, Lenexa, Olathe and Overland Park.

Tap Get Quote. Answer a few quick questions and we'll get you a price.
```

### Concept 2: The Question Everyone Asks (FAQ card)

- **Angle:** removing risk. It names the specific fear: finding what the cleaner skipped and having to be the one who brings it up.
- **Visual:** one plain card in WSC brand blue with white text, once the hex codes are sampled from the logo. The question is big and in quotes: *"What if they miss something?"* Below it, smaller: *"We come back and redo it free. Just tell us what we missed."* A small WSC wordmark sits at the bottom. Don't style it as a fake customer comment or Instagram question sticker, which would imply a customer asked something no one did.
- **CTA button:** Get Quote
- **Headline:** `What If They Miss Something?` (28 chars)
- **Description:** `Lawrence, Topeka & JoCo`
- **Primary text:**

```
The worst part of hiring a cleaner is finding what they skipped after they leave.

Spots still on the shower door. Dust still on the fan. And now you're the one who has to bring it up.

With Wheat State Cleaning, you don't have to make a case. Tell us what we missed and we come back and redo it free.

We deep clean the whole house first, then keep it that way on a regular schedule.

Lawrence, Topeka, Lenexa, Olathe and Overland Park.

Tap Get Quote for your price.
```

### Concept 3: The Shower Curtain (lived moment + real before/after)

- **Angle:** embarrassment when people come over. A moment busy professionals have actually lived.
- **Visual:** the real bathtub before/after from a WSC job. Before is on top and after is on the bottom, as phone-quality photos with crop only and no retouching. The line across the top reads *"You close the shower curtain when people come over."* Below the photos: *"Whole-home deep clean. Miss a spot? We redo it free."* Small "Before" and "After" labels.
- **CTA button:** Get Quote
- **Headline:** `Your Tub, After One Deep Clean` (30 chars)
- **Description:** `Lawrence, Topeka & JoCo`
- **Primary text:**

```
Company's coming Saturday and you're closing the shower curtain again.

This is a real tub from a Wheat State Cleaning job. Top is before. Bottom is after one deep clean.

We do the whole house, not just the bathroom. Miss a spot? Tell us. We come back and redo it free.

Lawrence, Topeka, Lenexa, Olathe and Overland Park.

Tap Get Quote for your price.
```

- **Blocked on:** the raw bathtub photo (no baked-in logo or labels).

---

## 2. Variants of the top concept (each changes ONE thing)

Control = Concept 1 exactly as above. The image stays identical in every variant.

| Variant | What changes | New version |
|---|---|---|
| **1A: Hook** | First line of the primary text only | `Your Sunday shouldn't start with a toilet brush.` |
| **1B: Headline** | Meta headline only | `Find a Missed Spot? We Come Back.` (33) |
| **1C: Identity keyword** | Meta headline only, with the city added | `Lawrence: Miss a Spot? We Redo It Free` (38) |

**Why a city for 1C:** for a local service, the city is the strongest identity trigger and a clean signal to Meta. If 1C beats the control, clone it per city: `Topeka:`, `Olathe:` and `Overland Park:` all fit within 40 characters. A job identity like "busy professionals" reads awkward in a headline. Test that later in the primary text if you want it.

---

## 3. Sizes and specs used

| Placement | Size | Text-safe area |
|---|---|---|
| Feed (FB/IG) | 1080x1350 (4:5) | Full frame, with about 100px margins |
| Stories/Reels | 1080x1920 (9:16) | x 150–930, y 270–1250 |

For the 9:16 version, I kept clear 270px at the top (about 14%), **670px at the bottom (about 35%)** and 150px on each side. That's stricter than the skill's cross-platform band (top 220 / bottom 500), because Reels stacks the caption, CTA button and account name at the bottom.

**Specs that may be out of date. Check them against Meta's current Ads Guide before launch:**
1. Recommended feed ratio (4:5) and Stories/Reels safe-zone percentages. Meta adjusts these as the apps' UI changes.
2. Text guidance: about 125 characters of visible primary text, 40-character headline, 30-character description. The description often doesn't show at all on mobile.
3. Instant form type names ("Higher Intent") and where the qualifying-question setting sits.
4. Advantage+ creative enhancement toggles. **Turn off** text overlays, music, image "touch-ups" and auto-cropping, or Meta will add the polished-ad look back in.

---

## 4. Claims that need your proof (or a yes) before launch

| # | Claim / element | What I need |
|---|---|---|
| 1 | "We come back and redo it free" | A real redo process. Who schedules it? Is it in the contractor agreement? Who pays the cleaner for the redo? |
| 2 | "We deep clean the whole house" | Confirm the Full Home Transformation covers every room. The fridge and oven interiors are Club perks, so if they're excluded, say "every room" or customers will claim a redo on the fridge. |
| 3 | "You check it when you get home" | Fine as is. It assumes no walkthrough. Change it if you do one. |
| 4 | Service areas | KCK is left out until you confirm it. "JoCo" is shorthand for Johnson County. Kill it if your buyers don't use it. |
| 5 | "regular schedule" | Soft disclosure of the 3-visit recurring minimum. Keep it. It cuts down on one-time shoppers. |
| 6 | "Answer a few quick questions" | It must match the instant form (1–3 questions). |
| 7 | Alan's photo and signature | Must be the real Alan. |
| 8 | Concept 3 photo | It must be a real WSC job, cropped only. |

I made no rating, review count, years in business, "insured/background-checked" or speed claims. Add any of those only once you can prove them.

---

## 5. Testing plan

**Before launch:**
- Instant form: Higher Intent type, plus one qualifier: *"How often do you want help? Every week / Every 2 weeks / Monthly / Just once."* Route the "Just once" answers separately.
- Set your **TCPL** (target cost per *qualified* lead) as average first-job profit you'd pay to win a customer × your lead-to-booked rate. Every kill or keep call below runs off it. I don't have your numbers, so send them.

**Round 1: concept test (weeks 1–2)**
- Launch **3 ads**: Concepts 1, 2 and 3. If Concept 3's photo isn't ready, launch 1 and 2 plus variant 1A.
- One CBO testing campaign. Broad targeting: a geo radius around the service cities, adults 25+, no interests. The creative does the targeting.
- Budget floor: each ad needs about **2× TCPL of spend in 14 days** to get a fair read. Three ads at a $40 TCPL means about $17/day minimum, and $25–35/day is safer.
- **Day 3:** don't touch anything.
- **Day 7:** delivery check. Kill any ad Meta won't spend on (under half its fair share of spend).
- **Day 14, or once an ad hits 3× TCPL in spend, whichever is later:** judge on **cost per qualified lead** (answered, in area, wants recurring), not form CPL.

**Round 2: variant test (weeks 3–4)**
- Take the winning concept. If that's Concept 1, run control + 1A + 1B + 1C = **4 ads**, using the same rules.
- One change per variant, so the winner tells you exactly what worked.
- If 1C wins, clone it for each city.

**Kill/keep rules:**
- Zero leads at 3× TCPL spend: kill the concept. Don't iterate on it.
- Leads but under 40% qualified: the angle is pulling the wrong people. Keep the format, change the angle.
- Cost per qualified lead at or below TCPL after 14 days with 5+ qualified leads: move it to a scaling campaign.
