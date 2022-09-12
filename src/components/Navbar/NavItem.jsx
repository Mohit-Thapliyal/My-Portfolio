import React from "react";
import { Link } from "react-scroll";

const NavItem = (props) => {
  return (
    <Link
      to={props.to}
      spy
      smooth
      className="flex text-sky-800 py-2 lg:py-1 xl:py-2 flex-col justify-center items-center cursor-pointer hover:text-rose-500 hover:scale-125 duration-300 ease-linear"
      activeClass="nav-active"
    >
      {props.icon}
      <span className=" text-xs drop-shadow-xl font-semibold">
        {props.text}
      </span>
    </Link>
  );
};

export default NavItem;
