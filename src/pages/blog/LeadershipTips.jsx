// src/pages/blog/LeadershipTips.jsx
import React, { useState } from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { FaSearch, FaCalendarAlt, FaUser, FaShareAlt, FaArrowRight, FaBookOpen, FaComments, FaLightbulb, FaHandshake } from 'react-icons/fa';

const LeadershipTips = () => {
  const [language, setLanguage] = useState('en'); // 'en' or 'sw'
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  
  // Content in both languages
  const content = {
    en: {
      title: "Leadership Development for Tana River",
      subtitle: "Empowering Community Leaders in Coastal Kenya",
      intro: "Practical leadership strategies tailored for Tana River County. Learn from local leaders and experts about effective community engagement, conflict resolution, and sustainable development.",
      searchPlaceholder: "Search leadership topics...",
      categories: [
        { id: 'all', name: "All Topics" },
        { id: 'community', name: "Community Engagement" },
        { id: 'youth', name: "Youth Leadership" },
        { id: 'conflict', name: "Conflict Resolution" },
        { id: 'governance', name: "Local Governance" }
      ],
      articles: [
        {
          id: 1,
          title: "Building Trust in Multi-Ethnic Communities",
          excerpt: "How to foster unity among diverse ethnic groups in Tana River through inclusive leadership practices.",
          author: "Fatuma Ali",
          date: "2023-10-15",
          readTime: "5 min read",
          category: "community",
          featured: true
        },
        {
          id: 2,
          title: "Youth Mobilization Strategies",
          excerpt: "Engaging young people in community development projects through effective communication and empowerment.",
          author: "Ahmed Mohammed",
          date: "2023-09-28",
          readTime: "4 min read",
          category: "youth"
        },
        {
          id: 3,
          title: "Mediating Resource Conflicts",
          excerpt: "Traditional approaches to resolving water and land disputes in Tana Delta communities.",
          author: "Grace Mwamburi",
          date: "2023-09-12",
          readTime: "6 min read",
          category: "conflict"
        },
        {
          id: 4,
          title: "Effective Town Hall Meetings",
          excerpt: "How to organize and facilitate productive community consultations in rural settings.",
          author: "John Katana",
          date: "2023-08-30",
          readTime: "3 min read",
          category: "governance"
        },
        {
          id: 5,
          title: "Women in Local Leadership",
          excerpt: "Breaking barriers and increasing female participation in Tana River county governance.",
          author: "Amina Said",
          date: "2023-08-15",
          readTime: "7 min read",
          category: "community"
        },
        {
          id: 6,
          title: "Sustainable Project Management",
          excerpt: "Ensuring community projects continue beyond initial funding cycles through local ownership.",
          author: "David Wario",
          date: "2023-07-22",
          readTime: "5 min read",
          category: "governance"
        }
      ],
      popularTopics: [
        "Pastoralist Leadership",
        "Flood Management Committees",
        "Intergenerational Dialogue",
        "Digital Tools for Community Organizing",
        "Advocacy in County Government"
      ],
      upcomingEvents: [
        { title: "Youth Leadership Workshop", date: "2023-11-10", location: "Hola Town Hall" },
        { title: "Women in Governance Forum", date: "2023-11-25", location: "Garsen Community Center" },
        { title: "Conflict Mediation Training", date: "2023-12-05", location: "Kipini" }
      ],
      language: "SW"
    },
    sw: {
      title: "Vidokezo vya Uongozi kwa Tana River",
      subtitle: "Kuimarisha Viongozi wa Jamii katika Pwani ya Kenya",
      intro: "Mbinu praktiki za uongozi zilizoundwa kwa Kaunti ya Tana River. Jifunze kutoka kwa viongozi wa kienyeji na wataalam kuhusu ushiriki bora wa jamii, utatuzi wa migogoro, na maendeleo endelevu.",
      searchPlaceholder: "Tafuta mada za uongozi...",
      categories: [
        { id: 'all', name: "Mada Zote" },
        { id: 'community', name: "Ushiriki wa Jamii" },
        { id: 'youth', name: "Uongozi wa Vijana" },
        { id: 'conflict', name: "Utatuzi wa Migogoro" },
        { id: 'governance', name: "Utawala wa Kienyeji" }
      ],
      articles: [
        {
          id: 1,
          title: "Kujenga Uaminifu katika Jamii za Makabila Mbalimbali",
          excerpt: "Jinsi ya kukuza umoja miongoni mwa makabila mbalimbali katika Tana River kupitia mbinu za uongozi zinazojumuisha wote.",
          author: "Fatuma Ali",
          date: "2023-10-15",
          readTime: "Dakika 5",
          category: "community",
          featured: true
        },
        {
          id: 2,
          title: "Mbinu za Hamasa za Vijana",
          excerpt: "Kuwahusisha vijana katika miradi ya maendeleo ya jamii kupitia mawasiliano bora na uwezeshaji.",
          author: "Ahmed Mohammed",
          date: "2023-09-28",
          readTime: "Dakika 4",
          category: "youth"
        },
        {
          id: 3,
          title: "Kupatanisha Migogoro ya Rasilimali",
          excerpt: "Mbinu za jadi za kutatua migogoro ya maji na ardhi katika jamii za Delta ya Tana.",
          author: "Grace Mwamburi",
          date: "2023-09-12",
          readTime: "Dakika 6",
          category: "conflict"
        },
        {
          id: 4,
          title: "Mikutano Bora ya Baraza la Jamaa",
          excerpt: "Jinsi ya kupanga na kuendesha mashauriano bora ya jamii katika mazingira ya vijijini.",
          author: "John Katana",
          date: "2023-08-30",
          readTime: "Dakika 3",
          category: "governance"
        },
        {
          id: 5,
          title: "Wanawake katika Uongozi wa Kienyeji",
          excerpt: "Kuvunja vikwazo na kuongeza ushiriki wa wanawake katika utawala wa kaunti ya Tana River.",
          author: "Amina Said",
          date: "2023-08-15",
          readTime: "Dakika 7",
          category: "community"
        },
        {
          id: 6,
          title: "Usimamizi Endelevu wa Miradi",
          excerpt: "Kuhakikisha miradi ya jamii inaendelea zaidi ya mizunguko ya awali ya ufadhili kupitia umiliki wa kienyeji.",
          author: "David Wario",
          date: "2023-07-22",
          readTime: "Dakika 5",
          category: "governance"
        }
      ],
      popularTopics: [
        "Uongozi wa Wafugaji",
        "Kamati za Udhibiti wa Mafuriko",
        "Majadiliano Kati Vizazi",
        "Zana za Kidijitali za Uandaa wa Jamii",
        "Utetezi katika Serikali ya Kaunti"
      ],
      upcomingEvents: [
        { title: "Warsha ya Uongozi wa Vijana", date: "2023-11-10", location: "Ukumbi wa Hola" },
        { title: "Kongamano la Wanawake katika Utawala", date: "2023-11-25", location: "Kituo cha Jamii cha Garsen" },
        { title: "Mafunzo ya Upataanishaji Migogoro", date: "2023-12-05", location: "Kipini" }
      ],
      language: "EN"
    }
  };

  const current = content[language];
  
  // Filter articles based on search term and category
  const filteredArticles = current.articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'all' || article.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  // Format date
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(language === 'en' ? 'en-US' : 'sw-KE', options);
  };

  // Get category icon
  const getCategoryIcon = (category) => {
    switch(category) {
      case 'community': return <FaHandshake className="text-green-600" />;
      case 'youth': return <FaComments className="text-blue-500" />;
      case 'conflict': return <FaBookOpen className="text-yellow-600" />;
      case 'governance': return <FaLightbulb className="text-purple-500" />;
      default: return <FaHandshake className="text-green-600" />;
    }
  };

  return (
    <motion.div
          initial={{ opacity: 0, y: 20 }}       // Start invisible and slightly below
          animate={{ opacity: 1, y: 0 }}        // End visible and in position
          transition={{ duration: 1 }}          // Animation duration = 1 second
        >
    
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-green-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-green-700 to-blue-800 text-white">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div className="mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{current.title}</h1>
              <p className="text-xl max-w-2xl">{current.subtitle}</p>
            </div>
            <button
              onClick={() => setLanguage(language === 'en' ? 'sw' : 'en')}
              className="px-6 py-3 bg-white text-green-800 font-bold rounded-lg hover:bg-blue-50 transition duration-300 shadow-lg flex items-center"
            >
              {current.language}
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content Column */}
          <div className="lg:col-span-3">
            {/* Intro and Search */}
            <div className="mb-12">
              <p className="text-lg text-gray-700 mb-8">{current.intro}</p>
              
              <div className="flex flex-col md:flex-row gap-4 mb-8">
                <div className="relative flex-1">
                  <input
                    type="text"
                    placeholder={current.searchPlaceholder}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-4 py-3 pl-12 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 shadow-sm"
                  />
                  <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>
                <button className="px-6 py-3 bg-green-700 hover:bg-green-800 text-white font-medium rounded-lg transition duration-300 shadow-md">
                  {language === 'en' ? 'Search' : 'Tafuta'}
                </button>
              </div>
              
              {/* Category Filters */}
              <div className="flex flex-wrap gap-3 mb-8">
                {current.categories.map(category => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`px-4 py-2 rounded-full transition-all duration-300 ${
                      activeCategory === category.id
                        ? 'bg-green-700 text-white shadow-md'
                        : 'bg-white text-gray-700 border border-gray-300 hover:bg-green-100'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
            
            {/* Featured Article */}
            {filteredArticles.filter(a => a.featured).length > 0 && (
              <div className="mb-12 bg-white rounded-2xl shadow-xl overflow-hidden border-l-8 border-green-600">
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full font-medium">
                      {language === 'en' ? 'Featured' : 'Maalum'}
                    </span>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    {filteredArticles.find(a => a.featured)?.title}
                  </h2>
                  <p className="text-lg text-gray-700 mb-6">
                    {filteredArticles.find(a => a.featured)?.excerpt}
                  </p>
                  <div className="flex flex-wrap items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center text-gray-500">
                        <FaUser className="mr-2" />
                        <span>{filteredArticles.find(a => a.featured)?.author}</span>
                      </div>
                      <div className="flex items-center text-gray-500">
                        <FaCalendarAlt className="mr-2" />
                        <span>{formatDate(filteredArticles.find(a => a.featured)?.date)}</span>
                      </div>
                      <div className="flex items-center text-gray-500">
                        <FaBookOpen className="mr-2" />
                        <span>{filteredArticles.find(a => a.featured)?.readTime}</span>
                      </div>
                    </div>
                    <button className="mt-4 md:mt-0 px-6 py-2 bg-green-700 hover:bg-green-800 text-white font-medium rounded-lg flex items-center transition duration-300">
                      {language === 'en' ? 'Read Full Article' : 'Soma Makala Kamili'} 
                      <FaArrowRight className="ml-2" />
                    </button>
                  </div>
                </div>
              </div>
            )}
            
            {/* Articles Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredArticles
                .filter(article => !article.featured)
                .map(article => (
                  <div 
                    key={article.id} 
                    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="mr-2">
                          {getCategoryIcon(article.category)}
                        </div>
                        <span className="text-sm font-medium text-gray-500">
                          {current.categories.find(cat => cat.id === article.category)?.name}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{article.title}</h3>
                      <p className="text-gray-600 mb-4">{article.excerpt}</p>
                      <div className="flex flex-wrap items-center justify-between pt-4 border-t border-gray-100">
                        <div className="flex items-center space-x-3">
                          <div className="flex items-center text-sm text-gray-500">
                            <FaUser className="mr-1" />
                            <span>{article.author}</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-500">
                            <FaCalendarAlt className="mr-1" />
                            <span>{formatDate(article.date)}</span>
                          </div>
                        </div>
                        <button className="mt-3 md:mt-0 flex items-center text-green-700 font-medium hover:text-green-900">
                          {language === 'en' ? 'Read more' : 'Soma zaidi'}
                          <FaArrowRight className="ml-1 text-sm" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
            
            {/* Empty State */}
            {filteredArticles.length === 0 && (
              <div className="text-center py-16">
                <div className="text-5xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-gray-700 mb-2">
                  {language === 'en' ? 'No articles found' : 'Hakuna makala zilizopatikana'}
                </h3>
                <p className="text-gray-600">
                  {language === 'en' 
                    ? 'Try adjusting your search or filter criteria' 
                    : 'Badilisha maneno ya utafutaji au vichujio'}
                </p>
              </div>
            )}
          </div>
          
          {/* Sidebar */}
          <div>
            {/* Popular Topics */}
            <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <FaLightbulb className="text-yellow-500 mr-2" />
                {language === 'en' ? 'Popular Leadership Topics' : 'Mada Maarufu za Uongozi'}
              </h3>
              <ul className="space-y-3">
                {current.popularTopics.map((topic, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-green-600 mr-2">•</span>
                    <span className="text-gray-700 hover:text-green-700 cursor-pointer">{topic}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Upcoming Events */}
            <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <FaCalendarAlt className="text-blue-500 mr-2" />
                {language === 'en' ? 'Upcoming Events' : 'Matukio Yajayo'}
              </h3>
              <div className="space-y-4">
                {current.upcomingEvents.map((event, index) => (
                  <div key={index} className="pb-3 border-b border-gray-100 last:border-0 last:pb-0">
                    <div className="font-medium text-gray-900">{event.title}</div>
                    <div className="flex text-sm text-gray-600 mt-1">
                      <span className="flex items-center mr-4">
                        <FaCalendarAlt className="mr-1" />
                        {formatDate(event.date)}
                      </span>
                      <span className="flex items-center">
                        <FaMapMarkerAlt className="mr-1" />
                        {event.location}
                      </span>
                    </div>
                    <button className="mt-2 text-sm text-green-700 font-medium hover:text-green-900 flex items-center">
                      {language === 'en' ? 'Register' : 'Jisajili'}
                      <FaArrowRight className="ml-1 text-xs" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Newsletter */}
            <div className="bg-gradient-to-r from-green-600 to-blue-700 rounded-xl shadow-lg p-6 text-white">
              <h3 className="text-xl font-bold mb-3">
                {language === 'en' ? 'Leadership Insights' : 'Ufahamu wa Uongozi'}
              </h3>
              <p className="mb-4">
                {language === 'en' 
                  ? 'Get monthly tips and resources for community leaders' 
                  : 'Pata vidokezo na rasilimali kila mwezi kwa viongozi wa jamii'}
              </p>
              <div className="mb-3">
                <input 
                  type="email" 
                  placeholder={language === 'en' ? 'Your email address' : 'Barua pepe yako'} 
                  className="w-full px-4 py-2 rounded-lg text-gray-900 focus:outline-none"
                />
              </div>
              <button className="w-full py-2 bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold rounded-lg transition duration-300">
                {language === 'en' ? 'Subscribe' : 'Jiandikishe'}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-800 text-white py-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <h3 className="text-xl font-bold mb-4">
              {language === 'en' 
                ? 'Tana River Leadership Initiative' 
                : 'Mpango wa Uongozi wa Tana River'}
            </h3>
            <p className="text-gray-300 max-w-2xl mx-auto mb-6">
              {language === 'en' 
                ? 'Empowering community leaders across Tana River County through training, resources, and networking opportunities since 2018.'
                : 'Kuwawezesha viongozi wa jamii katika Kaunti ya Tana River kupitia mafunzo, rasilimali, na fursa za mtandao tangu 2018.'}
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-green-700 hover:bg-green-600 text-white p-2 rounded-full transition duration-300">
                <FaShareAlt />
              </button>
              <button className="bg-blue-700 hover:bg-blue-600 text-white p-2 rounded-full transition duration-300">
                <FaComments />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </motion.div>
  );
};

export default LeadershipTips;