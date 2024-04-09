import { CircleChevronLeft, CircleChevronRight } from "lucide-react";
import React from "react";

const ReadMyStory = () => {
  return (
    <div className="bg-[#112C41] flex items-center justify-center md:justify-start md:h-[836px]">
      <div className="flex flex-col md:flex-row md:ml-[120px] md:mr-[120px] items-center md:gap-[116px]">
        <div className="flex justify-center md:justify-start">
          <img
            src="Rectangle 19.png"
            alt=""
            className="w-full md:min-w-[500px] md:h-[500px] md:max-w-[734px] mb-4 md:mb-0"
          />
        </div>

        <div className="flex flex-col items-center md:items-start md:max-w-[734px]">
          <div className="mb-4">
            <img alt="" src="Group 7.png" className="w-12 h-12" />
          </div>
          <div className="text-white mx-4 md:mx-0 md:mr-4 text-center md:text-left">
            <h6 className="mt-4 md:mt-0 mb-2 md:mb-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              sodales turpis et lacinia fermentum. Curabitur vestibulum at arcu
              sed blandit. In consequat euismod purus nec imperdiet.
            </h6>
            <br />
            <h6 className="mb-2">Title</h6>
            <h6>Name</h6>
          </div>
          <div className="flex items-center gap-4 pt-3 mx-4 md:mx-0">
            <img alt="" src="Group 8.png" className="w-8 h-8" />
            <h1 className="text-lg font-medium text-white">Read my story</h1>
          </div>
        </div>

        <div className="  flex items-center gap-4 mt-4 md:mt-0 md:ml-4">
          <CircleChevronLeft
            color="#ffffff"
            height="37.5px"
            width="41.67"
            strokeWidth={0.75}
          />
          <CircleChevronRight
            color="#ffffff"
            height="37.5px"
            width="41.67"
            strokeWidth={0.75}
          />
        </div>
      </div>
    </div>
  );
};

export default ReadMyStory;
