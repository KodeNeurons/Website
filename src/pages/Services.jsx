import AnimatedSection from '../components/AnimatedSection';
import { Link } from 'react-router-dom';

const servicesDetailed = [
  {
    id: 'custom-software',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
    title: 'Custom Software Development',
    desc: 'Tailor-made software solutions designed specifically for your business needs. We build everything from internal tools to customer-facing platforms.',
    features: [
      'Enterprise-grade architecture',
      'Microservices and monolith patterns',
      'Third-party API integrations',
      'Legacy system modernization',
      'Performance optimization',
      'Security-first development',
    ],
    useCases: ['Internal business tools', 'Customer portals', 'Inventory management', 'CRM systems'],
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    id: 'ai-automation',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
      </svg>
    ),
    title: 'AI & Automation',
    desc: 'Leverage the power of artificial intelligence and machine learning to automate workflows, extract insights, and create intelligent applications.',
    features: [
      'Machine learning models',
      'Natural language processing',
      'Computer vision solutions',
      'Predictive analytics',
      'Chatbot development',
      'RPA (Robotic Process Automation)',
    ],
    useCases: ['Document processing', 'Customer support bots', 'Fraud detection', 'Demand forecasting'],
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    id: 'saas-development',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
      </svg>
    ),
    title: 'SaaS Development',
    desc: 'Build scalable, multi-tenant SaaS platforms with subscription management, user authentication, analytics dashboards, and cloud-native architecture.',
    features: [
      'Multi-tenant architecture',
      'Subscription & billing management',
      'Role-based access control',
      'Analytics & reporting dashboards',
      'White-label solutions',
      'Auto-scaling infrastructure',
    ],
    useCases: ['EdTech platforms', 'HR management', 'Project management tools', 'Marketing automation'],
    gradient: 'from-cyan-500 to-blue-500',
  },
  {
    id: 'web-applications',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
    title: 'Web Applications',
    desc: 'High-performance, responsive web applications built with modern frameworks. From SPAs to PWAs, we deliver seamless digital experiences.',
    features: [
      'Single Page Applications (SPA)',
      'Progressive Web Apps (PWA)',
      'Real-time features (WebSockets)',
      'Server-side rendering (SSR)',
      'Performance optimization',
      'Cross-browser compatibility',
    ],
    useCases: ['Social platforms', 'Booking systems', 'Real-time dashboards', 'Collaboration tools'],
    gradient: 'from-emerald-500 to-teal-500',
  },
  {
    id: 'mvp-development',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
      </svg>
    ),
    title: 'Startup MVP Development',
    desc: 'Go from idea to market quickly with our rapid MVP development process. We help startups validate concepts, attract investors, and iterate fast.',
    features: [
      'Rapid prototyping',
      'Lean product development',
      'User validation testing',
      'Investor-ready demos',
      'Iterative development sprints',
      'Scalability planning',
    ],
    useCases: ['Startup ideas', 'Proof of concepts', 'Investor pitch products', 'Market validation'],
    gradient: 'from-orange-500 to-amber-500',
  },
  {
    id: 'api-development',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
      </svg>
    ),
    title: 'API Development & Integration',
    desc: 'Build robust, secure, and well-documented APIs. We design RESTful and GraphQL APIs that power your applications and enable seamless integrations.',
    features: [
      'RESTful API design',
      'GraphQL development',
      'API gateway setup',
      'OAuth & JWT authentication',
      'Rate limiting & caching',
      'API documentation (Swagger/OpenAPI)',
    ],
    useCases: ['Payment integrations', 'Data synchronization', 'Third-party services', 'Mobile app backends'],
    gradient: 'from-rose-500 to-pink-500',
  },
];

const whyChooseUs = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: 'Production-Grade Quality',
    desc: 'Every line of code is reviewed, tested, and optimized for production environments.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'On-Time Delivery',
    desc: 'We follow agile methodology with strict sprint timelines and regular progress updates.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
    title: 'Transparent Pricing',
    desc: 'No hidden costs. Clear milestones, detailed estimates, and predictable budgets.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
      </svg>
    ),
    title: 'Dedicated Support',
    desc: 'Post-launch support, maintenance, and continuous improvement to keep you growing.',
  },
];

export default function Services() {
  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-mesh">
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-primary-500/15 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-neon-purple/10 rounded-full blur-[150px]" />
        <div className="absolute inset-0 dot-pattern opacity-20" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-dark-300 font-medium mb-8">
              <span className="w-2 h-2 rounded-full bg-primary-400 animate-pulse" />
              Our Expertise
            </span>
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Services That <span className="gradient-text">Deliver Results</span>
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <p className="text-dark-400 text-lg md:text-xl max-w-3xl mx-auto">
              From AI-powered automation to scalable web platforms, we offer comprehensive technology solutions tailored to your business needs.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Detailed */}
      <section className="py-24 bg-dark-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {servicesDetailed.map((service, i) => (
            <AnimatedSection key={service.id}>
              <div id={service.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start ${i % 2 === 1 ? 'lg:direction-rtl' : ''}`}>
                <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className={`inline-flex w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} items-center justify-center text-white mb-6`}>
                    {service.icon}
                  </div>
                  <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">{service.title}</h2>
                  <p className="text-dark-400 text-lg leading-relaxed mb-8">{service.desc}</p>

                  <div className="mb-8">
                    <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                      <svg className="w-5 h-5 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                      </svg>
                      Key Features
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.features.map((f) => (
                        <div key={f} className="flex items-center gap-2">
                          <svg className="w-4 h-4 text-emerald-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-dark-300 text-sm">{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className={`glass-card p-8 ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <h4 className="text-white font-semibold mb-4">Common Use Cases</h4>
                  <div className="space-y-3">
                    {service.useCases.map((uc, ui) => (
                      <div key={ui} className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
                        <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500/20 to-neon-purple/20 flex items-center justify-center text-primary-400 text-sm font-semibold">
                          {ui + 1}
                        </span>
                        <span className="text-dark-300">{uc}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 pt-6 border-t border-white/5">
                    <Link to="/contact" className="btn-primary w-full text-center block">
                      <span>Discuss This Service</span>
                    </Link>
                  </div>
                </div>
              </div>

              {i < servicesDetailed.length - 1 && (
                <div className="gradient-line mt-20" />
              )}
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-mesh-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="text-primary-400 text-sm font-semibold uppercase tracking-widest mb-4 block">Why KodeNeurons</span>
              <h2 className="section-title mb-4">
                Why Choose <span className="gradient-text">Us</span>
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, i) => (
              <AnimatedSection key={i} delay={i * 100}>
                <div className="glass-card p-6 text-center h-full">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-primary-500/10 flex items-center justify-center text-primary-400">
                    {item.icon}
                  </div>
                  <h3 className="font-display font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-dark-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-dark-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Get <span className="gradient-text">Started?</span>
            </h2>
            <p className="text-dark-400 text-lg max-w-2xl mx-auto mb-10">
              Let's discuss your project requirements and find the perfect solution for your business needs.
            </p>
            <Link to="/contact" className="btn-primary text-lg px-10 py-4">
              <span>Start Your Project</span>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
