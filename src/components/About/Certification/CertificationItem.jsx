import React from "react";

const CertificationItem = (props) => {
  return (
    <>
      <li className="font-nunito cursor-default flex text-left bg-white p-3 lg:px-8 lg:py-6 shadow-lg rounded-lg lg:hover:scale-105 duration-200">
        <div className="font-quicksand flex flex-col justify-between gap-5">
          <div className="flex flex-col">
            <h1 className=" text-xl font-bold text-cyan-800">{props.certificate}</h1>
            <div className="flex items-center gap-5">
              <span className="text-lg font-semibold text-cyan-700">{props.institution}</span>
              <span className="font-semibold text-rose-600">{props.instructor}</span>
            </div>
            <div className="text-sm font-semibold text-slate-600">{props.date}</div>
          </div>
          <a className="w-fit px-10 text-white text-sm rounded-sm py-1 font-bold bg-rose-500" href={props.link} target="certificate">Link</a>
        </div>
      </li>
    </>
  );
};

export default CertificationItem;
