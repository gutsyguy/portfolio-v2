"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { fakeData } from "@/lib/fakeData";
import { Project } from "@/lib/interfaces";
import Image from "next/image";

const page = () => {
  const params = useParams().project;
  const [project, setProject] = useState<Project>();

  const FindProjectById = (id: number) => {
    for (let i = 0; i < fakeData.length; i++) {
      if (fakeData[i].id === id) {
        setProject(fakeData[i]);
        return;
      }
    }
  };

  useEffect(() => {
    FindProjectById(Number(params));
  });

  console.log(project);
  if (project) {
    return (
      <div className="text-black mx-[4rem]">
        <h1>{project.name}</h1>
        <Image src={`/image.png`} alt="Deez nuts" width={480} height={480} />
        <p>{project.description}</p>
      </div>
    );
  }
};

export default page;
