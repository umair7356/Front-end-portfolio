import React from 'react'
import icon from "../../public/pencile.png";
import icon1 from "../../public/web-deve.png";
import icon2 from "../../public/seo.png";

function Services() {
  return (
    <>
      <div className="bg-white ">
        <h1 className="text-[#545454] mt-16 text-center font-bold text-4xl mb-4">
          Services
        </h1>
        <p className="text-center text-gray-500">
          In order to help you grow your business, our carefully selected
          experts can advise you in in the following areas:
        </p>

        <div className="flex flex-col lg:flex-row md:flex-col sm:flex-col px-10 mt-28 mb-20 lg:space-x-10">
          <div className=" w-full lg:w-96 h-[350px] flex flex-col items-center justify-center">
            <img src={icon} className="w-24 h-24 mb-4" alt="Web Design Icon" />
            <h1 className="text-2xl font-bold text-red-500 text-center mt-4">
              Web Design
            </h1>
            <p className="text-center mt-4 px-4 text-gray-500">
              Consectetur adipiscing elit. Praesent molestie urna hendrerit erat
              tincidunt tempus. Aliquam a leo risus. Fusce a metus non augue
              dapibus porttitor at in mauris. Pellentesque commodo...
            </p>
          </div>

          <div className=" w-full lg:w-96 h-[350px] flex flex-col items-center justify-center">
            <img src={icon1} className="w-24 h-24 mb-4" alt="Web Design Icon" />
            <h1 className="text-2xl font-bold text-yellow-500 text-center mt-4">
              WEB DEVELOPMENT
            </h1>
            <p className="text-center mt-4 px-4 text-gray-500">
              Consectetur adipiscing elit. Praesent molestie urna hendrerit erat
              tincidunt tempus. Aliquam a leo risus. Fusce a metus non augue
              dapibus porttitor at in mauris. Pellentesque commodo...
            </p>
          </div>

          <div className=" w-full lg:w-96 h-[350px] flex flex-col items-center justify-center">
            <img src={icon2} className="w-20 h-20 mb-4" alt="Web Design Icon" />
            <h1 className="text-2xl font-bold text-purple-900 text-center mt-8">
              SEO Analisys
            </h1>
            <p className="text-center mt-4 px-4 text-gray-500">
              Consectetur adipiscing elit. Praesent molestie urna hendrerit erat
              tincidunt tempus. Aliquam a leo risus. Fusce a metus non augue
              dapibus porttitor at in mauris. Pellentesque commodo...
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services
