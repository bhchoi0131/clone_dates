const steps = [
  {
    title: 'Create your clone',
    body: 'Voice, values, texting energy, and romantic boundaries — mirrored in minutes.',
  },
  {
    title: 'Invite your match',
    body: 'They opt in, spin up their clone, and choose what gets simulated.',
  },
  {
    title: 'Run multiverse scenarios',
    body: 'First dates, jealousy loops, awkward silences, weekend plans — stress-tested instantly.',
  },
  {
    title: 'Get your chemistry report',
    body: 'See compatibility, emotional fit, and where sparks become static.',
  },
];

export function HowItWorksSection() {
  return (
    <section className="section-shell">
      <h2 className="mb-3 text-3xl font-semibold sm:text-4xl">How the love simulation works</h2>
      <p className="mb-10 max-w-2xl text-zinc-300">Fast enough for impulse. Deep enough for real decisions.</p>
      <div className="grid gap-4 md:grid-cols-2">
        {steps.map((step, idx) => (
          <article
            className="glass group p-6 transition duration-300 hover:border-fuchsia-300/40 hover:bg-white/[0.06]"
            key={step.title}
          >
            <p className="mb-3 text-xs uppercase tracking-[0.18em] text-cyan-200">Step {idx + 1}</p>
            <h3 className="mb-2 text-xl font-semibold">{step.title}</h3>
            <p className="text-sm text-zinc-300">{step.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
