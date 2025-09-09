// src/context/AuthContext.jsx
import React, { createContext, useContext, useState, useEffect, useCallback } from "react";

// Vite env var (fallback to localhost)
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://127.0.0.1:5000";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(() => localStorage.getItem("token") || null);
  const [loading, setLoading] = useState(true);
  const [profileImage, setProfileImage] = useState(null);
  const [authError, setAuthError] = useState(null);

  // fetchProfile - stable (useCallback) so HMR sees a consistent export shape
  const fetchProfile = useCallback(async (accessToken) => {
    if (!accessToken) {
      setUser(null);
      setAuthError("No token");
      return false;
    }

    try {
      const cleanToken = accessToken.replace(/^["']|["']$/g, "").trim();
      const res = await fetch(`${API_BASE_URL}/auth/profile`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${cleanToken}`,
        },
      });

      if (!res.ok) {
        const text = await res.text().catch(() => "");
        console.warn("profile fetch not ok:", res.status, text);
        setUser(null);
        setAuthError(text || `HTTP ${res.status}`);
        return false;
      }

      const data = await res.json();
      setUser(data);
      setProfileImage(data.profileImage || null); // Set profile image from user data
      setAuthError(null);
      return true;
    } catch (err) {
      console.error("fetchProfile error:", err);
      setUser(null);
      setAuthError(err.message || "Network error");
      return false;
    }
  }, []);

  // Initialize auth once on app load
  useEffect(() => {
    let mounted = true;
    const init = async () => {
      const stored = localStorage.getItem("token");
      if (stored) {
        setToken(stored);
        await fetchProfile(stored);
      }
      if (mounted) setLoading(false);
    };
    init();
    return () => { mounted = false; };
  }, [fetchProfile]);

  // login
  const login = useCallback(async ({ email, password }) => {
    const res = await fetch(`${API_BASE_URL}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const text = await res.text();
    let data;
    try { data = JSON.parse(text); } catch { throw new Error(`Invalid JSON: ${text}`); }

    if (!res.ok) throw new Error(data.msg || data.error || data.message || `HTTP ${res.status}`);
    const t = data.access_token || data.token || data.accessToken;
    if (!t) throw new Error("No access token received");

    localStorage.setItem("token", t);
    setToken(t);
    await fetchProfile(t);
    return data;
  }, [fetchProfile]);

  // register
  const register = useCallback(async (payload) => {
    const res = await fetch(`${API_BASE_URL}/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const text = await res.text();
    let data;
    try { data = JSON.parse(text); } catch { throw new Error(`Invalid JSON: ${text}`); }

    if (!res.ok) throw new Error(data.msg || data.error || data.message || `HTTP ${res.status}`);
    const t = data.access_token || data.token || data.accessToken;
    if (!t) throw new Error("No access token received");

    localStorage.setItem("token", t);
    setToken(t);
    await fetchProfile(t);
    return data;
  }, [fetchProfile]);

  // logout
  const logout = useCallback(() => {
    localStorage.removeItem("token");
    setToken(null);
    setUser(null);
    setProfileImage(null);
    setAuthError(null);
  }, []);

  // Update profile image in context - fixed to handle null user
  const updateProfileImage = useCallback((imageUrl) => {
    setProfileImage(imageUrl);
    // Also update the user object if it exists
    setUser(prevUser => {
      if (prevUser) {
        return { ...prevUser, profileImage: imageUrl };
      }
      return prevUser;
    });
  }, []);

  return (
    <AuthContext.Provider value={{
      user,
      setUser,    // exposed so Profile can update global user immediately
      token,
      setToken,
      loading,     // indicates auth initialization (use in ProtectedRoute)
      authError,
      fetchProfile,
      login,
      register,
      logout,
      profileImage,
      updateProfileImage
    }}>
      {children}
    </AuthContext.Provider>
  );
};

// put hook at bottom — stable export layout for Vite HMR
export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within an AuthProvider");
  return ctx;
};