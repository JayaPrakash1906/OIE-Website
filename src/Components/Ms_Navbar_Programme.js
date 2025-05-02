import React, { useState, useEffect } from 'react';
import Img1 from '../Assets/bg.jpg';
import { FaSearch, FaBars, FaTimes } from 'react-icons/fa';

const Ms_Entrepreneurship = () => {
  const [activePage, setActivePage] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const currentPath = window.location.pathname;
    setActivePage(currentPath);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navigate = (path) => {
    window.location.href = path;
    setMenuOpen(false); // Close menu on navigation
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
          <div className="px-4 md:px-6 pt-4 flex justify-between items-center">
            <div className="text-lg font-semibold">MS in Entrepreneurship</div>

            {/* Mobile Menu Icon */}
            <div className="md:hidden text-xl cursor-pointer" onClick={toggleMenu}>
              {menuOpen ? <FaTimes /> : <FaBars />}
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6 text-sm font-medium">
              {[
                { path: '/ms_entrepreneurship/home', label: 'Home' },
                { path: '/ms_entrepreneurship/selection-list', label: 'Selection List July 2025' },
                { path: '/submit-preferences', label: 'Submit Preferences' },
                { path: '/resources', label: 'Resources @IITM' },
                { path: '/programme-structure', label: 'Programme Structure' },
              ].map(({ path, label }) => (
                <button
                  key={path}
                  onClick={() => navigate(path)}
                  className={`hover:scale-[1.02] transition-all ease-in-out ${
                    activePage === path ? 'border-b-2 border-white' : ''
                  }`}
                >
                  {label}
                </button>
              ))}
              <span className="cursor-pointer" onClick={() => navigate('/search')}>
                <FaSearch />
              </span>
            </div>
          </div>

          {/* Mobile Navigation with Animation */}
          <div
            className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
              menuOpen ? 'max-h-96 opacity-100 mt-2' : 'max-h-0 opacity-0'
            } flex flex-col px-4 text-sm font-medium space-y-2`}
          >
            {[
              { path: '/ms_entrepreneurship/home', label: 'Home' },
              { path: '/ms_entrepreneurship/selection-list', label: 'Selection List July 2025' },
              { path: '/submit-preferences', label: 'Submit Preferences' },
              { path: '/resources', label: 'Resources @IITM' },
              { path: '/programme-structure', label: 'Programme Structure' },
            ].map(({ path, label }) => (
              <button
                key={path}
                onClick={() => navigate(path)}
                className={`text-left ${
                  activePage === path ? 'border-b border-white' : ''
                }`}
              >
                {label}
              </button>
            ))}
            <span className="cursor-pointer" onClick={() => navigate('/search')}>
              <FaSearch />
            </span>
          </div>

          {/* Main Heading */}
          <div className="flex items-center justify-center flex-grow text-center px-4">
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <div className="text-center sm:text-left">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-dmsans">Programme Structure</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ms_Entrepreneurship;
