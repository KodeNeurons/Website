import { useEffect, useRef } from "react";
import Typed from "typed.js";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import {
  Brain, Globe, Smartphone, ShieldCheck,
  ArrowRight, CheckCircle2, Cpu,
  Database, Code2, Activity,
  Zap, TrendingUp, Users, Clock,
} from "lucide-react";

/* ─── Data ─── */
const services = [
  {
    icon: Brain,
    title: "AI & Machine Learning",
    desc: "Predictive models, NLP pipelines, and intelligent automation engineered for real business outcomes.",
    tag: "Most Popular",
  },
  {
    icon: Globe,
    title: "Full-Stack Web Apps",
    desc: "Scalable web products with clean APIs, robust authentication, and cloud-native architecture.",
    tag: null,
  },
  {
    icon: Smartphone,
    title: "Android & Mobile",
    desc: "Native Android and cross-platform apps with offline-first design and delightful UX.",
    tag: null,
  },
  {
    icon: ShieldCheck,
    title: "Quality & Reliability",
    desc: "CI/CD pipelines, automated testing, security audits, and dedicated post-launch support.",
    tag: null,
  },
  {
    icon: Database,
    title: "Data Engineering",
    desc: "Real-time data pipelines, ETL workflows, and analytics dashboards built for scale.",
    tag: null,
  },
  {
    icon: Code2,
    title: "API & Integrations",
    desc: "REST and GraphQL APIs, third-party integrations, and micro-service architectures.",
    tag: null,
  },
];

const process = [
  {
    num: "01",
    icon: Users,
    title: "Discovery",
    desc: "We listen first. Deep-dive sessions to understand your goals, constraints, and vision before writing a single line of code.",
  },
  {
    num: "02",
    icon: Zap,
    title: "Design & Prototype",
    desc: "Wireframes, user flows, and interactive prototypes that validate ideas fast — before full development begins.",
  },
  {
    num: "03",
    icon: Code2,
    title: "Build & Iterate",
    desc: "Production-grade engineering with weekly demos, transparent progress tracking, and sprint-based delivery.",
  },
  {
    num: "04",
    icon: Activity,
    title: "Launch & Scale",
    desc: "Smooth deployment, performance monitoring, and a dedicated support window to ensure your product grows reliably.",
  },
];

const stats = [
  { value: "50+", label: "Projects Delivered", icon: TrendingUp },
  { value: "3", label: "Expert Co-Founders", icon: Users },
  { value: "24h", label: "Response Guarantee", icon: Clock },
  { value: "100%", label: "Client Satisfaction", icon: CheckCircle2 },
];

const stack = [
  "React", "Next.js", "Node.js", "Python", "Django",
  "Java", "Spring Boot", "PostgreSQL", "MongoDB",
  "TensorFlow", "Docker", "AWS", "CI/CD", "Vercel",
];

const typedLines = [
  "Artificial Intelligence & Machine Learning",
  "Full-Stack Web Development",
  "Android & Mobile Apps",
  "Cloud & DevOps Automation",
  "Data Engineering & Analytics",
];

/* ─── Testimonial ─── */
const testimonials = [
  {
    text: "KodeNeurons turned our complex AI idea into a production-ready product in weeks. Exceptional engineering.",
    name: "Startup Founder",
    role: "EdTech Company",
    initials: "SF",
  },
  {
    text: "From prototype to deployment, the team was transparent, fast, and technically brilliant. Highly recommended.",
    name: "Product Manager",
    role: "B2B SaaS",
    initials: "PM",
  },
  {
    text: "They delivered our Android app on time with outstanding UX. Best engineering team we've worked with.",
    name: "Tech Director",
    role: "Healthcare Startup",
    initials: "TD",
  },
];

/* ─── Component ─── */
export default function Home() {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: typedLines,
      typeSpeed: 65,
      backSpeed: 35,
      backDelay: 1600,
      loop: true,
    });
    return () => typed.destroy();
  }, []);

  return (
    <div className="bg-white text-[#0A0F2C]">
      <SEO
        title="AI & Software Studio"
        description="KodeNeurons leverages cutting-edge artificial intelligence and modern web technologies to engineer scalable, high-performance software for startups and enterprises."
        path="/"
      />

      {/* ═══════════════════════════════════
          HERO
      ═══════════════════════════════════ */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Subtle orange blob — top right */}
        <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(255,122,0,0.08) 0%, transparent 65%)" }} />
        {/* Subtle navy blob — bottom left */}
        <div className="absolute bottom-0 -left-40 w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(10,15,44,0.04) 0%, transparent 65%)" }} />

        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto text-center">

            {/* Eyebrow tag */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 border border-orange-200 text-[#FF7A00] text-xs font-semibold tracking-widest uppercase mb-8">
              <Cpu className="w-3.5 h-3.5" />
              AI-Powered Software Studio
            </div>

            {/* Headline */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-[1.04] tracking-tight text-[#0A0F2C] mb-6">
              We Build{" "}
              <span className="relative inline-block">
                <span
                  style={{
                    backgroundImage: "linear-gradient(135deg, #FF7A00 0%, #FF9E3D 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Intelligent
                </span>
                {/* underline decoration */}
                <svg className="absolute -bottom-1 left-0 w-full" height="6" viewBox="0 0 200 6">
                  <path d="M0 5 Q50 0 100 4 Q150 8 200 3" stroke="#FF7A00" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.7" />
                </svg>
              </span>
              <br />
              Products that Scale
            </h1>

            {/* Sub */}
            <p className="text-lg md:text-xl text-gray-500 leading-relaxed max-w-2xl mx-auto mb-4">
              KodeNeurons is a next-generation AI software studio. We design and deliver
              production-grade web, mobile, and AI products — on time, every time.
            </p>

            {/* Typed */}
            <p className="text-base text-gray-400 mb-10">
              Experts in{" "}
              <span ref={typedRef} className="font-semibold text-[#FF7A00]" />
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/contact"
                className="group flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-white bg-[#FF7A00] hover:bg-[#e86e00] shadow-[0_4px_20px_rgba(255,122,0,0.4)] hover:shadow-[0_8px_30px_rgba(255,122,0,0.5)] hover:scale-105 transition-all duration-300"
              >
                Start Your Project
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link
                to="/projects"
                className="flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-[#0A0F2C] bg-white border border-gray-200 hover:border-[#FF7A00]/40 hover:bg-orange-50 shadow-sm hover:shadow-md transition-all duration-300"
              >
                View Our Work
              </Link>
            </div>

            {/* Social proof chips */}
            <div className="flex flex-wrap justify-center gap-6 mt-12 pt-10 border-t border-gray-100">
              {[
                { icon: CheckCircle2, text: "50+ Projects Shipped", color: "text-[#FF7A00]" },
                { icon: CheckCircle2, text: "100% Client Satisfaction", color: "text-[#FF7A00]" },
                { icon: CheckCircle2, text: "24h Response Guarantee", color: "text-[#FF7A00]" },
              ].map(({ icon: Icon, text, color }) => (
                <div key={text} className="flex items-center gap-2 text-sm text-gray-500">
                  <Icon className={`w-4 h-4 flex-shrink-0 ${color}`} />
                  {text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════
          STATS BAND
      ═══════════════════════════════════ */}
      <section className="py-16 px-6 bg-[#0A0F2C]">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {stats.map(({ value, label, icon: Icon }) => (
            <div key={label}>
              <Icon className="w-6 h-6 text-[#FF7A00] mx-auto mb-3 opacity-80" />
              <div className="text-4xl font-extrabold text-white">{value}</div>
              <p className="mt-1.5 text-sm text-gray-400">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════
          SERVICES
      ═══════════════════════════════════ */}
      <section className="py-24 px-6 bg-white" id="services">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-bold text-[#FF7A00] uppercase tracking-widest mb-3">What We Build</p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#0A0F2C]">
              Solutions for every
              <br />
              <span style={{ backgroundImage: "linear-gradient(135deg,#FF7A00,#FF9E3D)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                stage of growth
              </span>
            </h2>
            <p className="mt-4 text-gray-500 text-lg max-w-2xl mx-auto">
              From early-stage MVP to enterprise-scale infrastructure, we engineer software your customers love.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div
                key={s.title}
                className="group relative bg-white rounded-2xl border border-gray-100 p-7 hover:border-[#FF7A00]/30 hover:shadow-[0_8px_40px_rgba(255,122,0,0.10)] transition-all duration-300 hover:-translate-y-1 cursor-default overflow-hidden"
              >
                {/* Orange top stripe on hover */}
                <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#FF7A00] to-[#FF9E3D] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Popular badge */}
                {s.tag && (
                  <span className="absolute top-4 right-4 text-[10px] font-bold text-[#FF7A00] bg-orange-50 border border-orange-200 px-2 py-0.5 rounded-full uppercase tracking-wide">
                    {s.tag}
                  </span>
                )}

                <div className="mb-5 inline-flex p-3 rounded-xl bg-orange-50 group-hover:bg-[#FF7A00] transition-colors duration-300">
                  <s.icon className="w-5 h-5 text-[#FF7A00] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-bold text-[#0A0F2C] mb-2">{s.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>

                <div className="mt-5 flex items-center gap-1 text-xs font-semibold text-[#FF7A00] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Explore <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════
          AI CAPABILITIES HIGHLIGHT
      ═══════════════════════════════════ */}
      <section className="py-24 px-6 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">

          {/* Left: Visual card */}
          <div className="lg:w-1/2 w-full flex-shrink-0">
            <div className="relative bg-white rounded-3xl border border-gray-100 shadow-[0_20px_60px_rgba(0,0,0,0.07)] p-8 overflow-hidden">
              {/* Orange corner glow */}
              <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full"
                style={{ background: "radial-gradient(circle, rgba(255,122,0,0.12), transparent 70%)" }} />

              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#FF7A00] flex items-center justify-center shadow-[0_4px_14px_rgba(255,122,0,0.4)]">
                  <Brain className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm font-bold text-[#0A0F2C]">AI Intelligence Layer</p>
                  <p className="text-xs text-gray-400">Powered by state-of-the-art models</p>
                </div>
                <div className="ml-auto flex items-center gap-1.5 text-xs font-semibold text-emerald-600 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Live
                </div>
              </div>

              {/* Capability bars */}
              {[
                { label: "Natural Language Processing", pct: 95 },
                { label: "Predictive Analytics", pct: 88 },
                { label: "Computer Vision", pct: 82 },
                { label: "Automation & Agents", pct: 91 },
              ].map(({ label, pct }) => (
                <div key={label} className="mb-4 last:mb-0">
                  <div className="flex justify-between mb-1.5">
                    <span className="text-xs font-medium text-gray-600">{label}</span>
                    <span className="text-xs font-bold text-[#FF7A00]">{pct}%</span>
                  </div>
                  <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: `${pct}%`,
                        background: "linear-gradient(90deg, #FF7A00, #FF9E3D)",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Copy */}
          <div className="lg:w-1/2">
            <p className="text-xs font-bold text-[#FF7A00] uppercase tracking-widest mb-4">AI Capabilities</p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#0A0F2C] mb-5 leading-tight">
              Cutting-edge AI,<br />engineered for the{" "}
              <span style={{ backgroundImage: "linear-gradient(135deg,#FF7A00,#FF9E3D)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                real world
              </span>
            </h2>
            <p className="text-gray-500 mb-8 leading-relaxed text-lg">
              We don't just integrate AI — we build it into the DNA of your product. Our team
              creates custom models, data pipelines, and intelligent agents that drive measurable business outcomes.
            </p>

            <div className="space-y-4 mb-8">
              {[
                "Custom-trained ML models for your specific domain",
                "Real-time inference APIs with sub-100ms latency",
                "Seamless integration with your existing data stack",
                "Explainable AI with full audit trails",
              ].map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <div className="mt-0.5 w-5 h-5 rounded-full bg-orange-50 border border-orange-200 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-3 h-3 text-[#FF7A00]" />
                  </div>
                  <p className="text-sm text-gray-600">{point}</p>
                </div>
              ))}
            </div>

            <Link to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-[#FF7A00] hover:bg-[#e86e00] shadow-[0_4px_20px_rgba(255,122,0,0.35)] hover:scale-105 transition-all duration-300">
              Talk to an AI Expert <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════
          PROCESS
      ═══════════════════════════════════ */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-bold text-[#FF7A00] uppercase tracking-widest mb-3">How We Work</p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#0A0F2C]">
              A process built for{" "}
              <span style={{ backgroundImage: "linear-gradient(135deg,#FF7A00,#FF9E3D)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                results
              </span>
            </h2>
            <p className="mt-4 text-gray-500 max-w-xl mx-auto">
              A structured, collaborative approach that keeps you in control at every step.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 relative">
            {/* Connector line */}
            <div className="hidden md:block absolute top-10 left-[13%] right-[13%] h-px border-t-2 border-dashed border-orange-200" />

            {process.map((step, i) => (
              <div key={step.num} className="group flex flex-col items-center text-center relative">
                <div className="relative mb-6 z-10">
                  <div className="w-20 h-20 rounded-2xl bg-orange-50 border-2 border-orange-100 group-hover:bg-[#FF7A00] group-hover:border-[#FF7A00] flex flex-col items-center justify-center gap-1 transition-all duration-300 shadow-sm group-hover:shadow-[0_8px_25px_rgba(255,122,0,0.35)]">
                    <span className="text-xs font-bold text-[#FF7A00] group-hover:text-white/70 transition-colors">{step.num}</span>
                    <step.icon className="w-5 h-5 text-[#FF7A00] group-hover:text-white transition-colors" />
                  </div>
                </div>
                <h3 className="text-base font-bold text-[#0A0F2C] mb-2">{step.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════
          TECH STACK
      ═══════════════════════════════════ */}
      <section className="py-16 px-6 bg-[#FAFAFA] border-y border-gray-100">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-8">Technologies we ship with</p>
          <div className="flex flex-wrap justify-center gap-3">
            {stack.map((t) => (
              <span key={t}
                className="px-4 py-2 text-sm font-medium text-gray-600 bg-white border border-gray-200 rounded-xl hover:border-[#FF7A00]/40 hover:text-[#FF7A00] hover:bg-orange-50 hover:shadow-sm transition-all duration-200 cursor-default">
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════
          TESTIMONIALS
      ═══════════════════════════════════ */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-bold text-[#FF7A00] uppercase tracking-widest mb-3">What Clients Say</p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#0A0F2C]">Trusted by builders</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-2xl p-7 shadow-sm hover:shadow-[0_8px_30px_rgba(255,122,0,0.08)] hover:border-[#FF7A00]/20 transition-all duration-300">
                {/* Stars */}
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} className="w-4 h-4 text-[#FF7A00]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 italic">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FF7A00] to-[#FF9E3D] flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[#0A0F2C]">{t.name}</p>
                    <p className="text-xs text-gray-400">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════
          CTA BANNER
      ═══════════════════════════════════ */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div
            className="relative overflow-hidden rounded-3xl px-10 py-16 md:py-20 text-center text-white"
            style={{ background: "linear-gradient(135deg, #FF7A00 0%, #FF9E3D 100%)" }}
          >
            {/* Decorative circles */}
            <div className="absolute -top-16 -right-16 w-64 h-64 bg-white/10 rounded-full" />
            <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-white/10 rounded-full" />
            <div className="absolute top-8 left-8 w-20 h-20 bg-white/10 rounded-full" />

            <div className="relative z-10">
              <p className="text-xs font-bold uppercase tracking-widest mb-4 text-white/70">Let's Build Together</p>
              <h2 className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight">
                Ready to launch your<br />next big idea?
              </h2>
              <p className="text-white/80 text-lg max-w-xl mx-auto mb-10">
                Partner with KodeNeurons — where engineering precision meets innovation.
                We're ready when you are.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link to="/contact"
                  className="group flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-[#FF7A00] bg-white hover:bg-orange-50 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                  Start a Project
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>
                <Link to="/projects"
                  className="flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-white border-2 border-white/30 hover:border-white hover:bg-white/10 transition-all duration-300">
                  See Our Work
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
