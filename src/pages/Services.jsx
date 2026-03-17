import {
    Brain, Globe, Smartphone, Database,
    CheckCircle2, ArrowRight, Star,
    Cloud, Bot, Layers,
} from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

const categories = [
    {
        icon: Brain,
        color: "from-orange-400 to-orange-600",
        lightBg: "bg-orange-50",
        lightBorder: "border-orange-200",
        lightText: "text-[#FF7A00]",
        title: "Artificial Intelligence & Machine Learning",
        tagline: "Turn data into decisions",
        desc: "We design and deploy end-to-end AI systems — from raw data ingestion to real-time inference APIs. Our ML solutions power smarter decisions, automated workflows, and predictive insights at scale.",
        features: [
            "Custom model training (NLP, CV, tabular)",
            "Predictive analytics and recommendation engines",
            "Real-time inference with sub-100ms APIs",
            "LLM integration and RAG architectures",
            "Automated ML pipelines and MLOps",
            "Explainable AI with audit dashboards",
        ],
        tools: ["TensorFlow", "PyTorch", "scikit-learn", "LangChain", "FastAPI", "Hugging Face"],
        badge: "Most Requested",
    },
    {
        icon: Globe,
        color: "from-blue-500 to-indigo-600",
        lightBg: "bg-blue-50",
        lightBorder: "border-blue-200",
        lightText: "text-blue-600",
        title: "Full-Stack Web Development",
        tagline: "Build products users love",
        desc: "From landing pages to enterprise SaaS platforms, we engineer performant, beautiful web applications with clean code, robust APIs, and scalable infrastructure — designed to grow with your business.",
        features: [
            "React / Next.js frontends with pixel-perfect UI",
            "Node.js, Django, Spring Boot backends",
            "REST & GraphQL API design",
            "Role-based auth with OAuth2 / JWT",
            "Database design (PostgreSQL, MongoDB)",
            "Cloud deployment (AWS, Vercel, Railway)",
        ],
        tools: ["React", "Next.js", "Node.js", "Django", "Spring Boot", "PostgreSQL"],
        badge: null,
    },
    {
        icon: Smartphone,
        color: "from-emerald-500 to-teal-600",
        lightBg: "bg-emerald-50",
        lightBorder: "border-emerald-200",
        lightText: "text-emerald-600",
        title: "Android & Mobile Development",
        tagline: "Native-feel, any platform",
        desc: "We craft mobile apps that feel fast, intuitive, and native — whether on Android, iOS, or cross-platform. Our apps focus on offline-first design, great UX, and seamless backend integration.",
        features: [
            "Native Android (Kotlin / Java)",
            "Cross-platform with Flutter or React Native",
            "Real-time data sync with Firebase",
            "Push notifications and deep linking",
            "Play Store deployment and optimization",
            "Offline-first architecture",
        ],
        tools: ["Kotlin", "Java", "Flutter", "React Native", "Firebase", "Gradle"],
        badge: null,
    },
    {
        icon: Database,
        color: "from-purple-500 to-violet-600",
        lightBg: "bg-purple-50",
        lightBorder: "border-purple-200",
        lightText: "text-purple-600",
        title: "Data Engineering & Analytics",
        desc: "We design the data infrastructure your business runs on — from ETL pipelines to real-time analytics dashboards. If you're drowning in data but lacking insights, we fix that.",
        tagline: "From raw data to real insights",
        features: [
            "ETL pipelines with Apache Airflow / Kafka",
            "Data warehouse design (BigQuery, Redshift)",
            "BI dashboards (Power BI, Metabase)",
            "Real-time streaming analytics",
            "Data quality and governance frameworks",
            "API-first analytics integrations",
        ],
        tools: ["Python", "Airflow", "Kafka", "BigQuery", "dbt", "Metabase"],
        badge: null,
    },
    {
        icon: Cloud,
        color: "from-sky-500 to-cyan-600",
        lightBg: "bg-sky-50",
        lightBorder: "border-sky-200",
        lightText: "text-sky-600",
        title: "Cloud, DevOps & Automation",
        tagline: "Ship faster, scale confidently",
        desc: "We build the deployment infrastructure that allows your team to ship code with confidence. CI/CD pipelines, containerization, monitoring, and cloud architecture that scales without surprises.",
        features: [
            "CI/CD with GitHub Actions / GitLab CI",
            "Docker and Kubernetes orchestration",
            "AWS, GCP, Azure infrastructure setup",
            "Infrastructure as Code (Terraform)",
            "Application monitoring and alerting",
            "Zero-downtime deployment strategies",
        ],
        tools: ["Docker", "K8s", "Terraform", "GitHub Actions", "AWS", "Prometheus"],
        badge: null,
    },
    {
        icon: Bot,
        color: "from-rose-500 to-pink-600",
        lightBg: "bg-rose-50",
        lightBorder: "border-rose-200",
        lightText: "text-rose-600",
        title: "AI Agents & Automation",
        tagline: "Work smarter, not harder",
        desc: "We build autonomous AI agents and intelligent automation workflows that handle repetitive tasks, retrieve information, make decisions, and integrate seamlessly with your existing tools.",
        features: [
            "LLM-powered agents (GPT-4, Claude, Gemini)",
            "Tool-using agents with custom function calling",
            "Business workflow automation",
            "Chatbot development (WhatsApp, web, Slack)",
            "Document processing and extraction (OCR, NLP)",
            "Email, CRM, and calendar automation",
        ],
        tools: ["LangGraph", "CrewAI", "OpenAI", "Anthropic", "Zapier", "Make"],
        badge: "Trending",
    },
];

const deliveryPackages = [
    {
        name: "Starter",
        price: "₹X,XXX",
        period: "one-time",
        desc: "Perfect for college projects, MVPs, and proof-of-concepts.",
        highlights: ["1–2 week delivery", "1 core feature", "Basic UI/UX", "Code handoff", "30-day support"],
        cta: "Get Started",
        featured: false,
    },
    {
        name: "Professional",
        price: "₹XX,XXX",
        period: "project",
        desc: "Full-featured product for startups and growing businesses.",
        highlights: ["3–6 week delivery", "Full feature set", "Premium design", "API + database", "CI/CD setup", "90-day support"],
        cta: "Most Popular",
        featured: true,
    },
    {
        name: "Enterprise",
        price: "Custom",
        period: "quote",
        desc: "End-to-end AI & software for organizations at scale.",
        highlights: ["Custom timeline", "Unlimited scope", "AI integration", "Dedicated team", "SLA guarantee", "Ongoing retainer"],
        cta: "Talk to Us",
        featured: false,
    },
];

const faqs = [
    { q: "How quickly can you start?", a: "We typically kick off new projects within 3–5 business days. For urgent timelines, reach out and we'll do our best to accommodate." },
    { q: "Do you sign NDAs?", a: "Yes. We sign NDAs before any project discussion if required. Your ideas and IP are fully protected." },
    { q: "Do you take college project work?", a: "Absolutely — college projects are our roots. We offer student-friendly pricing and fast delivery for academic deadlines." },
    { q: "What's included in post-launch support?", a: "All packages include a post-launch support window for bug fixes, performance tweaks, and minor adjustments." },
    { q: "Can I see work samples before hiring?", a: "Yes! Visit our Projects page to watch live demos. We can also share private case studies under NDA." },
];

export default function Services() {
    // Generate FAQ Schema
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.q,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.a
            }
        }))
    };

    return (
        <div className="bg-white text-[#0A0F2C]">
            <SEO
                title="Our Services & Pricing"
                description="Explore our software engineering services: AI & Machine Learning, Full-Stack Web Development, Mobile Apps, Cloud architecture, and Analytics."
                keywords="AI services, machine learning, full-stack development, mobile apps, cloud, devops, data engineering, software studio"
                path="/services"
            />
            {/* Inject JSON-LD FAQ Schema */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            {/* ─── Hero ─── */}
            <section className="relative pt-32 pb-20 px-6 overflow-hidden">
                <div className="absolute -top-24 right-0 w-[500px] h-[500px] rounded-full pointer-events-none opacity-50"
                    style={{ background: "radial-gradient(circle, rgba(255,122,0,0.1), transparent 65%)" }} />
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 border border-orange-200 text-[#FF7A00] text-xs font-semibold tracking-widest uppercase mb-6">
                        <Layers className="w-3.5 h-3.5" />
                        Our Services
                    </div>
                    <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
                        Everything you need to{" "}
                        <span style={{ backgroundImage: "linear-gradient(135deg,#FF7A00,#FF9E3D)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                            build & scale
                        </span>
                    </h1>
                    <p className="text-lg text-gray-500 leading-relaxed max-w-2xl mx-auto">
                        Six core services. One team. From MVP to scale.
                    </p>
                    <div className="mt-8 flex flex-wrap gap-4 justify-center">
                        <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-white bg-[#FF7A00] hover:bg-[#e86e00] shadow-[0_4px_20px_rgba(255,122,0,0.35)] hover:scale-105 transition-all duration-300">
                            Start a Project <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* --- Services --- */}
            <section className="pb-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-10">
                        <p className="text-xs font-bold text-[#FF7A00] uppercase tracking-widest mb-3">What We Build</p>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-[#0A0F2C]">
                            Core services
                        </h2>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {categories.map((s) => (
                            <div
                                key={s.title}
                                className="group bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                            >
                                <div className={`h-1.5 bg-gradient-to-r ${s.color}`} />
                                <div className="p-7">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className={`w-12 h-12 rounded-2xl ${s.lightBg} ${s.lightBorder} border flex items-center justify-center`}>
                                            <s.icon className={`w-5 h-5 ${s.lightText}`} />
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Service</p>
                                            <h3 className="text-lg font-extrabold text-[#0A0F2C]">{s.title}</h3>
                                        </div>
                                    </div>

                                    <p className="text-sm text-gray-500 leading-relaxed mb-4">{s.tagline}</p>

                                    <div className="space-y-2">
                                        {s.features.slice(0, 2).map((f) => (
                                            <div key={f} className="flex items-start gap-2 text-sm text-gray-600">
                                                <CheckCircle2 className="w-4 h-4 text-[#FF7A00] mt-0.5 flex-shrink-0" />
                                                <span>{f}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="mt-5 pt-4 border-t border-gray-100">
                                        <Link to="/contact"
                                            className="inline-flex items-center gap-2 text-sm font-semibold text-[#FF7A00] hover:text-[#e86e00] group-hover:gap-3 transition-all duration-200">
                                            Get a quote <ArrowRight className="w-4 h-4" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* ─── Pricing ─── */}
            <section className="py-24 px-6 bg-[#FAFAFA] border-t border-gray-100">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-14">
                        <p className="text-xs font-bold text-[#FF7A00] uppercase tracking-widest mb-3">Pricing</p>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-[#0A0F2C]">Transparent, flexible packages</h2>
                        <p className="text-gray-500 mt-4 max-w-xl mx-auto">No hidden fees. No surprises. Clear deliverables and timelines from day one.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {deliveryPackages.map((pkg) => (
                            <div key={pkg.name}
                                className={`relative rounded-3xl p-8 transition-all duration-300 ${pkg.featured
                                    ? "bg-[#0A0F2C] text-white shadow-2xl scale-105"
                                    : "bg-white border border-gray-100 text-[#0A0F2C] shadow-sm hover:shadow-lg hover:-translate-y-1"
                                    }`}>
                                {pkg.featured && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FF7A00] text-white text-xs font-bold uppercase tracking-wide px-4 py-1.5 rounded-full shadow-lg">
                                        Most Popular
                                    </div>
                                )}
                                <p className={`text-sm font-bold uppercase tracking-widest mb-1 ${pkg.featured ? "text-[#FF9E3D]" : "text-[#FF7A00]"}`}>{pkg.name}</p>
                                <div className="flex items-end gap-1 mb-2">
                                    <span className="text-4xl font-extrabold">{pkg.price}</span>
                                    {pkg.period !== "quote" && <span className={`text-sm mb-1.5 ${pkg.featured ? "text-gray-400" : "text-gray-400"}`}>/{pkg.period}</span>}
                                </div>
                                <p className={`text-sm mb-7 ${pkg.featured ? "text-gray-400" : "text-gray-500"}`}>{pkg.desc}</p>
                                <ul className="space-y-3 mb-8">
                                    {pkg.highlights.map((h) => (
                                        <li key={h} className="flex items-center gap-2.5 text-sm">
                                            <CheckCircle2 className={`w-4 h-4 flex-shrink-0 ${pkg.featured ? "text-[#FF7A00]" : "text-[#FF7A00]"}`} />
                                            {h}
                                        </li>
                                    ))}
                                </ul>
                                <Link to="/contact"
                                    className={`block w-full text-center py-3.5 rounded-xl font-bold transition-all duration-300 hover:scale-105 ${pkg.featured
                                        ? "bg-[#FF7A00] text-white shadow-[0_4px_20px_rgba(255,122,0,0.4)] hover:bg-[#e86e00]"
                                        : "border-2 border-[#FF7A00] text-[#FF7A00] hover:bg-[#FF7A00] hover:text-white"
                                        }`}>
                                    {pkg.cta}
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── FAQ ─── */}
            <section className="py-24 px-6 bg-white">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-10">
                        <p className="text-xs font-bold text-[#FF7A00] uppercase tracking-widest mb-3">FAQ</p>
                        <h2 className="text-4xl font-extrabold text-[#0A0F2C]">Common questions</h2>
                    </div>
                    <div className="space-y-4">
                        {faqs.map(({ q, a }) => (
                            <div key={q} className="bg-[#FAFAFA] rounded-2xl border border-gray-100 p-6 hover:border-[#FF7A00]/25 hover:shadow-sm transition-all duration-200">
                                <div className="flex items-start gap-3">
                                    <div className="w-5 h-5 rounded-full bg-[#FF7A00] flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <Star className="w-2.5 h-2.5 text-white" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-[#0A0F2C] mb-2">{q}</p>
                                        <p className="text-gray-500 text-sm leading-relaxed">{a}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── CTA ─── */}
            <section className="py-20 px-6">
                <div className="max-w-4xl mx-auto rounded-3xl overflow-hidden relative text-white text-center px-8 py-16"
                    style={{ background: "linear-gradient(135deg, #FF7A00, #FF9E3D)" }}>
                    <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-white/10" />
                    <div className="absolute -bottom-14 -left-14 w-56 h-56 rounded-full bg-white/10" />
                    <div className="relative z-10">
                        <h2 className="text-4xl font-extrabold mb-4">Can't find what you need?</h2>
                        <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">Tell us your project requirements — we'll craft a custom solution just for you.</p>
                        <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-[#FF7A00] bg-white hover:bg-orange-50 shadow-lg hover:scale-105 transition-all duration-300">
                            Describe Your Project <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
