
const Footer = () => {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-sm text-neutral-500 md:flex-row">
        <p>© {new Date().getFullYear()} Deepana Balmoor.</p>

        <p>Java Backend Engineer · Distributed Systems</p>

        <div className="flex items-center gap-5">
          <a
            href="https://github.com/dbalmoor"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-purple-300"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/deepanabalmoor/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-purple-300"
          >
            LinkedIn
          </a>

          <a
            href="mailto:deepanabalmoor7@gmail.com"
            className="transition-colors hover:text-purple-300"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
