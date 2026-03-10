import {
    ShoppingCart, MapPin, ArrowRight, ExternalLink,
    Users, CheckCircle2, Clock, Lock, Bell, Package,
} from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

/* ─── Live Products ─── */
const liveProducts = [
    {
        id: "edison-cart",
        name: "Edison Cart",
        tagline: "The smart e-commerce platform for modern businesses",
        category: "E-Commerce",
        status: "Live",
        icon: ShoppingCart,
        gradient: "from-[#FF7A00] to-[#FF9E3D]",
        lightBg: "bg-orange-50",
        borderColor: "border-orange-200",
        accentColor: "text-[#FF7A00]",
        desc: "Edison Cart is a full-featured e-commerce platform built for Indian businesses. From product listings and inventory management to payment gateway integration and order tracking — Edison Cart gives sellers everything they need to sell online, fast.",
        features: [
            "Product catalog with categories & filters",
            "Inventory management dashboard",
            "Payment gateway (Razorpay, UPI support)",
            "Order tracking with real-time status updates",
            "Seller dashboard with analytics",
            "Mobile-responsive storefront",
            "Discount codes & promotional tools",
            "Customer account management",
        ],
        stats: [
            { val: "Fast", label: "Setup Time" },
            { val: "100%", label: "Mobile Ready" },
            { val: "UPI", label: "Payment Support" },
        ],
        badges: ["E-Commerce", "Payments", "Dashboard"],
    },
    {
        id: "shop-near",
        name: "Shop Near",
        tagline: "Discover local shops and services around you",
        category: "Local Discovery",
        status: "Live",
        icon: MapPin,
        gradient: "from-emerald-500 to-teal-600",
        lightBg: "bg-emerald-50",
        borderColor: "border-emerald-200",
        accentColor: "text-emerald-600",
        desc: "Shop Near is a hyperlocal discovery platform that connects customers with shops, stores, and services in their neighborhood. Find what's open, what's near you, and support local businesses — all in one app.",
        features: [
            "GPS-based shop & service discovery",
            "Real-time open/closed status",
            "Shop profiles with photos & offers",
            "Search by category (grocery, pharmacy, etc.)",
            "Customer reviews and ratings",
            "Click-to-call and directions integration",
            "Shop owner dashboard to manage listings",
            "Promotional deals and offers section",
        ],
        stats: [
            { val: "GPS", label: "Location Aware" },
            { val: "Live", label: "Status Updates" },
            { val: "Free", label: "For Shoppers" },
        ],
        badges: ["Hyperlocal", "Maps", "Mobile"],
    },
];

/* ─── Coming Soon Products ─── */
const comingSoon = [
    {
        name: "KN Hire",
        icon: Users,
        category: "HR Tech",
        desc: "An AI-powered recruitment platform that matches candidates to job roles intelligently — reducing time-to-hire and improving quality of hire.",
        eta: "Q3 2026",
    },
    {
        name: "DocuSmart",
        icon: Package,
        category: "Productivity",
        desc: "AI-driven document management and extraction — intelligently reads, classifies, and extracts data from invoices, forms, and certificates.",
        eta: "Q3 2026",
    },
    {
        name: "KN Notify",
        icon: Bell,
        category: "SaaS Tool",
        desc: "A smart notification and alerting platform for businesses — send personalized messages via WhatsApp, SMS, and email at scale.",
        eta: "Q4 2026",
    },
    {
        name: "SecureVault",
        icon: Lock,
        category: "Security",
        desc: "A secure, encrypted digital locker for storing and sharing important documents, certificates, and credentials — for individuals and teams.",
        eta: "Q4 2026",
    },
];

export default function Products() {
    return (
        <div className="bg-white text-[#0A0F2C] min-h-screen">
            <SEO
                title="Our Products"
                description="Discover our original AI and SaaS products including Edison Cart (e-commerce) and Shop Near (hyperlocal discovery)."
                path="/products"
            />

            {/* ─── Hero ─── */}
            <section className="relative pt-32 pb-20 px-6 overflow-hidden">
                <div className="absolute -top-24 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
                    style={{ background: "radial-gradient(circle, rgba(255,122,0,0.07), transparent 65%)" }} />

                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 border border-orange-200 text-[#FF7A00] text-xs font-semibold tracking-widest uppercase mb-6">
                        <Package className="w-3.5 h-3.5" />
                        Our Products
                    </div>
                    <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.05] tracking-tight mb-6">
                        Products built{" "}
                        <span style={{ backgroundImage: "linear-gradient(135deg,#FF7A00,#FF9E3D)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                            by us
                        </span>
                        <br />for everyone
                    </h1>
                    <p className="text-lg md:text-xl text-gray-500 leading-relaxed max-w-2xl mx-auto">
                        Beyond client work, we build our own software products — solving real problems for businesses, shoppers, and communities across India.
                    </p>
                </div>
            </section>

            {/* ─── Live Products ─── */}
            <section className="pb-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-center gap-3 mb-10">
                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                        <p className="text-sm font-bold text-[#0A0F2C] uppercase tracking-widest">Live Products</p>
                    </div>

                    <div className="space-y-10">
                        {liveProducts.map((product, i) => (
                            <div key={product.id}
                                className="group relative bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-[0_16px_60px_rgba(0,0,0,0.08)] hover:border-orange-200/60 transition-all duration-400 overflow-hidden">

                                {/* Top gradient stripe */}
                                <div className={`h-1.5 bg-gradient-to-r ${product.gradient}`} />

                                <div className={`flex flex-col ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-0`}>

                                    {/* Color Panel */}
                                    <div className={`lg:w-[380px] flex-shrink-0 bg-gradient-to-br ${product.gradient} p-10 flex flex-col justify-between min-h-[300px]`}>
                                        <div>
                                            {/* Status badge */}
                                            <div className="inline-flex items-center gap-2 bg-white/20 text-white text-xs font-bold px-3 py-1.5 rounded-full mb-6">
                                                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                                                {product.status}
                                            </div>

                                            <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center mb-4">
                                                <product.icon className="w-8 h-8 text-white" />
                                            </div>

                                            <h2 className="text-3xl font-extrabold text-white mb-2">{product.name}</h2>
                                            <p className="text-white/80 text-sm font-medium mb-6">{product.tagline}</p>

                                            <div className="flex flex-wrap gap-2">
                                                {product.badges.map((b) => (
                                                    <span key={b} className="text-[10px] font-bold uppercase tracking-wide text-white/90 bg-white/15 rounded-lg px-2.5 py-1">{b}</span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Mini stats */}
                                        <div className="grid grid-cols-3 gap-3 mt-8">
                                            {product.stats.map(({ val, label }) => (
                                                <div key={label} className="bg-white/15 rounded-xl p-3 text-center">
                                                    <p className="text-white font-extrabold text-lg">{val}</p>
                                                    <p className="text-white/70 text-[10px] mt-0.5">{label}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Content panel */}
                                    <div className="flex-1 p-10 flex flex-col justify-between">
                                        <div>
                                            <span className={`inline-block text-xs font-bold uppercase tracking-widest ${product.accentColor} ${product.lightBg} border ${product.borderColor} px-3 py-1 rounded-full mb-5`}>
                                                {product.category}
                                            </span>
                                            <p className="text-gray-500 text-base leading-relaxed mb-7">{product.desc}</p>

                                            <h4 className="text-xs font-bold text-[#0A0F2C] uppercase tracking-widest mb-4">Key Features</h4>
                                            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-2.5">
                                                {product.features.map((f) => (
                                                    <div key={f} className="flex items-start gap-2.5">
                                                        <CheckCircle2 className={`w-4 h-4 flex-shrink-0 mt-0.5 ${product.accentColor}`} />
                                                        <span className="text-sm text-gray-600">{f}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="mt-8 pt-6 border-t border-gray-100 flex flex-wrap items-center gap-4">
                                            <Link to="/contact"
                                                className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-white bg-gradient-to-r ${product.gradient} shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300`}>
                                                Request Access <ArrowRight className="w-4 h-4" />
                                            </Link>
                                            <Link to="/contact"
                                                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-[#0A0F2C] border border-gray-200 bg-white hover:border-[#FF7A00]/40 hover:bg-orange-50 transition-all duration-300">
                                                Learn More <ExternalLink className="w-3.5 h-3.5" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── Coming Soon ─── */}
            <section className="py-20 px-6 bg-[#FAFAFA] border-t border-gray-100">
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-center gap-3 mb-10">
                        <div className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
                        <p className="text-sm font-bold text-[#0A0F2C] uppercase tracking-widest">Coming Soon</p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {comingSoon.map((p) => (
                            <div key={p.name}
                                className="group bg-white rounded-2xl border border-gray-100 border-dashed p-6 hover:border-[#FF7A00]/30 hover:shadow-sm transition-all duration-300 relative overflow-hidden">

                                {/* ETA chip */}
                                <span className="absolute top-4 right-4 text-[10px] font-bold text-amber-600 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-full">
                                    {p.eta}
                                </span>

                                <div className="w-11 h-11 rounded-xl bg-gray-50 border border-gray-200 flex items-center justify-center mb-4 group-hover:bg-orange-50 group-hover:border-orange-200 transition-colors">
                                    <p.icon className="w-5 h-5 text-gray-300 group-hover:text-[#FF7A00] transition-colors" />
                                </div>

                                <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-wide">{p.category}</span>
                                <h3 className="text-base font-extrabold text-[#0A0F2C] mt-1 mb-2">{p.name}</h3>
                                <p className="text-xs text-gray-400 leading-relaxed">{p.desc}</p>

                                <div className="mt-4 flex items-center gap-1.5 text-xs text-gray-300 font-medium">
                                    <Clock className="w-3.5 h-3.5" /> Coming {p.eta}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Newsletter-style "stay updated" row */}
                    <div className="mt-10 bg-white rounded-2xl border border-gray-100 p-7 flex flex-col md:flex-row items-center justify-between gap-5 shadow-sm">
                        <div>
                            <p className="font-extrabold text-[#0A0F2C] text-base mb-1">Want early access?</p>
                            <p className="text-sm text-gray-500">Join the waitlist and be among the first to try new KodeNeurons products.</p>
                        </div>
                        <Link to="/contact"
                            className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-white bg-[#FF7A00] hover:bg-[#e86e00] shadow-[0_4px_14px_rgba(255,122,0,0.35)] hover:scale-105 transition-all duration-300 whitespace-nowrap">
                            Join Waitlist <ArrowRight className="w-4 h-4" />
                        </Link>
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
                        <h2 className="text-4xl font-extrabold mb-4">Need a custom product built?</h2>
                        <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">We don't just build our own — we can build yours too. Tell us your product idea and let's make it real.</p>
                        <Link to="/contact"
                            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-[#FF7A00] bg-white hover:bg-orange-50 shadow-lg hover:scale-105 transition-all duration-300">
                            Build Your Product <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
