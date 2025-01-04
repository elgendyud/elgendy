"use client";
import { motion } from "framer-motion";
import { FaLaptopCode, FaMobileAlt, FaCloud, FaDatabase, FaServer, FaTools } from "react-icons/fa";

const Services = () => {
  const services = [
    {
      icon: <FaLaptopCode />,
      title: "Full-Stack Development",
      description:
        "Building responsive web applications with modern frameworks like React, Node.js, and Laravel.",
      color: "#4A90E2",
    },
    {
      icon: <FaMobileAlt />,
      title: "Mobile App Development",
      description: "Creating performant mobile apps with  React Native.",
      color: "#E94E77",
    },
    {
      icon: <FaDatabase />,
      title: "Database Management",
      description:
        "Designing and optimizing databases with MySQL and MongoDB.",
      color: "#FFC107",
    },
    {
      icon: <FaCloud />,
      title: "Cloud Solutions",
      description: "Deploying and managing applications on AWS and Azure.",

      color: "#33C9FF",
    },
    {
      icon: <FaServer />,
      title: "DevOps",
      description:
        "Setting up automated pipelines with Docker, Apache and Nginx.",
      color: "#00D084",
    },
    {
      icon: <FaTools />,
      title: "Technical Support",
      description: "Providing maintenance and support for deployed applications.",
      color: "#9C27B0",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2, // Animates each child sequentially
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="services" className="py-16  overflow-x-hidden  bg-gray-100">
      <div className="container pt-10 mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">My Services</h2>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-2 transition-all duration-300"
              variants={itemVariants}
            >
              <div
                className="text-5xl mb-4 text-center w-[100%] rounded-full flex items-center justify-center"
                style={{ color: service.color }}
              >
                {service.icon}
              </div>
              <h3 className="text-2xl font-semibold text-gray-700 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
