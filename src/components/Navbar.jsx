import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiUser, FiSearch } from 'react-icons/fi';
import logo from '../assets/voices.png';


import {
  FaUsers,
  FaLaptop,
  FaLightbulb,
  FaQuoteRight,
  FaBook,
  FaHandshake,
  FaComments,
} from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setOpenDropdown(null);
  };

  const toggleDropdown = (name) => {
    setOpenDropdown((prev) => (prev === name ? null : name));
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.dropdown-parent')) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const navLinks = [
    {
      name: 'About',
      path: '/about',
      dropdown: [
        { label: 'About SYV', path: '/about/about-syv', icon: <FaLightbulb /> },
        { label: 'What We Do', path: '/about/what-we-do', icon: <FaLightbulb /> },
        { label: 'Who We Are', path: '/about/who-we-are', icon: <FaLightbulb /> },
        { label: 'Our Impact', path: '/about/our-impact', icon: <FaLightbulb /> },
        { label: 'Our Partners', path: '/about/our-partners', icon: <FaUsers /> },
        { label: 'Testimonials', path: '/about/testimonials', icon: <FaQuoteRight /> },
      ],
    },
    {
      name: 'YouthAgenda',
      path: '/YouthAgenda',
      dropdown: [
        { label: 'Youth Voices', path: '/YouthAgenda/voices', icon: <FaComments /> },
        { label: 'Civic Rights', path: '/YouthAgenda/rights', icon: <FaHandshake /> },
        { label: 'Local Challenges', path: '/YouthAgenda/challenges', icon: <FaBook /> },
      ],
    },
    {
      name: 'Projects',
      path: '/projects',
      dropdown: [
        { label: 'Empowerment', path: '/projects/empowerment', icon: <FaUsers /> },
        { label: 'Digital Literacy', path: '/projects/digital-literacy', icon: <FaLaptop /> },
        { label: 'Community Dialogues', path: '/projects/dialogues', icon: <FaComments /> },
      ],
    },
    {
      name: 'Blog',
      path: '/blog',
      dropdown: [
        { label: 'Leadership Tips', path: '/blog/leadership', icon: <FaLightbulb /> },
        { label: 'Success Stories', path: '/blog/success', icon: <FaQuoteRight /> },
        { label: 'Policy Opinions', path: '/blog/policy', icon: <FaBook /> },
      ],
    },
    {
      name: 'Contact',
      path: '/contact',
      dropdown: [
        { label: 'Volunteer', path: '/contact/volunteer', icon: <FaHandshake /> },
        { label: 'Support Us', path: '/contact/support', icon: <FaUsers /> },
        { label: 'FAQs', path: '/contact/faqs', icon: <FaBook /> },
      ],
    },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md border-b border-gray-100 py-2' : 'bg-white border-b border-transparent py-3'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
 <img src={logo} alt="SYV Logo" className="h-10 w-auto" />

  <span className="ml-3 text-xl font-bold text-gray-800">Sauti Ya Vijana</span>
</Link>
          <div className="hidden md:flex items-center space-x-2 ml-10">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="border rounded-lg px-4 py-1 text-sm w-64 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <FiSearch className="absolute top-2 right-3 text-gray-500" />
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <div key={link.name} className="relative dropdown-parent">
                <button
                  onClick={() => toggleDropdown(link.name)}
                  className={`text-base font-medium transition-colors duration-300 hover:text-green-600 flex items-center ${
                    location.pathname === link.path ? 'text-green-600 font-semibold' : 'text-gray-700'
                  }`}
                >
                  {link.name}
                  {link.dropdown && (
                    <svg
                      className={`w-4 h-4 ml-1 transition-transform duration-300 ${
                        openDropdown === link.name ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </button>
                {link.dropdown && openDropdown === link.name && (
                  <div className="absolute z-50 left-0 mt-2 w-56 bg-white border border-gray-100 rounded-md shadow-lg transition-all duration-200 origin-top scale-100 opacity-100">
                    {link.dropdown.map((item, index) => (
                      <Link
                        key={index}
                        to={item.path}
                        onClick={() => setOpenDropdown(null)}
                        className="flex items-center gap-2 px-4 py-2 text-base font-semibold text-gray-700 hover:bg-green-50 hover:text-green-600"
                      >
                        {item.icon}
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link to="/login" className="flex items-center gap-1 text-gray-700 hover:text-green-600">
              <FiUser className="w-5 h-5" />
              Login
            </Link>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-gray-700 hover:text-green-600 focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 pt-2 pb-3 space-y-1 bg-white shadow-lg">
          {navLinks.map((link) => (
            <div key={link.name} className="relative dropdown-parent">
              <button
                onClick={() => toggleDropdown(link.name)}
                className="w-full flex justify-between items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-green-600 focus:outline-none"
              >
                <span>{link.name}</span>
                {link.dropdown && (
                  <svg
                    className={`w-4 h-4 transition-transform transform duration-300 ${
                      openDropdown === link.name ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </button>
              {link.dropdown && openDropdown === link.name && (
                <div className="pl-4 mt-1">
                  {link.dropdown.map((item, index) => (
                    <Link
                      key={index}
                      to={item.path}
                      onClick={() => {
                        setOpenDropdown(null);
                        setIsOpen(false);
                      }}
                      className="flex items-center gap-2 px-4 py-2 text-base font-semibold text-gray-700 hover:bg-green-50 hover:text-green-600"
                    >
                      {item.icon}
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link to="/login" className="flex items-center gap-2 text-gray-700 mt-2 hover:text-green-600">
            <FiUser className="w-5 h-5" />
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
