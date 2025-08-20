// src/pages/projects/CommunityDialogues.jsx
import React, { useState } from 'react';
import { FaUsers, FaHandshake, FaWater, FaSeedling, FaGraduationCap, FaUserFriends, FaMapMarkerAlt, FaCalendarAlt, FaQuoteLeft } from 'react-icons/fa';
import { motion } from 'framer-motion';
const CommunityDialogues = () => {
  const [activeGallery, setActiveGallery] = useState('all');
  const [activeIssue, setActiveIssue] = useState(null);
  
  // Gallery images
  const galleryImages = [
    { id: 1, category: 'dialogue', title: 'Community Dialogue in Hola', description: 'Elders and youth discussing flood management strategies' },
    { id: 2, category: 'dialogue', title: 'Peace Building Session', description: 'Inter-communal dialogue between farming and pastoralist communities' },
    { id: 3, category: 'dialogue', title: 'Women Leaders Forum', description: 'Women discussing healthcare access challenges' },
    { id: 4, category: 'impact', title: 'Flood Relief Distribution', description: 'Community receiving aid after coordinated response' },
    { id: 5, category: 'impact', title: 'Vocational Training Launch', description: 'Youth participating in skills development program' },
    { id: 6, category: 'impact', title: 'Peace Tree Planting', description: 'Symbolic tree planting after conflict resolution' },
    { id: 7, category: 'people', title: 'Youth Leader Fatuma', description: 'Advocating for youth employment opportunities' },
    { id: 8, category: 'people', title: 'Elder Mzee Juma', description: 'Sharing traditional conflict resolution wisdom' },
    { id: 9, category: 'people', title: 'Women Representative Aisha', description: 'Leading discussions on girls education' },
  ];
  
  // Key issues
  const keyIssues = [
    {
      id: 'climate',
      title: 'Climate Change & Flooding',
      icon: <FaWater />,
      description: 'Recurring floods and droughts causing crop loss, displacement, and food insecurity',
      solutions: [
        'Early warning systems for floods',
        'Drought-resistant farming techniques',
        'Community-based disaster response plans'
      ]
    },
    {
      id: 'land',
      title: 'Land & Resource Conflicts',
      icon: <FaSeedling />,
      description: 'Tensions over grazing land and water access between farming and pastoralist communities',
      solutions: [
        'Shared resource management agreements',
        'Boundary demarcation initiatives',
        'Joint grazing land committees'
      ]
    },
    {
      id: 'youth',
      title: 'Youth Unemployment',
      icon: <FaUserFriends />,
      description: 'High joblessness among youth leading to economic strain and social issues',
      solutions: [
        'Vocational training programs',
        'Youth entrepreneurship grants',
        'Local job creation initiatives'
      ]
    },
    {
      id: 'security',
      title: 'Insecurity & Violence',
      icon: <FaHandshake />,
      description: 'Sporadic conflict in border zones affecting safety and community cohesion',
      solutions: [
        'Community peace committees',
        'Cross-community dialogue forums',
        'Youth engagement in peacebuilding'
      ]
    },
    {
      id: 'services',
      title: 'Access to Health & Education',
      icon: <FaGraduationCap />,
      description: 'Limited healthcare facilities and high school dropout rates, especially among girls',
      solutions: [
        'Mobile health clinics',
        'School retention programs',
        'Community scholarship funds'
      ]
    }
  ];
  
  // Voices from the community
  const communityVoices = [
    {
      id: 1,
      name: "Fatuma Ali",
      role: "Youth Leader, Hola",
      quote: "Before these dialogues, our youth had no voice. Now, we sit together with elders and leaders to find peaceful solutions to our challenges.",
      image: "fatuma.jpg"
    },
    {
      id: 2,
      name: "Mzee Juma Bakari",
      role: "Community Elder, Garsen",
      quote: "The wisdom of our ancestors combined with the energy of our youth creates powerful solutions for Tana River.",
      image: "juma.jpg"
    },
    {
      id: 3,
      name: "Aisha Mohammed",
      role: "Women Representative, Kipini",
      quote: "Through dialogue, we've established women-led initiatives that address healthcare and education needs in our villages.",
      image: "aisha.jpg"
    }
  ];

  return (
    <motion.div
                  initial={{ opacity: 0, y: 20 }}       // Start invisible and slightly below
                  animate={{ opacity: 1, y: 0 }}        // End visible and in position
                  transition={{ duration: 1 }}          // Animation duration = 1 second
                >
            
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-amber-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-green-700 to-emerald-800 py-24">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center opacity-30"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Community Dialogues – Tana River County
          </h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Strengthening peaceful coexistence, local development, and inclusive governance through open dialogue
          </p>
        </div>
      </div>

      {/* Introduction */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row gap-10 items-center">
          <div className="md:w-1/2">
            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-96 flex items-center justify-center">
              <span className="text-green-700">Community Dialogue in Progress</span>
            </div>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-green-800 mb-6">
              The Power of Community Voices
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              In Tana River County, community dialogues play a vital role in strengthening peaceful coexistence,
              local development, and inclusive governance. These forums bring together elders, youth,
              women leaders, civil society, and local government officials to openly discuss pressing local issues and
              generate people-centered solutions.
            </p>
            <p className="text-lg text-gray-700">
              Our dialogues create safe spaces where diverse perspectives are heard and respected, leading to
              sustainable solutions that reflect the collective wisdom of Tana River's communities.
            </p>
          </div>
        </div>
      </div>

      {/* Key Issues Section */}
      <div className="bg-green-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-green-800 text-center mb-4">
            Addressing Tana River's Challenges Together
          </h2>
          <p className="text-lg text-gray-700 text-center mb-12 max-w-3xl mx-auto">
            Through community dialogues, we're developing local solutions to our most pressing challenges
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {keyIssues.map(issue => (
              <div 
                key={issue.id}
                className={`bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer transform transition-all hover:scale-105 ${
                  activeIssue === issue.id ? 'ring-4 ring-green-500' : ''
                }`}
                onClick={() => setActiveIssue(activeIssue === issue.id ? null : issue.id)}
              >
                <div className="p-6">
                  <div className="text-green-600 text-3xl mb-4">
                    {issue.icon}
                  </div>
                  <h3 className="text-xl font-bold text-green-800 mb-3">{issue.title}</h3>
                  <p className="text-gray-700 mb-4">{issue.description}</p>
                  
                  {activeIssue === issue.id && (
                    <div className="mt-4 pt-4 border-t border-green-100">
                      <h4 className="font-bold text-green-700 mb-2">Community-Proposed Solutions:</h4>
                      <ul className="space-y-2">
                        {issue.solutions.map((solution, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-green-500 mr-2">✓</span>
                            <span>{solution}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Dialogue Process */}
      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-green-800 text-center mb-12">
            How Our Community Dialogues Work
          </h2>
          
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <div className="space-y-8">
                {[
                  {
                    step: 1,
                    title: "Identifying Community Concerns",
                    description: "Through local leaders and surveys, we identify key issues affecting specific villages and wards"
                  },
                  {
                    step: 2,
                    title: "Preparing Dialogue Framework",
                    description: "We design inclusive dialogue formats ensuring all voices are represented"
                  },
                  {
                    step: 3,
                    title: "Facilitating Open Discussion",
                    description: "Neutral facilitators guide respectful conversations focused on solutions"
                  },
                  {
                    step: 4,
                    title: "Developing Action Plans",
                    description: "Participants co-create practical solutions with clear responsibilities"
                  },
                  {
                    step: 5,
                    title: "Implementing & Monitoring",
                    description: "Community members lead implementation with support from local government"
                  }
                ].map(step => (
                  <div key={step.step} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-700 font-bold">
                      {step.step}
                    </div>
                    <div>
                      <h3 className="font-bold text-green-800 text-lg">{step.title}</h3>
                      <p className="text-gray-700">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-full flex items-center justify-center">
                <span className="text-green-700">Visualization of Dialogue Process</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Community Voices */}
      <div className="py-16 bg-gradient-to-br from-amber-50 to-green-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-green-800 text-center mb-4">
            Voices from the Community
          </h2>
          <p className="text-lg text-gray-700 text-center mb-12 max-w-3xl mx-auto">
            Hear directly from Tana River residents about the impact of community dialogues
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {communityVoices.map(person => (
              <div key={person.id} className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-[1.02]">
                <div className="h-64 bg-green-200 border-2 border-dashed"></div>
                <div className="p-6">
                  <div className="flex justify-start mb-4 text-green-600">
                    <FaQuoteLeft className="text-2xl" />
                  </div>
                  <p className="text-gray-700 italic mb-4">"{person.quote}"</p>
                  <div>
                    <h3 className="font-bold text-green-800">{person.name}</h3>
                    <p className="text-amber-600">{person.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Photo Gallery */}
      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-green-800 text-center mb-4">
            Moments from Our Dialogues
          </h2>
          <p className="text-lg text-gray-700 text-center mb-12 max-w-3xl mx-auto">
            Capturing the spirit of community engagement across Tana River
          </p>
          
          {/* Gallery Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {['all', 'dialogue', 'impact', 'people'].map(category => (
              <button
                key={category}
                onClick={() => setActiveGallery(category)}
                className={`px-6 py-2 rounded-full capitalize ${
                  activeGallery === category
                    ? 'bg-green-700 text-white'
                    : 'bg-green-100 text-green-700 hover:bg-green-200'
                }`}
              >
                {category === 'all' ? 'All Photos' : category}
              </button>
            ))}
          </div>
          
          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages
              .filter(img => activeGallery === 'all' || img.category === activeGallery)
              .map(img => (
                <div key={img.id} className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition">
                  <div className="h-64 bg-gray-200 border-2 border-dashed flex items-center justify-center">
                    <span className="text-green-700">{img.title}</span>
                  </div>
                  <div className="p-4 bg-white">
                    <h3 className="font-bold text-green-800">{img.title}</h3>
                    <p className="text-gray-600 text-sm">{img.description}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>

      {/* Upcoming Events */}
      <div className="py-16 bg-green-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-green-800 text-center mb-12">
            Upcoming Community Dialogues
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Flood Preparedness Forum",
                location: "Garsen Town Hall",
                date: "August 15, 2023",
                time: "10:00 AM - 1:00 PM",
                focus: "Developing community-led flood response strategies"
              },
              {
                title: "Youth Employment Dialogue",
                location: "Hola Youth Center",
                date: "August 22, 2023",
                time: "2:00 PM - 5:00 PM",
                focus: "Creating local job opportunities for young people"
              },
              {
                title: "Cross-Community Peace Summit",
                location: "Kipini Community Grounds",
                date: "September 5, 2023",
                time: "9:00 AM - 3:00 PM",
                focus: "Building understanding between farming and pastoralist communities"
              }
            ].map((event, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="h-48 bg-green-200 border-2 border-dashed"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-green-800 mb-3">{event.title}</h3>
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center gap-2 text-gray-600">
                      <FaCalendarAlt className="text-green-600" />
                      <span>{event.date} | {event.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <FaMapMarkerAlt className="text-green-600" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4">{event.focus}</p>
                  <button className="w-full py-2 bg-green-700 text-white rounded-lg hover:bg-green-800 transition">
                    Register to Attend
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-16 bg-gradient-to-r from-green-700 to-emerald-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Join the Conversation in Tana River
          </h2>
          <p className="text-xl text-green-100 mb-10">
            Your voice matters. Participate in our community dialogues and help shape the future of our county.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-8 py-3 bg-amber-400 hover:bg-amber-500 text-green-900 font-bold rounded-lg transition shadow-lg">
              Attend a Dialogue
            </button>
            <button className="px-8 py-3 bg-transparent border-2 border-white text-white hover:bg-white hover:text-green-800 font-bold rounded-lg transition">
              Host a Dialogue
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

export default CommunityDialogues;