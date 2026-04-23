export function FinalCTASection() {
  return (
    <section className="section-shell pt-10">
      <div className="glass relative overflow-hidden px-6 py-16 text-center sm:px-10">
        <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(255,78,205,0.12),rgba(95,252,255,0.06),rgba(157,121,255,0.12))] bg-[length:200%_200%] animate-shimmer" />
        <div className="relative z-10 mx-auto max-w-2xl">
          <h2 className="text-3xl font-semibold sm:text-5xl">Before you risk your heart, run the multiverse.</h2>
          <p className="mx-auto mt-4 max-w-xl text-zinc-300">
            Build your clone in minutes. Simulate the spark. Share the result that breaks the group chat.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <button className="rounded-2xl bg-gradient-to-r from-neon-pink to-neon-violet px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:brightness-110">
              Create your clone
            </button>
            <button className="rounded-2xl border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-zinc-100 transition hover:border-cyan-300/50 hover:bg-cyan-300/10">
              Watch demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
