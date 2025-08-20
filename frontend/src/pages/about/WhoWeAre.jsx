// src/pages/WhoWeAre.jsx
import React from 'react';
import { FiAward, FiGlobe, FiHeart, FiUsers, FiStar, FiTarget, FiTrendingUp } from 'react-icons/fi';
import { motion } from 'framer-motion';
const WhoWeAre = () => {
  const teamMembers = [
    {
      name: "Alex Morgan",
      role: "Founder & Executive Director",
      bio: "Social entrepreneur with 15+ years in youth development",
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1376&q=80"
    },
    {
      name: "Jamal Williams",
      role: "Program Director",
      bio: "Former educator passionate about skills development",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1374&q=80"
    },
    {
      name: "Priya Sharma",
      role: "Partnership Coordinator",
      bio: "Youth advocate with global network experience",
      img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1376&q=80"
    },
    {
      name: "Marcus Chen",
      role: "Tech Innovation Lead",
      bio: "Developer creating accessible learning platforms",
      img: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1370&q=80"
    }
  ];

  const youthCharacteristics = [
    { 
      title: "Digital Natives", 
      description: "Youth today are the first generation to grow up fully immersed in digital technology, shaping how they communicate, learn, and interact with the world.",
      icon: <FiGlobe className="w-6 h-6 text-green-600" />
    },
    { 
      title: "Change Agents", 
      description: "Young people are driving social movements, innovating solutions to global challenges, and redefining traditional systems.",
      icon: <FiTrendingUp className="w-6 h-6 text-green-600" />
    },
    { 
      title: "Global Citizens", 
      description: "With unprecedented access to global information networks, youth today have a borderless perspective on world issues.",
      icon: <FiUsers className="w-6 h-6 text-green-600" />
    },
    { 
      title: "Values-Driven", 
      description: "Modern youth prioritize purpose over profit, seeking meaningful work that aligns with their values and makes a positive impact.",
      icon: <FiHeart className="w-6 h-6 text-green-600" />
    }
  ];

  return (
<motion.div
      initial={{ opacity: 0, y: 20 }}       // Start invisible and slightly below
      animate={{ opacity: 1, y: 0 }}        // End visible and in position
      transition={{ duration: 1 }}          // Animation duration = 1 second
    >

    <div className="min-h-screen bg-gradient-to-b from-white to-green-50">
      {/* Hero Section */}
      <div className="relative py-20 bg-gradient-to-r from-green-500 to-emerald-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Who We Are</h1>
          <p className="text-xl max-w-3xl mx-auto">
            A global movement empowering youth to become architects of their future
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-white opacity-20"></div>
      </div>

      {/* Identity Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-10 mb-16">
              <div className="md:w-1/2">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-80" />
              </div>
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Identity</h2>
                <p className="text-lg text-gray-600 mb-4">
                  SYV (Shaping Youth Vision) is a youth-led, youth-serving organization founded in 2015. We're not just another NGO - we're a dynamic community of changemakers, innovators, and dreamers who believe in the transformative power of young people.
                </p>
                <p className="text-lg text-gray-600">
                  Our name reflects our core belief: when you shape a young person's vision, you shape the future of our world. We create spaces where youth can discover their potential, develop critical skills, and drive meaningful change.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <div className="bg-green-50 p-8 rounded-2xl">
                <div className="flex items-center mb-4">
                  <FiTarget className="text-3xl text-green-600 mr-4" />
                  <h3 className="text-2xl font-bold text-gray-800">Our Purpose</h3>
                </div>
                <p className="text-gray-600">
                  To dismantle barriers that prevent young people from reaching their full potential. We equip youth with the tools, networks, and confidence to become leaders in their communities and architects of sustainable futures.
                </p>
              </div>
              
              <div className="bg-emerald-50 p-8 rounded-2xl">
                <div className="flex items-center mb-4">
                  <FiStar className="text-3xl text-emerald-600 mr-4" />
                  <h3 className="text-2xl font-bold text-gray-800">Our Distinction</h3>
                </div>
                <p className="text-gray-600">
                  What sets us apart is our youth-centered approach. 75% of our leadership team is under 30, ensuring our programs remain relevant and responsive to the evolving needs of young people in a rapidly changing world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Understanding Youth Section */}
      <section className="py-16 bg-gradient-to-br from-green-100 to-emerald-100">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Understanding Today's Youth</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We recognize that youth are not a monolithic group, but a diverse generation with unique characteristics, challenges, and opportunities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {youthCharacteristics.map((characteristic, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-xl shadow-md flex items-start"
              >
                <div className="bg-green-100 p-3 rounded-full mr-4 flex-shrink-0">
                  {characteristic.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{characteristic.title}</h3>
                  <p className="text-gray-600">{characteristic.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-white rounded-2xl shadow-lg overflow-hidden max-w-5xl mx-auto">
            <div className="md:flex">
              <div className="md:w-1/2 p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Youth Challenges</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="bg-red-100 text-red-600 rounded-full h-6 w-6 flex items-center justify-center flex-shrink-0 mr-3">1</div>
                    <span className="text-gray-700">Economic uncertainty and job market transitions</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-red-100 text-red-600 rounded-full h-6 w-6 flex items-center justify-center flex-shrink-0 mr-3">2</div>
                    <span className="text-gray-700">Mental health pressures amplified by digital culture</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-red-100 text-red-600 rounded-full h-6 w-6 flex items-center justify-center flex-shrink-0 mr-3">3</div>
                    <span className="text-gray-700">Educational systems not aligned with future skills needs</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-red-100 text-red-600 rounded-full h-6 w-6 flex items-center justify-center flex-shrink-0 mr-3">4</div>
                    <span className="text-gray-700">Climate anxiety and environmental concerns</span>
                  </li>
                </ul>
              </div>
              <div className="md:w-1/2 p-8 bg-green-50">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Youth Opportunities</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="bg-green-100 text-green-600 rounded-full h-6 w-6 flex items-center justify-center flex-shrink-0 mr-3">A</div>
                    <span className="text-gray-700">Digital fluency enabling global entrepreneurship</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-green-100 text-green-600 rounded-full h-6 w-6 flex items-center justify-center flex-shrink-0 mr-3">B</div>
                    <span className="text-gray-700">Increased awareness and commitment to social justice</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-green-100 text-green-600 rounded-full h-6 w-6 flex items-center justify-center flex-shrink-0 mr-3">C</div>
                    <span className="text-gray-700">Collaborative networks transcending geographical boundaries</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-green-100 text-green-600 rounded-full h-6 w-6 flex items-center justify-center flex-shrink-0 mr-3">D</div>
                    <span className="text-gray-700">Innovative mindset to solve complex global challenges</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A diverse group of passionate professionals and youth leaders driving our mission forward
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
                <div className="h-60 overflow-hidden">
                  <div className="bg-gray-200 border-2 border-dashed w-full h-full" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
                  <p className="text-green-600 font-medium mb-2">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-2xl p-8 max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-shrink-0">
                <div className="bg-white bg-opacity-20 rounded-full p-4">
                  <FiUsers className="w-12 h-12" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">Youth Leadership Council</h3>
                <p className="mb-4">
                  Our work is guided by a council of 12 young leaders (ages 16-24) from diverse backgrounds who ensure our programs remain relevant and impactful. They represent the voice of youth in all strategic decisions.
                </p>
                <button className="bg-white text-emerald-700 font-bold py-2 px-6 rounded-full hover:bg-gray-100 transition duration-300">
                  Meet the Council
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Youth Voices Section */}
      <section className="py-16 bg-emerald-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">In Their Own Words</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              What youth say about their experiences and aspirations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                quote: "SYV gave me the confidence to start my own social enterprise. I went from feeling powerless to leading a team of 10 young people in my community.",
                author: "Fatima, 22",
                location: "Kenya"
              },
              {
                quote: "The digital skills I learned opened doors I didn't know existed. I went from unemployed to working remotely for an international tech company in six months.",
                author: "Carlos, 19",
                location: "Mexico"
              },
              {
                quote: "Being part of this community helped me find my voice on climate issues. I've organized three clean-up campaigns and spoken at city council meetings.",
                author: "Aisha, 17",
                location: "USA"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                <div className="text-yellow-400 flex mb-4">
                  <FiStar className="w-5 h-5" />
                  <FiStar className="w-5 h-5" />
                  <FiStar className="w-5 h-5" />
                  <FiStar className="w-5 h-5" />
                  <FiStar className="w-5 h-5" />
                </div>
                <p className="text-gray-700 italic mb-6">"{testimonial.quote}"</p>
                <div className="text-gray-800 font-semibold">{testimonial.author}</div>
                <div className="text-gray-600 text-sm">{testimonial.location}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Global Reach */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Global Reach</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Connecting youth across borders to create a worldwide movement
            </p>
          </div>

          <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-96 mb-12" />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center p-4">
              <div className="text-4xl font-bold text-green-600 mb-2">12</div>
              <div className="text-gray-700">Countries</div>
            </div>
            <div className="text-center p-4">
              <div className="text-4xl font-bold text-green-600 mb-2">50K+</div>
              <div className="text-gray-700">Youth Reached</div>
            </div>
            <div className="text-center p-4">
              <div className="text-4xl font-bold text-green-600 mb-2">120</div>
              <div className="text-gray-700">Local Partners</div>
            </div>
            <div className="text-center p-4">
              <div className="text-4xl font-bold text-green-600 mb-2">85%</div>
              <div className="text-gray-700">Program Alumni Success</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-500 to-emerald-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Movement</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Whether you're a young person seeking opportunities or an organization wanting to collaborate, help us empower the next generation.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-emerald-700 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition duration-300">
              Get Involved
            </button>
            <button className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-full hover:bg-white hover:bg-opacity-20 transition duration-300">
              Partner With Us
            </button>
          </div>
        </div>
      </section>
    </div>
    </motion.div>
  );
};

export default WhoWeAre;