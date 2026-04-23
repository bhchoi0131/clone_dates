export function ResultsSection() {
  return (
    <section className="section-shell">
      <h2 className="mb-8 text-3xl font-semibold sm:text-4xl">Compatibility dashboard preview</h2>
      <div className="glass p-6 sm:p-8">
        <div className="grid gap-4 lg:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <p className="text-xs uppercase tracking-[0.16em] text-zinc-400">Chemistry score</p>
            <p className="mt-2 text-5xl font-semibold text-neon-mint">89</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <p className="text-xs uppercase tracking-[0.16em] text-zinc-400">Green flags</p>
            <ul className="mt-2 space-y-1 text-sm text-zinc-200">
              <li>• Matching repair style after conflict</li>
              <li>• Shared future pacing</li>
              <li>• High humor reciprocity</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <p className="text-xs uppercase tracking-[0.16em] text-zinc-400">Tension points</p>
            <ul className="mt-2 space-y-1 text-sm text-zinc-200">
              <li>• Different texting frequency needs</li>
              <li>• Jealousy trigger under ambiguity</li>
              <li>• Weekend planning friction</li>
            </ul>
          </div>
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-cyan-300/20 bg-cyan-400/10 p-5">
            <h3 className="mb-2 text-sm font-semibold text-cyan-100">What they liked about each other</h3>
            <p className="text-sm text-zinc-100">Playful honesty, emotional vocabulary, and mutual curiosity during uncertainty.</p>
          </div>
          <div className="rounded-2xl border border-fuchsia-300/20 bg-fuchsia-400/10 p-5">
            <h3 className="mb-2 text-sm font-semibold text-fuchsia-100">What could go wrong</h3>
            <p className="text-sm text-zinc-100">If reassurance drops during stress weeks, attraction may turn into mixed signals.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
