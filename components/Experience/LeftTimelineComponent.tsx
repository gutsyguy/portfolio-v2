interface LeftTimelineContainerProps {
  description: string;
  title: string;
  type: string;
  date: string;
}

const LeftTimelineComponent = (props: LeftTimelineContainerProps) => {
  return (
    <div className="mt-6 sm:mt-0 sm:mb-12" data-aos="fade-up">
      <div className="flex flex-col sm:flex-row items-center">
        <div className="flex justify-start w-full mx-auto items-center">
          <div className="w-full sm:w-1/2 sm:pr-8">
            <div className="p-4 bg-red-400 rounded shadow text-[#e9c045] border-solid border-[#D7A514] border-2">
              <h1 className=" text-xl">{props.title} </h1>
              <h1 className="text-lg">{props.type}</h1>
              <h1>{props.date}</h1>
              <h1 className="text-white">{props.description}</h1>
            </div>
          </div>
        </div>
        <div className="rounded-full bg-red-400 border-[#D7A514] border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-[#D7A514] border-black"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default LeftTimelineComponent;
