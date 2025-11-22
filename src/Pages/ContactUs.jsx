import React from "react";
import Banner from "../assets/banner-06.jpg";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
const ContactUs = () => {
  return (
    <>
      {/* ====== HERO SECTION ====== */}
      <section
        className="relative h-[65vh] bg-center bg-no-repeat bg-cover bg-fixed shadow-lg flex flex-col"
        style={{ backgroundImage: `url(${Banner})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gray-800/50 z-0"></div>

        {/* Navbar */}
        <div className="relative z-10">
          <Navbar />
        </div>

        {/* Centered Hero Text */}
        <div className="relative z-10 flex flex-1 items-center justify-center">
          <h1 className="text-white text-5xl font-bold tracking-wide">
            Contact Us
          </h1>
        </div>
      </section>

      {/* ====== CONTACT INFO SECTION ====== */}
      <section className="bg-[#F5F7F9] py-20 px-6">
        <div className="text-center mb-14">
          <h4 className="text-gray-600 text-sm font-semibold mb-2">
            Have any queries?
          </h4>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            We’re here to help.
          </h1>
          <div className="w-10 h-[2px] bg-gray-800 mx-auto"></div>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {/* Sales */}
          <div className="bg-white rounded-lg shadow-md py-10 px-6 text-center hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Sales</h3>
            <p className="text-gray-600 mb-4">
              Vestibulum ante ipsum primis in faucibus orci luctus.
            </p>
            <a href="#" className="text-blue-600 font-semibold">
              1800 123 4567
            </a>
          </div>

          {/* Complaints */}
          <div className="bg-white rounded-lg shadow-md py-10 px-6 text-center hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Complaints
            </h3>
            <p className="text-gray-600 mb-4">
              Vestibulum ante ipsum primis in faucibus orci luctus.
            </p>
            <a href="#" className="text-blue-600 font-semibold">
              1900 223 8899
            </a>
          </div>

          {/* Returns */}
          <div className="bg-white rounded-lg shadow-md py-10 px-6 text-center hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Returns
            </h3>
            <p className="text-gray-600 mb-4">
              Vestibulum ante ipsum primis in faucibus orci luctus.
            </p>
            <a href="#" className="text-blue-600 font-semibold">
              returns@mail.com
            </a>
          </div>

          {/* Marketing */}
          <div className="bg-white rounded-lg shadow-md py-10 px-6 text-center hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Marketing
            </h3>
            <p className="text-gray-600 mb-4">
              Vestibulum ante ipsum primis in faucibus orci luctus.
            </p>
            <a href="#" className="text-blue-600 font-semibold">
              1700 444 5578
            </a>
          </div>
        </div>
      </section>
      {/* ====== MESSAGE SECTION ====== */}
<section className="bg-[#F5F7F9] py-24 px-6">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-16">
    
    {/* LEFT SIDE */}
    <div className="w-full md:w-[48%] flex justify-end items-center">
      <div className="max-w-md text-center md:text-left">
        <h4 className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">
          Don't be a stranger!
        </h4>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
          You tell us. We listen.
        </h1>

        <p className="text-gray-600 leading-relaxed">
          Cras elementum finibus lacus nec lacinia. Quisque non convallis
          nisl, eu condimentum sem. Proin dignissim libero lacus, ut
          eleifend magna vehicula et. Nam mattis est sed tellus.
        </p>
      </div>
    </div>

    {/* RIGHT SIDE */}
    <div className="w-full md:w-[52%] flex justify-start items-center">
      <div className="bg-white rounded-xl shadow-lg p-10 w-full max-w-lg">
        <form className="space-y-4">
          <input
            type="text"
            placeholder="NAME"
            className="w-full border border-gray-300 rounded-sm p-3 focus:outline-none focus:border-blue-500 placeholder-gray-500 text-sm tracking-wide"
          />
          <input
            type="text"
            placeholder="SUBJECT"
            className="w-full border border-gray-300 rounded-sm p-3 focus:outline-none focus:border-blue-500 placeholder-gray-500 text-sm tracking-wide"
          />
          <input
            type="email"
            placeholder="EMAIL"
            className="w-full border border-gray-300 rounded-sm p-3 focus:outline-none focus:border-blue-500 placeholder-gray-500 text-sm tracking-wide"
          />
          
          {/* TEXTAREA */}
          <textarea
            rows="5"
            placeholder="MESSAGE"
            className="w-full border border-gray-300 rounded-sm p-3 focus:outline-none focus:border-blue-500 placeholder-gray-500 text-sm tracking-wide resize-none shadow-sm"
          ></textarea>

          {/* BUTTON (not full width) */}
          <button
            type="submit"
            className="bg-blue-600 text-white font-semibold py-3 px-10 rounded-sm hover:bg-blue-700 transition block"
          >
            SEND MESSAGE
          </button>
        </form>
      </div>
    </div>
  </div>

</section>
<section>
    <Footer/>
</section>

    </>
  );
};

export default ContactUs;
