# Applicant Follow-Up Sequences

Speed-to-contact is the stage most funnels lose. Applicants apply to several jobs in one sitting and go with whoever reaches them first. Build the first touch as automation and the next three as a standard.

For SMS compliance, deliverability, and tooling, see `sms`. Treat applicant texts as informational, keep them about the application, register the sending number under A2P 10DLC, include opt-out language on the first automated text and on any re-engagement text, honor STOP immediately, and keep the monthly list to people who replied at least once.

## The 4-touch standard

| Touch | When | Channel | Goal |
|-------|------|---------|------|
| 1 | Within 2 minutes (automated) | Text | Acknowledge, qualify, book the phone screen |
| 2 | 2 hours later if no reply | Text | Different angle, same ask |
| 3 | Next day | Call, voicemail, then text | Human touch |
| 4 | Day 3 | Text | Last call, then move to monthly list |

All from one local number, signed with a real first name.

## Touch 1: Instant text (automated)

Trigger: new application on Indeed (email parse), Facebook lead form, careers-page form, or any source feeding the CRM.

> Hi [First name], this is [Your name] at [Company]. Got your application for the [House Cleaner] job, thanks. Quick one: can you work Mon–Fri days starting [next week]? Reply YES and I'll call you for 10 minutes, or grab a time here: [booking link]. Reply STOP to opt out.

Two variants to test:
- Lead with the pay: "It's $[650–790]/week guaranteed, Mon–Fri, paid every Friday. Still interested?"
- Lead with start timing: "We can start you [Monday]. Does that work?"

Rules:
- One question, not three.
- A booking link or a YES, not "let me know."
- Under 320 characters.

## Touch 2: Second text (2 hours, no reply)

> [First name], [Your name] again from [Company]. The [cleaner] job is [32] hours guaranteed, done by [4pm], no weekends. Want to hear more? Reply YES or call me at [number].

## Touch 3: Call, voicemail, text (next day)

Call from the same local number. If no answer, 15-second voicemail:

> Hi [First name], [Your name] from [Company] about the [cleaner] job you applied for. We're hiring this week. Call or text me back at [number].

Then text immediately:

> Just left you a voicemail. Still want the [cleaner] job? Reply YES and I'll get you set up this week.

## Touch 4: Final text (day 3)

> [First name], last one from me. If the timing's off, no problem, I'll check back next month. If you want in, reply YES today and we'll get you started [date].

Then tag them "not now" and add to a monthly re-engagement list.

## Provider variant (1099 contractors)

The employee texts above promise hours and a schedule, which a contractor post must not. For referral platforms and marketplaces, swap the first two touches:

**Touch 1:** "Hi [First name], [Your name] with [Company]. Thanks for applying to clean with us. Jobs are paid per job, shown before you accept, paid every Friday. Still cleaning professionally? Reply YES and I'll call you for 10 minutes, or grab a time: [booking link]. Reply STOP to opt out."

**Touch 2:** "[First name], [Your name] again. We bring the clients and collect payment; you pick the jobs you want. Want the details? Reply YES or call [number]."

The call script, reminders, and onboarding texts are in `independent-contractor-providers.md`.

## Monthly re-engagement

Once a month to everyone tagged "not now" in the last 6 months:

> Hi [First name], [Your name] at [Company]. We're hiring [cleaners] again, $[X]/week, start [date]. Still looking? Reply YES. Reply STOP to opt out.

This list becomes the cheapest hiring source in the business within a quarter.

## Phone screen script (10 minutes)

Five questions, then book the interview or working interview on the call:

1. "Tell me what you're doing for work right now." (Listen for why they're leaving.)
2. "Can you work [the schedule]? Any days or times that don't work?"
3. "How are you getting to jobs?" (Transportation is the number one cleaner no-show cause.)
4. "The pay is [weekly number]. Does that work for what you need?"
5. "When could you start?"

Then: "Great. I've got [Wednesday 10am] or [Thursday 2pm] for a paid working interview. Which is better?" Offer slots 24 to 72 hours out; same-day bookings show at about 70%, the 24–72 hour window at about 90%.

Book it. Confirm by text within a minute of hanging up.

## Interview reminders

Three texts, all with the address and a map pin. Reminders at 24 hours and 1 hour before cut no-shows from roughly 20% to under 12%:

- **On booking:** "You're set for [Wed 10am] at [address]. Ask for [name]. Wear [closed-toe shoes / work clothes]. It's paid, 2 hours. [map pin]"
- **24 hours before:** "See you tomorrow at [10am], [address]. Reply if anything changed."
- **1 hour before:** "Heading in? [Name] is expecting you at [10am]. [map pin]"

If they do not show, one text: "Missed you today. Want to rebook? Reply with a day that works." Then back to the monthly list.

## Offer to day one

- **Offer (same day):** "Offer's official: $[X]/hr, [hours], start [Monday 8am]. Reply YES to accept and I'll send the paperwork link."
- **Paperwork link** within the hour.
- **Day before:** "Tomorrow, [8am], [address]. Ask for [trainer]. Wear [X], bring [ID]. Your first check is [Friday date]. Text me with any questions."
- **Day 3, day 7, day 14, day 30 check-ins** from the manager, logged.

## Automation map

Minimum viable setup, in order of effort:

1. **Trigger.** Indeed sends an email per applicant; parse it with the CRM's email parser, Zapier Email Parser, or an n8n IMAP node. Facebook lead forms connect directly to Zapier, n8n, or most CRMs. Careers-page forms post to a webhook.
2. **Create or update the contact** in the CRM (GoHighLevel, Jobber, ServiceTitan, HubSpot, or a Google Sheet to start) with source, role, and timestamp.
3. **Send Touch 1** from the SMS tool or the CRM's built-in texting, from a local number.
4. **Wait 2 hours.** If no inbound reply, send Touch 2.
5. **Create a task** for the human owner the next morning: call, voicemail, Touch 3.
6. **Day 3:** Touch 4, then tag "not now."
7. **Any reply** stops the sequence and notifies the owner.

Track the time from step 1 to first outbound. That is the speed-to-contact number for the audit.

If the business already runs GoHighLevel, this is one workflow with a pipeline: Applied → Contacted → Screened → Interview Booked → Attended → Offered → Started → Day 30.
