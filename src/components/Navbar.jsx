import React, { useContext, useState } from "react";
import { Link } from "react-router";
import night from "../assets/night-mode.png";
import day from "../assets/sunny-day.png";
import { ThemeContext } from "../context/themeContext";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [isServicesDrpDownOpen, setIsServicesDrpDownOpen] = useState(false);
  const [servicesSymbol, setServicesSymbol] = useState("●");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className="fixed top-0 w-full bg-white border-1 border-b-black p-4 z-10">
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
                setIsServicesDrpDownOpen(false), setServicesSymbol("●");
              }}
            >
              Services {servicesSymbol}
            </Link>
            <Link>Clients</Link>
            <Link>About </Link>
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
            Services
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
            <a
                href="tel:+917208149788"
                className="nav-link p-0 font-bold"
              >
                +91 72081 49788
              </a>
              <a
                href="tel:+919152727927"
                className="nav-link p-0 font-bold"
              >
                +91 91527 27927
              </a>
              <p className="font-bold text-gray-400">USA:</p>
              <a
                href="tel:+1(802)347-3690"
                className="nav-link p-0 font-bold"
              >
                +1 (802) 347-3690
              </a>
          </div>
        </div>
      </div>
      {isServicesDrpDownOpen ? (
        <div className="sticky top-0 flex justify-center space-x-4 bg-white p-4 rounded-xl z-50">
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
      ) : null}
    </div>
  );
};

export default Navbar;
