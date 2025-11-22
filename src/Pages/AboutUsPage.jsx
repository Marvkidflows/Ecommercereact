import React from "react";
import Navbar from "../Components/Navbar";
import BgImage from "../assets/banner-04.jpg";
import SlideImg from "../assets/slide-image.jpg";
import Team1 from '../assets/team1.png'
import Team2 from '../assets/team2.png'
import Team3 from '../assets/team3.png'
import Team4 from '../assets/team4.png'
import Team5 from '../assets/team5.png'
import Team6 from '../assets/team6.png'
import Banner from '../assets/banner-05.jpg'
import { FaFacebookF, FaGooglePlusG, FaInstagram, FaTwitter } from "react-icons/fa";
import QualityProduct from "../Components/QualityProduct";
import Footer from "../Components/Footer";

const AboutUsPage = () => {
  return (
    <>
      {/* HERO SECTION */}
      <section
        className="relative h-[80vh] bg-center bg-no-repeat bg-cover bg-fixed shadow-lg flex flex-col"
        style={{ backgroundImage: `url(${BgImage})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gray-900/50 z-0"></div>

        {/* Navbar */}
        <div className="relative z-10">
          <Navbar />
        </div>

        {/* Centered Hero Text */}
        <div className="relative z-10 flex flex-1 items-center justify-center">
          <h1 className="text-white text-5xl font-bold tracking-wide">
            About Us
          </h1>
        </div>
      </section>

      {/* WHO WE ARE SECTION */}
      <section className="bg-[#f8fafc] py-16 px-3 md:px-16">
        {/* White box container */}
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 bg-white  rounded-sm overflow-hidden">
          {/* Left Side: Text */}
          <div className="p-10 md:p-16 flex flex-col justify-center">
            <div className="h-1 w-16 bg-blue-600 mb-4"></div>
            <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
            <p className="text-gray-700 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Nam
              nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris
              vitae erat consequat auctor eu in elit.
            </p>
          </div>

          {/* Right Side: Full Image */}
          <div className="w-full h-full">
            <img
              src={SlideImg}
              alt="Team working together"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
{/* OUR TEAM SECTION */}
{/* OUR TEAM SECTION */}
{/* OUR TEAM SECTION */}
<section className="bg-white py-16 px-4 md:px-10">
  <div className="max-w-6xl mx-auto text-center">
    {/* Heading */}
    <div className="mb-12">
      <div className="h-1 w-14 bg-blue-600 mx-auto mb-3"></div>
      <h4 className="text-gray-600 uppercase tracking-wide text-sm mb-1">
        A Few Words About
      </h4>
      <h2 className="text-3xl font-bold mb-3">Our Team</h2>
      <p className="text-gray-600 max-w-2xl mx-auto text-sm leading-relaxed">
        Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris
        vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad
        litora torquent per conubia nostra.
      </p>
    </div>

    {/* CONSTRAINED INNER WRAPPER:
        on md+ set width to ~ (cardWidth * 3) + small gutters so grid can't stretch */}
   <div className="mx-auto w-[660px]">
  <div className="grid grid-cols-3 gap-x-6 gap-y-6 place-items-center">
    {[Team1, Team2, Team3, Team4, Team5, Team6].map((team, i) => (
      <div
        key={i}
        className="bg-[#f9fafb] rounded-md p-6 shadow-sm hover:shadow-md transition text-center w-[216px] h-[220px] flex flex-col items-center justify-center"
      >
        <img
          src={team}
          alt={`Member ${i + 1}`}
          className="w-24 h-24 object-cover rounded-full mb-3"
        />
        <h3 className="text-base font-semibold">Member {i + 1}</h3>
        <p className="text-xs text-gray-500">Role</p>
      </div>
    ))}
  </div>
</div>
  </div>
</section>

   <section
      className="mt-11 relative h-[70vh] bg-center bg-no-repeat bg-cover  flex"
      style={{ backgroundImage: `url(${Banner})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      {/* Center box */}
      <div className="relative z-10 bg-[#F5F7F9] flex flex-col justify-center items-center w-full max-w-[350px] mx-auto h-full text-center ">
        {/* Blue divider line above */}
        <div className="w-10 h-[2px] bg-blue-600 mb-5"></div>

        {/* Title */}
        <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-8 tracking-wide">
          Follow Us
        </h3>

        {/* Icons container — slightly wider than title */}
        <div className="flex justify-center gap-10 text-gray-700 text-[17px]">
          <FaFacebookF className="hover:text-blue-600 transition-colors duration-200 cursor-pointer" />
          <FaTwitter className="hover:text-sky-500 transition-colors duration-200 cursor-pointer" />
          <FaInstagram className="hover:text-pink-500 transition-colors duration-200 cursor-pointer" />
          <FaGooglePlusG className="hover:text-red-500 transition-colors duration-200 cursor-pointer" />
        </div>
      </div>
    </section>
    <section className="h-[80vh]">
      <QualityProduct/>
      <Footer/>
    </section>
    </>
  );
};

export default AboutUsPage;

    


