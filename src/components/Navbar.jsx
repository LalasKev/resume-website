export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between">
        <h1 className="font-bold text-xl">Kevin Rey Lalas</h1>

        <div className="flex gap-6 text-sm">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  );
}