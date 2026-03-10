import AnimatedSection from '../components/AnimatedSection';
import { Link } from 'react-router-dom';
import SEO, { createBreadcrumbSchema } from '../components/SEO';

const values = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: 'Innovation',
    desc: 'We push the boundaries of technology, constantly exploring new tools and methodologies to deliver cutting-edge solutions.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: 'Quality',
    desc: 'Every line of code we write is crafted with care. We believe in production-grade quality from day one.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
    title: 'Collaboration',
    desc: 'We work as an extension of your team. Transparent communication, shared goals, and mutual respect drive everything we do.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
    title: 'Growth',
    desc: 'We build solutions that scale with your business. Our architectures are designed for long-term growth and evolution.',
  },
];

const milestones = [
  { year: '2022', title: 'Founded', desc: 'KodeNeurons was born with a vision to democratize AI-powered software development.' },
  { year: '2023', title: 'First 20 Projects', desc: 'Delivered 20+ projects across fintech, healthcare, e-commerce, and logistics sectors.' },
  { year: '2024', title: 'AI Specialization', desc: 'Expanded AI/ML capabilities with dedicated team for intelligent automation solutions.' },
  { year: '2025', title: '40+ Deliveries', desc: 'Crossed 40+ successful project deliveries with clients across multiple countries.' },
];

const teamCulture = [
  { title: 'Remote-First', desc: 'Work from anywhere. We believe in hiring the best talent regardless of geography.', icon: '🌍' },
  { title: 'Continuous Learning', desc: 'Weekly tech talks, conference sponsorships, and time for personal growth projects.', icon: '📚' },
  { title: 'Open Communication', desc: 'Flat hierarchy, open-door policy, and transparent decision-making processes.', icon: '💬' },
  { title: 'Work-Life Balance', desc: 'Flexible hours, mental health days, and emphasis on sustainable productivity.', icon: '⚖️' },
];

export default function About() {
  return (
    <div className="overflow-hidden">
      <SEO
        title="About Us - Our Story, Mission & Values"
        description="Learn about KodeNeurons - a next-generation AI solutions company. Our mission, values, team culture, and journey building the future of software development."
        keywords="about KodeNeurons, AI company, software development team, company values, tech company culture, mission vision"
        path="/about"
        structuredData={createBreadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'About', path: '/about' }])}
      />
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-mesh">
        <div className="absolute top-1/4 left-1/3 w-72 h-72 bg-primary-500/15 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-neon-purple/10 rounded-full blur-[150px]" />
        <div className="absolute inset-0 dot-pattern opacity-20" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-dark-300 font-medium mb-8">
              <span className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse" />
              Our Story
            </span>
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              About <span className="gradient-text">KodeNeurons</span>
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <p className="text-dark-400 text-lg md:text-xl max-w-3xl mx-auto">
              A next-generation AI solutions company building the future of software, one neuron at a time.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="py-24 bg-dark-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <h2 className="section-title mb-6">
                Building the <span className="gradient-text">Future of Software</span>
              </h2>
              <p className="text-dark-300 text-lg leading-relaxed mb-6">
                KodeNeurons was founded with a clear mission: to make world-class software development and AI solutions accessible to businesses of all sizes. We believe that every great idea deserves a great technology partner.
              </p>
              <p className="text-dark-400 leading-relaxed mb-6">
                Our team of engineers, AI researchers, and product strategists bring together deep expertise in modern software architecture, machine learning, and cloud infrastructure. We don't just build products — we architect digital ecosystems that evolve with your business.
              </p>
              <p className="text-dark-400 leading-relaxed mb-8">
                From Silicon Valley startups to enterprise corporations, we've helped organizations across industries leverage technology to solve complex challenges, automate workflows, and create exceptional digital experiences.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="glass-card p-6">
                  <div className="text-3xl font-display font-bold gradient-text mb-1">40+</div>
                  <div className="text-dark-400 text-sm">Projects Delivered</div>
                </div>
                <div className="glass-card p-6">
                  <div className="text-3xl font-display font-bold gradient-text mb-1">98%</div>
                  <div className="text-dark-400 text-sm">Client Satisfaction</div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="relative">
                <div className="glass-card p-8 mb-6">
                  <h3 className="font-display font-semibold text-xl text-white mb-4 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary-500/10 flex items-center justify-center">
                      <svg className="w-5 h-5 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    Our Vision
                  </h3>
                  <p className="text-dark-400 leading-relaxed">
                    To be the most trusted technology partner for businesses worldwide, enabling them to harness the full potential of AI and modern software engineering.
                  </p>
                </div>
                <div className="glass-card p-8">
                  <h3 className="font-display font-semibold text-xl text-white mb-4 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-neon-purple/10 flex items-center justify-center">
                      <svg className="w-5 h-5 text-neon-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                      </svg>
                    </div>
                    Our Mission
                  </h3>
                  <p className="text-dark-400 leading-relaxed">
                    To deliver innovative, scalable, and human-centric technology solutions that empower businesses to grow, automate, and lead in their industries.
                  </p>
                </div>
                <div className="absolute -top-4 -right-4 w-32 h-32 bg-primary-500/10 rounded-full blur-3xl" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-mesh-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="text-primary-400 text-sm font-semibold uppercase tracking-widest mb-4 block">Our Values</span>
              <h2 className="section-title mb-4">
                What <span className="gradient-text">Drives Us</span>
              </h2>
              <p className="section-subtitle">
                Our core values guide every decision we make and every line of code we write.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <AnimatedSection key={i} delay={i * 100}>
                <div className="glass-card p-8 h-full text-center">
                  <div className="w-14 h-14 mx-auto mb-6 rounded-2xl bg-primary-500/10 flex items-center justify-center text-primary-400">
                    {value.icon}
                  </div>
                  <h3 className="font-display font-semibold text-xl text-white mb-3">{value.title}</h3>
                  <p className="text-dark-400 text-sm leading-relaxed">{value.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-dark-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="text-primary-400 text-sm font-semibold uppercase tracking-widest mb-4 block">Our Journey</span>
              <h2 className="section-title mb-4">
                Key <span className="gradient-text">Milestones</span>
              </h2>
            </div>
          </AnimatedSection>

          <div className="relative max-w-3xl mx-auto">
            {/* Vertical line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary-500/50 via-neon-purple/50 to-transparent" />

            <div className="space-y-12">
              {milestones.map((m, i) => (
                <AnimatedSection key={i} delay={i * 150} direction={i % 2 === 0 ? 'left' : 'right'}>
                  <div className={`relative flex items-start gap-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    {/* Dot */}
                    <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary-500 border-4 border-dark-950 z-10" />

                    {/* Content */}
                    <div className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${i % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:ml-auto'}`}>
                      <div className="glass-card p-6">
                        <span className="text-primary-400 font-display font-bold text-lg">{m.year}</span>
                        <h3 className="font-display font-semibold text-white text-lg mt-1 mb-2">{m.title}</h3>
                        <p className="text-dark-400 text-sm leading-relaxed">{m.desc}</p>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Culture */}
      <section className="py-24 bg-mesh-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="text-primary-400 text-sm font-semibold uppercase tracking-widest mb-4 block">Life at KodeNeurons</span>
              <h2 className="section-title mb-4">
                Our <span className="gradient-text">Culture</span>
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamCulture.map((item, i) => (
              <AnimatedSection key={i} delay={i * 100}>
                <div className="glass-card p-6 text-center h-full">
                  <div className="text-4xl mb-4">{item.icon}</div>
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
              Let's Build Something <span className="gradient-text">Amazing</span>
            </h2>
            <p className="text-dark-400 text-lg max-w-2xl mx-auto mb-10">
              Whether you want to partner with us or join our team, we'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact" className="btn-primary text-lg px-10 py-4">
                <span>Get In Touch</span>
              </Link>
              <Link to="/careers" className="btn-outline text-lg px-10 py-4">
                Join Our Team
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
