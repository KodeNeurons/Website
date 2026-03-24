import {
    ShoppingCart, MapPin, ArrowRight, ExternalLink,
    CheckCircle2, Package,
} from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import { buildBreadcrumbSchema, buildUrl } from "../lib/siteMetadata";

/* --- Live Products --- */
const liveProducts = [
    {
        id: "edison-cart",
        name: "Edison Cart",
        tagline: "The smart e-commerce platform for modern businesses",
        kind: "project",
        category: "E-Commerce",
        status: "Live",
        icon: ShoppingCart,
        liveUrl: "https://edisonkart.com/",
        gradient: "from-[#FF7A00] to-[#FF9E3D]",
        lightBg: "bg-orange-50",
        borderColor: "border-orange-200",
        accentColor: "text-[#FF7A00]",
        desc: "Edison Cart is a full-featured e-commerce platform we developed as a client delivery (development and maintenance) project. It includes product listings, inventory management, payment gateway integration, and order tracking - everything modern sellers need to sell online quickly.",
        features: [
            "Product catalog with categories and filters",
            "Inventory management dashboard",
            "Payment gateway (Razorpay, UPI support)",
            "Order tracking with real-time status updates",
            "Seller dashboard with analytics",
            "Mobile-responsive storefront",
            "Discount codes and promotional tools",
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
        kind: "product",
        category: "Local Discovery",
        status: "Live",
        icon: MapPin,
        liveUrl: "https://shopnear.kodeneurons.in/",
        gradient: "from-emerald-500 to-teal-600",
        lightBg: "bg-emerald-50",
        borderColor: "border-emerald-200",
        accentColor: "text-emerald-600",
        desc: "Shop Near is a hyperlocal discovery platform that connects customers with shops, stores, and services in their neighborhood. Find what is open, what is near you, and support local businesses - all in one app.",
        features: [
            "GPS-based shop and service discovery",
            "Real-time open or closed status",
            "Shop profiles with photos and offers",
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

export default function Products() {
    const products = liveProducts.filter((p) => p.kind === "product");
    const projects = liveProducts.filter((p) => p.kind === "project");

    return (
        <div className="bg-white text-[#0A0F2C] min-h-screen">
            <SEO
                title="Products, Platforms, and Case Studies"
                description="Explore Kodeneurons products and client platforms including Shop Near and Edison Cart with feature highlights and live links."
                keywords="products, projects, SaaS, e-commerce platform, hyperlocal discovery, Shop Near, Edison Cart, software studio"
                path="/products"
                schema={[
                    {
                        "@context": "https://schema.org",
                        "@type": "CollectionPage",
                        name: "Kodeneurons Products",
                        url: buildUrl("/products"),
                        description:
                            "Collection of product builds and client platforms created by Kodeneurons.",
                    },
                    buildBreadcrumbSchema([
                        { name: "Home", path: "/" },
                        { name: "Products", path: "/products" },
                    ]),
                ]}
            />

            {/* --- Hero --- */}
            <section className="relative pt-32 pb-20 px-6 overflow-hidden">
                <div className="absolute -top-24 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
                    style={{ background: "radial-gradient(circle, rgba(255,122,0,0.07), transparent 65%)" }} />

                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 border border-orange-200 text-[#FF7A00] text-xs font-semibold tracking-widest uppercase mb-6">
                        <Package className="w-3.5 h-3.5" />
                        Products + Projects
                    </div>
                    <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.05] tracking-tight mb-6">
                        Products and Projects built{" "}
                        <span style={{ backgroundImage: "linear-gradient(135deg,#FF7A00,#FF9E3D)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                            by us
                        </span>
                        <br />for businesses and communities
                    </h1>
                    <p className="text-lg md:text-xl text-gray-500 leading-relaxed max-w-2xl mx-auto">
                        We build our own SaaS products and also deliver custom, production-grade solutions for clients - from MVP to launch and long-term support.
                    </p>
                </div>
            </section>

            {/* --- Products + Projects --- */}
            <section className="pb-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="relative mb-12">
                        <div className="absolute -top-6 right-0 w-52 h-52 rounded-full bg-orange-100 blur-3xl opacity-50" />
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                            <p className="text-sm font-bold text-[#0A0F2C] uppercase tracking-widest">Products</p>
                        </div>
                        <p className="text-gray-500 max-w-2xl">
                            Live SaaS products we own, build, and evolve.
                        </p>
                    </div>

                    <div className="space-y-10">
                        {products.map((product, i) => (
                            <div key={product.id}
                                className="group relative bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-[0_16px_60px_rgba(0,0,0,0.08)] hover:border-emerald-200/60 transition-all duration-400 overflow-hidden">

                                <div className={`h-1.5 bg-gradient-to-r ${product.gradient}`} />

                                <div className={`flex flex-col ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-0`}>
                                    <div className={`lg:w-[380px] flex-shrink-0 bg-gradient-to-br ${product.gradient} p-10 flex flex-col justify-between min-h-[300px]`}>
                                        <div>
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

                                        <div className="grid grid-cols-3 gap-3 mt-8">
                                            {product.stats.map(({ val, label }) => (
                                                <div key={label} className="bg-white/15 rounded-xl p-3 text-center">
                                                    <p className="text-white font-extrabold text-lg">{val}</p>
                                                    <p className="text-white/70 text-[10px] mt-0.5">{label}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="flex-1 p-10 flex flex-col justify-between">
                                        <div>
                                            <span className={`inline-block text-xs font-bold uppercase tracking-widest ${product.accentColor} ${product.lightBg} border ${product.borderColor} px-3 py-1 rounded-full mb-5`}>
                                                {product.category}
                                            </span>
                                            <p className="text-gray-500 text-base leading-relaxed mb-7">{product.desc}</p>
                                            {product.features.map((f) => (
                                                <div key={f} className="flex items-start gap-2.5">
                                                    <CheckCircle2 className={`w-4 h-4 flex-shrink-0 mt-0.5 ${product.accentColor}`} />
                                                    <span className="text-sm text-gray-600">{f}</span>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="mt-8 pt-6 border-t border-gray-100 flex flex-wrap items-center gap-4">
                                            <a
                                                href={product.liveUrl}
                                                target="_blank"
                                                rel="noreferrer"
                                                className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-white bg-gradient-to-r ${product.gradient} shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300`}
                                            >
                                                Live Site <ExternalLink className="w-4 h-4" />
                                            </a>
                                            <Link to="/contact"
                                                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-[#0A0F2C] border border-gray-200 bg-white hover:border-emerald-300 hover:bg-emerald-50 transition-all duration-300">
                                                Learn More <ArrowRight className="w-3.5 h-3.5" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="relative mt-16 mb-12">
                        <div className="absolute -top-6 left-0 w-52 h-52 rounded-full bg-orange-100 blur-3xl opacity-40" />
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-2.5 h-2.5 rounded-full bg-orange-500 animate-pulse" />
                            <p className="text-sm font-bold text-[#0A0F2C] uppercase tracking-widest">Client Projects</p>
                        </div>
                        <p className="text-gray-500 max-w-2xl">
                            Production systems built for clients with ongoing engineering support.
                        </p>
                    </div>

                    <div className="space-y-10">
                        {projects.map((product, i) => (
                            <div key={product.id}
                                className="group relative bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-[0_16px_60px_rgba(0,0,0,0.08)] hover:border-orange-200/60 transition-all duration-400 overflow-hidden">

                                <div className={`h-1.5 bg-gradient-to-r ${product.gradient}`} />

                                <div className={`flex flex-col ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-0`}>
                                    <div className={`lg:w-[380px] flex-shrink-0 bg-gradient-to-br ${product.gradient} p-10 flex flex-col justify-between min-h-[300px]`}>
                                        <div>
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

                                        <div className="grid grid-cols-3 gap-3 mt-8">
                                            {product.stats.map(({ val, label }) => (
                                                <div key={label} className="bg-white/15 rounded-xl p-3 text-center">
                                                    <p className="text-white font-extrabold text-lg">{val}</p>
                                                    <p className="text-white/70 text-[10px] mt-0.5">{label}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="flex-1 p-10 flex flex-col justify-between">
                                        <div>
                                            <span className={`inline-block text-xs font-bold uppercase tracking-widest ${product.accentColor} ${product.lightBg} border ${product.borderColor} px-3 py-1 rounded-full mb-5`}>
                                                {product.category}
                                            </span>
                                            <p className="text-gray-500 text-base leading-relaxed mb-3">{product.desc}</p>
                                            <p className="text-sm text-gray-400 mb-7">
                                                Client project with ongoing development and maintenance support.
                                            </p>
                                            {product.features.map((f) => (
                                                <div key={f} className="flex items-start gap-2.5">
                                                    <CheckCircle2 className={`w-4 h-4 flex-shrink-0 mt-0.5 ${product.accentColor}`} />
                                                    <span className="text-sm text-gray-600">{f}</span>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="mt-8 pt-6 border-t border-gray-100 flex flex-wrap items-center gap-4">
                                            <a
                                                href={product.liveUrl}
                                                target="_blank"
                                                rel="noreferrer"
                                                className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-white bg-gradient-to-r ${product.gradient} shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300`}
                                            >
                                                Live Site <ExternalLink className="w-4 h-4" />
                                            </a>
                                            <Link to="/contact"
                                                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-[#0A0F2C] border border-gray-200 bg-white hover:border-orange-200 hover:bg-orange-50 transition-all duration-300">
                                                Learn More <ArrowRight className="w-3.5 h-3.5" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- CTA --- */}
            <section className="py-20 px-6">
                <div className="max-w-4xl mx-auto rounded-3xl overflow-hidden relative text-white text-center px-8 py-16"
                    style={{ background: "linear-gradient(135deg, #FF7A00, #FF9E3D)" }}>
                    <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-white/10" />
                    <div className="absolute -bottom-14 -left-14 w-56 h-56 rounded-full bg-white/10" />
                    <div className="relative z-10">
                        <h2 className="text-4xl font-extrabold mb-4">Need a custom product built?</h2>
                        <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">We build custom products too. Tell us what you need.</p>
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
