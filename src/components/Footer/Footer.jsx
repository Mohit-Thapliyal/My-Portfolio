import React from "react";
import {
  IoLogoFacebook,
  IoLogoGithub,
  IoLogoLinkedin,
  IoLogoInstagram,
} from "react-icons/io5";

const Footer = () => {
  const date = new Date();
  return (
    <div className=" bg-slate-900 flex-col-reverse lg:flex-row text-white w-screen gap-4 h-fit py-6 sm:p-10 pb-[8vh] md:pb-[8vh] lg:p-5 xl:p-8 flex justify-around items-center">
      <div className="text-sm sm:text-lg font-mono">
        <p>All rights reserved © {date.getFullYear()}</p>
      </div>
      <div className="flex gap-7 lg:gap-8 text-2xl">
        <a
          target="facebook"
          href="https://www.facebook.com/profile.php?id=100010237621145"
          className="hover:text-cyan-400"
        >
          <IoLogoFacebook />
        </a>
        <a
          target="github"
          href="https://github.com/Mohit-Thapliyal"
          className="hover:text-cyan-400"
        >
          <IoLogoGithub />
        </a>
        <a
          target="linkedin"
          href="https://www.linkedin.com/in/mohit-thapliyal-b20104146/"
          className="hover:text-cyan-400"
        >
          <IoLogoLinkedin />
        </a>
        <a
          target="instagram"
          href="https://www.instagram.com/mohitthapliyal100/"
          className="hover:text-cyan-400"
        >
          <IoLogoInstagram />
        </a>
      </div>
      <div>
        <p className="text-md sm:text-lg font-quicksand">
          Developed by <span className=" text-cyan-400">Mohit Thapliyal</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
