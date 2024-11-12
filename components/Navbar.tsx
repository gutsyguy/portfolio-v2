import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex flex-row justify-evenly py-10 bg-blue-400 text-white text-[1.5rem]">
      <Link href={"/"}>
        <div className="">Home</div>
      </Link>
      <Link href={"/"}>
        <div className="">Experience</div>
      </Link>
      <Link href={"/"}>
        <div className="">Project</div>
      </Link>
    </nav>
  );
};

export default Navbar;
