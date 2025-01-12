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
        <h1 className="text-center text-[4rem] text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
          Example Projects
        </h1>
        <ProjectSlider />
      </section>
      <section>
        <h1 className="text-center text-[4rem] my-[1rem] text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
          Skills
        </h1>
      </section>

      <section>
        <ContactForm />
      </section>
    </div>
  );
}
