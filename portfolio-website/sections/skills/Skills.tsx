import Container from "@/components/layout/Container";
import SectionTitle from "@/components/layout/SectionTitle";

const skills = [
  "Java",
  "Spring Boot",
  "Microservices",
  "Kafka",
  "JMS",
  "PostgreSQL",
  "Redis",
  "React",
  "Next.js",
  "Docker",
  "System Design",
  "REST APIs",
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-32 border-t border-white/10"
    >
      <Container>
        <SectionTitle
          subtitle="Skills"
          title="Technologies & Engineering Focus"
        />

        <div className="flex flex-wrap gap-4">
          {skills.map((skill) => (
            <div
              key={skill}
              className="px-5 py-3 rounded-full border border-white/10 bg-white/5 text-neutral-300"
            >
              {skill}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Skills;