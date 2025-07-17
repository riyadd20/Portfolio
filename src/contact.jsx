import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      await emailjs.send(
        'service_bt77wgq',
        'template_1ccbphr',
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
          title: 'New Contact Message'
        },
        '4wL1fW1JgQJUCDgPW'
      );

      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      setError('Failed to send message. Please try again later.');
      console.error('Email sending error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-6 pt-10 pb-0 text-[#d8d1f5] font-mono">
      {/* Header */}
      <motion.div
        className="text-center mb-10"
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <motion.h2
          className="text-4xl font-bold text-purple-200 mb-3"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Let's Connect
        </motion.h2>
        <motion.div
          className="w-32 h-[2px] mx-auto bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full mb-4"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        />
        <p className="text-[#cbd5e1] text-sm sm:text-base">
          I’d love to hear from you! Whether it’s a quick hello or to dive into a conversation.
        </p>
      </motion.div>

      {/* Alerts */}
      <AnimatePresence>
        {submitted && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mb-6 bg-green-200 bg-opacity-10 border border-green-400 text-green-200 px-4 py-3 rounded text-sm"
          >
            <strong>✓ Message sent!</strong> I’ll get back to you soon.
          </motion.div>
        )}
        {error && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 bg-red-200 bg-opacity-10 border border-red-500 text-red-300 px-4 py-3 rounded text-sm"
          >
            {error}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {['name', 'email', 'message'].map((field) => (
          <div key={field}>
            <label className="block text-base mb-1 text-[#cbd5e1] capitalize">{field}</label>
            {field === 'message' ? (
              <textarea
                name="message"
                rows="5"
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-[#2c2547] text-[#E2E8F0] border border-[#3c2c58] rounded-md focus:ring-2 focus:ring-purple-500 focus:outline-none transition text-sm placeholder-[#9ca3af]"
                placeholder="What would you like to discuss?"
              />
            ) : (
              <input
                type={field === 'email' ? 'email' : 'text'}
                name={field}
                required
                value={formData[field]}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-[#2c2547] text-[#E2E8F0] border border-[#3c2c58] rounded-md focus:ring-2 focus:ring-purple-500 focus:outline-none transition text-sm placeholder-[#9ca3af]"
                placeholder={field === 'name' ? 'John Doe' : 'you@example.com'}
              />
            )}
          </div>
        ))}

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          disabled={isLoading}
          className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-3 rounded-md font-semibold shadow-md hover:shadow-lg transition-all disabled:opacity-70"
        >
          {isLoading ? (
            <span className="flex items-center justify-center">
              <i className="bi bi-arrow-repeat animate-spin mr-2"></i>
              Sending...
            </span>
          ) : (
            'Send Message'
          )}
        </motion.button>
      </form>

      {/* Contact Icons */}
      <motion.div
        className="mt-12 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <p className="text-[#94a3b8] mb-4 text-sm">Or reach out directly:</p>
        <div className="flex justify-center space-x-6 text-xl">
          <a
            href="mailto:riyadeorukhkar20@gmail.com"
            className="text-purple-400 hover:text-purple-300 transition"
            aria-label="Email"
          >
            <i className="bi bi-envelope-fill"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/riyadeorukhkar/"
            className="text-purple-400 hover:text-purple-300 transition"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <i className="bi bi-linkedin"></i>
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
