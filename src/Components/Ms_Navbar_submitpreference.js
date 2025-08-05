import React, { useState, useEffect } from 'react';
import Img1 from '../Assets/Activities/bg.jpg';
import { FaSearch, FaBars, FaTimes } from 'react-icons/fa';

const Ms_Entrepreneurship = () => {
  const [activePage, setActivePage] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const currentPath = window.location.pathname;
    setActivePage(currentPath);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleNavClick = (path) => {
    window.location.href = path;
    setMenuOpen(false);
  };

  return (
    <div>
      {/* Banner */}
      <div className="text-center bg-gray-300 py-2 font-dmsans">
        <p className="text-sm font-semibold">Applications Closed for July 2025</p>
      </div>

      {/* Background Image Header */}
      <div
        className="w-full h-[250px] text-white"
        style={{
          backgroundImage: `url(${Img1})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="flex flex-col h-full bg-black bg-opacity-40">
          {/* Navbar */}
          <div className="flex justify-between items-center px-6 pt-4">
            <div className="text-lg font-semibold"></div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-6 text-sm font-medium">
              {navLinks(handleNavClick, activePage)}
            </div>

            {/* Hamburger Icon for Mobile */}
            <div className="md:hidden text-xl cursor-pointer" onClick={toggleMenu}>
              {menuOpen ? <FaTimes /> : <FaBars />}
            </div>
          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <div className="md:hidden flex flex-col space-y-4 px-6 py-4 text-sm font-medium bg-black bg-opacity-70 backdrop-blur-sm">
              {navLinks(handleNavClick, activePage)}
            </div>
          )}

          {/* Main Heading */}
          <div className="flex items-center justify-center flex-grow text-center px-4">
            <h1 className="text-4xl md:text-6xl font-dmsans">Submit Project Preferences</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

const navLinks = (handleNavClick, activePage) => (
  <>
    <button
      onClick={() => handleNavClick('/ms_entrepreneurship/home')}
      className={`hover:scale-[1.02] transition-all ease-in-out ${activePage === '/ms_entrepreneurship/home' ? 'border-b-2 border-white' : ''}`}
    >
      Home
    </button>
    <button
      onClick={() => handleNavClick('/ms_entrepreneurship/selection-list')}
      className={`hover:scale-[1.02] transition-all ease-in-out ${activePage === '/ms_entrepreneurship/selection-list' ? 'border-b-2 border-white' : ''}`}
    >
      Selection List July 2025
    </button>
    {/* <button
      onClick={() => handleNavClick('/submit-preferences')}
      className={`hover:scale-[1.02] transition-all ease-in-out ${activePage === '/submit-preferences' ? 'border-b-2 border-white' : ''}`}
    >
      Submit Preferences
    </button> */}
    <button
      onClick={() => handleNavClick('/resources')}
      className={`hover:scale-[1.02] transition-all ease-in-out ${activePage === '/resources' ? 'border-b-2 border-white' : ''}`}
    >
      Resources @IITM
    </button>
    {/* <button
      onClick={() => handleNavClick('/programme-structure')}
      className={`hover:scale-[1.02] transition-all ease-in-out ${activePage === '/programme-structure' ? 'border-b-2 border-white' : ''}`}
    >
      Programme Structure
    </button> */}
    <span className="cursor-pointer">
      <FaSearch />
    </span>
  </>
);

export default Ms_Entrepreneurship;
