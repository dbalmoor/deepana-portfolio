
import Container from "@/components/layout/Container";
import SectionTitle from "@/components/layout/SectionTitle";
import { projects } from "@/constants/projects";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import FadeIn from "@/components/common/FadeIn";
import Image from "next/image";

const detailSectionClass =
  "rounded-xl border border-white/10 bg-white/[0.02]";

const Projects = () => {
  const featuredProject = projects.find((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <section
      id="projects"
      className="border-t border-white/10 py-16 md:py-20"
    >
      <Container>
        <SectionTitle
          subtitle="Selected Work"
          title="Building Reliable Backend Systems"
        />

        {/* Featured Project */}
        {featuredProject && (
          <FadeIn>
            <article className="mb-12 overflow-hidden rounded-2xl border border-purple-500/20 bg-gradient-to-br from-purple-500/[0.07] via-white/[0.02] to-transparent">
              {/* Main two-column layout */}
              <div className="grid gap-6 p-5 md:p-7 lg:grid-cols-2 lg:items-center lg:gap-8">
                {/* Left: Project overview */}
                <div className="min-w-0">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-purple-400">
                    Featured Backend Project
                  </p>

                  <h3 className="text-2xl font-bold tracking-tight md:text-3xl">
                    {featuredProject.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-neutral-300 md:text-base">
                    {featuredProject.description}
                  </p>

                  {/* Problem summary */}
                  {featuredProject.problem && (
                    <div className="mt-5">
                      <h4 className="text-sm font-semibold text-white">
                        Problem Solved
                      </h4>
                      <p className="mt-2 text-sm leading-6 text-neutral-400">
                        {featuredProject.problem}
                      </p>
                    </div>
                  )}

                  {/* Technologies */}
                  {!!featuredProject.technologies?.length && (
                    <div className="mt-5">
                      <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-neutral-400">
                        Tech Stack
                      </h4>

                      <div className="flex flex-wrap gap-2">
                        {featuredProject.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-full border border-purple-500/20 bg-purple-500/10 px-3 py-1.5 text-xs text-purple-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  
              {/* Project links */}
              <div className="mt-6 flex flex-wrap gap-3">
                {featuredProject.github && (
                  <a
                    href={featuredProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-purple-600 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-purple-500"
                  >
                    <FaGithub size={17} />
                    View Source
                    <FiExternalLink size={13} />
                  </a>
                )}


                {featuredProject.designDoc && (
                  <a
                    href={featuredProject.designDoc}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-4 py-2.5 text-sm font-medium text-neutral-200 transition hover:border-purple-500/40 hover:bg-white/[0.04] hover:text-white"
                  >
                    Design Doc
                    <FiExternalLink size={14} />
                  </a>
                )}

                {featuredProject.live && featuredProject.live !== "#" && (
                  <a
                    href={featuredProject.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-4 py-2.5 text-sm font-medium text-white transition hover:border-purple-500/40 hover:bg-white/[0.04]"
                  >
                    Live Demo
                    <FiExternalLink size={14} />
                  </a>
                )}
              </div>
              </div>


                {/* Right: Architecture diagram */}
                {featuredProject.image && (
                  <div className="min-w-0 overflow-hidden rounded-xl border border-white/10 bg-black/30 p-3">
                    <div className="mb-3 flex items-center justify-between gap-3">
                      <h4 className="text-sm font-semibold text-neutral-200">
                        System Architecture
                      </h4>
                      <span className="text-xs text-neutral-500">
                        High-level design
                      </span>
                    </div>

                    <Image
                      src={featuredProject.image}
                      alt={`${featuredProject.title} architecture diagram`}
                      width={1400}
                      height={800}
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="h-auto w-full rounded-lg"
                    />

                    <p className="mt-3 text-xs leading-5 text-neutral-500">
                      Service communication, event-driven processing, and
                      workflow coordination.
                    </p>
                  </div>
                )}
              </div>

              {/* Expandable technical details */}
              <div className="border-t border-white/10 px-5 py-4 md:px-7">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-neutral-500">
                  Explore the Engineering
                </p>

                <div className="space-y-3">
                  {/* Architecture details */}
                  {!!featuredProject.architecture?.length && (
                    <details open className={detailSectionClass}>
                      <summary className="cursor-pointer list-none px-4 py-3 text-sm font-medium text-neutral-200 marker:hidden transition hover:text-purple-300">
                        <span className="flex items-center justify-between gap-3">
                          Architecture & System Design
                          <span className="text-lg text-purple-400">+</span>
                        </span>
                      </summary>

                      <div className="border-t border-white/10 p-4">
                        <div className="grid gap-3 sm:grid-cols-2">
                          {featuredProject.architecture.map((item) => (
                            <div
                              key={item}
                              className="rounded-lg border border-white/10 bg-black/20 p-3 text-sm leading-6 text-neutral-300"
                            >
                              {item}
                            </div>
                          ))}
                        </div>
                      </div>
                    </details>
                  )}

                  {/* Saga workflow diagram */}
                  {featuredProject.workflowImage && (
                    <details className={detailSectionClass}>
                      <summary className="cursor-pointer list-none px-4 py-3 text-sm font-medium text-neutral-200 marker:hidden transition hover:text-purple-300">
                        <span className="flex items-center justify-between gap-3">
                          Saga Workflow & Compensation
                          <span className="text-lg text-purple-400">+</span>
                        </span>
                      </summary>

                      <div className="border-t border-white/10 p-4">
                        <div className="overflow-hidden rounded-lg border border-white/10 bg-black/30 p-2">
                          <Image
                            src={featuredProject.workflowImage}
                            alt={`${featuredProject.title} Saga success and compensation workflows`}
                            width={1800}
                            height={720}
                            sizes="(max-width: 768px) 100vw, 1100px"
                            className="h-auto w-full rounded-lg"
                          />
                        </div>

                        <p className="mt-3 text-sm leading-6 text-neutral-400">
                          Saga success path and payment-failure compensation
                          flow.
                        </p>
                      </div>
                    </details>
                  )}

                  {/* Reliability engineering */}
                  {!!featuredProject.engineeringChallenges?.length && (
                    <details className={detailSectionClass}>
                      <summary className="cursor-pointer list-none px-4 py-3 text-sm font-medium text-neutral-200 marker:hidden transition hover:text-purple-300">
                        <span className="flex items-center justify-between gap-3">
                          Reliability & Failure Recovery
                          <span className="text-lg text-purple-400">+</span>
                        </span>
                      </summary>

                      <div className="border-t border-white/10 p-4">
                        <div className="grid gap-3 md:grid-cols-2">
                          {featuredProject.engineeringChallenges.map(
                            (challenge) => (
                              <div
                                key={challenge}
                                className="rounded-lg border border-white/10 bg-black/20 p-4 text-sm leading-6 text-neutral-300"
                              >
                                <span className="mr-2 text-purple-400">
                                  •
                                </span>
                                {challenge}
                              </div>
                            ),
                          )}
                        </div>
                      </div>
                    </details>
                  )}

                  {/* Design decisions */}
                  {!!featuredProject.designDecisions?.length && (
                    <details className={detailSectionClass}>
                      <summary className="cursor-pointer list-none px-4 py-3 text-sm font-medium text-neutral-200 marker:hidden transition hover:text-purple-300">
                        <span className="flex items-center justify-between gap-3">
                          Design Decisions & Trade-offs
                          <span className="text-lg text-purple-400">+</span>
                        </span>
                      </summary>

                      <div className="grid gap-3 border-t border-white/10 p-4 md:grid-cols-2">
                        {featuredProject.designDecisions.map((decision) => (
                          <article
                            key={decision.title}
                            className="rounded-lg border border-white/10 bg-black/20 p-4"
                          >
                            <h5 className="text-sm font-semibold text-white">
                              {decision.title}
                            </h5>
                            <p className="mt-2 text-sm leading-6 text-neutral-400">
                              {decision.description}
                            </p>
                          </article>
                        ))}
                      </div>
                    </details>
                  )}

                  {/* Key implementation features */}
                  {!!featuredProject.highlights?.length && (
                    <details className={detailSectionClass}>
                      <summary className="cursor-pointer list-none px-4 py-3 text-sm font-medium text-neutral-200 marker:hidden transition hover:text-purple-300">
                        <span className="flex items-center justify-between gap-3">
                          Key Engineering Features
                          <span className="text-lg text-purple-400">+</span>
                        </span>
                      </summary>

                      <ul className="grid gap-3 border-t border-white/10 p-4 md:grid-cols-2">
                        {featuredProject.highlights.map((highlight) => (
                          <li
                            key={highlight}
                            className="flex items-start gap-3 text-sm leading-6 text-neutral-300"
                          >
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-purple-400" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </details>
                  )}

                  {/* Current limitations */}
                  {!!featuredProject.limitations?.length && (
                    <details className={detailSectionClass}>
                      <summary className="cursor-pointer list-none px-4 py-3 text-sm font-medium text-neutral-200 marker:hidden transition hover:text-amber-300">
                        <span className="flex items-center justify-between gap-3">
                          Current Scope & Limitations
                          <span className="text-lg text-amber-300">+</span>
                        </span>
                      </summary>

                      <div className="border-t border-white/10 p-4">
                        <p className="mb-3 text-sm leading-6 text-neutral-400">
                          Capabilities that remain planned or are not yet
                          implemented.
                        </p>

                        <ul className="space-y-3">
                          {featuredProject.limitations.map((limitation) => (
                            <li
                              key={limitation}
                              className="flex items-start gap-3 text-sm leading-6 text-neutral-300"
                            >
                              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-300" />
                              <span>{limitation}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </details>
                  )}
                </div>
              </div>
            </article>
          </FadeIn>
        )}

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <div>
            <div className="mb-6">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-purple-400">
                More Work
              </p>
              <h3 className="text-2xl font-semibold md:text-3xl">
                Other Projects
              </h3>
              <p className="mt-2 text-sm text-neutral-400">
                More applications demonstrating development skills across
                different technologies.
              </p>
            </div>

            <div className="grid gap-4 lg:grid-cols-2">
              {otherProjects.map((project) => (
                <FadeIn key={project.title}>
                  <article className="h-full rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/25 hover:bg-white/[0.04] md:p-6">
                    <h4 className="text-lg font-semibold md:text-xl">
                      {project.title}
                    </h4>

                    <p className="mt-3 text-sm leading-6 text-neutral-400">
                      {project.description}
                    </p>

                    {!!project.highlights?.length && (
                      <ul className="mt-4 space-y-2">
                        {project.highlights.slice(0, 3).map((highlight) => (
                          <li
                            key={highlight}
                            className="flex items-start gap-2 text-sm leading-6 text-neutral-300"
                          >
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-purple-400" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {!!project.technologies?.length && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-xs text-neutral-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}

                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-purple-300 transition hover:text-purple-200"
                      >
                        <FaGithub size={16} />
                        View Source
                        <FiExternalLink size={13} />
                      </a>
                    )}
                  </article>
                </FadeIn>
              ))}
            </div>
          </div>
        )}
      </Container>
    </section>
  );
};

export default Projects;
