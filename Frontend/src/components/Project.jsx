import React from "react";
import bg from "../../public/testiomnials-background.jpg";

function Project() {
  return (
    <>
      <div>
        <h1 className="text-[#545454] mt-16 text-center font-bold text-4xl mb-4">
          Projects
        </h1>
        <p className="text-[#545454] text-base mt-3 lg:mx-44 text-center">
          You'll love our work. Check it out!
        </p>

        <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row w-full mt-20">
          <img
            className="w-full sm:w-full md:w-full lg:w-1/4 object-cover hover:transition-opacity hover:opacity-90"
            alt="project-image"
            src="./public/1.jpg"
          />
          <img
            className="w-full sm:w-full md:w-full lg:w-1/4 object-cover hover:transition-opacity hover:opacity-90"
            alt="project-image"
            src="./public/2.jpg"
          />
          <img
            className="w-full sm:w-full md:w-full lg:w-1/4 object-cover hover:transition-opacity hover:opacity-90"
            alt="project-image"
            src="./public/3.jpg"
          />
          <img
            className="w-full sm:w-full md:w-full lg:w-1/4 object-cover hover:transition-opacity hover:opacity-90"
            alt="project-image"
            src="./public/4.jpg"
          />
        </div>
      </div>

      <div>
        <div
          className="relative flex w-full h-[700px] justify-center bg-cover bg-center"
          style={{ backgroundImage: `url(${bg})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-20"></div>

          <div className="relative z-10 text-center flex flex-col justify-center items-center mt-20 text-white">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:px-8 sm:px-8">
              Testimonials
            </h1>
            <img
              src="./public/mydp.jpeg"
              className="rounded-full w-32 h-32 border border-white mt-10 mb-4 "
              alt="testimonial-image"
            />
            <div
              className="lg:h-[150px] lg:w-[900px] mt-16 ml-5 mr-5  justify-center items-center "
              style={{ backgroundColor: "#6a4d8a" }}
            >
              <p className="text-center lg:mt-10">
                You can further tweak the padding, margins, and text size for
                other breakpoints if needed, but this should give you a solid
                foundation for responsive layout using Tailwind CSS. other
                breakpoints if needed, but this should give you a solid
                foundation for responsive layout using Tailwind CSS.
              </p>
            </div>
            <div
              className=" w-[30px] h-[30px] items-center justify-center"
              style={{
                width: 0,
                height: 0,
                borderLeft: "25px solid transparent",
                borderRight: "25px solid transparent",
                borderTop: "30px solid #6a4d8a",
              }}
            ></div>
            <h1 className="font-bold text-lg mt-5">UMAIR ISLAM</h1>
            <p className="text-8xl -mt-10"> . . . . </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Project;
