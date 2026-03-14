import Link from "next/link";

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50 text-slate-900">
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-700 via-indigo-700 to-blue-900 text-white">
        <div className="absolute -left-20 top-8 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
        <div className="relative mx-auto max-w-4xl px-6 py-16">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-100">Learn More</p>
          <h1 className="mt-3 text-4xl font-bold leading-tight">What is a Collison Install?</h1>
          <Link href="/" className="mt-6 inline-block rounded-xl border border-white/80 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white hover:text-blue-700">← Back to main page</Link>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-12">
        <article className="rounded-3xl border border-slate-200/70 bg-white p-8 shadow-sm">
          <p className="text-lg leading-relaxed text-slate-700">A Collison Install is a done-for-you deployment model: setup, security, integrations, and tuning are handled end-to-end for your team.</p>
          <p className="mt-4 leading-relaxed text-slate-600">The goal is speed and reliability—go live quickly with guardrails in place, then refine workflows during hypercare.</p>
        </article>
      </section>
    </main>
  );
}
