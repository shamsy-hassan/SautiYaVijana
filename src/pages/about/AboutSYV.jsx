// src/pages/About.jsx
import React from 'react';
import { FiTarget, FiEye, FiHeart, FiUsers, FiAward, FiGlobe } from 'react-icons/fi';
import { motion } from 'framer-motion';
import image1 from '../../assets/4024304.jpg';


const AboutSYV = () => {
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
          <h1 className="text-4xl md:text-6xl font-bold mb-4">About SYV</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Empowering youth to create sustainable futures through innovation, education, and community engagement
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-white opacity-20"></div>
      </div>

      {/* Background Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-8">
              <FiGlobe className="text-3xl text-green-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-800">Our Background</h2>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-4">
                Founded in 2015, SYV (Shaping Youth Vision) emerged from a simple observation: young people possess incredible potential that often goes untapped due to lack of resources and guidance. What began as a small mentorship initiative in a community center has grown into a global movement.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10">
                <div className="bg-green-50 p-6 rounded-xl text-center">
                  <div className="text-5xl font-bold text-green-600 mb-2">8+</div>
                  <div className="text-gray-700">Years of Impact</div>
                </div>
                <div className="bg-green-50 p-6 rounded-xl text-center">
                  <div className="text-5xl font-bold text-green-600 mb-2">50K+</div>
                  <div className="text-gray-700">Youth Empowered</div>
                </div>
                <div className="bg-green-50 p-6 rounded-xl text-center">
                  <div className="text-5xl font-bold text-green-600 mb-2">12</div>
                  <div className="text-gray-700">Countries Reached</div>
                </div>
              </div>
              
              <p className="text-gray-600">
                Our journey has been marked by innovative programs that bridge the gap between education and real-world application. From digital skills workshops to environmental leadership programs, we've consistently evolved to meet the changing needs of youth in a rapidly transforming world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 bg-emerald-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Mission */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-6">
                <FiTarget className="text-3xl text-green-600 mr-4" />
                <h2 className="text-3xl font-bold text-gray-800">Our Mission</h2>
              </div>
              <p className="text-gray-600 text-lg">
                To equip young people with the skills, resources, and networks needed to become catalysts for positive change in their communities. We create pathways to opportunity through:
              </p>
              <ul className="mt-6 space-y-3">
                <li className="flex items-start">
                  <div className="bg-green-100 p-1 rounded-full mt-1 mr-3">
                    <FiAward className="text-green-600" />
                  </div>
                  <span className="text-gray-700">Practical skills development programs</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 p-1 rounded-full mt-1 mr-3">
                    <FiUsers className="text-green-600" />
                  </div>
                  <span className="text-gray-700">Inclusive community-building initiatives</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 p-1 rounded-full mt-1 mr-3">
                    <FiHeart className="text-green-600" />
                  </div>
                  <span className="text-gray-700">Mental health and well-being support</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 p-1 rounded-full mt-1 mr-3">
                    <FiGlobe className="text-green-600" />
                  </div>
                  <span className="text-gray-700">Global citizenship education</span>
                </li>
              </ul>
            </div>

            {/* Vision */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-6">
                <FiEye className="text-3xl text-green-600 mr-4" />
                <h2 className="text-3xl font-bold text-gray-800">Our Vision</h2>
              </div>
              <p className="text-gray-600 text-lg">
                We envision a world where every young person has the agency to shape their future and contribute to sustainable development. By 2030, we aim to:
              </p>
              <div className="mt-6 space-y-4">
                <div className="flex">
                  <div className="bg-green-600 text-white rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0 mr-4">1</div>
                  <p className="text-gray-700">Establish 100 innovation hubs across developing regions</p>
                </div>
                <div className="flex">
                  <div className="bg-green-600 text-white rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0 mr-4">2</div>
                  <p className="text-gray-700">Mentor 1 million young leaders in sustainability practices</p>
                </div>
                <div className="flex">
                  <div className="bg-green-600 text-white rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0 mr-4">3</div>
                  <p className="text-gray-700">Bridge the digital divide for 500,000 underserved youth</p>
                </div>
                <div className="flex">
                  <div className="bg-green-600 text-white rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0 mr-4">4</div>
                  <p className="text-gray-700">Create a global network of youth change-makers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Motto Section */}
      <section className="py-16 bg-gradient-to-br from-green-500 to-emerald-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <FiHeart className="mx-auto text-5xl mb-6" />
          <h2 className="text-4xl font-bold mb-6">Our Guiding Motto</h2>
          
          <div className="max-w-3xl mx-auto">
            <blockquote className="text-3xl md:text-4xl font-light italic mb-10 leading-tight">
              "Empowered youth today, thriving world tomorrow"
            </blockquote>
            
            <div className="bg-blue bg-opacity-20 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-semibold mb-4">What This Means</h3>
              <p className="text-lg mb-4">
                This motto reflects our core belief that investing in young people is the most effective strategy for creating sustainable change. We focus on:
              </p>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
  <div className="bg-white bg-opacity-10 p-4 rounded-xl overflow-hidden">
    <img
      src={image1}
      alt="Holistic Development"
      className="w-full h-64 object-cover rounded-lg"
    />
  </div>
  <div className="bg-white bg-opacity-10 p-4 rounded-xl overflow-hidden">
    <img
      src={image1}
      alt="Intergenerational Impact"
      className="w-full h-64 object-cover rounded-lg"
    />
  </div>
  <div className="bg-white bg-opacity-10 p-4 rounded-xl overflow-hidden">
    <img
      src={image1}
      alt="Sustainable Transformation"
      className="w-full h-64 object-cover rounded-lg"
    />
  </div>
</div>

            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">Our Core Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Youth-Centered",
                description: "We prioritize youth voices in all decision-making processes and program designs.",
                color: "bg-green-100"
              },
              {
                title: "Innovation Driven",
                description: "We embrace creative solutions and technological advancement in our approaches.",
                color: "bg-emerald-100"
              },
              {
                title: "Inclusive Excellence",
                description: "We actively break barriers to ensure equitable access for all young people.",
                color: "bg-teal-100"
              },
              {
                title: "Sustainable Impact",
                description: "We design programs with long-term viability and environmental consciousness.",
                color: "bg-cyan-100"
              },
              {
                title: "Community Rooted",
                description: "We develop solutions that respect and respond to local contexts and needs.",
                color: "bg-sky-100"
              },
              {
                title: "Integrity First",
                description: "We maintain transparency and accountability in all our operations.",
                color: "bg-blue-100"
              }
            ].map((value, index) => (
              <div 
                key={index} 
                className={`p-6 rounded-2xl shadow-md ${value.color} transition-transform hover:scale-105`}
              >
                <div className="text-2xl font-bold text-gray-800 mb-3">{value.title}</div>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-gradient-to-r from-green-500 to-emerald-700">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold text-white mb-6">Join Our Movement</h3>
          <div className="max-w-2xl mx-auto">
            <p className="text-xl text-green-100 mb-8">
              Whether you're a young person seeking opportunities or an organization wanting to collaborate, help us empower the next generation.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-white text-emerald-700 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition duration-300">
                Get Involved
              </button>
              <button className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-full hover:bg-white hover:bg-opacity-20 transition duration-300">
                Donate
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
    </motion.div>
  );
};

export default AboutSYV;