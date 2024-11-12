"use client";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <div className="text-black">
      <section className="flex flex-col items-center justify-center h-screen ">
        <h1>
          My name is Yalamber Subba. I am currently an ECE freshman at UC Davis.
          I enjoy programming, MMA and boxing.
        </h1>
      </section>
      <section>
        <h1 className="text-center">Example Projects</h1>
      </section>
      <section>
        <h1 className="text-center">Skills</h1>
      </section>

      <section>
        <ContactForm />
      </section>
    </div>
  );
}
