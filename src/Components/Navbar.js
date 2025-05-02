import React, { useState } from 'react';
import Img1 from '../Assets/iitm logo.png';
import Img2 from '../Assets/OIE Logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed top-0 left-0 w-full bg-white text-black p-1 z-50">
      <div className="flex items-center justify-between ml-8">
        <a className="flex items-center" onClick={() => (window.location.href = "/")}>
          <img src={Img1} className="w-22 h-12 mr-2" alt="Image1" />
          <img src={Img2} className="w-22 h-20 mr-2" alt="Image2" />
        </a>
        {/* Hamburger Icon for Small Screens */}
        <div className="md:hidden mr-8">
          <button
            className="text-black focus:outline-none"
            onClick={toggleMenu}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
            </svg>
          </button>
        </div>
        {/* Menu for larger screens */}
        <div className={`md:flex gap-10 mr-12 font-dmsans text-sm hidden md:block`}>
          <button
            type="button"
            onClick={() => (window.location.href = "/")}
            className="active:scale-[.90] active:duration-70 hover:scale-[1.02] transition-all ease-in-out md:pt-4"
          >
            Home
          </button>
          <button
            type="button"
            onClick={() => (window.location.href = "/about_us")}
            className="active:scale-[.90] active:duration-70 hover:scale-[1.02] transition-all ease-in-out md:pt-4"
          >
            About
          </button>
          <div className="relative group">
            <button
              type="button"
              className={`active:scale-[.90] active:duration-70 hover:scale-[1.02] transition-all ease-in-out md:pt-4 'border-b-2 border-blue-800 text-blue-800' : ''}`}
            >
              Activities
            </button>
            <div className="absolute hidden bg-white text-black mt-1 shadow-lg rounded-sm group-hover:block right-[-28px] border-t-4 border-blue-700">
            <a href = "https://cfi.iitm.ac.in/"target="_blank" rel="noopener noreferrer">
            <button
                className="block px-1 py-2 text-sm hover:bg-gray-200 w-full text-left "
              
              >
                CFI
              </button></a>
              <a href = "https://nirmaan.iitm.ac.in/"target="_blank" rel="noopener noreferrer"><button
                className="block px-1 py-2 text-sm hover:bg-gray-200 w-full text-left mr-8 "
              >
                 Nirmaan
              </button></a>

              <a href = "https://www.youtube.com/@InnovationEntrepreneurship"target="_blank" rel="noopener noreferrer">
              <button
                className="block  px-1 py-2 text-sm hover:bg-gray-200 w-full text-left mr-8"
              >
                 Innosphere
              </button></a>
             <button className='/* block  px-1 py-2 text-sm hover:bg-gray-200 w-full text-left mr-8' onClick={() => (window.location.href = "/ms_entrepreneurship/home")}>
                Ms in Entrepreneurship

             </button>
            </div>
          </div>
          <button
            type="button"
            onClick={() => (window.location.href = "/news")}
            className="active:scale-[.90] active:duration-70 hover:scale-[1.02] transition-all ease-in-out md:pt-4"
          >
            News
          </button>
          <button
            type="button"
            onClick={() => (window.location.href = "/contact")}
            className="active:scale-[.90] active:duration-70 hover:scale-[1.02] transition-all ease-in-out md:pt-4"
          >
            Contact us
          </button>
        </div>
      </div>

      {/* Menu for smaller screens */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-start gap-2 mt-4 p-4 bg-white shadow-lg">
          <button
            type="button"
            onClick={() => (window.location.href = "/")}
            className="text-black w-full"
          >
            Home
          </button>
          <button
            type="button"
            onClick={() => (window.location.href = "/about_us")}
            className="text-black w-full"
          >
            About
          </button>
          <button
            type="button"
            onClick={() => (window.location.href = "/news")}
            className="text-black w-full"
          >
            News
          </button>
          <button
            type="button"
            onClick={() => (window.location.href = "/contact")}
            className="text-black w-full"
          >
            Contact us
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
