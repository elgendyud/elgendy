"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Tech from "./Tech";
function Aboutme() {
  const { ref, inView } = useInView({
    threshold: 0.1, // Trigger when 10% of the image is visible
  });

  return (
    <div id="about" className="bg-mixColor overflow-x-hidden  py-10">
      <div
        ref={ref}
        className="w-[80%] flex align-center flex-col-reverse sm:flex-row justify-between py-10 mx-auto text-black"
      >
        <motion.div
          whileHover={{
            scale: 1.2,
            transition: { duration: 0.5 },
          }}
          initial={{ x: "-100vh", opacity: 0.5 }} // Start off-screen to the left
          animate={
            inView ? { x: 0, opacity: 1 } : { x: "-100vh", opacity: 0.5 }
          } // Animate in and out
          transition={{
            type: "spring",
            stiffness: 50,
            damping: 20,
            duration: 0.8,
          }}
        >
          <Image
            src="/minions-heart.gif"
            alt="Minions wave"
            className="mt-10 rounded-xl"
            width={500}
            height={500}
          />
        </motion.div>
        <div ref={ref} className="about-me mt-10 md:w-[40%]">
          <motion.div
            initial={{ x: "100vh", opacity: 0.5 }} // Start off-screen to the left
            animate={
              inView ? { x: 0, opacity: 1 } : { x: "100vh", opacity: 0.5 }
            } // Animate in and out
            transition={{
              type: "spring",
              stiffness: 50,
              damping: 20,
              duration: 0.8,
            }}
          >
            <h2 className="text-5xl text-gray-900 opacity-50 font-bold ">
              About Me
            </h2>
            <p className="mt-5 text-gray-900">
              As an IT specialist with expertise in full-stack development,
              including Node.js, React.js, PHP and SQL, I bring a unique blend
              of technical knowledge and industry experience. With over 7 years
              in container handling, logistics, and Container life-cycle, I've
              developed a deep understanding of both software solutions and
              operational processes. My work centers on building and
              implementing systems that streamline workflows, enhance data
              management, and drive efficiency at every stage. I'm Looking for
              new adventures.
            </p>

            <a
              href="Ashraf_ELGENDY.pdf"
              download={true}
              className="button text-center mt-7"
              type="button"
            >
              <span className="button__text">Download Resume</span>
              <span className="button__icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 35 35"
                  id="bdd05811-e15d-428c-bb53-8661459f9307"
                  data-name="Layer 2"
                  className="svg"
                >
                  <path d="M17.5,22.131a1.249,1.249,0,0,1-1.25-1.25V2.187a1.25,1.25,0,0,1,2.5,0V20.881A1.25,1.25,0,0,1,17.5,22.131Z"></path>
                  <path d="M17.5,22.693a3.189,3.189,0,0,1-2.262-.936L8.487,15.006a1.249,1.249,0,0,1,1.767-1.767l6.751,6.751a.7.7,0,0,0,.99,0l6.751-6.751a1.25,1.25,0,0,1,1.768,1.767l-6.752,6.751A3.191,3.191,0,0,1,17.5,22.693Z"></path>
                  <path d="M31.436,34.063H3.564A3.318,3.318,0,0,1,.25,30.749V22.011a1.25,1.25,0,0,1,2.5,0v8.738a.815.815,0,0,0,.814.814H31.436a.815.815,0,0,0,.814-.814V22.011a1.25,1.25,0,1,1,2.5,0v8.738A3.318,3.318,0,0,1,31.436,34.063Z"></path>
                </svg>
              </span>
            </a>
          </motion.div>
        </div>
      </div>
      <Tech />
    </div>
  );
}

export default Aboutme;
