import React from "react";
import { heroText } from "../constants/constants";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="flex items-center justify-center h-screen">
      <div className="max-w-screen-lg px-5 grid grid-cols-12 my-auto mx-auto">
        <div className="sm:col-span-8 col-span-12">
          <h1 className="font-extrabold text-5xl mb-5">{heroText[0].title}</h1>
          <p className="text-1xl font-medium mb-5">{heroText[0].content}</p>
        </div>
        <div className="sm:col-span-4 col-span-12 sm:my-auto sm:mx-auto">
          <Link
            to="/auth"
            className="border-2 px-2 py-1 mb-4 block w-24 text-center hover:shadow-lg hover:shadow-primary"
          >
            {heroText[1].title}
          </Link>
          <Link
            to="/auth"
            className="border-2 px-2 py-1 mb-4 block w-24 text-center hover:shadow-lg hover:shadow-primary"
          >
            {heroText[2].title}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
