// import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faTwitter,
//   faLinkedin,
//   faGithub,
//   faInstagram,
//   faFacebook,
// } from "@fortawesome/free-brands-svg-icons";
// import {
//   faMapMarkerAlt,
//   faPhone,
//   faEnvelope,
// } from "@fortawesome/free-solid-svg-icons";
// export default function footer() {
//   const FooterLinks = [
//     {
//       category: "About me",
//       Info: {
//         address:
//           "As an accountant, I believe that attention to detail, and trust are essential for long-term relationships with my clients.",
//         socialLinks: [
//           ["Twitter", "https://twitter.com/example", faTwitter],
//           ["Facebook", "https://facebook.com/example", faFacebook],
//           ["LinkedIn", "https://linkedin.com/in/example", faLinkedin],
//           ["Instagram", "https://instagram.com/example", faInstagram],
//           ["GitHub", "https://github.com/example", faGithub],
//         ],
//       },
//     },
//     {
//       category: "About Me",
//       links: [
//         { title: "About Me", url: "/about" },
//         { title: "Services", url: "/services" },
//         { title: "Portfolio", url: "/portfolio" },
//       ],
//     },
//     {
//       category: "Quick Links",
//       links: [
//         { title: "Latest News", url: "/terms" },
//         { title: "Terms & Conditions", url: "/terms" },
//         { title: "Privacy Policy", url: "/privacy" },
//       ],
//     },
//     {
//       category: "Contact Me",
//       contactInfo: {
//         address: "75 Arlington St. Suite 500 Boston, MA 02116, USA",
//         phone: "+8898 6777 8796",
//         email: "example@gmail.com",
//       },
//     },
//   ];

//   return (
//     <>
//       {" "}
//       <footer className="text-white py-8 border-t ">
//         <div className="container px-10 mx-auto flex flex-wrap">
//           {FooterLinks.map((section, index) => (
//             <div key={index} className="w-full md:w-1/2 lg:w-1/4 p-4">
//               {section.category && (
//                 <div className="mb-4">
//                   <h3 className="text-lg font-bold mb-2 ">
//                     {section.category}
//                   </h3>
//                   {section.category === "About me" &&
//                     section.Info.socialLinks && (
//                       <>
//                         <div>{section.Info.address}</div>
//                         <div className="mt-2 flex items-center">
//                           {section.Info.socialLinks.map(
//                             ([title, url, icon]) => (
//                               <a
//                                 key={title}
//                                 href={url}
//                                 className="mr-4 text-white hover:text-gray-400"
//                               >
//                                 <FontAwesomeIcon icon={icon} />
//                               </a>
//                             )
//                           )}
//                         </div>
//                       </>
//                     )}

//                   {section.links && (
//                     <ul>
//                       {section.links.map((link, i) => (
//                         <li key={i}>
//                           <a href={link.url} className="hover:text-gray-400">
//                             {link.title}
//                           </a>
//                         </li>
//                       ))}
//                     </ul>
//                   )}
//                   {section.contactInfo && (
//                     <address className="mt-4">
//                       {/* <p>{section.contactInfo.address}</p>
//                       <p>{section.contactInfo.phone}</p>
//                       <p>{section.contactInfo.email}</p> */}
//                       <ul className="mb-4">
//                         <li className="flex items-center mb-2">
//                           <FontAwesomeIcon
//                             icon={faMapMarkerAlt}
//                             className="mr-2 border-e pe-2 "
//                           />
//                           {section.contactInfo.address}
//                         </li>
//                         <li className="flex items-center mb-2">
//                           <FontAwesomeIcon
//                             icon={faPhone}
//                             className="mr-2 border-e pe-2"
//                           />
//                           {section.contactInfo.phone}
//                         </li>
//                         <li className="flex items-center mb-2">
//                           <FontAwesomeIcon
//                             icon={faEnvelope}
//                             className="mr-2 border-e pe-2"
//                           />
//                           {section.contactInfo.email}
//                         </li>
//                       </ul>
//                     </address>
//                   )}
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       </footer>
//     </>
//   );
// }

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faLinkedin,
  faGithub,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import {
  faMapMarkerAlt,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { SecondaryHeading } from "../components/headings/text";

export default function Footer() {
  const FooterLinks = [
    {
      category: "About me",
      Info: {
        address:
          "As an accountant, I believe that attention to detail and trust are essential for long-term relationships with my clients.",
        socialLinks: [
          ["Twitter", "https://twitter.com/example", faTwitter],
          ["Facebook", "https://facebook.com/example", faFacebook],
          ["LinkedIn", "https://linkedin.com/in/example", faLinkedin],
          ["Instagram", "https://instagram.com/example", faInstagram],
          ["GitHub", "https://github.com/example", faGithub],
        ],
      },
    },
    {
      category: "About Me",
      links: [
        { title: "About Me", url: "/about" },
        { title: "Services", url: "/services" },
        { title: "Portfolio", url: "/portfolio" },
      ],
    },
    {
      category: "Quick Links",
      links: [
        { title: "Latest News", url: "/terms" },
        { title: "Terms & Conditions", url: "/terms" },
        { title: "Privacy Policy", url: "/privacy" },
      ],
    },
    {
      category: "Contact Me",
      contactInfo: {
        address: "75 Arlington St. Suite 500 Boston, MA 02116, USA",
        phone: "+8898 6777 8796",
        email: "example@gmail.com",
      },
    },
  ];

  return (
    <footer className="text-white px-[2rem] lg:px-[10rem] py-10 border-t">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-8 gap-8">
        {FooterLinks.map((section, index) => (
          <div key={index} className="col-span-1 md:col-span-1 lg:col-span-2">
            {section.category && (
              <div className="mb-4">
                <SecondaryHeading
                  title={section.category}
                  style={"text-[22px] mb-3 lg:mb-4"}
                />
                {section.category === "About me" &&
                  section.Info.socialLinks && (
                    <>
                      <div className="mb-4">{section.Info.address}</div>
                      <div className="flex space-x-4">
                        {section.Info.socialLinks.map(([title, url, icon]) => (
                          <a
                            key={title}
                            href={url}
                            className=" text-white hover:text-gray-400"
                          >
                            <FontAwesomeIcon icon={icon} size="lg" />
                          </a>
                        ))}
                      </div>
                    </>
                  )}

                {section.links && (
                  <ul className="mt-4">
                    {section.links.map((link, i) => (
                      <li key={i} className="mb-2">
                        <a
                          href={link.url}
                          className="border-s ps-2 border-gray-400 hover:text-gray-400"
                        >
                          {link.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}

                {section.contactInfo && (
                  <address className="mt-4">
                    <ul>
                      <li className="flex items-center mb-2">
                        <FontAwesomeIcon
                          icon={faMapMarkerAlt}
                          className="mr-2"
                        />
                        <span>{section.contactInfo.address}</span>
                      </li>
                      <li className="flex items-center mb-2">
                        <FontAwesomeIcon icon={faPhone} className="mr-2" />
                        <span>{section.contactInfo.phone}</span>
                      </li>
                      <li className="flex items-center mb-2">
                        <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                        <span>{section.contactInfo.email}</span>
                      </li>
                    </ul>
                  </address>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </footer>
  );
}

// import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faTwitter,
//   faLinkedin,
//   faGithub,
//   faInstagram,
//   faFacebook,
// } from "@fortawesome/free-brands-svg-icons";
// import {
//   faMapMarkerAlt,
//   faPhone,
//   faEnvelope,
// } from "@fortawesome/free-solid-svg-icons";
// import { SecondaryHeading } from "../components/headings/text";

// export default function Footer() {
//   const FooterLinks = [
//     {
//       category: "About me",
//       Info: {
//         address:
//           "As an accountant, I believe that attention to detail and trust are essential for long-term relationships with my clients.",
//         socialLinks: [
//           ["Twitter", "https://twitter.com/example", faTwitter],
//           ["Facebook", "https://facebook.com/example", faFacebook],
//           ["LinkedIn", "https://linkedin.com/in/example", faLinkedin],
//           ["Instagram", "https://instagram.com/example", faInstagram],
//           ["GitHub", "https://github.com/example", faGithub],
//         ],
//       },
//     },
//     {
//       category: "About Me",
//       links: [
//         { title: "About Me", url: "/about" },
//         { title: "Services", url: "/services" },
//         { title: "Portfolio", url: "/portfolio" },
//       ],
//     },
//     {
//       category: "Quick Links",
//       links: [
//         { title: "Latest News", url: "/terms" },
//         { title: "Terms & Conditions", url: "/terms" },
//         { title: "Privacy Policy", url: "/privacy" },
//       ],
//     },
//     {
//       category: "Contact Me",
//       contactInfo: {
//         address: "75 Arlington St. Suite 500 Boston, MA 02116, USA",
//         phone: "+8898 6777 8796",
//         email: "example@gmail.com",
//       },
//     },
//   ];

//   return (
//     <footer className="text-white px-[10rem] py-10 border-t">
//       <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//         {FooterLinks.map((section, index) => (
//           <div key={index}>
//             {section.category && (
//               <div className="mb-4">
//                 <SecondaryHeading  title={section.category} style={'text-[22px] lg:mb-4'} />
//                 {/* <h3 className="text-lg font-bold mb-2">
//                   {section.category}
//                 </h3> */}
//                 {section.category === "About me" && section.Info.socialLinks && (
//                   <>
//                     <div className="mb-4">{section.Info.address}</div>
//                     <div className="flex space-x-4">
//                       {section.Info.socialLinks.map(([title, url, icon]) => (
//                         <a
//                           key={title}
//                           href={url}
//                           className=" text-white hover:text-gray-400"
//                         >
//                           <FontAwesomeIcon icon={icon} size="lg" />
//                         </a>
//                       ))}
//                     </div>
//                   </>
//                 )}

//                 {section.links && (
//                   <ul className="mt-4  ">
//                     {section.links.map((link, i) => (
//                       <li key={i} className="mb-2">
//                         <a href={link.url} className="border-s ps-2 border-gray-400 hover:text-gray-400">
//                           {link.title}
//                         </a>
//                       </li>
//                     ))}
//                   </ul>
//                 )}

//                 {section.contactInfo && (
//                   <address className="mt-4">
//                     <ul>
//                       <li className="flex items-center mb-2">
//                         <FontAwesomeIcon
//                           icon={faMapMarkerAlt}
//                           className="mr-2"
//                         />
//                         <span>{section.contactInfo.address}</span>
//                       </li>
//                       <li className="flex items-center mb-2">
//                         <FontAwesomeIcon icon={faPhone} className="mr-2" />
//                         <span>{section.contactInfo.phone}</span>
//                       </li>
//                       <li className="flex items-center mb-2">
//                         <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
//                         <span>{section.contactInfo.email}</span>
//                       </li>
//                     </ul>
//                   </address>
//                 )}
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </footer>
//   );
// }
