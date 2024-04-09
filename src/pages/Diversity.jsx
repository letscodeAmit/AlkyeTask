import React from "react";

const Diversity = () => {
  return (
    <div className="bg-[#112C41] flex flex-col">
      <div className="flex flex-col md:grid md:grid-cols-2 gap-8 mx-16 my-32">
        <div className="flex flex-col md:items-start">
          <h1 className="font-extralight text-4xl md:text-6xl text-white text-center md:text-left">
            We believe in{" "}
            <span className="text-[#F36F2B]">diversity & inclusion</span>
          </h1>
        </div>

        <div className="flex flex-col mr-8 pl-8">
          <h6 className="text-white font-inter font-normal text-sm md:text-base mb-4">
            At CaSE we do not just accept difference — we celebrate it, we
            support it, and we thrive on it for the benefit of our employees,
            our services, our industry and our community. We are proud to be an
            equal opportunity employer. Guided by our values and beliefs, we
            foster an inclusive workplace culture where employees thrive because
            of their differences, not in spite of them.
          </h6>
          <h6 className="text-white font-inter font-normal text-sm md:text-base mb-4">
            Our values and beliefs, we foster an inclusive workplace culture
            where employees thrive because of their differences, not in spite of
            them Our Commitment to reinventing the standard. With more than 20
            nationalities represented in our global workforce, we firmly believe
            that our ability to deliver high-quality results is fueled by our
            active efforts to embed diversity and inclusion. We recognise,
            respect, and strive to create an environment where employees can
            excel and feel a true sense of belonging.{" "}
          </h6>
          <h6 className="font-bold text-white text-sm md:text-base">
            Some of our strategic initiatives include:
          </h6>
        </div>
      </div>
      <div className="flex justify-center ">
        <img src="/Group 1593.png" alt="bridge" className="w-full h-full" />
      </div>
    </div>
  );
};

export default Diversity;
