import image from './pngtree-web-programmer-avatar-png-image_12529205.png'

export default function About() {
  const team = [
    {
      name: 'Shoyeb Chaudhari',
      role: 'Co-Founder & Developer',
      image: `${image}`,
      bio: 'A coder specializing in Android development, PHP, SQL, Firebase, and web technologies, constantly striving to build innovative and impactful solutions.',
    },
    {
      name: 'Nachiket Shinde',
      role: 'Co-Founder & Developer',
      image: `${image}`,
      bio: 'hi',
    },
    {
      name: 'Afroz Sheikh',
      role: 'Co-Founder & Developer',
      image: `${image}`,
      bio: 'A passionate coder and beginner in machine learning, skilled in building innovative projects, from AI-powered platforms to React-based applications, driven by creativity and growth.',
    },
  ];

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">About Us</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We are a team of passionate technologists dedicated to solving complex problems through innovative solutions.
            Our mission is to empower businesses with cutting-edge technology solutions that drive growth and efficiency.
          </p>
        </div>
        <div className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {team.map((person) => (
            <div key={person.name} className="flex flex-col items-start">
              <img
                className=" w-full rounded-2xl object-cover"
                src={person.image}
                alt={person.name}
              />
              <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">{person.name}</h3>
              <p className="text-base leading-7 text-blue-600">{person.role}</p>
              <p className="mt-4 text-base leading-7 text-gray-600">{person.bio}</p>
            </div>
          ))}
        </div>
        
        <div className="mx-auto mt-20 max-w-2xl lg:mx-0">
          <h3 className="text-2xl font-bold tracking-tight text-gray-900">Our Vision</h3>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            To be the leading provider of innovative technology solutions that transform businesses and drive digital evolution.
            We strive to create lasting impact through our commitment to excellence and cutting-edge technology.
          </p>
        </div>
      </div>
    </div>
  );
}