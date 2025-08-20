// src/pages/YouthAgenda/Challenges.jsx
import React, { useState } from 'react';
import { FaWater, FaGraduationCap, FaBriefcase, FaHeartbeat, FaMapMarkerAlt, FaPlus } from 'react-icons/fa';
import { motion } from 'framer-motion';
const Challenges = () => {
  const [language, setLanguage] = useState('en'); // 'en' or 'sw'
  const [activeCategory, setActiveCategory] = useState('all');
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    description: '',
    location: ''
  });

  const content = {
    en: {
      title: "Local Challenges in Tana River",
      subtitle: "Community-identified issues affecting Tana River County",
      intro: "This interactive map highlights community-reported challenges across Tana River County. Explore by category or contribute your own observations to help drive solutions.",
      categories: [
        { id: 'all', name: "All Challenges", icon: <FaMapMarkerAlt /> },
        { id: 'water', name: "Water & Sanitation", icon: <FaWater /> },
        { id: 'education', name: "Education & Digital Access", icon: <FaGraduationCap /> },
        { id: 'employment', name: "Youth Unemployment", icon: <FaBriefcase /> },
        { id: 'health', name: "Health & Well-being", icon: <FaHeartbeat /> }
      ],
      challenges: [
        {
          id: 1,
          title: "Water Scarcity in Kipini",
          category: "water",
          description: "Persistent water shortages affecting 15 villages. Women and children spend 4+ hours daily fetching water.",
          location: "Kipini West",
          votes: 142,
          status: "urgent"
        },
        {
          id: 2,
          title: "School Infrastructure in Garsen",
          category: "education",
          description: "3 primary schools lack proper classrooms. Students learn under trees during rainy season.",
          location: "Garsen Central",
          votes: 89,
          status: "active"
        },
        {
          id: 3,
          title: "Youth Job Opportunities",
          category: "employment",
          description: "Limited formal employment for educated youth. Need for vocational training centers.",
          location: "Hola Town",
          votes: 203,
          status: "active"
        },
        {
          id: 4,
          title: "Malaria Prevention",
          category: "health",
          description: "High malaria incidence due to stagnant water from Tana River flooding.",
          location: "Tana Delta",
          votes: 117,
          status: "progress"
        },
        {
          id: 5,
          title: "Digital Connectivity",
          category: "education",
          description: "Poor internet access hindering online education and business opportunities.",
          location: "Bangali Division",
          votes: 76,
          status: "active"
        },
        {
          id: 6,
          title: "Sanitation Facilities",
          category: "water",
          description: "Lack of proper toilets in public spaces and schools leading to health issues.",
          location: "Madogo Ward",
          votes: 94,
          status: "urgent"
        }
      ],
      formTitle: "Report a New Challenge",
      formFields: {
        title: "Challenge Title",
        category: "Category",
        description: "Description",
        location: "Location in Tana River",
        submit: "Submit Challenge"
      },
      language: "SW",
      submitButton: "Submit Challenge",
      mapTitle: "Tana River Challenge Map",
      filterText: "Filter by category:",
      statsTitle: "Challenges Overview",
      stats: [
        { value: "42", label: "Active Reports" },
        { value: "18", label: "In Progress" },
        { value: "6", label: "Resolved" },
        { value: "3.2k", label: "Community Votes" }
      ]
    },
    sw: {
      title: "Changamoto za Kienyeji Tana River",
      subtitle: "Masuala yanayowakabili wakazi wa Kaunti ya Tana River",
      intro: "Ramani hii inaonyesha changamoto zilizoripotiwa na jamii katika Kaunti ya Tana River. Chunguza kwa jamii au ongeza changamoto yako ili kusaidia kutafuta ufumbuzi.",
      categories: [
        { id: 'all', name: "Changamoto Zote", icon: <FaMapMarkerAlt /> },
        { id: 'water', name: "Maji na Usafi", icon: <FaWater /> },
        { id: 'education', name: "Elimu na Mtandao", icon: <FaGraduationCap /> },
        { id: 'employment', name: "Ukosefu wa Ajira", icon: <FaBriefcase /> },
        { id: 'health', name: "Afya na Ustawi", icon: <FaHeartbeat /> }
      ],
      challenges: [
        {
          id: 1,
          title: "Uhaba wa Maji Kipini",
          category: "water",
          description: "Uhaba endelevu wa maji unaowakabili vijiji 15. Wanawake na watana hutumia zaidi ya saa 4 kuchota maji kila siku.",
          location: "Kipini Magharibi",
          votes: 142,
          status: "urgent"
        },
        {
          id: 2,
          title: "Miundo mbinu ya Shule Garsen",
          category: "education",
          description: "Shule 3 za msingi hazina madarasa yanayofaa. Wanafunzi husoma chini ya miti wakati wa mvua.",
          location: "Garsen Kati",
          votes: 89,
          status: "active"
        },
        {
          id: 3,
          title: "Ajira za Vijana",
          category: "employment",
          description: "Ajira ndogo kwa vijana walioelimika. Hitaji la vituo vya mafunzo ya ufundi.",
          location: "Mji wa Hola",
          votes: 203,
          status: "active"
        },
        {
          id: 4,
          title: "Kinga ya Malaria",
          category: "health",
          description: "Uvumbuzi mkubwa wa malaria kutokana na maji yaliyotulia baada ya mafuriko ya Mto Tana.",
          location: "Delta ya Tana",
          votes: 117,
          status: "progress"
        },
        {
          id: 5,
          title: "Muunganiko wa Kidijitali",
          category: "education",
          description: "Upatikanani mbaya wa mtandao unaozuia elimu mtandaoni na fursa za biashara.",
          location: "Wilaya ya Bangali",
          votes: 76,
          status: "active"
        },
        {
          id: 6,
          title: "Vifaa vya Usafi",
          category: "water",
          description: "Ukosefu wa vyoo vya kutosha katika maeneo ya umma na shule husababisha matatizo ya afya.",
          location: "Kata ya Madogo",
          votes: 94,
          status: "urgent"
        }
      ],
      formTitle: "Ripoti Changamoto Mpya",
      formFields: {
        title: "Jina la Changamoto",
        category: "Jamii",
        description: "Maelezo",
        location: "Mahali katika Tana River",
        submit: "Wasilisha Changamoto"
      },
      language: "EN",
      submitButton: "Wasilisha Changamoto",
      mapTitle: "Ramani ya Changamoto Tana River",
      filterText: "Chuja kwa jamii:",
      statsTitle: "Takwimu za Changamoto",
      stats: [
        { value: "42", label: "Ripoti Zilizo Hai" },
        { value: "18", label: "Zinakwenda" },
        { value: "6", label: "Zimetatuliwa" },
        { value: "3.2k", label: "Kura za Jamii" }
      ]
    }
  };

  const current = content[language];
  const filteredChallenges = activeCategory === 'all' 
    ? current.challenges 
    : current.challenges.filter(challenge => challenge.category === activeCategory);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(current.formFields.submit + " - " + formData.title);
    setFormData({ title: '', category: '', description: '', location: '' });
    setShowForm(false);
  };

  const getStatusColor = (status) => {
    switch(status) {
      case 'urgent': return 'bg-red-100 text-red-800 border-red-300';
      case 'progress': return 'bg-yellow-100 text-yellow-800 border-yellow-300';
      default: return 'bg-blue-100 text-blue-800 border-blue-300';
    }
  };

  const getStatusText = (status) => {
    if (language === 'en') {
      switch(status) {
        case 'urgent': return 'Urgent Attention';
        case 'progress': return 'In Progress';
        default: return 'Active Report';
      }
    } else {
      switch(status) {
        case 'urgent': return 'Uangalizi wa Haraka';
        case 'progress': return 'Inaendelea';
        default: return 'Ripoti hai';
      }
    }
  };

  return (
    <motion.div
                  initial={{ opacity: 0, y: 20 }}       // Start invisible and slightly below
                  animate={{ opacity: 1, y: 0 }}        // End visible and in position
                  transition={{ duration: 1 }}          // Animation duration = 1 second
                >
            
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-cyan-100">
      <div className="max-w-6xl mx-auto px-4 py-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-teal-900 mb-2">
              {current.title}
            </h1>
            <p className="text-lg text-teal-800 max-w-3xl">
              {current.subtitle}
            </p>
          </div>
          <button
            onClick={() => setLanguage(language === 'en' ? 'sw' : 'en')}
            className="mt-4 md:mt-0 px-6 py-2 bg-teal-700 hover:bg-teal-800 text-white font-medium rounded-full transition duration-300 flex items-center shadow-lg"
          >
            {current.language}
          </button>
        </div>

        {/* Introduction */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-10 border-l-4 border-teal-600">
          <p className="text-lg text-gray-700 mb-4">
            {current.intro}
          </p>
          
          {/* Stats Overview */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-teal-800 mb-4">{current.statsTitle}</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {current.stats.map((stat, index) => (
                <div key={index} className="bg-teal-50 rounded-lg p-4 text-center border border-teal-200">
                  <div className="text-3xl font-bold text-teal-800">{stat.value}</div>
                  <div className="text-teal-700">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Categories Filter */}
        <div className="mb-10">
          <h3 className="text-xl font-semibold text-teal-800 mb-4">{current.filterText}</h3>
          <div className="flex flex-wrap gap-3">
            {current.categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center px-4 py-2 rounded-full transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-teal-700 text-white shadow-md'
                    : 'bg-white text-teal-800 border border-teal-300 hover:bg-teal-100'
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Challenges List */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredChallenges.map((challenge) => (
                <div 
                  key={challenge.id}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="p-5">
                    <div className="flex justify-between items-start">
                      <h3 className="text-xl font-bold text-teal-800 mb-2">{challenge.title}</h3>
                      <span className={`px-3 py-1 text-xs rounded-full border ${getStatusColor(challenge.status)}`}>
                        {getStatusText(challenge.status)}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-3">{challenge.description}</p>
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <FaMapMarkerAlt className="mr-1 text-teal-600" />
                      {challenge.location}
                    </div>
                    <div className="flex justify-between items-center">
                      <button className="text-teal-700 font-medium hover:text-teal-900 transition-colors">
                        {language === 'en' ? 'View Details →' : 'Angalia Maelezo →'}
                      </button>
                      <div className="flex items-center">
                        <span className="text-teal-700 font-medium mr-2">{challenge.votes}</span>
                        <span className="text-gray-500">{language === 'en' ? 'votes' : 'kura'}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Map Visualization and Submit Form */}
          <div className="space-y-8">
            {/* Map Visualization */}
            <div className="bg-white rounded-xl shadow-lg p-6 h-96 relative overflow-hidden">
              <h3 className="text-xl font-semibold text-teal-800 mb-4">{current.mapTitle}</h3>
              
              {/* Simplified Tana River Map Visualization */}
              <div className="relative h-64 w-full bg-teal-50 rounded-lg border border-teal-200">
                <div className="absolute w-full h-full bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Tana_River_County.svg/1200px-Tana_River_County.svg.png')] bg-contain bg-center bg-no-repeat opacity-20"></div>
                
                {/* Challenge Markers */}
                <div className="absolute top-1/4 left-1/4 w-6 h-6 bg-red-500 rounded-full border-2 border-white shadow-lg cursor-pointer"></div>
                <div className="absolute top-1/3 left-2/3 w-6 h-6 bg-yellow-500 rounded-full border-2 border-white shadow-lg cursor-pointer"></div>
                <div className="absolute top-2/3 left-1/3 w-6 h-6 bg-blue-500 rounded-full border-2 border-white shadow-lg cursor-pointer"></div>
                <div className="absolute top-3/4 left-3/4 w-6 h-6 bg-orange-500 rounded-full border-2 border-white shadow-lg cursor-pointer"></div>
                
                <div className="absolute bottom-4 left-0 right-0 text-center">
                  <div className="inline-flex bg-black bg-opacity-70 text-white px-4 py-2 rounded-full text-sm">
                    {language === 'en' 
                      ? 'Interactive map showing challenge locations' 
                      : 'Ramani inayoonyesha maeneo yenye changamoto'}
                  </div>
                </div>
              </div>
              
              <div className="mt-4 flex justify-center">
                <div className="flex items-center mr-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full mr-1"></div>
                  <span className="text-xs">{language === 'en' ? 'Water Issues' : 'Maji'}</span>
                </div>
                <div className="flex items-center mr-4">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full mr-1"></div>
                  <span className="text-xs">{language === 'en' ? 'Education' : 'Elimu'}</span>
                </div>
                <div className="flex items-center mr-4">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-1"></div>
                  <span className="text-xs">{language === 'en' ? 'Employment' : 'Ajira'}</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-orange-500 rounded-full mr-1"></div>
                  <span className="text-xs">{language === 'en' ? 'Health' : 'Afya'}</span>
                </div>
              </div>
            </div>

            {/* Submit Challenge Button */}
            {!showForm && (
              <button
                onClick={() => setShowForm(true)}
                className="w-full py-4 bg-teal-700 hover:bg-teal-800 text-white font-bold rounded-xl flex items-center justify-center transition duration-300 shadow-lg"
              >
                <FaPlus className="mr-2" />
                {language === 'en' ? 'Report a Community Challenge' : 'Ripoti Changamoto ya Jamii'}
              </button>
            )}

            {/* Challenge Submission Form */}
            {showForm && (
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-semibold text-teal-800 mb-4">{current.formTitle}</h3>
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label className="block text-gray-700 mb-2">{current.formFields.title}</label>
                    <input
                      type="text"
                      name="title"
                      value={formData.title}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                      required
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label className="block text-gray-700 mb-2">{current.formFields.category}</label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                      required
                    >
                      <option value="">{language === 'en' ? 'Select a category' : 'Chagua jamii'}</option>
                      {current.categories
                        .filter(cat => cat.id !== 'all')
                        .map(category => (
                          <option key={category.id} value={category.id}>
                            {category.name}
                          </option>
                        ))}
                    </select>
                  </div>
                  
                  <div className="mb-4">
                    <label className="block text-gray-700 mb-2">{current.formFields.location}</label>
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                      required
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label className="block text-gray-700 mb-2">{current.formFields.description}</label>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      rows="3"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                      required
                    ></textarea>
                  </div>
                  
                  <div className="flex gap-3">
                    <button
                      type="submit"
                      className="flex-1 px-4 py-2 bg-teal-700 hover:bg-teal-800 text-white font-medium rounded-lg transition duration-300"
                    >
                      {current.submitButton}
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowForm(false)}
                      className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium rounded-lg transition duration-300"
                    >
                      {language === 'en' ? 'Cancel' : 'Ghairi'}
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-12 text-center text-gray-600">
          <p>
            {language === 'en' 
              ? 'Tana River Youth Assembly · Community Challenges Platform'
              : 'Bunge la Vijana Tana River · Jukwaa la Changamoto za Jamii'}
          </p>
          <p className="mt-2 text-sm">
            {language === 'en' 
              ? 'Reported challenges are reviewed weekly by county officials'
              : 'Changamoto zilizoripotiwa hukaguliwa kila wiki na maafisa wa kaunti'}
          </p>
        </div>
      </div>
    </div>
    </motion.div>
  );
};

export default Challenges;