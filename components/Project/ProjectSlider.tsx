import React from "react";
import ProjectCard from "./Project";
import { fakeData } from "@/lib/fakeData";

const ProjectSlider = () => {
  return (
    <div className="flex flex-row justify-between">
      <ProjectCard
        id={1}
        name={fakeData[0].name}
        description={fakeData[0].description}
        image="/file.svg"
        url="yalamber-subba.vercel.app"
        technologies={fakeData[0].technologies}
        github="https://github.com/gutsyguy"
      />
      <ProjectCard
        id={1}
        name={fakeData[1].name}
        description={fakeData[1].description}
        image="/file.svg"
        url="yalamber-subba.vercel.app"
        technologies={fakeData[1].technologies}
        github="https://github.com/gutsyguy"
      />
      <ProjectCard
        id={1}
        name={fakeData[2].name}
        description={fakeData[2].description}
        image="/file.svg"
        url="yalamber-subba.vercel.app"
        technologies={fakeData[2].technologies}
        github="https://github.com/gutsyguy"
      />
    </div>
  );
};

export default ProjectSlider;
