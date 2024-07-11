import React, { useState } from 'react';
import {  NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from "../assets/images/yomo 2.png";


export const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full px-2 lg:px-0 container mx-auto sticky bg-white bg-opacity-25 top-0 z-50">
      {/* desktop navigation */}
      <div className="hidden lg:flex justify-between mt-5 items-center bg-white bg-opacity-25">
        {/* logo */}
        <NavLink to="/">
          <img src={Logo} alt="yomo Logo" />
        </NavLink>
        {/* navNavLinks */}
        <nav className="flex gap-7 items-center text-gray-600">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/coming-soon">About</NavLink>
          <NavLink to="/coming-soon">Services</NavLink>
          <NavLink to="/coming-soon">Pricing</NavLink>
          <NavLink to="/coming-soon">Our Market</NavLink>
          <NavLink to="/coming-soon">Blog</NavLink>
        </nav>
        {/* button */}
        <NavLink
          to="/coming-soon"
          className="bg-black text-white font-semibold px-4 py-4 rounded"
        >
          Get yomo app
        </NavLink>
      </div>
      {/* mobile navigation */}
      <div className="lg:hidden flex justify-between mt-5 items-center">
        {/* logo */}
        <NavLink to="/">
          <img src={Logo} alt="yomo Logo" />
        </NavLink>
        {/* icon for the menu */}
        <div onClick={() => setOpen(!open)} className="cursor-pointer">
          {open ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>
      </div>
      {/* mobile menu */}
      {open && (
        <div className="lg:hidden flex flex-col items-center gap-5 w-full fixed top-0 left-0 h-full bg-white shadow-lg pt-12">
          <NavLink to="/coming-soon" onClick={() => setOpen(false)}>Home</NavLink>
          <NavLink to="/coming-soon" onClick={() => setOpen(false)}>About</NavLink>
          <NavLink to="/coming-soon" onClick={() => setOpen(false)}>Services</NavLink>
          <NavLink to="/coming-soon" onClick={() => setOpen(false)}>Pricing</NavLink>
          <NavLink to="/coming-soon" onClick={() => setOpen(false)}>Our Market</NavLink>
          <NavLink to="/coming-soon" onClick={() => setOpen(false)}>Blog</NavLink>
          <NavLink
            to="/coming-soon"
            className="bg-black text-white font-semibold px-4 py-4 rounded"
            onClick={() => setOpen(false)}
          >
            Get yomo app
          </NavLink>
        </div>
      )}
    </div>
  );
};
