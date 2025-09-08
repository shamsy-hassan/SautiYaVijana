import React, { useState, useEffect, useRef } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaUserCircle, FaCamera, FaTrash, FaEdit, FaSave, FaTimes } from 'react-icons/fa';

const Profile = () => {
  const { user, token, logout, setUser } = useAuth();
  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState({ ...user });
  const [profileImage, setProfileImage] = useState(user?.profileImage || null);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (!user || !token) navigate('/login');
  }, [user, token, navigate]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData(prev => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (!file.type.startsWith("image/")) return alert("Please upload an image");
      const reader = new FileReader();
      reader.onload = (e) => setProfileImage(e.target.result);
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setProfileImage(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const triggerFileInput = () => fileInputRef.current?.click();

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://127.0.0.1:5000/auth/profile", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ ...userData, profileImage }),
      });
      if (!res.ok) throw new Error("Failed to update profile");
      const updatedUser = await res.json();
      setUser(updatedUser); // update context
      setSuccessMessage("Profile updated successfully!");
      setIsEditing(false);
      setTimeout(() => setSuccessMessage(""), 3000);
    } catch (err) {
      setErrorMessage(err.message || "Failed to update profile");
      setTimeout(() => setErrorMessage(""), 3000);
    }
  };

  if (!user) return null;

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
              <div className="relative mb-4">
                <div className="w-32 h-32 rounded-full bg-white bg-opacity-20 border-4 border-white overflow-hidden">
                  {profileImage ? <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
                    : <FaUserCircle className="text-6xl text-white w-full h-full" />}
                </div>

                {isEditing && (
                  <div className="absolute bottom-0 right-0 flex gap-2">
                    <button onClick={triggerFileInput} className="bg-white text-green-600 p-2 rounded-full"><FaCamera /></button>
                    {profileImage && <button onClick={handleRemoveImage} className="bg-white text-red-600 p-2 rounded-full"><FaTrash /></button>}
                  </div>
                )}

                <input type="file" ref={fileInputRef} onChange={handleImageUpload} className="hidden" accept="image/*" />
              </div>

              <h1 className="text-3xl font-bold">{userData.anonymousName}</h1>
              <p className="text-green-100">{userData.firstName} {userData.lastName}</p>
              {userData.bio && <p className="text-green-100 mt-2 max-w-md">{userData.bio}</p>}
            </div>
          </div>

          {successMessage && <div className="bg-green-50 border border-green-200 text-green-600 px-4 py-3 rounded-lg mx-6 mt-6">{successMessage}</div>}
          {errorMessage && <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg mx-6 mt-4">{errorMessage}</div>}

          <div className="p-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold text-gray-800">Account Information</h2>
              {!isEditing
                ? <button onClick={() => setIsEditing(true)} className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 flex items-center gap-2"><FaEdit /> Edit Profile</button>
                : <div className="flex gap-2">
                    <button onClick={handleSave} className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 flex items-center gap-2"><FaSave /> Save Changes</button>
                    <button onClick={() => setIsEditing(false)} className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 flex items-center gap-2"><FaTimes /> Cancel</button>
                  </div>}
            </div>

            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {["firstName","lastName","phone","ageGroup","location","anonymousName","website"].map(field => (
                <div key={field}>
                  <label className="block text-gray-700">{field.replace(/([A-Z])/g, ' $1')}</label>
                  <input type="text" name={field} value={userData[field] || ''} onChange={handleInputChange} disabled={!isEditing} className="w-full px-4 py-2 border rounded-lg mt-1"/>
                </div>
              ))}
              <div className="md:col-span-2">
                <label className="block text-gray-700">Bio</label>
                <textarea name="bio" value={userData.bio || ''} onChange={handleInputChange} disabled={!isEditing} className="w-full px-4 py-2 border rounded-lg mt-1" rows="3"/>
              </div>
            </form>

            <div className="mt-8 flex justify-between">
              <Link to="/" className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 flex items-center gap-2">← Back to Home</Link>
              <button onClick={logout} className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 flex items-center gap-2">Logout</button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Profile;
