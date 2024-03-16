import React, { useState, useEffect } from "react";
import Slider from "../Slider/Slider";
import Toggle from "../Toggle/Toggle";
import RoomPage from "../../Pages/RoomPage";

export default function Navbar() {
  //State for active scroll
  const [scrollStarted, setScrollStarted] = useState(false);
  const [select, setSelect] = useState(false);

  //Find Active Scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0 && !scrollStarted) {
        // Vertical scroll started
        setScrollStarted(true);
        console.log("scroll started!");
      } else if (window.scrollY === 0 && scrollStarted) {
        // Vertical scroll ended (back to top)
        setScrollStarted(false);
        console.log("scroll Stopped and reverted!");
      }
    };

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [scrollStarted]);

  const handleSelection = (e) => {
    const { name } = e.target; // Destructure the name property
    if (name) {
      // setSelect(!select);
      console.log(name);
    }
  };

  return (
    <>
      <section
        className={`w-full bg-white h-[9.4rem] shadow sm:shadow-none transition-all duration-300 sm:border-b-2 pt-[14px] px-[24px] sm:border-solid sm:border-slate-100 ${
          !scrollStarted ? "md:h-[10.5rem]" : "sticky top-0 md:h-16"
        }`}
      >
        {/*Navbar*/}
        <nav>
          {/* Mobile navbar */}
          <div className="grid grid-cols-12 items-center gap-5 p-1">
            <div className="bg-white shadow-md rounded-full col-span-10 p-2 ring-1 ring-slate-200">
              <div className="flex space-x-5 items-center px-3">
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  height="1em"
                  width="1em"
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
                <div>
                  <p className="text-[15px] font-semibold text-black">
                    Any Where
                  </p>
                  <p className="text-xs text-black/50">Any week - Add guest</p>
                </div>
              </div>
            </div>
            <div className="bg-white ring-1 ring-gray-200 shadow-md rounded-full w-[46px] h-[46px] p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
                />
              </svg>
            </div>
          </div>
          {/*Menu Slide*/}
          <Slider />
        </nav>
        {/*Toggle for Taxes*/}
        <Toggle />
        <RoomPage/>
      </section>
    </>
  );
}
