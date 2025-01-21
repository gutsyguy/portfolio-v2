"use client";
import { useTheme } from "@/context/ThemeContext";
import React, { useState } from "react";
import ReactSwitch from "react-switch";
import Modal from "./Modal";
import Link from "next/link";

const Navbar = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [openResume, setOpenResume] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav
      className={`border border-gray-600 ${
        isDarkMode ? "text-white" : "text-gray-600"
      }`}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Yalamber Subba
          </span>
        </Link>
        {/* Toggle button for mobile menu */}
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={isMenuOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        {/* Dropdown menu */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4  rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:border-gray-700">
            <li>
              <Link
                href="/"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/experience"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Experience
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Project
              </Link>
            </li>

            <button
              className={`round-xl mb-[0.5rem] px-[0.75rem] text-start text-gray-800 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`}
              onClick={() => setOpenResume(true)}
            >
              Resume
            </button>
            <ReactSwitch
              onChange={toggleTheme}
              checked={isDarkMode}
              offColor="#d89527"
              onColor="#15150e"
              className="px-[0.75rem]"
              uncheckedIcon={
                <p className="text-[0.5rem]  flex items-center justify-center h-full w-full">
                  Light
                </p>
              }
              checkedIcon={
                <p className="text-[0.5rem] text-white flex items-center justify-center h-full w-full">
                  Dark
                </p>
              }
            />
          </ul>
        </div>
      </div>
      <Modal isOpen={openResume} onClose={() => setOpenResume(false)}>
        <iframe
          src="https://drive.google.com/file/d/1zy6l5K_jgU7HJtKzGIUV_0e-cvm-40iF/preview"
          width="640"
          height="480"
          allow="autoplay"
        ></iframe>
      </Modal>
    </nav>
  );
};

export default Navbar;
