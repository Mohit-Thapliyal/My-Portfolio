import React from "react";
import background from "../../../images/background/background1.jpg";

const AboutMe = () => {
  return (
    <div
      style={{
        background: `url(${background}) no-repeat center`,
        backgroundSize: "cover",
      }}
      className="min-h-full md:h-full p-1 md:p-3 lg:p-5 xl:p-7 bg-sky-900 flex justify-between items-center"
    >
      <div className="flex flex-col justify-center items-center px-2 py-3 xl:py-6 xl:px-5 bg-white backdrop-blur-md bg-opacity-80 h-full rounded-md drop-shadow-xl font-edusa font-medium md:text-lg lg:text-lg xl:text-2xl text-cyan-800 text-center">
        <h2 className="font-bold">Hello! Everyone, </h2>
        <p>Hope you all are doing well.</p>
        <div className="">
          <div className="mt-1">
            My name is <span className="font-semibold">Mohit Thapliyal</span>{" "}
            and I'm 21 years old. Currently pursuing a{" "}
            <span className="font-semibold">
              Bachelors of Technology in Computer Science
            </span>{" "}
            from <span className="font-semibold">TIIPS</span>.
          </div>
          <div className="mt-1">
            I've sound knowledge of web development and since childhood, it
            interests me. I am very{" "}
            <span className="font-semibold">enthusiastic</span> and always{" "}
            <span className="font-semibold">eager to learn</span>. I always put
            my hundred percent into everything that I do. I'm very good at time
            management and know how to prioritize the work.
          </div>
          <div className="mt-1">
            I never quit and have a{" "}
            <span className="font-semibold">competitive spirit</span>. I'm{" "}
            <span className="font-semibold">not afraid of failures</span>{" "}
            instead learn from them because they always teach me something that
            no one can teach.
          </div>
          <div className="mt-1">
            Apart from this I really enjoy meeting new people, hope we'll meet
            someday.
          </div>
          <div className="mt-1 font-bold ">Regards,</div>
          <div className="mt-1 font-bold ">Mohit Thapliyal</div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
