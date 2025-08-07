// src/pages/projects/DigitalLiteracy.jsx
import React, { useState } from 'react';
import { FaLaptop, FaMobileAlt, FaWifi, FaShieldAlt, FaGraduationCap, FaChartLine, FaUsers, FaLightbulb } from 'react-icons/fa';
import { motion } from 'framer-motion';
const DigitalLiteracy = () => {
  const [activeProgram, setActiveProgram] = useState('bootcamps');
  const [showResource, setShowResource] = useState(false);
  
  const testimonials = [
    {
      id: 1,
      name: "Amina Hassan",
      role: "Small Business Owner, Garsen",
      quote: "After the mobile app training, I now manage my shop inventory digitally. My profits have increased by 30% and I can track everything from my phone!",
      image: "amina.jpg"
    },
    {
      id: 2,
      name: "Juma Bakari",
      role: "Student, Kipini Secondary",
      quote: "The coding bootcamp opened my eyes to tech careers. I'm now learning web development and want to create apps that solve local problems.",
      image: "juma.jpg"
    },
    {
      id: 3,
      name: "Grace Wanjiku",
      role: "Community Health Worker, Hola",
      quote: "Digital literacy training helped me use health apps to track patient records. Now I serve more people efficiently, even in remote areas.",
      image: "grace.jpg"
    }
  ];

  const resources = [
    { title: "Basic Internet Safety Guide", icon: <FaShieldAlt /> },
    { title: "Mobile Banking Tutorial", icon: <FaMobileAlt /> },
    { title: "Digital Farming Handbook", icon: <FaChartLine /> },
    { title: "Online Business Setup Guide", icon: <FaLaptop /> }
  ];

  const stats = [
    { value: "42%", label: "Internet Access Growth (last 2 years)", icon: <FaWifi /> },
    { value: "1,850+", label: "Youth Trained in Digital Skills", icon: <FaGraduationCap /> },
    { value: "68%", label: "Mobile Phone Adoption Rate", icon: <FaMobileAlt /> },
    { value: "23", label: "Community Tech Hubs Established", icon: <FaUsers /> }
  ];

  const toggleResource = () => {
    setShowResource(!showResource);
  };

  return (
    <motion.div
                  initial={{ opacity: 0, y: 20 }}       // Start invisible and slightly below
                  animate={{ opacity: 1, y: 0 }}        // End visible and in position
                  transition={{ duration: 1 }}          // Animation duration = 1 second
                >
            
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-green-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-700 to-teal-800 py-24">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Digital Literacy for Tana River
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Bridging the digital divide through hands-on coding bootcamps, mobile-app tutorials, 
            and safe internet practices for our communities
          </p>
          
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <button 
              onClick={toggleResource}
              className="px-6 py-3 bg-amber-400 hover:bg-amber-500 text-blue-900 font-bold rounded-lg transition duration-300 shadow-lg flex items-center gap-2"
            >
              <FaGraduationCap />
              Free Learning Resources
            </button>
            <button className="px-6 py-3 bg-white hover:bg-blue-100 text-blue-800 font-bold rounded-lg transition duration-300 shadow-lg flex items-center gap-2">
              <FaUsers />
              Join Our Next Bootcamp
            </button>
          </div>
        </div>
      </div>

      {/* Resource Popup */}
      {showResource && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-2xl w-full p-8 relative">
            <button 
              onClick={toggleResource}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
            
            <h2 className="text-2xl font-bold text-blue-800 mb-6">Free Digital Learning Resources</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {resources.map((resource, index) => (
                <div key={index} className="border border-blue-200 rounded-xl p-6 hover:shadow-md transition">
                  <div className="text-blue-600 text-3xl mb-3">{resource.icon}</div>
                  <h3 className="font-bold text-lg text-blue-900 mb-2">{resource.title}</h3>
                  <button className="mt-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition text-sm">
                    Download PDF
                  </button>
                </div>
              ))}
            </div>
            
            <div className="mt-8 bg-blue-50 p-4 rounded-lg">
              <h3 className="font-bold text-blue-800 mb-2">Need More Help?</h3>
              <p className="text-blue-700 mb-3">Visit one of our 23 community tech hubs across Tana River for in-person support.</p>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition flex items-center gap-2">
                <FaUsers /> Find Nearest Tech Hub
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Introduction */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-blue-800 mb-6">
              Connecting Tana River to the Digital World
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              In Tana River, where internet access was once rare and digital skills were limited, 
              we're leading a technological revolution. Our digital literacy programs are designed 
              specifically for our community's unique context - respecting our cultural values while 
              embracing the opportunities of the digital age.
            </p>
            <p className="text-lg text-gray-700">
              We focus on practical skills that make an immediate difference: mobile banking for 
              farmers, digital record-keeping for small businesses, online market access for artisans, 
              and safe internet practices for families.
            </p>
          </div>
          <div className="md:w-1/2">
            <div className="relative">
              <div className="bg-blue-200 rounded-xl w-full h-80 flex items-center justify-center border-2 border-dashed">
                <span className="text-blue-700">Community Tech Hub Image</span>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-amber-400 rounded-lg p-4 shadow-lg w-2/3">
                <div className="flex items-center gap-3">
                  <FaChartLine className="text-2xl text-blue-900" />
                  <div>
                    <p className="font-bold text-blue-900">68% increase</p>
                    <p className="text-blue-800 text-sm">in digital skills adoption since 2022</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-blue-100 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-800 text-center mb-12">
            Our Digital Progress in Tana River
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition">
                <div className="text-blue-600 text-3xl mb-3 flex justify-center">
                  {stat.icon}
                </div>
                <p className="text-3xl font-bold text-blue-800">{stat.value}</p>
                <p className="text-blue-700">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Programs Section */}
      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-800 text-center mb-4">
            Our Digital Literacy Programs
          </h2>
          <p className="text-lg text-gray-700 text-center mb-12 max-w-3xl mx-auto">
            Practical, hands-on training designed for Tana River's unique needs and context
          </p>
          
          {/* Program Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {[
              { id: 'bootcamps', label: 'Coding Bootcamps', icon: <FaLaptop /> },
              { id: 'mobile', label: 'Mobile App Training', icon: <FaMobileAlt /> },
              { id: 'safety', label: 'Internet Safety', icon: <FaShieldAlt /> },
              { id: 'business', label: 'Digital Business', icon: <FaChartLine /> }
            ].map((program) => (
              <button
                key={program.id}
                onClick={() => setActiveProgram(program.id)}
                className={`px-6 py-3 rounded-full flex items-center gap-2 transition-all ${
                  activeProgram === program.id 
                    ? 'bg-blue-700 text-white shadow-lg' 
                    : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
                }`}
              >
                <span>{program.icon}</span>
                {program.label}
              </button>
            ))}
          </div>
          
          {/* Program Details */}
          <div className="bg-blue-50 rounded-2xl shadow-inner p-8">
            {activeProgram === 'bootcamps' && (
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-bold text-blue-800 mb-4">Community Coding Bootcamps</h3>
                  <p className="text-gray-700 mb-4">
                    8-week intensive programs teaching practical coding skills to youth aged 16-30. 
                    Our curriculum focuses on web development, Python programming, and creating solutions 
                    for local challenges.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-white p-4 rounded-lg border border-blue-200">
                      <h4 className="font-bold text-blue-800 mb-2">Beginner Track</h4>
                      <ul className="text-sm text-gray-700">
                        <li>• HTML/CSS fundamentals</li>
                        <li>• Basic JavaScript</li>
                        <li>• Introduction to Python</li>
                      </ul>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-blue-200">
                      <h4 className="font-bold text-blue-800 mb-2">Advanced Track</h4>
                      <ul className="text-sm text-gray-700">
                        <li>• Web app development</li>
                        <li>• Database integration</li>
                        <li>• Mobile-responsive design</li>
                      </ul>
                    </div>
                  </div>
                  <button className="px-6 py-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition flex items-center gap-2">
                    <FaGraduationCap /> Apply for Next Bootcamp
                  </button>
                </div>
                <div className="md:w-1/3">
                  <div className="bg-blue-200 rounded-xl w-full h-64 flex items-center justify-center border-2 border-dashed">
                    <span className="text-blue-700">Bootcamp Image</span>
                  </div>
                </div>
              </div>
            )}
            
            {activeProgram === 'mobile' && (
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-bold text-blue-800 mb-4">Mobile App Mastery</h3>
                  <p className="text-gray-700 mb-4">
                    Practical training on using smartphones for daily life and business. 
                    We teach everything from mobile banking to agricultural apps designed 
                    for Tana River's unique environment.
                  </p>
                  <div className="mb-6">
                    <h4 className="font-bold text-blue-800 mb-2">Key Modules:</h4>
                    <div className="flex flex-wrap gap-2">
                      {['Mobile Banking', 'Health Apps', 'Agricultural Tools', 'Education Resources', 'Business Management', 'Communication Tools'].map((module, i) => (
                        <span key={i} className="bg-white px-3 py-1 rounded-full text-sm border border-blue-200">
                          {module}
                        </span>
                      ))}
                    </div>
                  </div>
                  <button className="px-6 py-3 bg-amber-500 text-blue-900 rounded-lg hover:bg-amber-600 transition flex items-center gap-2">
                    <FaMobileAlt /> Download Mobile Guides
                  </button>
                </div>
                <div className="md:w-1/3">
                  <div className="bg-blue-200 rounded-xl w-full h-64 flex items-center justify-center border-2 border-dashed">
                    <span className="text-blue-700">Mobile Training Image</span>
                  </div>
                </div>
              </div>
            )}
            
            {/* Other programs would follow similar structure */}
          </div>
        </div>
      </div>

      {/* Success Stories */}
      <div className="py-16 bg-gradient-to-br from-cyan-50 to-green-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-800 text-center mb-4">
            Digital Success Stories from Tana River
          </h2>
          <p className="text-lg text-gray-700 text-center mb-12 max-w-3xl mx-auto">
            How digital literacy is transforming lives across our communities
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map(person => (
              <div key={person.id} className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-[1.02]">
                <div className="h-48 bg-blue-200 border-2 border-dashed"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-blue-800">{person.name}</h3>
                  <p className="text-amber-600 font-medium mb-3">{person.role}</p>
                  <p className="text-gray-700 italic mb-4">"{person.quote}"</p>
                  <button className="text-blue-700 font-medium hover:text-blue-900 transition flex items-center gap-1">
                    Read full story <span>→</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Community Tech Hubs */}
      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="md:w-1/2">
              <div className="bg-blue-200 rounded-xl w-full h-96 flex items-center justify-center border-2 border-dashed">
                <span className="text-blue-700">Tech Hub Image</span>
              </div>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-blue-800 mb-6">
                Our Community Tech Hubs
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                We've established 23 technology access points across Tana River where community members can:
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <FaLightbulb className="text-amber-500 mt-1 mr-2 flex-shrink-0" />
                  <span>Access computers and free internet</span>
                </li>
                <li className="flex items-start">
                  <FaGraduationCap className="text-blue-600 mt-1 mr-2 flex-shrink-0" />
                  <span>Attend free digital literacy workshops</span>
                </li>
                <li className="flex items-start">
                  <FaShieldAlt className="text-green-600 mt-1 mr-2 flex-shrink-0" />
                  <span>Get help with online services and safety</span>
                </li>
                <li className="flex items-start">
                  <FaChartLine className="text-teal-600 mt-1 mr-2 flex-shrink-0" />
                  <span>Receive support for digital business setup</span>
                </li>
              </ul>
              <button className="px-6 py-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition flex items-center gap-2">
                <FaUsers /> Find Your Nearest Hub
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-16 bg-gradient-to-r from-blue-800 to-teal-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Join Tana River's Digital Revolution
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            Whether you're new to technology or looking to enhance your skills, we have a program for you
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-8 py-3 bg-amber-400 hover:bg-amber-500 text-blue-900 font-bold rounded-lg transition shadow-lg flex items-center gap-2">
              <FaGraduationCap /> Register for Training
            </button>
            <button className="px-8 py-3 bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-800 font-bold rounded-lg transition flex items-center gap-2">
              <FaUsers /> Volunteer as Trainer
            </button>
            <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition flex items-center gap-2">
              <FaLaptop /> Donate Devices
            </button>
          </div>
        </div>
      </div>
    </div>
    </motion.div>
  );
};

export default DigitalLiteracy;