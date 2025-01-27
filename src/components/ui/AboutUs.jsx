// AboutUs.js
import React from 'react';
import { Header } from './header'; // Ensure correct import
import Footer from '../footer'; // Ensure correct import
import { motion } from 'framer-motion'; // Animation Library

const AboutUs = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <Header />
      <br></br><br></br><br></br><br></br>
      
      {/* Page Wrapper */}
      <main className="flex-grow flex items-center justify-center px-6 py-12">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col md:flex-row items-center max-w-5xl w-full bg-white/10 backdrop-blur-lg p-8 rounded-xl shadow-lg border border-white/20"
        >
          {/* Left: Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
            className="md:w-2/3 text-center md:text-left px-6"
          >
            <h1 className="text-4xl font-bold text-blue-400 mb-4">About Me</h1>
            <p className="text-lg leading-relaxed text-gray-200">
              Hi, I'm <b>Dhruv</b>, an Electrical Engineering student at <b>BITS Pilani, Goa</b>, passionate about 
              <b> software development, AI/ML, and finance</b>. Skilled in <b>React.js, Java, Python, and DSA</b>, 
              I have worked on projects like a <b>resume builder, a movie info site, and a government-backed 
              accessibility platform</b>.
              <br /><br />
              Previously, I interned as a <b>frontend developer at Topdev IT Pvt Ltd</b> and currently serve as 
              a <b>TA for the OOPS Lab</b>. I was also an active member of <b>The Wall Street Club</b> and 
              <b> Nirmaan</b>, contributing to finance and social impact initiatives.
              <br /><br />
              <a 
                href="mailto:todhruvgupta@gmail.com" 
                className="text-blue-400 font-semibold hover:underline transition duration-300"
              >
                Let’s Connect!
              </a>
              <br />
              📧 <a href="mailto:todhruvgupta@gmail.com" className="text-blue-300 hover:underline">todhruvgupta@gmail.com</a>
              <br />
              📞 <a href="tel:+919540091957" className="text-blue-300 hover:underline">+91 9540091957</a>
            </p>
          </motion.div>

          {/* Right: Animated Profile Image */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.7, ease: "easeOut" }}
            className="md:w-1/3 flex justify-center mt-6 md:mt-0"
          >
            <img
              src="https://oaomwriaxhxmmseqjgeo.supabase.co/storage/v1/object/public/images/images/Screenshot%202025-01-27%20at%204.06.22%20PM.png"
              alt="Profile"
              className="rounded-full w-40 h-40 md:w-48 md:h-48 shadow-lg border-4 border-blue-400 transform hover:scale-105 transition-transform duration-300"
            />
          </motion.div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default AboutUs;
