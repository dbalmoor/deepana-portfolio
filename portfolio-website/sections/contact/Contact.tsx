import Container from "@/components/layout/Container";
import SectionTitle from "@/components/layout/SectionTitle";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FiArrowUpRight } from "react-icons/fi";

const Contact = () => {
  return (
    <section
      id="contact"
      className="border-t border-white/10 py-24 md:py-32"
    >
      <Container>
        <SectionTitle
          subtitle="Contact"
          title="Let's build reliable backend systems."
        />

        <div className="max-w-3xl rounded-3xl border border-white/10 bg-gradient-to-br from-purple-500/[0.05] via-white/[0.02] to-transparent p-6 md:p-10">
          <p className="text-lg leading-relaxed text-neutral-300">
            I’m a Java backend engineer focused on Spring Boot, REST APIs,
            event-driven systems, and distributed workflows. I’m looking for
            an SDE1 or backend engineering role where I can build reliable
            services, solve challenging engineering problems, and continue
            growing as an engineer.
          </p>

          <p className="mt-5 text-sm text-neutral-400">
            Open to Java backend opportunities in Hyderabad or remote.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://github.com/dbalmoor"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit GitHub profile"
              className="inline-flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4 transition hover:-translate-y-0.5 hover:border-purple-500/30 hover:bg-white/[0.06]"
            >
              <FaGithub size={21} />
              <span>GitHub</span>
              <FiArrowUpRight size={16} />
            </a>

            <a
              href="https://www.linkedin.com/in/deepanabalmoor/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit LinkedIn profile"
              className="inline-flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4 transition hover:-translate-y-0.5 hover:border-purple-500/30 hover:bg-white/[0.06]"
            >
              <FaLinkedin size={21} />
              <span>LinkedIn</span>
              <FiArrowUpRight size={16} />
            </a>

            <a
              href="mailto:deepanabalmoor7@gmail.com"
              aria-label="Send an email"
              className="inline-flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4 transition hover:-translate-y-0.5 hover:border-purple-500/30 hover:bg-white/[0.06]"
            >
              <MdEmail size={22} />
              <span>Email Me</span>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;