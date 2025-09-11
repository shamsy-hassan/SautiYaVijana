// src/context/AuthContext.jsx
import React, { createContext, useContext, useState, useEffect, useCallback } from "react";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://127.0.0.1:5000";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(() => localStorage.getItem("token") || null);
  const [loading, setLoading] = useState(true);
  const [profileImage, setProfileImage] = useState(null);
  const [authError, setAuthError] = useState(null);

  // ✅ Serialize & set user consistently
  const handleSetUser = useCallback((data) => {
    if (!data) {
      setUser(null);
      setProfileImage(null);
      return;
    }
    setUser(data);
    setProfileImage(data.profileImage || null);
  }, []);

  // ✅ Fetch Profile
  const fetchProfile = useCallback(async (accessToken) => {
  if (!accessToken || accessToken === "undefined") {
    handleSetUser(null);
    setAuthError("No token or invalid token");
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
      handleSetUser(null);
      setAuthError(text || `HTTP ${res.status}`);
      return false;
    }

    const data = await res.json();
    handleSetUser(data); // all fields now available
    setAuthError(null);
    return true;
  } catch (err) {
    console.error("fetchProfile error:", err);
    handleSetUser(null);
    setAuthError(err.message || "Network error");
    return false;
  }
}, [handleSetUser]);


  // ✅ Initialize auth on app load
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

  // ✅ Login
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

    // ✅ set user immediately from response instead of waiting fetchProfile
    if (data.user) handleSetUser(data.user);
    else await fetchProfile(t);

    return data;
  }, [fetchProfile, handleSetUser]);

  // ✅ Register
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

    // ✅ set user immediately from response instead of waiting fetchProfile
    if (data.user) handleSetUser(data.user);
    else await fetchProfile(t);

    return data;
  }, [fetchProfile, handleSetUser]);

  // ✅ Logout
  const logout = useCallback(() => {
    localStorage.removeItem("token");
    setToken(null);
    handleSetUser(null);
    setAuthError(null);
  }, [handleSetUser]);

  // ✅ Update profile image globally
  const updateProfileImage = useCallback((imageUrl) => {
    setProfileImage(imageUrl);
    setUser(prev => prev ? { ...prev, profileImage: imageUrl } : prev);
  }, []);

  return (
    <AuthContext.Provider value={{
      user,
      setUser,   // still exposed for manual updates
      token,
      setToken,
      loading,
      authError,
      fetchProfile,
      login,
      register,
      logout,
      profileImage,
      updateProfileImage,
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within an AuthProvider");
  return ctx;
};
