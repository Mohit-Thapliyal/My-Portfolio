import React from "react";
import { Link } from "react-scroll";
import { HiDownload } from "react-icons/hi";

import profilePic from "../../images/profile/mohit1.png";
import background from '../../images/background/background2.jpg'
import resume from "../../resume/resume.pdf";

const Main = () => {
  return (
    <main
      id="home"
      style={{background: `url(${background}) no-repeat center`, backgroundSize: "cover"}}
      className="font-nunito flex flex-col justify-start md:justify-center  h-full w-screen "
    >
      <div className=" lg:hidden bg-rose-500 flex justify-between p-3">
        <span className=" text-lg font-extrabold text-rose-100 tracking-wider font-comfortaa">
          Portfolio
        </span>
        <span className=" text-base font-bold text-rose-100">
          Mohit Thapliyal
        </span>
      </div>

      <div className="flex flex-col-reverse lg:flex-row justify-end md:justify-evenly items-center xl:gap-0 gap-7 py-[5vh] md:py-[7vh] lg:py-[17vh] xl:py-[23vh]">
        <div className="text-left w-5/6 md:w-8/12 lg:w-6/12 p-3 py-5 md:p-10 lg:pb-8 lg:p-10 xl:pb-16 rounded-lg  bg-white bg-opacity-50 backdrop-blur-xl hover:scale-105 duration-300 ease-linear shadow-sm shadow-slate-500">
          <h3 className="text-xl font-medium text-sky-800 md:text-4xl">
            Namaste!
          </h3>
          <h1 className="text-3xl md:text-5xl font-nunito font-medium tracking-tight text-sky-800 mt-1 lg:mt-4 xl:text-6xl">
            I'm{" "}
            <span className="lowercase">
              <span className="uppercase font-bold text-rose-500">Mohit</span> Thapliyal
            </span>
          </h1>
          <h4 className=" text-sm py-1 font-semibold text-white px-2 md:text-lg tracking-widest mt-2 md:font-semibold md:mt-4 inline-block bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            Full Stack Developer
          </h4>
          <p className=" font-sans leading-tight font-base text-sm  text-cyan-800 mt-2 lg:mt-5 text-justify md:w-4/5 lg:w-4/5 xl:w-3/5 lg:text-base">
            Organized, Responsive, Helpful, Observant, and Trustworthy are some
            of the adjectives to define me. Coding is my passion and art is my
            hobby.
          </p>
          <div className="flex mt-3 lg:mt-10">
            <Link
              to="contact"
              smooth
              className=" cursor-pointer bg-rose-500 font-semibold text-white py-2 px-3 md:px-5 border border-rose-500 hover:border-transparent rounded hover:text-rose-50 hover:bg-rose-600"
            >
              Hire me
            </Link>
            <a
              href={resume}
              target="blank"
              className="flex bg-transparent hover:bg-rose-600 text-rose-600 font-semibold hover:text-white py-2 px-3 md:px-5 border border-rose-500 hover:border-transparent rounded ml-3"
            >
              Download Resume
              <HiDownload className="text-2xl font-thin" />
            </a>
          </div>
        </div>
        <div className="flex justify-center md:justify-end  w-4/6 md:w-5/12 lg:w-3/12">
          <img
            src={profilePic}
            alt="profile pic"
            className=" bg-white bg-opacity-30 backdrop-blur-xl shadow-lg shadow-slate-800 rounded-3xl  md:rounded-[1em] hover:scale-105 duration-300 ease-linear"
          />
        </div>
      </div>
    </main>
  );
};

export default Main;
