export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-700 to-indigo-800 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.2),transparent_40%)]" />
        <div className="relative mx-auto max-w-6xl px-6 py-24">
          <p className="mb-4 inline-block rounded-full bg-white/20 px-4 py-1 text-sm font-semibold">
            Calgary Region • Draft Landing Page
          </p>
          <h1 className="max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
            White-Glove AI Assistant Deployment for Calgary Founders & Teams
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-blue-100 md:text-xl">
            We set up, secure, and maintain always-on executive assistants powered by OpenClaw — so your team gains leverage without technical overhead.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="rounded-lg bg-white px-6 py-3 font-semibold text-blue-700 shadow hover:bg-blue-50"
            >
              Book a Discovery Call
            </a>
            <a
              href="#services"
              className="rounded-lg border-2 border-white px-6 py-3 font-semibold text-white hover:bg-white hover:text-blue-700"
            >
              View Services
            </a>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold md:text-4xl">Core Services (Draft)</h2>
        <p className="mt-3 max-w-3xl text-slate-600">
          Same service model as SetupClaw, tailored for Calgary businesses.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Implementation",
              body: "OpenClaw installation on VPS or Mac Mini with production-ready configuration.",
            },
            {
              title: "Security Hardening",
              body: "Firewall rules, Docker sandboxing, permission boundaries, and least-privilege defaults.",
            },
            {
              title: "Integrations",
              body: "Email, calendar, Slack/Discord/WhatsApp, and CRM systems wired to your workflows.",
            },
            {
              title: "Workflow Design",
              body: "Executive briefings, inbox triage, reminders, follow-ups, and role-based automations.",
            },
            {
              title: "Hypercare",
              body: "14-day optimization support to tune reliability, prompts, and access policies.",
            },
            {
              title: "Managed Care",
              body: "Ongoing updates, monitoring, token refresh handling, and incident response.",
            },
          ].map((service) => (
            <article
              key={service.title}
              className="rounded-xl border border-blue-100 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <h3 className="text-xl font-semibold text-blue-800">{service.title}</h3>
              <p className="mt-3 text-slate-600">{service.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 md:grid-cols-3">
          {[
            ["2–6", "Typical agents per team"],
            ["24/7", "Always-on operation"],
            ["48h", "Kickoff scheduling target"],
          ].map(([value, label]) => (
            <div key={label} className="rounded-xl bg-slate-50 p-8 text-center shadow-sm">
              <p className="text-4xl font-bold text-indigo-700">{value}</p>
              <p className="mt-2 text-slate-600">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="bg-gradient-to-r from-blue-700 to-indigo-800 py-16 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">Ready to Launch AI Assistant Services in Calgary?</h2>
          <p className="mt-4 text-lg text-blue-100">
            This is draft v1. Next step: pricing table, package comparison, FAQs, and booking flow.
          </p>
          <a
            href="https://cal.com"
            className="mt-8 inline-block rounded-lg bg-white px-6 py-3 font-semibold text-blue-700 hover:bg-blue-50"
          >
            Set Up Booking Page
          </a>
        </div>
      </section>
    </main>
  );
}
