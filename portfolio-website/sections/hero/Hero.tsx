import Container from "@/components/layout/Container";

const Hero = () => {
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center">
      <div className="absolute top-40 right-0 h-72 w-72 bg-purple-500/20 blur-[120px]" />

      <Container>
        <div className="space-y-6">
          <p className="text-neutral-400 uppercase tracking-[0.3em] text-sm">
            Backend Engineer
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight max-w-4xl">
            Building scalable backend systems and modern web applications.
          </h1>

          <p className="text-neutral-400 text-lg max-w-2xl leading-relaxed">
            Associate Software Engineer at Tech Mahindra specializing in
            distributed systems, enterprise integrations, Spring Boot, and
            scalable application development.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default Hero;