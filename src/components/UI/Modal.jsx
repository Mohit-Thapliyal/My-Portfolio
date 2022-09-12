import React from "react";

const Modal = (props) => {
  return (
    <>
        <div onClick={props.onClose} className=" fixed inset-0 opacity-60 bg-black h-screen z-10 w-screen"></div>
        {props.orientation === 0 && <div className="fixed z-20 bg-white top-[13vh] md:top-[13vh] lg:top-[10vh] xl:top-[5vh] overflow-hidden p-1">
          <div className="w-full h-1/2">
            <img src={props.painting} alt="" className="  h-[65vh] md:h-[70vh] lg:h-[80vh] xl:h-[90vh]" />
          </div>
        </div>}
        {props.orientation === 1 && <div className="fixed z-20 bg-white top-[30vh] md:top-[27vh] lg:top-[10vh] xl:top-[5vh] overflow-hidden p-1">
          <div className="w-full h-1/2">
            <img src={props.painting} alt="" className=" h-[35vh] md:h-[40vh] lg:h-[80vh] xl:h-[90vh]" />
          </div>
        </div>}
    </>
  );
};

export default Modal;
