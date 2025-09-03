// src/App.jsx
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Login from './pages/Login';
import ScrollToTop from './components/ScrollToTop';
import { motion } from "framer-motion";

// Auth
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Register from './pages/Register.jsx';
import Profile from "./pages/Profile.jsx";

// About dropdown
import AboutSYV     from './pages/about/AboutSYV';
import WhatWeDo     from './pages/about/WhatWeDo';
import WhoWeAre     from './pages/about/WhoWeAre';
import OurImpact    from './pages/about/OurImpact';
import OurPartners  from './pages/about/OurPartners';
import Testimonials from './pages/about/Testimonials';

// YouthAgenda
import Voices from './pages/YouthAgenda/Voices';
import Rights from './pages/YouthAgenda/Rights';
import Challenges from './pages/YouthAgenda/Challenges';

// Projects dropdown
import Empowerment      from './pages/projects/Empowerment';
import DigitalLiteracy   from './pages/projects/DigitalLiteracy';
import CommunityDialogues from './pages/projects/CommunityDialogues';

// Blog dropdown
import LeadershipTips  from './pages/blog/LeadershipTips';
import SuccessStories  from './pages/blog/SuccessStories';
import PolicyOpinions  from './pages/blog/PolicyOpinions';

// Contact dropdown
import Volunteer       from './pages/contact/Volunteer';
import SupportUs       from './pages/contact/SupportUs';
import FAQs            from './pages/contact/FAQs';

function App() {
  // Backend connection test
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      fetch('http://127.0.0.1:5000/auth/test')
        .then(response => {
          if (!response.ok) throw new Error('Network response was not ok');
          return response.json();
        })
        .then(data => console.log("Backend connection successful:", data))
        .catch(error => console.error('Backend connection error:', error));
    }
  }, []);

  return (
    <AuthProvider>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 3 }}
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
                <Route path="/blog" element={<Blog />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                
                {/* Protected Routes */}
                <Route
                  path="/profile"
                  element={
                    <ProtectedRoute>
                      <Profile />
                    </ProtectedRoute>
                  }
                />
                
                {/* Protected Youth Agenda Routes */}
                <Route
                  path="/youthagenda/voices"
                  element={
                    <ProtectedRoute>
                      <Voices />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/youthagenda/rights"
                  element={
                    <ProtectedRoute>
                      <Rights />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/youthagenda/challenges"
                  element={
                    <ProtectedRoute>
                      <Challenges />
                    </ProtectedRoute>
                  }
                />
                
                {/* About dropdown */}
                <Route path="/about/about-syv"    element={<AboutSYV />} />
                <Route path="/about/what-we-do"   element={<WhatWeDo />} />
                <Route path="/about/who-we-are"   element={<WhoWeAre />} />
                <Route path="/about/our-impact"   element={<OurImpact />} />
                <Route path="/about/our-partners" element={<OurPartners />} />
                <Route path="/about/testimonials" element={<Testimonials />} />
                
                {/* Projects dropdown */}
                <Route path="/projects/empowerment"      element={<Empowerment />} />
                <Route path="/projects/digital-literacy" element={<DigitalLiteracy />} />
                <Route path="/projects/dialogues"        element={<CommunityDialogues />} />
                
                {/* Blog dropdown */}
                <Route path="/blog/leadership" element={<LeadershipTips />} />
                <Route path="/blog/success"    element={<SuccessStories />} />
                <Route path="/blog/policy"     element={<PolicyOpinions />} />
                
                {/* Contact dropdown */}
                <Route path="/contact/volunteer" element={<Volunteer />} />
                <Route path="/contact/support"   element={<SupportUs />} />
                <Route path="/contact/faqs"      element={<FAQs />} />
              </Routes>
            </main>

            <Footer />
          </div>
        </Router>
      </motion.div>
    </AuthProvider>
  );
}

export default App;