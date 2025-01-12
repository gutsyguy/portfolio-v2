"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Project } from "@/lib/interfaces";
import Image from "next/image";
import { db } from "@/lib/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

const Page = () => {
  const params = useParams().project;
  const [project, setProject] = useState<Project>();

  const getProject = async (id: number) => {
    try {
      const collectionRef = collection(db, "projects");
      const q = query(collectionRef, where("id", "==", id));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        const docData = querySnapshot.docs[0].data() as Project;
        setProject(docData);
      } else {
        console.log("No matching project found.");
      }
    } catch (error) {
      console.error("Error fetching project:", error);
    }
  };

  useEffect(() => {
    getProject(Number(params));
  });

  if (project) {
    return (
      <div className="text-black mx-[4rem]">
        <h1>{project.name}</h1>
        <Image src={`/image.png`} alt="Deez nuts" width={480} height={480} />
        <p>{project.description}</p>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Project not found</h1>
      </div>
    );
  }
};

export default Page;
