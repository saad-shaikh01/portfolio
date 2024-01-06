// import React from "react";
// import "./button.css";

// export default function CustomButton(props) {
//   return <button onClick={props.onClick}>{props.title}</button>;
// }

// export default function CustomSecButton(props) {
//   return (
//     <div className="secondary-button" onClick={props.onClick}>
//       {props.title}
//     </div>
//   );
// }


import React from "react";
import "./button.css";

// export function CustomButton(props) {
//   return <div className="button" onClick={props.onClick}>{props.title}</div>;
// }

export function CustomButton(props) {
  return (
    <button className={`custom-btn btn-16 py-2 px-4 ${props.style}`} onClick={props.onClick}>
      {props.title}
    </button>
  );
}


