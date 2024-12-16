"use client";
import { useEffect } from "react";
import RightTimelineComponent from "@/components/Experience/RightTimelineComponent";
import LeftTimelineComponent from "@/components/Experience/LeftTimelineComponent";
import Navbar from "@/components/Navbar";
import AOS from "aos";
import { fakeTimeline } from "@/lib/fakeData";
import "aos/dist/aos.css";

const checkTimelineSide = (count: number) => {
  if (count % 2 == 0) {
    return false;
  } else {
    return true;
  }
};
const Timeline = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      className="bg-cover text-gray-600"
      //   style={{ backgroundImage: `url(${require("public/Timeline.svg")})` }}
      id="Timeline"
    >
      <div className="text-center pt-[1rem]">
        <h1 data-aos="fade-up" className="text-[2rem] text-gray-600">
          <b id="About">What I have done</b>
        </h1>
        <h1 data-aos="fade-up" className="text-[5rem]">
          <b>Experience</b>
        </h1>
      </div>
      {/* ... */}
      <div className="min-h-screen py-6 flex flex-col justify-center sm:py-12">
        <div className="py-3  sm:max-w-xl sm:mx-auto w-full px-2 sm:px-0">
          <div className="relative  text-gray-700 antialiased text-sm font-semibold">
            <div className="hidden border border-gray-800 sm:block w-1 bg-red-400 absolute h-full left-1/2 transform -translate-x-1/2"></div>
            {fakeTimeline.map((timelineElement, i) =>
              checkTimelineSide(i) ? (
                <LeftTimelineComponent
                  data-aos="fade-up"
                  data-aos-duration="3000"
                  data-aos-delay="1000"
                  title={timelineElement.title}
                  key={i}
                  type={timelineElement.type}
                  date={timelineElement.date}
                  description={timelineElement.description}
                />
              ) : (
                <RightTimelineComponent
                  data-aos="fade-up"
                  data-aos-duration="3000"
                  data-aos-delay="1000"
                  title={timelineElement.title}
                  key={i}
                  type={timelineElement.type}
                  date={timelineElement.date}
                  description={timelineElement.description}
                />
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
