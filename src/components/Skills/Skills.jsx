import React from "react";
import Skill from "./Skill";

const skillIcons = [
  {
    id: "sk1",
    source:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg",
    alt: "The logo icon for HTML 5",
    title: "HTML 5",
  },
  {
    id: "sk2",
    source:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg",
    alt: "The logo icon for CSS",
    title: "CSS",
  },
  {
    id: "sk3",
    source:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    alt: "The logo icon for JAVASCRIPT",
    title: "JAVASCRIPT",
  },
  {
    id: "sk4",
    source:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg",
    alt: "The logo icon for React",
    title: "React",
  },
  {
    id: "sk5",
    source:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
    alt: "The logo icon for Redux",
    title: "Redux",
  },
  {
    id: "sk6",
    source:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain-wordmark.svg",
    alt: "The logo icon for FIREBASE",
    title: "FIREBASE",
  },
  {
    id: "sk7",
    source:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg",
    alt: "The logo icon for MongoDB",
    title: "MongoDB",
  },
  {
    id: "sk8",
    source:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
    alt: "The logo icon for Tailwind",
    title: "Tailwind",
  },
  {
    id: "sk9",
    source:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    alt: "The logo icon for Bootstrap",
    title: "Bootstrap",
  },
  {
    id: "sk10",
    source:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg",
    alt: "The logo icon for Node.JS",
    title: "Node.JS",
  },
  {
    id: "sk11",
    source:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg",
    alt: "The logo icon for Next.JS",
    title: "Next.JS",
  },
  {
    id: "sk12",
    source:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg",
    alt: "The logo icon for Git",
    title: "Git",
  },
  {
    id: "sk13",
    source:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg",
    alt: "The logo icon for Github",
    title: "Github",
  },
  {
    id: "sk14",
    source:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-plain-wordmark.svg",
    alt: "The logo icon for Heroku",
    title: "Heroku",
  },
  {
    id: "sk15",
    source:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    alt: "The logo icon for Figma",
    title: "Figma",
  },
];

const Skills = () => {
  return (
    <div
      id="skills"
      className="bg-slate-100 w-screen h-fit md:h-fit flex flex-col justify-center items-center py-[7vh]  md:py-[5vh] lg:py-[17vh] xl:py-[17vh]"
    >
      <div className="grid grid-cols-3 grid-rows-5 md:grid-cols-5 md:grid-rows-3 gap-x-10 md:gap-x-12 lg:gap-x-14 xl:gap-x-20 gap-y-8 md:gap-y-10 lg:gap-y-14 xl:gap-y-20">
        {skillIcons.map((skillIcon) => (
          <Skill
            key={skillIcon.id}
            source={skillIcon.source}
            alt={skillIcon.alt}
            title={skillIcon.title}
          />
        ))}
      </div>
    </div>
  );
};

export default Skills;
