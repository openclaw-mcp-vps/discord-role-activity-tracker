export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <div className="inline-block bg-[#161b22] border border-[#30363d] rounded-full px-4 py-1 text-sm text-[#58a6ff] mb-6">
          For Discord Server Admins & Community Managers
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Track Member Engagement{" "}
          <span className="text-[#58a6ff]">by Discord Roles</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-2xl mx-auto mb-10">
          See exactly which roles are active, who's sending messages, and how much time members spend in voice channels. Make data-driven decisions to grow your community.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-4 rounded-lg text-lg transition-colors"
        >
          Start Tracking — $8/mo
        </a>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <div className="text-2xl font-bold text-[#58a6ff] mb-2">Messages</div>
            <p className="text-[#8b949e] text-sm">Track message frequency per role over time. Spot your most engaged segments instantly.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <div className="text-2xl font-bold text-[#58a6ff] mb-2">Voice Time</div>
            <p className="text-[#8b949e] text-sm">Measure hours spent in voice channels broken down by role. Know who's really showing up.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <div className="text-2xl font-bold text-[#58a6ff] mb-2">Trends</div>
            <p className="text-[#8b949e] text-sm">Historical charts reveal engagement trends so you can act before members go quiet.</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-3xl font-bold text-white text-center mb-10">Simple Pricing</h2>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$8</div>
          <div className="text-[#8b949e] mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited Discord servers",
              "Role-based analytics dashboard",
              "Message & voice time tracking",
              "Historical data & trend charts",
              "CSV export",
              "Priority support"
            ].map((feature) => (
              <li key={feature} className="flex items-center gap-3 text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span>
                {feature}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg text-lg transition-colors"
          >
            Get Started
          </a>
          <p className="text-[#8b949e] text-xs mt-4">Cancel anytime. No contracts.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-3xl font-bold text-white text-center mb-10">FAQ</h2>
        <div className="space-y-6">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="text-white font-semibold mb-2">How does it connect to my Discord server?</h3>
            <p className="text-[#8b949e] text-sm">You invite our Discord bot to your server with read-only permissions. It collects message counts and voice session data and sends it to your dashboard — no admin credentials required.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="text-white font-semibold mb-2">Is member data private and secure?</h3>
            <p className="text-[#8b949e] text-sm">Yes. We only store aggregated counts per role, never message content. Data is encrypted at rest and only accessible to you as the server admin.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="text-white font-semibold mb-2">Can I cancel my subscription anytime?</h3>
            <p className="text-[#8b949e] text-sm">Absolutely. Cancel from your billing portal at any time. You keep access until the end of your billing period with no questions asked.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#30363d] text-center py-8 text-[#8b949e] text-sm">
        © {new Date().getFullYear()} Discord Role Activity Tracker. All rights reserved.
      </footer>
    </main>
  );
}
