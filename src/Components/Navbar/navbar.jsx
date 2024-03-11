import React, { useState, useEffect } from "react";
import Logo from "../../assets/airbnb-.png";

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
        console.log("scroll Stoped and revert!");
      }
    };

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [scrollStarted]);

  const handleSelection = (e) => {
    const { name } = e.target.name;
    if (name) {
      // setSelect(!select);
      console.log(name);
    }
  };

  return (
    <>
      <section
        className={`w-full bg-white shadow-md h-16 transition-all duration-300 ${
          !scrollStarted ? "md:h-[9.5rem]" : "sticky top-0 md:h-16"
        }`}
      >
        <nav className="w-[90%] mx-auto">
          {/* Header section */}
          <div className="flex flex-col">
            {/* Details content */}
            <div className="flex justify-between items-center">
              {/* Logo */}
              <img src={Logo} alt="airbnb" className="w-32 h-16" />
              {/* Pagination Start*/}
              <div className="lg:flex space-x-5 hidden ml-12">
                <button className="font-medium text-slate-400 focus:text-black/60">
                  Stays
                </button>
                <button className="font-medium text-slate-400 focus:text-black/60">
                  Experiences
                </button>
                <button className="font-medium text-slate-400 focus:text-black/60">
                  Online Experiences
                </button>
              </div>
              {/* Pagination End*/}
              <div className="flex items-center space-x-4">
                <button className="hover:bg-slate-300/10">
                  Airbnb your home
                </button>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12,2C6.486,2,2,6.486,2,12s4.486,10,10,10s10-4.486,10-10S17.514,2,12,2z M4,12c0-0.899,0.156-1.762,0.431-2.569L6,11l2,2 v2l2,2l1,1v1.931C7.061,19.436,4,16.072,4,12z M18.33,16.873C17.677,16.347,16.687,16,16,16v-1c0-1.104-0.896-2-2-2h-4v-2v-1 c1.104,0,2-0.896,2-2V7h1c1.104,0,2-0.896,2-2V4.589C17.928,5.778,20,8.65,20,12C20,13.835,19.373,15.522,18.33,16.873z"></path>
                </svg>
                {/* User Contact */}
                <div className="flex bg-white p-2 space-x-3 rounded-full hover:shadow w-16 h-8 border border-solid-2 border-slate-300">
                  {/* User registeration */}
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 512 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z"></path>
                  </svg>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 496 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88 39.4-88 88-88zm0 344c-58.7 0-111.3-26.6-146.5-68.2 18.8-35.4 55.6-59.8 98.5-59.8 2.4 0 4.8.4 7.1 1.1 13 4.2 26.6 6.9 40.9 6.9 14.3 0 28-2.7 40.9-6.9 2.3-.7 4.7-1.1 7.1-1.1 42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448z"></path>
                  </svg>
                </div>
              </div>
            </div>
            {/* Search Bar */}
            <div
              className={`self-center w-6/12 ${
                select ? "bg-[#ebebeb]/40" : "bg-white"
              } h-18 rounded-full shadow-md ring-1 ring-slate-200`}
            >
              <div className="flex">
                <div
                  className={`w-5/12 h-full px-5 py-4 font-normal text-xs bg-white rounded-full ${
                    select ? "shadow-md hover:bg-white" : ""
                  } hover:bg-[#ebebeb]/40`}
                  onClick={handleSelection}
                >
                  <p>Where</p>
                  <input
                    type="search"
                    className="bg-transparent focus:outline-none focus:text-black/80 font-normal text-xs text-slate-400"
                    placeholder="Search destinations"
                  />
                </div>
                <div
                  className={`w-3/12 h-full px-5 py-4 font-normal text-xs ${
                    select ? "bg-transparent" : "bg-white"
                  } rounded-full`}
                >
                  <p>Check in</p>
                  <p className="font-normal text-xs text-slate-400">
                    Add dates
                  </p>
                </div>
                <div
                  className={`w-3/12 h-full px-5 py-4 font-normal text-xs ${
                    select ? "bg-transparent" : "bg-white"
                  } rounded-full`}
                >
                  <p>Check in</p>
                  <p className="font-normal text-xs text-slate-400">
                    Add dates
                  </p>
                </div>
                <div
                  className={`w-5/12 h-full px-3 py-4 font-normal text-xs ${
                    !select ? "bg-transparent" : "bg-white shadow"
                  } rounded-full flex justify-between items-center`}
                  onClick={() => setSelect(!select)}
                >
                  <div className="pl-2">
                    <p>Who</p>
                    <p className="font-normal text-xs text-slate-400">
                      Add guests
                    </p>
                  </div>
                  <div
                    className={`flex items-center space-x-2 shadow bg-[#e51d57] rounded-full ${
                      select ? "w-20 p-[11px]" : "w-8 p-[2px]"
                    } h-8 transition-all duration-300`}
                  >
                    <p
                      className={`font-medium text-md text-white ${
                        !select ? "hidden" : ""
                      }`}
                    >
                      Search
                    </p>
                    <svg
                      stroke="currentColor"
                      fill="none"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      height="1em"
                      width="1em"
                      className="text-white"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="11" cy="11" r="8"></circle>
                      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
}
