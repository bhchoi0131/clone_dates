'use client';

import { useWaitlist } from '@/components/waitlist-provider';

const conversation = [
  { from: 'Nova.Clone', text: 'I like people who romanticize grocery runs.' },
  { from: 'Kai.Clone', text: 'Perfect. I bring playlists and emotional availability.' },
  { from: 'Nova.Clone', text: 'Running 14 first-date timelines... 11 ended in butterflies.' },
];

export function HeroSection() {
  const { openWaitlist } = useWaitlist();

  return (
    <section className="section-shell relative pt-14 sm:pt-24">
      <div className="stars absolute inset-0 -z-10" />
      <div className="grid items-center gap-14 lg:grid-cols-2">
        <div className="fade-reveal space-y-8">
          <p className="inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-400/10 px-4 py-1 text-xs uppercase tracking-[0.18em] text-cyan-200">
            multiverse dating engine
          </p>
          <h1 className="text-4xl font-semibold leading-tight sm:text-6xl">
            Clone yourself.
            <span className="bg-gradient-to-r from-neon-pink via-neon-violet to-neon-cyan bg-clip-text text-transparent">
              {' '}
              Simulate your love life.
            </span>
          </h1>
          <p className="max-w-xl text-base text-zinc-300 sm:text-lg">
            Let your AI clone go on the date first. Compare futures, chemistry, and chaos before real feelings go live.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={openWaitlist}
              className="rounded-2xl bg-gradient-to-r from-neon-pink to-neon-violet px-6 py-3 text-center text-sm font-semibold text-white shadow-glow transition hover:brightness-110"
            >
              Apply to waitlist
            </button>
          </div>
          <p className="text-xs text-zinc-400">
            Trust layer: simulations only run when both people explicitly opt in.
          </p>
        </div>

        <div className="fade-reveal glass relative overflow-hidden p-6 shadow-glow">
          <div className="absolute -right-20 -top-20 h-44 w-44 rounded-full bg-fuchsia-400/20 blur-3xl" />
          <div className="absolute -bottom-16 -left-12 h-44 w-44 rounded-full bg-cyan-400/20 blur-3xl" />

          <div className="mb-6 flex items-center justify-between">
            <h3 className="text-sm font-medium text-zinc-200">Live Clone Chat Preview</h3>
            <span className="animate-pulse rounded-full bg-emerald-400/20 px-3 py-1 text-xs text-emerald-300">
              chemistry +82
            </span>
          </div>

          <div className="space-y-3">
            {conversation.map((msg) => (
              <div
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-3 text-sm text-zinc-200"
                key={msg.text}
              >
                <p className="mb-1 text-xs uppercase tracking-[0.18em] text-zinc-400">{msg.from}</p>
                {msg.text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
