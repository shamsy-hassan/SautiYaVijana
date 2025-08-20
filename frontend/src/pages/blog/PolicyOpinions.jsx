// src/pages/blog/PolicyOpinions.jsx
import React, { useState } from 'react';
import { FaUserFriends } from 'react-icons/fa';
import { motion } from 'framer-motion';
import tanaRiverMap from '../../assets/Location-of-Tana-River-County-and-FBLS-potential-Source-Own-derived-using-ArcGIS.png';

import {
  FaShieldAlt,
  FaGraduationCap,
  FaUsers,
  FaFileAlt,
  FaChartBar,
  FaLightbulb,
  FaCalendarAlt,
  FaComments,
  FaVoteYea,
  FaMapMarkerAlt
} from 'react-icons/fa';

const PolicyOpinions = () => {
  const [activeCategory, setActiveCategory] = useState('security');
  const [expandedPolicy, setExpandedPolicy] = useState(null);
  
  // Policy categories
  const categories = [
    { id: 'security', name: 'Security', icon: <FaShieldAlt /> },
    { id: 'education', name: 'Education', icon: <FaGraduationCap /> },
    { id: 'governance', name: 'Governance', icon: <FaUsers /> },
    { id: 'environment', name: 'Environment', icon: <FaFileAlt /> },
    { id: 'economy', name: 'Economy', icon: <FaChartBar /> }
  ];
  
  // Policy analysis and opinions
  const policyOpinions = [
    {
      id: 1,
      title: "Community-Based Security Framework",
      category: "security",
      author: "Ahmed Mohammed, Youth Advocate",
      date: "June 15, 2023",
      summary: "A proposal for integrating youth and elders in local security initiatives",
      content: `
        <p>In Tana River County, security challenges require locally-driven solutions. Our proposed framework establishes Community Peace Committees (CPCs) in each ward, composed equally of youth, elders, and women representatives.</p>
        <p class="mt-4"><strong>Key Components:</strong></p>
        <ul class="list-disc pl-6 mt-2 space-y-1">
          <li>Early warning systems using mobile technology</li>
          <li>Cross-community dialogue forums</li>
          <li>Youth peace ambassador programs</li>
          <li>Collaborative patrols with security forces</li>
        </ul>
        <p class="mt-4">This approach has shown a 40% reduction in conflicts during the pilot phase in Garsen Sub-County.</p>
      `,
      recommendations: [
        "Allocate 15% of county security budget to community initiatives",
        "Establish youth-led conflict mediation centers",
        "Integrate traditional conflict resolution with modern security"
      ]
    },
    {
      id: 2,
      title: "Education Reform for Pastoralist Communities",
      category: "education",
      author: "Fatuma Ali, Education Policy Analyst",
      date: "May 28, 2023",
      summary: "Adapting school calendars and curriculum to nomadic lifestyles",
      content: `
        <p>Traditional education models fail to serve Tana River's pastoralist communities. Our analysis shows that 68% of children from nomadic families drop out by grade 4 due to calendar mismatches and irrelevant curriculum.</p>
        <p class="mt-4"><strong>Proposed Reforms:</strong></p>
        <ul class="list-disc pl-6 mt-2 space-y-1">
          <li>Mobile schools that follow grazing patterns</li>
          <li>Flexible academic calendar aligned with seasonal movements</li>
          <li>Curriculum integrating indigenous knowledge with national standards</li>
          <li>Digital learning tools for remote access</li>
        </ul>
      `,
      recommendations: [
        "Pilot mobile school program in 3 sub-counties",
        "Train teachers in pastoralist education methods",
        "Develop context-specific learning materials"
      ]
    },
    {
      id: 3,
      title: "Youth Participation in County Governance",
      category: "governance",
      author: "Youth Policy Collective",
      date: "July 3, 2023",
      summary: "Ensuring meaningful youth representation in decision-making",
      content: `
        <p>Despite comprising 65% of Tana River's population, youth remain underrepresented in county governance structures. Our research identifies barriers including:</p>
        <ul class="list-disc pl-6 mt-2 space-y-1">
          <li>High candidacy fees for elective positions</li>
          <li>Limited access to civic education</li>
          <li>Cultural barriers to youth leadership</li>
        </ul>
        <p class="mt-4"><strong>Proposed Solutions:</strong></p>
        <ul class="list-disc pl-6 mt-2 space-y-1">
          <li>Reserved seats for youth in county assemblies</li>
          <li>Youth participatory budgeting initiatives</li>
          <li>Digital platforms for policy feedback</li>
          <li>Leadership incubator programs</li>
        </ul>
      `,
      recommendations: [
        "Amend County Assembly Standing Orders to include youth quotas",
        "Establish youth advisory council reporting directly to Governor",
        "Create civic education programs in schools and communities"
      ]
    },
    {
      id: 4,
      title: "Flood Resilience Policy Framework",
      category: "environment",
      author: "Environmental Policy Group",
      date: "April 12, 2023",
      summary: "Building community resilience to climate-induced flooding",
      content: `
        <p>With Tana River experiencing increasingly severe floods, we propose a comprehensive resilience framework combining traditional knowledge with modern technology.</p>
        <p class="mt-4"><strong>Four Pillars Approach:</strong></p>
        <ol class="list-decimal pl-6 mt-2 space-y-1">
          <li><strong>Early Warning:</strong> Community-based monitoring systems</li>
          <li><strong>Infrastructure:</strong> Elevated structures and flood barriers</li>
          <li><strong>Ecosystem:</strong> Mangrove restoration and watershed management</li>
          <li><strong>Livelihoods:</strong> Flood-resistant agriculture and aquaculture</li>
        </ol>
      `,
      recommendations: [
        "Establish county flood management authority",
        "Integrate indigenous flood prediction knowledge",
        "Develop community evacuation and response plans"
      ]
    },
    {
      id: 5,
      title: "Economic Empowerment Through Digital Hubs",
      category: "economy",
      author: "Tana River Youth Innovators",
      date: "June 30, 2023",
      summary: "Creating tech-enabled economic opportunities in rural areas",
      content: `
        <p>Our research indicates that digital hubs can bridge the economic divide in Tana River by providing:</p>
        <ul class="list-disc pl-6 mt-2 space-y-1">
          <li>Access to online markets for local products</li>
          <li>Digital skills training</li>
          <li>E-government services</li>
          <li>Remote work opportunities</li>
        </ul>
        <p class="mt-4"><strong>Implementation Strategy:</strong></p>
        <p>Establish 15 community digital hubs across Tana River County, each serving as:</p>
        <ul class="list-disc pl-6 mt-2 space-y-1">
          <li>Co-working spaces</li>
          <li>Training centers</li>
          <li>E-commerce facilitation points</li>
          <li>Innovation incubators</li>
        </ul>
      `,
      recommendations: [
        "Allocate county funds for hub infrastructure",
        "Partner with tech companies for equipment and training",
        "Develop localized digital content in local languages"
      ]
    }
  ];
  
  // Security framework for Tana River
  const securityFramework = {
    pillars: [
      {
        title: "Community Policing",
        description: "Establishing neighborhood watch programs with youth participation",
        initiatives: [
          "Youth peace ambassador program",
          "Cross-community dialogue forums",
          "Collaborative patrols with police"
        ]
      },
      {
        title: "Conflict Prevention",
        description: "Addressing root causes of conflict through economic empowerment",
        initiatives: [
          "Resource-sharing agreements",
          "Joint grazing land management",
          "Early warning systems"
        ]
      },
      {
        title: "Technology Integration",
        description: "Leveraging digital tools for enhanced security",
        initiatives: [
          "Emergency response app",
          "Community reporting hotline",
          "Digital mapping of conflict zones"
        ]
      },
      {
        title: "Rehabilitation",
        description: "Reintegrating former combatants into society",
        initiatives: [
          "Vocational training programs",
          "Psychosocial support",
          "Community reconciliation processes"
        ]
      }
    ],
    statistics: [
      { value: "40%", label: "Reduction in conflicts since 2021" },
      { value: "28", label: "Community peace committees established" },
      { value: "120", label: "Youth trained as peace ambassadors" },
      { value: "15", label: "Conflict-prone areas stabilized" }
    ]
  };

  const togglePolicy = (id) => {
    setExpandedPolicy(expandedPolicy === id ? null : id);
  };

  return (

    <motion.div
          initial={{ opacity: 0, y: 20 }}       // Start invisible and slightly below
          animate={{ opacity: 1, y: 0 }}        // End visible and in position
          transition={{ duration: 1 }}          // Animation duration = 1 second
        >
    
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-green-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-800 to-teal-900 py-24">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Policy Opinions & Analysis
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Youth perspectives on legislation, security, and governance in Tana River County
          </p>
        </div>
      </div>

      {/* Introduction */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row gap-10 items-center">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-blue-800 mb-6">
              Shaping Tana River's Future Through Policy
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              At the intersection of youth innovation and community wisdom, our policy analyses provide
              actionable insights for Tana River's development. We focus on creating solutions that
              respect our cultural heritage while embracing progress.
            </p>
            <p className="text-lg text-gray-700">
              Our youth-led policy team engages with communities across all 15 wards, ensuring that
              legislation reflects the diverse needs of pastoralists, farmers, fishers, and urban residents.
            </p>
          </div>
         <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-80 flex items-center justify-center overflow-hidden">
  <img
  src={tanaRiverMap}
  alt="Tana River County Map"
  className="object-cover w-full h-full rounded-xl"
/>

</div>
          </div>
        </div>
      </div>

      {/* Security Framework Section */}
      <div className="py-16 bg-gradient-to-r from-blue-900 to-teal-800 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-700 mb-4">
              <FaShieldAlt className="text-2xl" />
            </div>
            <h2 className="text-3xl font-bold mb-4">
              Comprehensive Security Framework for Tana River
            </h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              A multi-faceted approach to ensuring safety and stability across our communities
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {securityFramework.pillars.map((pillar, index) => (
              <div key={index} className="bg-blue-700 bg-opacity-50 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="text-xl font-bold mb-3">{pillar.title}</h3>
                <p className="text-blue-100 mb-4">{pillar.description}</p>
                <h4 className="font-bold text-blue-200 mb-2">Key Initiatives:</h4>
                <ul className="space-y-2">
                  {pillar.initiatives.map((initiative, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-green-400 mr-2">✓</span>
                      <span>{initiative}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {securityFramework.statistics.map((stat, index) => (
              <div key={index} className="bg-blue-700 bg-opacity-30 rounded-lg p-4 text-center backdrop-blur-sm">
                <p className="text-3xl font-bold">{stat.value}</p>
                <p className="text-blue-100">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Policy Analysis Section */}
      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-800 mb-4">
              Policy Analysis & Recommendations
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Youth-led research and perspectives on critical issues facing Tana River County
            </p>
          </div>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full flex items-center gap-2 transition-all ${
                  activeCategory === category.id 
                    ? 'bg-blue-700 text-white shadow-lg' 
                    : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
                }`}
              >
                <span>{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>
          
          {/* Policy Opinions List */}
          <div className="space-y-8">
            {policyOpinions
              .filter(policy => policy.category === activeCategory)
              .map(policy => (
                <div key={policy.id} className="border border-blue-200 rounded-xl overflow-hidden">
                  <div className="bg-blue-50 p-6">
                    <div className="flex flex-wrap justify-between items-start gap-4">
                      <div>
                        <h3 className="text-xl font-bold text-blue-800">{policy.title}</h3>
                        <p className="text-blue-600 mt-1">{policy.summary}</p>
                      </div>
                      <button 
                        onClick={() => togglePolicy(policy.id)}
                        className="px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition"
                      >
                        {expandedPolicy === policy.id ? 'Collapse' : 'Read Analysis'}
                      </button>
                    </div>
                    <div className="flex flex-wrap gap-4 mt-4 text-sm">
                      <div className="flex items-center gap-2 text-blue-700">
                        <FaUserFriends />
                        <span>{policy.author}</span>
                      </div>
                      <div className="flex items-center gap-2 text-blue-700">
                        <FaCalendarAlt />
                        <span>{policy.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-blue-700">
                        {categories.find(cat => cat.id === policy.category)?.icon}
                        <span>{categories.find(cat => cat.id === policy.category)?.name}</span>
                      </div>
                    </div>
                  </div>
                  
                  {expandedPolicy === policy.id && (
                    <div className="p-6 bg-white">
                      <div 
                        className="prose max-w-none text-gray-700"
                        dangerouslySetInnerHTML={{ __html: policy.content }}
                      ></div>
                      
                      <div className="mt-8 pt-6 border-t border-blue-100">
                        <h4 className="text-lg font-bold text-blue-800 mb-4">Policy Recommendations:</h4>
                        <ul className="space-y-3">
                          {policy.recommendations.map((rec, index) => (
                            <li key={index} className="flex items-start bg-blue-50 p-4 rounded-lg">
                              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold mr-3">
                                {index + 1}
                              </span>
                              <span>{rec}</span>
                            </li>
                          ))}
                        </ul>
                        
                        <div className="mt-8 bg-green-50 p-6 rounded-xl">
                          <div className="flex items-center gap-3 mb-4">
                            <FaLightbulb className="text-2xl text-green-600" />
                            <h4 className="text-lg font-bold text-green-800">Youth Action Plan</h4>
                          </div>
                          <p className="text-green-700 mb-4">
                            How young people can advocate for these policy changes:
                          </p>
                          <ul className="space-y-2 text-green-700">
                            <li className="flex items-start">
                              <span className="text-green-600 mr-2">•</span>
                              <span>Organize community awareness sessions</span>
                            </li>
                            <li className="flex items-start">
                              <span className="text-green-600 mr-2">•</span>
                              <span>Engage with county assembly members</span>
                            </li>
                            <li className="flex items-start">
                              <span className="text-green-600 mr-2">•</span>
                              <span>Collect signatures for policy petitions</span>
                            </li>
                            <li className="flex items-start">
                              <span className="text-green-600 mr-2">•</span>
                              <span>Participate in public participation forums</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
          </div>
        </div>
      </div>

      {/* Civic Participation Section */}
      <div className="py-16 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-600 text-white mb-4">
              <FaVoteYea className="text-2xl" />
            </div>
            <h2 className="text-3xl font-bold text-green-800 mb-4">
              Strengthening Civic Participation in Tana River
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Empowering youth to engage in governance and policy-making processes
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Policy Education Workshops",
                description: "Training youth to understand and analyze county legislation",
                action: "Join our next workshop",
                icon: <FaGraduationCap className="text-3xl text-blue-600" />
              },
              {
                title: "Youth Assembly Simulations",
                description: "Hands-on experience in county governance processes",
                action: "Participate in next session",
                icon: <FaUsers className="text-3xl text-green-600" />
              },
              {
                title: "Digital Engagement Platform",
                description: "Online portal for policy feedback and discussions",
                action: "Access the platform",
                icon: <FaComments className="text-3xl text-teal-600" />
              }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition">
                <div className="text-blue-800 mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-green-800 mb-3">{item.title}</h3>
                <p className="text-gray-700 mb-4">{item.description}</p>
                <button className="px-4 py-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition">
                  {item.action}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Upcoming Policy Events */}
      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-800 text-center mb-12">
            Upcoming Policy Events in Tana River
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "County Budget Public Forum",
                date: "August 20, 2023",
                time: "10:00 AM - 1:00 PM",
                location: "Hola County Hall",
                description: "Opportunity for citizens to provide input on the 2023/2024 county budget"
              },
              {
                title: "Youth Policy Hackathon",
                date: "September 5-6, 2023",
                time: "9:00 AM - 5:00 PM",
                location: "Garsen Innovation Hub",
                description: "Developing tech solutions for county service delivery challenges"
              },
              {
                title: "Security Policy Dialogue",
                date: "August 28, 2023",
                time: "2:00 PM - 5:00 PM",
                location: "Kipini Community Center",
                description: "Community perspectives on enhancing security in border areas"
              }
            ].map((event, index) => (
              <div key={index} className="border border-blue-200 rounded-xl overflow-hidden hover:shadow-lg transition">
                <div className="bg-blue-800 text-white p-4">
                  <h3 className="text-xl font-bold">{event.title}</h3>
                </div>
                <div className="p-6">
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center gap-3 text-gray-700">
                      <FaCalendarAlt className="text-blue-600" />
                      <span>{event.date} | {event.time}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-700">
                      <FaMapMarkerAlt className="text-blue-600" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4">{event.description}</p>
                  <button className="w-full py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition">
                    Register to Attend
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-16 bg-gradient-to-r from-blue-800 to-teal-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Shape Tana River's Future Through Policy
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            Your voice matters in creating legislation that serves all residents of our county
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-8 py-3 bg-amber-400 hover:bg-amber-500 text-blue-900 font-bold rounded-lg transition shadow-lg">
              Submit Your Policy Idea
            </button>
            <button className="px-8 py-3 bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-800 font-bold rounded-lg transition">
              Join Policy Working Group
            </button>
            <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition">
              Download Policy Toolkit
            </button>
          </div>
        </div>
      </div>
    
    </motion.div>
  );
};

export default PolicyOpinions;