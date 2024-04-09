import React from "react";
import { CircleArrowRight } from "lucide-react";

const GlobalBusiness = () => {
  return (
    <div>
      <div className="space-y-10 mt-32 text-center">
        <div className="space-y-10 mt-32 text-center">
          <div className="md:px-48 md:mx-12">
            <h1 className="font-inter font-medium text-[42px] text-black ">
              As a{" "}
              <span className="text-[#F36F2B] font-inter font-medium text-[42px]">
                global business,
              </span>{" "}
              we encourage you to contact us no matter where you are located in
              the world.
            </h1>
          </div>

          <div className="flex items-center justify-center">
            <h1 className="font-inter font-medium text-lg text-[#F36F2B] mr-2">
              OPEN ROLES
            </h1>
            <div className="mt-1">
              <CircleArrowRight
                color="#F36F2B"
                height="30px"
                width="30px"
                strokeWidth="1.5"
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <img
          alt="map"
          src="/Globalmap.png"
          className=" h-full mx-auto my-10"
        />
      </div>
    </div>
  );
};

export default GlobalBusiness;
