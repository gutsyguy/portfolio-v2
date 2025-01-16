"use client";
import { useState } from "react";
import Link from "next/link";
import Modal from "./Modal";

const Navbar = () => {
  const [openResume, setOpenResume] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <nav className="flex flex-row justify-evenly py-10 border-b border-gray-800 text-gray-600 text-[1.5rem]">
      <Link href={"/"}>
        <div>Home</div>
      </Link>
      <Link href={"/experience"}>
        <div>Experience</div>
      </Link>
      <Link href={"/projects"}>
        <div>Project</div>
      </Link>
      <button
        className="px-[1rem] rounded-xl"
        onClick={() => setOpenResume(true)}
      >
        Resume
      </button>
      <button
        className="px-[1rem] rounded-xl"
        // onClick={() => setOpenResume(true)}
      >
        Dark Mode
      </button>

      <Modal isOpen={openResume} onClose={() => setOpenResume(false)}>
        <iframe
          // src={process.env.resume}
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
