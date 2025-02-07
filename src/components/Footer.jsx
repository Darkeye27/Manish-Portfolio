
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"; 

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto px-6 flex flex-col items-center">
        {/* Social Media Links */}
        <div className="flex justify-center space-x-6 mb-4">
          <motion.a
            href="https://github.com/Darkeye27"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors text-3xl"
            whileHover={{ scale: 1.2 }}
          >
            <FaGithub />
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/manish-panchal"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors text-3xl"
            whileHover={{ scale: 1.2 }}
          >
            <FaLinkedin />
          </motion.a>
          <motion.a
            href="panchalmanish2005@gmail.com"
            className="text-gray-400 hover:text-white transition-colors text-3xl"
            whileHover={{ scale: 1.2 }}
          >
            <FaEnvelope />
          </motion.a>
        </div>

        {/* Copyright */}
        <p className="text-gray-400 text-sm">
          &copy; {new Date().getFullYear()}Manish. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
