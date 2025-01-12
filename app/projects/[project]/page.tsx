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

  const getProject = async (url: string) => {
    try {
      const collectionRef = collection(db, "projects");
      const q = query(collectionRef, where("url", "==", url));
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
    if (typeof params == "string") {
      getProject(params);
    }
  });

  if (project) {
    return (
      <div className="text-black mx-[15rem] text-[1.2rem]">
        <h1 className="text-[3rem] drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] font-bold">
          {project.name}
        </h1>
        <div className="flex flex-row items-center text-[1rem]">
          <h2>Yalamber Subba </h2>
          <h2 className="px-[0.5rem]">March 2023</h2>
        </div>
        <h1 className="text-[2rem] font-semibold">
          Elgoog: The reverse search engine
        </h1>
        <p className="text-[1.2rem]">
          Are you bored? Maybe you feel like doing something dumb. Well, we've
          got just the thing to make you chuckle - Elgoog! Elgoog is a "search
          engine" modeled after Google, built using Next.js, Tailwind, Vercel,
          and the Google API. Except you get the opposite of what you want.
        </p>
        <Image
          className="py-[1rem] rounded-xl"
          src={
            "https://cdn.sanity.io/images/tanecygi/production/3e78f930fc3c29ec49d69fc08418301309913184-2880x1634.png"
          }
          width={1080}
          height={720}
          alt="Elgoog"
        />
        <h1 className="text-[1.5rem] font-medium bg-gray-400 border-2 border-gray-500 px-[1rem]">
          All you have to do is search and see what comes up.
        </h1>
        <h2 className="">Now lets test it</h2>
        <h1 className="text-[1.5rem] font-medium bg-gray-400 border-2 border-gray-500 px-[1rem]">
          Try typing "bad person playing on piano"...
        </h1>
        <Image
          className=" rounded-xl py-[1rem]"
          src={
            "https://cdn.sanity.io/images/tanecygi/production/d9643225d5f28e78f65d81f70117292fe32adb51-1722x1450.png"
          }
          width={1080}
          height={720}
          alt="Elgoog"
        />
        <h1 className="text-[2rem]">Software Background</h1>
        <p>
          We can up with a couple solutions but ultimately implemented it by
          using the Antonym and Google API.
        </p>
        <h1 className="text-[2rem]">How it works</h1>
        <p className="bg-gray-400 border-2 border-gray-500 px-[1rem]">{`InputText => PhraseSplitter => AntonymsAPI => NewPhrase => GoogleSearchAPI => Results (which appears on the page)`}</p>
        <h1>
          {`Now when we return we see that we get to opposite of "bad person
          playing piano."`}
        </h1>
        <p className="bg-gray-400 border-2 border-gray-500 px-[1rem]">
          It returns "good person playing off forte"
        </p>
        <Image
          className="rounded-xl py-[1rem]"
          src={
            "https://cdn.sanity.io/images/tanecygi/production/91cac06c91ce36878c426fbb57cf1393c7c4c03f-1722x1580.png"
          }
          width={1080}
          height={1440}
          alt="Elgoog"
        />
        <h1 className="text-[2rem] font-medium">Reflection</h1>
        <p>
          The goal with this project was to do things to do things upside down
          you can see, we get the complete opposite of what we searched for, if
          you try searching good, the first result will be "Bad" by Michael
          Jackson.
        </p>
        {/* <p>{project.description}</p> */}
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
