import Container from "@/components/layout/Container";
import SectionTitle from "@/components/layout/SectionTitle";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-32 border-t border-white/10"
    >
      <Container>
        <SectionTitle
          subtitle="Contact"
          title="Let’s build something impactful."
        />

        <div className="max-w-3xl">
          <p className="text-lg leading-relaxed text-neutral-400">
            I’m passionate about backend engineering, distributed systems,
            scalable architectures, and enterprise application development.
            Currently open to opportunities where I can contribute, learn, and
            grow as a software engineer.
          </p>

          <div className="mt-10 flex flex-wrap gap-5">
            <a
              href="https://github.com/dbalmoor"
              target="_blank"
              className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4 transition hover:border-purple-500/30 hover:bg-white/[0.06]"
            >
              <FaGithub size={22} />
              <span>GitHub</span>
            </a>

            <a
              href="https://www.linkedin.com/in/deepana-balmoor-04ab90201/"
              target="_blank"
              className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4 transition hover:border-purple-500/30 hover:bg-white/[0.06]"
            >
              <FaLinkedin size={22} />
              <span>LinkedIn</span>
            </a>

            <a
              href="mailto:dbalmoor@gmail.com"
              className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4 transition hover:border-purple-500/30 hover:bg-white/[0.06]"
            >
              <MdEmail size={22} />
              <span>Email</span>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;