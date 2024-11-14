import React from 'react'
import icon from "../../public/nature.jpg";
import icon1 from "../../public/nature1.jpg";
import icon2 from "../../public/nature2.jpg";


function Latest_news() {
  return (
    <>
      <div className="bg-[#222f36] lg:h-[1000px] md:h-full w-full">
        <h1 className="text-center text-4xl pt-20 font-bold text-white">
          Latest News
        </h1>
        <p className="text-[#8c9597] text-center mt-10 md:mx-10 sm:mx-10">
          If you are interested in the latest articles in the industry, take a
          sneak peek at our blog. You have nothing to loose!
        </p>

        <div className="flex items-center justify-center mt-20">
          <button className="h-12 w-40 items-center justify-center bg-yellow-400 font-semibold hover:bg-purple-700 hover:border border-2 text-white  rounded-md transition duration-200 ">
            See Blog
          </button>
        </div>

        <div className="flex flex-col lg:flex-row md:flex-col sm:flex-col px-10 mt-28 mb-20 lg:space-x-10 lg:space-y-0 space-y-10">
          <div className="bg-white w-full lg:w-96 h-[500px] flex flex-col">
            <img
              src={icon}
              className="w-full h-48 mb-4"
              alt="Web Design Icon"
            />
            <h1 className="text-2xl font-bold text-gray-600 text-center px-5 mt-10">
              We Have Made Illdy Theme SEO Friendly
            </h1>
            <p className="text-center mt-8 px-6 text-gray-500">
              Consectetur adipiscing elit. Praesent molestie urna hendrerit erat
              tincidunt tempus. Aliquam a leo risus. Fusce a metus non augue
              dapibus porttitor at in mauris. Pellentesque commodo.
            </p>
          </div>

          <div className="bg-white w-full lg:w-96 h-[500px] flex flex-col">
            <img
              src={icon1}
              className="w-full h-48 mb-4"
              alt="Web Design Icon"
            />
            <h1 className="text-2xl font-bold text-gray-600 text-center px-5 mt-10">
              Stunning One Page WordPress Theme For Masses
            </h1>
            <p className="text-center mt-8 px-6 text-gray-500">
              Consectetur adipiscing elit. Praesent molestie urna hendrerit erat
              tincidunt tempus. Aliquam a leo risus. Fusce a metus non augue
              dapibus porttitor at in mauris. Pellentesque commodo.
            </p>
          </div>

          <div className="bg-white w-full lg:w-96 h-[500px] flex flex-col">
            <img
              src={icon2}
              className="w-full h-48 mb-4"
              alt="Web Design Icon"
            />
            <h1 className="text-2xl font-bold text-gray-600 text-center px-5 mt-10">
              Hello World!
            </h1>
            <p className="text-center mt-14 px-6 text-gray-500">
              Consectetur adipiscing elit. Praesent molestie urna hendrerit erat
              tincidunt tempus. Aliquam a leo risus. Fusce a metus non augue
              dapibus porttitor at in mauris. Pellentesque commodo.
            </p>
          </div>
        </div>
        <div
          className="-mt-3 relative bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url(${icon})`, height: "500px" }}
        >
          <div className="bg-yellow-400 opacity-80 w-full md:h-80 sm:h-80 lg:h-44  absolute inset-0 z-10">
            <div className="flex flex-col lg:flex-row lg:px-20 lg:ml-20 px-4 mt-10 space-y-6 lg:space-y-0 lg:space-x-44 ">
              <div className="flex flex-col justify-start items-center">
                <h1 className="font-extrabold text-5xl md:text-4xl sm:text-3xl text-white">
                  260
                </h1>
                <h1 className="font-extrabold text-2xl md:text-lg sm:text-md text-white">
                  PROJECT
                </h1>
              </div>
              <div className="flex flex-col items-center">
                <h1
                  className="lg:text-8xl md:text-6xl sm:text-5xl text-white 
               lg:rotate-0 rotate-90"
                >
                  |
                </h1>
              </div>
              <div className="flex flex-col justify-center items-center">
                <h1 className="font-extrabold text-5xl md:text-4xl sm:text-3xl text-white">
                  120
                </h1>
                <h1 className="font-extrabold text-2xl md:text-lg sm:text-md text-white">
                  CLIENTS
                </h1>
              </div>
              <div className="flex flex-col justify-start items-center">
                <h1
                  className="lg:text-8xl md:text-6xl sm:text-5xl text-white
                lg:rotate-0 rotate-90"
                >
                  |
                </h1>
              </div>
              <div className="flex flex-col justify-start items-center">
                <h1 className="font-extrabold text-5xl md:text-4xl sm:text-3xl text-white">
                  260
                </h1>
                <h1 className="font-extrabold text-2xl md:text-lg sm:text-md text-white">
                  COFFEE
                </h1>
              </div>
            </div>
          </div>

          <div className="bg-gray-200 w-full lg:h-[500px] h-[1100px] absolute inset-x-0 z-20 mt-[500px] lg:mt-44">
            <h1 className="text-center text-4xl pt-20 font-bold text-[#545454]">
              Team
            </h1>
            <h6 className="text-center mt-5 text-[#545454]">
              Meet the people that are going to take your business to the next
              level.
            </h6>

            <div className="flex flex-col lg:flex-row lg:px-20 md:px-10 sm:px-5 lg:space-x-20 lg:ml-14 mt-10">
              <div className="flex flex-col items-center w-full lg:w-80 md:w-full sm:w-full mb-10 lg:mb-0">
                <img
                  src="../../public/mydp.jpeg"
                  className="h-28 w-28 rounded-full mt-5"
                  alt="Umair Islam"
                />
                <div className="flex flex-col justify-start mt-3 ml-5 text-center lg:text-left">
                  <h1 className="font-bold text-2xl text-[#545454]">
                    Umair Islam
                  </h1>
                  <h1 className="font-semibold text-red-400">Web Designer</h1>
                  <h4 className="mt-3">
                    Creative, detail-oriented, always focused.
                  </h4>
                </div>
              </div>

              <div className="flex flex-col items-center w-full lg:w-80 md:w-full sm:w-full mb-10 lg:mb-0">
                <img
                  src="../../public/mydp.jpeg"
                  className="h-28 w-28 rounded-full mt-5"
                  alt="Jane Stenton"
                />
                <div className="flex flex-col justify-start mt-3 ml-5 text-center lg:text-left">
                  <h1 className="font-bold text-2xl text-[#545454]">
                    Jane Stenton
                  </h1>
                  <h1 className="font-semibold text-yellow-400">
                    SEO Specialist
                  </h1>
                  <h4 className="mt-3">
                    Curious, tech-geek and gets serious when it comes to work.
                  </h4>
                </div>
              </div>

              <div className="flex flex-col items-center w-full lg:w-80 md:w-full sm:w-full mb-10 lg:mb-0">
                <img
                  src="../../public/mydp.jpeg"
                  className="h-28 w-28 rounded-full mt-5"
                  alt="John Smith"
                />
                <div className="flex flex-col justify-start mt-3 ml-5 text-center lg:text-left">
                  <h1 className="font-bold text-2xl text-[#545454]">
                    John Smith
                  </h1>
                  <h1 className="font-semibold text-purple-400">Developer</h1>
                  <h4 className="mt-3">
                    Enthusiastic, passionate with great sense of humor.
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Latest_news
