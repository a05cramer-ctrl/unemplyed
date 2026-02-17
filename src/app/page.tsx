"use client";

import Image from "next/image";
import RainEffect from "@/components/RainEffect";
import SmokeEffect from "@/components/SmokeEffect";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <RainEffect />
      <SmokeEffect />

      <main className="relative z-10">
        {/* Hero Section - Picture First */}
        <section className="min-h-screen flex flex-col items-center justify-center px-6 py-16">
          <div className="max-w-4xl mx-auto w-full">
            {/* Main image - focal point */}
            <div className="relative w-full max-w-sm mx-auto aspect-[3/4] rounded-xl overflow-hidden border border-[#3b4a5c]/50 shadow-[0_0_60px_rgba(110,91,138,0.2)] mb-8">
              <Image
                src="/image.png"
                alt="Tired anonymous character in rainy city"
                fill
                className="object-contain"
                priority
                sizes="(max-width: 768px) 100vw, 384px"
              />
            </div>

            {/* Title & tagline centered below image */}
            <div className="text-center mb-8">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white text-glow mb-2">
                Unemplyed
              </h1>
              <p className="text-xl sm:text-2xl text-[#6e5b8a] font-medium mb-2">
                $JOBLESS
              </p>
              <p className="text-base sm:text-lg text-[#8b949e] italic">
                No Job. No Hope. Just $JOBLESS.
              </p>
            </div>

            {/* Primary buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
              <a
                href="#"
                className="btn-glow px-8 py-4 rounded-lg bg-[#6e5b8a]/80 text-white font-medium border border-[#6e5b8a]/50 hover:bg-[#6e5b8a] transition-colors text-center"
              >
                Buy $JOBLESS
              </a>
              <a
                href="#"
                className="px-8 py-4 rounded-lg bg-transparent text-[#8b949e] font-medium border border-[#3b4a5c] hover:border-[#6e5b8a]/50 hover:text-[#c9d1d9] transition-colors text-center"
              >
                Apply for Nothing
              </a>
            </div>

            {/* Twitter & Chart buttons */}
            <div className="flex gap-4 justify-center">
              <a
                href="#"
                className="px-8 py-4 rounded-lg bg-[#161b22] text-[#8b949e] font-medium text-lg border border-[#3b4a5c] hover:border-[#6e5b8a]/50 hover:text-[#c9d1d9] transition-colors flex items-center gap-3"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                Twitter
              </a>
              <a
                href="#"
                className="px-8 py-4 rounded-lg bg-[#161b22] text-[#8b949e] font-medium text-lg border border-[#3b4a5c] hover:border-[#6e5b8a]/50 hover:text-[#c9d1d9] transition-colors flex items-center gap-3"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 3v18h18" />
                  <path d="M18 9l-5 5-4-4-3 3" />
                </svg>
                Chart
              </a>
            </div>
          </div>
        </section>

        {/* Manifesto Section */}
        <section className="py-24 px-6 bg-[#161b22]/50">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">
              The Manifesto
            </h2>
            <p className="text-[#8b949e] leading-relaxed mb-4">
              We&apos;ve all been there. Refreshing job boards at 2 AM. Ghosted by
              recruiters. Watching our savings slowly evaporate like steam from
              a cheap cup of coffee. The economy doesn&apos;t care. HR doesn&apos;t
              care. But we care. Sort of.
            </p>
            <p className="text-[#8b949e] leading-relaxed mb-4">
              $JOBLESS isn&apos;t just a token. It&apos;s a monument to everyone
              who&apos;s ever been laid off, overlooked, or just too tired to
              pretend anymore. We&apos;re not promising lambos. We&apos;re not
              promising anything. But at least we&apos;re honest about it.
            </p>
            <p className="text-[#6e5b8a] italic">
              Together in unemployment. Alone in our rooms. Maybe moon. Probably
              not.
            </p>
          </div>
        </section>

        {/* Roadmap */}
        <section className="py-24 px-6 bg-[#161b22]/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-16">
              Roadmap
            </h2>
            <div className="space-y-8">
              {[
                {
                  phase: "Fired",
                  desc: "Launch. Get laid off from our previous project. Start this one at 3 AM.",
                },
                {
                  phase: "Broke",
                  desc: "Realize we have no marketing budget. Post memes instead. Hope it works.",
                },
                {
                  phase: "Coping",
                  desc: "Community grows. We're still unemployed but at least we have each other.",
                },
                {
                  phase: "Maybe Moon",
                  desc: "Either we make it or we don't. Either way, we tried. Sort of.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex gap-6 items-start p-6 rounded-lg bg-[#0d1117] border border-[#3b4a5c]/50"
                >
                  <span className="text-3xl font-bold text-[#6e5b8a] shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {item.phase}
                    </h3>
                    <p className="text-[#8b949e]">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* The Support Group */}
        <section className="py-24 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">
              The Support Group
            </h2>
            <p className="text-[#8b949e] mb-10">
              Join the rest of us. Share your rejection letters. Complain about
              rent. Maybe find a job. Probably not.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#"
                className="btn-glow px-6 py-3 rounded-lg bg-[#6e5b8a]/80 text-white font-medium border border-[#6e5b8a]/50 hover:bg-[#6e5b8a] transition-colors"
              >
                Twitter
              </a>
              <a
                href="#"
                className="btn-glow px-6 py-3 rounded-lg bg-[#6e5b8a]/80 text-white font-medium border border-[#6e5b8a]/50 hover:bg-[#6e5b8a] transition-colors"
              >
                Telegram
              </a>
              <a
                href="#"
                className="btn-glow px-6 py-3 rounded-lg bg-[#6e5b8a]/80 text-white font-medium border border-[#6e5b8a]/50 hover:bg-[#6e5b8a] transition-colors"
              >
                Discord
              </a>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
