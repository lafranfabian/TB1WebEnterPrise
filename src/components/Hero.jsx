import React from "react";
import HeroImage from "../assets/hero-image.png";
import { motion } from "framer-motion";

const fullText = "Hello! I'm Lafran Fabian Anandaditya";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const letter = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 500,
      damping: 30,
    },
  },
};

const Hero = () => {
  return (
    <div className="bg-black text-white text-center py-16">
      <img
        src={HeroImage}
        alt="Hero"
        className="mx-auto mb-8 w-48 h-48 rounded-full object-cover transform transition-transform duration-300 hover:scale-105"
      />

      <motion.h1
        className="text-4xl font-bold flex justify-center items-center flex-wrap"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {fullText.split("").map((char, index) => (
          <motion.span
            key={index}
            variants={letter}
            className={`inline-block ${
              char === "L" ||
              char === "a" ||
              char === "f" ||
              char === "r" ||
              char === "a" ||
              char === "n" ||
              char === "F" ||
              char === "b" ||
              char === "i" ||
              char === "a" ||
              char === "n" ||
              char === "A" ||
              char === "n" ||
              char === "a" ||
              char === "n" ||
              char === "d" ||
              char === "a" ||
              char === "d" ||
              char === "i" ||
              char === "t" ||
              char === "y" ||
              char === "a"
                ? "text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500"
                : "text-white"
            }`}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.h1>

      <p className="mt-4 text-lg text-gray-300">
        An IT Enthusiast and always driven by curiosity
      </p>

      <div className="mt-8 space-x-4">
        
      <a
  href="https://www.linkedin.com/in/lafran-fabian-anandaditya-83a25122a/"
  target="_blank"
  rel="noopener noreferrer"
  className="hidden md:inline"
>
        <button
          className="bg-gradient-to-r from-purple-500 to-pink-500 text-white transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"
        >
          Contact Me
        </button>
        </a>
        <button
          className="bg-gradient-to-r from-orange-400 to-yellow-500 text-white transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"
        >
          Resume
        </button>
      </div>
    </div>
  );
};

export default Hero;
