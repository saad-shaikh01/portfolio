import React from "react";
import {
  PrimaryText,
  SecondaryHeading,
  SubHeading,
} from "../components/headings/text";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars,   faPlus } from "@fortawesome/free-solid-svg-icons";
const ServicesSection = () => {
  const services = [
    {
      icon: faBars, // Add classes or icons as needed
      title: "Consulting",
      content: "An accountant can assist with the preparation of personal.",
      listItem1: "Minimizing Tax Liabilities",
      listItem2: "Identifying Deductions.",
    },
    {
      icon: faBars, // Add classes or icons as needed
      title: "Consulting",
      content: "An accountant can assist with the preparation of personal.",
      listItem1: "Minimizing Tax Liabilities",
      listItem2: "Identifying Deductions.",
    },
    {
      icon: faBars, // Add classes or icons as needed
      title: "Consulting",
      content: "An accountant can assist with the preparation of personal.",
      listItem1: "Minimizing Tax Liabilities",
      listItem2: "Identifying Deductions.",
    },
    {
      icon: faBars, // Add classes or icons as needed
      title: "Consulting",
      content: "An accountant can assist with the preparation of personal.",
      listItem1: "Minimizing Tax Liabilities",
      listItem2: "Identifying Deductions.",
    },
    // Add more service objects as needed
  ];

  return (
    <div className="text-center py-12">
      <SubHeading
        title={"Provide A Wide Range Of Services"}
        style={"text-center mb-14 mx-[30%]"}
      />
      <div className="flex flex-wrap justify-center gap-8  pt-10 mt-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="max-w-xs  rounded-lg text-left overflow-hidden shadow-md"
          >
            <div className="p-6">
              <div className="text-5xl mb-4 text-white">
                <FontAwesomeIcon icon={service.icon} />
              </div>
              <SecondaryHeading title={service.title} style={'mb-3'}/>
              <PrimaryText title={service.content} style={'mb-3 leading-5'} />
              <ol className="text-gray-400">
                <li><FontAwesomeIcon icon={faPlus} className="mr-3" />{service.listItem1}</li>
                <li><FontAwesomeIcon icon={faPlus} className="mr-3" />{service.listItem2}</li>
              </ol>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
