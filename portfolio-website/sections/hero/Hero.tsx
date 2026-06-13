import Container from "@/components/layout/Container";
import FadeIn from "@/components/common/FadeIn";

const Hero = () => {
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center">
      <div className="absolute top-40 right-0 h-72 w-72 bg-purple-500/20 blur-[120px]" />

      <Container>
        <FadeIn>
        <div className="space-y-6">
          <p className="text-purple-400 uppercase tracking-[0.3em] text-sm">
            Associate Software Engineer • Tech Mahindra
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight max-w-4xl">
            Java Backend Engineer Building Enterprise-Scale Systems
          </h1>

          <p className="text-neutral-400 text-lg max-w-2xl leading-relaxed">
            Backend engineer with experience in enterprise integrations,
            asynchronous messaging, distributed workflows, and production
            deployments. Passionate about designing scalable systems using
            Spring Boot, microservices, and modern backend technologies.
          </p>
        </div>
        <div className="flex flex-wrap gap-4 pt-4">
          <a
            href="#projects"
            className="rounded-xl bg-purple-600 px-6 py-3 font-medium text-white transition-all duration-300 hover:scale-105 hover:bg-purple-500"
          >
            View Projects
          </a>

          <a
            href="/Deepana_Balmoor_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-white/20 px-6 py-3 font-medium transition-all duration-300 hover:scale-105 hover:bg-white/5"
          >
            Download Resume
          </a>
        </div>
        <div className="grid gap-4 pt-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/30 hover:bg-white/[0.04]">
            <p className="text-2xl mb-2">🏢</p>
            <h3 className="font-semibold">
              Enterprise Telecom Systems
            </h3>
            <p className="mt-2 text-sm text-neutral-500">
              Real-world enterprise integrations, deployments, and production support.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition hover:border-purple-500/30">
            <p className="text-2xl mb-2">🌏</p>
            <h3 className="font-semibold">
              International Onsite Experience
            </h3>
            <p className="mt-2 text-sm text-neutral-500">
              Supported pre-production rollout activities in Jakarta, Indonesia.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition hover:border-purple-500/30">
            <p className="text-2xl mb-2">⚡</p>
            <h3 className="font-semibold">
              Kafka & Saga Architecture
            </h3>
            <p className="mt-2 text-sm text-neutral-500">
              Designed event-driven workflows, compensation logic, and failure recovery.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition hover:border-purple-500/30">
            <p className="text-2xl mb-2">🚀</p>
            <h3 className="font-semibold">
              Docker & OpenShift
            </h3>
            <p className="mt-2 text-sm text-neutral-500">
              Containerized services and supported deployments on Red Hat OpenShift.
            </p>
          </div>
        </div>
        </FadeIn>
      </Container>
      
    </section>
  );
};

export default Hero;