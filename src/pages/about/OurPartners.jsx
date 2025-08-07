// src/pages/about/OurPartners.jsx
import React from 'react';
import { motion } from 'framer-motion';

const OurPartners = () => {
  const partners = [
    { 
      name: 'Restless Dev', 
      type: 'Tech Partner', 
      description: 'Leading software development collective specializing in social impact solutions.',
      impact: '200+ youth trained in tech skills'
    },
    { 
      name: 'DoSomething', 
      type: 'NGO Partner', 
      description: 'Global youth movement creating positive social change through collective action.',
      impact: '10 community projects implemented'
    },
    { 
      name: 'Plan Int’l', 
      type: 'Global NGO', 
      description: 'Advancing children\'s rights and equality for girls worldwide.',
      impact: 'Education access for 5,000+ girls'
    },
    { 
      name: 'Local County Govts', 
      type: 'Government', 
      description: 'Collaborating on policy frameworks for youth empowerment and tech adoption.',
      impact: '3 counties implementing our programs'
    },
    { 
      name: 'Tech Hubs', 
      type: 'Innovation Partner', 
      description: 'Network of innovation centers providing infrastructure and mentorship.',
      impact: '15 startups incubated'
    },
    { 
      name: 'Youth Empowerment Alliance', 
      type: 'Coalition Partner', 
      description: 'Network of youth organizations across Africa promoting digital literacy.',
      impact: '50,000+ youth reached'
    }
  ];

  return (
<motion.div
      initial={{ opacity: 0, y: 20 }}       // Start invisible and slightly below
      animate={{ opacity: 1, y: 0 }}        // End visible and in position
      transition={{ duration: 1 }}          // Animation duration = 1 second
    >

    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Tana River–inspired Header Section */}
      <div 
        className="w-full h-72 bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Tana_River_County.svg/1200px-Tana_River_County.svg.png')" }}
      >
        <div className="bg-green-700 bg-opacity-60 w-full h-full flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white text-center drop-shadow-lg">
            Partners Powering Youth Progress in Tana River
          </h1>
        </div>
      </div>

      <div className="py-12 px-4 sm:px-6 max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600 mb-4">
            Our Valued Partners
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
            In Tana River, meaningful partnerships are how we unlock opportunities for young people. Together with local and global allies, we’re transforming dreams into real impact.
          </p>
          
          <div className="relative inline-block group">
            <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition-all duration-300"></div>
            <div className="relative px-8 py-3 bg-white rounded-lg text-lg font-medium text-gray-800 shadow-lg">
              Stronger Together
            </div>
          </div>
        </div>

        {/* Partnership Impact Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-green-100 transform transition hover:scale-105">
            <div className="text-4xl font-bold text-green-600 mb-2">50+</div>
            <div className="text-gray-700">Active Partnerships</div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100 transform transition hover:scale-105">
            <div className="text-4xl font-bold text-blue-600 mb-2">120K</div>
            <div className="text-gray-700">Youth Impacted</div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-green-100 transform transition hover:scale-105">
            <div className="text-4xl font-bold text-green-600 mb-2">$3.5M</div>
            <div className="text-gray-700">Collective Investment</div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100 transform transition hover:scale-105">
            <div className="text-4xl font-bold text-blue-600 mb-2">18</div>
            <div className="text-gray-700">Countries Reached</div>
          </div>
        </div>

        {/* Partnership Categories */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Our Partnership Ecosystem</h2>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="bg-gradient-to-br from-green-500 to-green-700 text-white px-8 py-4 rounded-full font-semibold shadow-lg">
              NGOs & Non-Profits
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-blue-700 text-white px-8 py-4 rounded-full font-semibold shadow-lg">
              Government Agencies
            </div>
            <div className="bg-gradient-to-br from-emerald-500 to-emerald-700 text-white px-8 py-4 rounded-full font-semibold shadow-lg">
              Educational Institutions
            </div>
            <div className="bg-gradient-to-br from-teal-500 to-teal-700 text-white px-8 py-4 rounded-full font-semibold shadow-lg">
              Tech Companies
            </div>
            <div className="bg-gradient-to-br from-cyan-500 to-cyan-700 text-white px-8 py-4 rounded-full font-semibold shadow-lg">
              Innovation Hubs
            </div>
          </div>
        </div>

        {/* Partners Grid */}
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Meet Our Partners</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {partners.map((partner, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl overflow-hidden shadow-xl transition-all duration-300 hover:shadow-2xl group"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-gradient-to-br from-green-500 to-blue-500 w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                    {partner.name.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-bold text-gray-800">{partner.name}</h3>
                    <span className="text-sm font-medium bg-green-100 text-green-800 px-2 py-1 rounded-full">
                      {partner.type}
                    </span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{partner.description}</p>
                <div className="flex items-center mt-4">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-green-700">{partner.impact}</span>
                </div>
              </div>
              <div className="bg-gradient-to-r from-green-50 to-blue-50 p-4 border-t border-gray-100">
                <div className="text-sm text-gray-600 flex justify-between">
                  <span>Partnership since: 202{index % 3}</span>
                  <span className="text-green-600 font-medium">Active</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Partnership Journey */}
        <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-3xl p-8 text-white mb-16">
          <h2 className="text-3xl font-bold mb-6">Our Partnership Journey</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-start">
              <div className="text-4xl font-bold mr-4">1</div>
              <div>
                <h3 className="text-xl font-bold mb-2">Identify</h3>
                <p>We seek organizations with aligned values and complementary expertise</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="text-4xl font-bold mr-4">2</div>
              <div>
                <h3 className="text-xl font-bold mb-2">Collaborate</h3>
                <p>We co-create programs that leverage our combined strengths</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="text-4xl font-bold mr-4">3</div>
              <div>
                <h3 className="text-xl font-bold mb-2">Amplify</h3>
                <p>We scale impact through shared resources and networks</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-white rounded-2xl p-8 shadow-xl border border-green-100">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Join Our Partnership Network</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Whether you're a grassroots champion or global player, your contribution can help elevate Tana River’s youth. Let’s collaborate for lasting change.
          </p>
          <button className="bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            Become a Partner
          </button>
        </div>
      </div>
    </div>
    </motion.div>
  );
};

export default OurPartners;
