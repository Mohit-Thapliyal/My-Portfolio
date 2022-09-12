import React from "react";

const Skill = ({ source, alt, title }) => {
  return (
    <img
      src={source}
      alt={alt}
      title={title}
      className="h-20 md:h-24 lg:h-24 xl:h-32 hover:scale-125 duration-500"
    />
  );
};

export default Skill;
