import {
    Rocket, Brain, ArrowRight, CheckCircle2, Users, Star,
    Coffee, Lightbulb, MessageSquare, Clock,
} from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import { buildBreadcrumbSchema, buildUrl } from "../lib/siteMetadata";
import { useScrollReveal } from "../hooks/useScrollReveal";

/* No open roles currently */

const perks = [
    { icon: Rocket, title: "Ship Real Products", desc: "Work on live client projects — not internal tools. Your work goes into production from week one." },
    { icon: Brain, title: "Learn by Doing", desc: "Exposure to AI, cloud, mobile, and web engineering across different industries and problems." },
    { icon: Coffee, title: "Flexible Schedule", desc: "Remote-first, async-friendly. We care about output quality, not clocked hours." },
    { icon: Lightbulb, title: "Mentorship Access", desc: "Direct access to the founding team. Ask questions, get code reviews, grow fast." },
    { icon: Star, title: "Portfolio Builder", desc: "Leave with a portfolio of real shipped products, a letter of recommendation, and startup experience." },
    { icon: MessageSquare, title: "Collaborative Culture", desc: "Flat hierarchy, open communication, and a culture where ideas from anyone can ship." },
];

const values = [
    "We default to action — we build first, discuss second",
    "We hire for curiosity, not just credentials",
    "We treat interns as contributors, not as resources",
    "We ship, then improve — perfection isn't the enemy of good",
];

export default function Careers() {
    const [statsRef, statsVisible] = useScrollReveal(0.1);
    const [perksRef, perksVisible] = useScrollReveal(0.05);
    const [rolesRef, rolesVisible] = useScrollReveal(0.05);
    const [valuesRef, valuesVisible] = useScrollReveal(0.1);
    return (
        <div className="bg-white text-[#0A0F2C] min-h-screen">
            <SEO
                title="Careers and Open Roles"
                description="Explore careers at Kodeneurons and apply for remote roles across AI, full-stack development, Android, and UI/UX."
                path="/careers"
                schema={[
                    {
                        "@context": "https://schema.org",
                        "@type": "CollectionPage",
                        name: "Kodeneurons Careers",
                        url: buildUrl("/careers"),
                        description: "Hiring page for engineering and design roles at Kodeneurons.",
                    },
                    buildBreadcrumbSchema([
                        { name: "Home", path: "/" },
                        { name: "Careers", path: "/careers" },
                    ]),
                ]}
            />

            {/* ─── Hero ─── */}
            <section className="relative pt-32 pb-20 px-6 overflow-hidden">
                <div className="absolute -top-24 right-0 w-[500px] h-[500px] rounded-full pointer-events-none opacity-60"
                    style={{ background: "radial-gradient(circle, rgba(255,122,0,0.08), transparent 65%)" }} />
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 border border-orange-200 text-[#FF7A00] text-xs font-semibold tracking-widest uppercase mb-6">
                        <Users className="w-3.5 h-3.5" />
                        Join the Team
                    </div>
                    <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6 text-[#0A0F2C]">
                        Build the future of AI
                        <br />
                        <span style={{ backgroundImage: "linear-gradient(135deg,#FF7A00,#FF9E3D)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                            with us
                        </span>
                    </h1>
                    <p className="text-lg text-gray-500 leading-relaxed max-w-2xl mx-auto">
                        KodeNeurons is a small, ambitious team building AI-first software for startups and enterprises.
                        We're not hiring right now, but we're always open to hearing from exceptional talent.
                    </p>

                    <div className="mt-6 flex flex-wrap gap-4 justify-center">
                        <Link to="/contact"
                            className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-white bg-[#FF7A00] hover:bg-[#e86e00] shadow-[0_4px_20px_rgba(255,122,0,0.35)] hover:scale-105 transition-all duration-300">
                            Send Your Portfolio <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* ─── Stats ─── */}
            <section className="py-14 px-6 bg-[#0A0F2C]" ref={statsRef}>
                <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {[
                        { val: "3", label: "Founding Members" },
                        { val: "50+", label: "Projects Shipped" },
                        { val: "∞", label: "Ideas in the Backlog" },
                        { val: "100%", label: "Remote Team" },
                    ].map(({ val, label }, i) => (
                        <div key={label} className={`reveal-scale${statsVisible ? " visible" : ""}`} style={{ transitionDelay: `${i * 0.12}s` }}>
                            <p className="text-4xl font-extrabold" style={{ backgroundImage: "linear-gradient(135deg,#FF7A00,#FF9E3D)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>{val}</p>
                            <p className="text-gray-400 text-sm mt-1.5">{label}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ─── Perks ─── */}
            <section className="py-24 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-14">
                        <p className="text-xs font-bold text-[#FF7A00] uppercase tracking-widest mb-3">Why Join Us</p>
                        <h2 className="text-4xl font-extrabold text-[#0A0F2C]">Work that actually matters</h2>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" ref={perksRef}>
                        {perks.map(({ icon: Icon, title, desc }, i) => (
                            <div key={title} className={`reveal-stagger-child${perksVisible ? " visible" : ""} group bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-[0_8px_30px_rgba(255,122,0,0.08)] hover:border-[#FF7A00]/20 hover:-translate-y-1 transition-all duration-300`} style={{ "--stagger-index": i }}>
                                <div className="mb-4 w-11 h-11 rounded-xl bg-orange-50 group-hover:bg-[#FF7A00] flex items-center justify-center transition-colors duration-300">
                                    <Icon className="w-5 h-5 text-[#FF7A00] group-hover:text-white transition-colors duration-300" />
                                </div>
                                <h3 className="font-bold text-[#0A0F2C] mb-2">{title}</h3>
                                <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── No Open Roles ─── */}
            <section id="roles" className="py-24 px-6 bg-[#FAFAFA] border-t border-gray-100">
                <div className="max-w-3xl mx-auto text-center" ref={rolesRef}>
                    <div className={`reveal${rolesVisible ? " visible" : ""}`}>
                        <div className="w-16 h-16 rounded-2xl bg-orange-50 border-2 border-orange-100 flex items-center justify-center mx-auto mb-6">
                            <Clock className="w-7 h-7 text-[#FF7A00]" />
                        </div>
                        <p className="text-xs font-bold text-[#FF7A00] uppercase tracking-widest mb-3">Open Roles</p>
                        <h2 className="text-4xl font-extrabold text-[#0A0F2C] mb-4">No positions open right now</h2>
                        <p className="text-gray-500 max-w-xl mx-auto mb-8">
                            We're not actively hiring at the moment, but that changes fast. If you're a builder who loves shipping real products, we'd still love to hear from you.
                        </p>
                        <Link to="/contact"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-[#FF7A00] hover:bg-[#e86e00] shadow-[0_4px_20px_rgba(255,122,0,0.35)] hover:scale-105 transition-all duration-300">
                            Send Your Portfolio <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* ─── Culture / Values ─── */}
            <section className="py-20 px-6 bg-white">
                <div className="max-w-3xl mx-auto text-center">
                    <p className="text-xs font-bold text-[#FF7A00] uppercase tracking-widest mb-3">Our Values</p>
                    <h2 className="text-3xl font-extrabold text-[#0A0F2C] mb-8">How we work</h2>
                    <div className="space-y-4 text-left" ref={valuesRef}>
                        {values.map((v, i) => (
                            <div key={v} className={`reveal-stagger-child${valuesVisible ? " visible" : ""} flex items-start gap-3 bg-[#FAFAFA] border border-gray-100 rounded-xl p-4 hover:border-[#FF7A00]/20 transition-colors duration-200`} style={{ "--stagger-index": i }}>
                                <CheckCircle2 className="w-5 h-5 text-[#FF7A00] flex-shrink-0 mt-0.5" />
                                <p className="text-gray-600 text-sm leading-relaxed">{v}</p>
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
                        <h2 className="text-4xl font-extrabold mb-4">Want to work with us?</h2>
                        <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">Even though we're not hiring right now, exceptional talent is always welcome. Send us your portfolio and we'll reach out when the right role opens up.</p>
                        <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-[#FF7A00] bg-white hover:bg-orange-50 shadow-lg hover:scale-105 transition-all duration-300">
                            Get In Touch <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
