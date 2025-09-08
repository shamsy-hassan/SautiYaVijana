// src/services/api.js
const API_URL = "http://127.0.0.1:5000"; // Flask backend

// ===== AUTH =====
export const registerUser = async (userData) => {
  const res = await fetch(`${API_URL}/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  });
  return res.json();
};

export const loginUser = async (credentials) => {
  const res = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credentials),
  });
  return res.json();
};

export const getProfile = async (token) => {
  const res = await fetch(`${API_URL}/auth/profile`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.json();
};

// ===== ISSUES =====
export const getIssues = async () => {
  const res = await fetch(`${API_URL}/issues`);
  return res.json();
};

export const createIssue = async (token, issueData) => {
  const res = await fetch(`${API_URL}/issues`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(issueData),
  });
  return res.json();
};

export const addComment = async (token, issueId, comment) => {
  const res = await fetch(`${API_URL}/issues/${issueId}/comments`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ comment }),
  });
  return res.json();
};

export const upvoteIssue = async (token, issueId) => {
  const res = await fetch(`${API_URL}/issues/${issueId}/upvote`, {
    method: "POST",
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.json();
};
