import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="h-screen flex flex-col items-center justify-center text-center text-white bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden"
    >

      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.1),_transparent)]"></div>

      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-bold mt-6"
      >
        Hi, I'm <span className="text-blue-400">Manish 👋</span>
      </motion.h1>

      <p className="text-lg text-gray-300 mt-2">
        Web Developer | React Enthusiast | Tech explorer
      </p>

      <a href="#projects" className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-full text-white text-lg font-semibold transition-transform hover:scale-105 shadow-lg">
        View Projects 🚀
      </a>

      <div className="absolute bottom-10 left-10 w-16 h-16 bg-blue-500 opacity-30 rounded-full animate-pulse"></div>
      <div className="absolute top-20 right-20 w-24 h-24 bg-purple-500 opacity-20 rounded-full animate-bounce"></div>
    </section>
  );
};

export default Hero