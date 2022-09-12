import React from "react";

const EducationItem = (props) => {
  return (
    <>
      <li className="font-nunito cursor-default flex lg:justify-between text-left bg-white p-3 lg:px-5 lg:py-6 shadow-lg rounded-lg lg:hover:scale-105 duration-200">
        <div className="lg:w-3/6 space-y-1">
          <h2 className=" font-edusa text-cyan-800 text-lg leading-tight lg:leading-normal font-bold lg:text-xl">
            {props.uniName},
          </h2>
          <p className=" text-sm text-cyan-700 font-semibold lg:text-base">
            {props.location}
          </p>
          <h3 className=" leading-snug text-base font-quicksand text-rose-600 font-semibold">
            {props.courseName}
          </h3>
          <p className="lg:hidden text-xs font-quicksand lg:text-base font-bold text-slate-500">
            {props.duration}
          </p>
          <h4 className="text-sm font-quicksand lg:text-base font-semibold text-slate-600">
            {props.marks}
          </h4>
        </div>
        <div className=" hidden lg:block w-2/6 xl:w-1/6 text-center">
          <p className=" bg-rose-500 text-white  text-xs lg:text-sm font-bold py-1 px-3 rounded-full">
            {props.duration}
          </p>
        </div>
      </li>
    </>
  );
};

export default EducationItem;
