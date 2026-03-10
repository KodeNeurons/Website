import AnimatedSection from '../components/AnimatedSection';
import { Link } from 'react-router-dom';

const techStack = [
  {
    category: 'Frontend',
    desc: 'Building beautiful, responsive, and performant user interfaces.',
    color: 'from-blue-500 to-cyan-500',
    technologies: [
      { name: 'React', desc: 'Component-based UI library for building interactive interfaces', level: 'Expert' },
      { name: 'Next.js', desc: 'Full-stack React framework with SSR, SSG, and API routes', level: 'Expert' },
      { name: 'Vue.js', desc: 'Progressive framework for building modern web applications', level: 'Advanced' },
      { name: 'TypeScript', desc: 'Type-safe JavaScript for scalable, maintainable codebases', level: 'Expert' },
      { name: 'Tailwind CSS', desc: 'Utility-first CSS framework for rapid UI development', level: 'Expert' },
      { name: 'React Native', desc: 'Cross-platform mobile development with React', level: 'Advanced' },
    ],
  },
  {
    category: 'Backend',
    desc: 'Robust, scalable server-side solutions and API development.',
    color: 'from-emerald-500 to-teal-500',
    technologies: [
      { name: 'Node.js', desc: 'Scalable JavaScript runtime for high-performance backend services', level: 'Expert' },
      { name: 'Python', desc: 'Versatile language for web services, AI/ML, and automation', level: 'Expert' },
      { name: 'Java', desc: 'Enterprise-grade applications with Spring Boot ecosystem', level: 'Advanced' },
      { name: 'Go', desc: 'High-performance microservices and concurrent systems', level: 'Advanced' },
      { name: 'Express.js', desc: 'Minimalist web framework for Node.js APIs', level: 'Expert' },
      { name: 'FastAPI', desc: 'Modern Python framework for high-performance APIs', level: 'Expert' },
    ],
  },
  {
    category: 'AI / Machine Learning',
    desc: 'Intelligent solutions powered by state-of-the-art AI.',
    color: 'from-purple-500 to-pink-500',
    technologies: [
      { name: 'TensorFlow', desc: 'End-to-end ML platform for training and deploying models', level: 'Expert' },
      { name: 'PyTorch', desc: 'Deep learning framework for research and production', level: 'Advanced' },
      { name: 'OpenAI / GPT', desc: 'Large language model integration and prompt engineering', level: 'Expert' },
      { name: 'LangChain', desc: 'Building applications powered by language models', level: 'Expert' },
      { name: 'Scikit-learn', desc: 'Classical machine learning algorithms and data analysis', level: 'Expert' },
      { name: 'Hugging Face', desc: 'Transformer models for NLP and computer vision tasks', level: 'Advanced' },
    ],
  },
  {
    category: 'Cloud & DevOps',
    desc: 'Cloud-native infrastructure and deployment pipelines.',
    color: 'from-orange-500 to-amber-500',
    technologies: [
      { name: 'AWS', desc: 'EC2, Lambda, S3, RDS, ECS, and full AWS ecosystem', level: 'Expert' },
      { name: 'Microsoft Azure', desc: 'Azure Functions, App Service, Cosmos DB, and more', level: 'Advanced' },
      { name: 'Google Cloud', desc: 'GKE, Cloud Run, BigQuery, and GCP services', level: 'Advanced' },
      { name: 'Docker', desc: 'Containerization for consistent development and deployment', level: 'Expert' },
      { name: 'Kubernetes', desc: 'Container orchestration for scalable microservices', level: 'Advanced' },
      { name: 'CI/CD', desc: 'GitHub Actions, Jenkins, GitLab CI for automated pipelines', level: 'Expert' },
    ],
  },
  {
    category: 'Database',
    desc: 'Data storage solutions for every use case.',
    color: 'from-rose-500 to-pink-500',
    technologies: [
      { name: 'PostgreSQL', desc: 'Advanced relational database for complex queries and ACID compliance', level: 'Expert' },
      { name: 'MongoDB', desc: 'Document database for flexible, scalable NoSQL storage', level: 'Expert' },
      { name: 'Redis', desc: 'In-memory data store for caching and real-time features', level: 'Expert' },
      { name: 'Firebase', desc: 'Real-time database and backend-as-a-service platform', level: 'Advanced' },
      { name: 'Elasticsearch', desc: 'Full-text search and analytics engine', level: 'Advanced' },
      { name: 'DynamoDB', desc: 'Serverless NoSQL database for high-scale applications', level: 'Advanced' },
    ],
  },
];

const levelColors = {
  Expert: 'text-emerald-400 bg-emerald-400/10',
  Advanced: 'text-blue-400 bg-blue-400/10',
};

export default function Technologies() {
  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-mesh">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary-500/15 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-neon-purple/10 rounded-full blur-[150px]" />
        <div className="absolute inset-0 dot-pattern opacity-20" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-dark-300 font-medium mb-8">
              <span className="w-2 h-2 rounded-full bg-neon-blue animate-pulse" />
              Our Tech Stack
            </span>
          </AnimatedSection>
          <AnimatedSection delay={100}>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Technologies We <span className="gradient-text">Master</span>
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <p className="text-dark-400 text-lg md:text-xl max-w-3xl mx-auto">
              We stay at the forefront of technology to deliver modern, scalable, and high-performance solutions.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Tech Categories */}
      <section className="py-24 bg-dark-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {techStack.map((category, ci) => (
            <AnimatedSection key={category.category}>
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-3">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center`}>
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="font-display text-2xl md:text-3xl font-bold text-white">{category.category}</h2>
                    <p className="text-dark-400 text-sm">{category.desc}</p>
                  </div>
                </div>

                {/* Tech Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
                  {category.technologies.map((tech, ti) => (
                    <div
                      key={tech.name}
                      className="glass-card p-5 group cursor-default"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-display font-semibold text-white group-hover:text-primary-300 transition-colors">{tech.name}</h3>
                        <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${levelColors[tech.level]}`}>
                          {tech.level}
                        </span>
                      </div>
                      <p className="text-dark-400 text-sm leading-relaxed">{tech.desc}</p>
                    </div>
                  ))}
                </div>

                {ci < techStack.length - 1 && <div className="gradient-line mt-20" />}
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
              Need a Specific <span className="gradient-text">Technology?</span>
            </h2>
            <p className="text-dark-400 text-lg max-w-2xl mx-auto mb-10">
              Our expertise extends beyond this list. Let's discuss your tech requirements and find the perfect stack for your project.
            </p>
            <Link to="/contact" className="btn-primary text-lg px-10 py-4">
              <span>Discuss Your Requirements</span>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
