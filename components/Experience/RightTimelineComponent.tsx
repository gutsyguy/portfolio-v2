interface TimelineContainerProps {
  description: string;
  type: string;
  title: string;
  date: string;
}

const RightTimelineComponent = (props: TimelineContainerProps) => {
  return (
    <div className="mt-6 sm:mt-0 sm:mb-12" data-aos="fade-up">
      <div className="flex flex-col sm:flex-row items-center">
        <div className="flex justify-end w-full mx-auto items-center ">
          <div className="w-full sm:w-1/2 sm:pl-8">
            <div className="p-4 bg-red-400 text-[#e9c045] rounded shadow border-solid border-[#D7A514] border-2">
              <h1 className=" text-xl">{props.title} </h1>
              <h1 className=" text-lg"> {props.type}</h1>
              <h1>{props.date}</h1>
              <h1 className="text-white">{props.description}</h1>
            </div>
          </div>
        </div>
        <div className="rounded-full bg-red-400 border-[#D7A514] border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-[#D7A514]"
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

export default RightTimelineComponent;
