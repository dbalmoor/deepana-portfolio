import Container from "@/components/layout/Container";
import SectionTitle from "@/components/layout/SectionTitle";
import { experiences } from "@/constants/experience";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-32 border-t border-white/10"
    >
      <Container>
        <SectionTitle
          subtitle="Experience"
          title="Enterprise Engineering Experience"
        />

        <div className="space-y-12">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 md:p-10 transition-all duration-300 hover:border-purple-500/20 hover:bg-white/[0.04]"
            >
              {/* Top Section */}
              <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                <div>
                  <h3 className="text-2xl md:text-3xl font-semibold">
                    {experience.role}
                  </h3>

                  <p className="mt-3 text-lg text-purple-400">
                    {experience.company}
                  </p>
                </div>

                <div className="text-sm text-neutral-500 md:text-right">
                  <p>{experience.duration}</p>
                  <p>{experience.location}</p>
                </div>
              </div>

              {/* Description */}
              <ul className="mt-8 space-y-5 text-neutral-400 leading-relaxed">
                {experience.description.map((point, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3"
                  >
                    <span className="mt-2 h-2 w-2 rounded-full bg-purple-400" />

                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {/* Technologies */}
              <div className="mt-10 flex flex-wrap gap-3">
                {experience.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="rounded-full border border-purple-500/20 bg-purple-500/10 px-4 py-2 text-sm text-purple-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Achievement */}
              {experience.achievement && (
                <div className="mt-8 rounded-2xl border border-yellow-500/20 bg-yellow-500/5 p-5">
                  <p className="text-sm leading-relaxed text-yellow-300">
                    🏆 {experience.achievement}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Experience;