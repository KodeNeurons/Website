import { Brain, Code, Database, Layers, CheckCircle, Coffee, Trophy } from 'lucide-react';
import { Link } from "react-router-dom";

const features = [
  {
    name: 'Custom Project Solutions',
    description: 'Get professional help with your projects in AI, web development, mobile apps, and more - perfect for students and organizations.',
    icon: CheckCircle,
  },
  {
    name: 'Competitive Pricing',
    description: 'High-quality projects at budget-friendly prices. Get the best value for your investment.',
    icon: Coffee,
  },
  {
    name: 'Latest Technologies',
    description: 'Implement cutting-edge technologies like AI, Machine Learning, and Full Stack Development in your projects.',
    icon: Code,
  },
  {
    name: 'Excellence Guaranteed',
    description: 'Deliver impressive results with our professionally crafted solutions that meet your specific requirements.',
    icon: Trophy,
  },
];

const technologies = [
  'AI/ML Projects',
  'Android Apps',
  'Web Development',
  'React Projects',
  'Java Projects',
  'Python Projects',
  'Database Projects',
  'IoT Projects',
  'Full Stack Projects',
  'Enterprise Solutions',
  'Custom Software',
  'Research Projects'
];

export default function Home() {
  return (
    <div className="bg-white">
      <div className="relative isolate">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="text-center">
            <h1 className="font-bold tracking-tight text-gray-900 text-5xl">
              Professional Projects at Affordable Prices
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Looking for custom project development? We create professional solutions 
              in AI, Web Development, Mobile Apps, and more - all at competitive prices!
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                to="/contact"
                className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                Book Your Project
              </Link>
              <Link to="/projects" className="text-sm font-semibold leading-6 text-gray-900">
                View Our Projects <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">Why Choose Us?</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Your Trusted Technology Partner
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We understand your needs and deliver projects that meet your requirements while being cost-effective.
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
          <h3 className="text-2xl font-semibold text-center mb-8">Solutions We Offer</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-gray-100 rounded-full text-gray-700 font-medium hover:bg-blue-100 cursor-pointer"
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