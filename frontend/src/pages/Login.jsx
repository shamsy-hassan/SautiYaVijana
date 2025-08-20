import { useState } from "react";

export default function AuthForm() {
  const [isRegistering, setIsRegistering] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    fullName: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
    ageGroup: "",
    location: "",
    ward: "",
    anonymousName: "",
  });
  
  const [loginMethod, setLoginMethod] = useState("phone");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Replace your handleSubmit function with this:
const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);
  
  if (isRegistering && formData.password !== formData.confirmPassword) {
    alert("Passwords do not match");
    setIsSubmitting(false);
    return;
  }
  
  if (isRegistering && !formData.ageGroup) {
    alert("Please select your age group");
    setIsSubmitting(false);
    return;
  }
  
  if (isRegistering && !formData.ward) {
    alert("Please select your ward");
    setIsSubmitting(false);
    return;
  }
  
  try {
    const url = isRegistering ? '/auth/register' : '/auth/login';
    let payload;
    
    if (isRegistering) {
      payload = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        fullName: formData.fullName,
        phone: formData.phone,
        email: formData.email,
        password: formData.password,
        confirmPassword: formData.confirmPassword,
        ageGroup: formData.ageGroup,
        location: formData.location,
        ward: formData.ward,
        anonymousName: formData.anonymousName
      };
    } else {
      const identifier = loginMethod === 'phone' ? formData.phone : formData.email;
      payload = {
        identifier: identifier,
        password: formData.password
      };
    }
    
    const response = await fetch(`http://localhost:5000${url}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
      credentials: 'include'
    });
    
    const data = await response.json();
    
    if (response.ok) {
      alert(isRegistering ? "Registration successful!" : "Login successful!");
      
      // Store the token in localStorage
      if (data.token) {
        localStorage.setItem('token', data.token);
        console.log('Token stored:', data.token);
      }
      
      // Reset form after successful registration
      if (isRegistering) {
        setIsRegistering(false);
        setFormData({
          firstName: "",
          lastName: "",
          fullName: "",
          phone: "",
          email: "",
          password: "",
          confirmPassword: "",
          ageGroup: "",
          location: "",
          ward: "",
          anonymousName: "",
        });
      }
    } else {
      alert(data.error || "An error occurred");
    }
  } catch (error) {
    alert("Network error. Please try again.");
    console.error("Error:", error);
  } finally {
    setIsSubmitting(false);
  }
};

  // List of all wards in Tana River County
  const tanaRiverWards = [
    "Kipini East", "Kipini West", "Garsen South", "Garsen Central", 
    "Garsen West", "Garsen North", "Kinakomba", "Mikinduni", "Chewani", 
    "Wayu", "Chewele", "Hirimani", "Bangale", "Sala", "Madogo"
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-amber-50 p-4">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md border border-green-200">
        <div className="text-center mb-6">
          <div className="mx-auto bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-green-800">
            {isRegistering ? "Create Your Anonymous Profile" : "Welcome to Tana River Youth Hub"}
          </h2>
          <p className="text-gray-600 mt-2">
            {isRegistering 
              ? "Share your requests anonymously" 
              : "Connect, share, and engage with your community"}
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          {isRegistering && (
            <>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    placeholder="Doe"
                  />
                </div>
              </div>
              
              {/* Full Name Field */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Anonymous Display Name</label>
                <input
                  type="text"
                  name="anonymousName"
                  value={formData.anonymousName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  placeholder="e.g., Youth Advocate"
                />
                <p className="text-xs text-gray-500 mt-1">This name will be shown publicly instead of your real name</p>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Location in Tana River</label>
                <select
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                >
                  <option value="">Select your location</option>
                  <option value="Garsen">Garsen</option>
                  <option value="Hola">Hola</option>
                  <option value="Bura">Bura</option>
                  <option value="Madogo">Madogo</option>
                  <option value="Kipini">Kipini</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              
              {/* Ward Selection Dropdown */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Ward in Tana River</label>
                <select
                  name="ward"
                  value={formData.ward}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                >
                  <option value="">Select your ward</option>
                  {tanaRiverWards.map(ward => (
                    <option key={ward} value={ward}>{ward}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Age Group</label>
                <div className="grid grid-cols-3 gap-2">
                  {["15-20", "21-25", "26-30", "31-35", "36+"].map(age => (
                    <label key={age} className="flex items-center">
                      <input
                        type="radio"
                        name="ageGroup"
                        value={age}
                        checked={formData.ageGroup === age}
                        onChange={handleChange}
                        required
                        className="text-green-600 focus:ring-green-500"
                      />
                      <span className="ml-2 text-gray-700">{age}</span>
                    </label>
                  ))}
                </div>
              </div>
            </>
          )}

          {!isRegistering && (
            <div className="flex border border-gray-300 rounded-lg overflow-hidden mb-4">
              <button
                type="button"
                onClick={() => setLoginMethod("phone")}
                className={`flex-1 py-2 px-4 text-sm font-medium ${
                  loginMethod === "phone"
                    ? "bg-green-600 text-white"
                    : "bg-gray-100 text-gray-700"
                }`}
              >
                Use Phone
              </button>
              <button
                type="button"
                onClick={() => setLoginMethod("email")}
                className={`flex-1 py-2 px-4 text-sm font-medium ${
                  loginMethod === "email"
                    ? "bg-green-600 text-white"
                    : "bg-gray-100 text-gray-700"
                }`}
              >
                Use Email
              </button>
            </div>
          )}

          {loginMethod === "phone" || isRegistering ? (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {isRegistering ? "Phone Number" : "Phone Number"}
              </label>
              <div className="flex">
                <div className="w-1/4 mr-2">
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500">
                    <option>+254</option>
                    <option>+255</option>
                    <option>+256</option>
                  </select>
                </div>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required={isRegistering || loginMethod === "phone"}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  placeholder="712 345 678"
                />
              </div>
              {isRegistering && (
                <p className="text-xs text-gray-500 mt-1">
                  We'll use this for important notifications
                </p>
              )}
            </div>
          ) : null}

          {(loginMethod === "email" || isRegistering) && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {isRegistering ? "Email (Optional)" : "Email"}
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required={!isRegistering && loginMethod === "email"}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                placeholder="name@example.com"
              />
              {isRegistering && (
                <p className="text-xs text-gray-500 mt-1">
                  Add an email if you want to receive updates
                </p>
              )}
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
              placeholder="••••••••"
            />
          </div>

          {isRegistering && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                placeholder="••••••••"
              />
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-3 px-4 rounded-lg font-semibold ${
              isSubmitting 
                ? "bg-gray-400 cursor-not-allowed" 
                : "bg-gradient-to-r from-green-600 to-amber-500 hover:from-green-700 hover:to-amber-600 text-white"
            }`}
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing...
              </span>
            ) : isRegistering ? (
              "Create Account"
            ) : (
              "Login to Your Account"
            )}
          </button>
        </form>

        <div className="mt-6 pt-4 border-t border-gray-200">
          <p className="text-center text-gray-600">
            {isRegistering ? "Already have an account?" : "Don't have an account?"}{" "}
            <button
              onClick={() => setIsRegistering(!isRegistering)}
              className="text-green-700 font-medium hover:text-green-800 hover:underline"
            >
              {isRegistering ? "Login here" : "Register here"}
            </button>
          </p>
        </div>

        <div className="mt-6 bg-green-50 rounded-lg p-4">
          <h3 className="font-medium text-green-800 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            Your Privacy Matters
          </h3>
          <p className="text-sm text-green-700 mt-1">
            All information is securely stored. Your personal details will never be publicly shared.
          </p>
        </div>
      </div>
    </div>
  );
}