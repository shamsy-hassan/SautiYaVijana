// src/pages/contact/Volunteer.jsx
import React from 'react';
import { motion } from 'framer-motion';

const Volunteer = () => (
  <motion.div
                initial={{ opacity: 0, y: 20 }}       // Start invisible and slightly below
                animate={{ opacity: 1, y: 0 }}        // End visible and in position
                transition={{ duration: 1 }}          // Animation duration = 1 second
              >
          
  <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
    {/* Hero Section */}
    <div className="relative bg-green-800 text-white overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-40 z-0"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')" }}
      ></div>
      
      <div className="relative max-w-6xl mx-auto px-4 py-24 md:py-32 z-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Join Our Volunteer Community</h1>
          <p className="text-xl mb-8">Be the change you wish to see. Contribute your skills and passion to make a real difference.</p>
          <a 
            href="/contact/volunteer-form" 
            className="inline-block bg-green-500 hover:bg-green-400 text-white font-bold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105 shadow-lg"
          >
            Become a Volunteer
          </a>
        </div>
      </div>
    </div>

    {/* Volunteer Opportunities */}
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-green-800 mb-4">Make an Impact</h2>
        <div className="w-24 h-1 bg-green-500 mx-auto mb-6"></div>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Whether you're passionate about events, mentoring, or digital activism, we have a place for you in our team.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {/* Event Organizer Card */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-green-100 hover:shadow-xl transition-all duration-300">
          <div className="p-6">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-green-800 mb-3">Event Organizer</h3>
            <p className="text-gray-600 mb-4">
              Help plan and execute community events that bring people together and drive our mission forward.
            </p>
            <ul className="text-gray-600 space-y-2 mb-6">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Event planning & coordination</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Logistics management</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>On-site support</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Mentor Card */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-green-100 hover:shadow-xl transition-all duration-300">
          <div className="p-6">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-green-800 mb-3">Peer Mentor</h3>
            <p className="text-gray-600 mb-4">
              Guide and support others by sharing your knowledge and experience to help them grow.
            </p>
            <ul className="text-gray-600 space-y-2 mb-6">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>One-on-one mentoring</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Skill development workshops</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Community building</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Digital Campaign Coordinator Card */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-green-100 hover:shadow-xl transition-all duration-300">
          <div className="p-6">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-green-800 mb-3">Digital Campaigner</h3>
            <p className="text-gray-600 mb-4">
              Amplify our message through digital channels and help coordinate online advocacy efforts.
            </p>
            <ul className="text-gray-600 space-y-2 mb-6">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Social media campaigns</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Content creation</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>Online community management</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-green-700 rounded-2xl p-8 md:p-12 text-center text-white mb-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Ready to Make a Difference?</h2>
          <p className="text-lg mb-8">
            Join hundreds of volunteers who are already creating positive change in their communities. 
            Whether you can contribute a few hours a week or lead major initiatives, your skills are valuable.
          </p>
          <a 
            href="/contact/volunteer-form" 
            className="inline-block bg-white text-green-700 hover:bg-green-100 font-bold py-4 px-10 rounded-full text-lg transition duration-300 transform hover:scale-105 shadow-lg"
          >
            Sign Up Now
          </a>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="max-w-4xl mx-auto">
        <h3 className="text-2xl font-bold text-green-800 text-center mb-10">Why Volunteer With Us?</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex items-start">
            <div className="bg-green-100 p-3 rounded-lg mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-2">Meaningful Impact</h4>
              <p className="text-gray-600">See the direct results of your work and contribute to tangible positive change.</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="bg-green-100 p-3 rounded-lg mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-2">Community Connection</h4>
              <p className="text-gray-600">Join a network of passionate individuals working toward common goals.</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="bg-green-100 p-3 rounded-lg mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-2">Skill Development</h4>
              <p className="text-gray-600">Gain valuable experience and develop new skills in a supportive environment.</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="bg-green-100 p-3 rounded-lg mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-2">Flexible Commitment</h4>
              <p className="text-gray-600">Volunteer on your own schedule with options that fit your availability.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </motion.div>
);

export default Volunteer;