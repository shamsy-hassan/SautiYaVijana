// src/pages/contact/FAQs.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const FAQs = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedItems, setExpandedItems] = useState([]);

  const toggleItem = (id) => {
    if (expandedItems.includes(id)) {
      setExpandedItems(expandedItems.filter(itemId => itemId !== id));
    } else {
      setExpandedItems([...expandedItems, id]);
    }
  };

  const faqData = [
    {
      id: 1,
      question: "How do I join an event?",
      answer: "Check our calendar on the homepage and click 'Register' on any upcoming event. You'll be guided through a simple registration process. After registering, you'll receive a confirmation email with event details and any preparation instructions.",
      category: "events"
    },
    {
      id: 2,
      question: "Can I submit a story?",
      answer: "Absolutely! Visit our 'Youth Voices' page and click 'Submit Your Story'. We accept stories about personal experiences, community initiatives, or youth empowerment topics. Stories should be between 500-1500 words and can include photos or videos.",
      category: "content"
    },
    {
      id: 3,
      question: "Where do donations go?",
      answer: "100% of your donations directly fund our programs - 55% supports workshops and training, 30% funds community projects, 10% maintains our digital platforms, and only 5% covers administrative costs. We publish annual financial reports for full transparency.",
      category: "donations"
    },
    {
      id: 4,
      question: "How can I volunteer?",
      answer: "We welcome volunteers in various capacities! Visit our Volunteer page to see current opportunities. You can help with event coordination, mentorship, content creation, or digital outreach. Most roles require just 2-4 hours per week.",
      category: "volunteering"
    },
    {
      id: 5,
      question: "Are your events accessible?",
      answer: "Yes, we prioritize accessibility. All in-person events have wheelchair access, sign language interpretation upon request, and gender-neutral restrooms. Online events include closed captioning. Contact us at least 72 hours before an event for specific accommodations.",
      category: "events"
    },
    {
      id: 6,
      question: "What age groups do you serve?",
      answer: "Our programs are designed for youth aged 13-24. Some events have specific age ranges which will be clearly marked during registration. We also have mentorship programs that connect younger participants with older youth leaders.",
      category: "general"
    },
    {
      id: 7,
      question: "How can I partner with your organization?",
      answer: "We love collaborating with aligned organizations! Please visit our Partnerships page or email partnerships@youthempowerment.org with your proposal. We partner on events, content creation, resource sharing, and advocacy campaigns.",
      category: "partnerships"
    },
    {
      id: 8,
      question: "Do you offer scholarships for programs?",
      answer: "Yes, we offer need-based scholarships for all paid programs. When registering, select the 'Scholarship Application' option and complete the brief form. Scholarships cover 50-100% of program costs based on need. Decisions are made within 7 business days.",
      category: "programs"
    },
    {
      id: 9,
      question: "How can I unsubscribe from emails?",
      answer: "You can manage your email preferences at the bottom of any email from us. Click 'Update Preferences' to choose which types of emails you receive, or 'Unsubscribe' to stop all communications. You can also email help@youthempowerment.org with your request.",
      category: "account"
    },
    {
      id: 10,
      question: "Can I request a speaker for my event?",
      answer: "Yes! We have youth speakers available for schools, conferences, and community events. Submit a speaker request at least 4 weeks in advance through our 'Request a Speaker' form. Please include event details, audience size, and topic preferences.",
      category: "partnerships"
    }
  ];

  // Filter FAQs based on category and search term
  const filteredFaqs = faqData.filter(faq => {
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Get unique categories for filtering
  const categories = [...new Set(faqData.map(faq => faq.category))];

  return (
    <motion.div
              initial={{ opacity: 0, y: 20 }}       // Start invisible and slightly below
              animate={{ opacity: 1, y: 0 }}        // End visible and in position
              transition={{ duration: 1 }}          // Animation duration = 1 second
            >
        
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Hero Section */}
      <div className="bg-green-800 text-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Find answers to common questions about our programs, events, and community initiatives. 
            Can't find what you need? Contact our support team.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mt-10">
            <div className="relative">
              <input
                type="text"
                placeholder="Search questions or topics..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full p-4 pr-12 rounded-lg border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 focus:outline-none text-gray-700"
              />
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-6 w-6 text-gray-400 absolute right-3 top-3.5" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          <button
            className={`px-5 py-2.5 rounded-full font-medium ${activeCategory === 'all' ? 'bg-green-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'}`}
            onClick={() => setActiveCategory('all')}
          >
            All Topics
          </button>
          
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-5 py-2.5 rounded-full font-medium capitalize ${activeCategory === category ? 'bg-green-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* FAQ List */}
        <div className="space-y-6">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq) => (
              <div 
                key={faq.id} 
                className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300"
              >
                <button
                  className="flex justify-between items-center w-full p-6 text-left"
                  onClick={() => toggleItem(faq.id)}
                  aria-expanded={expandedItems.includes(faq.id)}
                >
                  <h3 className="text-lg md:text-xl font-semibold text-green-800">{faq.question}</h3>
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className={`h-6 w-6 text-green-600 transition-transform duration-300 ${expandedItems.includes(faq.id) ? 'rotate-180' : ''}`}
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {expandedItems.includes(faq.id) && (
                  <div className="px-6 pb-6">
                    <div className="border-t border-gray-100 pt-6 text-gray-600">
                      <p>{faq.answer}</p>
                      <div className="mt-4 flex items-center">
                        <span className="inline-block bg-green-100 text-green-800 text-xs font-medium px-2.5 py-1 rounded-full capitalize">
                          {faq.category}
                        </span>
                        <span className="text-gray-400 text-sm ml-4">
                          Last updated: June 15, 2025
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))
          ) : (
            <div className="text-center py-12">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-16 w-16 mx-auto text-gray-400 mb-4" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-xl font-medium text-gray-700 mb-2">No questions found</h3>
              <p className="text-gray-500 max-w-md mx-auto">
                We couldn't find any FAQs matching your search. Try different keywords or browse all categories.
              </p>
            </div>
          )}
        </div>

        {/* Popular Questions */}
        <div className="mt-20">
          <h2 className="text-2xl font-bold text-green-800 mb-6 text-center">Popular Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqData.slice(0, 4).map((faq) => (
              <div 
                key={faq.id} 
                className="bg-green-50 rounded-lg p-5 border border-green-100 hover:border-green-300 transition-colors duration-300"
              >
                <h3 className="font-semibold text-green-700 mb-2">{faq.question}</h3>
                <p className="text-gray-600 line-clamp-2">{faq.answer}</p>
                <button 
                  className="text-green-600 font-medium mt-3 flex items-center"
                  onClick={() => {
                    setActiveCategory('all');
                    setExpandedItems([faq.id]);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                >
                  Read full answer
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="mt-20 bg-green-700 rounded-2xl p-8 md:p-12 text-center text-white">
          <div className="max-w-3xl mx-auto">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-16 w-16 mx-auto mb-6" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <h2 className="text-3xl font-bold mb-6">Still have questions?</h2>
            <p className="text-lg mb-8">
              Our support team is ready to help. Contact us directly and we'll respond within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="/contact" 
                className="inline-block bg-white text-green-700 hover:bg-green-100 font-bold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105 shadow-lg"
              >
                Contact Support
              </a>
              <a 
                href="mailto:support@youthempowerment.org" 
                className="inline-block bg-transparent border-2 border-white text-white hover:bg-green-800 font-bold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105"
              >
                Email Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </motion.div>
  );
};

export default FAQs;