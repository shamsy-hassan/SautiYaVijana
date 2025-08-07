// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Login from './pages/Login';
import ScrollToTop from './components/ScrollToTop';
import { motion } from "framer-motion";

// About dropdown pages
import AboutSYV     from './pages/about/AboutSYV';
import WhatWeDo     from './pages/about/WhatWeDo';
import WhoWeAre     from './pages/about/WhoWeAre';
import OurImpact    from './pages/about/OurImpact';
import OurPartners  from './pages/about/OurPartners';
import Testimonials from './pages/about/Testimonials';
import Voices from './pages/YouthAgenda/Voices';
import Rights from './pages/YouthAgenda/Rights';
import Challenges from './pages/YouthAgenda/Challenges';
import Empowerment      from './pages/projects/Empowerment';
import DigitalLiteracy   from './pages/projects/DigitalLiteracy';
import CommunityDialogues from './pages/projects/CommunityDialogues';

import LeadershipTips  from './pages/blog/LeadershipTips';
import SuccessStories  from './pages/blog/SuccessStories';
import PolicyOpinions  from './pages/blog/PolicyOpinions';

import Volunteer       from './pages/contact/Volunteer';
import SupportUs       from './pages/contact/SupportUs';
import FAQs            from './pages/contact/FAQs';

function App() {
  return (
    
        <motion.div
      initial={{ opacity: 0, y: 20 }}       // Start invisible and slightly below
      animate={{ opacity: 1, y: 0 }}        // End visible and in position
      transition={{ duration: 3 }}          // Animation duration = 1 second
    >

    <Router>
      <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        <Navbar />

        <main className="flex-grow pt-20">
          <ScrollToTop />

          <Routes>
            {/* Redirect root path to About page */}
            <Route path="/" element={<Navigate to="/about" replace />} />
            
            {/* Top-level pages */}
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
            
            {/* About → Dropdown pages */}
            <Route path="/about/about-syv"    element={<AboutSYV />} />
            <Route path="/about/what-we-do"   element={<WhatWeDo />} />
            <Route path="/about/who-we-are"   element={<WhoWeAre />} />
            <Route path="/about/our-impact"   element={<OurImpact />} />
            <Route path="/about/our-partners" element={<OurPartners />} />
            <Route path="/about/testimonials" element={<Testimonials />} />
            
            {/* YouthAgenda dropdown pages */}
            <Route path="/YouthAgenda/voices"     element={<Voices />} />
            <Route path="/YouthAgenda/rights"     element={<Rights />} />
            <Route path="/YouthAgenda/challenges" element={<Challenges />} />
            
            {/* Projects dropdown pages */}
            <Route path="/projects/empowerment"      element={<Empowerment />} />
            <Route path="/projects/digital-literacy" element={<DigitalLiteracy />} />
            <Route path="/projects/dialogues"        element={<CommunityDialogues />} />
            
            {/* Blog dropdown pages */}
            <Route path="/blog/leadership" element={<LeadershipTips />} />
            <Route path="/blog/success"    element={<SuccessStories />} />
            <Route path="/blog/policy"     element={<PolicyOpinions />} />
            
            {/* Contact dropdown pages */}
            <Route path="/contact/volunteer" element={<Volunteer />} />
            <Route path="/contact/support"   element={<SupportUs />} />
            <Route path="/contact/faqs"      element={<FAQs />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
    </motion.div>
  );
}

export default App;