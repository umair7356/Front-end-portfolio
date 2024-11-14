import React from 'react'

function BottomNav() {
  return (
    <>
      <div className="w-full lg:h-[370px] h-[900px] bg-black">
        <div className="flex flex-col lg:flex-row lg:space-x-32 space-x-0 lg:space-y-0 space-y-8 px-5 lg:px-20 pt-10">
          <div className="flex-row">
            <h1 className="flex-col lg:text-2xl text-balance font-bold  text-white lg:pt-14 pt-10 lg:ml-20 ml-5 ">
              PRODUCTS
            </h1>
            <h1 className="lg:ml-20 flex-col ml-5 text-md mt-8 text-[#8C979C]">
              &gt; Our work
            </h1>
            <h1 className="lg:ml-20 flex-col ml-5 text-md mt-3 text-[#8C979C]">
              &gt; Club
            </h1>
            <h1 className="lg:ml-20 flex-col ml-5 text-md mt-3 text-[#8C979C]">
              &gt; News
            </h1>
            <h1 className="lg:ml-20 flex-col ml-5 text-md mt-3 text-[#8C979C]">
              &gt;  Annoucements
            </h1>
          </div>
          <div className="flex-row">
            <h1 className="flex-col lg:text-2xl text-balance font-bold  text-white lg:pt-14 pt-10 lg:ml-20 ml-5 ">
              INFORMATION
            </h1>
            <h1 className="lg:ml-20 flex-col ml-5 text-md mt-8 text-[#8C979C]">
              &gt; Pricing
            </h1>
            <h1 className="lg:ml-20 flex-col ml-5 text-md mt-3 text-[#8C979C]">
              &gt; Terms
            </h1>
            <h1 className="lg:ml-20 flex-col ml-5 text-md mt-3 text-[#8C979C]">
              &gt; Affliates
            </h1>

            <h1 className="lg:ml-20 flex-col ml-5 text-md mt-3 text-[#8C979C]">
              &gt; Blogs
            </h1>
          </div>
          <div className="flex-row">
            <h1 className="flex-row lg:text-2xl text-balance font-bold  text-white lg:pt-14 pt-10 lg:ml-20 ml-5 ">
              SUPPORT
            </h1>
            <h1 className="lg:ml-20 flex-col ml-5 text-md mt-8 text-[#8C979C]">
              &gt; Documentation
            </h1>
            <h1 className="lg:ml-20 flex-col ml-5 text-md mt-3 text-[#8C979C]">
              &gt; FAQs
            </h1>
            <h1 className="lg:ml-20 flex-col ml-5 text-md mt-3 text-[#8C979C]">
              &gt; Forums
            </h1>
            <h1 className="lg:ml-20 flex-col ml-5 text-md mt-3 text-[#8C979C]">
              &gt; Contact
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default BottomNav
