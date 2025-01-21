import React from "react";
import { Project } from "@/lib/interfaces";
import Image from "next/image";
import Link from "next/link";

const ProjectCard = (props: Project) => {
  const { id, name, description, image, url, technologies, github } = props;
  return (
    <Link href={`/projects`} about={`${id} ${url}`}>
      <div
        className="text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"
        data-aos="zoom-out"
      >
        <div className="bg-[#9AA6B2] my-[1rem] dark:bg-gray-700 dark:shadow-transparent rounded-lg shadow-md border-2 border-gray-700 dark:border-gray-600 border-solid transform transition ease-in-out duration-500 hover:scale-110 w-[300px] mx-auto">
          <div className="flex justify-center">
            <Image
              src={image}
              className="max-w-full w-full h-auto rounded-md bg-white"
              width={300}
              height={200}
              alt={name}
            />
          </div>
          <div className="p-4 min-h-[240px] flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-semibold dark:text-blue-300 text-[#D9EAFD] truncate drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                {name}
              </h2>
              <p className="text-md break-words mb-4">{description}</p>
            </div>
            <div>
              <p className="text-md">Skills: {technologies}</p>
              <a href={github} target="_blank" rel="noopener noreferrer">
                <button className="text-black px-4 py-2 mt-4 bg-[#D9EAFD] rounded-md hover:bg-[#BCCCDC] dark:bg-gray-500 dark:hover:bg-gray-400">
                  Source Code
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
