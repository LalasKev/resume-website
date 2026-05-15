import { Mail, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 px-6 bg-slate-800"
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">
          Let's Work Together
        </h2>

        <p className="text-slate-400 mb-10">
          Open for IT support, web development,
          and QA opportunities.
        </p>

        <div className="space-y-4">
          <div className="flex justify-center gap-3">
            <Mail />
            <span>kevinlalas09@gmail.com</span>
          </div>

          <div className="flex justify-center gap-3">
            <Phone />
            <span>+63 998 235 6843</span>
          </div>
        </div>
      </div>
    </section>
  );
}