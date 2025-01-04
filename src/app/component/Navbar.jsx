// components/Navbar.js
"use client";
import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    // Handle the Different Background Color for Navbar in Dark Mode
    <nav className="bg-slate-100 sticky top-0 z-50  text-black dark:bg-gray-800  dark:text-white">
      {/* Logo */}

      <div className="flex justify-between items-center w-[80%] py-3 mx-auto">
        <div className="flex-shrink-0">
          <h2 href="/" className="md:text-2xl text-xl font-bold">
            Ashraf <br className="md:hidden block "/> <span className="text-gray-400">ELGENDY</span>
          </h2>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4 md:text-xl text-lg">
          <Link
            href="#home"
            className="hover:text-purpleColor px-3 py-2 active transition-all delay-150  rounded-md"
          >
            Home
          </Link>
          <Link
            href="#about"
            className="hover:text-purpleColor  px-3 py-2  transition-all delay-150 rounded-md"
          >
            About
          </Link>
          <Link
            href="#projects"
            className="hover:text-purpleColor  px-3 py-2  transition-all delay-150 rounded-md"
          >
            Projects
          </Link>
          <Link
            href="#services"
            className="hover:text-purpleColor px-3 py-2 transition-all delay-150  rounded-md"
          >
            Services
          </Link>
          <Link
            href="#contact"
            className="hover:text-purpleColor  px-3 py-2  transition-all delay-150 rounded-md"
          >
            Contact Me
          </Link>
        </div>

        <a href="https://wa.me/201550115569" className="contact-me-button nav-button">
        </a>
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center justify-center p-2 rounded-md dark:text-white text-black  hover:bg-mixColor transition-all delay-150 focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  className="transition-all delay-500 ease-in-out"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  className="transition-all delay-500 ease-in-out"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <Link
            href="#home"
            className="block text-xl px-4 py-2 text-center hover:text-purpleColor"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            href="#about"
            className="block text-xl px-4 py-2 text-center hover:text-purpleColor"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            href="#projects"
            className="block text-xl px-4 py-2 text-center hover:text-purpleColor"
            onClick={() => setIsOpen(false)}
          >
            Projects
          </Link>
          <Link
            href="#services"
            className="block text-xl px-4 py-2 text-center hover:text-purpleColor"
            onClick={() => setIsOpen(false)}
          >
            Services
          </Link>
          <Link
            href="#contact"
            className="block text-xl px-4 py-2 text-center hover:text-purpleColor"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
