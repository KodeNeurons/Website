import { Calendar, Clock, ArrowRight, BookOpen, TrendingUp, Cpu, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

const articles = [
    {
        id: 1,
        title: "How We Built a Real-Time Sign Language Detection System with Deep Learning",
        summary: "A deep dive into the architecture of our Unified Sign Language Detection system — from data collection and model training to real-time inference with MediaPipe and TensorFlow.",
        category: "AI / ML",
        icon: Cpu,
        color: "from-orange-400 to-orange-600",
        readTime: "8 min read",
        date: "March 2026",
        featured: true,
        tags: ["TensorFlow", "MediaPipe", "Computer Vision", "Python"],
    },
    {
        id: 2,
        title: "RAG vs Fine-Tuning: Which Should You Use for Your LLM Product?",
        summary: "Retrieval-Augmented Generation and fine-tuning both have their place. We break down when to use each approach, real cost trade-offs, and our go-to architecture for production LLM apps.",
        category: "AI Engineering",
        icon: BookOpen,
        color: "from-violet-500 to-purple-600",
        readTime: "6 min read",
        date: "March 2026",
        featured: false,
        tags: ["LLM", "RAG", "OpenAI", "LangChain"],
    },
    {
        id: 3,
        title: "Why Most College Projects Fail — and How to Ship Yours That Actually Works",
        summary: "We've helped 50+ students and final-year teams deliver working software on academic deadlines. Here's what separates a successful project from a last-minute disaster.",
        category: "Product",
        icon: TrendingUp,
        color: "from-emerald-500 to-teal-600",
        readTime: "5 min read",
        date: "February 2026",
        featured: false,
        tags: ["Project Management", "Tips", "College Projects"],
    },
    {
        id: 4,
        title: "Building a Scalable Full-Stack App in 2 Weeks: Our Sprint Playbook",
        summary: "Our internal sprint framework that allows us to design, build, and ship full-stack products in record time without cutting corners on quality.",
        category: "Engineering",
        icon: Globe,
        color: "from-sky-500 to-cyan-600",
        readTime: "7 min read",
        date: "February 2026",
        featured: false,
        tags: ["React", "Node.js", "DevOps", "Agile"],
    },
    {
        id: 5,
        title: "The Hidden Costs of 'Cheap' Freelancers: What Businesses Learn Too Late",
        summary: "Why the lowest bid often ends up being the most expensive choice — and what to look for when evaluating software development partners.",
        category: "Business",
        icon: TrendingUp,
        color: "from-rose-500 to-pink-600",
        readTime: "4 min read",
        date: "January 2026",
        featured: false,
        tags: ["Business", "Outsourcing", "Quality"],
    },
    {
        id: 6,
        title: "Android in 2026: Jetpack Compose, AI Features, and What's Next",
        summary: "A practical overview of the modern Android development landscape — from Compose UI patterns to on-device AI APIs and predictive back gestures.",
        category: "Mobile",
        icon: Cpu,
        color: "from-amber-500 to-orange-500",
        readTime: "6 min read",
        date: "January 2026",
        featured: false,
        tags: ["Android", "Kotlin", "Jetpack Compose", "AI"],
    },
];



export default function Blog() {
    const featured = articles.find((a) => a.featured);
    const rest = articles.filter((a) => !a.featured);

    return (
        <div className="bg-white text-[#0A0F2C] min-h-screen">
            <SEO
                title="Engineering Blog & AI Insights"
                description="Engineering deep dives, AI insights, product thinking, and lessons from building real-world software by the KodeNeurons team."
                path="/blog"
            />

            {/* ─── Hero ─── */}
            <section className="relative pt-32 pb-16 px-6 overflow-hidden">
                <div className="absolute -top-24 right-0 w-[450px] h-[450px] rounded-full pointer-events-none opacity-50"
                    style={{ background: "radial-gradient(circle, rgba(255,122,0,0.08), transparent 65%)" }} />
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 border border-orange-200 text-[#FF7A00] text-xs font-semibold tracking-widest uppercase mb-6">
                        <BookOpen className="w-3.5 h-3.5" />
                        Insights & Engineering
                    </div>
                    <h1 className="text-5xl md:text-6xl font-extrabold mb-5 text-[#0A0F2C]">
                        The{" "}
                        <span style={{ backgroundImage: "linear-gradient(135deg,#FF7A00,#FF9E3D)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                            KodeNeurons
                        </span>{" "}
                        Blog
                    </h1>
                    <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                        Engineering deep dives, AI insights, product thinking, and lessons from building real-world software.
                    </p>
                </div>
            </section>

            {/* ─── Featured Article ─── */}
            <section className="px-6 pb-16">
                <div className="max-w-7xl mx-auto">
                    <div className={`group relative rounded-3xl overflow-hidden bg-gradient-to-br ${featured.color} p-0.5 shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer`}>
                        <div className="bg-[#0A0F2C] rounded-3xl p-10 md:p-14 flex flex-col md:flex-row gap-10 items-center">
                            <div className="md:w-1/2">
                                <div className="flex items-center gap-3 mb-5">
                                    <span className="text-xs font-bold uppercase tracking-wide text-[#FF7A00] bg-[#FF7A00]/15 border border-[#FF7A00]/30 px-3 py-1 rounded-full">Featured</span>
                                    <span className="text-xs text-gray-500">{featured.category}</span>
                                </div>
                                <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4 leading-snug group-hover:text-[#FF9E3D] transition-colors">
                                    {featured.title}
                                </h2>
                                <p className="text-gray-400 text-sm leading-relaxed mb-6">{featured.summary}</p>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {featured.tags.map((t) => (
                                        <span key={t} className="text-[10px] font-semibold text-gray-300 bg-white/10 rounded-lg px-2.5 py-1">{t}</span>
                                    ))}
                                </div>
                                <div className="flex items-center gap-4 text-xs text-gray-500">
                                    <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> {featured.date}</span>
                                    <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> {featured.readTime}</span>
                                </div>
                            </div>
                            <div className="md:w-1/2 flex justify-center">
                                <div className={`w-56 h-56 rounded-3xl bg-gradient-to-br ${featured.color} flex items-center justify-center shadow-2xl group-hover:scale-105 transition-transform duration-500`}>
                                    <featured.icon className="w-24 h-24 text-white/90" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── Articles Grid ─── */}
            <section className="pb-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="text-2xl font-extrabold text-[#0A0F2C]">More Articles</h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {rest.map((article) => (
                            <div key={article.id}
                                className="group bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-[0_12px_40px_rgba(255,122,0,0.10)] hover:border-[#FF7A00]/20 hover:-translate-y-1 transition-all duration-300 cursor-pointer">

                                {/* Color top banner */}
                                <div className={`h-2 bg-gradient-to-r ${article.color}`} />

                                <div className="p-6">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${article.color} flex items-center justify-center shadow-sm`}>
                                            <article.icon className="w-5 h-5 text-white" />
                                        </div>
                                        <span className="text-xs font-semibold text-gray-400 bg-gray-50 border border-gray-200 rounded-full px-3 py-1">
                                            {article.category}
                                        </span>
                                    </div>

                                    <h3 className="font-bold text-[#0A0F2C] text-base mb-2 leading-snug line-clamp-2 group-hover:text-[#FF7A00] transition-colors">
                                        {article.title}
                                    </h3>
                                    <p className="text-sm text-gray-500 leading-relaxed mb-4 line-clamp-3">{article.summary}</p>

                                    <div className="flex flex-wrap gap-1.5 mb-5">
                                        {article.tags.slice(0, 2).map((t) => (
                                            <span key={t} className="text-[10px] font-medium text-gray-500 bg-gray-50 border border-gray-200 rounded-lg px-2 py-0.5">{t}</span>
                                        ))}
                                    </div>

                                    <div className="flex items-center justify-between pt-4 border-t border-gray-100 text-xs text-gray-400">
                                        <span className="flex items-center gap-1.5"><Calendar className="w-3 h-3" /> {article.date}</span>
                                        <span className="flex items-center gap-1.5"><Clock className="w-3 h-3" /> {article.readTime}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── Newsletter CTA ─── */}
            <section className="py-20 px-6 bg-[#FAFAFA] border-t border-gray-100">
                <div className="max-w-2xl mx-auto text-center">
                    <div className="w-14 h-14 rounded-2xl bg-[#FF7A00] flex items-center justify-center mx-auto mb-5 shadow-[0_4px_20px_rgba(255,122,0,0.35)]">
                        <BookOpen className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-3xl font-extrabold text-[#0A0F2C] mb-3">Have a project we should write about?</h2>
                    <p className="text-gray-500 mb-8">Working on something interesting? We'd love to collaborate and feature your project here.</p>
                    <Link to="/contact"
                        className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-white bg-[#FF7A00] hover:bg-[#e86e00] shadow-[0_4px_20px_rgba(255,122,0,0.35)] hover:scale-105 transition-all duration-300">
                        Get in Touch <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </section>
        </div>
    );
}
