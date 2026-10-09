import Container from "@/components/layout/Container";
import FadeIn from "@/components/common/FadeIn";

const Hero = () => {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-28 md:pt-32">
      <div className="pointer-events-none absolute right-0 top-40 h-72 w-72 bg-purple-500/20 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-10 left-0 h-64 w-64 bg-violet-500/10 blur-[100px]" />

      <Container>
        <FadeIn>
          <div className="space-y-6">
            <p className="inline-flex items-center rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.25em] text-purple-300">
              Java Backend Engineer · Tech Mahindra
            </p>

            <h1 className="max-w-5xl text-5xl font-bold leading-[1.02] tracking-tight text-white md:text-7xl">
              Java backend engineer building reliable, event-driven systems.
            </h1>

            <p className="max-w-3xl text-lg leading-relaxed text-neutral-300 md:text-xl">
              2+ years of software engineering experience building REST APIs,
              working with Kafka and JMS messaging, and supporting production
              systems. I focus on failure handling, retries, idempotency, and
              reliable recovery in distributed workflows.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="#projects"
              className="rounded-xl bg-gradient-to-r from-purple-600 to-violet-500 px-6 py-3 font-medium text-white shadow-lg shadow-purple-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-purple-500/35"
            >
              View Featured Project
            </a>

            <a
              href="/Deepana_Balmoor_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-white/15 bg-white/[0.02] px-6 py-3 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-purple-500/40 hover:bg-white/[0.04]"
            >
              Download Resume
            </a>
          </div>

          
          <div className="grid gap-4 pt-10 sm:grid-cols-2 xl:grid-cols-4">
            <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent p-5 transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/30">
              <p className="text-3xl font-bold tracking-tight text-white md:text-4xl">
                55M
              </p>
              <h3 className="mt-3 font-semibold text-neutral-200">
                Subscribers Migrated
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-400">
                Migration scope across five production go-live batches.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent p-5 transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/30">
              <p className="text-3xl font-bold tracking-tight text-white md:text-4xl">
                98%
              </p>
              <h3 className="mt-3 font-semibold text-neutral-200">
                Revenue-Safe Switches
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-400">
                Traffic switches completed without revenue loss.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent p-5 transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/30">
              <p className="text-3xl font-bold tracking-tight text-white md:text-4xl">
                40%
              </p>
              <h3 className="mt-3 font-semibold text-neutral-200">
                Lower CPU Usage
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-400">
                Fewer CPU cores required after JVM tuning in performance testing.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent p-5 transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/30">
              <p className="text-3xl font-bold tracking-tight text-white md:text-4xl">
                30 Days
              </p>
              <h3 className="mt-3 font-semibold text-neutral-200">
                Hypercare
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-400">
                Post-go-live support completed in half the planned duration.
              </p>
            </div>
          </div>

        </FadeIn>
      </Container>
    </section>
  );
};

export default Hero;