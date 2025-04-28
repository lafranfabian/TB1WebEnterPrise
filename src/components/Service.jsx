import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const services = [
  {
    id: 1,
    title: "8-11 December 2024",
    description: (
      <>
        Part of Volunteering team in Futsal Intercultural series
      </>
    ),
    image: "src/assets/intercultural.jpeg",
  },
  {
    id: 2,
    title: "18-19 December 2024",
    description: "Part Of Volunteering team in Futsal Series Grand National Championship",
    image: "src/assets/grandnational.jpg",
  },
  {
    id: 3,
    title: "13-14 December 2024",
    description: "Part of Volunteering team in Hut Transmedia 23rd",
    image: "src/assets/transmed.png",
  },
  {
    id: 4,
    title: "21 February - 21 March 2025",
    description: "Part of Volunteering team in Futsal Series West Jakarta Region",
    image: "src/assets/images.png",
  },
];

const Service = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <div className="bg-black text-white py-20" id="service">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Experience</h2>
        <div className="relative">
          <div className="absolute inset-0 left-1/2 border-l-2 border-gray-600"></div>
          <div className="flex flex-col space-y-12">
            {services.map((service) => (
              <div
                key={service.id}
                className="relative flex items-center"
                data-aos="fade-up"
              >
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 text-white flex items-center justify-center">
                  <span className="text-sm font-bold">{service.id}</span>
                </div>
                <div className="ml-12 w-full flex flex-col md:flex-row items-center">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-gray-300">{service.description}</p>
                    <a
                      href="#"
                      className="mt-4 inline-block text-amber-400 hover:text-orange-500"
                    >
                      Read More
                    </a>
                  </div>
                  <div className="mt-4 md:mt-0 md:ml-8 w-full md:w-1/3">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-auto rounded-lg shadow-lg"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
