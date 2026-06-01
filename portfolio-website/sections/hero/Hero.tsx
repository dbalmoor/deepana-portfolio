import Container from "@/components/layout/Container";

const Hero = () => {
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center">
      <div className="absolute top-40 right-0 h-72 w-72 bg-purple-500/20 blur-[120px]" />

      <Container>
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
            className="rounded-xl bg-purple-600 px-6 py-3 font-medium text-white transition hover:bg-purple-700"
          >
            View Projects
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-white/20 px-6 py-3 font-medium transition hover:bg-white/5"
          >
            Download Resume
          </a>
        </div>
        <div className="flex flex-wrap gap-10 pt-10">
          <div>
            <p className="text-3xl font-bold">1+</p>
            <p className="text-neutral-500">Years Experience</p>
          </div>

          <div>
            <p className="text-3xl font-bold">3+</p>
            <p className="text-neutral-500">Major Projects</p>
          </div>

          <div>
            <p className="text-3xl font-bold">1</p>
            <p className="text-neutral-500">International Onsite</p>
          </div>
        </div>
      </Container>
      
    </section>
  );
};

export default Hero;