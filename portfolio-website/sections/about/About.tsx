import Container from "@/components/layout/Container";
import SectionTitle from "@/components/layout/SectionTitle";

const About = () => {
  return (
    <section
      id="about"
      className="py-32 border-t border-white/10"
    >
      <Container>
        <SectionTitle
          subtitle="About"
          title="Engineering reliable backend systems for enterprise scale."
        />

        <div className="grid gap-8 lg:grid-cols-[1.5fr_0.85fr] lg:items-start">
          <div className="space-y-6 text-neutral-400 text-lg leading-relaxed">
            <p>
              I am a Software Engineer at Tech Mahindra working on enterprise-scale
              backend systems and integration platforms for Indosat Ooredoo
              Hutchison (IOH), Indonesia.
            </p>

            <p>
              My experience includes backend integrations, REST APIs, asynchronous
              messaging, PostgreSQL, Oracle, distributed caching, Docker, and
              OpenShift-based deployments. I have also represented the offshore
              engineering team during onsite migration and go-live activities in
              Jakarta.
            </p>

            <p>
              Outside of work, I enjoy building backend applications using Java,
              Spring Boot, Kafka, and microservices while exploring distributed
              systems and scalable architecture patterns.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-6">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-purple-300">
              Core focus
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                "Java",
                "REST APIs",
                "Messaging",
                "PostgreSQL",
                "OpenShift",
                "Distributed Systems",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-neutral-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;