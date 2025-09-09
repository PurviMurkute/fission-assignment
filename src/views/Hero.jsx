// Hero.jsx
import React, { useContext, useState } from "react";
import Navbar from "../components/Navbar";
import image from "../assets/image.png";
import { ThemeContext } from "../context/themeContext";
import { motion, AnimatePresence } from "motion/react";
import { SiSony, SiTata, SiBmw } from "react-icons/si";
import cookieicon from "../assets/biscuit.png";
import { RiCloseCircleFill } from "react-icons/ri";

const logos = [
  { id: "sony", icon: SiSony },
  { id: "tata", icon: SiTata },
  { id: "bmw", icon: SiBmw },
];

const Hero = () => {
  const [isPrivacyPolicyOpen, setIsPrivacyPolicyOpen] = useState(false);
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
          <div className="md:absolute left-0 right-0 bottom-0 pt-10">
            <div className="max-w-7xl mx-auto px-6 py-5">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <p className="text-md md:text-lg md:font-medium mr-8">
                  Your trusted{" "}
                  <span className="font-normal md:font-bold">
                    UI UX design agency.
                  </span>
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

          <img
            src={cookieicon}
            alt="cookie"
            className="fixed bottom-4 left-4 w-10 h-10 cursor-pointer"
            onClick={() => setIsPrivacyPolicyOpen(true)}
          />

          <img
            src={cookieicon}
            alt="cookie"
            className="fixed bottom-4 left-4 w-10 h-10 cursor-pointer"
            onClick={() => setIsPrivacyPolicyOpen(true)}
          />
          {isPrivacyPolicyOpen && (
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.4 }}
              className="w-[300px] fixed top-0 left-0 text-gray-500 bg-white p-5 z-20 overflow-y-auto"
            >
              <div className="flex justify-between">
                <p className="text=lg">Storage Preferences</p>
                <RiCloseCircleFill
                  className="text-2xl cursor-pointer"
                  onClick={() => setIsPrivacyPolicyOpen(false)}
                />
              </div>
              <p className="text-gray-500 py-2 text-xs">
                When you visit websites, they may store or retrieve data about
                you using cookies and similar technologies ("cookies"). Cookies
                may be necessary for the basic functionality of the website as
                well as other purposes. You have the option of disabling certain
                types of cookies, though doing so may impact your experience on
                the website.
              </p>
              <p>Essential</p>
              <p className="text-gray-500 py-2 text-xs">
                Required to enable basic website functionality. You may not
                disable essential cookies.
              </p>
              <p className="py-2">View Disclosures</p>
              <hr />
              <p>Targeted Advertising</p>
              <p className="text-gray-500 py-2 text-xs">
                Used to deliver advertising that is more relevant to you and
                your interests. May also be used to limit the number of times
                you see an advertisement and measure the effectiveness of
                advertising campaigns. Advertising networks usually place them
                with the website operator’s permission.
              </p>
              <p>View Disclosures</p>
              <hr />
              <p>Personalization</p>
              <p className="text-gray-500 py-2 text-xs">
                Allow the website to remember choices you make (such as your
                username, language, or the region you are in) and provide
                enhanced, more personal features. For example, a website may
                provide you with local weather reports or traffic news by
                storing data about your general location.
              </p>
              <p>View Disclosures</p>
              <hr />
              <p>Analytics</p>
              <p className="text-gray-500 py-2 text-xs">
                Help the website operator understand how its website performs,
                how visitors interact with the site, and whether there may be
                technical issues.
              </p>
              <p>View Disclosures</p>
              <button className="border-1 py-2 w-full my-2">Save</button>
            </motion.div>
          )}
        </div>
      </div>
    </>
  );
};

export default Hero;
