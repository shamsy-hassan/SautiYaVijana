// src/pages/contact/SupportUs.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const SupportUs = () => {
  const [donationAmount, setDonationAmount] = useState(50);
  const [donationType, setDonationType] = useState('one-time');
  const [isExpanded, setIsExpanded] = useState(false);

  const donationOptions = [
    { id: 1, amount: 25, label: "Provides school supplies for 1 child" },
    { id: 2, amount: 50, label: "Supports a community workshop" },
    { id: 3, amount: 100, label: "Funds a month of digital advocacy" },
    { id: 4, amount: 250, label: "Sponsors a local event" },
    { id: 5, amount: 500, label: "Supports our annual scholarship fund" },
  ];

  const impactStats = [
    { value: "85%", label: "of funds directly support programs" },
    { value: "12K+", label: "people impacted annually" },
    { value: "47", label: "communities served" },
    { value: "98%", label: "donor satisfaction rate" },
  ];

  const faqs = [
    {
      question: "How will my donation be used?",
      answer: "Your donation directly funds our community programs, educational initiatives, and advocacy campaigns. We allocate 85% of all donations to program expenses, with only 15% going to administrative and fundraising costs."
    },
    {
      question: "Is my donation tax-deductible?",
      answer: "Yes, we are a registered 501(c)(3) nonprofit organization. All donations are tax-deductible to the extent allowed by law. You'll receive a receipt for tax purposes immediately after your donation."
    },
    {
      question: "Can I make a recurring donation?",
      answer: "Absolutely! We offer monthly, quarterly, and annual recurring donation options. Recurring donations help us maintain consistent support for our programs and reduce administrative costs."
    },
    {
      question: "What other ways can I support?",
      answer: "Beyond financial contributions, you can support us through corporate matching gifts, in-kind donations, volunteering, or by spreading awareness about our mission. Contact our partnerships team for more information."
    }
  ];

  const handleDonationChange = (e) => {
    setDonationAmount(parseInt(e.target.value));
  };

  const handleCustomAmount = (amount) => {
    setDonationAmount(amount);
  };

  return (

    <motion.div
              initial={{ opacity: 0, y: 20 }}       // Start invisible and slightly below
              animate={{ opacity: 1, y: 0 }}        // End visible and in position
              transition={{ duration: 1 }}          // Animation duration = 1 second
            >
        
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Hero Section */}
      <div className="relative bg-green-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-60 z-0"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')" }}
        ></div>
        
        <div className="relative max-w-6xl mx-auto px-4 py-24 md:py-32 z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Your Support Changes Lives</h1>
            <p className="text-xl mb-8">Join our community of supporters who believe in creating lasting change. Every contribution, big or small, helps us build a better future.</p>
            <a 
              href="#donation-section" 
              className="inline-block bg-white text-green-700 hover:bg-green-100 font-bold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105 shadow-lg"
            >
              Make a Difference
            </a>
          </div>
        </div>
      </div>

      {/* Impact Statistics */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-green-800 mb-4">The Power of Your Support</h2>
          <div className="w-24 h-1 bg-green-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Your generosity fuels our mission and creates tangible change in communities worldwide.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {impactStats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl transition-all duration-300">
              <div className="text-3xl font-bold text-green-700 mb-2">{stat.value}</div>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Donation Section */}
      <div id="donation-section" className="bg-green-50 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2 bg-green-700 text-white p-8 md:p-12">
                <h2 className="text-2xl font-bold mb-4">Where Your Money Goes</h2>
                <p className="mb-6">We're committed to transparency and ensuring your donation has maximum impact.</p>
                
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>Community Programs</span>
                      <span>55%</span>
                    </div>
                    <div className="w-full bg-green-900 rounded-full h-2">
                      <div className="bg-green-400 h-2 rounded-full" style={{ width: "55%" }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>Education Initiatives</span>
                      <span>30%</span>
                    </div>
                    <div className="w-full bg-green-900 rounded-full h-2">
                      <div className="bg-green-400 h-2 rounded-full" style={{ width: "30%" }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>Advocacy Campaigns</span>
                      <span>10%</span>
                    </div>
                    <div className="w-full bg-green-900 rounded-full h-2">
                      <div className="bg-green-400 h-2 rounded-full" style={{ width: "10%" }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>Administrative Costs</span>
                      <span>5%</span>
                    </div>
                    <div className="w-full bg-green-900 rounded-full h-2">
                      <div className="bg-green-400 h-2 rounded-full" style={{ width: "5%" }}></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="md:w-1/2 p-8 md:p-12">
                <h2 className="text-2xl font-bold text-green-800 mb-6">Make Your Impact</h2>
                
                <div className="mb-6">
                  <div className="flex border border-green-200 rounded-lg overflow-hidden mb-4">
                    <button 
                      className={`flex-1 py-3 px-4 text-center ${donationType === 'one-time' ? 'bg-green-600 text-white' : 'bg-white text-gray-700'}`}
                      onClick={() => setDonationType('one-time')}
                    >
                      One-Time
                    </button>
                    <button 
                      className={`flex-1 py-3 px-4 text-center ${donationType === 'monthly' ? 'bg-green-600 text-white' : 'bg-white text-gray-700'}`}
                      onClick={() => setDonationType('monthly')}
                    >
                      Monthly
                    </button>
                  </div>
                  
                  <div className="mb-6">
                    <label className="block text-gray-700 mb-2">Select Amount (USD)</label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-4">
                      {donationOptions.map((option) => (
                        <button
                          key={option.id}
                          className={`py-3 px-4 rounded-lg border ${donationAmount === option.amount ? 'border-green-600 bg-green-50 text-green-700 font-bold' : 'border-gray-300 text-gray-700 hover:bg-gray-50'}`}
                          onClick={() => setDonationAmount(option.amount)}
                        >
                          ${option.amount}
                        </button>
                      ))}
                    </div>
                    
                    <div className="mb-3">
                      <label htmlFor="custom-amount" className="block text-gray-700 mb-2">Or enter a custom amount</label>
                      <div className="flex">
                        <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500">$</span>
                        <input
                          type="number"
                          id="custom-amount"
                          value={donationAmount}
                          onChange={handleDonationChange}
                          min="1"
                          className="flex-1 min-w-0 block w-full px-3 py-2 rounded-none rounded-r-md border-gray-300 focus:border-green-500 focus:ring focus:ring-green-200 focus:ring-opacity-50"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-lg transition duration-300 transform hover:scale-[1.02]">
                    {donationType === 'monthly' 
                      ? `Donate $${donationAmount} Monthly` 
                      : `Donate $${donationAmount} Now`}
                  </button>
                  
                  <p className="text-center text-gray-500 text-sm mt-3">
                    Secure payment processing. All donations are tax-deductible.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Other Ways to Support */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-green-800 mb-4">More Ways to Make an Impact</h2>
          <div className="w-24 h-1 bg-green-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Financial contributions are just one way to support our mission. Explore other meaningful ways to get involved.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition-all duration-300">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-green-800 mb-3">Corporate Partnerships</h3>
            <p className="text-gray-600 mb-4">
              Align your business with our mission through sponsorship, matching gift programs, or cause marketing.
            </p>
            <a href="#" className="text-green-600 font-medium inline-flex items-center">
              Learn more
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition-all duration-300">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-green-800 mb-3">In-Kind Donations</h3>
            <p className="text-gray-600 mb-4">
              Donate goods, services, or expertise that directly support our programs and operations.
            </p>
            <a href="#" className="text-green-600 font-medium inline-flex items-center">
              See our wishlist
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition-all duration-300">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-green-800 mb-3">Legacy Giving</h3>
            <p className="text-gray-600 mb-4">
              Include us in your estate planning to create a lasting impact for generations to come.
            </p>
            <a href="#" className="text-green-600 font-medium inline-flex items-center">
              Explore options
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-green-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Our Supporters Give</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-green-700 bg-opacity-50 p-8 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-green-600 flex items-center justify-center mr-4">
                  <span className="text-lg font-bold">SJ</span>
                </div>
                <div>
                  <h4 className="font-bold">Sarah Johnson</h4>
                  <p className="text-green-200 text-sm">Monthly donor since 2020</p>
                </div>
              </div>
              <p className="italic">"Knowing that 85% of my donation directly funds programs gives me confidence that my contribution is making a real difference. I've seen firsthand the impact their education initiatives have in underserved communities."</p>
            </div>
            
            <div className="bg-green-700 bg-opacity-50 p-8 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-green-600 flex items-center justify-center mr-4">
                  <span className="text-lg font-bold">MR</span>
                </div>
                <div>
                  <h4 className="font-bold">Michael Rodriguez</h4>
                  <p className="text-green-200 text-sm">Corporate partner</p>
                </div>
              </div>
              <p className="italic">"Partnering with this organization has been transformative for both our company culture and our community impact. Their team works closely with us to create meaningful engagement opportunities for our employees."</p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-green-800 text-center mb-12">Frequently Asked Questions</h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                className="flex justify-between items-center w-full p-6 text-left bg-white hover:bg-green-50 transition-colors duration-200"
                onClick={() => setIsExpanded(isExpanded === index ? null : index)}
              >
                <span className="font-medium text-lg text-green-800">{faq.question}</span>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className={`h-5 w-5 text-green-600 transition-transform duration-300 ${isExpanded === index ? 'rotate-180' : ''}`}
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {isExpanded === index && (
                <div className="p-6 bg-green-50 border-t border-gray-200">
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Final CTA */}
      <div className="bg-gradient-to-r from-green-600 to-green-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Community of Changemakers</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Together, we're creating a brighter future. Your support today makes tomorrow's progress possible.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-green-700 hover:bg-green-100 font-bold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105 shadow-lg">
              Donate Now
            </button>
            <button className="bg-transparent border-2 border-white text-white hover:bg-green-700 font-bold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105">
              Contact Partnerships
            </button>
          </div>
        </div>
      </div>
    </div>
    </motion.div>
  );
};

export default SupportUs;