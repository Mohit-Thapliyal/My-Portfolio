import React from "react";
// import { Link } from "react-scroll";
import {  NavLink } from "react-router-dom";

const navClassName = "flex text-sky-800 py-2 lg:py-1 xl:py-2 flex-col justify-center items-center cursor-pointer hover:text-rose-500 hover:scale-125 duration-300 ease-linear select-none"
const activeNavClassName = "flex text-rose-500 py-2 lg:py-1 xl:py-2 flex-col justify-center items-center cursor-pointer sm:hover:text-rose-500 sm:hover:scale-125 duration-300 ease-linear select-none"

const NavItem = (props) => {
  return (
    <NavLink
      to={props.to}
      spy
      smooth
      className={({isActive})=>isActive?activeNavClassName:navClassName}
    >
      {props.icon}
      <span className=" text-xs drop-shadow-xl font-semibold select-none">
        {props.text}
      </span>
    </NavLink>
  );
};

export default NavItem;
