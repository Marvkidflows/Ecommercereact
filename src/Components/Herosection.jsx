import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Herosection = () => {
   useEffect(() => {
     AOS.init({
      duration: 2000,      // still smooth and slow
     once: false,         // repeat animation when you scroll back
     offset: 50,          // smaller trigger distance
     easing: "ease-in-out",
     });
   }, []);
  return (
    <section
      className="relative h-screen min-h-[100vh] 
      bg-[url('https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2019/12/home-new-bg-free-img.jpg')]
      bg-center bg-no-repeat bg-cover bg-fixed shadow-lg"
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-40 z-0 pointer-events-none"></div>

      {/* Navbar (above overlay) */}
      <div className="relative z-20">
        <Navbar bgColor="bg-black/10" textColor="text-white"/>
      </div>

      {/* Hero Content */}
      <div className="absolute inset-0 flex items-center px-20 z-10">
        <div className="text-white" data-aos="zoom-in" >
          <h1 className="text-[2.5rem] sm:text-[3.5rem] lg:text-[4.2rem] font-semibold leading-tight">
            Raining Offers For <br /> Cold Winter!
          </h1>

          <h2 className="text-[1.3rem] sm:text-[1.5rem] mt-3">
            25% Off On ALL Products
          </h2>

          <div className="flex flex-wrap gap-4 mt-6">
            <Link to="/everything">
              <button className="bg-white text-black px-8 py-3 rounded-md hover:bg-black hover:text-white transition-all duration-500">
                Shop Now
              </button>
            </Link>

            <button className="border border-white px-8 py-3 rounded-md text-white hover:bg-white hover:text-black transition-all duration-500">
              Find More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Herosection;
