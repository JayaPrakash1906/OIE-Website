import React, { useState, useEffect } from 'react';
import Img1 from '../Assets/Activities/bg.jpg';
import Img2 from '../Assets/iitm logo.png';
import { FaSearch, FaBars, FaTimes } from 'react-icons/fa';

const Ms_Entrepreneurship = () => {
  const [activePage, setActivePage] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const currentPath = window.location.pathname;
    setActivePage(currentPath);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const navigate = (path) => {
    window.location.href = path;
    setMenuOpen(false); // close menu on navigation
  };

  return (
    <div>
      {/* Banner */}
      <div className="text-center bg-gray-300 py-2">
        <p className="text-sm font-semibold">Applications Closed for July 2025</p>
      </div>

      {/* Background Image Header */}
      <div
        className="w-full h-[250px] text-white relative"
        style={{
          backgroundImage: `url(${Img1})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="flex flex-col h-full bg-black bg-opacity-40 relative z-10">
          {/* Navbar */}
          <div className="px-4 md:px-6 pt-4 flex justify-between items-center">
            <div className="text-lg font-semibold"></div> 
            <div className="md:hidden text-xl cursor-pointer" onClick={toggleMenu}>
              {menuOpen ? <FaTimes /> : <FaBars />}
            </div>
            <div className="hidden md:flex items-center space-x-4 text-sm font-medium">
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

          {/* Main Heading */}
          <div className="flex items-center justify-center flex-grow text-center px-4 relative z-10">
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <img src={Img2} alt="IITM Logo" className="h-20 w-20 sm:h-24 sm:w-24 object-contain" />
              <div className="text-center sm:text-left">
                <h1 className="text-3xl sm:text-4xl md:text-5xl">MS  Entrepreneurship</h1>
                <p className="text-lg sm:text-xl md:text-2xl mt-1">July 2025 Batch Admission Cycle</p>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu (overlayed) */}
        {menuOpen && (
          <div className="absolute top-16 left-0 w-full bg-black bg-opacity-80 z-20 flex flex-col px-4 py-4 text-sm font-medium space-y-2">
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
            <span className="cursor-pointer" >
              <FaSearch />
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Ms_Entrepreneurship;
