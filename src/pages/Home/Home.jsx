import React from "react";
import { motion } from "framer-motion";
import "./Home.css";

function Home({name1,name2}) {
  return (
    <div className="hero">
      <div className="overlay"></div>
      <div className="hero-content">
        {/* Title na may fade + slide */}
        <motion.h1
          className="motion-title"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {name1}
        </motion.h1>

        {/* Subtitle na may typing effect */}
        <motion.p
          className="typing-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
        >
          {name2}
        </motion.p>
      </div>
    </div>
  );
}

export default Home;
