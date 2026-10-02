import Container from "@/components/layout/Container";
import FadeIn from "@/components/common/FadeIn";

const Hero = () => {
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center pt-28 md:pt-32">
      <div className="absolute top-40 right-0 h-72 w-72 bg-purple-500/20 blur-[120px]" />

      <Container>
        <FadeIn>
          <div className="space-y-6">
            <p className="inline-flex items-center rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.25em] text-purple-300">
              Software Engineer • Tech Mahindra
            </p>

            <h1 className="max-w-5xl text-5xl font-bold leading-[1.02] tracking-tight text-white md:text-7xl">
              Software Engineer | Java Backend | Distributed Systems
            </h1>

            <p className="max-w-3xl text-lg leading-relaxed text-neutral-300 md:text-xl">
              Building reliable backend systems, enterprise integrations, and
              high-volume telecom platforms. Experienced in distributed
              messaging, production migrations, OpenShift deployments, and
              large-scale subscriber onboarding.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="#projects"
              className="rounded-xl bg-gradient-to-r from-purple-600 to-violet-500 px-6 py-3 font-medium text-white shadow-lg shadow-purple-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-purple-500/35"
            >
              View Projects
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

          <div className="grid gap-4 pt-10 md:grid-cols-2 xl:grid-cols-5">
            <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.03] via-white/[0.02] to-transparent p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/30 hover:bg-white/[0.04]">
              <p className="mb-2 text-2xl">🏢</p>
              <h3 className="font-semibold leading-tight">Enterprise Telecom Systems</h3>
              <p className="mt-2 text-sm text-neutral-500">
                Supported large-scale telecom platforms, subscriber migrations,
                and production-critical business workflows.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.03] via-white/[0.02] to-transparent p-5 transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/30 hover:bg-white/[0.04]">
              <p className="mb-2 text-2xl">🌏</p>
              <h3 className="font-semibold leading-tight">International Onsite Experience</h3>
              <p className="mt-2 text-sm text-neutral-500">
                Represented the offshore engineering team during migration,
                go-live, and Hypercare activities at IOH Jakarta.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.03] via-white/[0.02] to-transparent p-5 transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/30 hover:bg-white/[0.04]">
              <p className="mb-2 text-2xl">📈</p>
              <h3 className="font-semibold leading-tight">Large Scale Migration</h3>
              <p className="mt-2 text-sm text-neutral-500">
                Contributed to migration and go-live activities involving 40+
                million subscribers across multiple migration waves.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.03] via-white/[0.02] to-transparent p-5 transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/30 hover:bg-white/[0.04]">
              <p className="mb-2 text-2xl">⚡</p>
              <h3 className="font-semibold leading-tight">JMS & Messaging Systems</h3>
              <p className="mt-2 text-sm text-neutral-500">
                Built asynchronous, event-driven workflows across enterprise
                integration layers and critical customer journeys.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.03] via-white/[0.02] to-transparent p-5 transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/30 hover:bg-white/[0.04]">
              <p className="mb-2 text-2xl">🚀</p>
              <h3 className="font-semibold leading-tight">Docker & OpenShift</h3>
              <p className="mt-2 text-sm text-neutral-500">
                Containerized services and supported deployments in production
                environments using Red Hat OpenShift.
              </p>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
};

export default Hero;