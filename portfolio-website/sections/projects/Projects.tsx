import Container from "@/components/layout/Container";
import SectionTitle from "@/components/layout/SectionTitle";
import { projects } from "@/constants/projects";
import { FiExternalLink } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-32 border-t border-white/10"
    >
      <Container>
        <SectionTitle
          subtitle="Projects"
          title="Backend & Full-Stack Engineering Projects"
        />

        <div className="grid gap-8 lg:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={index}
              className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 transition-all duration-300 hover:border-purple-500/20 hover:bg-white/[0.04]"
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-2xl font-semibold leading-tight">
                  {project.title}
                </h3>

                <div className="flex items-center gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    className="text-neutral-400 transition hover:text-white"
                  >
                    <FaGithub size={20} />
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    className="text-neutral-400 transition hover:text-white"
                  >
                    <FiExternalLink size={20} />
                  </a>
                </div>
              </div>

              {/* Description */}
              <p className="mt-6 text-neutral-400 leading-relaxed">
                {project.description}
              </p>

              {/* Highlights */}
              <ul className="mt-8 space-y-4">
                {project.highlights.map((highlight, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-neutral-300"
                  >
                    <span className="mt-2 h-2 w-2 rounded-full bg-purple-400" />

                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              {/* Technologies */}
              <div className="mt-8 flex flex-wrap gap-3">
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
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Projects;