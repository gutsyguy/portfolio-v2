"use client";
import Link from "next/link";
import Modal from "./Modal";
import ReactSwitch from "react-switch";
import { useTheme } from "@/context/ThemeContext";
import { useState } from "react";

const Navbar: React.FC = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [openResume, setOpenResume] = useState(false);

  return (
    <nav className="flex flex-row justify-evenly py-10 border-b border-gray-800 text-[1.5rem]">
      <Link href="/">
        <div className={isDarkMode ? "text-white" : "text-gray-600"}>Home</div>
      </Link>
      <Link href="/experience">
        <div className={isDarkMode ? "text-white" : "text-gray-600"}>
          Experience
        </div>
      </Link>
      <Link href="/projects">
        <div className={isDarkMode ? "text-white" : "text-gray-600"}>
          Project
        </div>
      </Link>
      <button
        className={`${
          isDarkMode ? "text-white" : "text-gray-600"
        } round-xl px-[1rem]`}
        onClick={() => setOpenResume(true)}
      >
        Resume
      </button>
      <ReactSwitch
        onChange={toggleTheme}
        checked={isDarkMode}
        offColor="#d89527"
        onColor="#15150e"
        uncheckedIcon={
          <p className="text-[0.5rem] flex items-center justify-center h-full w-full">
            Light
          </p>
        }
        checkedIcon={
          <p className="text-[0.5rem] text-white flex items-center justify-center h-full w-full">
            Dark
          </p>
        }
      />
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
