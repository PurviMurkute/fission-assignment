import React, { useContext, useState } from "react";
import { Link } from "react-router";
import night from "../assets/night-mode.png";
import day from "../assets/sunny-day.png";
import { ThemeContext } from "../context/themeContext";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [isServicesDrpDownOpen, setIsServicesDrpDownOpen] = useState(false);
  const [isAboutDrpDownOpen, setIsAboutDrpDownOpen] = useState(false);
  const [servicesSymbol, setServicesSymbol] = useState("●");
  const [aboutSymbol, setAboutSymbol] = useState("●");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className="fixed top-0 w-full bg-white border-b-1 border-b-black p-4 z-10">
      <div className="flex justify-between md:justify-evenly items-center">
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="logo" className="w-12 h-12" />
          <p className="font-bold text-2xl md:text-4xl">leo9</p>
        </div>
        <div className="flex items-center gap-4 md:gap-7 font-medium">
          <div className="hidden md:flex gap-7">
            <Link>Work</Link>
            <Link
              onMouseEnter={() => {
                setIsServicesDrpDownOpen(true), setServicesSymbol("▾");
              }}
              onMouseLeave={() => {
                setTimeout(() => {
                  if (!document.querySelector("#services-dropdown:hover")) {
                    setIsServicesDrpDownOpen(false);
                    setServicesSymbol("●");
                  }
                }, 200);
              }}
            >
              Services {servicesSymbol}
            </Link>
            <Link>Clients</Link>
            <Link
              onMouseEnter={() => {
                setIsAboutDrpDownOpen(true);
                setAboutSymbol("▾");
              }}
              onMouseLeave={() => {
                setTimeout(() => {
                  if (!document.querySelector("#about-dropdown:hover")) {
                    setIsAboutDrpDownOpen(false);
                    setAboutSymbol("●");
                  }
                }, 200);
              }}
            >
              About {aboutSymbol}{" "}
            </Link>
            <Link>Knowledge</Link>
          </div>
          {theme === "light" ? (
            <img
              src={day}
              alt="light"
              className="w-[30px] md:w-[35px]"
              onClick={() => {
                setTheme("dark");
              }}
            />
          ) : (
            <img
              src={night}
              alt="night"
              className="w-[30px] md:w-[35px]"
              onClick={() => {
                setTheme("light");
              }}
            />
          )}
          <button className="hidden md:block font-bold text-white bg-black px-5 md:px-9 py-2 md:py-3 rounded-md">
            Contact
          </button>
          <IoMenu
            className="text-2xl md:hidden cursor-pointer"
            onClick={() => setIsMenuOpen(true)}
          />
        </div>
      </div>
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 
        ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex flex-col justify-between py-2 h-full">
          <div className="flex flex-col space-y-6 px-6 text-lg font-medium">
            <div className="flex justify-between items-center py-6 border-b">
              <h2 className="text-xl font-bold text-red-600">Menu</h2>
              <IoMdClose
                size={28}
                onClick={() => setIsMenuOpen(false)}
                className="cursor-pointer"
              />
            </div>
            <Link
              className="hover:text-pink-500"
              onClick={() => setIsMenuOpen(false)}
            >
              Work
            </Link>
            <Link
              className="hover:text-pink-500"
              onClick={() => setIsMenuOpen(false)}
            >
              Services {servicesSymbol}
            </Link>
            <Link
              className="hover:text-pink-500"
              onClick={() => setIsMenuOpen(false)}
            >
              Clients
            </Link>
            <Link
              className="hover:text-pink-500"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              className="hover:text-pink-500"
              onClick={() => setIsMenuOpen(false)}
            >
              Knowledge
            </Link>
          </div>
          <div className="flex flex-col gap-3 px-6">
            <p className="text-blue-700">info@leo9studio.com</p>
            <p className="font-bold text-gray-400">IND:</p>
            <a href="tel:+917208149788" className="nav-link p-0 font-bold">
              +91 72081 49788
            </a>
            <a href="tel:+919152727927" className="nav-link p-0 font-bold">
              +91 91527 27927
            </a>
            <p className="font-bold text-gray-400">USA:</p>
            <a href="tel:+1(802)347-3690" className="nav-link p-0 font-bold">
              +1 (802) 347-3690
            </a>
          </div>
        </div>
      </div>
      {isServicesDrpDownOpen && (
        <div
          id="services-dropdown"
          className="absolute left-1/2 transform -translate-x-1/2 mt-4 flex flex-col md:flex-row justify-center space-x-4 bg-white p-4 rounded-xl shadow-lg z-50"
          onMouseLeave={() => {
            setIsServicesDrpDownOpen(false);
            setServicesSymbol("●");
          }}
          onMouseEnter={() => setIsServicesDrpDownOpen(true)}
        >
          <div className="bg-pink-100 p-4 rounded-lg hover:scale-105 transition">
            <h3 className="font-bold">Design.</h3>
            <p className="text-sm text-gray-600">
              Handcraft the user experience.
            </p>
          </div>
          <div className="bg-indigo-100 p-4 rounded-lg hover:scale-105 transition">
            <h3 className="font-bold">Technology.</h3>
            <p className="text-sm text-gray-600">Leverage the power of code.</p>
          </div>
          <div className="bg-purple-100 p-4 rounded-lg hover:scale-105 transition">
            <h3 className="font-bold">Marketing.</h3>
            <p className="text-sm text-gray-600">
              Creative strategies for brands.
            </p>
          </div>
        </div>
      )}

      {isAboutDrpDownOpen && (
        <div
          id="about-dropdown"
          className="absolute left-1/2 transform -translate-x-1/2 mt-4 flex flex-col md:flex-row justify-center space-x-4 bg-white p-4 rounded-xl shadow-lg z-50"
          onMouseLeave={() => {
            setIsAboutDrpDownOpen(false);
            setAboutSymbol("●");
          }}
          onMouseEnter={() => setIsAboutDrpDownOpen(true)}
        >
          <div className="bg-yellow-100 p-4 w-[200px] text-center rounded-lg hover:scale-105 transition">
            <h3 className="font-bold">Our Story</h3>
            <p className="text-sm text-gray-600">Know who we are.</p>
          </div>
          <div className="bg-green-100 p-4 w-[200px] text-center rounded-lg hover:scale-105 transition">
            <h3 className="font-bold">Team</h3>
            <p className="text-sm text-gray-600">Meet our experts.</p>
          </div>
          <div className="bg-blue-100 p-4 w-[200px] text-center rounded-lg hover:scale-105 transition">
            <h3 className="font-bold">Careers</h3>
            <p className="text-sm text-gray-600">Work with us.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
