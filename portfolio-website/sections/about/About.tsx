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
          title="Engineering scalable backend systems."
        />

        <div className="max-w-4xl space-y-6 text-neutral-400 text-lg leading-relaxed">
          <p>
            I am an Associate Software Engineer at Tech Mahindra working on
            enterprise integration systems, distributed workflows, and backend
            application development.
          </p>

          <p>
            My primary focus areas include Spring Boot microservices,
            asynchronous messaging systems, REST APIs, distributed architecture,
            and scalable backend engineering.
          </p>

          <p>
            I enjoy building production-grade systems while continuously
            improving my system design, distributed systems, and full-stack
            engineering skills.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default About;