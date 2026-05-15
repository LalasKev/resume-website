const skills = [
  "PHP",
  "MySQL",
  "WordPress",
  "IT Support",
  "QA Testing",
  "Hardware Troubleshooting",
  "Software Troubleshooting",
  "Web Development",
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-slate-800">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-10">Skills</h2>

        <div className="flex flex-wrap gap-4">
          {skills.map((skill) => (
            <div
              key={skill}
              className="bg-green-500/20 border border-green-500 px-5 py-3 rounded-xl"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}