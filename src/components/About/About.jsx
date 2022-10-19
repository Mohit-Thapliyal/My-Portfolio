import React, { useState } from "react";
import { FaUserGraduate, FaPalette, FaHistory } from "react-icons/fa";
import {BsFillFileEarmarkPersonFill} from 'react-icons/bs'
import {AiFillSafetyCertificate} from "react-icons/ai"

import Education from "./Education/Education";
import Hobby from "./Hobby/Hobby";
import Work from "./Work/Work";
import Modal from "../UI/Modal";
import AboutMe from "./AboutMe/AboutMe";
import Certification from "./Certification/Certification";

const aboutList = [
  {
    id: "l1",
    title: "About Me",
    number: 1
  },
  {
    id: "l2",
    title: "Education",
    number: 2,
  },
  {
    id: "l3",
    title: "Work History",
    number: 3,
  },
  {
    id: "l4",
    title: "Interest",
    number: 4,
  },
  {
    id: "l5",
    title: "Certificate",
    number: 5,
  },
];

const About = () => {
  const [sectionNumber, setSectionNumber] = useState(1);

  const [selectedPainting, setSelectedPainting] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedOrientation, setSelectedOrientation] = useState(1);

  const hideModalHandler = () => {
    setShowModal(false);
  };
  const showModalHandler = (orientation, painting) => {
    setSelectedPainting(painting);
    setSelectedOrientation(orientation);
    setShowModal(true);
  };

  const aboutNavClass =
    " font-quicksand w-2/5 lg:w-full cursor-pointer text-white text-sm md:text-md lg:text-lg font-extrabold rounded-r-full p-1 -ml-1 lg:ml-0 pl-4";
  const aboutNavActiveClass =
    "font-quicksand w-2/5 lg:w-full cursor-pointer text-sm text-white bg-cyan-600 md:text-md lg:text-lg font-bold rounded-r-full p-1 -ml-1 lg:ml-0 pl-4 lg:text-left ";

  return (
    <>
      {showModal && (
        <Modal
          painting={selectedPainting}
          onClose={hideModalHandler}
          orientation={selectedOrientation}
        />
      )}
      <div
        id="about"
        className="flex pt-0 md:py-16 flex-col lg:flex-row  justify-center items-center bg-slate-900 w-screen h-[95vh] md:h-fit lg:h-[101vh] gap-7 lg:gap-4"
      >
        <div className=" flex w-11/12 h-[20vh] md:h-1/6 lg:w-1/6 lg:h-5/6 text-left border-cyan-600 border-l-[1.8rem] lg:border-l-[2.2rem] font-nunito">
          <ul className="flex justify-evenly flex-col select-none">
            <li
              onClick={() => {
                setSectionNumber(1);
              }}
              className="cursor-pointer text-white text-sm md:text-lg lg:text-xl font-bold pt-1 -ml-6 lg:-ml-7"
            >
              <BsFillFileEarmarkPersonFill />
            </li>
            <li
              onClick={() => {
                setSectionNumber(2);
              }}
              className="cursor-pointer text-white  text-sm md:text-lg lg:text-xl font-bold pt-2 -ml-6 lg:-ml-7"
            >
              <FaUserGraduate />
            </li>
            <li
              onClick={() => {
                setSectionNumber(3);
              }}
              className="cursor-pointer text-white text-sm md:text-lg lg:text-xl font-bold pt-3 -ml-6 lg:-ml-7"
            >
              <FaHistory />
            </li>
            <li
              onClick={() => {
                setSectionNumber(4);
              }}
              className="cursor-pointer text-white text-sm md:text-lg lg:text-xl font-bold pt-3 -ml-6 lg:-ml-7"
            >
              <FaPalette />
            </li>
            <li
              onClick={() => {
                setSectionNumber(5);
              }}
              className="cursor-pointer text-white text-sm md:text-lg lg:text-xl font-bold pt-3 -ml-6 lg:-ml-7"
            >
              <AiFillSafetyCertificate />
            </li>
          </ul>
          <ul className="flex justify-evenly flex-col w-full select-none">
            {aboutList.map((element) => (
              <li
                key={element.id}
                onClick={() => {
                  setSectionNumber(element.number);
                }}
                className={
                  sectionNumber === element.number
                    ? aboutNavActiveClass
                    : aboutNavClass
                }
              >
                {element.title}
              </li>
            ))}
          </ul>
        </div>

        <div className=" w-11/12 h-4/6 md:h-[35vh] lg:w-4/6 lg:h-5/6 overflow-y-scroll shadow-lg bg-slate-200 rounded-sm">
          {sectionNumber === 1 && <AboutMe/>}
          {sectionNumber === 2 && <Education />}
          {sectionNumber === 3 && <Work />}
          {sectionNumber === 4 && <Hobby onShowModal={showModalHandler} />}
          {sectionNumber === 5 && <Certification />}
        </div>
      </div>
    </>
  );
};

export default About;
