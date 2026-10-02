import Container from "@/components/layout/Container";
import SectionTitle from "@/components/layout/SectionTitle";
import { experiences } from "@/constants/experience";
import FadeIn from "@/components/common/FadeIn";

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
            <FadeIn key={index}>
              <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.03] via-white/[0.02] to-transparent p-8 md:p-10 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/20 hover:bg-white/[0.04]">
                <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.28em] text-purple-300/80">
                      {experience.company}
                    </p>
                    <h3 className="mt-3 text-2xl font-semibold md:text-3xl">
                      {experience.role}
                    </h3>
                  </div>

                  <div className="text-sm text-neutral-500 md:text-right">
                    <p>{experience.duration}</p>
                    <p>{experience.location}</p>
                  </div>
                </div>

                <ul className="mt-8 space-y-5 text-neutral-400 leading-relaxed">
                  {experience.description.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-purple-400" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

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

                {experience.achievement && (
                  <div className="mt-8 rounded-2xl border border-yellow-500/20 bg-yellow-500/5 p-5">
                    <p className="text-sm leading-relaxed text-yellow-300">
                      🏆 {experience.achievement}
                    </p>
                  </div>
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Experience;