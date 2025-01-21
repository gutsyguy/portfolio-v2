"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Project } from "@/lib/interfaces";
import { db } from "@/lib/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import DOMPurify from "dompurify";

const Page = () => {
  const params = useParams().project;
  const [project, setProject] = useState<Project>();

  const processPageContent = (html: string) => {
    // Replace `src={`...`}` with `src="..."`
    return html.replace(/src={`([^`]*)`}/g, (match, url) => `src="${url}"`);
  };

  const getProject = async (url: string) => {
    try {
      const collectionRef = collection(db, "projects");
      const q = query(collectionRef, where("url", "==", url));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        const docData = querySnapshot.docs[0].data() as Project;
        // Sanitize and process HTML content
        docData.page = processPageContent(DOMPurify.sanitize(docData.page));
        setProject(docData);
      } else {
        console.log("No matching project found.");
      }
    } catch (error) {
      console.error("Error fetching project:", error);
    }
  };

  useEffect(() => {
    if (typeof params === "string") {
      getProject(params);
    }
  }, [params]);

  if (project) {
    return (
      <div className="text-black dark:text-white mx-[15rem] text-[1.2rem]">
        <h1 className="text-[3rem] drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] font-bold">
          {project.name}
        </h1>
        <div className="flex flex-row items-center text-[1rem]">
          <h2>Yalamber Subba</h2>
          <h2 className="px-[0.5rem]">{project.date}</h2>
        </div>
        <div
          dangerouslySetInnerHTML={{
            __html: project.page,
          }}
        ></div>
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
