'use client';

import {
  createContext,
  useCallback,
  useContext,
  useState,
  type ReactNode,
} from 'react';

type WaitlistContextValue = {
  openWaitlist: () => void;
};

const WaitlistContext = createContext<WaitlistContextValue | null>(null);

export function useWaitlist() {
  const ctx = useContext(WaitlistContext);
  if (!ctx) {
    throw new Error('useWaitlist must be used within WaitlistProvider');
  }
  return ctx;
}

export function WaitlistProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const openWaitlist = useCallback(() => setIsOpen(true), []);
  const closeWaitlist = useCallback(() => setIsOpen(false), []);

  return (
    <WaitlistContext.Provider value={{ openWaitlist }}>
      {children}
      {isOpen ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-950/80 p-4 backdrop-blur-sm">
          <div className="glass relative w-full max-w-lg p-6 sm:p-8">
            <button
              type="button"
              onClick={closeWaitlist}
              className="absolute right-4 top-4 rounded-full border border-white/20 bg-white/5 px-3 py-1 text-lg leading-none text-zinc-200 transition hover:border-cyan-300/50 hover:text-white"
              aria-label="Close waitlist form"
            >
              ×
            </button>

            <h3 className="text-2xl font-semibold">Apply to the waitlist</h3>
            <p className="mt-2 text-sm text-zinc-300 sm:text-base">
              Drop your email and we&apos;ll send your invite as soon as your clone spot opens.
            </p>

            <form
              action="https://formspree.io/f/xnjlrvae"
              method="POST"
              className="mt-6 space-y-3"
            >
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
        </div>
      ) : null}
    </WaitlistContext.Provider>
  );
}
