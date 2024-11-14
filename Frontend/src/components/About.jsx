import React from 'react'

function About() {

  const skills = [
    { name: "Typography", percentage: 60, color: "bg-red-500", icon: "A" },
    { name: "Design", percentage: 82, color: "bg-yellow-500", icon: "✏️" },
    { name: "Development", percentage: 86, color: "bg-purple-500", icon: "💻" },
  ];

  return (
    <>
      <div>
        <h1 className="text-[#545454] mt-16 text-center font-bold text-4xl mb-4">
          About
        </h1>
        <p className="text-[#545454] text-base mt-10   lg:mx-44 text-center">
          It is an amazing one-page theme with great features that offers an
          incredible experience. It is easy to install, make changes, and adapt
          for your business. A modern design with clean lines and styling for a
          wide variety of content, exactly how a business design should be. You
          can add as many images as you want to the main header area and turn
          them into a slider.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row items-center mt-14 justify-around w-full p-4 space-y-6 sm:space-y-0 sm:space-x-6">
        {skills.map((skill, index) => (
          <div key={index} className="w-full sm:w-1/4">
            <div className="relative h-2 bg-gray-200 rounded-full overflow-hidden">
              <div
                className={`${skill.color} h-full rounded-full`}
                style={{ width: `${skill.percentage}%` }}
              >
                <span
                  className="absolute -top-8 right-0 transform -translate-x-1/2 bg-opacity-90 bg-gray-800 text-white text-sm px-2 py-1 rounded-lg"
                  style={{ right: `${100 - skill.percentage}%` }}
                >
                  {skill.percentage}%
                </span>
              </div>
            </div>
            <div className="flex items-center justify-center mt-2 space-x-2 text-base text-gray-800">
              <span>{skill.icon}</span>
              <span>{skill.name}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default About
