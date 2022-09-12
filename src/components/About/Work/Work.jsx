import React from "react";
import WorkItem from "./WorkItem";

const workDetails = [
  {
    id: "w1",
    jobRole: "JavaScript Developer",
    company: "Eupheus Learning ∙ Internship",
    location: "Delhi, India",
    responsibilities: [
      "Designed and built interactive online books",
      "Applied logic for various interactive activities for students",
      "Managed already written code base",
    ],
    skills: ["CSS", "HTML", "JavaScript", "jQuery"],
    duration: "Jul 2022 - Aug 2022 · 1 mo",
  },
  {
    id: "w2",
    jobRole: "Web Developer",
    company: "Dignifyd Digital Solutions · Internship",
    location: "Delhi, India",
    responsibilities: [
      "Worked on real-world projects",
      "Handled clients and designed websites according to requirements",
      "Used custom code and templating",
    ],
    skills: ["CSS", "HTML", "JavaScript", "Bootstrap"],
    duration: "Sep 2021 - Nov 2021 · 3 mos",
  },
  {
    id: "w3",
    jobRole: "Web Developer",
    company: "Failure to Success ∙ Intenship",
    location: "Delhi, India",
    responsibilities: ["Worked as a part of a team", "Built responsive web apps"],
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
