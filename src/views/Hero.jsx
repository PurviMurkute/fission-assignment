// Hero.jsx
import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import image from "../assets/image.png";
import { ThemeContext } from "../context/themeContext";
import { motion } from "framer-motion";
import { SiSony, SiTata, SiBmw } from "react-icons/si";

const logos = [
  { id: "sony", icon: SiSony },
  { id: "tata", icon: SiTata },
  { id: "bmw", icon: SiBmw }
];

const Hero = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <Navbar />
      <div
        className={`${
          theme === "light"
            ? "bg-white text-black"
            : "bg-gray-900 text-gray-300"
        }`}
      >
        <div className="relative min-h-screen flex flex-col md:flex-row items-center justify-evenly px-6 md:px-5 pb-10 pt-30 md:pt-0">
          <div className="mb-10 md:mb-0">
            <img src={image} alt="img" className="w-[320px] md:w-[400px]" />
          </div>
          <div className="max-w-2xl text-left px-4">
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-4">
              Design <br />
              Transform <br />
              Accelerate
            </h1>

            <p className="text-xl font-medium">
              Redefining user experiences through Behavioural Science & AI
            </p>
          </div>
          <div className="md:absolute left-0 right-0 bottom-0 py-10">
            <div className="max-w-7xl mx-auto px-6 py-5">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <p className="text-md md:text-lg md:font-medium mr-8">
                  Your trusted{" "}
                  <span className="font-normal md:font-bold">UI UX design agency.</span>
                </p>
                <div className="flex-1 overflow-hidden">
                  <motion.div
                    className="flex items-center md:gap-7"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                      repeat: Infinity,
                      repeatType: "loop",
                      duration: 10,
                      ease: "linear",
                    }}
                  >
                    {logos.map((l) => {
                      const Icon = l.icon;
                      return (
                        <div
                          key={l.id}
                          className="w-28 flex items-center justify-center"
                        >
                          <Icon
                            size={50}
                            className={`${
                              theme === "light" ? "text-black" : "text-white"
                            }`}
                          />
                        </div>
                      );
                    })}
                    {logos.map((l, i) => {
                      const Icon = l.icon;
                      return (
                        <div
                          key={`dup-${i}`}
                          className="w-28 flex items-center justify-center"
                        >
                          <Icon
                            size={50}
                            className={`${
                              theme === "light" ? "text-black" : "text-white"
                            }`}
                          />
                        </div>
                      );
                    })}
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
