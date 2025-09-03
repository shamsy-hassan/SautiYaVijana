// src/pages/Profile.jsx
import React, { useState, useEffect, useRef } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FaUser, FaPhone, FaEnvelope, FaMapMarkerAlt, 
  FaBirthdayCake, FaLock, FaEdit, FaSave, 
  FaTimes, FaCamera, FaTrash, FaGlobe,
  FaUserCircle, FaIdCard
} from 'react-icons/fa';

const Profile = () => {
  const { currentUser, login, logout } = useAuth();
  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    ageGroup: "",
    location: "",
    anonymousName: "",
    bio: "",
    website: "",
  });
  const [profileImage, setProfileImage] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Redirect to login if not authenticated
  useEffect(() => {
    if (!currentUser) {
      navigate('/login');
      return;
    }

    // Load profile from backend
    const fetchProfile = async () => {
      try {
        const response = await fetch("/api/profile", {
          headers: {
            "Authorization": `Bearer ${localStorage.getItem("token")}`,
          },
        });
        if (response.ok) {
          const data = await response.json();
          setUserData({
            firstName: data.firstName || "",
            lastName: data.lastName || "",
            phone: data.phone || "",
            email: data.email || "",
            ageGroup: data.ageGroup || "",
            location: data.location || "",
            anonymousName: data.displayName || "",
            bio: data.bio || "",
            website: data.website || "",
          });
          if (data.profileImage) setProfileImage(data.profileImage);
        }
      } catch (error) {
        console.error("Error loading profile:", error);
      }
    };

    fetchProfile();
  }, [currentUser, navigate]);

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  // Handle image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (!file.type.startsWith("image/")) {
        setErrorMessage("Please upload an image file");
        setTimeout(() => setErrorMessage(""), 3000);
        return;
      }
      if (file.size > 2 * 1024 * 1024) {
        setErrorMessage("Image size should be less than 2MB");
        setTimeout(() => setErrorMessage(""), 3000);
        return;
      }

      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setProfileImage(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  // Save changes to backend
  const handleSave = async (e) => {
    e.preventDefault();

    if (!userData.firstName || !userData.lastName || !userData.anonymousName) {
      setErrorMessage("Please fill in all required fields");
      setTimeout(() => setErrorMessage(""), 3000);
      return;
    }

    try {
      const response = await fetch("/api/profile", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({
          ...userData,
          profileImage: profileImage,
        }),
      });

      if (response.ok) {
        const updatedUser = await response.json();
        login(updatedUser); // update auth context
        setIsEditing(false);
        setSuccessMessage("Profile updated successfully!");
        setTimeout(() => setSuccessMessage(""), 3000);
      } else {
        setErrorMessage("Error saving profile");
        setTimeout(() => setErrorMessage(""), 3000);
      }
    } catch (error) {
      console.error("Error updating profile:", error);
      setErrorMessage("Failed to update profile");
      setTimeout(() => setErrorMessage(""), 3000);
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
    setErrorMessage("");
  };

  if (!currentUser) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-amber-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-xl shadow-lg overflow-hidden"
        >
          {/* Profile Header */}
          <div className="bg-gradient-to-r from-green-600 to-amber-500 text-white p-8 text-center relative">
            <div className="flex flex-col items-center justify-center mb-4">
              {/* Profile Picture Section */}
              <div className="relative mb-4">
                <div className="w-32 h-32 rounded-full bg-white bg-opacity-20 border-4 border-white border-opacity-30 overflow-hidden">
                  {profileImage ? (
                    <img
                      src={profileImage}
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-green-500">
                      <FaUserCircle className="text-6xl text-white" />
                    </div>
                  )}
                </div>

                {isEditing && (
                  <div className="absolute bottom-0 right-0 flex gap-2">
                    <button
                      onClick={triggerFileInput}
                      className="bg-white text-green-600 p-2 rounded-full shadow-md hover:bg-green-50 transition"
                      title="Upload photo"
                    >
                      <FaCamera />
                    </button>
                    {profileImage && (
                      <button
                        onClick={handleRemoveImage}
                        className="bg-white text-red-600 p-2 rounded-full shadow-md hover:bg-red-50 transition"
                        title="Remove photo"
                      >
                        <FaTrash />
                      </button>
                    )}
                  </div>
                )}

                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleImageUpload}
                  accept="image/*"
                  className="hidden"
                />
              </div>

              <div>
                <h1 className="text-3xl font-bold">{userData.anonymousName}</h1>
                <p className="text-green-100">
                  {userData.firstName} {userData.lastName}
                </p>
                {userData.bio && (
                  <p className="text-green-100 mt-2 max-w-md">{userData.bio}</p>
                )}
              </div>
            </div>
          </div>

          {/* Messages */}
          {successMessage && (
            <div className="bg-green-50 border border-green-200 text-green-600 px-4 py-3 rounded-lg mx-6 mt-6">
              {successMessage}
            </div>
          )}
          {errorMessage && (
            <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg mx-6 mt-4">
              {errorMessage}
            </div>
          )}

          {/* Profile Content */}
          <div className="p-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold text-gray-800">Account Information</h2>
              {!isEditing ? (
                <button
                  onClick={() => setIsEditing(true)}
                  className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition flex items-center gap-2"
                >
                  <FaEdit /> Edit Profile
                </button>
              ) : (
                <div className="flex gap-2">
                  <button
                    onClick={handleSave}
                    className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition flex items-center gap-2"
                  >
                    <FaSave /> Save Changes
                  </button>
                  <button
                    onClick={handleCancel}
                    className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition flex items-center gap-2"
                  >
                    <FaTimes /> Cancel
                  </button>
                </div>
              )}
            </div>

            {/* FORM FIELDS (same as your first version) */}
            {/* ... keep all the form fields from your long Profile.jsx here ... */}

            {/* Action Buttons */}
            <div className="mt-8 flex justify-between">
              <Link
                to="/"
                className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition flex items-center gap-2"
              >
                ← Back to Home
              </Link>
              <button
                onClick={logout}
                className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition flex items-center gap-2"
              >
                Logout
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Profile;
