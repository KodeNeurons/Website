import { FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";
import {
  ArrowRight, Lightbulb, Target, Rocket, Heart,
  CheckCircle2, Star, Shield, Users, Globe, Brain, Zap,
  Code2, Smartphone, Database, TrendingUp, Clock, Coffee,
} from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import { buildBreadcrumbSchema, buildUrl } from "../lib/siteMetadata";
import { useScrollReveal } from "../hooks/useScrollReveal";
import afro from "../pages/imageF/aff.png";
import nachi from "../pages/imageF/my_photo.png";
import shoy from "../pages/imageF/shoyeb.png";

/* ─── Team Data ─── */
const team = [
  {
    name: "Shoyeb Chaudhari",
    role: "Co-Founder",
    title: "Tech Architect & Innovator",
    image: shoy,
    bio: "The engine behind KodeNeurons' technical architecture. Shoyeb drives innovation across Android, Web, and AI/ML ecosystems — turning complex problems into elegant, scalable solutions with Python, PHP, Firebase, and AI automation.",
    quote: "Every problem is a puzzle waiting to be solved.",
    linkedin: "https://www.linkedin.com/in/shoyeb-chaudhari-033b44234/",
    email: "chaudharishoyeb@gmail.com",
    phone: "+91-7499601744",
    skills: ["Android", "AI/ML", "Firebase", "Python", "PHP", "System Design"],
    expertise: ["Native Android Dev", "API Architecture", "AI Automation", "Cloud Systems"],
    color: "from-orange-400 to-amber-500",
  },
  {
    name: "Nachiket Shinde",
    role: "Co-Founder",
    title: "AI Strategist & Product Visionary",
    image: nachi,
    bio: "Nachiket is the AI brain of KodeNeurons — leading all machine learning initiatives and product direction. With a deep passion for intelligent systems, he transforms data into real-world insights that drive business decisions.",
    quote: "The best AI is the one that quietly changes everything.",
    linkedin: "https://www.linkedin.com/in/nachiket-shinde-a4b378276/",
    email: "nachiketshinde8766@gmail.com",
    phone: "+91-8766055949",
    skills: ["ML/DL", "Data Science", "Product Strategy", "TensorFlow", "Python", "Research"],
    expertise: ["ML Model Training", "Data Pipelines", "AI Strategy", "Research & Analysis"],
    color: "from-blue-500 to-indigo-600",
  },
  {
    name: "Afroz Sheikh",
    role: "Co-Founder",
    title: "UI Engineer & Growth Contributor",
    image: afro,
    bio: "The creative force at KodeNeurons, Afroz bridges the gap between design and engineering. He brings digital products to life with modern front-end development, user-centric design thinking, and a sharp eye for detail.",
    quote: "Great design is invisible — users just feel it.",
    linkedin: "https://www.linkedin.com/in/afroz-sheikh-404268262/",
    email: "afrozsheikh1112@gmail.com",
    phone: "+91-9766432374",
    skills: ["React", "Next.js", "UI/UX", "Figma", "TailwindCSS", "Frontend Arch"],
    expertise: ["UI/UX Design", "React Development", "Design Systems", "Web Performance"],
    color: "from-emerald-500 to-teal-600",
  },
];

/* ─── Company Stats ─── */
const stats = [
  { value: "2024", label: "Founded", icon: Star },
  { value: "50+", label: "Projects Delivered", icon: TrendingUp },
  { value: "100%", label: "Client Satisfaction", icon: Heart },
  { value: "3", label: "Expert Co-Founders", icon: Users },
  { value: "24h", label: "Response Guarantee", icon: Clock },
  { value: "∞", label: "Ideas in Progress", icon: Lightbulb },
];

/* ─── Core Values ─── */
const coreValues = [
  {
    icon: Target,
    title: "Precision over Speed",
    desc: "We'd rather take an extra day and deliver something solid than ship something fragile. Quality is non-negotiable.",
    color: "bg-orange-50",
    iconColor: "text-[#FF7A00]",
  },
  {
    icon: Rocket,
    title: "Bias for Action",
    desc: "We move fast, test often, and learn by building. A working prototype beats a perfect plan every time.",
    color: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    icon: Heart,
    title: "Client Partnership",
    desc: "We don't just take briefs — we embed ourselves in your problem. Your success is genuinely our success.",
    color: "bg-rose-50",
    iconColor: "text-rose-500",
  },
  {
    icon: Brain,
    title: "Always Learning",
    desc: "The AI/software landscape changes weekly. We stay ahead so our clients always get modern, best-practice solutions.",
    color: "bg-violet-50",
    iconColor: "text-violet-600",
  },
  {
    icon: Shield,
    title: "Honesty First",
    desc: "If something won't work, we say so early. Transparent communication builds the kind of trust that outlasts any project.",
    color: "bg-emerald-50",
    iconColor: "text-emerald-600",
  },
  {
    icon: Globe,
    title: "Remote-Native",
    desc: "We work with clients across India and beyond. Clear async communication, timezone respect, and reliable delivery.",
    color: "bg-sky-50",
    iconColor: "text-sky-600",
  },
];

/* ─── Journey Timeline ─── */
const timeline = [
  {
    year: "Early 2024",
    title: "The Idea Sparks",
    desc: "Three final-year engineers frustrated with the gap between college and industry — decided to build something real. KodeNeurons began as a late-night conversation about AI and startups.",
  },
  {
    year: "Mid 2024",
    title: "First Projects Ship",
    desc: "We took on our first client work — college projects, MVPs, and small web apps. Learned more in 3 months of real shipping than in 3 years of coursework.",
  },
  {
    year: "Late 2024",
    title: "AI Focus Deepens",
    desc: "As client demand for AI grew, we invested heavily in ML engineering — building custom models, LLM integrations, and intelligent automation systems.",
  },
  {
    year: "2025",
    title: "Studio Grows",
    desc: "Grew to 50+ completed projects spanning AI, web, and mobile. Started working with startups and enterprises alongside our student and college project base.",
  },
  {
    year: "2026 & Beyond",
    title: "Full-Service AI Studio",
    desc: "KodeNeurons is now a full-cycle AI software studio — from MVP to production, from idea to impact. Expanding team, clients, and capabilities.",
  },
];

/* ─── Tech Capabilities ─── */
const techAreas = [
  { icon: Brain, label: "AI & Machine Learning", items: ["TensorFlow", "PyTorch", "scikit-learn", "Hugging Face", "LangChain", "FastAPI"] },
  { icon: Globe, label: "Web Development", items: ["React", "Next.js", "Node.js", "Django", "Spring Boot", "PostgreSQL"] },
  { icon: Smartphone, label: "Mobile", items: ["Kotlin", "Java", "Flutter", "React Native", "Firebase", "Play Store"] },
  { icon: Database, label: "Data & Cloud", items: ["AWS", "Docker", "MongoDB", "Airflow", "Power BI", "Vercel"] },
];

/* ─── What sets us apart ─── */
const differentiators = [
  "We've shipped 50+ real products — not just prototypes",
  "Every founder is actively coding, not just managing",
  "We specialize in AI-first products, not just AI features",
  "24-hour response guarantee for all active clients",
  "Student-friendly pricing with professional-grade quality",
  "Full IP transfer and code ownership on every project",
];

export default function About() {
  const [statsRef, statsVisible] = useScrollReveal(0.1);
  const [originRef, originVisible] = useScrollReveal(0.1);
  const [missionRef, missionVisible] = useScrollReveal(0.1);
  const [timelineRef, timelineVisible] = useScrollReveal(0.1);
  const [teamRef, teamVisible] = useScrollReveal(0.1);
  const [valuesRef, valuesVisible] = useScrollReveal(0.1);
  const [techRef, techVisible] = useScrollReveal(0.1);
  const [diffRef, diffVisible] = useScrollReveal(0.1);

  return (
    <div className="bg-white text-[#0A0F2C]">
      <SEO
        title="About Kodeneurons"
        description="Meet the founding team behind Kodeneurons — three engineers building AI-first software products for startups, students, and enterprises since 2024."
        path="/about"
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "AboutPage",
            name: "About Kodeneurons",
            url: buildUrl("/about"),
            description:
              "Background, team, values, and delivery philosophy behind Kodeneurons.",
          },
          buildBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
          ]),
        ]}
      />

      {/* ═══════════════════════════════ HERO ═══════════════════════════════ */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute -top-24 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(255,122,0,0.07), transparent 65%)" }} />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(10,15,44,0.03), transparent 65%)" }} />

        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 border border-orange-200 text-[#FF7A00] text-xs font-semibold tracking-widest uppercase mb-6">
            <Users className="w-3.5 h-3.5" />
            About Us
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.05] tracking-tight mb-7">
            We are{" "}
            <span style={{ backgroundImage: "linear-gradient(135deg,#FF7A00,#FF9E3D)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              KodeNeurons
            </span>
          </h1>
          <p className="text-xl text-gray-500 leading-relaxed max-w-3xl mx-auto mb-10">
            A next-generation AI tech studio founded by three engineers with one shared obsession:
            building software that actually works, actually ships, and actually makes a difference.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-white bg-[#FF7A00] hover:bg-[#e86e00] shadow-[0_4px_20px_rgba(255,122,0,0.35)] hover:scale-105 transition-all duration-300">
              Work With Us <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/projects"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-[#0A0F2C] border border-gray-200 hover:border-[#FF7A00]/40 hover:bg-orange-50 shadow-sm transition-all duration-300">
              See Our Work
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════ STATS ═══════════════════════════════ */}
      <section className="py-14 px-6 bg-[#0A0F2C]" ref={statsRef}>
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
          {stats.map(({ value, label, icon: Icon }, i) => (
            <div key={label} className={`reveal-scale${statsVisible ? " visible" : ""}`} style={{ transitionDelay: `${i * 0.1}s` }}>
              <Icon className="w-5 h-5 text-[#FF7A00] mx-auto mb-2 opacity-70" />
              <p className="text-3xl font-extrabold" style={{ backgroundImage: "linear-gradient(135deg,#FF7A00,#FF9E3D)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                {value}
              </p>
              <p className="text-xs text-gray-400 mt-1.5 font-medium">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════ ORIGIN STORY ═══════════════════════════════ */}
      <section className="py-24 px-6 bg-white" ref={originRef}>
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
          {/* Left: Text */}
          <div className={`reveal-left${originVisible ? " visible" : ""} lg:w-1/2`}>
            <p className="text-xs font-bold text-[#FF7A00] uppercase tracking-widest mb-4">Our Origin</p>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-[#0A0F2C] leading-tight">
              Built by builders,<br />for builders
            </h2>
            <div className="space-y-5 text-gray-500 text-base leading-relaxed">
              <p>
                KodeNeurons wasn't born in a boardroom — it started with three engineering students who were
                tired of building throwaway college projects that no one would ever use. We wanted to build
                <strong className="text-[#0A0F2C]"> real things for real people</strong>.
              </p>
              <p>
                Our first projects were scraped together — late nights, free tools, and a lot of trial and error.
                But with every delivery, we got better. We shipped faster, designed cleaner, and started to build
                a reputation: <strong className="text-[#0A0F2C]">KodeNeurons delivers</strong>.
              </p>
              <p>
                Today we're a full-service AI software studio — handling everything from a founder's first MVP
                to enterprise-scale AI infrastructure. Our founding team is still coding, still shipping,
                and still obsessed with the craft.
              </p>
            </div>
          </div>

          {/* Right: Quote / highlight card */}
          <div className={`reveal-right${originVisible ? " visible" : ""} lg:w-1/2`} style={{ transitionDelay: "0.2s" }}>
            <div className="relative bg-[#0A0F2C] rounded-3xl p-10 text-white overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 rounded-full"
                style={{ background: "radial-gradient(circle, rgba(255,122,0,0.15), transparent 70%)" }} />
              <div className="absolute bottom-0 left-0 w-40 h-40 rounded-full"
                style={{ background: "radial-gradient(circle, rgba(74,108,247,0.10), transparent 70%)" }} />
              <div className="relative z-10">
                <div className="text-5xl text-[#FF7A00] font-serif mb-4">"</div>
                <p className="text-xl font-medium leading-relaxed text-gray-200 mb-6">
                  We didn't start KodeNeurons to be another freelance agency.
                  We started it to prove that India's engineering talent can build
                  world-class AI and software products — right from day one.
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FF7A00] to-[#FF9E3D] flex items-center justify-center text-white font-bold text-sm">KN</div>
                  <div>
                    <p className="font-bold text-white text-sm">The KodeNeurons Team</p>
                    <p className="text-gray-400 text-xs">Co-Founders · 2024</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════ MISSION & VISION ═══════════════════════════════ */}
      <section className="py-20 px-6 bg-[#FAFAFA] border-y border-gray-100" ref={missionRef}>
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
          <div className={`reveal-left${missionVisible ? " visible" : ""} bg-white rounded-3xl border border-gray-100 p-8 shadow-sm hover:shadow-md transition-shadow`}>
            <div className="w-12 h-12 rounded-2xl bg-orange-50 flex items-center justify-center mb-5">
              <Target className="w-6 h-6 text-[#FF7A00]" />
            </div>
            <h3 className="text-2xl font-extrabold text-[#0A0F2C] mb-3">Our Mission</h3>
            <p className="text-gray-500 leading-relaxed text-base">
              To make world-class AI and software engineering accessible to startups, students, and
              enterprises — building products with the precision of a large studio and the passion of a
              founding team. We don't just write code. We solve problems.
            </p>
          </div>
          <div className={`reveal-right${missionVisible ? " visible" : ""} bg-white rounded-3xl border border-gray-100 p-8 shadow-sm hover:shadow-md transition-shadow`} style={{ transitionDelay: "0.2s" }}>
            <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center mb-5">
              <Lightbulb className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-2xl font-extrabold text-[#0A0F2C] mb-3">Our Vision</h3>
            <p className="text-gray-500 leading-relaxed text-base">
              A future where every ambitious idea — no matter the budget or stage — has access to engineering
              talent that can bring it to life. KodeNeurons will be the studio that helped a generation of
              builders turn their ideas into real companies.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════ TIMELINE ═══════════════════════════════ */}
      <section className="py-24 px-6 bg-white" ref={timelineRef}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-bold text-[#FF7A00] uppercase tracking-widest mb-3">Our Journey</p>
            <h2 className="text-4xl font-extrabold text-[#0A0F2C]">How we got here</h2>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-7 top-0 bottom-0 w-px bg-gradient-to-b from-[#FF7A00] via-orange-200 to-transparent" />

            <div className="space-y-10">
              {timeline.map(({ year, title, desc }, i) => (
                <div key={year} className={`reveal-stagger-child${timelineVisible ? " visible" : ""} relative flex gap-8 pl-20`} style={{ "--stagger-index": i }}>
                  {/* Dot */}
                  <div className="absolute left-4 top-1 w-7 h-7 rounded-full border-2 border-[#FF7A00] bg-white flex items-center justify-center z-10">
                    <div className="w-3 h-3 rounded-full bg-[#FF7A00]" />
                  </div>
                  <div className="flex-1">
                    <span className="inline-block text-xs font-bold text-[#FF7A00] bg-orange-50 border border-orange-200 px-3 py-1 rounded-full mb-2">
                      {year}
                    </span>
                    <h3 className="text-lg font-extrabold text-[#0A0F2C] mb-2">{title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════ TEAM ═══════════════════════════════ */}
      <section className="py-24 px-6 bg-[#FAFAFA] border-t border-gray-100" ref={teamRef}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-bold text-[#FF7A00] uppercase tracking-widest mb-3">The Founders</p>
            <h2 className="text-4xl font-extrabold text-[#0A0F2C]">Meet the team building KodeNeurons</h2>
            <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
              Three engineers who decided to stop waiting for the perfect job and build the perfect company instead.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((person, i) => (
              <div key={i} className={`reveal-stagger-child${teamVisible ? " visible" : ""} group bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-[0_16px_50px_rgba(255,122,0,0.12)] hover:border-[#FF7A00]/20 hover:-translate-y-1.5 transition-all duration-400`} style={{ "--stagger-index": i }}>

                {/* Gradient top bar */}
                <div className={`h-2 bg-gradient-to-r ${person.color}`} />

                <div className="p-8">
                  {/* Avatar + info */}
                  <div className="flex items-center gap-4 mb-5">
                    <img src={person.image} alt={person.name} loading="lazy"
                      className="w-20 h-20 rounded-2xl object-cover shadow-md group-hover:shadow-[0_6px_20px_rgba(255,122,0,0.2)] transition-shadow duration-300" />
                    <div>
                      <h3 className="text-lg font-extrabold text-[#0A0F2C]">{person.name}</h3>
                      <p className="text-xs font-bold text-[#FF7A00] uppercase tracking-wide">{person.role}</p>
                      <p className="text-xs text-gray-500 mt-0.5">{person.title}</p>
                    </div>
                  </div>

                  {/* Quote */}
                  <div className="bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 mb-4">
                    <p className="text-xs italic text-gray-500">"{person.quote}"</p>
                  </div>

                  {/* Bio */}
                  <p className="text-sm text-gray-500 leading-relaxed mb-5">{person.bio}</p>

                  {/* Expertise */}
                  <div className="mb-5">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">Expertise</p>
                    <div className="flex flex-wrap gap-1.5">
                      {person.expertise.map((e) => (
                        <span key={e} className="text-xs font-medium text-[#FF7A00] bg-orange-50 border border-orange-200 rounded-lg px-2.5 py-1">{e}</span>
                      ))}
                    </div>
                  </div>

                  {/* Skills */}
                  <div className="mb-6">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">Technologies</p>
                    <div className="flex flex-wrap gap-1.5">
                      {person.skills.map((s) => (
                        <span key={s} className="text-[10px] font-medium text-gray-500 bg-gray-50 border border-gray-200 rounded-lg px-2 py-0.5">{s}</span>
                      ))}
                    </div>
                  </div>

                  {/* Social */}
                  <div className="flex items-center gap-2 pt-5 border-t border-gray-100">
                    {[
                      { icon: FaLinkedin, href: person.linkedin, label: "LinkedIn" },
                      { icon: FaEnvelope, href: `mailto:${person.email}`, label: "Email" },
                      { icon: FaPhone, href: `tel:${person.phone}`, label: "Phone" },
                    ].map(({ icon: Icon, href, label }) => (
                      <a key={label} href={href} target={label === "LinkedIn" ? "_blank" : undefined} rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-1.5 py-2 text-xs font-medium text-gray-400 rounded-lg bg-gray-50 border border-gray-200 hover:text-[#FF7A00] hover:border-[#FF7A00]/30 hover:bg-orange-50 transition-all duration-200">
                        <Icon size={12} /> {label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════ CORE VALUES ═══════════════════════════════ */}
      <section className="py-24 px-6 bg-white" ref={valuesRef}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-bold text-[#FF7A00] uppercase tracking-widest mb-3">How We Operate</p>
            <h2 className="text-4xl font-extrabold text-[#0A0F2C]">Our Core Values</h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">The principles that shape every line of code we write and every client relationship we build.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map(({ icon: Icon, title, desc, color, iconColor }, i) => (
              <div key={title}
                className={`reveal-stagger-child${valuesVisible ? " visible" : ""} group bg-white rounded-2xl border border-gray-100 p-7 shadow-sm hover:shadow-[0_8px_30px_rgba(255,122,0,0.08)] hover:border-[#FF7A00]/20 hover:-translate-y-1 transition-all duration-300`}
                style={{ "--stagger-index": i }}>
                <div className={`w-11 h-11 rounded-xl ${color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                  <Icon className={`w-5 h-5 ${iconColor}`} />
                </div>
                <h3 className="font-extrabold text-[#0A0F2C] mb-2 text-base">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════ TECH CAPABILITIES ═══════════════════════════════ */}
      <section className="py-20 px-6 bg-[#FAFAFA] border-t border-gray-100" ref={techRef}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-bold text-[#FF7A00] uppercase tracking-widest mb-3">Our Stack</p>
            <h2 className="text-4xl font-extrabold text-[#0A0F2C]">Technologies we master</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {techAreas.map(({ icon: Icon, label, items }, i) => (
              <div key={label} className={`reveal-stagger-child${techVisible ? " visible" : ""} bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-md hover:border-[#FF7A00]/20 transition-all duration-300`} style={{ "--stagger-index": i }}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-xl bg-orange-50 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-4 h-4 text-[#FF7A00]" />
                  </div>
                  <p className="text-sm font-bold text-[#0A0F2C]">{label}</p>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {items.map((t) => (
                    <span key={t} className="text-xs text-gray-500 bg-gray-50 border border-gray-200 rounded-lg px-2.5 py-1 font-medium">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════ WHAT SETS US APART ═══════════════════════════════ */}
      <section className="py-20 px-6 bg-white" ref={diffRef}>
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className={`reveal-left${diffVisible ? " visible" : ""} lg:w-1/2`}>
            <p className="text-xs font-bold text-[#FF7A00] uppercase tracking-widest mb-3">Why KodeNeurons</p>
            <h2 className="text-4xl font-extrabold text-[#0A0F2C] mb-6 leading-tight">
              What sets us apart from every other studio
            </h2>
            <p className="text-gray-500 mb-8 text-base leading-relaxed">
              There are thousands of freelancers and agencies out there. Here's why clients come to us — and why they stay.
            </p>
            <Link to="/services" className="inline-flex items-center gap-2 text-sm font-semibold text-[#FF7A00] hover:text-[#e86e00] mb-8 transition-colors">
              View all our services <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <div className="space-y-4">
              {differentiators.map((d) => (
                <div key={d} className="flex items-start gap-3">
                  <div className="mt-0.5 w-5 h-5 rounded-full bg-orange-50 border border-orange-200 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-3 h-3 text-[#FF7A00]" />
                  </div>
                  <p className="text-sm text-gray-600">{d}</p>
                </div>
              ))}
            </div>
          </div>
          <div className={`reveal-right${diffVisible ? " visible" : ""} lg:w-1/2 grid grid-cols-2 gap-4`} style={{ transitionDelay: "0.2s" }}>
            {[
              { icon: Code2, title: "Code Ownership", desc: "100% IP transfer. All source code and assets are yours, always.", color: "text-[#FF7A00]", bg: "bg-orange-50" },
              { icon: Zap, title: "Fast Turnaround", desc: "Most projects shipped in 1–6 weeks from first call to delivery.", color: "text-blue-600", bg: "bg-blue-50" },
              { icon: Coffee, title: "Founder-Led", desc: "Every project is personally overseen by one of the co-founders.", color: "text-emerald-600", bg: "bg-emerald-50" },
              { icon: Shield, title: "NDA Protected", desc: "Sign NDAs before any discussion. Your idea is completely safe.", color: "text-violet-600", bg: "bg-violet-50" },
            ].map(({ icon: Icon, title, desc, color, bg }) => (
              <div key={title} className="bg-white  rounded-2xl border border-gray-100 p-5 shadow-sm hover:shadow-md hover:border-[#FF7A00]/20 transition-all duration-300">
                <div className={`w-10 h-10 rounded-xl ${bg} flex items-center justify-center mb-3`}>
                  <Icon className={`w-5 h-5 ${color}`} />
                </div>
                <h4 className="font-bold text-[#0A0F2C] text-sm mb-1.5">{title}</h4>
                <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════ CTA ═══════════════════════════════ */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto rounded-3xl overflow-hidden relative text-white text-center px-8 py-16"
          style={{ background: "linear-gradient(135deg, #FF7A00, #FF9E3D)" }}>
          <div className="absolute -top-12 -right-12 w-56 h-56 rounded-full bg-white/10" />
          <div className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-white/10" />
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Ready to work with us?</h2>
            <p className="text-white/80 text-lg max-w-xl mx-auto mb-10">
              Whether you're a startup founder, enterprise team, or final-year student with a deadline — let's build something great together.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact"
                className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-[#FF7A00] bg-white hover:bg-orange-50 shadow-lg hover:scale-105 transition-all duration-300">
                Start a Project <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link to="/careers"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-white border-2 border-white/30 hover:border-white hover:bg-white/10 transition-all duration-300">
                Join Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
