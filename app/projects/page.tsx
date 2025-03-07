"use client";
import React from "react";
import ProjectCard from "@/components/Project/Project";
import { Project } from "@/lib/interfaces";
import { db } from "@/lib/firebase";
import { collection, getDocs, query } from "firebase/firestore";
import { useState, useEffect } from "react";

const Page = () => {
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
        page: doc.data().page
      }));

      projectData.sort((a, b) => a.id - b.id);

      setProjects(projectData);
    } catch (error) {
      console.error("Error fetching inventory:", error);
    }
  };

  useEffect(() => {
    updateData();
  }, []);

  return (
    <div>
      <div className="flex flex-row flex-wrap justify-evenly ">
        {projects ? (
          projects.map((project, index) => (
            <ProjectCard
              id={project.id}
              name={project.name}
              description={project.description}
              image={project.image}
              url={project.url}
              technologies={project.technologies}
              github={project.github}
              key={index}
              page={project.page}
              date={project.date}
            />
          ))
        ) : (
          <div className="flex flex-row justify-center items-center">
            <svg
              className="bg-gray-900 animate-spin h-5 w-5 mr-3 ..."
              viewBox="0 0 24 24"
            ></svg>
            <h1>Processing...</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
