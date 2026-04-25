export function WaitlistFormSection() {
  return (
    <section id="waitlist-form" className="section-shell scroll-mt-24 pt-8">
      <div className="glass mx-auto max-w-2xl p-6 sm:p-8">
        <h2 className="text-2xl font-semibold sm:text-3xl">Apply to the waitlist</h2>
        <p className="mt-2 text-sm text-zinc-300 sm:text-base">
          Drop your email and we&apos;ll send your invite as soon as your clone spot opens.
        </p>

        <form action="https://formspree.io/f/xnjlrvae" method="POST" className="mt-6 space-y-3">
          <label htmlFor="waitlist-email" className="text-sm text-zinc-200">
            Email
          </label>
          <input
            id="waitlist-email"
            name="email"
            type="email"
            required
            placeholder="you@domain.com"
            className="w-full rounded-2xl border border-white/20 bg-white/5 px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-500 focus:border-cyan-300/60 focus:outline-none"
          />
          <button
            type="submit"
            className="w-full rounded-2xl bg-gradient-to-r from-neon-pink to-neon-violet px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:brightness-110"
          >
            Apply to waitlist
          </button>
        </form>
      </div>
    </section>
  );
}
