import React from "react";

const Hero = () => {
  return (
    <>
      <div className="text-center flex flex-col lg:w-1/2 md:w-3/5 mx-auto lg:mx-auto">
        <h1 className="my-12 text-2xl text-black font-bold ">
          نموذج التقديم لبطاقة اموال
        </h1>
        <a
          href=""
          className=" hover:bg-blue-600 hover:text-white  px-4 py-2 outline rounded-lg outline-blue-600 outline-1 text-blue-600 text-lg font-bold mb-5"
        >
          تقدم بطلب بطاقة مختصر
        </a>
        <a
          href=""
          className="hover:bg-blue-600 hover:text-white  px-4 py-2 outline rounded-lg outline-blue-600 outline-1 text-blue-600 text-lg font-bold"
        >
          تقدم بطلب بطاقة اموال/ النموذج الكامل
        </a>
      </div>
    </>
  );
};

export default Hero;
