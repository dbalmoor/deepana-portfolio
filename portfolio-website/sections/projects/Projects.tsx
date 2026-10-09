import Container from "@/components/layout/Container";
import SectionTitle from "@/components/layout/SectionTitle";
import { projects } from "@/constants/projects";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import FadeIn from "@/components/common/FadeIn";
import Image from "next/image";

const Projects = () => {
  const featuredProject = projects.find((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <section id="projects" className="border-t border-white/10 py-24 md:py-32">
      <Container>
        <SectionTitle
          subtitle="Selected Work"
          title="Building Reliable Backend Systems"
        />

        {/* Featured Project */}
        {featuredProject && (
          <FadeIn>
            <article className="mb-20 overflow-hidden rounded-3xl border border-purple-500/20 bg-gradient-to-br from-purple-500/[0.06] via-white/[0.02] to-transparent">
              <div className="p-6 md:p-10">
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-purple-400">
                  Featured Backend Project
                </p>

                <h3 className="max-w-4xl text-3xl font-bold tracking-tight md:text-5xl">
                  {featuredProject.title}
                </h3>

                <p className="mt-6 max-w-4xl text-base leading-8 text-neutral-300 md:text-lg">
                  {featuredProject.description}
                </p>

                {/* Architecture Diagram */}
                {featuredProject.image && (
                  <div className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-black/40 p-2 md:p-4">
                    <Image
                      src={featuredProject.image}
                      alt={`${featuredProject.title} architecture diagram`}
                      width={1400}
                      height={800}
                      sizes="(max-width: 768px) 100vw, 1200px"
                      className="h-auto w-full rounded-xl"
                    />
                    <p className="px-2 pb-2 pt-3 text-sm text-neutral-500">
                      Each service owns its PostgreSQL database and publishes events through
                      a transactional outbox, with the Saga orchestrator coordinating the workflow.
                    </p>
                  </div>
                )}

                
                {featuredProject.workflowImage && (
                  <div className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-black/40 p-2 md:p-4">
                    <Image
                      src={featuredProject.workflowImage}
                      alt={`${featuredProject.title} Saga success and compensation workflows`}
                      width={1800}
                      height={720}
                      sizes="(max-width: 768px) 100vw, 1200px"
                      className="h-auto w-full rounded-xl"
                    />
                    <p className="px-2 pb-2 pt-3 text-sm text-neutral-500">
                      Saga success path and payment-failure compensation flow.
                    </p>
                  </div>
                )}


                {/* Problem Statement */}
                {featuredProject.problem && (
                  <div className="mt-12 max-w-4xl">
                    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-purple-400">
                      The Problem
                    </p>
                    <h4 className="text-2xl font-semibold">
                      Consistency across distributed services
                    </h4>
                    <p className="mt-4 leading-8 text-neutral-400">
                      {featuredProject.problem}
                    </p>
                  </div>
                )}

                {/* Architecture */}
                {!!featuredProject.architecture?.length && (
                  <div className="mt-12">
                    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-purple-400">
                      System Design
                    </p>
                    <h4 className="mb-5 text-2xl font-semibold">
                      Architecture Highlights
                    </h4>

                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                      {featuredProject.architecture.map((item) => (
                        <div
                          key={item}
                          className="rounded-2xl border border-white/10 bg-black/20 p-5"
                        >
                          <p className="text-sm leading-7 text-neutral-300">
                            {item}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Engineering Challenges */}
                {!!featuredProject.engineeringChallenges?.length && (
                  <div className="mt-12">
                    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-purple-400">
                      Reliability Engineering
                    </p>
                    <h4 className="mb-5 text-2xl font-semibold">
                      Handling Failure Scenarios
                    </h4>

                    <div className="grid gap-4 md:grid-cols-2">
                      {featuredProject.engineeringChallenges.map(
                        (challenge) => (
                          <div
                            key={challenge}
                            className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition-colors hover:border-purple-500/20"
                          >
                            <p className="leading-7 text-neutral-300">
                              {challenge}
                            </p>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                )}

                {/* Design Decisions */}
                {!!featuredProject.designDecisions?.length && (
                  <div className="mt-12">
                    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-purple-400">
                      Trade-offs & Decisions
                    </p>

                    <h4 className="mb-5 text-2xl font-semibold">
                      Why I Designed It This Way
                    </h4>

                    <div className="grid gap-4 md:grid-cols-2">
                      {featuredProject.designDecisions.map((decision) => (
                        <article
                          key={decision.title}
                          className="rounded-2xl border border-white/10 bg-white/[0.02] p-5"
                        >
                          <h5 className="font-semibold text-white">
                            {decision.title}
                          </h5>

                          <p className="mt-3 text-sm leading-7 text-neutral-400">
                            {decision.description}
                          </p>
                        </article>
                      ))}
                    </div>
                  </div>
                )}

                {/* Key Features */}
                {!!featuredProject.highlights?.length && (
                  <div className="mt-12">
                    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-purple-400">
                      Implementation
                    </p>
                    <h4 className="mb-5 text-2xl font-semibold">
                      Key Engineering Features
                    </h4>

                    <ul className="grid gap-3 md:grid-cols-2">
                      {featuredProject.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="flex items-start gap-3 rounded-xl border border-white/10 p-4"
                        >
                          <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-purple-400" />
                          <span className="text-sm leading-7 text-neutral-300">
                            {highlight}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Tech Stack */}
                {!!featuredProject.technologies?.length && (
                  <div className="mt-12">
                    <h4 className="mb-4 text-lg font-semibold">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {featuredProject.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-purple-500/20 bg-purple-500/10 px-3 py-2 text-sm text-purple-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Known Limitations */}
                {!!featuredProject.limitations?.length && (
                  <div className="mt-12 rounded-2xl border border-amber-500/20 bg-amber-500/[0.03] p-5 md:p-6">
                    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-amber-300">
                      Current Scope
                    </p>

                    <h4 className="text-xl font-semibold">
                      What’s Not Built Yet
                    </h4>

                    <p className="mt-2 text-sm leading-7 text-neutral-400">
                      The current implementation has a defined scope. The following capabilities
                      remain planned or are not yet implemented.
                    </p>

                    <ul className="mt-4 space-y-3">
                      {featuredProject.limitations.map((limitation) => (
                        <li
                          key={limitation}
                          className="flex items-start gap-3 text-sm leading-7 text-neutral-300"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-300" />
                          <span>{limitation}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Project Links */}
                <div className="mt-10 flex flex-wrap gap-3">
                  {featuredProject.github && (
                    <a
                      href={featuredProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl bg-purple-600 px-5 py-3 font-medium text-white transition hover:-translate-y-0.5 hover:bg-purple-500"
                    >
                      <FaGithub size={18} />
                      View Source
                      <FiExternalLink size={14} />
                    </a>
                  )}

                  {featuredProject.live &&
                    featuredProject.live !== "#" && (
                      <a
                        href={featuredProject.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-5 py-3 font-medium text-white transition hover:-translate-y-0.5 hover:border-purple-500/40 hover:bg-white/[0.04]"
                      >
                        Live Demo
                        <FiExternalLink size={16} />
                      </a>
                    )}
                </div>
              </div>
            </article>
          </FadeIn>
        )}

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <div>
            <div className="mb-8">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-purple-400">
                More Work
              </p>
              <h3 className="text-2xl font-semibold md:text-3xl">
                Other Projects
              </h3>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              {otherProjects.map((project) => (
                <FadeIn key={project.title}>
                  <article className="h-full rounded-3xl border border-white/10 bg-white/[0.02] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/20 hover:bg-white/[0.04] md:p-8">
                    <h4 className="text-xl font-semibold md:text-2xl">
                      {project.title}
                    </h4>

                    <p className="mt-4 leading-7 text-neutral-400">
                      {project.description}
                    </p>

                    {!!project.highlights?.length && (
                      <ul className="mt-6 space-y-3">
                        {project.highlights.map((highlight) => (
                          <li
                            key={highlight}
                            className="flex items-start gap-3 text-sm leading-7 text-neutral-300"
                          >
                            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-purple-400" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {!!project.technologies?.length && (
                      <div className="mt-6 flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-neutral-300"
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
                        className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-purple-300 transition hover:text-purple-200"
                      >
                        <FaGithub size={17} />
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