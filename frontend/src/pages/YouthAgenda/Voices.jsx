// src/components/Voices.jsx
import React, { useState, useEffect } from 'react';
import { FaThumbsUp, FaRegThumbsUp, FaTrash, FaEdit, FaUser, FaSignInAlt, FaSignOutAlt, FaComment, FaRegComment, FaCheck, FaTimes, FaReply, FaSmile } from 'react-icons/fa';

import { motion } from 'framer-motion';
import EmojiPicker from "emoji-picker-react";
const API_BASE_URL = 'http://localhost:5000';



// Add this function to your Voices component
const handleDeleteClick = async (id) => {
  if (window.confirm('Are you sure you want to delete this issue?')) {
    const success = await deleteIssue(id);
    
    if (success) {
      setIssues(issues.filter(issue => issue.id !== id));
    } else {
      alert('Failed to delete issue');
    }
  }
};
// API endpoints (replace with your actual API URLs)

const API_ENDPOINTS = {
  ISSUES: `${API_BASE_URL}/api/issues`,
  USERS: `${API_BASE_URL}/api/users`,
  COMMENTS: `${API_BASE_URL}/api/comments`,
  LOGIN: `${API_BASE_URL}/api/auth/login`,
  REGISTER: `${API_BASE_URL}/api/auth/register`
};
const Voices = () => {
  const [issues, setIssues] = useState([]);
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

  // Comment state
  const [activeCommentId, setActiveCommentId] = useState(null);
  const [commentText, setCommentText] = useState('');
  const [replyingTo, setReplyingTo] = useState(null);
  const [showEmojiPicker, setShowEmojiPicker] = useState(null);

  // Load user and issues from API on initial render
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Check if user is logged in
        const token = localStorage.getItem('authToken');
        if (token) {
          const userResponse = await fetch(`${API_ENDPOINTS.USERS}/me`, {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          });
          
          if (userResponse.ok) {
            const userData = await userResponse.json();
            setCurrentUser(userData);
          }
        }

        // Fetch issues
        const issuesResponse = await fetch(API_ENDPOINTS.ISSUES);
        if (issuesResponse.ok) {
          const issuesData = await issuesResponse.json();
          setIssues(issuesData);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // API call functions
  const createIssue = async (issueData) => {
    try {
      const token = localStorage.getItem('authToken');
      const response = await fetch(API_ENDPOINTS.ISSUES, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(issueData)
      });
      
      if (response.ok) {
        return await response.json();
      }
      return null;
    } catch (error) {
      console.error('Error creating issue:', error);
      return null;
    }
  };

  const updateIssue = async (id, issueData) => {
    try {
      const token = localStorage.getItem('authToken');
      const response = await fetch(`${API_ENDPOINTS.ISSUES}/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(issueData)
      });
      
      if (response.ok) {
        return await response.json();
      }
      return null;
    } catch (error) {
      console.error('Error updating issue:', error);
      return null;
    }
  };

  const deleteIssue = async (id) => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`${API_ENDPOINTS.ISSUES}/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      
      return response.ok;
    } catch (error) {
      console.error('Error deleting issue:', error);
      return false;
    }
  };

  const upvoteIssue = async (id, voterId) => {
    try {
      const response = await fetch(`${API_ENDPOINTS.ISSUES}/${id}/upvote`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ voterId })
      });
      
      if (response.ok) {
        return await response.json();
      }
      return null;
    } catch (error) {
      console.error('Error upvoting issue:', error);
      return null;
    }
  };

  const toggleResolvedStatus = async (id, resolved) => {
    try {
      const token = localStorage.getItem('authToken');
      const response = await fetch(`${API_ENDPOINTS.ISSUES}/${id}/resolve`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ resolved })
      });
      
      if (response.ok) {
        return await response.json();
      }
      return null;
    } catch (error) {
      console.error('Error toggling resolved status:', error);
      return null;
    }
  };

  const addComment = async (issueId, commentData) => {
    try {
      const token = localStorage.getItem('authToken');
      const response = await fetch(`${API_ENDPOINTS.ISSUES}/${issueId}/comments`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(commentData)
      });
      
      if (response.ok) {
        return await response.json();
      }
      return null;
    } catch (error) {
      console.error('Error adding comment:', error);
      return null;
    }
  };

  const addReply = async (commentId, replyData) => {
    try {
      const token = localStorage.getItem('authToken');
      const response = await fetch(`${API_ENDPOINTS.COMMENTS}/${commentId}/replies`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(replyData)
      });
      
      if (response.ok) {
        return await response.json();
      }
      return null;
    } catch (error) {
      console.error('Error adding reply:', error);
      return null;
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('sautiUser');
    setCurrentUser(null);
  };

  // Comment handlers
  const toggleComments = (id) => {
    setActiveCommentId(activeCommentId === id ? null : id);
    setCommentText('');
    setReplyingTo(null);
    setShowEmojiPicker(null);
  };

  const handleCommentChange = (e) => {
    setCommentText(e.target.value);
  };

  const handleAddComment = async (issueId) => {
    if (!commentText.trim()) return;

    const commentData = {
      text: commentText,
      parentId: replyingTo
    };

    const newComment = await addComment(issueId, commentData);
    
    if (newComment) {
      setIssues(
        issues.map(issue => {
          if (issue.id === issueId) {
            if (replyingTo) {
              // Add as a reply to an existing comment
              const updateComments = (comments) => {
                return comments.map(comment => {
                  if (comment.id === replyingTo) {
                    return {
                      ...comment,
                      replies: [...(comment.replies || []), newComment]
                    };
                  } else if (comment.replies && comment.replies.length > 0) {
                    return {
                      ...comment,
                      replies: updateComments(comment.replies)
                    };
                  }
                  return comment;
                });
              };
              
              return {
                ...issue,
                comments: updateComments(issue.comments)
              };
            } else {
              // Add as a top-level comment
              return {
                ...issue,
                comments: [...issue.comments, newComment]
              };
            }
          }
          return issue;
        })
      );
      
      setCommentText('');
      setReplyingTo(null);
    } else {
      alert('Failed to add comment');
    }
  };

  const handleReply = (commentId) => {
    setReplyingTo(commentId);
    setCommentText('');
  };

  const handleEmojiClick = (commentId, emojiData) => {
    setShowEmojiPicker(showEmojiPicker === commentId ? null : commentId);
  };

  const addEmojiReaction = async (commentId, emoji) => {
    try {
      const token = localStorage.getItem('authToken');
      const response = await fetch(`${API_ENDPOINTS.COMMENTS}/${commentId}/reactions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ emoji })
      });
      
      if (response.ok) {
        const updatedComment = await response.json();
        
        // Update the comment with the new reaction
        setIssues(prevIssues => {
          const updateComments = (comments) => {
            return comments.map(comment => {
              if (comment.id === commentId) {
                return updatedComment;
              } else if (comment.replies && comment.replies.length > 0) {
                return {
                  ...comment,
                  replies: updateComments(comment.replies)
                };
              }
              return comment;
            });
          };
          
          return prevIssues.map(issue => {
            return {
              ...issue,
              comments: updateComments(issue.comments)
            };
          });
        });
      }
    } catch (error) {
      console.error('Error adding reaction:', error);
    }
  };

  // Original handlers
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (editingId) {
      // Update existing issue
      const updatedIssue = await updateIssue(editingId, formData);
      
      if (updatedIssue) {
        setIssues(
          issues.map((issue) => 
            issue.id === editingId ? updatedIssue : issue
          )
        );
        setEditingId(null);
      } else {
        alert('Failed to update issue');
      }
    } else {
      // Create new issue
      const newIssue = await createIssue({
        ...formData,
        userId: currentUser?.id || null
      });
      
      if (newIssue) {
        setIssues([newIssue, ...issues]);
      } else {
        alert('Failed to create issue');
      }
    }
    
    setFormData({ village: '', ward: '', issue: '', suggestion: '' });
    setShowForm(false);
  };

  const handleUpvote = async (id) => {
    // Generate a unique voter ID for anonymous tracking
    const voterId = localStorage.getItem('voterId') || `voter-${Date.now()}`;
    localStorage.setItem('voterId', voterId);
    
    const updatedIssue = await upvoteIssue(id, voterId);
    
    if (updatedIssue) {
      setIssues(
        issues.map((issue) => 
          issue.id === id ? updatedIssue : issue
        )
      );
    }
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

  const toggleResolved = async (id) => {
    const issue = issues.find(issue => issue.id === id);
    const newResolvedStatus = !issue.resolved;
    
    const updatedIssue = await toggleResolvedStatus(id, newResolvedStatus);
    
    if (updatedIssue) {
      setIssues(
        issues.map(issue => 
          issue.id === id ? updatedIssue : issue
        )
      );
    } else {
      alert('Failed to update issue status');
    }
  };

  const onEmojiClick = (emojiData, commentId) => {
    addEmojiReaction(commentId, emojiData.emoji);
    setShowEmojiPicker(null);
  };

  // Recursive component for rendering nested comments
  const CommentItem = ({ comment, depth = 0 }) => {
    const hasReplies = comment.replies && comment.replies.length > 0;
    
    return (
      <div className={`bg-white p-4 rounded-lg shadow-sm border border-gray-200 ${depth > 0 ? 'ml-6' : ''}`}>
        <div className="flex justify-between">
          <div className="font-medium text-indigo-700">{comment.userName}</div>
          <div className="text-xs text-gray-500">
            {new Date(comment.timestamp).toLocaleString()}
          </div>
        </div>
        <p className="mt-2 text-gray-700">{comment.text}</p>
        
        <div className="mt-3 flex items-center gap-3">
          <button 
            onClick={() => handleEmojiClick(comment.id)}
            className="text-gray-500 hover:text-yellow-500 flex items-center gap-1"
          >
            <FaSmile />
            <span>React</span>
          </button>
          
          <button 
            onClick={() => handleReply(comment.id)}
            className="text-gray-500 hover:text-purple-600 flex items-center gap-1"
          >
            <FaReply />
            <span>Reply</span>
          </button>
        </div>
        
        {showEmojiPicker === comment.id && (
          <div className="absolute z-10 mt-1">
            <EmojiPicker onEmojiClick={(e) => onEmojiClick(e, comment.id)} />
          </div>
        )}
        
        {comment.reactions && comment.reactions.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1">
            {comment.reactions.map((reaction, idx) => (
              <span key={idx} className="text-sm">
                {reaction.emoji} {reaction.count > 1 ? reaction.count : ''}
              </span>
            ))}
          </div>
        )}
        
        {replyingTo === comment.id && (
          <div className="mt-4 bg-gray-50 p-3 rounded-lg">
            <textarea 
              value={commentText} 
              onChange={handleCommentChange}
              placeholder="Write your reply..." 
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-300 focus:border-purple-500" 
              rows="2"
            />
            <div className="flex justify-end mt-2 gap-2">
              <button 
                onClick={() => setReplyingTo(null)}
                className="px-3 py-1 text-gray-600 hover:text-gray-800"
              >
                Cancel
              </button>
              <button 
                onClick={() => handleAddComment(activeCommentId)}
                disabled={!commentText.trim()}
                className={`px-3 py-1 rounded-lg ${
                  commentText.trim() 
                    ? 'bg-purple-600 text-white hover:bg-purple-700' 
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                Post Reply
              </button>
            </div>
          </div>
        )}
        
        {hasReplies && (
          <div className="mt-4 space-y-4">
            {comment.replies.map(reply => (
              <CommentItem key={reply.id} comment={reply} depth={depth + 1} />
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.5 }} 
      className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100 py-8 px-4"
    >
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
                <span className="font-medium text-indigo-900">{currentUser.displayName}</span>
                <button 
                  onClick={handleLogout} 
                  className="text-indigo-700 hover:text-indigo-900 ml-2" 
                  title="Logout"
                >
                  <FaSignOutAlt />
                </button>
              </div>
            ) : null}

            <button 
              onClick={() => setShowForm(true)} 
              className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition flex items-center gap-2 shadow-lg"
            >
              <span className="text-xl">+</span>
              Add New Concern
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
                <label className="block text-sm font-medium text-gray-700 mb-2">Village</label>
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
                <label className="block text-sm font-medium text-gray-700 mb-2">Ward</label>
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
                <label className="block text-sm font-medium text-gray-700 mb-2">Issue Description</label>
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
                <label className="block text-sm font-medium text-gray-700 mb-2">Suggestions (Optional)</label>
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
                  <span>📤</span>
                  {editingId ? "Update Issue" : "Submit Concern"}
                </button>
              </div>
            </form>
          </motion.div>
        )}

        {/* Stats Summary */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mb-8">
          <div className="bg-white p-5 rounded-xl shadow-md border-l-4 border-indigo-500">
            <h3 className="text-gray-600 text-sm font-medium">Total Issues</h3>
            <p className="text-3xl font-bold text-indigo-700 mt-1">{issues.length}</p>
          </div>

          <div className="bg-white p-5 rounded-xl shadow-md border-l-4 border-green-500">
            <h3 className="text-gray-600 text-sm font-medium">Resolved Issues</h3>
            <p className="text-3xl font-bold text-green-700 mt-1">
              {issues.filter(issue => issue.resolved).length}
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl shadow-md border-l-4 border-purple-500">
            <h3 className="text-gray-600 text-sm font-medium">Total Comments</h3>
            <p className="text-3xl font-bold text-purple-700 mt-1">
              {issues.reduce((sum, issue) => sum + (issue.comments ? issue.comments.length : 0), 0)}
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl shadow-md border-l-4 border-blue-500">
            <h3 className="text-gray-600 text-sm font-medium">Most Active Village</h3>
            <p className="text-xl font-bold text-blue-700 mt-1 truncate">
              {issues.length > 0 
                ? [...new Set(issues.map(i => i.village))]
                    .sort((a, b) => 
                      issues.filter(i => i.village === b).length - 
                      issues.filter(i => i.village === a).length
                    )[0] 
                : 'None'
              }
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
                  <th scope="col" className="px-6 py-4 text-left text-sm font-medium uppercase tracking-wider">ID</th>
                  <th scope="col" className="px-6 py-4 text-left text-sm font-medium uppercase tracking-wider">Village</th>
                  <th scope="col" className="px-6 py-4 text-left text-sm font-medium uppercase tracking-wider">Ward</th>
                  <th scope="col" className="px-6 py-4 text-left text-sm font-medium uppercase tracking-wider">Issue</th>
                  <th scope="col" className="px-6 py-4 text-left text-sm font-medium uppercase tracking-wider">Suggestion</th>
                  <th scope="col" className="px-6 py-4 text-center text-sm font-medium uppercase tracking-wider">Votes</th>
                  <th scope="col" className="px-6 py-4 text-center text-sm font-medium uppercase tracking-wider">Comments</th>
                  <th scope="col" className="px-6 py-4 text-center text-sm font-medium uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {issues.length === 0 ? (
                  <tr>
                    <td colSpan="8" className="px-6 py-8 text-center">
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
                    <React.Fragment key={issue.id}>
                      <tr className="hover:bg-indigo-50 transition-colors">
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
                              : <FaRegThumbsUp />
                            }
                            <span className="font-medium">{issue.upvotes || 0}</span>
                          </button>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                          <button 
                            onClick={() => toggleComments(issue.id)} 
                            className={`flex items-center gap-2 px-3 py-1.5 rounded-full ${
                              activeCommentId === issue.id 
                                ? 'bg-purple-100 text-purple-700' 
                                : 'bg-gray-100 text-gray-700 hover:bg-purple-100 hover:text-purple-700'
                            }`}
                          >
                            {activeCommentId === issue.id 
                              ? <FaComment className="text-purple-600" /> 
                              : <FaRegComment />
                            }
                            <span className="font-medium">{issue.comments ? issue.comments.length : 0}</span>
                          </button>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                          <div className="flex justify-center gap-3">
                            {issue.resolved ? null : (
                              <>
                                {currentUser && (currentUser.id === issue.userId || !issue.userId) && (
                                  <>
                                    <button 
                                      onClick={() => handleEdit(issue)} 
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
                                  </>
                                )}
                              </>
                            )}
                            {currentUser && (currentUser.id === issue.userId || !issue.userId) && (
                              <button 
                                onClick={() => toggleResolved(issue.id)} 
                                className={`${
                                  issue.resolved 
                                    ? 'text-yellow-600 hover:text-yellow-800' 
                                    : 'text-green-600 hover:text-green-800'
                                }`} 
                                title={issue.resolved ? "Mark as open" : "Mark as resolved"}
                              >
                                {issue.resolved ? <FaTimes /> : <FaCheck />}
                              </button>
                            )}
                          </div>
                        </td>
                      </tr>

                      {/* Comment Section */}
                      {activeCommentId === issue.id && (
                        <tr>
                          <td colSpan="8" className="bg-gray-50 p-4">
                            <div className="max-w-4xl mx-auto">
                              <div className="flex justify-between items-center mb-4">
                                <h3 className="text-lg font-semibold text-gray-800">
                                  Comments ({issue.comments ? issue.comments.length : 0})
                                </h3>
                                <button 
                                  onClick={() => {
                                    setActiveCommentId(null);
                                    setReplyingTo(null);
                                  }} 
                                  className="text-gray-500 hover:text-gray-700"
                                >
                                  <FaTimes />
                                </button>
                              </div>

                              <div className="space-y-4 mb-6">
                                {issue.comments && issue.comments.length > 0 ? (
                                  issue.comments.map(comment => (
                                    <CommentItem key={comment.id} comment={comment} />
                                  ))
                                ) : (
                                  <div className="text-center py-8 text-gray-500">
                                    No comments yet. Be the first to comment!
                                  </div>
                                )}
                              </div>

                              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                                <textarea 
                                  value={commentText} 
                                  onChange={handleCommentChange} 
                                  placeholder={replyingTo ? "Write your reply..." : "Add your comment..."} 
                                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-300 focus:border-purple-500" 
                                  rows="3"
                                ></textarea>
                                <div className="flex justify-end mt-3">
                                  {replyingTo && (
                                    <button 
                                      onClick={() => setReplyingTo(null)}
                                      className="px-4 py-2 text-gray-600 hover:text-gray-800 mr-2"
                                    >
                                      Cancel Reply
                                    </button>
                                  )}
                                  <button 
                                    onClick={() => handleAddComment(issue.id)} 
                                    disabled={!commentText.trim()} 
                                    className={`px-4 py-2 rounded-lg ${
                                      commentText.trim() 
                                        ? 'bg-purple-600 text-white hover:bg-purple-700' 
                                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                    }`}
                                  >
                                    {replyingTo ? 'Post Reply' : 'Post Comment'}
                                  </button>
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                      )}
                    </React.Fragment>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Info Footer */}
        <div className="mt-8 text-center text-gray-600 text-sm">
          <p>All issues are stored securely on our servers. Your data is protected and accessible across devices.</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Voices;