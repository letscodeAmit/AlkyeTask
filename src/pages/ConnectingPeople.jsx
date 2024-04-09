import React from "react";
import { Presentation, MessagesSquare, BookUser } from "lucide-react";

const ConnectingPeople = () => {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 h-5/6 md:py-2">
      <div className="flex flex-col">
        <div className="space-y-10 px-4 md:px-28 sm:mt-[73px] pb-12">
          <div className="">
            <h1 className="font-oswald font-extralight text-4xl text-black">
              {" "}
              We{" "}
              <span className="font-oswald font-extralight text-4xl text-orange-500">
                stay connected
              </span>
            </h1>
          </div>
          <div className="flex flex-col">
            <div className="flex gap-8">
              <div>
                <Presentation
                  height="37.5px"
                  width="41.67"
                  strokeWidth={0.75}
                />
              </div>
              <div className={"flex flex-col gap-4"}>
                <div className="font-inter font-medium text-2xl">
                  Quarterly Business Updates
                </div>
                <div className="font-inter font-normal text-lg">
                  We strive to stay connected as a team through communication
                  and collaboration. This materialises every quarter through our
                  Quarterly Business Update events. These gatherings are
                  immersive sessions where every team member, regardless of rank
                  or tenure, comes together to contribute to our overarching
                  business strategy, and stay connected. They are opportunities
                  to learn from our seasoned leaders and to also share personal
                  insights and achievements that can steer our collective
                  future. In an ever-evolving engineering landscape, staying
                  connected isn’t just a benefit—it’s essential.
                </div>
              </div>
            </div>
            <br />
          </div>
          <div className="flex flex-row gap-8 items-center">
            <div>
              <MessagesSquare
                height="37.5px"
                width="41.67"
                strokeWidth={0.75}
              />
            </div>
            <div className="font-inter font-medium  text-2xl">
              Industry Events & Networking
            </div>
          </div>
          <div className="flex flex-row gap-8 items-center">
            <div>
              <BookUser height="37.5px" width="41.67" strokeWidth={0.75} />
            </div>
            <div className="font-inter font-medium text-2xl">
              Associations Memberships
            </div>
          </div>
        </div>
      </div>
      <div>
        <img className="object-cover" alt="boys_img" src="/Rectangle 39.png" />
      </div>
    </div>
  );
};

export default ConnectingPeople;
