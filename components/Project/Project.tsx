import React from "react";
import { Project } from "@/lib/interfaces";
import Image from "next/image";

const ProjectCard = (props: Project) => {
  const { id, name, description, image, url, technologies, github } = props;
  return (
    <div className="text-white my-[2rem]">
      <div className="bg-red-400 rounded-lg shadow-md border-2 border-solid transform transition ease-in-out duration-500 hover:scale-110">
        <div className="flex justify-center">
          {/* Using max-w-full to ensure image doesn't overflow its container and w-full to take full width of its container */}
          <Image
            src={image}
            className="max-w-full w-full md:w-[300px] h-auto md:h-[15rem] rounded-md bg-white"
            width={0}
            height={0}
            alt={name}
          />
        </div>
        <div className="p-4">
          <h2 className="text-2xl font-semibold text-[#D7A514]">{name}</h2>
          <h1 className="text-md">{description}</h1>
          <h1 className="text-md">Skills: {technologies}</h1>
          <a href={github}>
            <button className="px-4 py-2 mt-4 text-white bg-blue-600 rounded-md hover:bg-blue-700">
              Source Code
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
