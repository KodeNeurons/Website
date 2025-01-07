import { Brain, Code, Database, Layers } from 'lucide-react';

const features = [
  {
    name: 'Multi-Domain Expertise',
    description: 'Comprehensive solutions across various technology domains.',
    icon: Layers,
  },
  {
    name: 'AI Solutions',
    description: 'Cutting-edge artificial intelligence and machine learning implementations.',
    icon: Brain,
  },
  {
    name: 'Development Services',
    description: 'Full-stack development with modern technologies.',
    icon: Code,
  },
  {
    name: 'Data Science',
    description: 'Advanced analytics and data-driven insights.',
    icon: Database,
  },
];

const technologies = [
  'AI',
  'Android',
  'Java',
  'JavaScript',
  'Machine Learning',
  'Node.js',
  'PHP',
  'PyTorch',
  'React-JS',
  'React-Native',
  'SQL',
  'No-SQL',
  '.Net'
];


export default function Home() {
  return (
    <div className="bg-white">
      <div className="relative isolate">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Innovating Across Domains: Your Gateway to Technology Solutions
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We leverage cutting-edge technologies to deliver innovative solutions across artificial intelligence,
              machine learning, data science, and software development.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/contact"
                className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                Get started
              </a>
              <a href="/projects" className="text-sm font-semibold leading-6 text-gray-900">
                View projects <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">Our Expertise</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to build amazing products
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <feature.icon className="h-5 w-5 flex-none text-blue-600" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="mt-20 mb-20">
          <h3 className="text-2xl font-semibold text-center mb-8">Technologies We Use</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-gray-100 rounded-full text-gray-700 font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}