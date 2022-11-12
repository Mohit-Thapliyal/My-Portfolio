import React from "react";
import { IoClose } from "react-icons/io5";

const Modal = (props) => {
  return (
    <div className="flex absolute justify-center items-center h-screen w-screen">
      <div
        onClick={props.onClose}
        className="fixed inset-0 opacity-60 bg-black h-screen z-10 w-screen flex justify-center"
      ></div>
      {props.orientation === 0 && (
        <div className="relative w-fit z-20 bg-white overflow-hidden p-1 rounded-sm lg:rounded-lg">
          <div className="w-full h-1/2">
            <img
              src={props.painting}
              alt=""
              className="h-[65vh] md:h-[70vh] lg:h-[80vh] xl:h-[90vh] rounded-sm lg:rounded-lg"
            />
            <div
              onClick={props.onClose}
              className="absolute cursor-pointer border text-white top-2 right-2 p-1 rounded-full backdrop-blur-md bg-white bg-opacity-70 shadow-lg"
            >
              <IoClose className="text-cyan-900 text-lg lg:text-3xl" />
            </div>
          </div>
        </div>
      )}
      {props.orientation === 1 && (
        <div className="relative z-20 bg-white overflow-hidden p-1 rounded-sm lg:rounded-lg">
          <div className="w-full h-1/2">
            <img
              src={props.painting}
              alt=""
              className="h-[35vh] md:h-[40vh] lg:h-[80vh] xl:h-[90vh] rounded-sm lg:rounded-lg"
            />
            <div
              onClick={props.onClose}
              className="absolute cursor-pointer border text-white top-2 right-2 p-1 rounded-full backdrop-blur-md bg-white bg-opacity-70 shadow-lg"
            >
              <IoClose className="text-cyan-900 text-lg lg:text-3xl" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
