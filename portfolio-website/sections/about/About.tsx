
import Container from "@/components/layout/Container";
import SectionTitle from "@/components/layout/SectionTitle";

const About = () => {
  return (
    <section id="about" className="border-t border-white/10 py-24 md:py-32">
      <Container>
        <SectionTitle
          subtitle="About"
          title="Building reliable backend systems, from APIs to event-driven workflows."
        />

        <div className="grid gap-8 lg:grid-cols-[1.5fr_0.85fr] lg:items-start">
          <div className="space-y-6 text-lg leading-relaxed text-neutral-400">
            <p>
              I’m a Software Engineer at Tech Mahindra with 2+ years of
              experience developing and supporting enterprise backend
              integrations, REST APIs, asynchronous messaging, and production
              systems.
            </p>

            <p>
              My professional experience includes Java-based integration logic,
              Kafka and JMS/EMS messaging, database integrations, performance
              troubleshooting, and deployments on OpenShift. I’ve also
              participated in onsite migration and go-live activities in
              Jakarta, collaborating with engineering and business teams during
              critical production transitions.
            </p>

            <p>
              Alongside my professional work, I build Java backend systems
              using Spring Boot, PostgreSQL, and Kafka. My featured project is
              a distributed order management system that explores Saga
              orchestration, transactional outbox, idempotent message
              processing, compensation, and recovery from partial failures.
            </p>

            <p>
              I’m looking to grow as a Java backend engineer, building
              maintainable services and developing deeper expertise in
              distributed systems, reliability, and backend design.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-6">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-purple-300">
              Core focus
            </p>

            <div className="flex flex-wrap gap-2">
              {[
                "Java",
                "Spring Boot",
                "REST APIs",
                "Apache Kafka",
                "JMS / EMS",
                "PostgreSQL",
                "Microservices",
                "Saga Pattern",
                "Docker",
                "OpenShift",
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
