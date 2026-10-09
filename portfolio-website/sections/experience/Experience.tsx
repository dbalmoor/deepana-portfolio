
import Container from "@/components/layout/Container";
import SectionTitle from "@/components/layout/SectionTitle";
import { experiences } from "@/constants/experience";
import FadeIn from "@/components/common/FadeIn";

const Experience = () => {
  const techMahindraExperience = experiences.find(
    (experience) => experience.company === "Tech Mahindra"
  );

  const onsiteExperience = experiences.find((experience) =>
    experience.company.includes("Indosat Ooredoo Hutchison")
  );

  if (!techMahindraExperience) return null;

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
          <article className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.035] to-transparent">
            {/* Main employment */}
            <div className="p-6 md:p-9">
              <div className="flex flex-col gap-4 border-b border-white/10 pb-7 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-purple-300">
                    {techMahindraExperience.company}
                  </p>

                  <h3 className="mt-3 text-2xl font-semibold text-white md:text-3xl">
                    {techMahindraExperience.role}
                  </h3>

                  <p className="mt-2 text-sm text-neutral-400">
                    {techMahindraExperience.location}
                  </p>
                </div>

                <span className="w-fit shrink-0 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-neutral-300">
                  {techMahindraExperience.duration}
                </span>
              </div>

              <div className="pt-7">
                <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-purple-300">
                  Backend & Integration Engineering
                </p>

                <ul className="space-y-5">
                  {techMahindraExperience.description.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-3 text-sm leading-7 text-neutral-300 md:text-base"
                    >
                      <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-purple-400" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Main role technologies */}
              <div className="mt-8 border-t border-white/10 pt-6">
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
                  Technologies & Tools
                </p>

                <div className="flex flex-wrap gap-2">
                  {techMahindraExperience.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-purple-500/20 bg-purple-500/[0.08] px-3 py-1.5 text-xs text-purple-200"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>

              {/* Recognition */}
              {techMahindraExperience.achievement && (
                <div className="mt-7 rounded-xl border border-yellow-500/20 bg-yellow-500/[0.04] p-4">
                  <p className="text-sm leading-6 text-neutral-300">
                    <span className="mr-2" aria-hidden="true">🏆</span>
                    {techMahindraExperience.achievement}
                  </p>
                </div>
              )}
            </div>

            {/* Separate onsite engagement */}
            {onsiteExperience && (
              <div className="border-t border-purple-500/20 bg-purple-500/[0.045] p-6 md:p-9">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-purple-300">
                      International Onsite Engagement
                    </p>

                    <h3 className="mt-3 text-xl font-semibold text-white md:text-2xl">
                      {onsiteExperience.role}
                    </h3>

                    <p className="mt-2 text-sm text-neutral-400">
                      {onsiteExperience.company} · {onsiteExperience.location}
                    </p>
                  </div>

                  <span className="w-fit shrink-0 rounded-full border border-purple-500/20 bg-purple-500/[0.08] px-4 py-2 text-sm text-purple-200">
                    {onsiteExperience.duration}
                  </span>
                </div>

                <ul className="mt-7 space-y-4">
                  {onsiteExperience.description.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-3 text-sm leading-7 text-neutral-300 md:text-base"
                    >
                      <span className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-purple-400" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-7 border-t border-white/10 pt-6">
                  <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
                    Onsite Focus
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {onsiteExperience.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-neutral-300"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </article>
        </FadeIn>
      </Container>
    </section>
  );
};

export default Experience;
