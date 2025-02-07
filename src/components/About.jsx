import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
      
        <motion.div
          className="w-full md:w-1/3 flex justify-center"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="./hero.jpg" 
            alt="Manish"
            className="w-52 h-52 rounded-full border-4 border-gray-700 shadow-lg object-cover"
          />
        </motion.div>


        <motion.div
          className="w-full md:w-2/3 mt-8 md:mt-0 md:pl-10"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-blue-400 mb-4">About Me</h2>
          <p className="text-lg text-gray-300">
            I'm <span className="text-blue-400 font-semibold">Manish</span>, a passionate 
            <span className="text-blue-400 font-semibold"> Web Developer</span> who loves to build 
            modern, responsive, and dynamic web applications.  
            I have experience working with React, TailwindCSS, and Node.js and am always 
            eager to learn new technologies.
          </p>

      
          <h3 className="text-2xl font-semibold text-gray-300 mt-6">Skills:</h3>
          <div className="flex flex-wrap gap-2 mt-3">
            {["React", "Node.js", "JavaScript", "TailwindCSS", "Bootstrap", "Git", "MongoDB"].map((skill, i) => (
              <span key={i} className="bg-gray-700 px-4 py-2 rounded-full text-sm">
                {skill}
              </span>
            ))}
          </div>

       
          <a
            href="src/assets/Manish-CV (1).pdf" 
            download
            className="mt-6 inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-full text-white text-lg font-semibold transition-transform hover:scale-105 shadow-lg"
          >
            Download Resume 📄
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default About