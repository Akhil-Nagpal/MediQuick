import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { id: 1, label: "Home", slug: "" },
    { id: 2, label: "Shop", slug: "/shop" },
    { id: 3, label: "About Us", slug: "/about" },
    { id: 4, label: "Contact Us", slug: "/contact" },
  ];

  const handleNavbar = () => {
    setTimeout(() => {
      setIsOpen(false);
    }, 100);
  };

  return (
    <>
      <header className="hidden bg-[#EAFFE1] relative sm:flex justify-between z-50">
        <Link className="flex gap-2 items-center m-4" to={"/"}>
          <img src="/Logo.svg" alt="MediQuick-Logo" />
          <h1 className="text-2xl font-bold kanit-bold text-primary">
            MediQuick
          </h1>
        </Link>

        <div className="hidden sm:flex items-center gap-2">
          {navLinks?.map((item) => {
            return (
              <nav key={item?.id} className="inter text-md">
                <NavLink
                  to={item?.slug}
                  className="hover:bg-secondary hover:text-white px-4 py-3 rounded-lg transition-all 
                    duration-150"
                >
                  {item?.label}
                </NavLink>
              </nav>
            );
          })}
        </div>

        <div className="hidden md:flex mr-4 gap-4 md:justify-center md:items-center">
          {/* LOGIN BUTTON */}
          <button
            type="button"
            className="text-white bg-primary hover:bg-secondary transition-all duration-150
             active:bg-green-600 font-medium rounded-lg text-sm 
              active:outline-none px-4 py-3"
          >
            Log-In
          </button>
          {/* SIGN UP BUTTON */}
          <button
            type="button"
            className=" text-sm font-medium 
            text-primary rounded-lg border border-secondary
            hover:bg-[#EAFFE1] hover:text-primary transition-all duration-150
            active:bg-[#E0FFD2] px-4 py-2.5"
          >
            Sign Up
          </button>
        </div>
      </header>

      {/* Mobile */}

      <header className="sm:hidden bg-[#EAFFE1] p-4 flex justify-between items-center w-screen overflow-x-hidden">
        <Link to={"/"} className="flex gap-1 items-center">
          <img
            className="w-8 h-8 "
            src="/public/Logo.svg"
            alt="MediQuick-Logo"
          />
          <h1 className="text-lg font-bold kanit-bold text-primary">
            MediQuick
          </h1>
        </Link>
        <div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="bg-primary p-1 rounded-lg flex justify-center"
          >
            {isOpen ? (
              <img className="w-7" src="/public/cross.svg" alt="" />
            ) : (
              <img className="w-7" src="/public/menu.svg" alt="" />
            )}
          </button>

          <div
            className={`bg-black/10 fixed inset-0 ${
              isOpen ? "block" : "hidden"
            }`}
            onClick={() => setIsOpen(false)}
          ></div>

          <nav
            className={` ${
              isOpen ? "translate-x-0" : "translate-x-full"
            } flex flex-col gap-3 justify-start items-center absolute right-0
           bg-gray-800 px-6 py-10 mt-4 text-white h-screen transition-all duration-300`}
          >
            {navLinks?.map((item) => {
              return (
                <div key={item?.id}>
                  <NavLink
                    onClick={handleNavbar}
                    className="inter text-sm hover:bg-secondary w-10"
                    to={item?.slug}
                  >
                    {item?.label}
                  </NavLink>
                </div>
              );
            })}
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;

// #59A52C - PRIMARY
// #6FCA3A - SECONDARY
// #E6E6E6 - ACCENT
// #FFFFFF - BACKGROUND
// #1E2022 - TEXT
