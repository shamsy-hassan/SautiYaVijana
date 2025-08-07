// src/pages/donate/Donate.jsx
import React from 'react';

const Donate = () => (
  <div className="max-w-4xl mx-auto px-4 py-12">
    <h1 className="text-3xl font-bold text-green-700 mb-6">Support Sauti Ya Vijana</h1>
    <p className="text-lg text-gray-700 mb-6">
      Your donations power our youth programs, digital literacy workshops, and community projects.
      Every contribution—big or small—makes a difference.
    </p>

    {/* Example embed or form placeholder */}
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Choose Your Amount</h2>
      <form className="space-y-4">
        <div>
          <label className="inline-flex items-center">
            <input type="radio" name="amount" value="500" className="form-radio text-green-600" />
            <span className="ml-2 text-gray-700">KSH 500</span>
          </label>
        </div>
        <div>
          <label className="inline-flex items-center">
            <input type="radio" name="amount" value="1000" className="form-radio text-green-600" />
            <span className="ml-2 text-gray-700">KSH 1,000</span>
          </label>
        </div>
        <div>
          <label className="inline-flex items-center">
            <input type="radio" name="amount" value="2000" className="form-radio text-green-600" />
            <span className="ml-2 text-gray-700">KSH 2,000</span>
          </label>
        </div>
        <div>
          <label className="block mb-1 font-medium text-gray-700">Custom Amount</label>
          <input
            type="number"
            placeholder="Enter amount"
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition duration-300"
        >
          Donate Now
        </button>
      </form>
    </div>
  </div>
);

export default Donate;
