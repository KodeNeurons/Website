import { useEffect, useRef, useState } from "react";
import Typed from "typed.js";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import {
  Brain, Globe, Smartphone, ShieldCheck,
  ArrowRight, CheckCircle2, Cpu,
  Database, Code2, Activity,
  Zap, TrendingUp, Users, Clock,
} from "lucide-react";

/* ─── Scroll-reveal hook ─── */
function useScrollReveal(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

/* ─── Count-up hook ─── */
function useCounter(target, active, duration = 1400) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!active) return;
    let cur = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      cur += step;
      if (cur >= target) { setVal(target); clearInterval(timer); }
      else setVal(Math.floor(cur));
    }, 16);
    return () => clearInterval(timer);
  }, [active, target, duration]);
  return val;
}

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
  const [statsRef, statsVisible] = useScrollReveal(0.2);
  const [servicesRef, servicesVisible] = useScrollReveal(0.1);
  const [aiRef, aiVisible] = useScrollReveal(0.2);
  const [processRef, processVisible] = useScrollReveal(0.1);
  const [testimonialsRef, testimonialsVisible] = useScrollReveal(0.1);
  const [ctaRef, ctaVisible] = useScrollReveal(0.2);
  const count50 = useCounter(50, statsVisible);
  const count3 = useCounter(3, statsVisible);
  const count100 = useCounter(100, statsVisible);

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
        googleVerification="vB906MQSu9v1Njir3KinXr_gLTywWY_RYy8vHLVvs1c"
      />

      {/* ═══════════════════════════════════
          HERO
      ═══════════════════════════════════ */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Animated orange blob — top right */}
        <div className="animate-float absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(255,122,0,0.10) 0%, transparent 65%)" }} />
        {/* Subtle navy blob — bottom left */}
        <div className="animate-float absolute bottom-0 -left-40 w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(10,15,44,0.06) 0%, transparent 65%)", animationDelay: "3s" }} />

        {/* Floating particles */}
        {[
          { x: "8%",  y: "18%", delay: "0s",   size: 6,  dur: 7 },
          { x: "88%", y: "25%", delay: "1.2s",  size: 4,  dur: 9 },
          { x: "18%", y: "72%", delay: "2.1s",  size: 5,  dur: 8 },
          { x: "78%", y: "65%", delay: "0.6s",  size: 3,  dur: 10 },
          { x: "50%", y: "88%", delay: "1.8s",  size: 4,  dur: 7 },
          { x: "38%", y: "12%", delay: "3s",    size: 6,  dur: 9 },
          { x: "62%", y: "40%", delay: "0.3s",  size: 3,  dur: 11 },
          { x: "92%", y: "78%", delay: "2.5s",  size: 5,  dur: 8 },
        ].map((p, i) => (
          <div key={i} className="absolute rounded-full pointer-events-none"
            style={{
              left: p.x, top: p.y,
              width: p.size, height: p.size,
              background: "#FF7A00",
              animation: `particleFloat ${p.dur}s ease-in-out infinite`,
              animationDelay: p.delay,
            }} />
        ))}

        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto text-center">

            {/* Eyebrow tag */}
            <div className="hero-animate hero-animate-1 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 border border-orange-200 text-[#FF7A00] text-xs font-semibold tracking-widest uppercase mb-8">
              <Cpu className="w-3.5 h-3.5" />
              AI-Powered Software Studio
            </div>

            {/* Headline */}
            <h1 className="hero-animate hero-animate-2 text-5xl sm:text-6xl md:text-7xl font-extrabold leading-[1.04] tracking-tight text-[#0A0F2C] mb-6">
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
            <p className="hero-animate hero-animate-3 text-lg md:text-xl text-gray-500 leading-relaxed max-w-2xl mx-auto mb-4">
              KodeNeurons is a next-generation AI software studio. We design and deliver
              production-grade web, mobile, and AI products — on time, every time.
            </p>

            {/* Typed */}
            <p className="hero-animate hero-animate-4 text-base text-gray-400 mb-10">
              Experts in{" "}
              <span ref={typedRef} className="font-semibold text-[#FF7A00]" />
            </p>

            {/* CTAs */}
            <div className="hero-animate hero-animate-5 flex flex-wrap gap-4 justify-center">
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
            <div className="hero-animate hero-animate-6 flex flex-wrap justify-center gap-6 mt-12 pt-10 border-t border-gray-100">
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
      <section className="py-16 px-6 bg-[#0A0F2C]" ref={statsRef}>
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {stats.map(({ label, icon: Icon }, i) => {
            const displayVals = [`${count50}+`, `${count3}`, "24h", `${count100}%`];
            return (
              <div key={label}
                className={`reveal-scale${statsVisible ? " visible" : ""}`}
                style={{ transitionDelay: `${i * 0.12}s` }}>
                <Icon className="w-6 h-6 text-[#FF7A00] mx-auto mb-3 opacity-80" />
                <div className="text-4xl font-extrabold text-white">{displayVals[i]}</div>
                <p className="mt-1.5 text-sm text-gray-400">{label}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ═══════════════════════════════════
          SERVICES
      ═══════════════════════════════════ */}
      <section className="py-24 px-6 bg-white" id="services" ref={servicesRef}>
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
            {services.map((s, i) => (
              <div
                key={s.title}
                className={`reveal${servicesVisible ? " visible" : ""} group relative bg-white rounded-2xl border border-gray-100 p-7 hover:border-[#FF7A00]/30 hover:shadow-[0_8px_40px_rgba(255,122,0,0.10)] transition-all duration-300 hover:-translate-y-1 cursor-default overflow-hidden`}
                style={{ transitionDelay: `${i * 0.1}s` }}
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
      <section className="py-24 px-6 bg-[#FAFAFA]" ref={aiRef}>
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">

          {/* Left: Visual card */}
          <div className={`reveal-left${aiVisible ? " visible" : ""} lg:w-1/2 w-full flex-shrink-0`}>
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
              ].map(({ label, pct }, idx) => (
                <div key={label} className="mb-4 last:mb-0">
                  <div className="flex justify-between mb-1.5">
                    <span className="text-xs font-medium text-gray-600">{label}</span>
                    <span className="text-xs font-bold text-[#FF7A00]">{pct}%</span>
                  </div>
                  <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: aiVisible ? `${pct}%` : "0%",
                        background: "linear-gradient(90deg, #FF7A00, #FF9E3D)",
                        transition: `width 1.1s ease ${0.3 + idx * 0.18}s`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Copy */}
          <div className={`reveal-right${aiVisible ? " visible" : ""} lg:w-1/2`} style={{ transitionDelay: "0.2s" }}>
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
      <section className="py-24 px-6 bg-white" ref={processRef}>
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
              <div key={step.num}
                className={`reveal${processVisible ? " visible" : ""} group flex flex-col items-center text-center relative`}
                style={{ transitionDelay: `${i * 0.15}s` }}>
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
      <section className="py-16 px-6 bg-[#FAFAFA] border-y border-gray-100 overflow-hidden">
        <div className="mx-auto text-center">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-8">Technologies we ship with</p>
          <div className="overflow-hidden">
            <div className="flex gap-3 animate-marquee" style={{ width: "max-content" }}>
              {[...stack, ...stack].map((t, i) => (
                <span key={i}
                  className="px-4 py-2 text-sm font-medium text-gray-600 bg-white border border-gray-200 rounded-xl hover:border-[#FF7A00]/40 hover:text-[#FF7A00] hover:bg-orange-50 hover:shadow-sm transition-all duration-200 cursor-default whitespace-nowrap">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════
          TESTIMONIALS
      ═══════════════════════════════════ */}





      










      {/* ═══════════════════════════════════
          CTA BANNER
      ═══════════════════════════════════ */}
      <section className="py-24 px-6" ref={ctaRef}>
        <div className="max-w-5xl mx-auto">
          <div
            className={`reveal${ctaVisible ? " visible" : ""} relative overflow-hidden rounded-3xl px-10 py-16 md:py-20 text-center text-white`}
            style={{ background: "linear-gradient(135deg, #FF7A00 0%, #FF9E3D 100%)" }}
          >
            {/* Decorative circles */}
            <div className="absolute -top-16 -right-16 w-64 h-64 bg-white/10 rounded-full" />
            <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-white/10 rounded-full" />
            <div className="absolute top-8 left-8 w-20 h-20 bg-white/10 rounded-full" />
            {/* Spinning decorative ring */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
              <div className="w-[520px] h-[520px] rounded-full border border-white/10 animate-spin-slow" />
              <div className="absolute w-[360px] h-[360px] rounded-full border border-white/8 animate-spin-slow" style={{ animationDirection: "reverse", animationDuration: "15s" }} />
            </div>

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
                  className="animate-pulse-ring group flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-[#FF7A00] bg-white hover:bg-orange-50 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
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
