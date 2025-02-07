
import React from 'react'
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6 max-w-3xl text-center">
        <motion.h2
          className="text-4xl font-bold text-blue-400 mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Get in Touch
        </motion.h2>

        <p className="text-lg text-gray-300 mb-6">
          Have a question or want to work together? Fill out the form below or connect with me on social media!
        </p>

     
        <form
          action="https://formspree.io/f/mbldkdwv" 
          method="POST"
          className="space-y-6"
        >

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full px-4 py-3 bg-gray-800 rounded-lg border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Email Field */}
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full px-4 py-3 bg-gray-800 rounded-lg border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Message Field */}
          <textarea
            name="message"
            rows="4"
            placeholder="Your Message"
            required
            className="w-full px-4 py-3 bg-gray-800 rounded-lg border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>

          {/* Submit Button */}
          <motion.button
            type="submit"
            className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-full text-lg font-semibold transition-transform hover:scale-105 shadow-lg"
            whileHover={{ scale: 1.05 }}
          >
            Send Message 🚀
          </motion.button>
        </form>
      </div>
    </section>
  )
}

export default Contact
