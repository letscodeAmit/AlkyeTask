import React from "react";
import { Link } from "react-scroll";
import { CircleChevronRight } from "lucide-react";

const NavigationPage = ({ scrollToSection }) => {
  const scrollToParticularSection = (sectionName) => {
    scrollToSection(sectionName);
  };

  return (
    <div>
      <div className="bg-[#112C41] grid grid-cols-1 divide-x divide-black gap-[2px] mt-[-8px] sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3">
        <Link
          to="we-stay-connected"
          spy={true}
          smooth={true}
          duration={800}
          className="flex flex-col bg-[#112C41] justify-center gap-1 px-10 py-10"
        >
          <div className="flex flex-col bg-[#112C41] justify-center gap-1 px-10">
            <div className="font-inter font-medium text-2xl text-[#6B6B6B]">
              01
            </div>
            <div className="flex flex-row justify-between">
              <div>
                <h1 className="font-inter font-medium text-2xl text-white">
                  We stay connected
                </h1>
              </div>
              <div>
                <CircleChevronRight
                  color="#ffffff"
                  height="37.5px"
                  width="41.67"
                  strokeWidth={0.75}
                />
              </div>
            </div>
          </div>
        </Link>

        <Link
          to="diversity"
          spy={true}
          smooth={true}
          duration={800}
          className="flex flex-col bg-[#112C41] justify-center gap-1 px-10 py-10"
          onClick={() => scrollToParticularSection("diversity")}
        >
          <div className="flex flex-col bg-[#112C41] justify-center gap-1 px-10">
            <div className="font-inter font-medium text-2xl text-[#6B6B6B]">
              02
            </div>
            <div className="flex flex-row justify-between">
              <div>
                <h1 className="font-inter font-medium text-2xl text-white">
                  We believe in diversity & inclusion
                </h1>
              </div>
              <div>
                <CircleChevronRight
                  color="#ffffff"
                  height="37.5px"
                  width="41.67"
                  strokeWidth={0.75}
                />
              </div>
            </div>
          </div>
        </Link>
        <Link
          to="success"
          spy={true}
          smooth={true}
          duration={800}
          className="flex flex-col bg-[#112C41] justify-center gap-1 px-10 py-10"
          onClick={() => scrollToParticularSection("success")}
        >
          <div className="flex flex-col bg-[#112C41] justify-center gap-1 px-10">
            <div className="font-inter font-medium text-2xl text-[#6B6B6B]">
              03
            </div>
            <div className="flex flex-row justify-between">
              <div>
                <h1 className="font-inter font-medium text-2xl text-white">
                  We celebrate success
                </h1>
              </div>
              <div>
                <CircleChevronRight
                  color="#ffffff"
                  height="37.5px"
                  width="41.67"
                  strokeWidth={0.75}
                />
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default NavigationPage;
