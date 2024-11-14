import React from "react";
import bg from "../../public/bg.jpg";

function Banner() {
  return (
    <>
      <div
        className="relative flex items-center justify-center bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        <div className="relative z-10 text-center mt-48 text-white">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 md:px-8 sm:px-8">
            Clean<span className="text-yellow-500">.</span> Slick
            <span className="text-yellow-500">.</span> Pixel Perfect
          </h1>
          <p className="text-base sm:text-xl md:text-xl lg:text-base mb-8 sm:px-4 md:px-8 lg:px-80">
            Lldy is a great one-page theme, perfect for developers and designers
            but also for someone who just wants a new website for their
            business. Try it now!
          </p>

          <div className="flex flex-col lg:flex-row justify-center h-96 items-center space-y-4 lg:space-y-0 lg:space-x-20">
            <button className="px-16 sm:px-12 md:px-10 lg:px-20 py-3 sm:py-3 md:py-4 bg-transparent hover:bg-blue-900 hover:border border-2 text-white font-semibold rounded-md transition duration-200">
              Learn More
            </button>
            <button className="px-16 sm:px-8 md:px-10 lg:px-20 py-3 sm:py-3 md:py-4 bg-yellow-500 hover:bg-purple-700 hover:border border-2 text-white font-semibold rounded-md transition duration-200">
              Download
            </button>
          </div>
        </div>
      </div>

      {/* This will add some scrollable content to test the effect */}
      <div className="bg-white py-16 ">
        <h2 className="text-3xl text-center font-bold mb-8">More Content</h2>
        <p className="text-lg text-center max-w-4xl mx-auto mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          lacinia dui nec orci fermentum, eu consequat nisi placerat. Etiam
          fermentum quam risus, sit amet cursus nunc pretium nec. Nulla
          facilisi. Integer a nisi ac libero facilisis scelerisque. Duis
          convallis erat a felis interdum, at mollis elit aliquet.
        </p>
        <p className="text-lg text-center max-w-4xl mx-auto mb-8">
          Cras non hendrerit turpis. Nam tempor purus vitae mi congue, vitae
          pharetra ipsum venenatis. Phasellus auctor auctor libero sit amet
          volutpat. Mauris malesuada justo a augue gravida, non cursus metus
          euismod. Fusce scelerisque dolor sed elit scelerisque, ac posuere
          libero tincidunt.
        </p>
      </div>
    </>
  );
}

export default Banner;
