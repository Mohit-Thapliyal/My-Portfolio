import React from "react";
import Slider from "react-slick";
import bg1 from "../../images/project/project1.jpg";
import bg2 from "../../images/project/project2.jpg";
import bg3 from "../../images/project/project3.jpg";
import bg4 from "../../images/project/project4.jpg";
import bg5 from "../../images/project/project5.jpg";
import Project from "./Project";

const projects = [
  {
    id: "pj1",
    image: bg1,
    title: "Portfolio",
    description:
      "My personal website showcases my web designing and web development skills. Beautifully designed with react and tailwind.",
    link: "https://mohitthapliyal.in",
    github: "https://github.com/Mohit-Thapliyal/my-portfolio",
  },
  {
    id: "pj2",
    image: bg2,
    title: "Corporate Wisdom",
    description:
      "A Custom designed website for a well-known book author Dr. Meena Sinha.",
    link: "http://www.meenasinha.com",
    github: "",
  },
  {
    id: "pj3",
    image: bg3,
    title: "Meetups",
    description:
      "Next.js project where you can add meetup detail by simply adding the details in the meetup form and adding any image link of your choice.",
    link: "https://meetups.mohitthapliyal.in/",
    github: "",
  },
  {
    id: "pj4",
    image: bg4,
    title: "Quotes",
    description:
      "Here you can add quotes and even comment on the quotes written by others. The URL changes dynamically according to the quotes.",
    link: "https://quotes.mohitthapliyal.in/quotes",
    github: "",
  },
  {
    id: "pj5",
    image: bg5,
    title: "Car Price Predictor",
    description:
      "A Machine Learning project which can predict the selling price of a car based on car details. Build using Flask and Bootstrap.",
    link: "https://car-price-predictor-mt.herokuapp.com/",
    github: "https://github.com/Mohit-Thapliyal/Car-Price-Predictor",
  },
];

const Portfolio = () => {
  const settings = {
    centerMode: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div
      id="portfolio"
      className="bg-slate-900 w-screen md:px-[2.5rem] xl:px-[5rem] h-[95vh] md:h-fit md:py-[10vh] lg:py-[19vh] xl:py-[24vh] flex flex-col justify-center"
    >
      <div>
        <Slider {...settings}>
          {projects.map((project) => (
            <Project
              key={project.id}
              image={project.image}
              title={project.title}
              description={project.description}
              link={project.link}
              github={project.github}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Portfolio;
