// src/context/AuthContext.jsx
import React, { createContext, useContext, useState, useEffect } from "react";

// ✅ Use Vite environment variable with fallback
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://127.0.0.1:5000";

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [loading, setLoading] = useState(true);
  const [authError, setAuthError] = useState(null);

  // Run once on app load to restore session
  useEffect(() => {
    const initializeAuth = async () => {
      const storedToken = localStorage.getItem("token");

      if (storedToken && storedToken !== "null") {
        setToken(storedToken);
        await fetchProfile(storedToken);
      }
      setLoading(false);
    };

    initializeAuth();
  }, []);

  // 🔹 Fetch profile with token
  const fetchProfile = async (accessToken) => {
    try {
      console.log("Fetching profile with token:", accessToken);

      const cleanToken = accessToken.replace(/^["']|["']$/g, "").trim();

      const res = await fetch(`${API_BASE_URL}/auth/profile`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${cleanToken}`,
        },
      });

      console.log("Response status:", res.status);

      if (!res.ok) {
        const errorText = await res.text();
        console.error("Server response:", errorText);
        setAuthError("Session expired. Please log in again.");
        return; // ❌ Don’t force logout, just mark error
      }

      const data = await res.json();
      setUser(data);
      setAuthError(null); // clear previous errors
      console.log("✅ Profile fetched successfully:", data);
    } catch (err) {
      console.error("❌ Profile fetch error:", err.message);
      setAuthError("Unable to fetch profile. Please try again.");
    }
  };

  // 🔹 Login
  const login = async ({ email, password }) => {
    try {
      const res = await fetch(`${API_BASE_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const text = await res.text();
      let data;

      try {
        data = JSON.parse(text);
      } catch {
        throw new Error(`Invalid JSON response: ${text}`);
      }

      if (!res.ok) {
        throw new Error(
          data.msg ||
            data.error ||
            data.message ||
            `HTTP error! status: ${res.status}`
        );
      }

      if (!data.access_token) {
        throw new Error("No access token received in response");
      }

      const cleanToken = data.access_token.replace(/^["']|["']$/g, "").trim();

      localStorage.setItem("token", cleanToken);
      setToken(cleanToken);

      await fetchProfile(cleanToken);

      return data;
    } catch (err) {
      console.error("❌ Login error:", err.message);
      throw err;
    }
  };

  // 🔹 Register
  const register = async (newUser) => {
    try {
      const res = await fetch(`${API_BASE_URL}/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(newUser),
      });

      const text = await res.text();
      let data;

      try {
        data = JSON.parse(text);
      } catch {
        throw new Error(`Invalid JSON response: ${text}`);
      }

      if (!res.ok) {
        throw new Error(
          data.msg ||
            data.error ||
            data.message ||
            `HTTP error! status: ${res.status}`
        );
      }

      if (!data.access_token) {
        throw new Error("No access token received in response");
      }

      const cleanToken = data.access_token.replace(/^["']|["']$/g, "").trim();

      localStorage.setItem("token", cleanToken);
      setToken(cleanToken);

      await fetchProfile(cleanToken);

      return data;
    } catch (err) {
      console.error("❌ Register error:", err.message);
      throw err;
    }
  };

  // 🔹 Logout
  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("token");
    setAuthError(null);
    console.log("✅ User logged out");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        setUser,     // expose so Profile.jsx can call setUser
        login,
        register,
        logout,
        loading,
        fetchProfile,
        authError,   // expose error state
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
