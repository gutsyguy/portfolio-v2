import React from "react";
import ProjectCard from "./Project";

const ProjectSlider = () => {
  return (
    <div className="flex flex-row justify-evenly">
      <ProjectCard
        id={1}
        name="e"
        description="eee"
        image="/file.svg"
        url="yalamber-subba.vercel.app"
        technologies={["e", "f"]}
        github="https://github.com/gutsyguy"
      />
      <ProjectCard
        id={1}
        name="e"
        description="eee"
        image="/file.svg"
        url="yalamber-subba.vercel.app"
        technologies={["e", "f"]}
        github="https://github.com/gutsyguy"
      />
      <ProjectCard
        id={1}
        name="e"
        description="eee"
        image="/file.svg"
        url="yalamber-subba.vercel.app"
        technologies={["e", "f"]}
        github="https://github.com/gutsyguy"
      />
    </div>
  );
};

export default ProjectSlider;
