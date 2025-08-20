// src/pages/About.jsx
import React from 'react';
import { FiTarget, FiEye, FiHeart, FiUsers, FiAward, FiGlobe, FiChevronRight } from 'react-icons/fi';
import { FaQuoteRight, FaHandshake, FaLightbulb, FaBook, FaComments } from 'react-icons/fa';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-green-50">
      {/* Hero Section with animated background */}
      <div className="relative py-32 overflow-hidden bg-gradient-to-r from-green-600 to-emerald-700 text-white">
        {/* Animated background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div 
              key={i}
              className="absolute rounded-full bg-white opacity-10 animate-pulse"
              style={{
                width: `${Math.random() * 200 + 50}px`,
                height: `${Math.random() * 200 + 50}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDuration: `${Math.random() * 10 + 10}s`,
                animationDelay: `${Math.random() * 5}s`
              }}
            ></div>
          ))}
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-down">
            Amplifying <span className="text-yellow-300">Youth Voices</span> for Positive Change
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-10 animate-fade-in-down delay-100">
            Empowering the next generation to create sustainable futures through innovation, education, and community engagement
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up delay-200">
            <button className="bg-white text-emerald-700 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition duration-300 flex items-center justify-center gap-2">
              Get Involved <FiChevronRight className="animate-bounce-x" />
            </button>
            <button className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-full hover:bg-white hover:bg-opacity-20 transition duration-300">
              Learn More
            </button>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent opacity-30"></div>
        
        {/* Scrolling animation indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-8 h-12 rounded-full border-2 border-white flex justify-center">
            <div className="w-2 h-2 bg-white rounded-full mt-2 animate-scroll-indicator"></div>
          </div>
        </div>
      </div>

      {/* Impact Statistics */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { number: "8+", label: "Years of Impact", icon: <FiAward className="text-2xl text-emerald-600" /> },
              { number: "50K+", label: "Youth Empowered", icon: <FiUsers className="text-2xl text-emerald-600" /> },
              { number: "25", label: "Communities", icon: <FiGlobe className="text-2xl text-emerald-600" /> },
              { number: "100+", label: "Active Volunteers", icon: <FaHandshake className="text-2xl text-emerald-600" /> },
            ].map((stat, index) => (
              <div 
                key={index} 
                className="bg-green-50 p-6 rounded-xl text-center border border-green-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex justify-center mb-4">{stat.icon}</div>
                <div className="text-4xl font-bold text-green-700 mb-2">{stat.number}</div>
                <div className="text-gray-700 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Purpose Section */}
      <section className="py-16 bg-gradient-to-br from-emerald-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Purpose & Journey</h2>
            <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600">
              Founded in 2015, SYV emerged from a simple observation: young people possess incredible potential that often goes untapped. 
              What began as a small mentorship initiative has grown into a global movement for youth empowerment.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Mission */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-green-100 transform hover:-translate-y-2 transition-transform duration-300">
              <div className="flex items-center mb-6">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <FiTarget className="text-2xl text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Our Mission</h2>
              </div>
              <p className="text-gray-600 mb-6">
                To equip young people with the skills, resources, and networks needed to become catalysts for positive change in their communities.
              </p>
              <ul className="space-y-3">
                {[
                  "Practical skills development programs",
                  "Inclusive community-building initiatives",
                  "Mental health and well-being support",
                  "Global citizenship education"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="bg-green-100 p-1 rounded-full mt-1 mr-3">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Vision */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-green-100 transform hover:-translate-y-2 transition-transform duration-300">
              <div className="flex items-center mb-6">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <FiEye className="text-2xl text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">Our Vision</h2>
              </div>
              <p className="text-gray-600 mb-6">
                A world where every young person has the agency to shape their future and contribute to sustainable development.
              </p>
              <div className="space-y-4">
                {[
                  "Establish 100 innovation hubs across developing regions",
                  "Mentor 1 million young leaders in sustainability",
                  "Bridge the digital divide for 500,000 underserved youth",
                  "Create a global network of youth change-makers"
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-green-600 text-white rounded-full h-6 w-6 flex items-center justify-center flex-shrink-0 mt-1 mr-4">
                      {index + 1}
                    </div>
                    <p className="text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Guiding Principles</h2>
            <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600">
              These core values shape everything we do and guide our journey toward empowering youth globally.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Youth-Centered",
                description: "We prioritize youth voices in all decision-making processes and program designs.",
                icon: <FiUsers className="text-2xl" />,
                color: "bg-green-100 text-green-800"
              },
              {
                title: "Innovation Driven",
                description: "We embrace creative solutions and technological advancement in our approaches.",
                icon: <FaLightbulb className="text-2xl" />,
                color: "bg-emerald-100 text-emerald-800"
              },
              {
                title: "Inclusive Excellence",
                description: "We actively break barriers to ensure equitable access for all young people.",
                icon: <FaHandshake className="text-2xl" />,
                color: "bg-teal-100 text-teal-800"
              },
              {
                title: "Sustainable Impact",
                description: "We design programs with long-term viability and environmental consciousness.",
                icon: <FiGlobe className="text-2xl" />,
                color: "bg-cyan-100 text-cyan-800"
              },
              {
                title: "Community Rooted",
                description: "We develop solutions that respect and respond to local contexts and needs.",
                icon: <FaComments className="text-2xl" />,
                color: "bg-sky-100 text-sky-800"
              },
              {
                title: "Integrity First",
                description: "We maintain transparency and accountability in all our operations.",
                icon: <FaBook className="text-2xl" />,
                color: "bg-blue-100 text-blue-800"
              }
            ].map((value, index) => (
              <div 
                key={index} 
                className={`p-6 rounded-2xl shadow-sm border transition-all duration-300 hover:shadow-md ${value.color}`}
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-full bg-white bg-opacity-50 mr-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold">{value.title}</h3>
                </div>
                <p className="text-gray-700">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Motto */}
      <section className="py-20 bg-gradient-to-br from-green-600 to-emerald-800 text-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-white"></div>
          <div className="absolute bottom-20 right-20 w-60 h-60 rounded-full bg-white"></div>
          <div className="absolute top-1/3 right-1/4 w-24 h-24 rounded-full bg-white"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <FiHeart className="mx-auto text-5xl mb-6 text-yellow-300" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Guiding Motto</h2>
          
          <div className="max-w-3xl mx-auto">
            <blockquote className="text-3xl md:text-4xl font-light italic mb-10 leading-tight">
              "Empowered youth today, thriving world tomorrow"
            </blockquote>
            
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto border border-white border-opacity-20">
              <h3 className="text-2xl font-semibold mb-4">What This Means</h3>
              <p className="text-lg mb-6">
                This motto reflects our core belief that investing in young people is the most effective strategy for creating sustainable change.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  {
                    title: "Holistic Development",
                    description: "Nurturing mind, character, and capabilities",
                    icon: <FiUsers className="text-xl" />
                  },
                  {
                    title: "Intergenerational Impact",
                    description: "Today's youth shape tomorrow's legacy",
                    icon: <FaQuoteRight className="text-xl" />
                  },
                  {
                    title: "Sustainable Transformation",
                    description: "Creating lasting change through empowerment",
                    icon: <FiGlobe className="text-xl" />
                  }
                ].map((item, index) => (
                  <div 
                    key={index} 
                    className="bg-white bg-opacity-10 p-4 rounded-xl border border-white border-opacity-10"
                  >
                    <div className="flex items-center mb-2">
                      <div className="mr-2">{item.icon}</div>
                      <div className="font-bold">{item.title}</div>
                    </div>
                    <p className="text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-gradient-to-b from-emerald-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Youth Success Stories</h2>
            <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600">
              Discover how our programs have transformed the lives of young people across communities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[1, 2, 3].map((item) => (
              <div 
                key={item} 
                className="bg-white rounded-xl shadow-md overflow-hidden border border-green-100 transform hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="h-48 bg-gradient-to-r from-green-500 to-emerald-700 relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                  <div className="absolute top-4 left-4 bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    Success Story
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Transforming Lives Through Education</h3>
                  <p className="text-gray-600 mb-4">
                    How Maria went from school dropout to community leader through our digital literacy program...
                  </p>
                  <button className="text-green-600 hover:text-green-800 font-medium flex items-center transition-colors">
                    Read Full Story
                    <FiChevronRight className="ml-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">Join Our Movement Today</h3>
          
          <div className="max-w-2xl mx-auto">
            <p className="text-xl text-green-100 mb-10">
              Whether you're a young person seeking opportunities or an organization wanting to collaborate, 
              help us empower the next generation of leaders.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <button className="bg-white text-emerald-700 font-bold py-4 px-10 rounded-full hover:bg-gray-100 transition duration-300 flex items-center justify-center gap-2 shadow-lg">
                Become a Volunteer <FiChevronRight />
              </button>
              
              <button className="bg-emerald-800 border-2 border-emerald-700 text-white font-bold py-4 px-10 rounded-full hover:bg-emerald-900 transition duration-300 shadow-lg">
                Make a Donation
              </button>
            </div>
            
            <div className="mt-10 flex flex-wrap justify-center gap-6">
              {[
                { label: "Partner With Us", icon: <FaHandshake className="text-xl" /> },
                { label: "Start a Chapter", icon: <FiUsers className="text-xl" /> },
                { label: "Share Your Story", icon: <FaComments className="text-xl" /> }
              ].map((item, index) => (
                <button 
                  key={index}
                  className="flex items-center gap-2 text-green-200 hover:text-white transition-colors"
                >
                  {item.icon}
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;