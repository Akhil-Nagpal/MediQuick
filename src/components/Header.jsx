import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Cross from "../assets/cross.svg";
import Menu from "../assets/menu.svg";
import Logo from "../assets/Logo.svg";

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
        <Link
          className="hidden sm:flex gap-2 items-center m-4"
          to={"/"}
        >
          <img src={Logo} alt="" />
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

      <header
        className="sm:hidden bg-[#EAFFE1] p-4 h-[68px] flex justify-between items-center relative 
        overflow-hidden shadow-sm z-10"
      >
        <Link to={"/"} className="sm:hidden flex gap-1 items-center">
          <img className="w-8 h-8 " src={Logo} alt="" />
          <h1 className="text-lg font-bold kanit-bold text-primary">
            MediQuick
          </h1>
        </Link>
        {/* Masing Overlay */}
        <div
          className={`bg-black/10 fixed inset-0 ${
            isOpen ? "block" : "hidden"
          }`}
          onClick={() => setIsOpen(false)}
        ></div>
        {/* Toogle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-primary p-1 rounded-lg flex justify-center"
        >
          {isOpen ? (
            <img className="w-7" src={Cross} alt="" />
          ) : (
            <img className="w-7" src={Menu} alt="" />
          )}
        </button>
        {/* NavLinks */}

        <nav
          className={` ${
            isOpen ? "" : "translate-x-full"
          } fixed right-0 top-[68px] flex flex-col items-center gap-4 bg-gray-700 px-6 py-10
         text-white h-[calc(100vh-68px)] transition-all duration-300`}
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
