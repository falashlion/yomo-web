import React from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import Pricing from "../components/Pricing";
import Group38 from "../assets/images/Group 38.png";
import Group39 from "../assets/images/Group 39.png";
import Countries from "../assets/images/countries.png";

export const HomePage = () => {
  return (
    <>
    <div className="bg-gradient-to-tr from-purple-100 via-white via-white to-blue-200">
    <div className="w-full min-h-screen overflow-hidden">
      {/* Header */}
      
      <Header />

      {/* Main Contents */}
      
      <section className="container mx-auto my-[12rem] px-2 lg:px-0 lg:my-[15rem] relative ">
        <h1 className="text-center font-bold text-[9vw] md:text-[6vw] z-10">
          Yomo Mobile Money
        </h1>
        <p className="text-center text-sm md:text-[20px] max-w-[800px] mx-auto text-gray-500 leading-8">
          Our primary audience includes mobile money users, prospective
          investors, business partners, and individuals interested in
          cutting-edge financial solutions
        </p>
        <div className="w-full flex justify-center">
          <button className="px-12 rounded-lg py-3 bg-black text-white mt-10">
            Sign up
          </button>
        </div>
        {/* Gradient */}
        <div className="absolute md:block hidden gradient1 w-[60rem] h-[60rem] -right-[30rem] top-12 rounded-full"></div>
      </section>

      {/* About Section */}
      <section className="container mx-auto h-fit flex flex-col lg:flex-row justify-center items-center gap-12 px-4 md:px-[4rem]">
        <div className="w-full mx-auto lg:w-1/2 flex flex-col justify-center md:pr-12 z-10">
          <h2 className="font-bold text-[3rem] mb-7 text-center lg:text-start">
            About us
          </h2>
          <p className="leading-8 md:leading-9 text-center lg:text-start text-gray-500 text-sm md:text-[16px] lg:text-lg">
            Yomo Mobile Money is a platform of financial services accessible via
            a smartphone or a QR code-linked USSD card for individuals without
            smartphones in Africa. It offers solutions that are accessible to
            everyone, even those who cannot access traditional banks. Thanks to
            Mobile Money with Yomo, finance becomes mobile and available to all.
          </p>
        </div>
        <div className="w-full lg:w-1/2 z-10 pl-12">
          <img src={Group38} alt="phones" />
        </div>
      </section>
    </div>
      {/* Services Section */}
      <div className="bg-gradient-to-tr from-purple-200 via-white via-white via-white to-blue-100 px-4">
      <section className="container mx-auto h-fit flex flex-col lg:flex-row justify-center items-center gap-12 px-4 md:px-[4rem] mt-20">
        <div className="w-full lg:w-1/2 z-10 pl-2">
          <img src={Group39} alt="phones" />
        </div>
        <div className="w-full mx-auto lg:w-1/2 flex flex-col justify-center md:pr-12 z-10">
          <h2 className="font-bold text-[2.5rem] text-center lg:text-start">
            Services
          </h2>
          <h3 className="text-center mt-3 font-bold lg:text-start text-[1.5rem]">
            Yomo Mobile Money provides the following services
          </h3>
          {/* List of Options */}
          <ul className="mt-7 flex flex-col gap-4 ml-8">
            <li className="flex gap-2 items-center text-gray-500">
              <div className="w-2 h-2 rounded-full bg-black opacity-35"></div>
              Open a mobile Money Account.
            </li>
            <li className="flex gap-2 items-center text-gray-500">
              <div className="w-2 h-2 rounded-full bg-black opacity-35"></div>
              Send Money
            </li>
            <li className="flex gap-2 items-center text-gray-500">
              <div className="w-2 h-2 rounded-full bg-black opacity-35"></div>
              Pay bill, services and goods
            </li>
            <li className="flex gap-2 items-center text-gray-500">
              <div className="w-2 h-2 rounded-full bg-black opacity-35"></div>
              Recharge your phone credit
            </li>
            <li className="flex gap-2 items-center text-gray-500">
              <div className="w-2 h-2 rounded-full bg-black opacity-35"></div>
              Make cash withdrawal from your account
            </li>
            <li className="flex gap-2 items-center text-gray-500">
              <div className="w-2 h-2 rounded-full bg-black opacity-35"></div>
              Benefits from cashback
            </li>
            <li className="flex gap-2 items-center text-gray-500">
              <div className="w-2 h-2 rounded-full bg-black opacity-35"></div>
              Access Microcredits for education in countries with low school enrollment rates.
            </li>
          </ul>
        </div>
      </section>
      </div>
      {/* Pricing Section */}
      <div className="bg-gradient-to-tr from-purple-200 via-white via-white via-white to-blue-100 px-4">
      <section className="">
        <div className="w-full mx-auto lg:w-1/2 flex flex-col justify-center md:pr-12 z-10 mt-12">
          <h2 className="font-bold text-[3rem] mb-7 text-center">
            PRICING
          </h2>
          <p className="leading-8 md:leading-9 text-center text-gray-500 text-sm md:text-[16px] lg:text-lg">
            We charge minimal fees, only 1% per transaction, for our services. This means that even a low-income individual can benefit from the advantages of Yomo's financial services. Details on pricing are available on our mobile application; feel free to download it.
          </p>
        </div>
        <Pricing />
        <div className="w-full flex justify-center mt-30">
          <button className="px-12 rounded-lg py-3 bg-black text-white mt-10 mb-10">
            Get Yomo app
          </button>
        </div>
      </section>
      </div>
      {/* Country Section */}
      <section className="container mx-auto h-fit flex flex-col rounded-3xl lg:flex-row justify-center items-center gap-12 px-4 md:px-[4rem] mt-20 bg-black mb-20">
        <div className="w-full mx-auto lg:w-1/2 flex flex-col justify-center md:pr-12 z-10 mt-12">
          <h2 className="font-bold text-[3rem] mb-7 text-center text-white">
            Our market
          </h2>
          <img src={Countries} alt="countries" className="w-full h-auto mx-auto mb-10" />
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
    </>
  );
};
