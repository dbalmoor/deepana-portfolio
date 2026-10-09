import Container from "@/components/layout/Container";
import SectionTitle from "@/components/layout/SectionTitle";
import { experiences } from "@/constants/experience";
import FadeIn from "@/components/common/FadeIn";

const Experience = () => {
  const techMahindraExperience = experiences.find(
    (experience) => experience.company === "Tech Mahindra"
  );

  const onsiteExperience = experiences.find(
    (experience) => experience.company.includes("Indosat Ooredoo Hutchison")
  );

  if (!techMahindraExperience) {
    return null;
  }

  return (
    <section
      id="experience"
      className="border-t border-white/10 py-24 md:py-32"
    >
      <Container>
        <SectionTitle
          subtitle="Experience"
          title="Engineering in Production"
        />

        <FadeIn>
          <article className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.03] via-white/[0.02] to-transparent p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] transition-all duration-300 hover:border-purple-500/20 md:p-10">
            {/* Employment Header */}
            <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.28em] text-purple-300/80">
                  {techMahindraExperience.company}
                </p>

                <h3 className="mt-3 text-2xl font-semibold md:text-3xl">
                  {techMahindraExperience.role}
                </h3>

                <p className="mt-2 text-sm text-neutral-400">
                  {techMahindraExperience.location}
                </p>
              </div>

              <p className="mt-4 text-sm leading-6 text-neutral-400">
                DMP Consolidation — subscriber migration, production go-lives,
                traffic switching, and post-deployment hypercare.
              </p>

              <p className="text-sm text-neutral-500">
                {techMahindraExperience.duration}
              </p>
            </div>

            {/* Engineering Contributions */}
            <div className="mt-10">
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-purple-400">
                Backend & Integration Engineering
              </p>

              <ul className="space-y-4">
                {techMahindraExperience.description.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-3 leading-7 text-neutral-300"
                  >
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-purple-400" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Jakarta Onsite Engagement */}
            {onsiteExperience && (
              <div className="mt-10 rounded-2xl border border-purple-500/20 bg-purple-500/[0.04] p-5 md:p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-purple-300">
                  International Onsite Engagement
                </p>

                <h4 className="mt-3 text-xl font-semibold md:text-2xl">
                  {onsiteExperience.role}
                </h4>

                <div className="mt-2 flex flex-wrap items-center gap-2 text-sm text-neutral-400">
                  <span>{onsiteExperience.company}</span>
                  <span aria-hidden="true">·</span>
                  <span>{onsiteExperience.location}</span>
                </div>

                <p className="mt-3 text-sm font-medium text-purple-300">
                  {onsiteExperience.duration}
                </p>

                <ul className="mt-6 space-y-4">
                  {onsiteExperience.description.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-3 text-sm leading-7 text-neutral-300 md:text-base"
                    >
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-purple-400" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 border-t border-white/10 pt-5">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-neutral-500">
                    Onsite Responsibilities
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {onsiteExperience.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-neutral-300"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Technology Stack */}
            <div className="mt-10">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
                Technologies & Tools
              </p>

              <div className="flex flex-wrap gap-2">
                {techMahindraExperience.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-purple-500/20 bg-purple-500/10 px-3 py-2 text-sm text-purple-300"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>

            {/* Recognition */}
            {techMahindraExperience.achievement && (
              <div className="mt-8 rounded-2xl border border-yellow-500/20 bg-yellow-500/[0.04] p-5">
                <p className="text-sm leading-7 text-yellow-300">
                  🏆 {techMahindraExperience.achievement}
                </p>
              </div>
            )}
          </article>
        </FadeIn>
      </Container>
    </section>
  );
};

export default Experience;