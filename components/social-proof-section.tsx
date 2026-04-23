const stats = [
  { label: 'Clones created', value: '2.8M+' },
  { label: 'Simulations run', value: '41M+' },
  { label: 'Screenshots shared', value: '9.7M+' },
  { label: 'Group chats activated', value: '640K+' },
];

export function SocialProofSection() {
  return (
    <section className="section-shell py-8">
      <div className="glass overflow-hidden py-5">
        <div className="animate-marquee flex min-w-max gap-10 px-6">
          {[...stats, ...stats].map((stat, index) => (
            <div className="flex items-center gap-3" key={`${stat.label}-${index}`}>
              <span className="text-lg font-semibold text-white">{stat.value}</span>
              <span className="text-sm text-zinc-400">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
      <p className="mt-4 text-center text-sm text-zinc-400">
        Already viral in campus circles, private group chats, and late-night "just try it" dares.
      </p>
    </section>
  );
}
