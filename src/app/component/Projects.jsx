"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRef } from "react";

function Projects() {
  const mainRef = useRef(null);
  return (
    <div id="projects" className="projects mt-10 overflow-x-hidden  w-[80%] mx-auto">
      <h2 className="text-5xl text-gray-800 dark:text-slate-100 opacity-50  font-bold ">
        Last Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10 mt-10">
        <div ref={mainRef}>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-slate-100 dark:bg-gray-800 rounded-lg p-4"
          >
            <Image
              src="/projects/alexcont.png"
              alt="Minions wave"
              width={500}
              height={500}
            />
            <h3 className="text-2xl font-semibold mt-3 mb-2">
              IT - Management
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Role: Full-Stack Developer
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              Technologies: Laravel (Front-end & Back-end), MySQL (Database),
              HTML/CSS (Bootstrap), JavaScript, jQuery
            </p>
          </motion.div>
        </div>

        {/* Gate Management */}
        <div ref={mainRef}>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-slate-100 dark:bg-gray-800 rounded-lg p-4"
          >
            <Image
              src="/projects/gate.png"
              alt="Minions wave"
              width={500}
              height={500}
            />
            <h3 className="text-2xl font-semibold mt-3 mb-2">
              Gate Management
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Role: Full-Stack Developer
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              Technologies: Laravel, MYSQL (Database), HTML/CSS (Bootstrap),
              JavaScript, jQuery
            </p>
          </motion.div>
        </div>

        <div ref={mainRef}>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-slate-100 dark:bg-gray-800 rounded-lg p-4"
          >
            <Image
              src="/projects/ubuntu.png"
              alt="Minions wave"
              width={500}
              height={500}
            />
            <h3 className="text-2xl font-semibold mt-3 mb-2">Apps server</h3>
            <p className="text-gray-600 dark:text-gray-400">Role: DevOps</p>
            <p className="text-gray-600 dark:text-gray-400 pb-6">
              Technologies: Ubuntu 24, Apache2, MySQL, NodeJS, PHP
            </p>
          </motion.div>
        </div>

        <div ref={mainRef}>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-slate-100 dark:bg-gray-800 rounded-lg p-4"
          >
            <Image
              src="/projects/Pet.png"
              alt="Minions wave"
              width={500}
              height={500}
            />
            <h3 className="text-2xl font-semibold mt-3 mb-2">PetCare</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Role: Front-end Developer
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              Technologies: ReactJS,Bootstrap
            </p>
          </motion.div>
        </div>

        <div ref={mainRef}>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-slate-100 dark:bg-gray-800 rounded-lg p-4"
          >
            <Image
              src="/projects/cyborg.png"
              alt="Minions wave"
              width={500}
              height={500}
            />
            <h3 className="text-2xl font-semibold mt-3 mb-2">Cyborg</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Role: Front-end Developer
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              Technologies: ReactJS,Bootstrap
            </p>
          </motion.div>
        </div>
        <div ref={mainRef}>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-slate-100 dark:bg-gray-800 rounded-lg p-4"
          >
            <Image
              src="/projects/villa.png"
              alt="Minions wave"
              width={500}
              height={500}
            />
            <h3 className="text-2xl font-semibold mt-3 mb-2">Villa</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Role: Front-end Developer
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              Technologies: ReactJS,Bootstrap
            </p>
          </motion.div>
        </div>
      </div>
      <div ref={mainRef}>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="text-6xl text-center text-gray-800 bold dark:text-slate-300 pb-20"
        >
          and More ...
        </motion.p>
      </div>
    </div>
  );
}

export default Projects;
