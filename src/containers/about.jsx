import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Icons } from "../assets/icons/Icons";
import {
  PrimaryText,
  SecondaryHeading,
  SubHeading,
} from "../components/headings/text";
import { icon } from "@fortawesome/fontawesome-svg-core";

export default function about() {
  return (
    <>
      <div className="flex py-[7rem] flex-col lg:flex-row items-center lg:justify-center gap-[3rem] lg:gap-[10rem]">
        {/* Image on the left */}
        <div className="lg:w-1/4 px-10 lg:px-0 relative">
          <img
            src={`${require("../assets/hero/about-11.png")}`}
            alt="Your Image"
            className="w-full h-auto max-w-full"
          />
          <div className="absolute bottom-0 right-12 lg:right-0 transform translate-x-1/2  bg-[rgba(0,0,0,0.5)] text-white rounded-full py-5 px-4 lg:p-6 border border-2">
            <SubHeading
              title={"12+"}
              style={" text-center text-md"}
            />
            
            <PrimaryText
              title={"Experience"}
              style={"text-[12px] text-center lg:text-lg"}
            />
          </div>
        </div>
        <div className=" lg:w-1/3 lg:mt-8 sm:px-10 lg:px-0 md:px-[8rem] px-4 lg:mt-0">
          <SubHeading title={"Committed To Staying Up-To-Date"} />
          <PrimaryText
            title={
              "I am also dedicated to using the latest technology and tools to streamline accounting processes and save clients time and money."
            }
            style={"py-[20px]"}
          />

          {/* Cards */}
          <div className="flex flex-col sm:flex-row justify-center sm:space-x-6 lg:space-x-6 mt-8">
            {/* First Card */}
            <div className="mb-8 lg:w-1/2">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                  {/* Your icon here */}
                  {/* For example, an icon from Font Awesome */}
                  <FontAwesomeIcon
                    icon={Icons.Plus}
                    className="text-blue-500 text-xl"
                  />
                </div>
                <div className="ml-4">
                  <SecondaryHeading title={"Heading 1"} />
                  <PrimaryText title={"some text here"} />
                </div>
              </div>
              <ol className="ps-5 mt-2 ml-16 text-gray-400">
                <li className="mb-2">
                  <FontAwesomeIcon icon={Icons.Plus} className="mr-3" />
                  {"some text here"}
                </li>
                <li className="mb-2">
                  <FontAwesomeIcon icon={Icons.Plus} className="mr-3" />
                  {"some text here"}
                </li>
              </ol>
            </div>
            {/* Second Card */}
            <div className="mb-8 lg:w-1/2">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                  {/* Another icon */}
                  <FontAwesomeIcon
                    icon={Icons.Plus}
                    className="text-blue-500 text-xl"
                  />
                </div>
                <div className="ml-4">
                  <SecondaryHeading title={"Heading 2"} />
                  <PrimaryText title={"some text here"} />
                </div>
              </div>
              <ol className="ps-5 mt-2 ml-16 text-gray-400">
                <li className="mb-2">
                  <FontAwesomeIcon icon={Icons.Plus} className="mr-3" />
                  {"some text here"}
                </li>
                <li className="mb-2">
                  <FontAwesomeIcon icon={Icons.Plus} className="mr-3" />
                  {"some text here"}
                </li>
              </ol>
            </div>
          </div>
        </div>

        {/* Text content on the right */}
      </div>
    </>
  );
}

//   <div className="lg:w-1/3  mt-8 lg:mt-0">
//     <SubHeading title={"Committed To Staying Up-To-Date"} />
//     <PrimaryText
//       title={
//         " I am also dedicated to using the latest technology and tools to streamline accounting processes and save clients time and money."
//       }
//       style={'py-[20px]'}
//     />

//     {/* Cards */}
//     <div className=" flex  space-x-6 mt-8">
//       {/* First Card */}
//       <div>
//         <div className="flex items-center">
//           <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
//             {/* Your icon here */}
//             {/* For example, an icon from Font Awesome */}
//             <FontAwesomeIcon
//               icon={Icons.Plus}
//               className="text-blue-500 text-xl"
//             />
//           </div>
//           <div className="ml-4">
//             <SecondaryHeading title={"Heading 1"} />
//             {/* <h3 className="text-lg font-semibold">Heading 1</h3> */}
//             <PrimaryText title={"some text here"} />
//           </div>
//           {/* <FontAwesomeIcon icon={faPlus} className="ml-auto text-gray-500 text-lg" /> */}
//         </div>
//         <ol className=" ps-5 mt-2 ml-10 text-gray-400">
//           <li>
//             <FontAwesomeIcon icon={Icons.Plus} className="mr-3" />
//             {"some text here"}
//           </li>
//           <li>
//             <FontAwesomeIcon icon={Icons.Plus} className="mr-3" />
//             {"some text here"}
//           </li>
//         </ol>
//       </div>
//       {/* Second Card */}
//       <div>
//         <div className="flex items-center">
//           <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
//             {/* Another icon */}
//             <FontAwesomeIcon
//               icon={Icons.Plus}
//               className="text-blue-500 text-xl"
//             />
//           </div>
//           <div className="ml-4">
//             <SecondaryHeading title={"Heading 2"} />
//             <PrimaryText title={"some text here"} />
//           </div>
//         </div>
//         <ol className=" ps-5 mt-2 ml-10 text-gray-400">
//           <li>
//             <FontAwesomeIcon icon={Icons.Plus} className="mr-3" />
//             {"some text here"}
//           </li>
//           <li>
//             <FontAwesomeIcon icon={Icons.Plus} className="mr-3" />
//             {"some text here"}
//           </li>
//         </ol>
//       </div>
//     </div>
//   </div>
