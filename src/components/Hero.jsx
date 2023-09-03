import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Hero = () => {
  const currentUriLocation = useLocation();
  const [isShortButtonClicked, setIsShortButtonClicked] = useState(false);
  const [isLongButtonClicked, setIsLongButtonClicked] = useState(false);

  const shortFormButtonHandler = () => {
    setIsShortButtonClicked(!isShortButtonClicked);
    setIsLongButtonClicked(false);
  };
  const longFormButtonHandler = () => {
    setIsLongButtonClicked(!isLongButtonClicked);
    setIsShortButtonClicked(false);
  };

  return (
    <>
      <div className="text-center flex flex-col lg:w-1/2 md:w-3/5 mx-auto lg:mx-auto">
        <h1 className="my-12 text-2xl text-black font-bold ">
          نموذج التقديم لبطاقة اموال
        </h1>
        <Link
          to="/shortform"
          onClick={shortFormButtonHandler}
          className={`${
            currentUriLocation.pathname === "/shortform" &&
            "bg-blue-600 text-white"
          } hover:bg-blue-600 hover:text-white  px-4 py-2 outline rounded-lg outline-blue-600 outline-1 text-blue-600 text-lg font-bold mb-5`}
        >
          تقدم بطلب بطاقة مختصر
        </Link>
        <Link
          to="/longform"
          onClick={longFormButtonHandler}
          className={`${
            currentUriLocation.pathname === "/longform" &&
            "bg-blue-600 text-white"
          } hover:bg-blue-600 hover:text-white  px-4 py-2 outline rounded-lg outline-blue-600 outline-1 text-blue-600 text-lg font-bold`}
        >
          تقدم بطلب بطاقة اموال/ النموذج الكامل
        </Link>
      </div>
    </>
  );
};

export default Hero;
