import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';
import SEO, { organizationSchema, websiteSchema } from '../components/SEO';

/* ========== Data ========== */
const stats = [
  { number: 40, suffix: '+', label: 'Projects Delivered' },
  { number: 10, suffix: '+', label: 'Technologies' },
  { number: 15, suffix: '+', label: 'Industries Served' },
  { number: 98, suffix: '%', label: 'Client Satisfaction' },
];

const services = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
    title: 'Custom Software Development',
    desc: 'End-to-end custom software solutions tailored to your unique business requirements and workflows.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
    title: 'AI & Automation',
    desc: 'Intelligent AI solutions and workflow automation to boost productivity and eliminate manual processes.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
      </svg>
    ),
    title: 'SaaS Development',
    desc: 'Scalable SaaS platforms with multi-tenant architecture, subscription management, and cloud deployment.',
    color: 'from-cyan-500 to-blue-500',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
    title: 'Web Applications',
    desc: 'High-performance web applications with modern frameworks, real-time features, and seamless user experiences.',
    color: 'from-emerald-500 to-teal-500',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
      </svg>
    ),
    title: 'Startup MVP Development',
    desc: 'Rapid MVP development to validate your idea, attract investors, and go to market quickly with confidence.',
    color: 'from-orange-500 to-amber-500',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
      </svg>
    ),
    title: 'API Development',
    desc: 'Robust RESTful and GraphQL APIs designed for performance, security, and seamless third-party integrations.',
    color: 'from-rose-500 to-pink-500',
  },
];

const processSteps = [
  { step: '01', title: 'Idea Discovery', desc: 'We understand your vision, goals, and requirements through in-depth consultation sessions.' },
  { step: '02', title: 'Product Architecture', desc: 'Creating scalable architecture, tech stack selection, and detailed project roadmap.' },
  { step: '03', title: 'Development', desc: 'Agile development with regular sprints, code reviews, and continuous client updates.' },
  { step: '04', title: 'Deployment', desc: 'Seamless deployment to cloud infrastructure with CI/CD pipelines and monitoring.' },
  { step: '05', title: 'Continuous Support', desc: 'Ongoing maintenance, performance optimization, and feature enhancements.' },
];

const caseStudies = [
  {
    tag: 'AI / SaaS',
    title: 'AI-Powered Analytics Dashboard',
    problem: 'A fintech startup needed real-time analytics with predictive insights for portfolio management.',
    solution: 'Built a full-stack SaaS platform with ML-powered forecasting, real-time data streaming, and interactive dashboards.',
    results: ['60% faster decision making', '3x user engagement increase', '$2M seed funding raised'],
    tech: ['React', 'Python', 'TensorFlow', 'AWS'],
  },
  {
    tag: 'Automation',
    title: 'Enterprise Workflow Automation',
    problem: 'A logistics company was losing 200+ hours monthly on manual data entry and report generation.',
    solution: 'Developed intelligent automation bots with OCR, NLP processing, and automated reporting pipelines.',
    results: ['200+ hours saved monthly', '99.5% accuracy rate', '40% cost reduction'],
    tech: ['Node.js', 'Python', 'MongoDB', 'Docker'],
  },
  {
    tag: 'E-Commerce',
    title: 'Scalable E-Commerce Platform',
    problem: 'A retail brand needed a custom e-commerce solution handling 10K+ concurrent users with personalization.',
    solution: 'Architected a microservices-based platform with AI-driven product recommendations and real-time inventory.',
    results: ['150% revenue increase', '10K+ concurrent users', '35% higher conversion rate'],
    tech: ['Next.js', 'Node.js', 'PostgreSQL', 'Redis'],
  },
];

const techCategories = [
  {
    category: 'Frontend',
    items: ['React', 'Next.js', 'Vue.js', 'TypeScript'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Python', 'Java', 'Go'],
  },
  {
    category: 'AI / ML',
    items: ['TensorFlow', 'PyTorch', 'OpenAI', 'LangChain'],
  },
  {
    category: 'Cloud',
    items: ['AWS', 'Azure', 'GCP', 'Docker'],
  },
  {
    category: 'Database',
    items: ['PostgreSQL', 'MongoDB', 'Redis', 'Firebase'],
  },
];

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'CTO, FinVue Analytics',
    text: 'KodeNeurons transformed our vision into a production-ready platform in record time. Their AI expertise and attention to detail exceeded our expectations.',
    rating: 5,
  },
  {
    name: 'Marcus Johnson',
    role: 'Founder, LogiFlow',
    text: 'The automation solution they built saved us 200+ hours monthly. Professional team with deep technical knowledge and great communication.',
    rating: 5,
  },
  {
    name: 'Priya Sharma',
    role: 'CEO, ShopNova',
    text: 'Our e-commerce platform handles 10K+ users seamlessly. KodeNeurons delivered a scalable, beautiful solution that directly impacted our revenue.',
    rating: 5,
  },
];

/* ========== Counter Hook ========== */
function useCounter(end, duration = 2000, isVisible = false) {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration, isVisible]);

  return [count, countRef];
}

/* ========== Stat Card ========== */
function StatCard({ number, suffix, label, isVisible }) {
  const [count] = useCounter(number, 2000, isVisible);
  return (
    <div className="text-center">
      <div className="text-4xl md:text-5xl font-display font-bold text-white mb-2">
        {count}<span className="gradient-text">{suffix}</span>
      </div>
      <div className="text-dark-400 text-sm font-medium uppercase tracking-wider">{label}</div>
    </div>
  );
}

/* ========== Home Page ========== */
export default function Home() {
  const [statsVisible, setStatsVisible] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStatsVisible(true);
      },
      { threshold: 0.3 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="overflow-hidden">
      <SEO
        title="Transform Your Ideas Into Powerful Software"
        description="KodeNeurons builds AI-powered software, automation systems, and scalable digital products. Custom software development, SaaS, MVP, and API solutions for startups and enterprises."
        keywords="AI software development, custom software, SaaS development, automation, machine learning, web applications, MVP development, API development, KodeNeurons"
        path="/"
        structuredData={[organizationSchema, websiteSchema]}
      />
      {/* ===== HERO ===== */}
      <section className="relative min-h-screen flex items-center bg-mesh pt-20">
        {/* Decorative orbs */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary-500/20 rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-purple/15 rounded-full blur-[150px] animate-pulse-slow delay-700" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-cyan/5 rounded-full blur-[200px]" />

        {/* Grid pattern */}
        <div className="absolute inset-0 dot-pattern opacity-30" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <AnimatedSection delay={0}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-sm text-dark-300 font-medium">AI-Powered Software Solutions</span>
              </div>
            </AnimatedSection>

            {/* Headline */}
            <AnimatedSection delay={100}>
              <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.1] mb-6">
                Transform Your Ideas Into{' '}
                <span className="text-gradient-animated">Powerful Software</span>
              </h1>
            </AnimatedSection>

            {/* Subtext */}
            <AnimatedSection delay={200}>
              <p className="text-dark-400 text-lg md:text-xl lg:text-2xl leading-relaxed max-w-2xl mx-auto mb-10">
                We build AI-powered software, automation systems, and scalable digital products that drive business growth.
              </p>
            </AnimatedSection>

            {/* CTAs */}
            <AnimatedSection delay={300}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to="/contact" className="btn-primary text-lg px-10 py-4">
                  <span>Start Your Project</span>
                </Link>
                <Link to="/projects" className="btn-outline text-lg px-10 py-4">
                  View Our Work
                </Link>
              </div>
            </AnimatedSection>

            {/* Trusted by text */}
            <AnimatedSection delay={500}>
              <div className="mt-16 pt-8 border-t border-white/5">
                <p className="text-dark-500 text-sm uppercase tracking-widest mb-4">Trusted by innovative companies</p>
                <div className="flex items-center justify-center gap-8 flex-wrap opacity-40">
                  {['TechCorp', 'InnovateLab', 'CloudFirst', 'DataSync', 'AI Solutions'].map((company) => (
                    <span key={company} className="text-dark-400 font-display font-semibold text-lg">{company}</span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark-950 to-transparent" />
      </section>

      {/* ===== STATS ===== */}
      <section ref={statsRef} className="relative py-20 bg-dark-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card p-8 md:p-12 rounded-3xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              {stats.map((stat, i) => (
                <StatCard key={i} {...stat} isVisible={statsVisible} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section className="relative py-24 bg-mesh-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="text-primary-400 text-sm font-semibold uppercase tracking-widest mb-4 block">Our Services</span>
              <h2 className="section-title mb-4">
                Solutions That <span className="gradient-text">Drive Growth</span>
              </h2>
              <p className="section-subtitle">
                From concept to deployment, we deliver end-to-end technology solutions that transform businesses.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <AnimatedSection key={i} delay={i * 100}>
                <div className="glass-card p-8 h-full group cursor-pointer">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>
                  <h3 className="font-display font-semibold text-xl text-white mb-3">{service.title}</h3>
                  <p className="text-dark-400 leading-relaxed">{service.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={600}>
            <div className="text-center mt-12">
              <Link to="/services" className="btn-outline">
                Explore All Services →
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== PROCESS ===== */}
      <section className="relative py-24 bg-dark-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="text-primary-400 text-sm font-semibold uppercase tracking-widest mb-4 block">How We Work</span>
              <h2 className="section-title mb-4">
                Our Proven <span className="gradient-text">Process</span>
              </h2>
              <p className="section-subtitle">
                A structured approach that ensures quality, transparency, and timely delivery.
              </p>
            </div>
          </AnimatedSection>

          <div className="relative">
            {/* Connection line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/30 to-transparent -translate-y-1/2" />

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {processSteps.map((step, i) => (
                <AnimatedSection key={i} delay={i * 150}>
                  <div className="relative text-center group">
                    <div className="relative z-10 w-16 h-16 mx-auto mb-6 rounded-2xl bg-dark-900 border border-white/10 flex items-center justify-center group-hover:border-primary-500/50 group-hover:shadow-neon transition-all duration-300">
                      <span className="font-display font-bold text-lg gradient-text">{step.step}</span>
                    </div>
                    <h3 className="font-display font-semibold text-white mb-2">{step.title}</h3>
                    <p className="text-dark-400 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== CASE STUDIES ===== */}
      <section className="relative py-24 bg-mesh-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="text-primary-400 text-sm font-semibold uppercase tracking-widest mb-4 block">Case Studies</span>
              <h2 className="section-title mb-4">
                Featured <span className="gradient-text">Projects</span>
              </h2>
              <p className="section-subtitle">
                Real results from real projects. See how we've helped businesses transform through technology.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, i) => (
              <AnimatedSection key={i} delay={i * 150}>
                <div className="glass-card p-8 h-full flex flex-col">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 rounded-full bg-primary-500/10 text-primary-400 text-xs font-semibold uppercase tracking-wider">
                      {study.tag}
                    </span>
                  </div>
                  <h3 className="font-display font-semibold text-xl text-white mb-4">{study.title}</h3>

                  <div className="space-y-4 mb-6 flex-grow">
                    <div>
                      <p className="text-primary-400 text-xs font-semibold uppercase tracking-wider mb-1">Challenge</p>
                      <p className="text-dark-400 text-sm leading-relaxed">{study.problem}</p>
                    </div>
                    <div>
                      <p className="text-primary-400 text-xs font-semibold uppercase tracking-wider mb-1">Solution</p>
                      <p className="text-dark-400 text-sm leading-relaxed">{study.solution}</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <p className="text-primary-400 text-xs font-semibold uppercase tracking-wider mb-2">Results</p>
                    <div className="space-y-1.5">
                      {study.results.map((result, ri) => (
                        <div key={ri} className="flex items-center gap-2">
                          <svg className="w-4 h-4 text-emerald-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-dark-300 text-sm">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                    {study.tech.map((t) => (
                      <span key={t} className="tech-badge text-xs">{t}</span>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={500}>
            <div className="text-center mt-12">
              <Link to="/projects" className="btn-outline">
                View All Case Studies →
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== TECH STACK ===== */}
      <section className="relative py-24 bg-dark-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="text-primary-400 text-sm font-semibold uppercase tracking-widest mb-4 block">Technology Stack</span>
              <h2 className="section-title mb-4">
                Built With <span className="gradient-text">Modern Tech</span>
              </h2>
              <p className="section-subtitle">
                We leverage cutting-edge technologies to build robust, scalable solutions.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {techCategories.map((cat, i) => (
              <AnimatedSection key={i} delay={i * 100}>
                <div className="glass-card p-6 text-center">
                  <h4 className="font-display font-semibold text-white mb-4 text-sm uppercase tracking-wider">{cat.category}</h4>
                  <div className="space-y-2">
                    {cat.items.map((item) => (
                      <div key={item} className="px-3 py-2 rounded-lg bg-white/5 text-dark-300 text-sm hover:bg-primary-500/10 hover:text-primary-300 transition-colors cursor-default">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={500}>
            <div className="text-center mt-12">
              <Link to="/technologies" className="btn-outline">
                Explore Our Stack →
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== ABOUT PREVIEW ===== */}
      <section className="relative py-24 bg-mesh-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <span className="text-primary-400 text-sm font-semibold uppercase tracking-widest mb-4 block">About KodeNeurons</span>
              <h2 className="section-title mb-6">
                We Build the <span className="gradient-text">Future of Software</span>
              </h2>
              <p className="text-dark-400 text-lg leading-relaxed mb-6">
                KodeNeurons is a next-generation AI solutions and software development company. We partner with startups, scale-ups, and enterprises to turn ambitious ideas into market-ready digital products.
              </p>
              <p className="text-dark-400 leading-relaxed mb-8">
                Our team of engineers, AI specialists, and product strategists bring deep technical expertise across modern technology stacks. We don't just write code — we architect solutions that scale, innovate, and deliver measurable business impact.
              </p>
              <Link to="/about" className="btn-outline">
                Learn More About Us →
              </Link>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="relative">
                <div className="glass-card p-8 space-y-6">
                  {[
                    { label: 'Innovation First', desc: 'Cutting-edge AI and modern frameworks' },
                    { label: 'Client Focused', desc: 'Your success is our primary metric' },
                    { label: 'Agile Delivery', desc: 'Iterative development with continuous feedback' },
                    { label: 'Scalable Solutions', desc: 'Architecture built for growth' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-primary-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-5 h-5 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-display font-semibold text-white mb-1">{item.label}</h4>
                        <p className="text-dark-400 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                {/* Decorative glow */}
                <div className="absolute -top-4 -right-4 w-32 h-32 bg-primary-500/10 rounded-full blur-3xl" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-neon-purple/10 rounded-full blur-3xl" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="relative py-24 bg-dark-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="text-primary-400 text-sm font-semibold uppercase tracking-widest mb-4 block">Testimonials</span>
              <h2 className="section-title mb-4">
                What Our <span className="gradient-text">Clients Say</span>
              </h2>
              <p className="section-subtitle">
                Don't just take our word for it — hear from the teams we've helped succeed.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <AnimatedSection key={i} delay={i * 150}>
                <div className="glass-card p-8 h-full flex flex-col">
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(t.rating)].map((_, si) => (
                      <svg key={si} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  <p className="text-dark-300 leading-relaxed flex-grow mb-6 italic">"{t.text}"</p>

                  <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-500 to-neon-purple flex items-center justify-center">
                      <span className="text-white font-semibold text-sm">{t.name.charAt(0)}</span>
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm">{t.name}</p>
                      <p className="text-dark-400 text-xs">{t.role}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="relative py-24 bg-mesh overflow-hidden">
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary-500/10 rounded-full blur-[180px]" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Have an idea?<br />
              <span className="gradient-text">Let's build it.</span>
            </h2>
            <p className="text-dark-400 text-lg md:text-xl max-w-2xl mx-auto mb-10">
              Whether you're a startup with a vision or an enterprise looking to innovate, we're here to turn your ideas into reality.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact" className="btn-primary text-lg px-10 py-4">
                <span>Get In Touch</span>
              </Link>
              <a href="mailto:hello@kodeneurons.in" className="btn-outline text-lg px-10 py-4">
                hello@kodeneurons.in
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
