import { Link } from "react-router-dom";
import SEO from "../components/SEO";

export default function NotFound() {
  return (
    <div className="bg-white text-[#0A0F2C] min-h-screen">
      <SEO
        title="Page Not Found"
        description="The page you are looking for does not exist."
        path="/404"
        robots="noindex,follow"
      />
      <section className="relative pt-32 pb-24 px-6 overflow-hidden">
        <div
          className="absolute -top-24 right-0 w-[520px] h-[520px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(255,122,0,0.08), transparent 65%)" }}
        />
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-[#FF7A00] mb-3">404 Error</p>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4">Page Not Found</h1>
          <p className="text-lg text-gray-500 mb-8">
            The page you are looking for does not exist or has been moved.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-white bg-[#FF7A00] hover:bg-[#e86e00] shadow-[0_4px_14px_rgba(255,122,0,0.35)] hover:scale-105 transition-all duration-300"
            >
              Go Home
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-[#0A0F2C] border border-gray-200 bg-white hover:border-[#FF7A00]/40 hover:bg-orange-50 transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
