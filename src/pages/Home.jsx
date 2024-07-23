import React from "react";
import { Link } from "react-router-dom";
import Cart from "../assets/cart.svg";
import Banner from "../assets/banner.svg";

function Home() {
  return (
    <>
      {/* <section className="flex flex-col sm:flex-row justify-between items-center bg-[#EAFFE1]  px-16">
        <div className="sm:w-1/2 flex flex-col justify-center items-start gap-4 sm:py-20">
          <h1
            className=" sm:w-2/3 text-[2.6rem]  font-extrabold leading-snug nunito
          text-text "
          >
            Your Prescription for Affordable Health Solutions!
          </h1>
          <p className="text-text text-md poppins-regular">
            Elevate your health journey with exclusive discounts and
            unparalleled convenience. Your path to well-being starts
            here, where every purchase is a prescription for savings.
          </p>
          <Link
            to={"/shop"}
            className="flex items-center justify-center bg-secondary text-white poppins-regular py-3 px-4
            rounded-lg gap-2 hover:bg-primary transition-all duration-150 focus:bg-primary"
          >
            Start Shopping <img src={Cart} alt="" />
          </Link>
        </div>
        <div className="w-1/2 flex items-end justify-center">
          <img className="w-[80%]" src={Banner} alt="" />
        </div>
      </section> */}

      {/* Mobile */}

      <section className="flex flex-col bg-[#EAFFE1] justify-center items-center sm:flex-row">
        {/* Information */}
        <div
          className="flex flex-col justify-center items-start px-12 pt-12 gap-4 sm:px-16 sm:w-1/2
         sm:py-20"
        >
          <h1
            className="text-3xl nunito font-extrabold text-text sm:w-3/4 sm:text-[2.6rem] 
          sm:leading-snug"
          >
            Your Prescription for Affordable Health Solutions!
          </h1>

          <p className="text-text text-lg poppins-regular sm:text-lg">
            Elevate your health journey with exclusive discounts and
            unparalleled convenience. Your path to well-being starts
            here, where every purchase is a prescription for savings.
          </p>

          <Link
            to={"/shop"}
            className="flex bg-secondary py-2 px-4 gap-2 nunito text-lg rounded-md text-slate-100
            hover:bg-primary transition-all duration-200"
          >
            Start Shopping <img src={Cart} alt="" />
          </Link>
        </div>
        {/* Banner */}
        <div className="sm:w-1/2">
          <img className="sm:w-[75%] sm:ml-32" src={Banner} alt="" />
        </div>
      </section>


      
    </>
  );
}

export default Home;
