"use client";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import ProjectSlider from "@/components/Project/ProjectSlider";
import Card from "@/components/Home/Card";

export default function Home() {
  return (
    <div
      className="text-black bg-no-repeat"
      style={{ backgroundImage: "url('/timeline.svg')" }}
    >
      <section className="flex flex-col items-center justify-center h-screen ">
        <Card />
        {/* <h1>
          My name is Yalamber Subba. I am currently an ECE freshman at UC Davis.
          I enjoy programming, MMA and boxing.
        </h1> */}
      </section>
      <section>
        <h1 className="text-center text-[2rem] my-[1rem]">Example Projects</h1>
        <ProjectSlider />
      </section>
      <section>
        <h1 className="text-center text-[2rem] my-[1rem]">Skills</h1>
      </section>

      <section>
        <ContactForm />
      </section>
    </div>
  );
}
