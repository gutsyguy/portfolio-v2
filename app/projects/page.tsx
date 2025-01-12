import React from "react";
import ProjectCard from "@/components/Project/Project";
import { Project } from "@/lib/interfaces";
import { fakeData } from "@/lib/fakeData";

const Page = () => {
  return (
    <div>
      <div className="flex flex-row flex-wrap justify-evenly ">
        {fakeData.map((project, index) => (
          <ProjectCard
            id={project.id}
            name={project.name}
            description={project.description}
            image={project.image}
            url={project.url}
            technologies={project.technologies}
            github={project.github}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Page;
