const projects = [
  {
    title: "Records Management System",
    desc: "Developed using PHP and MySQL for efficient document management.",
  },
  {
    title: "Smart Eco-Friendly Bin",
    desc: "IoT-based waste management system using sensor technology.",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-slate-800">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-10">Projects</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-slate-900 p-6 rounded-2xl"
            >
              <h3 className="text-2xl font-semibold mb-4">
                {project.title}
              </h3>

              <p className="text-slate-400">
                {project.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}