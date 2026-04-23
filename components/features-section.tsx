const features = [
  'Clone personality mapping',
  'Emotional compatibility scoring',
  'Flirting style analysis',
  'Conflict simulation engine',
  'Share-ready result cards',
  'Mood-shift timeline playback',
];

export function FeaturesSection() {
  return (
    <section className="section-shell">
      <h2 className="mb-8 text-3xl font-semibold sm:text-4xl">Built for feelings, designed to spread</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <div className="glass p-5 transition hover:-translate-y-1 hover:border-cyan-300/40" key={feature}>
            <p className="text-sm text-zinc-200">{feature}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
