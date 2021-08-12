import React from "react";

const Cast = (props) => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-32 h-32">
        <img src={props.img} alt="" className="w-full h-full rounded-full" />
      </div>
        <h1 className="text-center  text-black text-lg ">{props.name}</h1>
        <p className=" text-xs text-gray-500">as {props.chname}</p>
    </div>
  );
};

export default Cast;
