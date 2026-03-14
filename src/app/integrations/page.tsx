import Link from "next/link";
import {
  SiWhatsapp,
  SiTelegram,
  SiDiscord,
  SiSlack,
  SiSignal,
  SiImessage,
  SiAnthropic,
  SiOpenai,
  SiSpotify,
  SiPhilipshue,
  SiObsidian,
  SiX,
  SiGooglechrome,
  SiGmail,
  SiGithub,
} from "react-icons/si";

const integrations = [
  { name: "WhatsApp", icon: SiWhatsapp, color: "text-[#25D366]" },
  { name: "Telegram", icon: SiTelegram, color: "text-[#26A5E4]" },
  { name: "Discord", icon: SiDiscord, color: "text-[#5865F2]" },
  { name: "Slack", icon: SiSlack, color: "text-[#E01E5A]" },
  { name: "Signal", icon: SiSignal, color: "text-[#3A76F0]" },
  { name: "iMessage", icon: SiImessage, color: "text-[#34C759]" },
  { name: "Claude", icon: SiAnthropic, color: "text-[#D97706]" },
  { name: "GPT", icon: SiOpenai, color: "text-[#10A37F]" },
  { name: "Spotify", icon: SiSpotify, color: "text-[#1DB954]" },
  { name: "Hue", icon: SiPhilipshue, color: "text-[#F59E0B]" },
  { name: "Obsidian", icon: SiObsidian, color: "text-[#7C3AED]" },
  { name: "Twitter", icon: SiX, color: "text-[#E5E7EB]" },
  { name: "Browser", icon: SiGooglechrome, color: "text-[#FBBF24]" },
  { name: "Gmail", icon: SiGmail, color: "text-[#EA4335]" },
  { name: "GitHub", icon: SiGithub, color: "text-[#E5E7EB]" },
];

export default function IntegrationsPage() {
  return (
    <main className="min-h-screen bg-[#06070a] text-slate-100">
      <section className="relative overflow-hidden border-b border-white/10 py-20">
        <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="relative mx-auto max-w-6xl px-6 text-center">
          <p className="inline-block rounded-full border border-cyan-300/30 bg-cyan-400/10 px-4 py-1 text-sm font-semibold text-cyan-200">
            Integrations
          </p>
          <h1 className="mt-4 text-4xl font-bold md:text-6xl">⟩ Works With Everything</h1>
          <p className="mx-auto mt-4 max-w-3xl text-slate-300 md:text-lg">
            Same integration lineup shown on the OpenClaw website, represented with full-color app icons.
          </p>
          <div className="mt-8 flex justify-center gap-3">
            <Link
              href="/"
              className="rounded-xl bg-cyan-300 px-5 py-2.5 text-sm font-semibold text-slate-900 transition hover:bg-cyan-200"
            >
              ← Back to Home
            </Link>
            <a
              href="https://openclaw.ai/integrations"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-cyan-300/40 px-5 py-2.5 text-sm font-semibold text-cyan-200 transition hover:bg-cyan-300/10"
            >
              Open Official Integrations Page
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
          {integrations.map(({ name, icon: Icon, color }) => (
            <div
              key={name}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-center"
              title={name}
            >
              <Icon className={`mx-auto h-8 w-8 ${color}`} aria-hidden="true" />
              <p className="mt-3 text-sm text-slate-300">{name}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
