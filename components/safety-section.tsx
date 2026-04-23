export function SafetySection() {
  return (
    <section className="section-shell">
      <div className="glass p-6 sm:p-8">
        <h2 className="mb-4 text-3xl font-semibold">Consent-first, always</h2>
        <div className="grid gap-3 text-sm text-zinc-300 sm:grid-cols-2">
          <p>Both people must explicitly opt in before any clone-to-clone simulation starts.</p>
          <p>Your clone is generated from your own inputs and can be edited or removed anytime.</p>
          <p>Simulations are synthetic forecasts, not promises, predictions, or mind-reading.</p>
          <p>We designed this for emotional clarity, not manipulation.</p>
        </div>
      </div>
    </section>
  );
}
