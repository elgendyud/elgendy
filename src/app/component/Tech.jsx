import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaCss3Alt, FaBootstrap, FaLaravel, FaPhp, FaGitSquare } from "react-icons/fa";
import { SiExpress, SiMysql } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbSql } from "react-icons/tb";
import { BsUbuntu } from "react-icons/bs";

const AnimatedGrid = () => {
  const icons = [
    { Component: FaReact, color: "#61DBFB" },
    { Component: FaNodeJs, color: "#68A063" },
    { Component: SiExpress, color: "#000000" },
    { Component: FaCss3Alt, color: "#264DE4" },
    { Component: FaBootstrap, color: "#563D7C" },
    { Component: RiTailwindCssFill, color: "#38B2AC" },
    { Component: FaLaravel, color: "#FF2D20" },
    { Component: SiMysql, color: "#00758F" },
    { Component: FaPhp, color: "#777BB4" },
    { Component: TbSql, color: "#336791" },
    { Component: FaGitSquare, color: "#F05033" },
    { Component: BsUbuntu, color: "#E95420" },
  ];

  const gridVariants = {
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        staggerChildren: 0.2, // Animates icons one after another
        delayChildren: 0.3, // Initial delay before animation starts
      },
    },
    hidden: { opacity: 0, scale: 0 },
  };

  const iconVariants = {
    hover: {
      scale: 1.2,
      rotate: 15,
      transition: { type: "spring", stiffness: 300 },
    },
  };

  return (
    <div className="flex justify-center overflow-hidden  items-center">
      <motion.div
        className="grid md:grid-cols-6 grid-cols-3 gap-8 p-4"
        initial="hidden"
        animate="visible"
        variants={gridVariants}
      >
        {icons.map(({ Component, color }, index) => (
          <motion.div
            key={index}
            className="flex justify-center items-center "
            whileHover="hover"
            variants={iconVariants}
          >
            <Component style={{ color, fontSize: "4rem" }} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default AnimatedGrid;
