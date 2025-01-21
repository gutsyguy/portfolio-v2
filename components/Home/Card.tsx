import React from "react";
import Image from "next/image";

const Card: React.FC = () => {
  return (
    <div
      data-aos="zoom-out"
      className="flex flex-col items-start mb-5 p-6 sm:p-10 bg-white border-2 border-black shadow-2xl rounded-2xl dark:bg-gray-800 dark:border-gray-600 dark:shadow-transparent"
    >
      <div className="flex justify-center sm:grid-cols-2 items-center gap-4 w-full text-center">
        <div className="flex flex-col sm:items-center items-start sm:text-left">
          <h1 className="font-bold text-4xl sm:text-5xl lg:text-7xl tracking-tight mb-3 sm:mb-1 text-[#BCCCDC] dark:text-blue-300 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
            Yalamber <br /> Subba
          </h1>
        </div>

        <div className="w-[100px] sm:w-[200px] lg:w-[250px] relative mx-auto">
          <Image
            alt="Yalamber Subba"
            height={250}
            width={250}
            src="/yalamber.png"
            sizes="30vw"
            priority
            className="rounded-full border border-black dark:border-gray-600 filter dark:grayscale"
          />
        </div>
      </div>

      <div className="mt-6 text-[#9AA6B2]">
        <h2 className="sm:text-center text-lg sm:text-xl lg:text-2xl mb-4 dark:text-gray-300 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
          Software Engineer <br />
          1st year ECE at <span className="font-semibold">UC Davis</span>
        </h2>
        <p className=" sm:text-center text-base sm:text-lg lg:text-xl dark:text-gray-400 drop-shadow-[0_1.2px_1.2px_rgba(0.2,0,0,0.2)]">
          Full-stack and mobile developer
        </p>
      </div>
    </div>
  );
};

export default Card;
