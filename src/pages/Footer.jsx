import React from "react";
import { Copyright } from "lucide-react";

const Footer = () => {
  return (
    <div className="bg-black">
      <div className="container mx-auto py-8 px-4 md:px-0 ">
        <div className="grid grid-cols-1 sm:grid-cols-3  md:grid-cols-2 lg:grid-cols-5 gap-4 px-20 my-16 sm:place-items-center">
          <div className="flex flex-col space-y-3 sm:place-items-center">
            <div >
              {" "}
              <img
                alt=""
                src="/Group 1484.png"
                className="h-[78px] w-[127px] "
              />
            </div>
            <div className="flex flex-row space-x-8">
              <div>
                <img alt="" src="/Linkedin.png" />
              </div>
              <div>
                <img alt="" src="/facebook-logo.png" />
              </div>
              <div>
                <img alt="" src="/instagram.png" />
              </div>
            </div>
          </div>
          <div >
            <h1 className="font-semibold text-base text-white">Expertise</h1>
            <div className="flex flex-col">
              <h1 className="font-light text-base text-white">Design</h1>
              <h1 className="font-light text-base text-white">
                Specialist Expertise
              </h1>
              <h1 className="font-light text-base text-white">
                Commercial Advice
              </h1>
              <h1 className="font-light text-base text-white">
                Traffic & Transport
              </h1>
            </div>
          </div>
          <div>
            <h1 className="font-semibold text-base text-white">Sectors</h1>
            <div className="flex flex-col">
              <h1 className="font-light text-base text-white">Road</h1>
              <h1 className="font-light text-base text-white">Tunnel</h1>
              <h1 className="font-light text-base text-white">Bridge</h1>
              <h1 className="font-light text-base text-white">Others</h1>
            </div>
          </div>
          <div>
            <h1 className="font-semibold text-base text-white">Our Business</h1>
            <h1 className="font-semibold text-base text-white">Work with us</h1>
            <h1 className="font-semibold text-base text-white">
              Projects
            </h1>{" "}
            <h1 className="font-semibold text-base text-white">News</h1>
          </div>
          <div>
            <h1 className="font-semibold text-base text-white">
              Our Capabilities
            </h1>
            <h1 className="font-semibold text-base text-white">Engineers</h1>
            <h1 className="font-semibold text-base text-white">
              Contacts
            </h1>{" "}
          </div>
        </div>
        <div className="border-t border-slate-200 my-10"></div>
        <div className="flex flex-col md:flex-row justify-around items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <div className="mt-1">
              <Copyright
                color="#ffffff"
                height="20px"
                width="20"
                strokeWidth={0.75}
              />
            </div>
            <div className="font-normal text-base text-white ml-2">
              2021 Case International. All rights reserved.
            </div>
          </div>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <h1 className="font-normal text-base text-white cursor-pointer">
              Terms & Condition
            </h1>
            <h1 className="font-normal text-base text-white cursor-pointer">
              Privacy Policy
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
