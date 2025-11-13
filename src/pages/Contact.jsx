import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { SendHorizonal, Linkedin, Mail } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
// import confetti from "canvas-confetti";

export default function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);
    formData.append("access_key", "83e66638-db7b-44ee-b2a8-bedf587bcadb");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    if (data.success) {
      setResult("");
      event.target.reset();

      // // 🎉 Confetti animation
      // confetti({
      //   particleCount: 150,
      //   spread: 70,
      //   origin: { y: 0.6 },
      //   colors: ["#6C63FF", "#00D1FF", "#FFFFFF"],
      // });

      toast.success("✨ Message sent successfully! We’ll contact you soon.");
    } else {
      console.error("Error", data);
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0B0F] text-white relative overflow-hidden">
      {/* Toast notifications */}
      <Toaster position="top-center" reverseOrder={false} />

      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#6C63FF]/10 via-[#00D1FF]/10 to-[#6C63FF]/10 blur-3xl opacity-70 -z-10"></div>

      {/* Header */}
      <section className="text-center pt-28 pb-10 px-6">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#6C63FF] to-[#00D1FF] mb-6 animate-fade-in">
          Let’s Build Something Exceptional Together 🚀
        </h2>
        <p className="max-w-2xl mx-auto text-gray-400 text-lg leading-relaxed animate-fade-in">
          Have a project in mind? Whether it's AI, Web, or Mobile — share your
          vision, and our team will turn it into a high-impact product.
        </p>
      </section>

      {/* Form Section */}
      <div className="flex flex-col lg:flex-row justify-center items-start gap-10 px-6 pb-24 max-w-7xl mx-auto">
        {/* Form */}
        <form
          onSubmit={onSubmit}
          className="w-full max-w-lg bg-[#101016] border border-[#1F1F25] shadow-[0_0_25px_rgba(108,99,255,0.2)] rounded-2xl px-8 py-10 space-y-6 transition-transform duration-300 hover:scale-[1.01]"
        >
          <div>
            <label
              htmlFor="fullName"
              className="block text-sm font-semibold text-[#00D1FF] mb-2"
            >
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              id="fullName"
              required
              placeholder="Enter your full name"
              className="w-full px-4 py-3 rounded-lg bg-[#0B0B0F] border border-[#2A2A33] text-white placeholder-gray-500 focus:border-[#6C63FF] focus:ring-2 focus:ring-[#6C63FF]/50 transition"
            />
          </div>

          <div>
            <label
              htmlFor="contactNumber"
              className="block text-sm font-semibold text-[#00D1FF] mb-2"
            >
              Contact Number
            </label>
            <input
              type="tel"
              name="contactNumber"
              id="contactNumber"
              required
              placeholder="Enter your contact number"
              className="w-full px-4 py-3 rounded-lg bg-[#0B0B0F] border border-[#2A2A33] text-white placeholder-gray-500 focus:border-[#6C63FF] focus:ring-2 focus:ring-[#6C63FF]/50 transition"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-[#00D1FF] mb-2"
            >
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-lg bg-[#0B0B0F] border border-[#2A2A33] text-white placeholder-gray-500 focus:border-[#6C63FF] focus:ring-2 focus:ring-[#6C63FF]/50 transition"
            />
          </div>

          <div>
            <label
              htmlFor="institution"
              className="block text-sm font-semibold text-[#00D1FF] mb-2"
            >
              College / Company / Institute
            </label>
            <input
              type="text"
              name="institution"
              id="institution"
              required
              placeholder="e.g. CSMSS College / XYZ Corp"
              className="w-full px-4 py-3 rounded-lg bg-[#0B0B0F] border border-[#2A2A33] text-white placeholder-gray-500 focus:border-[#6C63FF] focus:ring-2 focus:ring-[#6C63FF]/50 transition"
            />
          </div>

          <div>
            <label
              htmlFor="projectName"
              className="block text-sm font-semibold text-[#00D1FF] mb-2"
            >
              Project Title
            </label>
            <input
              type="text"
              name="projectName"
              id="projectName"
              required
              placeholder="Enter project name"
              className="w-full px-4 py-3 rounded-lg bg-[#0B0B0F] border border-[#2A2A33] text-white placeholder-gray-500 focus:border-[#6C63FF] focus:ring-2 focus:ring-[#6C63FF]/50 transition"
            />
          </div>

          <div>
            <label
              htmlFor="projectDescription"
              className="block text-sm font-semibold text-[#00D1FF] mb-2"
            >
              Project Description
            </label>
            <textarea
              name="projectDescription"
              id="projectDescription"
              rows="4"
              required
              placeholder="Briefly describe your project idea..."
              className="w-full px-4 py-3 rounded-lg bg-[#0B0B0F] border border-[#2A2A33] text-white placeholder-gray-500 focus:border-[#6C63FF] focus:ring-2 focus:ring-[#6C63FF]/50 transition"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-[#6C63FF] to-[#00D1FF] font-semibold rounded-lg text-white flex items-center justify-center gap-2 hover:shadow-[0_0_25px_rgba(108,99,255,0.4)] hover:scale-105 transition"
          >
            <SendHorizonal className="w-5 h-5" />
            {result === "Sending..." ? "Sending..." : "Submit Request"}
          </button>

          {/* Support message */}
          <p className="text-center text-gray-500 text-sm mt-3">
            💬 We usually respond within <span className="text-[#00D1FF]">24 hours</span>.
          </p>
        </form>

        {/* Right Floating Info Panel */}
        <div className="hidden lg:flex flex-col justify-center items-start bg-[#101016] border border-[#1F1F25] rounded-2xl shadow-[0_0_20px_rgba(108,99,255,0.15)] p-8 w-80 space-y-6 animate-slide-in-right">
          <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#6C63FF] to-[#00D1FF]">
            Get in Touch
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Reach out directly through email, WhatsApp, or our professional profiles.
          </p>

          <div className="flex flex-col space-y-4 mt-4">
            <a
              href="mailto:kodeneurons@gmail.com"
              className="flex items-center gap-3 text-gray-300 hover:text-[#00D1FF] transition"
            >
              <Mail className="w-5 h-5" /> kodeneurons@gmail.com
            </a>
            {/* <a
              href="tel:+918600403938"
              className="flex items-center gap-3 text-gray-300 hover:text-[#00D1FF] transition"
            >
              <Phone className="w-5 h-5" /> +91 86004 03938
            </a> */}
            <a
              href="https://www.linkedin.com/company/kodeneurons-3/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-gray-300 hover:text-[#00D1FF] transition"
            >
              <Linkedin className="w-5 h-5" /> LinkedIn
            </a>
            {/* <a
              href="https://github.com/ShoyebChaudhari45"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-gray-300 hover:text-[#6C63FF] transition"
            > */}
           
            <a
              href="https://wa.me/7499601744"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-gray-300 hover:text-green-500 transition"
            >
              <FaWhatsapp className="w-5 h-5" /> WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
