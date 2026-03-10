import AnimatedSection from '../components/AnimatedSection';
import SEO, { createJobPostingSchema, createBreadcrumbSchema } from '../components/SEO';

const perks = [
  { icon: '🏠', title: 'Remote-First', desc: 'Work from anywhere in the world. We believe in hiring talent, not zip codes.' },
  { icon: '📈', title: 'Growth Budget', desc: 'Annual learning budget for courses, conferences, and certifications of your choice.' },
  { icon: '🏖️', title: 'Flexible PTO', desc: 'Flexible time off policy. We trust you to manage your time responsibly.' },
  { icon: '💻', title: 'Equipment', desc: 'Get the tools you need. MacBook, monitor, standing desk — your choice.' },
  { icon: '🧠', title: 'Tech Fridays', desc: '20% time for personal projects, open source contributions, or learning new tech.' },
  { icon: '💰', title: 'Competitive Pay', desc: 'Market-rate compensation with performance bonuses and equity options.' },
  { icon: '🤝', title: 'Team Events', desc: 'Regular virtual hangouts, annual team retreats, and knowledge-sharing sessions.' },
  { icon: '🏥', title: 'Health & Wellness', desc: 'Health insurance coverage and mental wellness support for all team members.' },
];

const openPositions = [
  {
    title: 'Senior Full-Stack Developer',
    team: 'Engineering',
    type: 'Full-time',
    location: 'Remote',
    tags: ['React', 'Node.js', 'TypeScript', 'AWS'],
    desc: 'Build and architect full-stack applications for our diverse client portfolio. Lead technical decisions and mentor junior developers.',
  },
  {
    title: 'AI/ML Engineer',
    team: 'AI Research',
    type: 'Full-time',
    location: 'Remote',
    tags: ['Python', 'TensorFlow', 'LangChain', 'OpenAI'],
    desc: 'Design and implement AI solutions including LLM integrations, computer vision, and predictive analytics for client projects.',
  },
  {
    title: 'Frontend Developer',
    team: 'Engineering',
    type: 'Full-time',
    location: 'Remote',
    tags: ['React', 'Next.js', 'TypeScript', 'Tailwind'],
    desc: 'Create stunning, responsive user interfaces. Collaborate with designers and backend engineers to deliver exceptional user experiences.',
  },
  {
    title: 'DevOps Engineer',
    team: 'Infrastructure',
    type: 'Full-time',
    location: 'Remote',
    tags: ['AWS', 'Docker', 'Kubernetes', 'CI/CD'],
    desc: 'Build and maintain cloud infrastructure, CI/CD pipelines, and monitoring systems. Ensure high availability and scalability.',
  },
  {
    title: 'UI/UX Designer',
    team: 'Design',
    type: 'Full-time',
    location: 'Remote',
    tags: ['Figma', 'Design Systems', 'Prototyping', 'User Research'],
    desc: 'Design intuitive, beautiful interfaces for web and mobile applications. Conduct user research and create scalable design systems.',
  },
];

const cultureValues = [
  {
    title: 'Build Things That Matter',
    desc: 'We work on projects that make a real impact. Every line of code we write solves a real problem for businesses and users.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84" />
      </svg>
    ),
  },
  {
    title: 'Learn and Grow Together',
    desc: 'We invest in continuous learning. Weekly tech talks, code reviews, and knowledge sharing are part of our DNA.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342" />
      </svg>
    ),
  },
  {
    title: 'Ownership and Trust',
    desc: 'We trust our team to own their work end-to-end. No micromanagement — just clear goals, autonomy, and accountability.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
];

export default function Careers() {
  return (
    <div className="overflow-hidden">
      <SEO
        title="Careers - Join Our Team"
        description="Join KodeNeurons - a remote-first AI solutions company. Open positions in engineering, AI research, design, and infrastructure. Great perks and culture."
        keywords="KodeNeurons careers, software developer jobs, AI engineer jobs, remote developer positions, tech jobs, frontend developer, DevOps engineer"
        path="/careers"
        structuredData={[
          ...openPositions.map(pos => createJobPostingSchema(pos)),
          createBreadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Careers', path: '/careers' }])
        ]}
      />
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-mesh">
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-primary-500/15 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-neon-purple/10 rounded-full blur-[150px]" />
        <div className="absolute inset-0 dot-pattern opacity-20" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-dark-300 font-medium mb-8">
              <span className="w-2 h-2 rounded-full bg-neon-green animate-pulse" />
              We're Hiring
            </span>
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Build the Future <span className="gradient-text">With Us</span>
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <p className="text-dark-400 text-lg md:text-xl max-w-3xl mx-auto">
              Join a team of passionate engineers and innovators. Work on cutting-edge AI and software projects that make a real impact.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Culture Values */}
      <section className="py-24 bg-dark-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="text-primary-400 text-sm font-semibold uppercase tracking-widest mb-4 block">Our Culture</span>
              <h2 className="section-title mb-4">
                Why Work at <span className="gradient-text">KodeNeurons?</span>
              </h2>
              <p className="section-subtitle">
                We're building more than software — we're building a place where great engineers do their best work.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {cultureValues.map((value, i) => (
              <AnimatedSection key={i} delay={i * 150}>
                <div className="glass-card p-8 h-full">
                  <div className="w-14 h-14 rounded-2xl bg-primary-500/10 flex items-center justify-center text-primary-400 mb-6">
                    {value.icon}
                  </div>
                  <h3 className="font-display font-semibold text-xl text-white mb-3">{value.title}</h3>
                  <p className="text-dark-400 leading-relaxed">{value.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Perks */}
      <section className="py-24 bg-mesh-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="text-primary-400 text-sm font-semibold uppercase tracking-widest mb-4 block">Benefits</span>
              <h2 className="section-title mb-4">
                Perks & <span className="gradient-text">Benefits</span>
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {perks.map((perk, i) => (
              <AnimatedSection key={i} delay={i * 75}>
                <div className="glass-card p-6 text-center h-full">
                  <div className="text-3xl mb-4">{perk.icon}</div>
                  <h3 className="font-display font-semibold text-white mb-2">{perk.title}</h3>
                  <p className="text-dark-400 text-sm leading-relaxed">{perk.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-24 bg-dark-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <span className="text-primary-400 text-sm font-semibold uppercase tracking-widest mb-4 block">Open Roles</span>
              <h2 className="section-title mb-4">
                Current <span className="gradient-text">Openings</span>
              </h2>
              <p className="section-subtitle">
                Find your next role. All positions are remote-first.
              </p>
            </div>
          </AnimatedSection>

          <div className="space-y-4">
            {openPositions.map((pos, i) => (
              <AnimatedSection key={i} delay={i * 100}>
                <div className="glass-card p-6 md:p-8 group hover:border-primary-500/30 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                    <div>
                      <h3 className="font-display font-semibold text-xl text-white group-hover:text-primary-300 transition-colors">{pos.title}</h3>
                      <div className="flex flex-wrap items-center gap-3 mt-2 text-sm text-dark-400">
                        <span className="flex items-center gap-1">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197" />
                          </svg>
                          {pos.team}
                        </span>
                        <span>•</span>
                        <span>{pos.type}</span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                          </svg>
                          {pos.location}
                        </span>
                      </div>
                    </div>
                    <a
                      href="mailto:careers@kodeneurons.in"
                      className="btn-primary text-sm whitespace-nowrap self-start md:self-center"
                    >
                      <span>Apply Now</span>
                    </a>
                  </div>

                  <p className="text-dark-400 text-sm leading-relaxed mb-4">{pos.desc}</p>

                  <div className="flex flex-wrap gap-2">
                    {pos.tags.map((tag) => (
                      <span key={tag} className="tech-badge text-xs">{tag}</span>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* General Application CTA */}
      <section className="py-24 bg-mesh">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
              Don't See Your <span className="gradient-text">Role?</span>
            </h2>
            <p className="text-dark-400 text-lg max-w-2xl mx-auto mb-10">
              We're always looking for talented people. Send us your resume and tell us how you can contribute.
            </p>
            <a href="mailto:careers@kodeneurons.in" className="btn-primary text-lg px-10 py-4">
              <span>Send General Application</span>
            </a>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
