import React from "react";

const WorkItem = (props) => {
  return (
    <>
      <li className=" font-nunito flex lg:justify-between text-left bg-white p-3 py-5 lg:px-5 lg:py-6 shadow-lg rounded-lg cursor-default lg:hover:scale-105 duration-200">
        <div className="lg:w-3/6 space-y-1">
          <h2 className=" text-cyan-800 text-lg leading-tight font-quicksand lg:leading-normal font-bold lg:text-xl">
            {props.jobRole}
          </h2>
          <h2 className=" text-cyan-800 text-base leading-tight lg:leading-normal font-semibold font-quicksand">
            {props.company}
          </h2>
          <p className=" text-sm text-cyan-700 font-semibold lg:text-sm">
            {props.location}
          </p>
          <p className="lg:hidden text-xs font-quicksand lg:text-base font-bold text-slate-500 ">
            {props.duration}
          </p>
          <ul className="lg:mt-2">
            {props.responsibilities.map((responsibility) => (
              <li
                key={responsibility}
                className="mt-1 tracking-tight lg:w-5/6 list-disc leading-snug ml-4 text-sm font-medium lg:text-sm lg:font-semibold text-slate-500"
              >
                {responsibility}
              </li>
            ))}
          </ul>
          <div className="flex gap-2 pt-2 lg:w-5/6 flex-wrap">
            {props.skills.map((skill) => (
              <span
                key={skill}
                className="text-xs select-none font-roboto bg-opacity-90 bg-rose-500 p-1 px-2 font-semibold text-white rounded-sm hover:scale-110 duration-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div className=" hidden lg:block text-center">
          <p className=" bg-rose-500 text-white font-nunito text-xs lg:text-sm font-bold py-1 px-3 rounded-full">
            {props.duration}
          </p>
        </div>
      </li>
    </>
  );
};

export default WorkItem;
