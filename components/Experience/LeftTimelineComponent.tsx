import { useState } from "react";
import { TimelineContainerProps } from "@/lib/interfaces";

const LeftTimelineComponent = (props: TimelineContainerProps) => {
  const [isHovering, setIsHovering] = useState<Boolean>(false);

  const handleHoverTrue = () => setIsHovering(true);
  const handleHoverFalse = () => setIsHovering(false);

  return (
    <div
      className="mt-6 sm:mt-0 sm:mb-12 transform transition duration-700"
      data-aos="zoom-out"
    >
      <div className="flex flex-col sm:flex-row items-center">
        <div className="flex justify-start w-full mx-auto items-center">
          <div
            className={`w-full sm:w-1/2 sm:pr-8 transition-transform duration-700 ${
              isHovering ? "scale-105 opacity-100" : "scale-100 opacity-90"
            }`}
          >
            <div
              className="p-4 bg-red-400 rounded shadow text-gray-700 border-solid border-gray-700 border-2 transform transition-all duration-500"
              onMouseEnter={handleHoverTrue}
              onMouseLeave={handleHoverFalse}
            >
              <div>
                <h1 className="text-xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.4)]">{props.company}</h1>
                <h1 className="text-lg">{props.role}</h1>
                <h1>{props.date}</h1>
                {isHovering && (
                  <div
                    className="list-disc pl-5 overflow-y-auto mt-4"
                    style={{
                      maxHeight: "150px",
                      paddingRight: "1rem",
                    }}
                  >
                    <div
                      dangerouslySetInnerHTML={{
                        __html: props.description,
                      }}
                    ></div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-full bg-red-400 border-gray-700 border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default LeftTimelineComponent;
