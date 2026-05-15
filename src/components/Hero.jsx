import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-3xl">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold mb-4"
        >
          Kevin Rey A. Lalas
        </motion.h1>

        <p className="text-xl text-slate-300 mb-6">
          IT Technician • QA Tester • Web Developer
        </p>

        <p className="text-slate-400 mb-8">
          Passionate about web development, system management,
          and smart technology solutions.
        </p>

        <div className="flex justify-center gap-4">
          <a
            href="/Kevin-Rey-Lalas-Resume.pdf"
            className="bg-green-500 px-6 py-3 rounded-xl"
          >
            Download Resume
          </a>

          <a
            href="#contact"
            className="border border-white px-6 py-3 rounded-xl"
          >
            Hire Me
          </a>
        </div>
      </div>
    </section>
  );
}