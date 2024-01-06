// import React from "react";

// export  function primaryHeading(props) {
//   return (
//     <div
//       className={`${props.style} text-[80px] leading-[1] text-[#ffffff] font-space-grotesk font-bold text-center lg:text-left mb-4 `}
//     >
//       {props.title}
//     </div>
//   );
// }

// export  function secondaryHeading() {
//     return (
//       <div
//         className={`${props.style} text-4xl lg:text-5xl font-bold text-center lg:text-left mb-4 `}
//       >
//         {props.title}
//       </div>
//     );
//   }

import React from "react";

export function PrimaryHeading(props) {
  return (
    <div
      className={`text-[80px] leading-[1] text-[#ffffff] font-space-grotesk font-bold mb-4 ${props.style}`}
    >
      {props.title}
    </div>
  );
}
export function SubHeading(props) {
  return (
    <div
      className={`text-[55px] leading-[1] text-[#ffffff] font-space-grotesk font-bold mb-4 ${props.style}`}
    >
      {props.title}
    </div>
  );
}

export function SecondaryHeading(props) {
  return (
    <div
      className={`${props.style} text-[34px] text-white  font-bold text-center lg:text-left ${props.style} `}
    >
      {props.title}
    </div>
  );
}
export function PrimaryText(props) {
  return (
    <div
      className={`text-[18px] text-gray-400 ${props.style}`}
    >
      {props.title}
    </div>
  );
}
