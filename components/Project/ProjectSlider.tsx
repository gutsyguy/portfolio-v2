import React from "react";
import ProjectCard from "./Project";
import { useEffect, useState } from "react";
import { Project } from "@/lib/interfaces";
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "@/lib/firebase";

const ProjectSlider = () => {
  const [projects, setProjects] = useState<Project[]>();

  const updateData = async (): Promise<void> => {
    try {
      const snapshot = query(collection(db, "projects"));
      const docs = await getDocs(snapshot);
      const projectData: Project[] = docs.docs.map((doc) => ({
        id: doc.data().id,
        image: doc.data().image,
        name: doc.data().name,
        github: doc.data().github,
        description: doc.data().description,
        url: doc.data().url,
        technologies: doc.data().tools,
        date: doc.data().date,
        page: doc.data().page,
      }));

      projectData.sort((a, b) => a.id - b.id);

      console.log(projectData);
      setProjects(projectData);
    } catch (error) {
      console.error("Error fetching inventory:", error);
    }
  };

  useEffect(() => {
    updateData();
  }, []);
  if (projects) {
    return (
      <div className="flex flex-col lg:flex-row md:flex-col sm:flex-col  justify-evenly">
        <ProjectCard
          id={1}
          name={projects[0].name}
          description={projects[0].description}
          image="/transit-track.png"
          url="yalamber-subba.vercel.app"
          technologies={projects[0].technologies}
          page={"Dne"}
          date="DNE"
          github="https://github.com/gutsyguy"
        />
        <ProjectCard
          id={1}
          name={projects[1].name}
          description={projects[1].description}
          image="/elgoog.png"
          url="yalamber-subba.vercel.app"
          technologies={projects[1].technologies}
          page={"Dne"}
          date="DNE"
          github="https://github.com/gutsyguy"
        />
        <ProjectCard
          id={1}
          name={projects[2].name}
          description={projects[2].description}
          image="/trashbot.png"
          url="yalamber-subba.vercel.app"
          technologies={projects[2].technologies}
          page={"Dne"}
          date="DNE"
          github="https://github.com/gutsyguy"
        />
      </div>
    );
  }
};

export default ProjectSlider;
