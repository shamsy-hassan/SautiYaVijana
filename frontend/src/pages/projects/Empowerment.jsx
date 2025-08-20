// src/pages/projects/Empowerment.jsx
import React, { useState } from 'react';
import { FaLightbulb, FaUsers, FaSeedling, FaHandshake, FaChartLine, FaBookOpen } from 'react-icons/fa';
import { motion } from 'framer-motion';
const Empowerment = () => {
  const [activeTab, setActiveTab] = useState('mentorship');
  const [showBrochure, setShowBrochure] = useState(false);

  const successStories = [
    {
      id: 1,
      name: "Fatuma Ali",
      project: "Riverbank Organic Farming",
      quote: "The seed funding helped me start my organic vegetable garden that now supplies local hotels.",
      image: "profile1.jpg"
    },
    {
      id: 2,
      name: "Ahmed Mohammed",
      project: "Tana River Eco-Tours",
      quote: "The mentorship program guided me in creating sustainable tourism experiences that showcase our beautiful delta.",
      image: "profile2.jpg"
    },
    {
      id: 3,
      name: "Grace Mwende",
      project: "Traditional Basket Weaving Collective",
      quote: "Our women's group now exports baskets internationally, preserving our cultural heritage while earning income.",
      image: "profile3.jpg"
    }
  ];

  const downloadBrochure = () => {
    // Simulate download
    setShowBrochure(true);
    setTimeout(() => setShowBrochure(false), 3000);
  };

  return (
    <motion.div
                  initial={{ opacity: 0, y: 20 }}       // Start invisible and slightly below
                  animate={{ opacity: 1, y: 0 }}        // End visible and in position
                  transition={{ duration: 1 }}          // Animation duration = 1 second
                >
            
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-amber-50">
      {/* Hero Section */}
      <div className="relative h-[60vh] bg-gradient-to-r from-green-700 to-emerald-800">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1560264280-88b68371db39?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center opacity-30"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 py-24 flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Empowering Tana River Youth
          </h1>
          <p className="text-xl text-green-100 max-w-3xl">
            Cultivating leadership, innovation, and sustainable development in the heart of Kenya's river delta
          </p>
          <button 
            onClick={downloadBrochure}
            className="mt-10 px-8 py-4 bg-amber-400 hover:bg-amber-500 text-green-900 font-bold rounded-lg transition duration-300 shadow-lg transform hover:scale-105"
          >
            Download Our Empowerment Brochure
          </button>
          
          {showBrochure && (
            <div className="mt-4 p-4 bg-green-100 text-green-800 rounded-lg animate-pulse">
              Brochure download started! Check your downloads folder.
            </div>
          )}
        </div>
      </div>

      {/* Introduction */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-green-800 mb-6">
              Our Vision for Tana River
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Through mentorship, workshops, and seed funding, we equip youth with the confidence and skills to launch community initiatives and social enterprises that celebrate our unique heritage while building a sustainable future.
            </p>
            <p className="text-lg text-gray-700">
              Tana River is home to diverse communities with rich cultural traditions, abundant natural resources, and resilient people. Our empowerment programs focus on harnessing these strengths to create opportunities that benefit both people and the environment.
            </p>
          </div>
          <div className="md:w-1/2">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-green-200 rounded-xl p-6 flex flex-col items-center justify-center text-center h-48">
                <FaUsers className="text-4xl text-green-700 mb-3" />
                <h3 className="font-bold text-green-800">12,000+</h3>
                <p className="text-green-700">Youth Empowered</p>
              </div>
              <div className="bg-amber-100 rounded-xl p-6 flex flex-col items-center justify-center text-center h-48">
                <FaSeedling className="text-4xl text-amber-600 mb-3" />
                <h3 className="font-bold text-amber-800">240+</h3>
                <p className="text-amber-700">Projects Funded</p>
              </div>
              <div className="bg-emerald-100 rounded-xl p-6 flex flex-col items-center justify-center text-center h-48">
                <FaChartLine className="text-4xl text-emerald-600 mb-3" />
                <h3 className="font-bold text-emerald-800">85%</h3>
                <p className="text-emerald-700">Success Rate</p>
              </div>
              <div className="bg-teal-100 rounded-xl p-6 flex flex-col items-center justify-center text-center h-48">
                <FaHandshake className="text-4xl text-teal-600 mb-3" />
                <h3 className="font-bold text-teal-800">36</h3>
                <p className="text-teal-700">Community Partners</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Program Tabs */}
      <div className="bg-green-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-green-800 text-center mb-12">
            Our Empowerment Programs
          </h2>
          
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {[
              { id: 'mentorship', label: 'Mentorship', icon: <FaUsers /> },
              { id: 'workshops', label: 'Workshops', icon: <FaBookOpen /> },
              { id: 'funding', label: 'Seed Funding', icon: <FaSeedling /> },
              { id: 'incubation', label: 'Incubation', icon: <FaLightbulb /> }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-full flex items-center gap-2 transition-all ${
                  activeTab === tab.id 
                    ? 'bg-green-700 text-white shadow-lg' 
                    : 'bg-white text-green-700 hover:bg-green-100'
                }`}
              >
                <span>{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="p-8">
              {activeTab === 'mentorship' && (
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/2">
                    <h3 className="text-2xl font-bold text-green-800 mb-4">Community Mentorship</h3>
                    <p className="text-gray-700 mb-4">
                      Our mentorship program connects youth with experienced community leaders, entrepreneurs, and professionals who provide guidance, support, and industry insights.
                    </p>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">✓</span>
                        <span>One-on-one mentorship matching based on interests and goals</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">✓</span>
                        <span>Monthly community mentorship circles</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">✓</span>
                        <span>Access to our network of 200+ mentors across Kenya</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">✓</span>
                        <span>Career guidance and professional development</span>
                      </li>
                    </ul>
                    <button className="px-6 py-2 bg-green-700 text-white rounded-lg hover:bg-green-800 transition">
                      Apply for Mentorship
                    </button>
                  </div>
                  <div className="md:w-1/2">
                    <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-64 md:h-80" />
                  </div>
                </div>
              )}

              {activeTab === 'workshops' && (
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/2">
                    <h3 className="text-2xl font-bold text-green-800 mb-4">Skills Development Workshops</h3>
                    <p className="text-gray-700 mb-4">
                      Practical, hands-on workshops designed to equip youth with skills relevant to Tana River's unique economic opportunities and cultural heritage.
                    </p>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      {['Sustainable Agriculture', 'Eco-Tourism', 'Digital Skills', 'Traditional Crafts', 'Renewable Energy', 'Business Management'].map((skill) => (
                        <div key={skill} className="bg-green-100 px-4 py-3 rounded-lg">
                          {skill}
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center gap-4">
                      <button className="px-6 py-2 bg-amber-500 text-green-900 rounded-lg hover:bg-amber-600 transition">
                        View Workshop Calendar
                      </button>
                      <button className="px-6 py-2 border border-green-700 text-green-700 rounded-lg hover:bg-green-50 transition">
                        Request a Workshop
                      </button>
                    </div>
                  </div>
                  <div className="md:w-1/2">
                    <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-64 md:h-80" />
                  </div>
                </div>
              )}

              {/* Other tabs would have similar structures */}
            </div>
          </div>
        </div>
      </div>

      {/* Success Stories */}
      <div className="py-16 bg-gradient-to-br from-amber-50 to-green-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-green-800 text-center mb-4">
            Transforming Dreams into Reality
          </h2>
          <p className="text-lg text-gray-700 text-center mb-12 max-w-3xl mx-auto">
            Discover how our empowerment initiatives have created lasting change in the lives of Tana River youth
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map(story => (
              <div key={story.id} className="bg-white rounded-xl shadow-lg overflow-hidden transform transition hover:scale-[1.02]">
                <div className="h-48 bg-gray-200 border-2 border-dashed"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-green-800 mb-2">{story.name}</h3>
                  <p className="text-amber-600 font-medium mb-3">{story.project}</p>
                  <p className="text-gray-700 italic mb-4">"{story.quote}"</p>
                  <button className="text-green-700 font-medium hover:text-green-900 transition">
                    Read Full Story →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Cultural Showcase */}
      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="md:w-1/2">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-96"></div>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-green-800 mb-6">
                Celebrating Tana River Heritage
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Our empowerment programs integrate and celebrate the rich cultural heritage of Tana River communities. We support initiatives that preserve traditional knowledge while creating modern economic opportunities.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {['Traditional Crafts', 'River Delta Cuisine', 'Indigenous Farming', 'Cultural Tourism'].map((item) => (
                  <div key={item} className="bg-green-50 px-4 py-3 rounded-lg border border-green-100">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-16 bg-gradient-to-r from-green-700 to-emerald-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Join the Tana River Empowerment Movement
          </h2>
          <p className="text-xl text-green-100 mb-10">
            Whether you're a youth seeking opportunities, a mentor wanting to give back, or a supporter of sustainable development, we welcome you to be part of our journey.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-8 py-3 bg-amber-400 hover:bg-amber-500 text-green-900 font-bold rounded-lg transition shadow-lg">
              Apply for Programs
            </button>
            <button className="px-8 py-3 bg-transparent border-2 border-white text-white hover:bg-white hover:text-green-800 font-bold rounded-lg transition">
              Become a Mentor
            </button>
            <button className="px-8 py-3 bg-green-900 hover:bg-green-950 text-white font-bold rounded-lg transition">
              Support Our Work
            </button>
          </div>
        </div>
      </div>
    </div>
    </motion.div>
  );
};

export default Empowerment;