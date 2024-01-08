import React from "react";
import { PrimaryHeading, PrimaryText } from "../components/headings/text";
import Counter from "../components/counter";
import { CustomButton } from "../components/buttons/button";

export default function hero() {
  const CounterContent = [
    ["238", "30", "Project Done"],
    ["146", "30", "Happay Clients"],
    ["21", "30", "Award Win"],
  ];

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between px-14 py-8">
      {/* Left side: Content */}
      <div className="w-1/2 lg:w-1/2 mt-8 lg:mt-0">
        <img
          className="mx-auto"
          src={`${require("../assets/hero/hero.png")}`}
          alt="Tom Brady"
        />
      </div>

      <div className="lg:w-1/2 lg:mr-8">
        <h1 className="mt-10 text-2xl lg:text-[34px] text-center font-space-grotesk lg:text-left mb-4 text-[#018aff]">
          I'm Tom Brady
        </h1>
        <PrimaryHeading title={"Software Developer"} style={""}/>

        <CustomButton title={"Get into touch"} style={"mb-10 mt-2"} />

        <div className="flex  flex-wrap  justify-center lg:justify-start">
          {CounterContent.map(([number, duration, title]) => (
            <div className="   text-center lg:text-left mx-4 mb-4">
              {/* <Counter number={300} duration={30} /> */}
              <span className="block  font-bold">
                <Counter number={number} duration={duration} />
              </span>
              <span>
                <PrimaryText title={title} />
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Right side: Image */}
    </div>
  );
}
