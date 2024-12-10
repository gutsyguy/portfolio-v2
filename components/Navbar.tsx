import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex flex-row justify-evenly py-10 border-b border-gray-800 text-gray-600 text-[1.5rem]">
      <Link href={"/"}>
        <div className="">Home</div>
      </Link>
      <Link href={"/experience"}>
        <div className="">Experience</div>
      </Link>
      <Link href={"/projects"}>
        <div className="">Project</div>
      </Link>
    </nav>
  );
};

export default Navbar;
