import Container from "@/components/layout/Container";
import SectionTitle from "@/components/layout/SectionTitle";
import { projects } from "@/constants/projects";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import FadeIn from "@/components/common/FadeIn";
import Image from "next/image";

const Projects = () => {
  const featuredProject = projects.find(
    (project) => project.featured
  );

  const otherProjects = projects.filter(
    (project) => !project.featured
  );

  return (
    <section
      id="projects"
      className="py-32 border-t border-white/10"
    >
      <Container>
        <SectionTitle
          subtitle="Projects"
          title="Engineering Projects"
        />

        {/* Featured Project */}
        {featuredProject && (
        <FadeIn>
          <div className="mb-20 rounded-3xl border border-purple-500/20 bg-white/[0.02] p-8 md:p-10">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-purple-400">
              ⭐ Featured Project
            </p>

            <h3 className="text-3xl md:text-5xl font-bold">
              {featuredProject.title}
            </h3>

            <p className="mt-6 max-w-4xl text-lg leading-relaxed text-neutral-400">
              {featuredProject.description}
            </p>

            {/* Architecture Diagram */}
            {featuredProject.image && (
              <div className="mt-10 overflow-hidden rounded-2xl border border-white/10">
                <Image
                  src={featuredProject.image}
                  alt={featuredProject.title}
                  width={1400}
                  height={800}
                  className="w-full"
                />
              </div>
            )}

            {/* Problem Statement */}
            <div className="mt-10">
              <h4 className="mb-4 text-2xl font-semibold">
                Problem Statement
              </h4>

              <p className="leading-relaxed text-neutral-400">
                {featuredProject.problem}
              </p>
            </div>

            {/* Architecture Highlights */}
            <div className="mt-10">
              <h4 className="mb-4 text-2xl font-semibold">
                Architecture Highlights
              </h4>

              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {featuredProject.architecture?.map(
                  (item: string, index: number) => (
                    <div
                      key={index}
                      className="rounded-xl border border-white/10 bg-white/[0.02] p-4 text-center"
                    >
                      {item}
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Engineering Challenges */}
            <div className="mt-10">
              <h4 className="mb-4 text-2xl font-semibold">
                Engineering Challenges Solved
              </h4>

              <div className="grid gap-4 md:grid-cols-2">
                {featuredProject.engineeringChallenges?.map(
                  (challenge: string, index: number) => (
                    <div
                      key={index}
                      className="rounded-xl border border-white/10 bg-white/[0.02] p-5"
                    >
                      <p className="text-neutral-300 leading-relaxed">
                        {challenge}
                      </p>
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Engineering Features */}
            <div className="mt-10">
              <h4 className="mb-4 text-2xl font-semibold">
                Engineering Features
              </h4>

              <ul className="grid gap-4 md:grid-cols-2">
                {featuredProject.highlights.map(
                  (highlight, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 rounded-xl border border-white/10 p-4"
                    >
                      <span className="mt-2 h-2 w-2 rounded-full bg-purple-400" />

                      <span className="text-neutral-300">
                        {highlight}
                      </span>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Tech Stack */}
            <div className="mt-10">
              <h4 className="mb-4 text-2xl font-semibold">
                Tech Stack
              </h4>

              <div className="flex flex-wrap gap-3">
                {featuredProject.technologies.map(
                  (tech, index) => (
                    <span
                      key={index}
                      className="rounded-full border border-purple-500/20 bg-purple-500/10 px-4 py-2 text-sm text-purple-300"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-10 flex gap-4">
              <a
                href={featuredProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-xl bg-purple-600 px-5 py-3 text-white transition hover:bg-purple-500"
              >
                <FaGithub />
                View Source
              </a>

              {featuredProject.live !== "#" && (
                <a
                  href={featuredProject.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-xl border border-white/10 px-5 py-3 transition hover:bg-white/5"
                >
                  <FiExternalLink />
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </FadeIn>
        )}

        {/* Other Projects */}
        <h3 className="mb-8 text-2xl font-semibold">
          Other Projects
        </h3>

        <div className="grid gap-8 lg:grid-cols-2">
          {otherProjects.map((project, index) => (
          <FadeIn key={index}>
            <div
              className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/20 hover:bg-white/[0.04]"
            >
              <h3 className="text-2xl font-semibold">
                {project.title}
              </h3>

              <p className="mt-4 text-neutral-400 leading-relaxed">
                {project.description}
              </p>

              <ul className="mt-6 space-y-3">
                {project.highlights.map((highlight, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3"
                  >
                    <span className="mt-2 h-2 w-2 rounded-full bg-purple-400" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-3">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="rounded-full border border-purple-500/20 bg-purple-500/10 px-4 py-2 text-sm text-purple-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Projects;