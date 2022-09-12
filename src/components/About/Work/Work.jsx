import React from "react";
import WorkItem from "./WorkItem";

const workDetails = [
  {
    id: "w1",
    jobRole: "JavaScript Developer",
    company: "Eupheus Learing ∙ Intenship",
    location: "Delhi, India",
    responsibilities: [
      "Design and build interactive online books",
      "Apply logic for various interactive activities for students",
      "Manage already written code base",
    ],
    skills: ["CSS", "HTML", "JavaScript", "jQuery"],
    duration: "Jul 2022 - Aug 2022 · 1 mo",
  },
  {
    id: "w2",
    jobRole: "Web Developer",
    company: "Dignifyd Digital Solutions · Intenship",
    location: "Delhi, India",
    responsibilities: [
      "Work on real-world projects",
      "Handle clients and design websites according to requirements",
      "Use custom code and templating",
    ],
    skills: ["CSS", "HTML", "JavaScript", "Bootstrap"],
    duration: "Sep 2021 - Nov 2021 · 3 mos",
  },
  {
    id: "w3",
    jobRole: "Web Developer",
    company: "Failure to Success ∙ Intenship",
    location: "Delhi, India",
    responsibilities: ["Work as a part of a team", "Build responsive web apps"],
    skills: [
      "Flask",
      "CSS",
      "Node.js",
      "HTML",
      "MongoDB",
      "JavaScript",
      "jQuery",
      "Bootstrap",
    ],
    duration: "Aug 2021 - Sep 2021 · 2 mos",
  },
];

const Work = () => {
  return (
    <ul className=" flex flex-col gap-10 px-3 lg:px-12 py-5 lg:py-10">
      {workDetails.map((workDetail) => (
        <WorkItem
          key={workDetail.id}
          jobRole={workDetail.jobRole}
          company={workDetail.company}
          location={workDetail.location}
          responsibilities={workDetail.responsibilities}
          skills={workDetail.skills}
          duration={workDetail.duration}
        />
      ))}
    </ul>
  );
};

export default Work;
