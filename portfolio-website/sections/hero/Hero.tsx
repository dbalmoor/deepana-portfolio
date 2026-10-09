
import Image from "next/image";
import Container from "@/components/layout/Container";
import FadeIn from "@/components/common/FadeIn";

const achievements = [
  {
    value: "55M",
    title: "Subscribers Migrated",
    description: "Migration scope across five production go-live batches.",
  },
  {
    value: "98%",
    title: "Revenue-Safe Switches",
    description: "Traffic switches completed without revenue loss.",
  },
  {
    value: "40%",
    title: "Lower CPU Usage",
    description: "Fewer CPU cores required after JVM tuning.",
  },
  {
    value: "30 Days",
    title: "Hypercare",
    description: "Post-go-live support completed in half the planned duration.",
  },
];

const Hero = () => {
  return (
    <section className="relative isolate flex min-h-[680px] items-center overflow-hidden bg-[#09090f] pb-10 pt-24 md:min-h-[720px] md:pt-28">
      {/* Photo — full-width on mobile, right-aligned on desktop */}
      <div className="absolute inset-y-0 right-0 -z-20 w-full overflow-hidden md:w-[62%]">
        <Image
          src="/images/hero-portrait.png"
          alt=""
          fill
          priority
          sizes="(max-width: 768px) 100vw, 58vw"
          className="object-cover object-[72%_center] md:object-[72%_center]"
        />
      </div>

      {/* Smoothly blend the portrait into the background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#09090f] via-[#09090f]/95 via-[35%] via-[#09090f]/70 via-[48%] via-[#09090f]/25 via-[62%] to-transparent" />

      {/* Stronger mobile overlay to protect text readability */}
      <div className="absolute inset-0 -z-10 bg-[#09090f]/55 md:bg-black/10" />

      {/* Bottom fade */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#09090f] via-[#09090f]/20 to-[#09090f]/35 md:via-transparent md:to-[#09090f]/20" />

      {/* Purple ambient glow */}
      <div className="pointer-events-none absolute left-[-8rem] top-1/3 -z-10 h-80 w-80 rounded-full bg-purple-600/15 blur-[120px]" />

      <div className="relative z-10 mx-auto w-full max-w-[1500px] px-5 md:px-10 lg:px-12">
        <FadeIn>
          <div className="w-full">
            <div className="max-w-3xl">
              <p className="mb-6 inline-flex items-center rounded-full border border-purple-400/30 bg-black/40 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.2em] text-purple-200 backdrop-blur-md sm:text-xs">
                Java Backend Engineer · Tech Mahindra
              </p>

              <h1 className="max-w-3xl text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl">
                Java backend engineer building{" "}
                <span className="bg-gradient-to-r from-purple-300 to-violet-400 bg-clip-text text-transparent">
                  reliable, event-driven systems.
                </span>
              </h1>

              <p className="mt-4 max-w-2xl text-base leading-relaxed text-neutral-100 sm:text-lg md:text-xl">
                2+ years of software engineering experience building REST APIs,
                working with Kafka and JMS messaging, and supporting production
                systems. I focus on failure handling, retries, idempotency, and
                reliable recovery in distributed workflows.
              </p>

              {/* Stack buttons on mobile */}
              <div className="flex flex-col gap-3 pt-6 sm:flex-row sm:flex-wrap sm:gap-4">
                <a
                  href="#projects"
                  className="inline-flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-purple-600 to-violet-500 px-6 py-3 font-medium text-white shadow-lg shadow-purple-900/30 transition duration-300 hover:-translate-y-0.5 hover:shadow-purple-500/30 sm:w-auto"
                >
                  View Featured Project
                </a>

                <a
                  href="/Deepana_Balmoor_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center rounded-xl border border-white/20 bg-black/40 px-6 py-3 font-medium text-white backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:border-purple-400/50 hover:bg-white/10 sm:w-auto"
                >
                  Download Resume
                </a>
              </div>
            </div>

            {/* Two columns on mobile, four on extra-large screens */}
            <div className="mt-6 grid max-w-[760px] grid-cols-2 gap-3 xl:grid-cols-4">
              {achievements.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-white/10 bg-black/60 p-3 backdrop-blur-lg transition duration-300 hover:-translate-y-1 hover:border-purple-400/40 hover:bg-black/70 sm:p-4"
                >
                  <p className="text-2xl font-bold tracking-tight text-purple-300 md:text-3xl">
                    {item.value}
                  </p>

                  <h2 className="mt-2 text-sm font-semibold text-white">
                    {item.title}
                  </h2>

                  <p className="mt-1 text-xs leading-relaxed text-neutral-200">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Hero;
