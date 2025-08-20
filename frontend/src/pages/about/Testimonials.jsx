import React, { useState } from 'react';
import { FaQuoteLeft } from 'react-icons/fa';
import { motion } from 'framer-motion';

const content = {
  en: {
    title: "Voices That Inspire",
    intro: "Hear from the youth whose lives were transformed by Sauti Ya Vijana programs in Tana River.",
    ctaTitle: "Be the Next Story of Change",
    ctaText: "Join hundreds of empowered youth making a difference through our mentorship and support programs.",
    button: "Get Involved",
    formTitle: "Submit Your Story",
    name: "Full Name",
    location: "Location (Village/Town)",
    message: "Your Story or Message",
    submit: "Submit Testimonial",
    testimonials: [
      {
        id: 1,
        name: "Halima Hassan",
        role: "Tailor & Youth Leader, Hola",
        quote: "Through SYV training, I started my tailoring business and now mentor other young girls.",
        image: "https://source.unsplash.com/80x80/?african,woman",
      },
      {
        id: 2,
        name: "Mohamed Bura",
        role: "Community Health Volunteer, Bura",
        quote: "This program helped us raise health awareness and encouraged youth to join development efforts.",
        image: "https://source.unsplash.com/80x80/?african,man",
      },
      {
        id: 3,
        name: "Amina Jillo",
        role: "Student & Digital Skills Trainee, Garsen",
        quote: "I learned to use a computer and can now work online. It changed my life and family.",
        image: "https://source.unsplash.com/80x80/?student,african",
      },
      {
        id: 4,
        name: "Fatuma Said",
        role: "Farmer & Mother, Tana Delta",
        quote: "My farming business improved greatly thanks to the entrepreneurship skills I gained.",
        image: "https://source.unsplash.com/80x80/?farmer,africa",
      },
    ],
  },

  sw: {
    title: "Sauti za Mabadiliko",
    intro: "Sikiliza simulizi kutoka kwa vijana wa Tana River waliobadilishwa maisha yao na programu za Sauti Ya Vijana.",
    ctaTitle: "Kuwa Sehemu ya Mabadiliko",
    ctaText: "Jiunge na vijana waliowezeshwa kupitia mafunzo, ushauri na msaada wa SYV.",
    button: "Jihusishe Nasi",
    formTitle: "Tuma Ushuhuda Wako",
    name: "Jina Kamili",
    location: "Eneo (Kijiji/Mji)",
    message: "Simulizi au Ujumbe Wako",
    submit: "Tuma Ushuhuda",
    testimonials: [
      {
        id: 1,
        name: "Halima Hassan",
        role: "Fundi & Kiongozi wa Vijana, Hola",
        quote: "Kupitia mafunzo ya SYV, nimeanzisha biashara ya kushona na nawasaidia wasichana wengine.",
        image: "https://source.unsplash.com/80x80/?african,woman",
      },
      {
        id: 2,
        name: "Mohamed Bura",
        role: "Mwanaharakati wa Afya ya Jamii, Bura",
        quote: "Mpango huu umetusaidia kutoa elimu ya afya na kuhimiza vijana kushiriki maendeleo.",
        image: "https://source.unsplash.com/80x80/?african,man",
      },
      {
        id: 3,
        name: "Amina Jillo",
        role: "Mwanafunzi, Garsen",
        quote: "Nilijifunza kutumia kompyuta na sasa nafanya kazi mtandaoni. Maisha yangu yamebadilika.",
        image: "https://source.unsplash.com/80x80/?student,african",
      },
      {
        id: 4,
        name: "Fatuma Said",
        role: "Mkulima & Mama, Tana Delta",
        quote: "Biashara yangu ya kilimo imeimarika sana kutokana na ujuzi wa ujasiriamali niliopata.",
        image: "https://source.unsplash.com/80x80/?farmer,africa",
      },
    ],
  },
};

const Testimonials = () => {
  const [lang, setLang] = useState("sw");
  const t = content[lang];
  
  // State for form data
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    message: ''
  });
  
  // State for custom testimonials
  const [customTestimonials, setCustomTestimonials] = useState([]);
  
  // State for form submission status
  const [submissionStatus, setSubmissionStatus] = useState(null);
  
  // State for form errors
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate form
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = t.name;
    if (!formData.location.trim()) newErrors.location = t.location;
    if (!formData.message.trim()) newErrors.message = t.message;
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    // Create new testimonial
    const newTestimonial = {
      id: Date.now(),
      name: formData.name,
      role: `${lang === 'en' ? 'Community Member' : 'Mwanajamii'}, ${formData.location}`,
      quote: formData.message,
      image: "https://source.unsplash.com/80x80/?portrait,african"
    };
    
    // Add to custom testimonials
    setCustomTestimonials(prev => [newTestimonial, ...prev]);
    
    // Reset form and show success
    setFormData({ name: '', location: '', message: '' });
    setSubmissionStatus('success');
    
    // Clear success message after 3 seconds
    setTimeout(() => setSubmissionStatus(null), 3000);
  };

  // Combine static and custom testimonials
  const allTestimonials = [...customTestimonials, ...t.testimonials];

  return (
    <div className="bg-green-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Language Toggle */}
          <div className="flex justify-end mb-6">
            <button
              onClick={() => setLang(lang === "en" ? "sw" : "en")}
              className="text-sm text-green-700 border border-green-500 px-3 py-1 rounded-full hover:bg-green-100 transition"
            >
              {lang === "en" ? "Switch to Kiswahili" : "Badilisha kwa Kiingereza"}
            </button>
          </div>

          {/* Hero Header */}
          <div className="text-center mb-12">
            <motion.h2 
              className="text-4xl md:text-5xl font-extrabold text-green-700 mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {t.title}
            </motion.h2>
            <motion.p 
              className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {t.intro}
            </motion.p>
          </div>

          {/* Testimonial Grid */}
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
            {allTestimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                className="bg-white border border-green-100 shadow-md rounded-2xl p-6 hover:shadow-lg transition duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-green-200"
                  />
                  <div>
                    <h3 className="text-lg font-bold text-green-700">{testimonial.name}</h3>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
                <div className="relative pl-8 text-gray-700">
                  <FaQuoteLeft className="absolute top-0 left-0 text-green-300 w-6 h-6" />
                  <p className="italic">"{testimonial.quote}"</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-12 text-center mb-16">
            <motion.h3 
              className="text-2xl md:text-3xl font-bold text-green-800 mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {t.ctaTitle}
            </motion.h3>
            <motion.p 
              className="text-gray-600 max-w-xl mx-auto mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {t.ctaText}
            </motion.p>
            <motion.button 
              className="bg-green-700 hover:bg-green-800 text-white font-semibold py-3 px-6 rounded-full transition"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              {t.button}
            </motion.button>
          </div>

          {/* Submission Form */}
          <motion.section 
            className="bg-white py-10 px-6 rounded-xl shadow-md max-w-3xl mx-auto"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-green-800 mb-6 text-center">{t.formTitle}</h3>
            
            {submissionStatus === 'success' && (
              <motion.div 
                className="mb-6 p-4 bg-green-100 text-green-700 rounded-lg text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                {lang === 'en' 
                  ? "Thank you! Your testimonial has been submitted." 
                  : "Asante! Ushuhuda wako umewasilishwa."
                }
              </motion.div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-600 mb-1">
                  {t.name}
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder={lang === 'en' ? "e.g. Halima Hassan" : "mf. Halima Hassan"}
                  className={`w-full border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-lg px-4 py-3`}
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">
                    {lang === 'en' ? "Name is required" : "Jina linahitajika"}
                  </p>
                )}
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-600 mb-1">
                  {t.location}
                </label>
                <input
                  type="text"
                  name="location"
                  placeholder={lang === 'en' ? "e.g. Hola, Garsen..." : "mf. Hola, Garsen..."}
                  className={`w-full border ${errors.location ? 'border-red-500' : 'border-gray-300'} rounded-lg px-4 py-3`}
                  value={formData.location}
                  onChange={handleChange}
                />
                {errors.location && (
                  <p className="text-red-500 text-sm mt-1">
                    {lang === 'en' ? "Location is required" : "Eneo linahitajika"}
                  </p>
                )}
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-600 mb-1">
                  {t.message}
                </label>
                <textarea
                  rows="5"
                  name="message"
                  placeholder={t.message}
                  className={`w-full border ${errors.message ? 'border-red-500' : 'border-gray-300'} rounded-lg px-4 py-3`}
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">
                    {lang === 'en' ? "Message is required" : "Ujumbe unahitajika"}
                  </p>
                )}
              </div>
              
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-green-700 text-white font-semibold px-8 py-3 rounded-lg hover:bg-green-800 transition transform hover:scale-105"
                >
                  {t.submit}
                </button>
              </div>
            </form>
          </motion.section>
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;