import React, { useState, useEffect } from 'react';
import Img1 from '../Assets/bg.jpg';
import { FaSearch, FaBars, FaTimes } from 'react-icons/fa';

const Ms_Entrepreneurship = () => {
  const [activePage, setActivePage] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const currentPath = window.location.pathname;
    setActivePage(currentPath);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/ms_entrepreneurship/home' },
    { name: 'Selection List July 2025', path: '/ms_entrepreneurship/selection-list' },
    { name: 'Submit Preferences', path: '/submit-preferences' },
    { name: 'Resources @IITM', path: '/resources' },
    { name: 'Programme Structure', path: '/programme-structure' },
  ];

  return (
    <div>
      {/* Banner */}
      <div className="text-center bg-gray-300 py-2 font-dmsans">
        <p className="text-sm font-semibold">Applications Closed for July 2025</p>
      </div>

      {/* Header */}
      <div
        className="w-full h-[250px] text-white"
        style={{
          backgroundImage: `url(${Img1})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="flex flex-col h-full bg-black bg-opacity-40">
          {/* Navbar */}
          <div className="flex justify-between items-center px-6 pt-4">
            <div className="text-lg font-semibold">MS in Entrepreneurship</div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-6 text-sm font-medium">
              {navLinks.map(link => (
                <button
                  key={link.name}
                  onClick={() => (window.location.href = link.path)}
                  className={`active:scale-[.90] active:duration-70 hover:scale-[1.02] transition-all ease-in-out ${
                    activePage === link.path ? 'border-b-2 border-white ' : ''
                  }`}
                >
                  {link.name}
                </button>
              ))}
              <span className="cursor-pointer" onClick={() => (window.location.href = '/search')}>
                <FaSearch />
              </span>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden px-6 pt-2 space-y-3 text-sm font-medium flex flex-col bg-black bg-opacity-60">
              {navLinks.map(link => (
                <button
                  key={link.name}
                  onClick={() => {
                    window.location.href = link.path;
                    setIsMenuOpen(false);
                  }}
                  className={`text-left ${
                    activePage === link.path ? 'border-b border-white' : ''
                  }`}
                >
                  {link.name}
                </button>
              ))}
              <span className="cursor-pointer" onClick={() => window.location.href = '/search'}>
                <FaSearch />
              </span>
            </div>
          )}

          {/* Main Heading */}
          <div className="flex items-center justify-center flex-grow text-center px-4">
            <h1 className="text-3xl md:text-6xl font-dmsans">Resources @ IITM</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ms_Entrepreneurship;
