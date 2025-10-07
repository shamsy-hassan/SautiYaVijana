import React, { useState } from 'react';
import { FaVoteYea, FaFileAlt, FaHandsHelping, FaComments, FaUsers, FaBalanceScale } from 'react-icons/fa';
import { FiDownload, FiGlobe } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Rights = () => {
  const [language, setLanguage] = useState('en'); // 'en' or 'sw'

  // Function to handle Constitution download - USING LOCAL FILES
  const handleDownloadConstitution = () => {
    // Use your local PDF files in the public folder
    const localPdfPaths = {
      en: '/pdfs/constitution-en.pdf',
      sw: '/pdfs/constitution-sw.pdf'
    };

    const filename = language === 'en' 
      ? 'Constitution_of_Kenya_2010.pdf' 
      : 'Katiba_ya_Kenya_2010.pdf';

    // Create a temporary link element
    const link = document.createElement('a');
    link.href = localPdfPaths[language];
    link.download = filename;
    
    // Append to body, click, and remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const content = {
    en: {
      title: "Civic Rights",
      subtitle: "Your Constitutional Rights as a Kenyan Citizen",
      intro: "Learn about your legal and civic rights as a resident of Tana River County. The Constitution of Kenya 2010 guarantees fundamental rights and freedoms for all citizens. Download the full constitution to understand your rights:",
      rights: [
        {
          icon: <FaVoteYea className="text-3xl text-green-600" />,
          title: "Right to Vote",
          description: "Register and participate in elections at county and national levels - Article 38"
        },
        {
          icon: <FaFileAlt className="text-3xl text-green-600" />,
          title: "Access to Information",
          description: "Request public records and government documents - Article 35"
        },
        {
          icon: <FaHandsHelping className="text-3xl text-green-600" />,
          title: "Public Participation",
          description: "Attend and contribute to county assembly meetings - Article 196"
        },
        {
          icon: <FaComments className="text-3xl text-green-600" />,
          title: "Freedom of Expression",
          description: "Express opinions on governance without fear of retaliation - Article 33"
        },
        {
          icon: <FaUsers className="text-3xl text-green-600" />,
          title: "Assembly & Association",
          description: "Form community groups and hold peaceful gatherings - Article 36"
        },
        {
          icon: <FaBalanceScale className="text-3xl text-green-600" />,
          title: "Legal Redress",
          description: "Seek justice through Tana River County courts - Article 48"
        }
      ],
      tanaSpecific: [
        "Right to access clean water resources - Article 43",
        "Participation in flood management programs - Article 69",
        "Land ownership rights in riverine areas - Article 40",
        "Cultural preservation rights for local communities - Article 11"
      ],
      resources: "Constitutional Resources for Tana River Residents:",
      button: "Download Constitution of Kenya 2010 (PDF)",
      language: "SW",
      constitutionalReference: "Based on the Constitution of Kenya 2010, Chapter Four - The Bill of Rights"
    },
    sw: {
      title: "Haki za Kiraia",
      subtitle: "Haki Zako Kikatiba Kama Mwananchi wa Kenya",
      intro: "Jifunze kuhusu haki zako za kisheria na kiraia kama mkaazi wa Kaunti ya Tana River. Katiba ya Kenya 2010 inahakikisha haki za msingi na uhuru kwa wananchi wote. Pakua Katiba kamili kuelewa haki zako:",
      rights: [
        {
          icon: <FaVoteYea className="text-3xl text-green-600" />,
          title: "Haki ya Kupiga Kura",
          description: "Jisajili na shiriki katika uchaguzi ngazi ya kaunti na kitaifa - Kifungu cha 38"
        },
        {
          icon: <FaFileAlt className="text-3xl text-green-600" />,
          title: "Upataji wa Taarifa",
          description: "Omba rekodi za umma na nyaraka za serikali - Kifungu cha 35"
        },
        {
          icon: <FaHandsHelping className="text-3xl text-green-600" />,
          title: "Ushiriki wa Umma",
          description: "Hudhuria na changia mikutano ya baraza la kaunti - Kifungu cha 196"
        },
        {
          icon: <FaComments className="text-3xl text-green-600" />,
          title: "Uhuru wa Mawazo",
          description: "Toa maoni kuhusu utawala bila woga - Kifungu cha 33"
        },
        {
          icon: <FaUsers className="text-3xl text-green-600" />,
          title: "Kusanyiko na Chama",
          description: "Undaa vikundi vya kijamii na fanya mikusanyiko ya amani - Kifungu cha 36"
        },
        {
          icon: <FaBalanceScale className="text-3xl text-green-600" />,
          title: "Haki ya Kisheria",
          description: "Tafuta haki kupitia mahakama za Kaunti ya Tana River - Kifungu cha 48"
        }
      ],
      tanaSpecific: [
        "Haki ya kupata maji safi - Kifungu cha 43",
        "Ushiriki katika programu za udhibiti wa mafuriko - Kifungu cha 69",
        "Haki za umiliki wa ardhi maeneo ya bonde la mto - Kifungu cha 40",
        "Haki za uhifadhi wa tamaduni za jamii za kienyeji - Kifungu cha 11"
      ],
      resources: "Rasilimali za Kikatiba kwa Wakazi wa Tana River:",
      button: "Pakua Katiba ya Kenya 2010 (PDF)",
      language: "EN",
      constitutionalReference: "Kulingana na Katiba ya Kenya 2010, Sura ya Nne - Sheria ya Haki za Binadamu"
    }
  };

  const current = content[language];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-green-700 to-emerald-700 text-white">
          <div className="max-w-6xl mx-auto px-4 py-16 md:py-24">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
              <div className="max-w-2xl">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  {current.title}
                </h1>
                <p className="text-xl text-green-100 mb-4">
                  {current.subtitle}
                </p>
                <p className="text-green-200 text-sm mb-6 italic">
                  {current.constitutionalReference}
                </p>
                <div className="flex flex-wrap gap-3">
                  <button 
                    onClick={handleDownloadConstitution}
                    className="px-6 py-3 bg-white text-green-800 font-bold rounded-lg flex items-center gap-2 shadow-lg hover:bg-green-100 transition-all duration-300"
                  >
                    <FiDownload className="text-lg" />
                    {current.button}
                  </button>
                  <button
                    onClick={() => setLanguage(language === 'en' ? 'sw' : 'en')}
                    className="px-6 py-3 bg-emerald-800 hover:bg-emerald-900 text-white font-bold rounded-lg flex items-center gap-2 shadow-lg transition-all duration-300"
                  >
                    <FiGlobe className="text-lg" />
                    {current.language}
                  </button>
                </div>
              </div>
              <div className="mt-8 md:mt-0">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <div className="grid grid-cols-2 gap-4">
                    {current.rights.slice(0, 4).map((right, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="bg-green-600 rounded-full p-2">
                          {right.icon}
                        </div>
                        <span className="font-medium text-sm">{right.title}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto px-4 py-12">
          {/* Introduction */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-12 border-l-8 border-green-600 relative overflow-hidden">
            <div className="absolute -top-16 -right-16 w-48 h-48 bg-green-100 rounded-full opacity-30"></div>
            <div className="relative z-10">
              <p className="text-lg text-gray-700 mb-6">
                {current.intro}
              </p>
              <div className="mt-8">
                <h2 className="text-2xl font-bold text-green-800 mb-4">
                  {language === 'en' 
                    ? "Tana River Specific Constitutional Rights:" 
                    : "Haki Maalum za Kikatiba za Tana River:"}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {current.tanaSpecific.map((right, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
                      <div className="bg-green-600 text-white rounded-full p-1.5 mt-0.5">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="text-gray-700 font-medium">{right}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Rights Grid */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-green-800 mb-12">
              {language === 'en' 
                ? "Explore Your Constitutional Rights" 
                : "Chunguza Haki Zako za Kikatiba"}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {current.rights.map((right, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-green-100 group"
                >
                  <div className="p-6">
                    <div className="mb-4">{right.icon}</div>
                    <h3 className="text-xl font-bold text-green-800 mb-3">{right.title}</h3>
                    <p className="text-gray-600 mb-5 text-sm">{right.description}</p>
                    <button className="text-green-700 font-medium hover:text-green-900 transition-colors flex items-center gap-2 group-hover:translate-x-1 transition-transform">
                      {language === 'en' ? 'Learn more' : 'Jifunze zaidi'}
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Resources Section */}
          <div className="bg-gradient-to-br from-green-800 to-emerald-900 text-white rounded-3xl p-8 md:p-12 mb-16 shadow-2xl">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">{current.resources}</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                <div className="bg-white/10 backdrop-blur-sm p-5 rounded-xl border border-white/20 hover:border-white/40 transition-all">
                  <h3 className="font-bold text-xl mb-3">
                    {language === 'en' ? 'Bill of Rights' : 'Sheria ya Haki'}
                  </h3>
                  <p className="text-green-100 text-sm mb-4">
                    {language === 'en' 
                      ? 'Chapter Four - Fundamental Rights & Freedoms' 
                      : 'Sura ya Nne - Haki za Msingi na Uhuru'}
                  </p>
                  <button className="text-sm text-yellow-300 font-medium hover:text-yellow-200 transition-colors">
                    {language === 'en' ? 'Read Articles 19-59 →' : 'Soma Kifungu cha 19-59 →'}
                  </button>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-5 rounded-xl border border-white/20 hover:border-white/40 transition-all">
                  <h3 className="font-bold text-xl mb-3">
                    {language === 'en' ? 'County Governance' : 'Utawala wa Kaunti'}
                  </h3>
                  <p className="text-green-100 text-sm mb-4">
                    {language === 'en' 
                      ? 'Chapter Eleven - Devolved Government' 
                      : 'Sura ya Kumi na Moja - Serikali Zilizotawanyika'}
                  </p>
                  <button className="text-sm text-yellow-300 font-medium hover:text-yellow-200 transition-colors">
                    {language === 'en' ? 'View Chapter 11 →' : 'Tazama Sura ya 11 →'}
                  </button>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-5 rounded-xl border border-white/20 hover:border-white/40 transition-all">
                  <h3 className="font-bold text-xl mb-3">
                    {language === 'en' ? 'Land & Environment' : 'Ardhi na Mazingira'}
                  </h3>
                  <p className="text-green-100 text-sm mb-4">
                    {language === 'en' 
                      ? 'Chapter Five - Land & Natural Resources' 
                      : 'Sura ya Tano - Ardhi na Rasilimali za Asili'}
                  </p>
                  <button className="text-sm text-yellow-300 font-medium hover:text-yellow-200 transition-colors">
                    {language === 'en' ? 'Explore Rights →' : 'Chunguza Haki →'}
                  </button>
                </div>
              </div>
              <button 
                onClick={handleDownloadConstitution}
                className="px-8 py-4 bg-yellow-500 hover:bg-yellow-600 text-green-900 font-bold rounded-xl transition duration-300 shadow-lg flex items-center gap-2 mx-auto"
              >
                <FiDownload className="text-xl" />
                {current.button}
              </button>
              <p className="text-center text-green-200 mt-4 text-sm">
                {language === 'en' 
                  ? 'Official PDF from Kenya Law Reform Commission'
                  : 'PDF Rasmi kutoka Tume ya Ukaguzi wa Sheria za Kenya'}
              </p>
            </div>
          </div>

          {/* Footer Note */}
          <div className="mt-12 text-center text-gray-600">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-1 bg-green-600 rounded-full"></div>
            </div>
            <p className="font-medium">
              {language === 'en' 
                ? 'Tana River County Government · Department of Civic Education'
                : 'Serikali ya Kaunti ya Tana River · Idara ya Elimu ya Kiraia'}
            </p>
            <p className="mt-4 text-sm max-w-2xl mx-auto bg-green-50 p-4 rounded-lg">
              {language === 'en' 
                ? 'Constitutional Rights Hotline: 0800-722-008 | Email: rights@tanariver.go.ke'
                : 'Simu ya Haki za Kikatiba: 0800-722-008 | Barua pepe: rights@tanariver.go.ke'}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Rights;