"use client"
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";

const ContactMe = () => {
  const formVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const socialVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delay: 0.5, staggerChildren: 0.3 },
    },
  };

  const iconVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <section id="contact" className="py-16 overflow-x-hidden  bg-mixColor">
      <div className="container mx-auto px-6 text-center">
   
          {/* Social Links */}
          <motion.div
                      className="flex flex-col items-center justify-center space-y-6"
                      variants={socialVariants}
                      initial="hidden"
                      animate="visible"
          >
            <motion.h2 className="md:text-6xl text-4xl font-bold mb-4" variants={socialVariants}>
            Have a Project in Mind?👋 <br /> Let's get to Work. 💻
            </motion.h2>
          </motion.div>
          <motion.div
            className="flex flex-col items-center justify-center space-y-6"
            variants={socialVariants}
            initial="hidden"
            animate="visible"
          >
            <p className="text-3xl text-gray-700">
              Feel free to reach out to me via email or connect on social media, or even a Call!
            </p>
            <motion.div
              className="flex space-x-6 text-3xl text-indigo-600"
              variants={socialVariants}
            >
              <motion.a
                href="https://linkedin.com/in/elgendyud"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                variants={iconVariants}
              >
                <FaLinkedin />
              </motion.a>
              <motion.a
                href="https://github.com/elgendyud"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                variants={iconVariants}
              >
                <FaGithub />
              </motion.a>
              <motion.a
                href="mailto:elgendyud@gmail.com"
                whileHover={{ scale: 1.2 }}
                variants={iconVariants}
              >
                <FaEnvelope />
              </motion.a>
              <motion.a
                href="tel:+201550115569"
                whileHover={{ scale: 1.2 }}
                variants={iconVariants}
              >
                <FaPhone />
              </motion.a>
            </motion.div>
          </motion.div>
      </div>
    </section>
  );
};

export default ContactMe;
