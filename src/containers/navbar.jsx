import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { CustomButton } from "../components/buttons/button";
import {
  faMapMarkerAlt,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faLinkedin,
  faGithub,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { PrimaryText, SecondaryHeading } from "../components/headings/text";
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

  const socialLinks = [
    ["Twitter", "https://twitter.com/example"],
    ["Facebook", "https://github.com/example"],
    ["LinkedIn", "https://www.linkedin.com/in/example"],
    ["Instagram", "https://github.com/example"],
    ["GitHub", "https://github.com/example"],
  ];
  return (
    <>
      {/* Navbar */}
      <nav className="flex items-center justify-betweem flex-wrap  p-6">
        {/* ...existing code... */}

        <div class=" hidden lg:block mx-auto lg:w-auto">
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
        <div className="absolute top-4 right-10">
          <button
            onClick={() => setShowSidebar(!showSidebar)}
            className="z-[] flex items-center px-3 py-2 border rounded text-gray-300 border-gray-400 hover:text-white hover:border-white"
          >
            <FontAwesomeIcon icon={faClose} />
          </button>
        </div>

        {/* <div id="sidebar" class=" lg: bg-gray-800 p-">
          {links.map(([title, url]) => (
            <a
              key={title} // Remember to add a unique key when mapping through elements in React
              href={url}
              className=" block mt-4 text-white hover:text-gray-400"
            >
              {title}
            </a>
          ))}
        </div> */}

        <div className="mt-8 text-white">
          <SecondaryHeading title={"About Me"} />
          <PrimaryText
            title={
              "I am passionate about ReactJS and Tailwind CSS and love building projects with them! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis officiis sequi dolorum blanditiis modi quasi non optio aperiam in? Eligendi omnis magni, modi libero, ducimus sequi deserunt ab necessitatibus placeat architecto quos praesentium."
            }
          />

          <SecondaryHeading title={"Get In Touch"} />
          <ul className="mb-4">
            <li className="flex items-center mb-2">
              <FontAwesomeIcon
                icon={faMapMarkerAlt}
                className="mr-2 border-e pe-2 "
              />
              75 Arlington St. Suite 500 Boston, MA 02116, USA
            </li>
            <li className="flex items-center mb-2">
              <FontAwesomeIcon icon={faPhone} className="mr-2 border-e pe-2" />
              +8898 6777 8796
            </li>
            <li className="flex items-center mb-2">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="mr-2 border-e pe-2"
              />
              example@gmail.com
            </li>
          </ul>
          <div className="flex">
            {socialLinks.map(([title, url]) => (
              <a
                key={title}
                href={url}
                className="mr- text-white hover:text-gray-400   p-[8px] text-[20px]"
              >
                <FontAwesomeIcon
                  icon={
                    title === "Twitter"
                      ? faTwitter
                      : title === "Facebook"
                      ? faFacebook
                      : title === "Instagram"
                      ? faInstagram
                      : title === "LinkedIn"
                      ? faLinkedin
                      : title === "GitHub"
                      ? faGithub
                      : null
                  }
                  // size="sm"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
