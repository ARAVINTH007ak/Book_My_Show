import React from "react";


export function NextArrow(props) {

  return (
    <>
      <div
        className={props.className}
        onClick={props.onClick}
        style={{ ...props.style, backgroundColor: "black" }}
      ></div>
    </>
  );
}

export function PrevArrow(props) {
  return (
    <>
      <div
        className={props.className}
        onClick={props.onClick}
        style={{ ...props.style, backgroundColor: "black" }}
      ></div>
    </>
  );
}
