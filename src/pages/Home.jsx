import { useEffect, useRef } from "react";
import Typed from "typed.js";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import { buildBreadcrumbSchema, siteMetadata } from "../lib/siteMetadata";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { useCounter } from "../hooks/useCounter";
import {
  Brain, Globe, Smartphone, ShieldCheck,
  ArrowRight, CheckCircle2, Cpu,
  Database, Code2, Activity,
  Zap, TrendingUp, Users, Clock, Star,
  Rocket, ShoppingCart, Building2,
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
  { value: "4.9/5", label: "Client Satisfaction", icon: CheckCircle2 },
];

const clientTypes = [
  { icon: Rocket, label: "Startups" },
  { icon: Users, label: "Student Teams" },
  { icon: ShoppingCart, label: "E-Commerce Businesses" },
  { icon: Building2, label: "Enterprise Teams" },
];

const testimonials = [
  {
    name: "Arjun Mehta",
    company: "EdTech Startup, Mumbai",
    quote: "KodeNeurons took our rough idea and shipped a working MVP in under 3 weeks. Their AI integration was exactly what we needed to differentiate in a crowded market. The team was responsive, transparent, and genuinely invested in our success.",
    rating: 5,
    initials: "AM",
    color: "from-orange-400 to-amber-500",
  },
  {
    name: "Final-Year Project Team",
    company: "Engineering College, Pune",
    quote: "We were stuck with 2 weeks left and a half-built project. KodeNeurons not only delivered a complete, working product but took the time to explain every architectural decision. Our professors were genuinely impressed.",
    rating: 5,
    initials: "FY",
    color: "from-blue-500 to-indigo-600",
  },
  {
    name: "Vikram Nair",
    company: "Edison Cart Client",
    quote: "The team built and actively maintains our entire e-commerce platform. They're fast to respond, proactive about improvements, and the platform has never had a major outage since launch. Exactly what we needed.",
    rating: 5,
    initials: "VN",
    color: "from-emerald-500 to-teal-600",
  },
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

/* ─── Component ─── */
export default function Home() {
  const typedRef = useRef(null);
  const [statsRef, statsVisible] = useScrollReveal(0.2);
  const [clientsRef, clientsVisible] = useScrollReveal(0.1);
  const [servicesRef, servicesVisible] = useScrollReveal(0.1);
  const [aiRef, aiVisible] = useScrollReveal(0.2);
  const [processRef, processVisible] = useScrollReveal(0.1);
  const [testimonialsRef, testimonialsVisible] = useScrollReveal(0.1);
  const [ctaRef, ctaVisible] = useScrollReveal(0.2);
  const count50 = useCounter(50, statsVisible);
  const count3 = useCounter(3, statsVisible);

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
        title="Kodeneurons - AI Software Development Company in India"
        description="Kodeneurons builds production-grade AI, web, and mobile products for startups and businesses across India. Get a free project consultation and response within 24 hours."
        keywords="kodeneurons, codeneurons, kode neurons, code neurons, Kodeneurons AI company, software development company India, AI development company, web development, mobile app development"
        path="/"
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: siteMetadata.name,
            alternateName: ["kodeneurons", "codeneurons", "KodeNeurons", "CodeNeurons"],
            url: siteMetadata.siteUrl,
            image: siteMetadata.defaultImage,
            description: "AI-first software studio delivering web, mobile, automation, and data engineering services.",
            areaServed: "India",
            serviceType: [
              "AI Development",
              "Web Development",
              "Mobile App Development",
              "Data Engineering",
            ],
          },
          buildBreadcrumbSchema([{ name: "Home", path: "/" }]),
        ]}
      />

      {/* ═══════════════════════════════════
          HERO
      ═══════════════════════════════════ */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden">
        {/* Animated dot grid background */}
        <div className="absolute inset-0 dot-grid animate-grid-drift opacity-50 pointer-events-none" />

        {/* Morphing gradient blobs */}
        <div className="absolute -top-32 -right-32 w-[650px] h-[650px] animate-morph pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(255,122,0,0.13) 0%, transparent 60%)" }} />
        <div className="absolute -bottom-24 -left-40 w-[550px] h-[550px] animate-morph pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(16,185,129,0.08) 0%, transparent 55%)", animationDelay: "4s" }} />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[350px] h-[350px] animate-morph pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(99,102,241,0.06) 0%, transparent 55%)", animationDelay: "2s" }} />

        {/* Floating geometric SVG shapes */}
        <svg className="absolute top-[12%] left-[6%] w-12 h-12 pointer-events-none opacity-60"
          style={{ animation: "floatRotate 14s ease-in-out infinite" }}>
          <polygon points="24,2 46,42 2,42" fill="none" stroke="rgba(255,122,0,0.2)" strokeWidth="1.5" />
        </svg>
        <svg className="absolute top-[18%] right-[10%] w-10 h-10 pointer-events-none opacity-50"
          style={{ animation: "floatRotate 18s ease-in-out infinite", animationDelay: "3s" }}>
          <rect x="5" y="5" width="30" height="30" rx="6" fill="none" stroke="rgba(255,122,0,0.15)" strokeWidth="1.5" transform="rotate(45 20 20)" />
        </svg>
        <svg className="absolute bottom-[18%] left-[12%] w-14 h-14 pointer-events-none opacity-40"
          style={{ animation: "floatRotate 20s ease-in-out infinite", animationDelay: "5s" }}>
          <circle cx="28" cy="28" r="22" fill="none" stroke="rgba(255,122,0,0.12)" strokeWidth="1.5" strokeDasharray="8 5" />
        </svg>
        <svg className="absolute bottom-[28%] right-[7%] w-11 h-11 pointer-events-none opacity-50"
          style={{ animation: "floatRotate 16s ease-in-out infinite", animationDelay: "1.5s" }}>
          <polygon points="22,1 43,14 37,40 7,40 1,14" fill="none" stroke="rgba(16,185,129,0.15)" strokeWidth="1.5" />
        </svg>
        <svg className="absolute top-[55%] left-[3%] w-8 h-8 pointer-events-none opacity-40"
          style={{ animation: "floatRotate 22s ease-in-out infinite", animationDelay: "7s" }}>
          <polygon points="16,1 31,12 26,31 6,31 1,12" fill="none" stroke="rgba(99,102,241,0.15)" strokeWidth="1.2" />
        </svg>

        {/* Orbiting particles around hero center */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0 h-0 pointer-events-none hidden md:block">
          {[
            { r: 200, dur: 22, size: 5, color: "#FF7A00", delay: 0, opacity: 0.35 },
            { r: 280, dur: 30, size: 3, color: "#FF9E3D", delay: 6, opacity: 0.25 },
            { r: 350, dur: 38, size: 6, color: "#FF7A00", delay: 12, opacity: 0.2 },
            { r: 160, dur: 18, size: 4, color: "#10B981", delay: 3, opacity: 0.3 },
            { r: 320, dur: 35, size: 4, color: "#6366F1", delay: 9, opacity: 0.2 },
            { r: 240, dur: 26, size: 3, color: "#FF7A00", delay: 15, opacity: 0.25 },
          ].map((p, i) => (
            <div key={i} className="absolute rounded-full"
              style={{
                width: p.size, height: p.size,
                background: p.color,
                opacity: p.opacity,
                animation: `orbit ${p.dur}s linear infinite`,
                animationDelay: `${p.delay}s`,
                "--orbit-r": `${p.r}px`,
              }} />
          ))}
        </div>

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

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">

            {/* Eyebrow tag */}
            <div className="hero-blur-animate hero-blur-1 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50/80 backdrop-blur-sm border border-orange-200 text-[#FF7A00] text-xs font-semibold tracking-widest uppercase mb-8">
              <Cpu className="w-3.5 h-3.5" />
              Kodeneurons AI Software Studio
            </div>

            {/* Headline */}
            <h1 className="hero-blur-animate hero-blur-2 text-5xl sm:text-6xl md:text-7xl font-extrabold leading-[1.04] tracking-tight text-[#0A0F2C] mb-6">
              We Build{" "}
              <span className="relative inline-block animate-text-glow">
                <span
                  style={{
                    backgroundImage: "linear-gradient(135deg, #FF7A00 0%, #FF9E3D 50%, #FF7A00 100%)",
                    backgroundSize: "200% auto",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    animation: "gradientShimmer 4s ease infinite",
                  }}
                >
                  Intelligent
                </span>
                {/* Animated underline */}
                <svg className="absolute -bottom-1.5 left-0 w-full" height="8" viewBox="0 0 200 8">
                  <path d="M0 6 Q40 0 80 5 Q120 9 160 3 Q180 1 200 4" stroke="url(#underlineGrad)" strokeWidth="2.5" fill="none" strokeLinecap="round"
                    style={{ strokeDasharray: 220, strokeDashoffset: 220, animation: "drawPath 1.2s ease 0.6s forwards" }} />
                  <defs>
                    <linearGradient id="underlineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#FF7A00" />
                      <stop offset="100%" stopColor="#FF9E3D" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
              <br />
              Products that Scale
            </h1>

            {/* Sub */}
            <p className="hero-blur-animate hero-blur-3 text-lg md:text-xl text-gray-500 leading-relaxed max-w-2xl mx-auto mb-4">
              We help startups, businesses, and student teams build production-grade AI, web,
              and mobile products — from first prototype to full-scale deployment.
            </p>

            {/* Typed */}
            <p className="hero-blur-animate hero-blur-4 text-base text-gray-400 mb-10">
              Experts in{" "}
              <span ref={typedRef} className="font-semibold text-[#FF7A00]" />
            </p>

            {/* CTAs */}
            <div className="hero-blur-animate hero-blur-5 flex flex-wrap gap-4 justify-center">
              <Link
                to="/contact"
                className="group flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white bg-gradient-to-r from-[#FF7A00] to-[#FF9E3D] hover:from-[#e86e00] hover:to-[#FF7A00] shadow-[0_4px_25px_rgba(255,122,0,0.45)] hover:shadow-[0_8px_35px_rgba(255,122,0,0.6)] hover:scale-105 transition-all duration-300"
              >
                Start Your Project
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link
                to="/projects"
                className="group flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-[#0A0F2C] bg-white/80 backdrop-blur-sm border border-gray-200 hover:border-[#FF7A00]/40 hover:bg-orange-50 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                View Our Work
                <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
              </Link>
            </div>

            {/* Social proof chips */}
            <div className="hero-blur-animate hero-blur-6 flex flex-wrap justify-center gap-6 mt-12 pt-10 border-t border-gray-100">
              {[
                { icon: CheckCircle2, text: "50+ Projects Shipped", color: "text-[#FF7A00]" },
                { icon: CheckCircle2, text: "4.9/5 Client Satisfaction", color: "text-[#FF7A00]" },
                { icon: CheckCircle2, text: "24h Response Guarantee", color: "text-[#FF7A00]" },
              ].map(({ icon: Icon, text, color }) => (
                <div key={text} className="flex items-center gap-2 text-sm text-gray-500">
                  <Icon className={`w-4 h-4 flex-shrink-0 ${color}`} />
                  {text}
                </div>
              ))}
            </div>

            {/* Scroll indicator */}
            <div className="hero-blur-animate hero-blur-7 mt-12 flex flex-col items-center gap-2">
              <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest">Scroll to explore</span>
              <div className="animate-scroll-bounce">
                <svg width="20" height="28" viewBox="0 0 20 28" fill="none" className="text-gray-300">
                  <rect x="1" y="1" width="18" height="26" rx="9" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="10" cy="9" r="2" fill="#FF7A00">
                    <animate attributeName="cy" values="9;18;9" dur="2s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite" />
                  </circle>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════
          STATS BAND
      ═══════════════════════════════════ */}
      <section className="py-16 px-6 bg-[#0A0F2C] relative overflow-hidden" ref={statsRef}>
        {/* Background glow orbs */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-64 h-64 rounded-full animate-breathe pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(255,122,0,0.12), transparent 70%)" }} />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-48 h-48 rounded-full animate-breathe pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(255,122,0,0.08), transparent 70%)", animationDelay: "2s" }} />
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 text-center relative z-10">
          {stats.map(({ label, icon: Icon }, i) => {
            const displayVals = [`${count50}+`, `${count3}`, "24h", "4.9/5"];
            return (
              <div key={label}
                className={`reveal-scale${statsVisible ? " visible" : ""} group`}
                style={{ transitionDelay: `${i * 0.12}s` }}>
                <div className="w-12 h-12 rounded-2xl bg-[#FF7A00]/10 border border-[#FF7A00]/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-[#FF7A00]/20 group-hover:scale-110 transition-all duration-300">
                  <Icon className="w-5 h-5 text-[#FF7A00]" />
                </div>
                <div className="text-4xl font-extrabold text-white stat-glow">{displayVals[i]}</div>
                <p className="mt-2 text-sm text-gray-400 font-medium">{label}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ═══════════════════════════════════
          WHO WE WORK WITH
      ═══════════════════════════════════ */}
      <section className="py-14 px-6 bg-white border-b border-gray-100" ref={clientsRef}>
        <div className="max-w-4xl mx-auto">
          <p className="text-center text-xs font-bold text-gray-400 uppercase tracking-widest mb-8">Who we work with</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {clientTypes.map(({ icon: Icon, label }, i) => (
              <div
                key={label}
                className={`reveal-stagger-child${clientsVisible ? " visible" : ""} group flex flex-col items-center gap-3 p-6 rounded-2xl border border-gray-100 bg-[#FAFAFA] hover:border-[#FF7A00]/30 hover:bg-orange-50 hover:shadow-[0_8px_30px_rgba(255,122,0,0.08)] hover:-translate-y-1 transition-all duration-300`}
                style={{ "--stagger-index": i }}
              >
                <div className="w-12 h-12 rounded-xl bg-white border border-gray-200 flex items-center justify-center shadow-sm group-hover:bg-[#FF7A00] group-hover:border-[#FF7A00] group-hover:shadow-[0_4px_16px_rgba(255,122,0,0.35)] transition-all duration-300">
                  <Icon className="w-5 h-5 text-[#FF7A00] group-hover:text-white transition-colors duration-300" />
                </div>
                <p className="text-sm font-bold text-[#0A0F2C] text-center">{label}</p>
              </div>
            ))}
          </div>
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
              <div key={s.title} className="card-3d"
                style={{ transitionDelay: `${i * 0.1}s` }}>
                <div
                  className={`reveal${servicesVisible ? " visible" : ""} card-3d-inner card-shine group relative bg-white rounded-2xl border border-gray-100 p-7 hover:border-[#FF7A00]/30 hover:shadow-[0_12px_50px_rgba(255,122,0,0.12)] transition-all duration-300 cursor-default`}
                  style={{ transitionDelay: `${i * 0.1}s` }}
                >
                  {/* Orange top stripe on hover */}
                  <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#FF7A00] to-[#FF9E3D] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                  {/* Popular badge */}
                  {s.tag && (
                    <span className="absolute top-4 right-4 text-[10px] font-bold text-[#FF7A00] bg-orange-50 border border-orange-200 px-2 py-0.5 rounded-full uppercase tracking-wide animate-border-glow">
                      {s.tag}
                    </span>
                  )}

                  <div className="mb-5 inline-flex p-3.5 rounded-xl bg-orange-50 group-hover:bg-[#FF7A00] group-hover:shadow-[0_4px_20px_rgba(255,122,0,0.4)] transition-all duration-300">
                    <s.icon className="w-5 h-5 text-[#FF7A00] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-lg font-bold text-[#0A0F2C] mb-2 group-hover:text-[#FF7A00] transition-colors duration-300">{s.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>

                  <Link to="/services" className="mt-5 flex items-center gap-1 text-xs font-semibold text-[#FF7A00] opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    Explore <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
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
            {/* Animated connector line */}
            <div className="hidden md:block absolute top-10 left-[13%] right-[13%] h-px overflow-hidden">
              <div className="h-full border-t-2 border-dashed border-orange-200"
                style={{
                  backgroundImage: "linear-gradient(90deg, #FF7A00 50%, transparent 50%)",
                  backgroundSize: processVisible ? "100% 2px" : "0% 2px",
                  backgroundRepeat: "no-repeat",
                  transition: "background-size 1.5s ease 0.5s",
                }} />
            </div>

            {process.map((step, i) => (
              <div key={step.num}
                className={`reveal${processVisible ? " visible" : ""} group flex flex-col items-center text-center relative`}
                style={{ transitionDelay: `${i * 0.2}s` }}>
                <div className="relative mb-6 z-10">
                  {/* Ripple on hover */}
                  <div className="absolute inset-0 rounded-2xl bg-[#FF7A00]/20 scale-100 opacity-0 group-hover:animate-ripple pointer-events-none" />
                  <div className="w-20 h-20 rounded-2xl bg-orange-50 border-2 border-orange-100 group-hover:bg-[#FF7A00] group-hover:border-[#FF7A00] flex flex-col items-center justify-center gap-1 transition-all duration-300 shadow-sm group-hover:shadow-[0_8px_30px_rgba(255,122,0,0.4)] group-hover:scale-110">
                    <span className="text-xs font-bold text-[#FF7A00] group-hover:text-white/70 transition-colors">{step.num}</span>
                    <step.icon className="w-5 h-5 text-[#FF7A00] group-hover:text-white transition-colors" />
                  </div>
                </div>
                <h3 className="text-base font-bold text-[#0A0F2C] mb-2 group-hover:text-[#FF7A00] transition-colors duration-300">{step.title}</h3>
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
          {/* Double row marquee for depth */}
          <div className="space-y-3 overflow-hidden">
            <div className="flex gap-3 animate-marquee" style={{ width: "max-content" }}>
              {[...stack, ...stack].map((t, i) => (
                <span key={i}
                  className="px-5 py-2.5 text-sm font-semibold text-gray-600 bg-white border border-gray-200 rounded-xl hover:border-[#FF7A00]/40 hover:text-[#FF7A00] hover:bg-orange-50 hover:shadow-md hover:scale-105 hover:-translate-y-0.5 transition-all duration-200 cursor-default whitespace-nowrap">
                  {t}
                </span>
              ))}
            </div>
            <div className="flex gap-3" style={{ width: "max-content", animation: "marquee 28s linear infinite reverse" }}>
              {[...stack, ...stack].reverse().map((t, i) => (
                <span key={i}
                  className="px-5 py-2.5 text-sm font-semibold text-gray-600 bg-white border border-gray-200 rounded-xl hover:border-[#FF7A00]/40 hover:text-[#FF7A00] hover:bg-orange-50 hover:shadow-md hover:scale-105 hover:-translate-y-0.5 transition-all duration-200 cursor-default whitespace-nowrap">
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
      <section className="py-24 px-6 bg-[#FAFAFA] border-t border-gray-100" ref={testimonialsRef}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-bold text-[#FF7A00] uppercase tracking-widest mb-3">Client Stories</p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#0A0F2C]">
              What our clients{" "}
              <span style={{ backgroundImage: "linear-gradient(135deg,#FF7A00,#FF9E3D)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                say
              </span>
            </h2>
            <p className="mt-4 text-gray-500 max-w-xl mx-auto">Real feedback from startups, student teams, and businesses we've worked with.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={t.name} className="card-3d" style={{ "--stagger-index": i }}>
                <div
                  className={`reveal-stagger-child${testimonialsVisible ? " visible" : ""} card-3d-inner card-shine group bg-white rounded-3xl border border-gray-100 p-8 shadow-sm hover:shadow-[0_16px_50px_rgba(255,122,0,0.12)] hover:border-[#FF7A00]/25 transition-all duration-300`}
                  style={{ "--stagger-index": i }}
                >
                  {/* Quote mark decoration */}
                  <div className="absolute top-6 right-6 text-5xl font-serif text-orange-100 leading-none select-none pointer-events-none group-hover:text-orange-200 transition-colors duration-300">"</div>
                  <div className="flex gap-1 mb-5">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-[#FF7A00] text-[#FF7A00]" />
                    ))}
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed mb-6 italic relative z-10">"{t.quote}"</p>
                  <div className="flex items-center gap-3 pt-5 border-t border-gray-100">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${t.color} flex items-center justify-center text-white font-bold text-xs flex-shrink-0 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                      {t.initials}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-[#0A0F2C]">{t.name}</p>
                      <p className="text-xs text-gray-400">{t.company}</p>
                    </div>
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
      <section className="py-24 px-6" ref={ctaRef}>
        <div className="max-w-5xl mx-auto">
          <div
            className={`reveal${ctaVisible ? " visible" : ""} relative overflow-hidden rounded-3xl px-10 py-16 md:py-20 text-center text-white animate-aurora`}
            style={{ background: "linear-gradient(135deg, #FF7A00 0%, #FF9E3D 25%, #FF7A00 50%, #e86e00 75%, #FF9E3D 100%)" }}
          >
            {/* Morphing decorative blobs */}
            <div className="absolute -top-16 -right-16 w-64 h-64 bg-white/10 animate-morph" />
            <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-white/10 animate-morph" style={{ animationDelay: "3s" }} />
            <div className="absolute top-8 left-8 w-24 h-24 bg-white/10 animate-morph" style={{ animationDelay: "6s" }} />
            {/* Spinning decorative rings */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
              <div className="w-[520px] h-[520px] rounded-full border border-white/10 animate-spin-slow" />
              <div className="absolute w-[360px] h-[360px] rounded-full border border-white/8 animate-spin-slow" style={{ animationDirection: "reverse", animationDuration: "15s" }} />
              <div className="absolute w-[200px] h-[200px] rounded-full border border-white/5 animate-spin-slow" style={{ animationDuration: "10s" }} />
            </div>
            {/* Floating dots */}
            <div className="absolute inset-0 pointer-events-none">
              {[
                { x: "10%", y: "20%", size: 4, dur: 6 },
                { x: "85%", y: "30%", size: 3, dur: 8 },
                { x: "20%", y: "75%", size: 5, dur: 7 },
                { x: "75%", y: "80%", size: 3, dur: 9 },
                { x: "50%", y: "15%", size: 4, dur: 6 },
              ].map((d, i) => (
                <div key={i} className="absolute rounded-full bg-white/20"
                  style={{ left: d.x, top: d.y, width: d.size, height: d.size,
                    animation: `particleFloat ${d.dur}s ease-in-out infinite`, animationDelay: `${i}s` }} />
              ))}
            </div>

            <div className="relative z-10">
              <p className="text-xs font-bold uppercase tracking-widest mb-4 text-white/70">Let's Build Together</p>
              <h2 className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight">
                Ready to launch your<br />next big idea?
              </h2>
              <p className="text-white/80 text-lg max-w-xl mx-auto mb-10">
                Partner with Kodeneurons — where engineering precision meets innovation.
                We're ready when you are.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link to="/contact"
                  className="animate-pulse-ring group flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-[#FF7A00] bg-white hover:bg-orange-50 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                  Start a Project
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                <Link to="/projects"
                  className="flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-white border-2 border-white/30 hover:border-white hover:bg-white/10 hover:scale-105 transition-all duration-300">
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
