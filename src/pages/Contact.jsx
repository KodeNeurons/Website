import { useState } from 'react';
import AnimatedSection from '../components/AnimatedSection';
import SEO, { createFAQSchema, createBreadcrumbSchema } from '../components/SEO';

const projectTypes = [
  'Custom Software',
  'AI & Automation',
  'SaaS Platform',
  'Web Application',
  'MVP Development',
  'API Development',
  'Other',
];

const budgetRanges = [
  'Under $5,000',
  '$5,000 – $15,000',
  '$15,000 – $50,000',
  '$50,000 – $100,000',
  '$100,000+',
  'Not sure yet',
];

const contactInfo = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
    title: 'Email Us',
    value: 'hello@kodeneurons.in',
    link: 'mailto:hello@kodeneurons.in',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
    title: 'Call Us',
    value: '+91 12345 67890',
    link: 'tel:+911234567890',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    title: 'Location',
    value: 'India (Remote-First)',
    link: null,
  },
];

const faqs = [
  {
    q: 'How long does a typical project take?',
    a: 'Project timelines vary based on complexity. MVPs typically take 6-10 weeks, while full-scale platforms can take 3-6 months. We provide detailed timelines during the discovery phase.',
  },
  {
    q: 'What is your development process?',
    a: 'We follow an agile methodology with 2-week sprints. You get regular updates, demo sessions, and the ability to provide feedback throughout the development cycle.',
  },
  {
    q: 'Do you provide post-launch support?',
    a: 'Yes, we offer comprehensive post-launch support packages including bug fixes, feature updates, performance monitoring, and scaling assistance.',
  },
  {
    q: 'What technologies do you specialize in?',
    a: 'We specialize in React, Next.js, Node.js, Python, AI/ML frameworks (TensorFlow, PyTorch), and cloud platforms (AWS, Azure, GCP). We choose the best stack for each project.',
  },
  {
    q: 'Can you work with existing codebases?',
    a: 'Absolutely. We regularly take on projects that involve modernizing legacy systems, adding features to existing applications, or migrating to new technologies.',
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '', email: '', company: '', projectType: '', budget: '', message: '',
  });
  const [openFaq, setOpenFaq] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="overflow-hidden">
      <SEO
        title="Contact Us - Start Your Software Project"
        description="Get in touch with KodeNeurons. Tell us about your project requirements and get a free consultation. We respond within 24 hours."
        keywords="contact KodeNeurons, start software project, hire developers, AI development consultation, get quote software development"
        path="/contact"
        structuredData={[
          createFAQSchema(faqs),
          createBreadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Contact', path: '/contact' }])
        ]}
      />
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-mesh">
        <div className="absolute top-1/4 right-1/3 w-72 h-72 bg-primary-500/15 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-neon-purple/10 rounded-full blur-[150px]" />
        <div className="absolute inset-0 dot-pattern opacity-20" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-dark-300 font-medium mb-8">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Let's Connect
            </span>
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Start Your <span className="gradient-text">Project</span>
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <p className="text-dark-400 text-lg md:text-xl max-w-3xl mx-auto">
              Ready to bring your idea to life? Tell us about your project and we'll get back to you within 24 hours.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="py-24 bg-dark-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <AnimatedSection className="lg:col-span-2" direction="left">
              <div className="glass-card p-8 md:p-10">
                <h2 className="font-display text-2xl font-bold text-white mb-2">Tell Us About Your Project</h2>
                <p className="text-dark-400 mb-8">Fill out the form below and we'll reach out to schedule a free consultation.</p>

                {isSubmitted ? (
                  <div className="text-center py-16">
                    <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-emerald-500/10 flex items-center justify-center">
                      <svg className="w-8 h-8 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="font-display text-2xl font-bold text-white mb-2">Message Sent!</h3>
                    <p className="text-dark-400">We'll get back to you within 24 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-dark-300 mb-2">Full Name *</label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-dark-500 focus:outline-none focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/20 transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-dark-300 mb-2">Email Address *</label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@company.com"
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-dark-500 focus:outline-none focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/20 transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-dark-300 mb-2">Company Name</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your Company"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-dark-500 focus:outline-none focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/20 transition-all"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-dark-300 mb-2">Project Type *</label>
                        <select
                          name="projectType"
                          required
                          value={formData.projectType}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/20 transition-all appearance-none cursor-pointer"
                        >
                          <option value="" className="bg-dark-900">Select Type</option>
                          {projectTypes.map((type) => (
                            <option key={type} value={type} className="bg-dark-900">{type}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-dark-300 mb-2">Budget Range</label>
                        <select
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/20 transition-all appearance-none cursor-pointer"
                        >
                          <option value="" className="bg-dark-900">Select Budget</option>
                          {budgetRanges.map((range) => (
                            <option key={range} value={range} className="bg-dark-900">{range}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-dark-300 mb-2">Project Description *</label>
                      <textarea
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project, goals, and any specific requirements..."
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-dark-500 focus:outline-none focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/20 transition-all resize-none"
                      />
                    </div>

                    <button type="submit" className="btn-primary w-full text-center py-4 text-lg">
                      <span>Send Message</span>
                    </button>
                  </form>
                )}
              </div>
            </AnimatedSection>

            {/* Contact Info */}
            <AnimatedSection direction="right">
              <div className="space-y-6">
                {contactInfo.map((info, i) => (
                  <div key={i} className="glass-card p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary-500/10 flex items-center justify-center text-primary-400 flex-shrink-0">
                        {info.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">{info.title}</h4>
                        {info.link ? (
                          <a href={info.link} className="text-dark-400 hover:text-primary-400 transition-colors">
                            {info.value}
                          </a>
                        ) : (
                          <span className="text-dark-400">{info.value}</span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}

                {/* Response time */}
                <div className="glass-card p-6 bg-gradient-to-br from-primary-500/5 to-neon-purple/5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-white font-semibold text-sm">Fast Response</span>
                  </div>
                  <p className="text-dark-400 text-sm leading-relaxed">
                    We typically respond within 24 hours. For urgent inquiries, email us directly at hello@kodeneurons.in
                  </p>
                </div>

                {/* Quick links */}
                <div className="glass-card p-6">
                  <h4 className="font-semibold text-white mb-4">Quick Actions</h4>
                  <div className="space-y-3">
                    <a href="mailto:hello@kodeneurons.in" className="flex items-center gap-3 text-dark-400 hover:text-primary-400 transition-colors text-sm">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                      </svg>
                      Schedule a Call
                    </a>
                    <a href="mailto:hello@kodeneurons.in?subject=Partnership Inquiry" className="flex items-center gap-3 text-dark-400 hover:text-primary-400 transition-colors text-sm">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                      </svg>
                      Partnership Inquiry
                    </a>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-mesh-subtle">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="text-primary-400 text-sm font-semibold uppercase tracking-widest mb-4 block">FAQ</span>
              <h2 className="section-title mb-4">
                Frequently Asked <span className="gradient-text">Questions</span>
              </h2>
            </div>
          </AnimatedSection>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <AnimatedSection key={i} delay={i * 100}>
                <div className="glass-card overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left"
                  >
                    <span className="font-semibold text-white pr-4">{faq.q}</span>
                    <svg
                      className={`w-5 h-5 text-dark-400 flex-shrink-0 transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${openFaq === i ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
                  >
                    <p className="px-6 pb-5 text-dark-400 leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
