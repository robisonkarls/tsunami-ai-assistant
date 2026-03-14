import Image from "next/image";
import {
  SiGmail,
  SiGooglecalendar,
  SiSlack,
  SiImessage,
  SiWhatsapp,
  SiNotion,
  SiGoogledrive,
  SiZoom,
  SiHubspot,
  SiSalesforce,
  SiGithub,
  SiGooglesheets,
} from "react-icons/si";
import { FaMicrosoft } from "react-icons/fa6";

const builtFor = [
  {
    title: "Founders & CEOs",
    body: "Drowning in email, calendar chaos, need leverage",
  },
  {
    title: "Exec teams",
    body: "CFO, Head of Sales, EA — each gets their own agent",
  },
  {
    title: "Agencies & studios",
    body: "Client workflows, reporting, project management",
  },
  {
    title: "Investors & VCs",
    body: "Deal flow tracking, portfolio updates, LP comms",
  },
];

const timeline = [
  {
    time: "Every 30 min",
    action:
      "Scans your inbox, flags urgent emails, drafts replies for your review",
  },
  {
    time: "9:00 AM daily",
    action:
      "Sends you a briefing: today’s meetings, attendee backgrounds, prep notes",
  },
  {
    time: "On demand",
    action:
      "“I’m running 10 min late” → bot emails your next meeting and reschedules",
  },
  {
    time: "Ongoing",
    action:
      "Monitors Slack channels, summarizes threads, surfaces what matters",
  },
];

const howItWorks = [
  {
    step: "1",
    title: "Kickoff call",
    body: "We discuss your goals, map your integrations (email, calendar, CRM, messaging), and plan your agent's workflows. You tell us what to automate — we handle the rest.",
  },
  {
    step: "2",
    title: "Deploy & harden",
    body: "We set up your VPS or Mac Mini, install OpenClaw, configure Composio for secure OAuth, connect your tools, set up Docker sandboxing, firewall rules, and cron jobs. You go live same day.",
  },
  {
    step: "3",
    title: "14-day hypercare",
    body: "We tune workflows, expand permissions as you build trust, fix edge cases, and make sure everything runs smoothly. Dedicated Slack channel for direct support.",
  },
];

const faqs = [
  {
    q: "What is OpenClaw?",
    a: "An open-source AI assistant that runs 24/7 on dedicated infrastructure. It can triage email, schedule meetings, draft replies, monitor Slack, and automate workflows across your tools — proactively, without you asking.",
  },
  {
    q: "Do I need to be technical?",
    a: "Not at all. We handle everything — you don’t touch a terminal or write any code.",
  },
  {
    q: "Can’t I just set it up myself?",
    a: "You can — it’s open source. But every self-install we’ve seen has security gaps. The installation is straightforward; the hardening is where most teams need help.",
  },
  {
    q: "What’s included in implementation?",
    a: "VPS or Mac Mini provisioning, security hardening (Docker sandbox, firewall, exec allowlists), OAuth middleware setup, email/calendar integration, up to 3 workflows, documentation, and 14-day hypercare.",
  },
  {
    q: "VPS or Mac Mini?",
    a: "Most customers use a cloud VPS ($5–10/mo). Mac Mini is for teams that need iMessage integration or local hardware preference.",
  },
];

const cities = [
  "Calgary",
  "Airdrie",
  "Chestermere",
  "Cochrane",
  "Okotoks",
  "High River",
  "Strathmore",
  "Canmore",
  "Banff",
  "Diamond Valley",
  "Crossfield",
  "Carstairs",
  "Didsbury",
  "Nanton",
  "Claresholm",
  "Irricana",
  "Langdon",
  "Bragg Creek",
  "Priddis",
  "Redwood Meadows",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="border-b border-amber-200 bg-amber-50 py-3">
        <div className="mx-auto max-w-6xl px-6 text-center text-sm font-semibold text-amber-800">
          INTERNAL DRAFT — temporary copy benchmark for structure/design alignment.
        </div>
      </section>

      <section className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <h1 className="max-w-5xl text-4xl font-bold leading-tight md:text-6xl">
            SetupClaw-Style White-Glove OpenClaw Deployment for Founders & Exec Teams
          </h1>
          <p className="mt-6 max-w-4xl text-lg text-blue-100 md:text-xl">
            We deploy and maintain your team&apos;s AI assistant — remotely, secured from day one. No technical knowledge required.
          </p>
          <div className="mt-8 flex gap-4">
            <a href="#contact" className="rounded-lg bg-white px-6 py-3 font-semibold text-blue-700">Book a Call</a>
            <a href="#how-it-works" className="rounded-lg border-2 border-white px-6 py-3 font-semibold text-white">How it works</a>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white py-8">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col items-center gap-4 text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
              Powered by OpenClaw Ecosystem
            </p>
            <Image src="/openclaw-logo-text.png" alt="OpenClaw" width={170} height={32} className="h-6 w-auto" />
          </div>

          <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-6 md:p-8">
            <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
              <div className="text-center md:text-left">
                <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">Connects to</p>
                <p className="mt-2 text-3xl font-bold text-indigo-700">+10,000</p>
              </div>
              <div className="grid w-full max-w-4xl grid-cols-2 gap-3 text-sm font-medium text-slate-700 sm:grid-cols-3 md:grid-cols-4">
                {[
                  { name: "Gmail", icon: SiGmail },
                  { name: "Google Calendar", icon: SiGooglecalendar },
                  { name: "Outlook", icon: FaMicrosoft },
                  { name: "Slack", icon: SiSlack },
                  { name: "iMessage", icon: SiImessage },
                  { name: "WhatsApp", icon: SiWhatsapp },
                  { name: "Notion", icon: SiNotion },
                  { name: "Google Drive", icon: SiGoogledrive },
                  { name: "Zoom", icon: SiZoom },
                  { name: "HubSpot", icon: SiHubspot },
                  { name: "Salesforce", icon: SiSalesforce },
                  { name: "GitHub", icon: SiGithub },
                  { name: "Google Sheets", icon: SiGooglesheets },
                ].map(({ name, icon: IconComponent }) => (
                  <div key={name} className="flex items-center justify-center gap-2 rounded-lg border border-blue-100 bg-white px-3 py-2 text-center">
                    <IconComponent className="h-4 w-4 text-indigo-700" aria-hidden="true" />
                    <span>{name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-3xl font-bold md:text-4xl">Built for</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {builtFor.map((item) => (
            <article key={item.title} className="rounded-2xl border border-slate-200 bg-white p-7">
              <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-3 text-slate-600 leading-relaxed">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold md:text-4xl">Always On, Always Working</h2>
          <p className="mt-4 max-w-4xl text-lg text-slate-600 leading-relaxed">
            Unlike ChatGPT or Claude Desktop, your OpenClaw agent runs 24/7 on dedicated infrastructure. It wakes up every 30 minutes, checks your email, calendar, and connected tools — and takes action without you asking.
          </p>

          <div className="mt-10 space-y-4">
            {timeline.map((item) => (
              <div key={item.time} className="rounded-xl border border-slate-200 bg-white p-5">
                <p className="text-sm font-semibold uppercase tracking-wide text-indigo-700">{item.time}</p>
                <p className="mt-2 text-slate-700">{item.action}</p>
              </div>
            ))}
          </div>

          <p className="mt-8 max-w-4xl text-slate-600">
            You talk to your bot through Telegram (or Slack, WhatsApp, Discord) — just like texting an assistant. No technical knowledge required.
          </p>
        </div>
      </section>

      <section id="how-it-works" className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold md:text-4xl">How it works</h2>
          <div className="mt-10 space-y-6">
            {howItWorks.map((item) => (
              <article key={item.step} className="rounded-2xl border border-slate-200 bg-white p-8">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-indigo-700 text-lg font-bold text-white">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">{item.title}</h3>
                    <p className="mt-3 text-lg leading-relaxed text-slate-700">{item.body}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold md:text-4xl">FAQ</h2>
        <div className="mt-8 space-y-4">
          {faqs.map((faq) => (
            <details key={faq.q} className="rounded-xl border border-slate-200 bg-white p-6">
              <summary className="cursor-pointer text-lg font-semibold text-blue-800">{faq.q}</summary>
              <p className="mt-3 text-slate-600">{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold md:text-4xl">Available Across Calgary Region</h2>
          <p className="mt-3 max-w-3xl text-slate-600">Remote-first deployment with optional local support across Calgary and nearby communities.</p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {cities.map((city) => (
              <div key={city} className="rounded-lg border border-blue-100 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700">
                {city}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-gradient-to-r from-blue-700 to-indigo-800 py-16 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">Ready to launch your AI assistant stack?</h2>
          <p className="mt-4 text-lg text-blue-100">Book a discovery call and we’ll map your integrations and first workflows.</p>
          <a href="https://cal.com" className="mt-8 inline-block rounded-lg bg-white px-6 py-3 font-semibold text-blue-700 hover:bg-blue-50">Book a Discovery Call</a>
        </div>
      </section>
    </main>
  );
}
