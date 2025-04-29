import React, { useState, useEffect } from "react";
import HeroImage1 from "../assets/hero-image.png";
import HeroImage2 from "../../public/hero2.png";
import { motion } from "framer-motion";

const fullText = "Hello! I'm Lafran Fabian Anandaditya";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const letter = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 500, damping: 30 },
  },
};

const Hero = () => {
  const images = [HeroImage1, HeroImage2];
  const [currentImage, setCurrentImage] = useState(0);
  const [previousImage, setPreviousImage] = useState(null);
  const [isFirst, setIsFirst] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setPreviousImage(images[currentImage]);
      setCurrentImage((prev) => (prev + 1) % images.length);
      setIsFirst(false);
    }, 4000);

    return () => clearInterval(interval);
  }, [currentImage]);

  return (
    <div className="bg-black text-white text-center py-16 relative">
      <div className="relative w-48 h-48 mx-auto mb-8 rounded-full overflow-hidden">
        {/* Previous image (fades out) */}
        {previousImage && (
          <motion.img
            key={`prev-${currentImage}`}
            src={previousImage}
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full object-cover rounded-full"
          />
        )}
        {/* Current image (fades in) */}
        <motion.img
          key={`current-${currentImage}`}
          src={images[currentImage]}
          initial={isFirst ? { opacity: 0, scale: 0.9 } : { opacity: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: isFirst ? 0.8 : 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-0 w-full h-full object-cover rounded-full"
        />
      </div>

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
              "LafranFabianAnandaditya".includes(char)
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
          <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full">
            Contact Me
          </button>
        </a>
        <button className="bg-gradient-to-r from-orange-400 to-yellow-500 text-white transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full">
          Resume
        </button>
      </div>
    </div>
  );
};

export default Hero;
