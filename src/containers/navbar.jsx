import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { CustomButton } from "../components/buttons/button";
const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const links = [
    ["Home", "/aa"],
    ["About", "/aa"],
    ["Services", "/aa"],
    ["Portfolio", "/aa"],
    ["Testimonial", "/aa"],
    ["Blog", "/aa"],
  ];
  return (
    <>
      {/* Navbar */}
      <nav className="flex items-center justify-betweem flex-wrap  p-6">
        {/* ...existing code... */}

        <div class=" block mx-auto lg:w-auto">
          <div class="">
            {links.map(([title, url]) => (
              <a
                key={title} // Remember to add a unique key when mapping through elements in React
                href={url}
                className="block mt-4 lg:inline-block  text-[18px]  lg:mt-0 text-white hover:text-blue-400 mr-8"
              >
                {title}
              </a>
            ))}
            <CustomButton
              onClick={() => setShowSidebar(!showSidebar)}
              className=""
              title={"Contact us"}
            ></CustomButton>
          </div>
        </div>

        {/* Burger Icon */}
        <div className="">
          {/* <CustomButton title="title" /> */}
          <CustomButton
            onClick={() => setShowSidebar(!showSidebar)}
            className="z-[] cursor-pointer flex items-center px-3 py-2 border rounded text-gray-300 border-gray-400 hover:text-white hover:border-white"
            title={<FontAwesomeIcon icon={faBars} />}
          ></CustomButton>
        </div>
      </nav>

      {/* Sidebar */}
      <div
        className={`h-screen w-[30%] z-[1] absolute top-0 right-0 bg-gray-800 p-10 ${
          showSidebar ? "block" : "hidden"
        }`}
      >
        <div id="sidebar" class=" lg: bg-gray-800 p-">
          <div className="absolute top-4 right-10">
            <button
              onClick={() => setShowSidebar(!showSidebar)}
              className="z-[] flex items-center px-3 py-2 border rounded text-gray-300 border-gray-400 hover:text-white hover:border-white"
            >
              <FontAwesomeIcon icon={faBars} />
            </button>
          </div>
          {links.map(([title, url]) => (
            <a
              key={title} // Remember to add a unique key when mapping through elements in React
              href={url}
              className=" block mt-4 text-white hover:text-gray-400"
            >
              {title}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
