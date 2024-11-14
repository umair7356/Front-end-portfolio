import React, { useState, useEffect } from "react";
import logo from "../../public/logo.png";

function Navbar() {
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const navItem = (
    <>
      <li>
        <a href="/" className="hover:text-yellow-500 font-bold">
          About
        </a>
      </li>
      <li>
        <a href="/portfolio" className="hover:text-yellow-500 font-bold">
          Portfolio
        </a>
      </li>
      <li>
        <a href="/testimonials" className="hover:text-yellow-500 font-bold">
          Testimonials
        </a>
      </li>
      <li>
        <a href="/services" className="hover:text-yellow-500 font-bold">
          Services
        </a>
      </li>
      <li>
        <a href="/blog" className="hover:text-yellow-500 font-bold">
          Blog
        </a>
      </li>
      <li>
        <a href="/our-Team" className="hover:text-yellow-500 font-bold">
          Our Team
        </a>
      </li>
      <li>
        <a href="/contact-us" className="hover:text-yellow-500 font-bold">
          Contact Us
        </a>
      </li>
    </>
  );

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // Scrolling down, hide the navbar
        setIsNavVisible(false);
      } else {
        // Scrolling up, show the navbar
        setIsNavVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]); // Only trigger on lastScrollY change

  return (
    <div>
      {/* Navbar Container */}
      <div
        className={`max-w-screen-2xl mx-auto fixed top-0 left-0 right-0 z-50 transition-all ease-in-out duration-300 ${
          isNavVisible
            ? "transform translate-y-0"
            : "transform -translate-y-full"
        }`}
      >
        <div className="navbar lg:px-10 md:px-0 sm:px-0">
          <div className="navbar-start md:max-w-full sm:max-w-full lg:max-w-full">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost text-black lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                {navItem}
              </ul>
            </div>
            <img src={logo} alt="Logo" />
          </div>

          {/* Navbar Center (Desktop) */}
          <div className="navbar-center text-white hidden lg:flex">
            <ul className="menu menu-horizontal space-x-3 px-1 font-normal">
              {navItem}
            </ul>
          </div>

          {/* Navbar End (Login Button) */}
          <div className="navbar-end">
            <a className="btn w-[90px]">Login</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
