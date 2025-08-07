// src/components/Voices.jsx
import React, { useState, useEffect } from 'react';
import { FaThumbsUp, FaRegThumbsUp, FaTrash, FaEdit, FaUser, FaSignInAlt, FaSignOutAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Voices = () => {
  // Load issues from localStorage on initial render
  const [issues, setIssues] = useState(() => {
    const savedIssues = localStorage.getItem('youthIssues');
    return savedIssues ? JSON.parse(savedIssues) : [];
  });
  
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    village: '',
    ward: '',
    issue: '',
    suggestion: '',
  });

  // Authentication state
  const [currentUser, setCurrentUser] = useState(null);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState('login'); // 'login' or 'register'
  const [authData, setAuthData] = useState({
    name: '',
    email: '',
    password: ''
  });

  // Load user from localStorage on initial render
  useEffect(() => {
    const savedUser = localStorage.getItem('sautiUser');
    if (savedUser) {
      setCurrentUser(JSON.parse(savedUser));
    }
  }, []);

  // Save issues to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('youthIssues', JSON.stringify(issues));
  }, [issues]);

  // Auth handlers
  const handleAuthChange = (e) => {
    const { name, value } = e.target;
    setAuthData({ ...authData, [name]: value });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('sautiUsers') || '[]');
    
    // Check if user exists
    if (users.some(user => user.email === authData.email)) {
      alert('User already exists with this email');
      return;
    }
    
    const newUser = {
      id: Date.now(),
      name: authData.name,
      email: authData.email,
      password: authData.password // In real app, hash passwords
    };
    
    const updatedUsers = [...users, newUser];
    localStorage.setItem('sautiUsers', JSON.stringify(updatedUsers));
    localStorage.setItem('sautiUser', JSON.stringify(newUser));
    setCurrentUser(newUser);
    setShowAuthModal(false);
    setAuthData({ name: '', email: '', password: '' });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('sautiUsers') || '[]');
    const user = users.find(u => 
      u.email === authData.email && u.password === authData.password
    );
    
    if (user) {
      localStorage.setItem('sautiUser', JSON.stringify(user));
      setCurrentUser(user);
      setShowAuthModal(false);
      setAuthData({ name: '', email: '', password: '' });
    } else {
      alert('Invalid credentials');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('sautiUser');
    setCurrentUser(null);
  };

  // Check auth before showing form
  const handleAddNewClick = () => {
    if (!currentUser) {
      setShowAuthModal(true);
      setAuthMode('login');
    } else {
      setShowForm(true);
    }
  };

  // Check auth before editing
  const handleEditClick = (issue) => {
    if (!currentUser) {
      setShowAuthModal(true);
      setAuthMode('login');
    } else {
      handleEdit(issue);
    }
  };

  // Check auth before deleting
  const handleDeleteClick = (id) => {
    if (!currentUser) {
      setShowAuthModal(true);
      setAuthMode('login');
    } else {
      handleDelete(id);
    }
  };

  // Original handlers
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (editingId) {
      // Update existing issue
      setIssues(
        issues.map((issue) =>
          issue.id === editingId ? { ...formData, id: editingId, upvotes: issue.upvotes } : issue
        )
      );
      setEditingId(null);
    } else {
      // Create new issue
      const newIssue = {
        ...formData,
        upvotes: 0,
        id: Date.now(),
        voters: [],
        userId: currentUser?.id || null
      };
      setIssues([newIssue, ...issues]);
    }
    
    setFormData({ village: '', ward: '', issue: '', suggestion: '' });
    setShowForm(false);
  };

  const handleUpvote = (id) => {
    // Generate a unique voter ID for anonymous tracking
    const voterId = localStorage.getItem('voterId') || `voter-${Date.now()}`;
    localStorage.setItem('voterId', voterId);
    
    setIssues(
      issues.map((issue) => {
        if (issue.id === id) {
          // Check if this voter has already upvoted
          const hasVoted = issue.voters.includes(voterId);
          
          return {
            ...issue,
            upvotes: hasVoted ? issue.upvotes : issue.upvotes + 1,
            voters: hasVoted 
              ? issue.voters 
              : [...issue.voters, voterId]
          };
        }
        return issue;
      })
    );
  };

  const handleEdit = (issue) => {
    setFormData({
      village: issue.village,
      ward: issue.ward,
      issue: issue.issue,
      suggestion: issue.suggestion || '',
    });
    setEditingId(issue.id);
    setShowForm(true);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this issue?')) {
      setIssues(issues.filter(issue => issue.id !== id));
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100 py-8 px-4"
    >
      {/* Auth Modal */}
      {showAuthModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-xl shadow-2xl w-full max-w-md"
          >
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-indigo-800">
                  {authMode === 'login' ? 'Login to Post' : 'Create Account'}
                </h2>
                <button 
                  onClick={() => setShowAuthModal(false)}
                  className="text-gray-500 hover:text-gray-700 text-2xl"
                >
                  &times;
                </button>
              </div>

              <form onSubmit={authMode === 'login' ? handleLogin : handleRegister}>
                {authMode === 'register' && (
                  <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={authData.name}
                      onChange={handleAuthChange}
                      required
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-300 focus:border-indigo-500"
                      placeholder="Your name"
                    />
                  </div>
                )}

                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={authData.email}
                    onChange={handleAuthChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-300 focus:border-indigo-500"
                    placeholder="your@email.com"
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-gray-700 mb-2">Password</label>
                  <input
                    type="password"
                    name="password"
                    value={authData.password}
                    onChange={handleAuthChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-300 focus:border-indigo-500"
                    placeholder="••••••••"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 font-medium"
                >
                  {authMode === 'login' ? 'Login' : 'Register'}
                </button>
              </form>

              <div className="mt-4 text-center">
                <button
                  onClick={() => setAuthMode(authMode === 'login' ? 'register' : 'login')}
                  className="text-indigo-600 hover:underline"
                >
                  {authMode === 'login' 
                    ? 'Need an account? Register' 
                    : 'Already have an account? Login'}
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <div className="flex items-center gap-3">
            <div className="bg-indigo-600 text-white p-3 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
              </svg>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-indigo-900">Youth Issue Board</h1>
              <p className="text-indigo-600">Share concerns and vote on community issues</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            {currentUser ? (
              <div className="flex items-center gap-2 bg-indigo-100 px-4 py-2 rounded-full">
                <FaUser className="text-indigo-700" />
                <span className="font-medium text-indigo-900">{currentUser.name}</span>
                <button 
                  onClick={handleLogout}
                  className="text-indigo-700 hover:text-indigo-900 ml-2"
                  title="Logout"
                >
                  <FaSignOutAlt />
                </button>
              </div>
            ) : (
              <button
                onClick={() => {
                  setShowAuthModal(true);
                  setAuthMode('login');
                }}
                className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition flex items-center gap-2"
              >
                <FaSignInAlt /> Sign In
              </button>
            )}
            
            <button
              onClick={handleAddNewClick}
              className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition flex items-center gap-2 shadow-lg"
            >
              <span className="text-xl">+</span> Add New Concern
            </button>
          </div>
        </div>

        {/* Submission Form */}
        {showForm && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white p-6 rounded-xl shadow-xl mb-8 border border-indigo-200"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-gray-800">
                {editingId ? "Edit Issue" : "Report New Issue"}
              </h2>
              <button 
                onClick={() => {
                  setShowForm(false);
                  setEditingId(null);
                  setFormData({ village: '', ward: '', issue: '', suggestion: '' });
                }}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="md:col-span-1">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Village
                </label>
                <input
                  type="text"
                  name="village"
                  value={formData.village}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-300 focus:border-indigo-500"
                  placeholder="Enter village name"
                />
              </div>
              
              <div className="md:col-span-1">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Ward
                </label>
                <input
                  type="text"
                  name="ward"
                  value={formData.ward}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-300 focus:border-indigo-500"
                  placeholder="Enter ward number/name"
                />
              </div>
              
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Issue Description
                </label>
                <textarea
                  name="issue"
                  value={formData.issue}
                  onChange={handleChange}
                  required
                  rows={3}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-300 focus:border-indigo-500"
                  placeholder="Describe the issue in detail..."
                ></textarea>
              </div>
              
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Suggestions (Optional)
                </label>
                <textarea
                  name="suggestion"
                  value={formData.suggestion}
                  onChange={handleChange}
                  rows={2}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-300 focus:border-indigo-500"
                  placeholder="Your proposed solution or ideas..."
                ></textarea>
              </div>
              
              <div className="md:col-span-2 flex justify-end gap-3 pt-2">
                <button
                  type="submit"
                  className="bg-indigo-600 text-white px-5 py-2.5 rounded-lg hover:bg-indigo-700 transition flex items-center gap-2"
                >
                  <span>📤</span> {editingId ? "Update Issue" : "Submit Concern"}
                </button>
              </div>
            </form>
          </motion.div>
        )}

        {/* Stats Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
          <div className="bg-white p-5 rounded-xl shadow-md border-l-4 border-indigo-500">
            <h3 className="text-gray-600 text-sm font-medium">Total Issues</h3>
            <p className="text-3xl font-bold text-indigo-700 mt-1">{issues.length}</p>
          </div>
          <div className="bg-white p-5 rounded-xl shadow-md border-l-4 border-green-500">
            <h3 className="text-gray-600 text-sm font-medium">Total Votes</h3>
            <p className="text-3xl font-bold text-green-700 mt-1">
              {issues.reduce((sum, issue) => sum + issue.upvotes, 0)}
            </p>
          </div>
          <div className="bg-white p-5 rounded-xl shadow-md border-l-4 border-blue-500">
            <h3 className="text-gray-600 text-sm font-medium">Most Active Village</h3>
            <p className="text-2xl font-bold text-blue-700 mt-1 truncate">
              {issues.length > 0 
                ? [...new Set(issues.map(i => i.village))].sort((a, b) => 
                    issues.filter(i => i.village === b).length - 
                    issues.filter(i => i.village === a).length
                  )[0] 
                : 'None'}
            </p>
          </div>
        </div>

        {/* Issues Table */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-xl shadow-lg overflow-hidden"
        >
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-indigo-600 text-white">
                <tr>
                  <th scope="col" className="px-6 py-4 text-left text-sm font-medium uppercase tracking-wider">
                    ID
                  </th>
                  <th scope="col" className="px-6 py-4 text-left text-sm font-medium uppercase tracking-wider">
                    Village
                  </th>
                  <th scope="col" className="px-6 py-4 text-left text-sm font-medium uppercase tracking-wider">
                    Ward
                  </th>
                  <th scope="col" className="px-6 py-4 text-left text-sm font-medium uppercase tracking-wider">
                    Issue
                  </th>
                  <th scope="col" className="px-6 py-4 text-left text-sm font-medium uppercase tracking-wider">
                    Suggestion
                  </th>
                  <th scope="col" className="px-6 py-4 text-center text-sm font-medium uppercase tracking-wider">
                    Votes
                  </th>
                  <th scope="col" className="px-6 py-4 text-center text-sm font-medium uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {issues.length === 0 ? (
                  <tr>
                    <td colSpan="7" className="px-6 py-8 text-center">
                      <div className="flex flex-col items-center justify-center">
                        <div className="bg-indigo-100 p-4 rounded-full mb-4">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                        </div>
                        <h3 className="text-lg font-medium text-gray-900 mb-1">No Issues Reported Yet</h3>
                        <p className="text-gray-500 max-w-md">
                          Be the first to raise a concern in your community. Click the "Add New Concern" button to get started.
                        </p>
                      </div>
                    </td>
                  </tr>
                ) : (
                  issues.map((issue) => (
                    <tr 
                      key={issue.id} 
                      className="hover:bg-indigo-50 transition-colors"
                    >
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        #{issue.id.toString().slice(-4)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                        <span className="font-medium">{issue.village}</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                        Ward {issue.ward}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700 max-w-xs">
                        <div className="font-medium">{issue.issue}</div>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700 max-w-xs">
                        {issue.suggestion || (
                          <span className="text-gray-400 italic">No suggestion</span>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                        <button
                          onClick={() => handleUpvote(issue.id)}
                          className={`flex items-center gap-2 px-3 py-1.5 rounded-full ${
                            issue.voters?.includes(localStorage.getItem('voterId'))
                              ? 'bg-indigo-100 text-indigo-700'
                              : 'bg-gray-100 text-gray-700 hover:bg-indigo-100 hover:text-indigo-700'
                          }`}
                          aria-label="Upvote this issue"
                        >
                          {issue.voters?.includes(localStorage.getItem('voterId')) 
                            ? <FaThumbsUp className="text-indigo-600" /> 
                            : <FaRegThumbsUp />}
                          <span className="font-medium">{issue.upvotes}</span>
                        </button>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                        <div className="flex justify-center gap-3">
                          <button
                            onClick={() => handleEditClick(issue)}
                            className="text-indigo-600 hover:text-indigo-900"
                            title="Edit issue"
                          >
                            <FaEdit />
                          </button>
                          <button
                            onClick={() => handleDeleteClick(issue.id)}
                            className="text-red-600 hover:text-red-900"
                            title="Delete issue"
                          >
                            <FaTrash />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </motion.div>
        
        {/* Info Footer */}
        <div className="mt-8 text-center text-gray-600 text-sm">
          <p>All issues are stored locally in your browser. Data will persist even after closing the browser.</p>
          <p className="mt-1">To clear all data, you can use your browser's "Clear site data" feature.</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Voices;