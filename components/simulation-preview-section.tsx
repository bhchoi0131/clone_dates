const chips = ['First date', 'Late-night texting', 'Jealousy test', 'Weekend trip'];

export function SimulationPreviewSection() {
  return (
    <section className="section-shell">
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="glass p-6 sm:p-8">
          <div className="mb-6 flex flex-wrap gap-2">
            {chips.map((chip, i) => (
              <span
                className={`rounded-full border px-4 py-1 text-xs ${
                  i === 1
                    ? 'border-fuchsia-300/50 bg-fuchsia-400/15 text-fuchsia-100'
                    : 'border-white/15 bg-white/5 text-zinc-300'
                }`}
                key={chip}
              >
                {chip}
              </span>
            ))}
          </div>

          <div className="space-y-4 text-sm">
            <div className="ml-auto max-w-[85%] rounded-2xl bg-fuchsia-500/20 p-3 text-zinc-100">
              I planned us a rainy bookstore date. Too soft or exactly right?
            </div>
            <div className="max-w-[85%] rounded-2xl bg-cyan-500/20 p-3 text-zinc-100">
              Exactly right. But I&apos;d challenge you to pick the weirdest poetry section.
            </div>
            <div className="ml-auto max-w-[85%] rounded-2xl bg-fuchsia-500/20 p-3 text-zinc-100">
              Clone note: playful tension rising. Flirt probability now 87%.
            </div>
          </div>
        </div>

        <div className="glass flex flex-col justify-between p-6 sm:p-8">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-zinc-400">Chemistry meter</p>
            <h3 className="mt-2 text-4xl font-semibold">87%</h3>
            <div className="mt-4 h-3 overflow-hidden rounded-full bg-white/10">
              <div className="h-full w-[87%] animate-pulseSlow rounded-full bg-gradient-to-r from-emerald-300 via-cyan-300 to-fuchsia-400" />
            </div>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-3 text-sm">
            <div className="rounded-2xl border border-emerald-300/30 bg-emerald-400/10 p-3">
              Emotional sync
              <p className="text-lg font-semibold text-emerald-200">High</p>
            </div>
            <div className="rounded-2xl border border-amber-300/30 bg-amber-400/10 p-3">
              Conflict heat
              <p className="text-lg font-semibold text-amber-200">Moderate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
