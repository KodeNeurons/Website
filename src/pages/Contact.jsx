import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { SendHorizonal, Linkedin, Mail, MessageSquare, MapPin, Clock } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import SEO from "../components/SEO";

const contactInfo = [
  { icon: Mail, label: "Email", value: "contact@kodeneurons.in", link: "mailto:kodeneurons@gmail.com" },
  { icon: FaWhatsapp, label: "WhatsApp", value: "+91 7499-601-744", link: "https://wa.me/7499601744" },
  { icon: Linkedin, label: "LinkedIn", value: "KodeNeurons", link: "https://www.linkedin.com/company/kodeneurons-3/" },
  { icon: Clock, label: "Response Time", value: "Within 24 hours", link: null },
  { icon: MapPin, label: "Location", value: "India · Remote-first team", link: null },
];

export default function Contact() {
  const [sending, setSending] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    const formData = new FormData(e.target);
    formData.append("access_key", "83e66638-db7b-44ee-b2a8-bedf587bcadb");
    const res = await fetch("https://api.web3forms.com/submit", { method: "POST", body: formData });
    const data = await res.json();
    setSending(false);
    if (data.success) {
      e.target.reset();
      toast.success("Message sent! We'll reach you within 24 hours.", {
        style: { background: "#fff", color: "#0A0F2C", border: "1px solid #e5e7eb" },
        iconTheme: { primary: "#FF7A00", secondary: "#fff" },
      });
    } else {
      toast.error("Something went wrong. Please try again.");
    }
  };

  const inp = "w-full px-4 py-3.5 rounded-xl bg-[#FAFAFA] border border-gray-200 text-[#0A0F2C] placeholder-gray-400 text-sm focus:outline-none focus:border-[#FF7A00] focus:ring-1 focus:ring-[#FF7A00]/20 transition-all duration-200";

  return (
    <div className="bg-white text-[#0A0F2C] min-h-screen">
      <SEO
        title="Contact Us"
        description="Get in touch with KodeNeurons to discuss your next software or AI project. We guarantee a 24-hour response."
        path="/contact"
      />
      <Toaster position="top-center" />

      {/* ─── Hero ─── */}
      <section className="relative pt-32 pb-16 px-6 overflow-hidden">
        <div className="absolute -top-24 left-1/3 w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(255,122,0,0.07), transparent 65%)" }} />
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 border border-orange-200 text-[#FF7A00] text-xs font-semibold tracking-widest uppercase mb-6">
            <MessageSquare className="w-3.5 h-3.5" />
            Get In Touch
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-5 text-[#0A0F2C]">
            Let's Build Something{" "}
            <span style={{ backgroundImage: "linear-gradient(135deg,#FF7A00,#FF9E3D)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Great
            </span>
          </h1>
          <p className="text-lg text-gray-500 leading-relaxed">
            Have a project in mind? Share your vision — our team will get back to you within 24 hours.
          </p>
        </div>
      </section>

      {/* ─── Main Content ─── */}
      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 items-start justify-center">

          {/* Form Card */}
          <div className="w-full max-w-xl bg-white rounded-3xl border border-gray-100 shadow-[0_4px_30px_rgba(0,0,0,0.06)] p-8 md:p-10">
            <h2 className="text-2xl font-extrabold text-[#0A0F2C] mb-1">Send a Request</h2>
            <p className="text-gray-400 text-sm mb-7">We'll respond within 24 hours.</p>

            <form onSubmit={onSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-[#0A0F2C] mb-2 uppercase tracking-wide">Full Name</label>
                  <input type="text" name="fullName" required placeholder="Your name" className={inp} />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#0A0F2C] mb-2 uppercase tracking-wide">Phone</label>
                  <input type="tel" name="contactNumber" required placeholder="Contact number" className={inp} />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#0A0F2C] mb-2 uppercase tracking-wide">Email</label>
                <input type="email" name="email" required placeholder="you@email.com" className={inp} />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#0A0F2C] mb-2 uppercase tracking-wide">College / Company</label>
                <input type="text" name="institution" required placeholder="e.g. CSMSS / XYZ Corp" className={inp} />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#0A0F2C] mb-2 uppercase tracking-wide">Project Title</label>
                <input type="text" name="projectName" required placeholder="Your project name" className={inp} />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#0A0F2C] mb-2 uppercase tracking-wide">Project Description</label>
                <textarea name="projectDescription" rows="4" required placeholder="Briefly describe your project idea..." className={inp} />
              </div>

              <button
                type="submit"
                disabled={sending}
                className="w-full py-4 bg-[#FF7A00] hover:bg-[#e86e00] text-white font-bold rounded-xl flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(255,122,0,0.35)] hover:shadow-[0_6px_28px_rgba(255,122,0,0.5)] hover:scale-[1.02] transition-all duration-300 disabled:opacity-60 disabled:scale-100"
              >
                <SendHorizonal className="w-4 h-4" />
                {sending ? "Sending…" : "Submit Request"}
              </button>
            </form>
          </div>

          {/* Info Panel */}
          <div className="w-full max-w-xs mt-2">
            <h3 className="text-xl font-extrabold text-[#0A0F2C] mb-2">Contact Directly</h3>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">Prefer to reach out? We're available on all channels.</p>

            <div className="space-y-3">
              {contactInfo.map(({ icon: Icon, label, value, link }) => (
                <div key={label} className="flex items-center gap-3.5 p-4 rounded-2xl border border-gray-100 bg-[#FAFAFA] hover:border-[#FF7A00]/25 hover:bg-orange-50 hover:shadow-sm transition-all duration-200 group">
                  <div className="w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center flex-shrink-0 group-hover:border-[#FF7A00]/30 group-hover:bg-orange-50 transition-all">
                    <Icon className="w-4 h-4 text-[#FF7A00]" />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-400 font-semibold uppercase tracking-wide">{label}</p>
                    {link ? (
                      <a href={link} target="_blank" rel="noopener noreferrer"
                        className="text-sm font-semibold text-[#0A0F2C] hover:text-[#FF7A00] transition-colors">{value}</a>
                    ) : (
                      <p className="text-sm font-semibold text-[#0A0F2C]">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
