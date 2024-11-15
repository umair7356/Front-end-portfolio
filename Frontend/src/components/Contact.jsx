import React from 'react'

function Contact() {
  return (
    <>
      <div className="relative z-30 mt-[1100px] bg-white   w-full lg:h-[700px] h-[950px]">
        <h1 className="text-center text-4xl lg:-mt-[350px]   font-bold text-[#545454]">
          Contact us
        </h1>

        <div className="flex lg:flex-row flex-col md:max-w-fit sm:max-w-fit ">
          <div className="flex flex-col lg:flex-row w-full md:max-w-fit sm:max-w-fit">
            <div className="flex flex-col lg:flex-row items-center lg:ml-20 lg:mt-20 mt-10 w-full lg:w-auto space-y-4 lg:space-y-0 lg:space-x-10">
              <h1 className="text-base text-yellow-400 text-center lg:text-left">
                Address
              </h1>
              <div className="border-l-2 h-10 hidden lg:block"></div>{" "}
              <h1 className="text-base text-[#8c9597] text-center lg:text-left">
                Street 221B Baker Street, London, UK
              </h1>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-center lg:ml-20 lg:mt-20 mt-10 w-full lg:w-auto space-y-4 lg:space-y-0 lg:space-x-10">
            <h1 className="text-base text-yellow-400 flex-row text-center">
              Customer Support
            </h1>
            <div className="border-l-2 h-10 hidden lg:block"></div>{" "}
            <div className="flex-col ">
              <h1 className="text-base lg:-ml-5 ml-10  text-[#8c9597] flex-row  text-align">
                E-mail: contact@site.com
              </h1>
              <h1 className=" text-base lg:-ml-5 ml-10  text-[#8c9597] flex-row  text-align">
                Phone: (555) 555-5555
              </h1>
            </div>
          </div>
        </div>
        <div className="px-4 lg:px-20 mt-10 lg:mt-20 flex flex-col lg:flex-row w-full lg:space-x-10 space-y-6 lg:space-y-0">
          <div className="flex flex-col w-full lg:w-auto">
            <h1 className="text-[#8c9597]">Your Name (required)</h1>
            <input
              type="text"
              className="border rounded-sm w-full lg:w-[375px] h-10 border-[#8c9597]"
            />
          </div>
          <div className="flex flex-col w-full lg:w-auto">
            <h1 className="text-[#8c9597]">Your Email (required)</h1>
            <input
              type="email"
              className="border rounded-sm w-full lg:w-[375px] h-10 border-[#8c9597]"
            />
          </div>
          <div className="flex flex-col w-full lg:w-auto">
            <h1 className="text-[#8c9597]">Subject</h1>
            <input
              type="text"
              className="border rounded-sm w-full lg:w-[375px] h-10 border-[#8c9597]"
            />
          </div>
        </div>
        <div className="lg:px-20 px-4 mt-8 ">
          <h1 className="text-[#8c9597]">Subject</h1>
          <textarea
            type="text"
            placeholder="write subject here"
            className="border rounded-sm w-full px-1 py-1 h-44 border-[#8c9597]"
          />
          <div className="flex justify-end mt-5 ">
            <button className="h-12 w-44 bg-yellow-400 border rounded-md text-white font-semibold text-lg">
              Send
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact
