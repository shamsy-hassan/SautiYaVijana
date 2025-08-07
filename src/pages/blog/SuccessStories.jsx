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
} from 'react-icons/fa';
import { motion } from 'framer-motion';

// Importing image using ES6 import
import tractorImage from '../../assets/tractor-agricultural-machine-cultivating-field (1).jpg';
import businessImage from '../../assets/african-entrepreneur-start-up-company-reading-charts-documents-paperwork-diverse-team-business-people-analyzing-company-financial-reports-from-computer-successful-corporate-professional-ent.jpg';
import basketWeaving from '../../assets/wicker-baskets.jpg';
import waterPurification from '../../assets/african-woman-pouring-water-recipient-outdoors.jpg';
import digitalLiteracy from '../../assets/diverse-students-team-engaging-video-call-with-doctor.jpg';
import fishFarming from '../../assets/fisherman-with-net-river.jpg';
import featuredProject from '../../assets/office-floor-plan-sketch-drawing-concept.jpg';
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
      image: tractorImage,
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
      image: businessImage,
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
      image: basketWeaving,
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
      image: waterPurification,
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
      image: digitalLiteracy,
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
      image: fishFarming,
    },
  ];

  const toggleStory = (id) => {
    setExpandedStory(expandedStory === id ? null : id);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >


      
      <div className="min-h-screen bg-gradient-to-b from-green-50 to-amber-50">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-r from-green-700 to-emerald-800 py-24">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center opacity-30"></div>
          <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Success Stories from Tana River
            </h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Young leaders turning ideas into impact—micro-grants funded, innovations adopted, and communities transformed
            </p>
          </div>
        </div>

        {/* Introduction */}
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-green-800 mb-6">
              Celebrating Tana River's Changemakers
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              In Tana River County, young visionaries are creating remarkable solutions to local challenges. 
              Through mentorship, micro-grants, and community support, these leaders have transformed their ideas 
              into thriving initiatives that benefit thousands across our region.
            </p>
            <div className="w-32 h-1 bg-green-600 mx-auto mb-8"></div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-5 py-3 rounded-full flex items-center gap-2 transition-all ${
                  activeCategory === category.id 
                    ? 'bg-green-700 text-white shadow-lg' 
                    : 'bg-white text-green-700 border border-green-300 hover:bg-green-50'
                }`}
              >
                {category.icon && <span>{category.icon}</span>}
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Success Stories Grid with Images */}
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {successStories
              .filter(story => activeCategory === 'all' || story.category === activeCategory)
              .map(story => (
                <div 
                  key={story.id} 
                  className="bg-white rounded-xl shadow-lg overflow-hidden transition-all hover:shadow-xl"
                >
                  {/* Image Container */}
                  <div className="h-56 relative">
                    <img 
                      src={src/assets/office-floor-plan-sketch-drawing-concept.jpg} 
                      alt={`${story.title} success story`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-4 right-4 px-3 py-1 bg-green-700 text-white rounded-full text-sm">
                      {categories.find(cat => cat.id === story.category)?.name}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex justify-start mb-4 text-green-600">
                      <FaQuoteLeft className="text-2xl" />
                    </div>
                    <h3 className="text-xl font-bold text-green-800 mb-3">{story.title}</h3>
                    <div className="flex items-center gap-2 text-gray-600 mb-3">
                      <FaMapMarkerAlt className="text-green-600" />
                      <span>{story.location}</span>
                    </div>
                    <p className="text-gray-700 italic mb-4">"{story.quote}"</p>
                    <p className="text-gray-700 mb-4 line-clamp-3">
                      {story.story}
                    </p>
                    
                    <button 
                      onClick={() => toggleStory(story.id)}
                      className="px-4 py-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition w-full"
                    >
                      {expandedStory === story.id ? 'Read Less' : 'Read Full Story'}
                    </button>
                    
                    {expandedStory === story.id && (
                      <div className="mt-4 pt-4 border-t border-green-100">
                        <h4 className="font-bold text-green-700 mb-3">Impact Achieved:</h4>
                        <ul className="space-y-2">
                          {story.impact.map((item, index) => (
                            <li key={index} className="flex items-start">
                              <span className="text-green-500 mr-2">✓</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="mt-6 bg-green-50 p-4 rounded-lg">
                          <p className="text-green-700 font-medium mb-2">Changemaker:</p>
                          <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-full bg-green-200 flex items-center justify-center">
                              {/* Get initials from name */}
                              <span className="text-green-700">
                                {story.name.split(' ').map(n => n[0]).join('')}
                              </span>
                            </div>
                            <div>
                              <p className="font-bold text-green-800">{story.name}</p>
                              <p className="text-sm text-green-700">Project Leader</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* Rest of the code remains the same... */}
        {/* Impact Statistics */}
        <div className="py-16 bg-green-50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-green-800 text-center mb-12">
              Collective Impact in Tana River
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { value: "120+", label: "Projects Funded", icon: <FaChartLine className="text-3xl" /> },
                { value: "2,500+", label: "Youth Empowered", icon: <FaUsers className="text-3xl" /> },
                { value: "85%", label: "Success Rate", icon: <FaHeart className="text-3xl" /> },
                { value: "36", label: "Communities Transformed", icon: <FaMapMarkerAlt className="text-3xl" /> }
              ].map((stat, index) => (
                <div key={index} className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition flex flex-col items-center">
                  <div className="text-green-600 mb-3">
                    {stat.icon}
                  </div>
                  <p className="text-3xl font-bold text-green-800">{stat.value}</p>
                  <p className="text-green-700">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="py-16 bg-gradient-to-r from-green-700 to-emerald-800">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Support the Next Generation of Changemakers
            </h2>
            <p className="text-xl text-green-100 mb-10">
              Your contribution can help turn more innovative ideas into community-transforming realities
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-3 bg-amber-400 hover:bg-amber-500 text-green-900 font-bold rounded-lg transition shadow-lg">
                Fund a Project
              </button>
              <button className="px-8 py-3 bg-transparent border-2 border-white text-white hover:bg-white hover:text-green-800 font-bold rounded-lg transition">
                Become a Mentor
              </button>
              <button className="px-8 py-3 bg-green-900 hover:bg-green-950 text-white font-bold rounded-lg transition">
                Share Your Idea
              </button>
            </div>
          </div>
        </div>

        {/* Featured Story */}
        <div className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="bg-gradient-to-r from-green-600 to-emerald-700 rounded-2xl shadow-xl overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 p-8 md:p-12 text-white">
                  <h2 className="text-2xl font-bold mb-4">Featured Success Story</h2>
                  <h3 className="text-3xl font-bold mb-6">Solar-Powered Water Purification</h3>
                  <p className="text-green-100 mb-6">
                    "Before Juma's innovation, our children were constantly sick from contaminated water. 
                    Now we have clean drinking water year-round, even during floods."
                  </p>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center">
                      <span className="font-bold">JB</span>
                    </div>
                    <div>
                      <p className="font-bold">Juma Bakari</p>
                      <p className="text-green-200">Innovator, Bura</p>
                    </div>
                  </div>
                  <button className="px-6 py-3 bg-white text-green-800 font-bold rounded-lg hover:bg-green-50 transition">
                    Read Full Story
                  </button>
                </div>
                <div className="md:w-1/2">
                  <div className="h-full bg-green-300 border-2 border-dashed flex items-center justify-center min-h-80">
                    <span className="text-green-800">featuredProject</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="py-16 bg-amber-50">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-green-800 mb-4">
              Stay Inspired
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Subscribe to receive new success stories directly to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-6 py-3 rounded-lg border border-green-300 focus:outline-none focus:ring-2 focus:ring-green-500 flex-grow"
              />
              <button className="px-8 py-3 bg-green-700 hover:bg-green-800 text-white font-bold rounded-lg transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SuccessStories;
