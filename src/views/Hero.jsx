import React from "react";
import Navbar from "../components/Navbar";

const Hero = () => {
  return (
    <div>
      <Navbar />
      <div className="flex justify-evenly items-center min-h-screen inset-0">
        <div></div>
        <div>
          <h1 className="text-4xl md:text-7xl font-extrabold leading-tight mb-4">
            Design <br />
            Transform <br />
            Accelerate
          </h1>
          <p className="text-xl font-medium text-gray-700">
            Redefining user experiences through Behavioural Science & AI
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
