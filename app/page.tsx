"use client";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import ProjectSlider from "@/components/Project/ProjectSlider";
import Card from "@/components/Home/Card";

export default function Home() {
  return (
    <div className="text-gray-700 font-semibold px-[15rem]">
      <section className="flex flex-col items-center justify-center h-screen ">
        <Card />
      </section>
      <section>
        <h1 className="text-center text-[2rem]">Example Projects</h1>
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
