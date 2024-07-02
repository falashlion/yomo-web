import React from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export const HomePage = () => {
  return (
    <div className="w-full min-h-screen overflow-hidden">
      {/* header */}
      <div>
        <Header />
      </div>

      {/* main contents */}
      <section className="container mx-auto my-[12rem] px-2 lg:px-0 lg:my-[15rem] relative">
        <h1 className="text-center font-bold text-[9vw] md:text-[6vw] z-10">
          Yomo Mobile Money
        </h1>
        <p className="text-center text-sm md:text-[20px] max-w-[800px] mx-auto text-gray-500 leading-8">
          Our primary audience includes mobile money users, prospective
          investors, business partners, and individuals interested in
          cutting-edge financial solutions
        </p>
        <div className="w-full flex justify-center ">
          <button className="px-12 rounded py-3 bg-black text-white mt-10">
            Sign up
          </button>
        </div>
        {/* gradient */}
        <div className="absolute mg:block hidden gradient1 w-[60rem] h-[60rem] -right-[30rem] top-12 rounded-full"></div>
      </section>

      {/* about section */}
      <section className="container mx-auto h-fit flex flex-col lg:flex-row justify-center items-center gap-12 px-4 md:px-[4rem]">
        <div className="w-full mx-auto lg:w-1/2 flex flex-col justify-center md:pr-12 z-10">
          <h2 className="font-bold text-[3rem] mb-7 text-center lg:text-start">
            About us
          </h2>
          <p className="leading-8 md:leading-9 text-center lg:text-start text-gray-500 text-sm md:text-[16px] lg:text-lg">
            Yomo Mobile Money is a platform of financial services accessible via
            a smartphone or a QR code-liinked USSD card for individuals without
            smartphones in Africa. It offers solutions that are accessible to
            everyone, even those who cannot access traditional banks, thansk to
            Mobile Money with Yomo, finance becomes mobile and avaliable to all
          </p>
        </div>
        <div className="w-full lg:w-1/2 z-10 pl-12">
          <img src="/public/Group 38.png" alt="phones" />
        </div>
      </section>

      {/* services section */}
      <section className="w-full my-[12rem] px-2">
        <div className="w-full lg:w-1/2"></div>
        <div className="w-full lg:w-1/2">
          <h2 className="font-bold text-[2.5rem] text-center lg:text-start">
            Services
          </h2>
          <h3 className="text-center mt-3 font-bold lg:text-start">
            Yomo Mobile Money provide the following services
          </h3>
          {/* list of options */}
          <ul className="mt-3 flex flex-col gap-3">
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
              Make acsh withdrawal from your account
            </li>
            <li className="flex gap-2 items-center text-gray-500">
              <div className="w-2 h-2 rounded-full bg-black opacity-35"></div>
              Benafits from cashback
            </li>
          </ul>
        </div>
      </section>

      {/* footer page */}
      <Footer />
    </div>
  );
};
