import React from "react";
import {
  BiHome,
  BiUser,
  BiBook,
  BiBriefcaseAlt,
  BiMessageSquareDetail,
} from "react-icons/bi";

import NavItem from "./NavItem";

const Navitems = [
  {
    id: "ni1",
    icon: <BiHome className="text-xl font-thin" />,
    text: "Home",
    to: "/",
  },
  {
    id: "ni2",
    icon: <BiUser className="text-xl font-thin" />,
    text: "About",
    to: "about",
  },
  {
    id: "ni3",
    icon: <BiBook className="text-xl font-thin" />,
    text: "Skills",
    to: "skills",
  },
  {
    id: "ni4",
    icon: <BiBriefcaseAlt className="text-xl font-thin" />,
    text: "Portfolio",
    to: "portfolio",
  },
  {
    id: "ni5",
    icon: <BiMessageSquareDetail className="text-xl font-thin" />,
    text: "Contactme",
    to: "contact",
  },
];

const Navbar = () => {
  return (
    <>
      <nav className="flex fixed bottom-0 lg:bottom-auto lg:bg-opacity-90 shadow-md backdrop-blur-sm bg-white lg:w-2/4 mx-auto rounded-t-md lg:rounded-full justify-around z-10 mt-4 w-screen ">
        {Navitems.map((Navitem) => (
          <NavItem
            key={Navitem.id}
            icon={Navitem.icon}
            text={Navitem.text}
            to={Navitem.to}
          />
        ))}
      </nav>
    </>
  );
};

export default Navbar;
