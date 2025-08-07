import React from 'react';
import { motion } from 'framer-motion'; // ✅ This is required for using <motion.div>

const AboutSYV = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-4xl mx-auto px-4 py-10"
    >
      <h1 className="text-3xl font-bold text-green-700 mb-4">About Sauti Ya Vijana</h1>
      <p className="text-lg text-gray-700">
        Sauti Ya Vijana (SYV) is a youth-led initiative focused on amplifying the voices of young people in underserved communities...
      </p>
    </motion.div>
  );
};

export default AboutSYV;
