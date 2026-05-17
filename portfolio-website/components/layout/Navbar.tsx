import Container from "./Container";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full border-b border-white/10 bg-black/30 backdrop-blur-md z-50">
      <Container className="flex items-center justify-between py-4">
        <h1 className="text-xl font-semibold">Deepana</h1>

        <nav className="flex items-center gap-6 text-sm text-neutral-300">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </Container>
    </header>
  );
};

export default Navbar;