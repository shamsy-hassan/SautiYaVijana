// src/pages/blog/SuccessStories.jsx
import React, { useState } from 'react';
import {
  FaSeedling,
  FaWater,
  FaUsers,
  FaChartLine,
  FaLightbulb,
  FaQuoteLeft,
  FaMapMarkerAlt,
  FaHeart,
  FaArrowRight,
  FaLeaf
} from 'react-icons/fa';
import { motion } from 'framer-motion';

const SuccessStories = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [expandedStory, setExpandedStory] = useState(null);

  const categories = [
    { id: 'all', name: 'All Stories' },
    { id: 'agriculture', name: 'Agriculture', icon: <FaSeedling /> },
    { id: 'water', name: 'Water Solutions', icon: <FaWater /> },
    { id: 'education', name: 'Education', icon: <FaUsers /> },
    { id: 'business', name: 'Business', icon: <FaChartLine /> },
    { id: 'innovation', name: 'Innovation', icon: <FaLightbulb /> },
  ];

  const successStories = [
    {
      id: 1,
      name: 'Fatuma Ali',
      title: 'Riverbank Organic Farming Initiative',
      location: 'Garsen, Tana River',
      category: 'agriculture',
      quote: 'From flood-ravaged land to thriving organic farm - feeding my community sustainably',
      story:
        "After losing her family's crops to repeated flooding, Fatuma transformed a neglected riverbank plot into a thriving organic farm using sustainable techniques she learned in our agriculture workshops. Her farm now produces vegetables for 50 families and employs 8 local youth.",
      impact: [
        '50 families provided with fresh produce weekly',
        '8 youth employed with fair wages',
        'Training program for 15 other farmers',
      ],
    },
    {
      id: 2,
      name: 'Ahmed Mohammed',
      title: 'Tana River Eco-Tours',
      location: 'Kipini Delta, Tana River',
      category: 'business',
      quote: "Sharing our delta's beauty while creating sustainable livelihoods",
      story:
        'Ahmed combined his passion for his homeland with entrepreneurial skills learned in our business incubator to create Tana River Eco-Tours. His company employs local youth as guides and has brought sustainable tourism to the region, showcasing the delta\'s unique ecosystem while preserving it.',
      impact: [
        '12 youth employed as tour guides',
        'Over 500 tourists hosted annually',
        '20% of profits fund conservation efforts',
      ],
    },
    {
      id: 3,
      name: 'Grace Mwende',
      title: 'Traditional Basket Weaving Collective',
      location: 'Hola, Tana River',
      category: 'business',
      quote: 'Preserving our heritage while building economic independence',
      story:
        'Grace revived traditional basket weaving techniques that were disappearing and organized 30 women into a collective. With micro-grant funding and digital marketing training, their baskets are now sold internationally, creating sustainable income for their families.',
      impact: [
        '30 women earning sustainable income',
        'Products sold in 5 countries',
        'Cultural preservation program for youth',
      ],
    },
    {
      id: 4,
      name: 'Juma Bakari',
      title: 'Solar-Powered Water Purification',
      location: 'Bura, Tana River',
      category: 'water',
      quote: "Clean water shouldn't be a luxury in our community",
      story:
        'After seeing children sick from contaminated water, Juma developed a solar-powered water purification system using locally available materials. His innovation now provides clean drinking water to 3 villages and has reduced waterborne diseases by 70% in these communities.',
      impact: [
        'Clean water for 3 villages (1,200+ people)',
        '70% reduction in waterborne diseases',
        'Local youth trained to maintain systems',
      ],
    },
    {
      id: 5,
      name: 'Amina Hassan',
      title: 'Digital Literacy Centers',
      location: 'Madogo, Tana River',
      category: 'education',
      quote: 'Bridging the digital divide in our rural communities',
      story:
        'Amina established three digital literacy centers after recognizing the technology gap in her community. These centers provide free computer training to youth and adults, with a special focus on girls and women. Over 500 community members have gained digital skills that have improved their employment prospects.',
      impact: [
        '3 community tech hubs established',
        '500+ people trained in digital skills',
        '45% increase in employment for participants',
      ],
    },
    {
      id: 6,
      name: 'David Kiprop',
      title: 'Mobile Fish Farming',
      location: 'Tana Delta, Tana River',
      category: 'innovation',
      quote: 'Adapting aquaculture to our changing environment',
      story:
        'David developed a unique mobile fish farming system that can be relocated during floods. His innovative approach allows fish farming to thrive in the delta\'s changing conditions, providing a sustainable protein source and income for his community.',
      impact: [
        '20 mobile fish farms established',
        'Sustainable protein for 200+ families',
        'Flood-resistant aquaculture model',
      ],
    },
  ];

  const toggleStory = (id) => {
    setExpandedStory(expandedStory === id ? null : id);
  };

  // Statistics data
  const stats = [
    { value: "120+", label: "Projects Funded", icon: <FaChartLine /> },
    { value: "2,500+", label: "Youth Empowered", icon: <FaUsers /> },
    { value: "85%", label: "Success Rate", icon: <FaHeart /> },
    { value: "36", label: "Communities Transformed", icon: <FaMapMarkerAlt /> }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-b from-green-50 to-yellow-50"
    >
      {/* Hero Section */}
      <div className="relative py-24 bg-gradient-to-r from-green-700 to-yellow-600">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Success Stories from Tana River
          </motion.h1>
          <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto">
            Young leaders turning ideas into impact—micro-grants funded, innovations adopted, and communities transformed
          </p>
          <div className="mt-10">
            <div className="inline-block h-1 w-32 bg-yellow-400 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-green-800 mb-6">
              Celebrating Tana River's Changemakers
            </h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-8"></div>
            <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
              In Tana River County, young visionaries are creating remarkable solutions to local challenges. 
              Through mentorship, micro-grants, and community support, these leaders have transformed their ideas 
              into thriving initiatives that benefit thousands across our region.
            </p>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-12 bg-green-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl p-6 text-center shadow-lg"
              >
                <div className="text-yellow-500 text-3xl mb-3 flex justify-center">
                  {stat.icon}
                </div>
                <p className="text-4xl font-bold text-green-800">{stat.value}</p>
                <p className="text-lg text-green-700 mt-2">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-green-800 mb-10">
            Explore Success Stories
          </h2>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map(category => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full flex items-center gap-2 transition-all ${
                  activeCategory === category.id 
                    ? 'bg-green-700 text-white shadow-lg' 
                    : 'bg-white text-green-700 border border-green-300 hover:bg-green-50'
                }`}
              >
                {category.icon && <span>{category.icon}</span>}
                {category.name}
              </motion.button>
            ))}
          </div>

          {/* Success Stories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {successStories
              .filter(story => activeCategory === 'all' || story.category === activeCategory)
              .map(story => (
                <motion.div 
                  key={story.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-2xl shadow-xl overflow-hidden transition-all hover:shadow-2xl"
                >
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center">
                        <div className="bg-green-100 p-3 rounded-full text-green-700">
                          {categories.find(cat => cat.id === story.category)?.icon}
                        </div>
                      </div>
                      <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">
                        {categories.find(cat => cat.id === story.category)?.name}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-green-800 mb-3">{story.title}</h3>
                    <div className="flex items-center gap-2 text-gray-600 mb-4">
                      <FaMapMarkerAlt className="text-yellow-500" />
                      <span>{story.location}</span>
                    </div>
                    
                    <div className="bg-green-50 p-4 rounded-xl mb-4">
                      <FaQuoteLeft className="text-green-600 mb-2" />
                      <p className="text-gray-700 italic">"{story.quote}"</p>
                    </div>
                    
                    <p className="text-gray-700 mb-6">
                      {expandedStory === story.id ? story.story : `${story.story.substring(0, 120)}...`}
                    </p>
                    
                    <button 
                      onClick={() => toggleStory(story.id)}
                      className="w-full py-3 bg-green-100 text-green-700 rounded-lg font-medium hover:bg-green-200 transition flex items-center justify-center gap-2"
                    >
                      {expandedStory === story.id ? 'Show Less' : 'Read Full Story'} 
                      <FaArrowRight className="text-sm" />
                    </button>
                    
                    {expandedStory === story.id && (
                      <div className="mt-6 pt-6 border-t border-green-100">
                        <h4 className="font-bold text-green-700 mb-4 text-lg">Impact Achieved:</h4>
                        <ul className="space-y-3">
                          {story.impact.map((item, index) => (
                            <li key={index} className="flex items-start">
                              <span className="text-yellow-500 mt-1 mr-2">✓</span>
                              <span className="text-gray-700">{item}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="mt-8 bg-green-50 p-4 rounded-xl">
                          <p className="text-green-700 font-medium mb-3">Changemaker:</p>
                          <div className="flex items-center gap-4">
                            <div className="w-14 h-14 rounded-full bg-yellow-100 flex items-center justify-center">
                              <span className="text-green-700 font-bold">
                                {story.name.split(' ').map(n => n[0]).join('')}
                              </span>
                            </div>
                            <div>
                              <p className="font-bold text-green-800 text-lg">{story.name}</p>
                              <p className="text-sm text-yellow-600">Project Leader</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
          </div>
        </div>
      </section>

      {/* Featured Story */}
      <section className="py-16 bg-green-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-3xl shadow-2xl overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2 p-10">
                <div className="inline-block px-4 py-1 bg-green-800 text-white rounded-full mb-4">
                  Featured Story
                </div>
                <h2 className="text-3xl font-bold text-green-900 mb-4">Solar-Powered Water Purification</h2>
                <div className="flex items-center gap-2 text-green-800 mb-6">
                  <FaMapMarkerAlt />
                  <span>Bura, Tana River</span>
                </div>
                <p className="text-green-900 text-lg mb-6">
                  "Before Juma's innovation, our children were constantly sick from contaminated water. 
                  Now we have clean drinking water year-round, even during floods."
                </p>
                
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 rounded-full bg-green-700 flex items-center justify-center text-white font-bold">
                    JB
                  </div>
                  <div>
                    <p className="font-bold text-green-900 text-lg">Juma Bakari</p>
                    <p className="text-green-800">Innovator, Bura</p>
                  </div>
                </div>
                
                <button className="px-6 py-3 bg-green-800 hover:bg-green-900 text-white font-bold rounded-lg transition flex items-center gap-2">
                  Read Full Story <FaArrowRight />
                </button>
              </div>
              <div className="md:w-1/2 bg-green-200 min-h-[400px] flex items-center justify-center">
                <div className="text-center p-8">
                  <FaWater className="text-green-700 text-6xl mb-4 mx-auto" />
                  <h3 className="text-2xl font-bold text-green-800 mb-2">Clean Water for Communities</h3>
                  <p className="text-green-700">Solar-powered innovation providing safe drinking water</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FaLeaf className="text-5xl text-green-600 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-green-800 mb-4">
            Support the Next Generation of Changemakers
          </h2>
          <p className="text-lg text-gray-700 mb-10 max-w-2xl mx-auto">
            Your contribution can help turn more innovative ideas into community-transforming realities
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <button className="px-8 py-4 bg-yellow-500 hover:bg-yellow-600 text-green-900 font-bold rounded-xl transition shadow-lg flex items-center gap-2">
              Fund a Project <FaArrowRight />
            </button>
            <button className="px-8 py-4 bg-green-700 hover:bg-green-800 text-white font-bold rounded-xl transition flex items-center gap-2">
              Become a Mentor <FaArrowRight />
            </button>
            <button className="px-8 py-4 bg-white border-2 border-green-700 text-green-800 hover:bg-green-50 font-bold rounded-xl transition flex items-center gap-2">
              Share Your Idea <FaArrowRight />
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-yellow-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-green-800 mb-2">
                Stay Inspired
              </h2>
              <p className="text-lg text-gray-700 mb-8 max-w-xl mx-auto">
                Subscribe to receive new success stories directly to your inbox
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-6 py-4 rounded-xl border border-green-300 focus:outline-none focus:ring-2 focus:ring-green-500 flex-grow text-lg"
              />
              <button className="px-8 py-4 bg-green-700 hover:bg-green-800 text-white font-bold rounded-xl transition text-lg">
                Subscribe Now
              </button>
            </div>
            
            <p className="text-center text-gray-600 mt-6">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>

      <footer className="py-8 bg-green-900 text-green-100 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <p>© {new Date().getFullYear()} Tana River Success Stories. All rights reserved.</p>
        </div>
      </footer>
    </motion.div>
  );
};

export default SuccessStories;