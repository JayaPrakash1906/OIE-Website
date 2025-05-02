import React, { useState } from 'react';
import Img1 from '../Assets/iitm logo.png';
import Img2 from '../Assets/OIE Logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isActivitiesOpen, setIsActivitiesOpen] = useState(false); // For mobile dropdown

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleActivities = () => setIsActivitiesOpen(!isActivitiesOpen);

  return (
    <div className="fixed top-0 left-0 w-full bg-white text-black p-2 z-50 shadow-md">
      <div className="flex items-center justify-between px-4">
        <a className="flex items-center" onClick={() => (window.location.href = "/")}>
          <img src={Img1} className="w-22 h-12 mr-2" alt="IITM Logo" />
          <img src={Img2} className="w-22 h-20" alt="OIE Logo" />
        </a>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button
            className="text-black focus:outline-none"
            onClick={toggleMenu}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-10 mr-12 font-dmsans text-sm">
          <button onClick={() => (window.location.href = "/")} className="hover:scale-[1.02] transition-all md:pt-4">Home</button>
          <button onClick={() => (window.location.href = "/about_us")} className="hover:scale-[1.02] transition-all md:pt-4">About</button>

          <div className="relative group md:pt-4">
            <button className="hover:scale-[1.02] transition-all">Activities</button>
            <div className="absolute hidden bg-white text-black mt-1 shadow-lg rounded-sm group-hover:block right-[-28px] border-t-4 border-blue-700">
              <a href="https://cfi.iitm.ac.in/" target="_blank" rel="noopener noreferrer">
                <button className="block px-4 py-2 hover:bg-gray-200 w-full text-left">CFI</button>
              </a>
              <a href="https://nirmaan.iitm.ac.in/" target="_blank" rel="noopener noreferrer">
                <button className="block px-4 py-2 hover:bg-gray-200 w-full text-left">Nirmaan</button>
              </a>
              <a href="https://www.youtube.com/@InnovationEntrepreneurship" target="_blank" rel="noopener noreferrer">
                <button className="block px-4 py-2 hover:bg-gray-200 w-full text-left">Innosphere</button>
              </a>
              <button className="block px-4 py-2 hover:bg-gray-200 w-full text-left"
                onClick={() => (window.location.href = "/ms_entrepreneurship/home")}>
                MS in Entrepreneurship
              </button>
            </div>
          </div>

          <button onClick={() => (window.location.href = "/news")} className="hover:scale-[1.02] transition-all md:pt-4">News</button>
          <button onClick={() => (window.location.href = "/contact")} className="hover:scale-[1.02] transition-all md:pt-4">Contact us</button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col gap-2 mt-4 p-4 bg-white shadow-lg">
          <button onClick={() => (window.location.href = "/")} className="text-black text-left w-full px-2 py-2">Home</button>
          <button onClick={() => (window.location.href = "/about_us")} className="text-black text-left w-full px-2 py-2">About</button>

          <button onClick={toggleActivities} className="text-black text-left w-full font-semibold flex justify-between items-center px-2 py-2">
            Activities
            <span>{isActivitiesOpen ? '▲' : '▼'}</span>
          </button>

          {isActivitiesOpen && (
            <div className="pl-4">
              <a href="https://cfi.iitm.ac.in/" target="_blank" rel="noopener noreferrer">
                <button className="text-black text-left w-full px-2 py-1 hover:bg-gray-200">CFI</button>
              </a>
              <a href="https://nirmaan.iitm.ac.in/" target="_blank" rel="noopener noreferrer">
                <button className="text-black text-left w-full px-2 py-1 hover:bg-gray-200">Nirmaan</button>
              </a>
              <a href="https://www.youtube.com/@InnovationEntrepreneurship" target="_blank" rel="noopener noreferrer">
                <button className="text-black text-left w-full px-2 py-1 hover:bg-gray-200">Innosphere</button>
              </a>
              <button
                onClick={() => (window.location.href = "/ms_entrepreneurship/home")}
                className="text-black text-left w-full px-2 py-1 hover:bg-gray-200"
              >
                MS in Entrepreneurship
              </button>
            </div>
          )}

          <button onClick={() => (window.location.href = "/news")} className="text-black text-left w-full px-2 py-2">News</button>
          <button onClick={() => (window.location.href = "/contact")} className="text-black text-left w-full px-2 py-2">Contact us</button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
