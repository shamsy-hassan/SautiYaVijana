// src/pages/Register.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiUser, FiLock, FiMail, FiPhone, FiMapPin, FiGlobe, FiCalendar, FiCheck } from 'react-icons/fi';
import { FaUserCircle, FaIdCard, FaUsers, FaShieldAlt } from 'react-icons/fa';

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    ageGroup: '',
    location: '',
    anonymousName: '',
    bio: '',
    website: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const ageGroups = [
    'Under 18',
    '18-24',
    '25-34',
    '35-44',
    '45-54',
    '55-64',
    '65+'
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  setError('');

  if (formData.password !== formData.confirmPassword) {
    setError('Passwords do not match');
    setLoading(false);
    return;
  }

  if (formData.password.length < 6) {
    setError('Password must be at least 6 characters');
    setLoading(false);
    return;
  }

  try {
    const response = await fetch('http://127.0.0.1:5000/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstName: formData.firstName,
        lastName: formData.lastName,
        anonymousName: formData.anonymousName,
        email: formData.email,
        phone: formData.phone,
        ageGroup: formData.ageGroup,
        location: formData.location,
        bio: formData.bio,
        website: formData.website,
        password: formData.password,
        confirmPassword: formData.confirmPassword,
      }),
    });

    const data = await response.json();

    if (response.ok) {
      navigate('/login', { 
        state: { message: 'Registration successful! Please log in.' } 
      });
    } else {
      setError(data.message || 'Registration failed. Please try again.');
    }
  } catch (err) {
    setError('Network error. Please try again.');
  } finally {
    setLoading(false);
  }
};


  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 flex items-center justify-center px-4 py-8">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-emerald-600 to-green-700 text-white p-8 text-center">
          <div className="w-20 h-20 rounded-full bg-white bg-opacity-20 border-4 border-white border-opacity-30 flex items-center justify-center mx-auto mb-4">
            <FaUserCircle className="text-4xl text-white" />
          </div>
          <h1 className="text-3xl font-bold mb-2">Join Our Community</h1>
          <p className="text-emerald-100">Create your account and start connecting with others</p>
        </div>

        {/* Why Join Us Section */}
        <div className="bg-emerald-50 p-8 border-b border-emerald-200">
          <h2 className="text-xl font-semibold text-emerald-800 text-center mb-6">Why Join Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start">
              <div className="bg-emerald-100 rounded-full p-3 mr-4 flex-shrink-0">
                <FaUsers className="text-lg text-emerald-700" />
              </div>
              <div>
                <h3 className="font-medium text-emerald-800">Connect with Community</h3>
                <p className="text-emerald-600 text-sm mt-1">Join a vibrant community of like-minded individuals.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-emerald-100 rounded-full p-3 mr-4 flex-shrink-0">
                <FaIdCard className="text-lg text-emerald-700" />
              </div>
              <div>
                <h3 className="font-medium text-emerald-800">Anonymous Profile</h3>
                <p className="text-emerald-600 text-sm mt-1">Maintain privacy with your customizable anonymous identity.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-emerald-100 rounded-full p-3 mr-4 flex-shrink-0">
                <FaShieldAlt className="text-lg text-emerald-700" />
              </div>
              <div>
                <h3 className="font-medium text-emerald-800">Secure & Private</h3>
                <p className="text-emerald-600 text-sm mt-1">Your data is protected with industry-standard security.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-emerald-100 rounded-full p-3 mr-4 flex-shrink-0">
                <FiGlobe className="text-lg text-emerald-700" />
              </div>
              <div>
                <h3 className="font-medium text-emerald-800">Share Ideas</h3>
                <p className="text-emerald-600 text-sm mt-1">Express yourself and share your thoughts freely.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className="p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-800">Create Your Account</h2>
            <p className="text-gray-600 mt-2">Fill in your details to register</p>
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg mb-6">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* First + Last Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                <div className="relative">
                  <FiUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition"
                    placeholder="First Name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                <div className="relative">
                  <FiUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition"
                    placeholder="Last Name"
                  />
                </div>
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
              <div className="relative">
                <FiMail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
              <div className="relative">
                <FiPhone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition"
                  placeholder="Phone number (optional)"
                />
              </div>
            </div>

            {/* Password + Confirm */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Password *</label>
                <div className="relative">
                  <FiLock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition"
                    placeholder="Create password"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Confirm Password *</label>
                <div className="relative">
                  <FiLock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                    className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition"
                    placeholder="Confirm password"
                  />
                </div>
              </div>
            </div>

            {/* Password Requirements */}
            <div className="bg-emerald-50 p-4 rounded-xl">
              <h4 className="font-medium text-emerald-800 text-sm mb-2">Password Requirements</h4>
              <ul className="text-xs text-emerald-600 space-y-1">
                <li className={`flex items-center ${formData.password.length >= 6 ? 'text-emerald-600' : 'text-gray-400'}`}>
                  <FiCheck className="mr-1" /> At least 6 characters long
                </li>
                <li className={`flex items-center ${/[A-Z]/.test(formData.password) ? 'text-emerald-600' : 'text-gray-400'}`}>
                  <FiCheck className="mr-1" /> One uppercase letter (recommended)
                </li>
                <li className={`flex items-center ${/\d/.test(formData.password) ? 'text-emerald-600' : 'text-gray-400'}`}>
                  <FiCheck className="mr-1" /> One number (recommended)
                </li>
              </ul>
            </div>

            {/* Anonymous Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Anonymous Display Name *</label>
              <div className="relative">
                <FiUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  name="anonymousName"
                  value={formData.anonymousName}
                  onChange={handleChange}
                  required
                  className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition"
                  placeholder="How you'll appear to others"
                />
              </div>
              <p className="text-xs text-gray-500 mt-2">This name will be visible to other community members</p>
            </div>

            {/* Age + Location */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Age Group</label>
                <div className="relative">
                  <FiCalendar className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 z-10" />
                  <select
                    name="ageGroup"
                    value={formData.ageGroup}
                    onChange={handleChange}
                    className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent appearance-none transition"
                  >
                    <option value="">Select age group</option>
                    {ageGroups.map((group) => (
                      <option key={group} value={group}>{group}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                <div className="relative">
                  <FiMapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition"
                    placeholder="Your location (optional)"
                  />
                </div>
              </div>
            </div>

            {/* Website */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Website</label>
              <div className="relative">
                <FiGlobe className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="url"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition"
                  placeholder="https://example.com (optional)"
                />
              </div>
            </div>

            {/* Bio */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Bio</label>
              <textarea
                name="bio"
                value={formData.bio}
                onChange={handleChange}
                rows="3"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition"
                placeholder="Tell us a little about yourself (optional)"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-emerald-600 text-white py-3 px-4 rounded-xl hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 transition duration-200 disabled:opacity-50 font-medium"
            >
              {loading ? 'Creating Account...' : 'Create Account'}
            </button>
          </form>

          <div className="text-center mt-8 pt-6 border-t border-gray-200">
            <p className="text-gray-600">
              Already have an account?{' '}
              <Link to="/login" className="text-emerald-600 hover:text-emerald-700 font-medium">Sign in</Link>
            </p>
            <p className="text-gray-500 text-sm mt-2">
              By creating an account, you agree to our{' '}
              <a href="#" className="text-emerald-600 hover:text-emerald-700">Terms of Service</a>{' '}
              and{' '}
              <a href="#" className="text-emerald-600 hover:text-emerald-700">Privacy Policy</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
