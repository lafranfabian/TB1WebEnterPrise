import React from 'react';
import { motion } from 'framer-motion'; 
import AboutImage from "../assets/aboutme-image.png";

const About = () => {
  return (
    <div className="bg-black text-white py-20" id="about">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <img
            src={AboutImage}
            alt="About Image"
            className="w-72 h-90 rounded object-cover mb-8 md:mb-0"
          />
          <div className="flex-1">
            <motion.p
              className="text-lg mb-8"
              initial={{ filter: 'blur(10px)' }}
              whileInView={{ filter: 'blur(0px)' }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              Hi! I’m Lafran Fabian Anandaditya, an Information Systems student at Universitas Mercu Buana. I’m an active and enthusiastic individual, both on and off campus, with a strong passion for the world of IT.
              <br />
              <br />
              I frequently participate in various volunteer activities, which help me grow not only as a student but also as a person who values collaboration, responsibility, and real-world experience. I am highly adaptable, capable of working effectively under pressure, and comfortable collaborating in a team or working independently.
              <br />
              <br />
              I’m always eager to learn new things and take on challenges that allow me to explore the fields of technology, especially in areas like data analytics and UI/UX design. With a commitment to continuous improvement and a curiosity-driven mindset, I strive to make the most of every opportunity to grow and contribute.
            </motion.p>

            {}
            <div className="space-y-4">
              <div className="flex items-center">
                <label htmlFor="htmlandcss" className="w-2/12">
                  HTML & CSS
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <motion.div
                    className="bg-gradient-to-r from-purple-500 to-pink-500 h-2.5 rounded-full"
                    initial={{ width: '0%' }}
                    whileInView={{ width: '50%' }}
                    transition={{ duration: 1.2 }}
                    viewport={{ once: true }} 
                  ></motion.div>
                </div>
              </div>

              <div className="flex items-center">
                <label htmlFor="react" className="w-2/12">
                  React JS
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <motion.div
                    className="bg-gradient-to-r from-purple-500 to-pink-500 h-2.5 rounded-full"
                    initial={{ width: '0%' }}
                    whileInView={{ width: '25%' }}
                    transition={{ duration: 1.2 }}
                    viewport={{ once: true }}
                  ></motion.div>
                </div>
              </div>

              <div className="flex items-center">
                <label htmlFor="nodejs" className="w-2/12">
                  Node JS
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <motion.div
                    className="bg-gradient-to-r from-purple-500 to-pink-500 h-2.5 rounded-full"
                    initial={{ width: '0%' }}
                    whileInView={{ width: '75%' }}
                    transition={{ duration: 1.2 }}
                    viewport={{ once: true }}
                  ></motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
