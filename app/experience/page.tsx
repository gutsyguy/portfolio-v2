"use client";
import RightTimelineComponent from "@/components/Experience/RightTimelineComponent";
import LeftTimelineComponent from "@/components/Experience/LeftTimelineComponent";
import AOS from "aos";
import "aos/dist/aos.css";
import { db } from "@/lib/firebase";
import { collection, getDocs, query } from "firebase/firestore";
import { useState, useEffect } from "react";
import { TimelineContainerProps } from "@/lib/interfaces";

const checkTimelineSide = (count: number) => {
  if (count % 2 == 0) {
    return false;
  } else {
    return true;
  }
};
const Timeline = () => {
  const [data, setData] = useState<TimelineContainerProps[]>([]);

  const updateData = async (): Promise<void> => {
    try {
      const snapshot = query(collection(db, "timeline"));
      const docs = await getDocs(snapshot);
      const timelineData: TimelineContainerProps[] = docs.docs.map((doc) => ({
        id: doc.data().id,
        company: doc.data().company,
        role: doc.data().role,
        date: doc.data().date,
        description: doc.data().description,
      }));

      timelineData.sort((a, b) => a.id - b.id);

      console.log(timelineData);
      setData(timelineData);
    } catch (error) {
      console.error("Error fetching inventory:", error);
    }
  };

  useEffect(() => {
    AOS.init();
    updateData();
  }, []);

  return (
    <div
      className="bg-cover"
      //   style={{ backgroundImage: `url(${require("public/Timeline.svg")})` }}
      id="Timeline"
    >
      <div className="text-center pt-[1rem] text-gray-600 dark:text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
        <h1
          data-aos="fade-up"
          className="lg:text-[5rem] md:text-[4rem] text-[3rem]"
        >
          <b>Experience</b>
        </h1>
      </div>
      <div className="min-h-screen py-6 flex flex-col justify-center sm:py-12">
        <div className="py-3  sm:max-w-xl sm:mx-auto w-full px-2 sm:px-0">
          <div className="relative  text-gray-700 dark:text-white antialiased text-sm font-semibold">
            <div className="hidden border border-gray-800 sm:block w-1 dark:bg-gray-800 bg-[#BCCCDC] absolute h-full left-1/2 transform -translate-x-1/2"></div>
            {data.map((timelineElement, i) =>
              checkTimelineSide(i) ? (
                <LeftTimelineComponent
                  data-aos="fade-up"
                  data-aos-duration="3000"
                  data-aos-delay="1000"
                  company={timelineElement.company}
                  key={i}
                  id={timelineElement.id}
                  role={timelineElement.role}
                  date={timelineElement.date}
                  description={timelineElement.description}
                />
              ) : (
                <RightTimelineComponent
                  data-aos="fade-up"
                  data-aos-duration="3000"
                  data-aos-delay="1000"
                  company={timelineElement.company}
                  key={i}
                  id={timelineElement.id}
                  role={timelineElement.role}
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
