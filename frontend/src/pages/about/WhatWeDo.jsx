// src/pages/WhatWeDo.jsx
import React from 'react';
import { FiActivity, FiBook, FiCode, FiGlobe, FiHeart, FiShield, FiTrendingUp, FiUsers } from 'react-icons/fi';
import { motion } from 'framer-motion';
const WhatWeDo = () => {
  // Sample activities data
  const activities = [
    {
      icon: <FiCode className="w-8 h-8 text-green-600" />,
      title: "Digital Skills Workshops",
      description: "Our hands-on workshops teach youth essential digital skills from basic computer literacy to advanced programming. Participants gain practical experience with industry-standard tools and technologies, preparing them for tech careers in the digital economy."
    },
    {
      icon: <FiBook className="w-8 h-8 text-green-600" />,
      title: "Leadership Development",
      description: "We cultivate leadership potential through mentorship programs, public speaking training, and project management workshops. Youth learn to inspire others, make informed decisions, and drive positive change in their communities."
    },
    {
      icon: <FiGlobe className="w-8 h-8 text-green-600" />,
      title: "Environmental Stewardship",
      description: "Our environmental programs engage youth in conservation projects, sustainable living workshops, and climate action initiatives. Participants develop eco-literacy while contributing to local and global sustainability efforts."
    },
    {
      icon: <FiActivity className="w-8 h-8 text-green-600" />,
      title: "Entrepreneurship Bootcamps",
      description: "Aspiring young entrepreneurs learn to transform ideas into viable businesses through our intensive bootcamps. Curriculum covers business planning, financial literacy, marketing strategies, and pitching to investors."
    },
    {
      icon: <FiUsers className="w-8 h-8 text-green-600" />,
      title: "Community Service Projects",
      description: "We connect youth with meaningful service opportunities that address local needs. Through hands-on projects, participants develop empathy, civic responsibility, and practical problem-solving skills."
    },
    {
      icon: <FiHeart className="w-8 h-8 text-green-600" />,
      title: "Mental Health & Wellbeing",
      description: "Our wellness programs provide safe spaces for youth to discuss mental health, build resilience, and practice self-care. Workshops cover stress management, emotional intelligence, and building healthy relationships."
    }
  ];

  // Youth priorities data
  const priorities = [
    {
      title: "Equity and Justice",
      description: "We champion equal opportunities for all youth regardless of background. Our initiatives focus on dismantling systemic barriers, promoting diversity, and creating inclusive spaces where every voice is heard and valued.",
      image: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
      title: "Climate and Sustainability",
      description: "Empowering youth as environmental leaders is central to our mission. We provide education on climate science, support sustainability projects, and advocate for policies that protect our planet for future generations.",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1474&q=80"
    },
    {
      title: "Safety and Wellbeing",
      description: "Creating safe environments where youth can thrive physically and emotionally is our priority. Our programs address mental health, prevent violence, and build supportive communities that nurture holistic development.",
      image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
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
          <h1 className="text-4xl md:text-6xl font-bold mb-4">What We Do</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Empowering youth through transformative programs that build skills, inspire action, and create opportunities
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-white opacity-20"></div>
      </div>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Approach to Youth Empowerment</h2>
            <p className="text-lg text-gray-600 mb-8">
              At SYV, we believe in the transformative power of youth engagement. Our evidence-based programs are designed to develop critical skills, foster leadership, and create pathways to meaningful opportunities. We meet youth where they are and provide the tools they need to shape their futures.
            </p>
            <div className="bg-green-50 p-6 rounded-xl inline-flex items-center">
              <FiTrendingUp className="text-3xl text-green-600 mr-4" />
              <p className="text-lg font-semibold text-gray-800">Since 2015, we've impacted over 50,000 young people across 12 countries</p>
            </div>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-16 bg-emerald-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Youth Development Activities</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our comprehensive programs address the diverse needs and interests of young people, creating opportunities for growth in multiple dimensions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {activities.map((activity, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-green-100 p-3 rounded-full mr-4">
                      {activity.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">{activity.title}</h3>
                  </div>
                  <p className="text-gray-600">{activity.description}</p>
                </div>
                <div className="bg-gray-100 px-6 py-3 flex justify-end">
                  <button className="text-green-600 font-medium hover:text-green-700 flex items-center">
                    Learn more
                    <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Priorities Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Strategic Priorities</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Guided by youth voices, we focus on these critical areas to create meaningful and lasting impact
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {priorities.map((priority, index) => (
              <div 
                key={index} 
                className="rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl"
              >
                <div className="h-56 overflow-hidden">
                  <img 
                    src={priority.image} 
                    alt={priority.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">{priority.title}</h3>
                  <p className="text-gray-600 mb-4">{priority.description}</p>
                  <div className="mt-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Key Initiatives:</h4>
                    <ul className="space-y-1">
                      {priority.title === "Equity and Justice" && (
                        <>
                          <li className="flex items-start">
                            <span className="text-green-600 mr-2">•</span>
                            <span>Diversity and inclusion training</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-600 mr-2">•</span>
                            <span>Anti-discrimination advocacy</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-600 mr-2">•</span>
                            <span>Equal access programs</span>
                          </li>
                        </>
                      )}
                      {priority.title === "Climate and Sustainability" && (
                        <>
                          <li className="flex items-start">
                            <span className="text-green-600 mr-2">•</span>
                            <span>Youth climate action councils</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-600 mr-2">•</span>
                            <span>Sustainable living workshops</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-600 mr-2">•</span>
                            <span>Environmental justice campaigns</span>
                          </li>
                        </>
                      )}
                      {priority.title === "Safety and Wellbeing" && (
                        <>
                          <li className="flex items-start">
                            <span className="text-green-600 mr-2">•</span>
                            <span>Mental health first aid training</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-600 mr-2">•</span>
                            <span>Safe spaces initiatives</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-green-600 mr-2">•</span>
                            <span>Violence prevention programs</span>
                          </li>
                        </>
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 bg-gradient-to-r from-green-500 to-emerald-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Measuring Our Impact</h2>
            <p className="text-xl mb-12 max-w-3xl mx-auto">
              We track outcomes to ensure our programs create meaningful change in young lives
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="bg-white bg-opacity-20 p-6 rounded-xl backdrop-blur-sm">
                <div className="text-3xl font-bold mb-2">92%</div>
                <div>Increased confidence</div>
              </div>
              <div className="bg-white bg-opacity-20 p-6 rounded-xl backdrop-blur-sm">
                <div className="text-3xl font-bold mb-2">85%</div>
                <div>Improved job readiness</div>
              </div>
              <div className="bg-white bg-opacity-20 p-6 rounded-xl backdrop-blur-sm">
                <div className="text-3xl font-bold mb-2">78%</div>
                <div>Leadership development</div>
              </div>
              <div className="bg-white bg-opacity-20 p-6 rounded-xl backdrop-blur-sm">
                <div className="text-3xl font-bold mb-2">96%</div>
                <div>Would recommend</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-2xl p-10 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Make a Difference?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join thousands of youth who are transforming their futures through our programs
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-white text-emerald-700 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition duration-300">
                Explore Programs
              </button>
              <button className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-full hover:bg-white hover:bg-opacity-20 transition duration-300">
                Become a Partner
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
    </motion.div>
  );
};

export default WhatWeDo;