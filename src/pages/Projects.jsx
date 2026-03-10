import { useState } from 'react';
import AnimatedSection from '../components/AnimatedSection';
import { Link } from 'react-router-dom';
import SEO, { createBreadcrumbSchema } from '../components/SEO';

const categories = ['All', 'AI / ML', 'SaaS', 'E-Commerce', 'Automation', 'Mobile'];

const projects = [
  {
    category: 'AI / ML',
    title: 'AI-Powered Analytics Dashboard',
    client: 'FinVue Analytics',
    duration: '4 months',
    problem: 'A fintech startup needed real-time analytics with predictive insights for investment portfolio management. Manual analysis was taking days.',
    solution: 'Built a full-stack SaaS platform with ML-powered forecasting, real-time data streaming through WebSockets, interactive data visualizations with D3.js, and role-based access for institutional investors.',
    results: ['60% faster decision-making process', '3x increase in user engagement', '$2M seed funding raised post-launch', '10K+ active users within 6 months'],
    tech: ['React', 'Python', 'TensorFlow', 'AWS', 'PostgreSQL', 'Redis'],
    metrics: { users: '10K+', uptime: '99.9%', speed: '<200ms' },
  },
  {
    category: 'Automation',
    title: 'Enterprise Workflow Automation Suite',
    client: 'LogiFlow Solutions',
    duration: '3 months',
    problem: 'A logistics company was losing 200+ man-hours monthly on manual data entry, invoice processing, and report generation across 15+ locations.',
    solution: 'Developed intelligent automation bots with OCR for document scanning, NLP processing for email classification, automated reporting pipelines, and a centralized management dashboard.',
    results: ['200+ hours saved monthly', '99.5% processing accuracy', '40% operational cost reduction', 'ROI achieved in 2 months'],
    tech: ['Node.js', 'Python', 'MongoDB', 'Docker', 'Kubernetes', 'RabbitMQ'],
    metrics: { saved: '200+ hrs', accuracy: '99.5%', roi: '2 months' },
  },
  {
    category: 'E-Commerce',
    title: 'Scalable E-Commerce Platform',
    client: 'ShopNova Retail',
    duration: '5 months',
    problem: 'A growing retail brand needed a custom e-commerce solution that could handle 10K+ concurrent users, personalized recommendations, and real-time inventory across multiple warehouses.',
    solution: 'Architected a microservices-based platform with AI-driven product recommendations, real-time inventory sync, multi-warehouse management, and advanced analytics for marketing optimization.',
    results: ['150% revenue increase in 6 months', '10K+ concurrent users supported', '35% higher conversion rate', 'Sub-second page load times'],
    tech: ['Next.js', 'Node.js', 'PostgreSQL', 'Redis', 'Elasticsearch', 'AWS'],
    metrics: { revenue: '+150%', users: '10K+', conversion: '+35%' },
  },
  {
    category: 'SaaS',
    title: 'HR Management SaaS Platform',
    client: 'PeopleFirst HR',
    duration: '6 months',
    problem: 'HR teams were using 5+ disconnected tools for recruitment, onboarding, performance reviews, and payroll. No unified view of employee lifecycle.',
    solution: 'Built a comprehensive HR SaaS platform with multi-tenant architecture, applicant tracking system, automated onboarding workflows, 360° performance reviews, and payroll integrations.',
    results: ['70% reduction in HR admin time', '50+ companies onboarded in 3 months', '95% user satisfaction score', 'SOC 2 Type II compliant'],
    tech: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'Stripe', 'SendGrid'],
    metrics: { companies: '50+', satisfaction: '95%', reduction: '70%' },
  },
  {
    category: 'Mobile',
    title: 'Health & Fitness Tracking App',
    client: 'FitPulse',
    duration: '4 months',
    problem: 'A fitness startup needed a cross-platform mobile app with real-time workout tracking, AI-generated meal plans, social features, and wearable device integrations.',
    solution: 'Developed a React Native app with custom exercise detection using phone sensors, AI-powered nutrition planning, social workout challenges, and integrations with Apple Health and Google Fit.',
    results: ['50K+ downloads in first quarter', '4.8 star App Store rating', '85% daily active user retention', 'Featured in Apple App Store'],
    tech: ['React Native', 'Node.js', 'MongoDB', 'TensorFlow Lite', 'Firebase', 'GraphQL'],
    metrics: { downloads: '50K+', rating: '4.8★', retention: '85%' },
  },
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="overflow-hidden">
      <SEO
        title="Case Studies - Real Projects, Real Results"
        description="Explore KodeNeurons case studies and portfolio. See how we've delivered AI analytics, automation suites, e-commerce platforms, SaaS products, and mobile apps."
        keywords="software case studies, AI project portfolio, SaaS development examples, automation case study, e-commerce development, mobile app development"
        path="/projects"
        structuredData={createBreadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Case Studies', path: '/projects' }])}
      />
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-mesh">
        <div className="absolute top-1/3 left-1/3 w-72 h-72 bg-primary-500/15 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-neon-purple/10 rounded-full blur-[150px]" />
        <div className="absolute inset-0 dot-pattern opacity-20" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-dark-300 font-medium mb-8">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Our Portfolio
            </span>
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Case <span className="gradient-text">Studies</span>
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <p className="text-dark-400 text-lg md:text-xl max-w-3xl mx-auto">
              Real projects, real results. Explore how we've helped businesses transform through innovative technology solutions.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Filters */}
      <section className="py-12 bg-dark-950 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-primary-500/20 text-primary-300 border border-primary-500/30'
                    : 'bg-white/5 text-dark-400 border border-white/10 hover:bg-white/10 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects List */}
      <section className="py-20 bg-dark-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {filteredProjects.map((project, i) => (
            <AnimatedSection key={project.title}>
              <div className="glass-card p-8 md:p-10 overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                  {/* Left: Overview */}
                  <div className="lg:col-span-2">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-3 py-1 rounded-full bg-primary-500/10 text-primary-400 text-xs font-semibold uppercase tracking-wider">
                        {project.category}
                      </span>
                      <span className="text-dark-500 text-sm">{project.duration}</span>
                    </div>

                    <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-2">{project.title}</h2>
                    <p className="text-dark-400 text-sm mb-6">Client: {project.client}</p>

                    <div className="space-y-6">
                      <div>
                        <h4 className="text-primary-400 text-xs font-semibold uppercase tracking-wider mb-2">The Challenge</h4>
                        <p className="text-dark-300 leading-relaxed">{project.problem}</p>
                      </div>
                      <div>
                        <h4 className="text-primary-400 text-xs font-semibold uppercase tracking-wider mb-2">Our Solution</h4>
                        <p className="text-dark-300 leading-relaxed">{project.solution}</p>
                      </div>
                    </div>

                    <div className="mt-6">
                      <h4 className="text-primary-400 text-xs font-semibold uppercase tracking-wider mb-3">Key Results</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {project.results.map((r, ri) => (
                          <div key={ri} className="flex items-center gap-2">
                            <svg className="w-4 h-4 text-emerald-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-dark-300 text-sm">{r}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-white/5">
                      {project.tech.map((t) => (
                        <span key={t} className="tech-badge text-xs">{t}</span>
                      ))}
                    </div>
                  </div>

                  {/* Right: Metrics */}
                  <div className="space-y-4">
                    <h4 className="text-white font-semibold mb-4">Key Metrics</h4>
                    {Object.entries(project.metrics).map(([key, value]) => (
                      <div key={key} className="p-4 rounded-xl bg-white/5 border border-white/5">
                        <div className="text-2xl font-display font-bold gradient-text mb-1">{value}</div>
                        <div className="text-dark-400 text-xs uppercase tracking-wider">{key}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-mesh">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
              Want Similar <span className="gradient-text">Results?</span>
            </h2>
            <p className="text-dark-400 text-lg max-w-2xl mx-auto mb-10">
              Let us help you build a solution that transforms your business and delivers measurable outcomes.
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
