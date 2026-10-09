import Container from "@/components/layout/Container";
import SectionTitle from "@/components/layout/SectionTitle";

const skillGroups = [
  {
    title: "Languages & Frameworks",
    description: "Backend application development",
    skills: [
      "Java",
      "Spring Boot",
      "Spring Data JPA",
      "Maven",
      "JUnit",
      "Mockito",
    ],
  },
  {
    title: "Messaging & Data",
    description: "Asynchronous processing and persistence",
    skills: [
      "Apache Kafka",
      "JMS / EMS",
      "PostgreSQL",
      "Oracle",
      "SQL",
    ],
  },
  {
    title: "Backend Architecture",
    description: "Service design and distributed workflows",
    skills: [
      "REST API Design",
      "Microservices",
      "Saga Pattern",
      "Idempotency",
      "Event-Driven Architecture",
    ],
  },
  {
    title: "DevOps & Observability",
    description: "Deployment and production troubleshooting",
    skills: [
      "Docker",
      "OpenShift",
      "Git",
      "Elastic",
      "Grafana",
    ],
  },
  {
    title: "Enterprise Integration",
    description: "Integration platforms and API management",
    skills: [
      "TIBCO BWCE",
      "TIBCO Flogo",
      "Mashery",
      "SOAP APIs",
    ],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="border-t border-white/10 py-24 md:py-32"
    >
      <Container>
        <SectionTitle
          subtitle="Technical Skills"
          title="Backend Engineering Toolkit"
        />

        <div className="grid gap-5 md:grid-cols-2">
          {skillGroups.map((group) => (
            <article
              key={group.title}
              className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-all duration-300 hover:border-purple-500/20 hover:bg-white/[0.04] md:p-7"
            >
              <h3 className="text-lg font-semibold text-white">
                {group.title}
              </h3>

              <p className="mt-2 text-sm text-neutral-500">
                {group.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-purple-500/20 bg-purple-500/[0.08] px-3 py-2 text-sm text-neutral-300 transition-colors hover:border-purple-500/40 hover:text-purple-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Skills;