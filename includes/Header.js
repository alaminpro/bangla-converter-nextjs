import React, { useState } from "react";

export default function Header() {
  let [show, setShow] = useState(false);
  const handleResponsiveMenu = () => {
    setShow(!show);
  };
  return (
    <>
      <div className="bg-teal-500 p-6">
        <div className="container mx-auto">
          <nav className="flex items-center justify-between flex-wrap ">
            <div className="flex items-center flex-no-shrink text-white mr-6">
              <span className="font-semibold text-xl tracking-tight">
                Bangla Calculator
              </span>
            </div>
            <div className="block sm:hidden">
              <button
                onClick={handleResponsiveMenu}
                className="flex items-center px-3 py-2 border rounded text-teal-100 border-teal-light hover:text-white hover:border-white"
              >
                <svg
                  className="fill-current h-3 w-3"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Menu</title>
                  <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                </svg>
              </button>
            </div>
            <div
              className={`${
                show ? "block" : "hidden"
              } w-full flex-grow sm:flex sm:items-center sm:w-auto`}
            >
              <div className="text-sm sm:flex-grow">
                <a
                  href="#responsive-header"
                  className="no-underline block mt-4 sm:inline-block sm:mt-0 text-teal-100 hover:text-white mr-4"
                >
                  Home Page
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
