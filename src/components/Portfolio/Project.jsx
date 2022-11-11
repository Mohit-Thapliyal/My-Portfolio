import React from "react";
import {AiOutlineGithub} from "react-icons/ai"
import {BiLink} from "react-icons/bi"

const Project = (props) => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <div className="bg-white w-11/12 rounded-2xl overflow-hidden">
          <div className="h-40 md:h-40 lg:h-40 xl:h-52">
            <img className="w-full h-full rounded-lg border-b cursor-pointer" src={props.image} alt="project-img" onClick={() => {
        props.onShowModal(1, props.image);
      }} />
          </div>
          <div className="p-5">
            <h2 className="text-sky-700 font-quicksand font-bold text-xl">
              {props.title}
            </h2>
            <div className="mt-2 text-sm lg:text-md text-slate-500 font-medium text-justify h-24 font-nunito select-text">{props.description}</div>
          </div>
          <div className="flex bg-slate-200 px-5 pb-3 pt-5 gap-3">
            {props.link && <a href={props.link} target={props.title} className="bg-rose-500 px-2 py-1 rounded-full text-white text-md font-mono flex items-center gap-2"><BiLink className="text-xl"/>link</a>}
            {!props.link && <button className="bg-rose-400 cursor-not-allowed px-2 py-1 rounded-full text-white text-md font-mono flex items-center gap-2"><BiLink className="text-xl"/>link</button>}
            {props.github && <a href={props.github} target={props.title} className="bg-sky-700 px-2 py-1 rounded-full text-white text-md font-mono flex items-center gap-2"><AiOutlineGithub className="text-white text-xl"/>github</a>}
            {!props.github && <button className="bg-sky-400 cursor-not-allowed px-2 py-1 rounded-full text-white text-md font-mono flex items-center gap-2"><AiOutlineGithub className="text-white text-xl"/>github</button>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
