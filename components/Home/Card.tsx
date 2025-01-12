import React from "react";
import Image from "next/image";

const Card = () => {
  return (
    <div
      data-aos="zoom-out"
      className="flex flex-col items-start mb-5 pb-6 p-10 bg-white border-2 border-black  shadow-2xl rounded-2xl dark:shadow-transparent "
    >
      <div className="flex sm:flex-row grid-cols-2 content-center w-full ">
        <div className="flex flex-col">
          {/* // Fix font later */}
          <h1 className=" items-center font-bold text-5xl sm:text-7xl tracking-tight mb-1 text-red-400 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
            Yalamber <br /> Subba
          </h1>
        </div>
        <div className="w-[80px] sm:w-[250px] relative mb-8 sm:mb-0 mx-auto ">
          <Image
            alt="Yalamber Subba"
            height={250}
            width={250}
            src="/image.png"
            sizes="30vw"
            priority
            className="rounded-full border border-black filter dark:grayscale"
          />
        </div>
      </div>

      <div className="">
        <h2 className="text-gray-700  mb-4 text-2xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
          Software Engineer <br />
          1st year ECE at <span className="font-semibold">UC Davis</span>
        </h2>
        <p className="text-gray-600 text-xl dark:text-gray-400 drop-shadow-[0_1.2px_1.2px_rgba(0.2,0,0,0.2)]">
          Full-stack and mobile developer
        </p>
      </div>
    </div>
  );
};

export default Card;
