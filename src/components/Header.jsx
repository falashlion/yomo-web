import React from 'react'
import { useState } from 'react';
// import { FaClose } from 'react-icons/fa';

export const Header = () => {
    const [open, isOpen] = useState(false);

  return (
    <div className="w-full px-2 lg:px-0 container mx-auto sticky bg-white top-0">
      {/* desktop navigation */}
      <div className="hidden lg:flex justify-between mt-5 items-center">
        {/* logo */}
        <a href="#">
          <img src="/public/yomo 2.png" alt="yomo Logo" />
        </a>
        {/* navlinks */}
        <nav className="flex gap-7 items-center text-gray-600">
          <p>Home</p>
          <p>About</p>
          <p>Services</p>
          <p>Pricing</p>
          <p>Our Market</p>
          <p>Blog</p>
        </nav>
        {/* button */}
        <a
          href="#"
          className="bg-black text-white font-semibold px-4 py-4 rounded"
        >
          Get yomo app
        </a>
      </div>
      {/* mobile navigation */}
      <div className="lg:hidden flex justify-between mt-5">
        {/* logo */}
        <a href="#">
          <img src="/public/yomo 2.png" alt="yomo Logo" />
        </a>
        {/* icon for the manu */}
        <div>
          
        </div>
        <div className="right-0 hidden gap-5 flex-col items-center w-[20rem] min-w-[40vw] fixed h-full -top-2 pt-12 shadow-lg bg-white">
          <p>Home</p>
          <p>About</p>
          <p>Services</p>
          <p>Pricing</p>
          <p>Our Market</p>
          <p>Blog</p>
          <a
            href="#"
            className="bg-black text-white font-semibold px-4 py-4 rounded"
          >
            Get yomo app
          </a>
        </div>
      </div>
    </div>
  );
}
