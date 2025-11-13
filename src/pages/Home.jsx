import { Code, CheckCircle, Cog, Trophy } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Typed from "typed.js";
import "./animation.css";

/* ---------- Content ---------- */
const services = [
  {
    title: "AI • ML Engineering",
    desc: "Predictive models, data pipelines, and intelligent automation tuned for real business outcomes.",
    icon: Cog,
  },
  {
    title: "Full-Stack Web Apps",
    desc: "Modern web products with clean APIs, robust auth, and scalable cloud infra.",
    icon: Code,
  },
  {
    title: "Android & Cross-Platform",
    desc: "Native Android and cross-platform apps with delightful UX and offline-first design.",
    icon: CheckCircle,
  },
  {
    title: "Quality & Reliability",
    desc: "Secure, well-documented deliveries with CI/CD and post-launch support.",
    icon: Trophy,
  },
];

const typedLines = [
  "Artificial Intelligence & Machine Learning",
  "Full-Stack Web Development",
  "Android & Cross-Platform Apps",
  "Python / Django • Java / Spring",
  "Cloud, DevOps & Automation",
];

export default function Home() {
  useEffect(() => {
    const typed = new Typed(".typed-output", {
      strings: typedLines,
      typeSpeed: 80,
      backSpeed: 45,
      backDelay: 1200,
      loop: true,
    });
    return () => typed.destroy();
  }, []);

  return (
    <div className="relative overflow-hidden bg-[#0C0C15] text-white">
      {/* ---------- Background layers ---------- */}
      <div className="pointer-events-none absolute inset-0 -z-20">
        {/* base gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(100%_60%_at_0%_0%,rgba(108,99,255,0.12),transparent_60%),radial-gradient(100%_60%_at_100%_100%,rgba(0,209,255,0.12),transparent_60%)]" />
        {/* subtle texture */}
        <div className="absolute inset-0 opacity-[0.07] mix-blend-soft-light bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2240%22 height=%2440%22 viewBox=%220 0 40 40%22><path fill=%22%23ffffff%22 fill-opacity=%220.25%22 d=%22M0 39h40v1H0zM39 0h1v40h-1z%22/></svg>')]" />
      </div>

      {/* animated blobs */}
      <style>{`
        @keyframes floaty { 0%{transform:translateY(0)} 50%{transform:translateY(-10px)} 100%{transform:translateY(0)} }
        .blob { filter: blur(40px); opacity:.35; animation: floaty 9s ease-in-out infinite; }
        .blob2{ filter: blur(50px); opacity:.30; animation: floaty 12s ease-in-out infinite; animation-delay: .8s;}
      `}</style>
      <div className="pointer-events-none absolute -top-24 -left-24 h-80 w-80 rounded-full blob bg-gradient-to-br from-[#6C63FF] to-transparent" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-96 w-96 rounded-full blob2 bg-gradient-to-tl from-[#00D1FF] to-transparent" />

      {/* ---------- HERO ---------- */}
      <section className="relative max-w-7xl mx-auto px-6 pt-28 pb-20 lg:pt-36">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left: copy */}
          <div>
            <p className="text-xs tracking-[0.2em] text-[#00D1FF] uppercase mb-4">
              KodeNeurons
            </p>
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold leading-[1.1]">
              Build{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6C63FF] to-[#00D1FF]">
                Intelligent
              </span>{" "}
              Products that Scale
            </h1>

            <p className="mt-5 max-w-xl text-gray-300 text-lg leading-relaxed">
              We design and deliver AI-driven web & mobile software with
              production-grade quality — engineered for performance, reliability,
              and growth.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="px-6 py-3 rounded-xl font-semibold bg-gradient-to-r from-[#6C63FF] to-[#00D1FF] shadow-lg hover:shadow-[0_0_28px_rgba(108,99,255,0.45)] hover:scale-[1.03] transition"
              >
                Start a Project
              </Link>
              <Link
                to="/projects"
                className="px-6 py-3 rounded-xl font-semibold border border-white/15 text-white hover:bg-white/5 transition"
              >
                View Portfolio →
              </Link>
            </div>

            {/* typed line */}
            <div className="mt-8 text-base sm:text-lg text-gray-300">
              We specialize in{" "}
              <span className="typed-output text-transparent bg-clip-text bg-gradient-to-r from-[#6C63FF] to-[#00D1FF]" />
            </div>
          </div>

          {/* Right: illustration block (pure CSS/SVG) */}
          <div className="relative">
            {/* glass panel */}
            <div className="relative rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 p-6 md:p-8 shadow-[0_20px_80px_rgba(0,0,0,.35)]">
              {/* mock illustration */}
              <div className="relative aspect-[5/3] rounded-2xl overflow-hidden bg-gradient-to-br from-[#141428] to-[#0E0E17]">
                {/* grid lines */}
                <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.08)_1px,transparent_1px)] bg-[size:28px_28px]" />
                {/* nodes */}
                <div className="absolute left-6 top-6 h-3 w-3 rounded-full bg-[#6C63FF] shadow-[0_0_20px_#6C63FF]"></div>
                <div className="absolute right-8 top-10 h-3 w-3 rounded-full bg-[#00D1FF] shadow-[0_0_20px_#00D1FF]"></div>
                <div className="absolute left-1/2 bottom-8 -translate-x-1/2 h-3 w-3 rounded-full bg-white/80 shadow-[0_0_20px_rgba(255,255,255,.6)]"></div>
                {/* “screen” */}
                <div className="absolute inset-6 rounded-xl bg-[#0B0B14] border border-white/10 p-4">
                  <div className="h-2 w-14 rounded bg-white/15 mb-4" />
                  <div className="h-2 w-24 rounded bg-white/10 mb-6" />
                  {/* bars */}
                  <div className="grid grid-cols-3 gap-3">
                    <div className="h-24 rounded-md bg-gradient-to-b from-[#6C63FF] to-transparent opacity-80" />
                    <div className="h-24 rounded-md bg-gradient-to-b from-[#00D1FF] to-transparent opacity-80" />
                    <div className="h-24 rounded-md bg-gradient-to-b from-white/80 to-transparent opacity-60" />
                  </div>
                </div>
              </div>

              {/* caption */}
              <div className="mt-4 flex items-center justify-between">
                <span className="text-sm text-gray-300/80">
                  Prototype • Analytics • Deployment
                </span>
                <span className="text-sm text-[#00D1FF]">AI-Ready</span>
              </div>
            </div>
            {/* soft halo */}
            <div className="absolute -inset-6 -z-10 rounded-[28px] bg-gradient-to-r from-[#6C63FF]/20 to-[#00D1FF]/20 blur-2xl" />
          </div>
        </div>
      </section>

      {/* ---------- SERVICES (glass) ---------- */}
      <section className="relative max-w-7xl mx-auto px-6 pb-24">
        <div className="text-center mb-12">
          <h2 className="text-[#00D1FF] uppercase text-xs tracking-[0.25em]">
            Services
          </h2>
          <p className="mt-3 text-3xl md:text-4xl font-bold">
            From Concept to Production
          </p>
          <p className="mt-4 max-w-2xl mx-auto text-gray-300">
            We deliver full-cycle engineering: discovery, design, development,
            QA, deployment, and continuous improvement.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <div
              key={i}
              className="group relative rounded-2xl bg-white/[0.06] backdrop-blur-md border border-white/10 p-6 transition-all duration-300 hover:translate-y-[-4px] hover:border-[#6C63FF]/40 hover:shadow-[0_10px_40px_rgba(108,99,255,.25)]"
            >
              <div className="mb-4 inline-flex rounded-xl bg-gradient-to-br from-[#6C63FF]/15 to-[#00D1FF]/15 p-3">
                <s.icon className="h-6 w-6 text-[#00D1FF]" />
              </div>
              <h3 className="text-base font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-gray-300 leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- STACK TAGS ---------- */}
      <section className="relative max-w-7xl mx-auto px-6 pb-28 border-t border-white/5">
        <div className="text-center mb-8">
          <h3 className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#6C63FF] to-[#00D1FF]">
            Tech we ship with
          </h3>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          {[
            "React • Next.js",
            "Node.js • Express",
            "Python • Django",
            "Java • Spring Boot",
            "PostgreSQL • MongoDB",
            "TensorFlow • scikit-learn",
            "Docker • CI/CD",
            "AWS • Vercel",
          ].map((t) => (
            <span
              key={t}
              className="px-4 py-2 text-sm rounded-full border border-white/10 bg-white/[0.04] text-gray-200 hover:border-[#6C63FF]/40 hover:text-white transition"
            >
              {t}
            </span>
          ))}
        </div>
      </section>

      {/* ---------- CTA STRIP ---------- */}
      <section className="relative mx-6 mb-24">
        <div className="mx-auto max-w-7xl rounded-3xl border border-white/10 bg-gradient-to-r from-[#111222] via-[#101325] to-[#0F1522] p-10 text-center shadow-[0_20px_80px_rgba(0,0,0,.35)]">
          <h4 className="text-2xl md:text-3xl font-bold">
            Ready to build your next product?
          </h4>
          <p className="mt-3 text-gray-300">
            Partner with KodeNeurons — where innovation meets engineering
            precision.
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <Link
              to="/contact"
              className="px-6 py-3 rounded-xl font-semibold bg-gradient-to-r from-[#6C63FF] to-[#00D1FF] shadow-lg hover:shadow-[0_0_28px_rgba(108,99,255,0.45)] hover:scale-[1.03] transition"
            >
              Let’s Talk
            </Link>
            <Link
              to="/projects"
              className="px-6 py-3 rounded-xl font-semibold border border-white/15 text-white hover:bg-white/5 transition"
            >
              See Case Studies
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
