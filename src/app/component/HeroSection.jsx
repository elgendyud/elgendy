"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
function HeroSection() {
  return (
    <div id="home" className=" overflow-x-hidden ">
      <div className="flex w-[80%] h-[100vh] py-10 mx-auto justify-between items-center sm:flex-row flex-col">
        <motion.div
          className="content"
          initial={{ x: "-50vw", opacity: 0 }} 
          animate={{ x: 5, opacity: 1 }} 
          exit={{ x: "-50vw", opacity: 0 }} 
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 40,
            duration: 0.5,
          }}
        >
          <div className="social-links flex sm:text-lg align-start">
            <a href="https://www.linkedin.com/in/elgendyud" target="_blank">
              <div id="linkedin" class="social-btn flex-center">
                <FaLinkedin />
                <span>@elgendyud</span>
              </div>
            </a>

            <a href="https://wa.me/201550115569" target="_blank">
              <div id="whatsapp" className="social-btn flex-center">
                {/* <i className="text-green-600 fa-brands fa-whatsapp"></i> */}
                <FaWhatsapp  className="text-green-600"/> 
                <span className="text-[14px] bold">+201550115569</span>
              </div>
            </a>
            <a href="https://www.instagram.com/aelgendy88/" target="_blank">
              <div id="whatsapp" className="social-btn flex-center">
                {/* <i className="text-pink-600 fa-brands fa-instagram"></i> */}
                <FaInstagram className="text-pink-600"/>

                <span className="text-[14px] bold">@aelgendy88</span>
              </div>
            </a>
            <a href="https://www.facebook.com/Madridynadamas/" target="_blank">
              <div id="whatsapp" className="social-btn flex-center">
                {/* <i className="text-blue-800 fa-brands fa-facebook"></i> */}
                <FaFacebook  className="text-blue-800"/>
                <span className="text-[14px] bold">@Madridynadamas</span>
              </div>
            </a>

            <a href="https://github.com/elgendyud">
              <div id="github" className="social-btn flex-center">
                <svg
                  viewBox="0 0 24 24"
                  height="24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                </svg>
                <span>@elgendyud</span>
              </div>
            </a>
          </div>
          <div className="mt-5">
            <h2 className="text-4xl font-bold">
              <span className="md:text-7xl">👋</span>
              Hey there,
            </h2>
            <h1 className="md:text-4xl text-4xl font-bold introduce">
              It's Ashraf Elgendy.
            </h1>
            <h2>IT Specialist | Fullstack developer </h2>
            <p className="mt-5 text-lg md:text-2xl text-slate-600 md:w-3/4 dark:text-slate-400">
              Welcome to my Creative Corner! I'm Ashraf Elgendy, a passionate
              Full-Stack Developer with Experince Crafting both Visually
              Stunning and user-friendly!
            </p>
          </div>
        </motion.div>
        <motion.div
                initial={{ x: "50vw", opacity: 0.5 }} // Start off-screen to the left
                animate={{ x: 0, opacity: 1 }}       // Move to the center and fade in
                exit={{ x: "100vw", opacity: 0.5 }}   // Optional: exit animation
                transition={{
                  type: "spring",
                  stiffness: 50,
                  damping: 40,
                  duration: 0.8,
                }}
                whileHover={ { scale: 1.1} }
        >

        <Image
          src="/ashraf.png"
          width={1000}
          height={1000}
          alt="Hero Image"
          />
          </motion.div>
      </div>
    </div>
  );
}
export default HeroSection;
