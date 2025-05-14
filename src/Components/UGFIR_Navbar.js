import React from 'react';
import Img1 from '../Assets/green_bg.webp';
import Img2 from '../Assets/nirmaan logo.png';
import Img3 from '../Assets/iitm logo.png';

const Ms_Entrepreneurship = () => {
  const applyLink = 'https://forms.gle/fG8ZWLV7TQYdTrTi9';

  return (
    <div className="w-full overflow-x-hidden">
      {/* Banner */}
      <div className="text-center bg-green-100 py-2">
        <h2 className="text-lg font-bold animate-marquee font-dmsans">
          Applications are welcome for the UGFIR 2025
        </h2>
      </div>

      {/* Background Image Header */}
      <div
        className="w-full h-[250px] text-white relative"
        style={{
          backgroundImage: `url(${Img1})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="flex flex-col h-full w-full bg-black bg-opacity-40 relative z-10">
          {/* Navbar */}
          <div className="px-4 md:px-6 pt-4 flex justify-end items-center">
            <a
              href={applyLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black px-4 sm:px-6 py-2 rounded text-sm sm:text-base font-semibold hover:scale-[1.02] transition-all ease-in-out"
            >
              Apply Now
            </a>
          </div>

          {/* Main Heading */}
          <div className="flex items-center justify-center flex-grow text-center px-4 relative z-10">
            <div className="flex flex-row items-center justify-center space-x-4 w-full max-w-5xl mx-auto overflow-x-auto">
              <img
                src={Img3}
                alt="IITM Logo"
                className="h-16 w-16 sm:h-20 sm:w-20 object-contain flex-shrink-0"
              />
              <img
                src={Img2}
                alt="Nirmaan Logo"
                className="h-16 w-16 sm:h-20 sm:w-20 object-contain flex-shrink-0"
              />
              <h1 className="text-2xl sm:text-4xl md:text-5xl whitespace-nowrap">
                UGFIR Scholarship
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ms_Entrepreneurship;














































// import React, { useState, useEffect } from 'react';
// import Img1 from '../Assets/green_bg.webp';
// import Img2 from '../Assets/nirmaan logo.png';
// import Img3 from '../Assets/iitm logo.png';
// import { FaBars, FaTimes } from 'react-icons/fa';

// const Ms_Entrepreneurship = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const applyLink = 'https://example.com/apply'; // <-- Replace with your real link

//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth >= 768) {
//         setMenuOpen(false);
//       }
//     };
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   return (
//     <div>
//       {/* Banner */}
//       <div className="text-center bg-gray-300 py-2">
//         <p className="text-sm font-semibold">Applications open soon—watch this space for updates!</p>
//       </div>

//       {/* Background Image Header */}
//       <div
//         className="w-full h-[250px] text-white relative"
//         style={{
//           backgroundImage: `url(${Img1})`,
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//           backgroundRepeat: 'no-repeat',
//         }}
//       >
//         <div className="flex flex-col h-full bg-black bg-opacity-40 relative z-10">
//           {/* Navbar */}
//           <div className="px-4 md:px-6 pt-4 flex justify-between items-center">
//             <div className="md:hidden text-xl cursor-pointer" onClick={toggleMenu}>
//               {menuOpen ? <FaTimes /> : <FaBars />}
//             </div>
//             <div className="hidden md:flex items-center space-x-4 ml-auto">
//               <a
//                 href={applyLink}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="bg-white text-black px-6 py-2 rounded text-base font-semibold hover:scale-[1.02] transition-all ease-in-out"
//               >
//                 Apply Now
//               </a>
//             </div>
//           </div>

//           {/* Main Heading */}
//           <div className="flex items-center justify-center flex-grow text-center px-4 relative z-10">
//             <div className="flex flex-row items-center space-x-4 flex-wrap justify-center">
//               <img
//                 src={Img3}
//                 alt="IITM Logo"
//                 className="h-20 w-20 sm:h-24 sm:w-24 object-contain"
//               />
//               <img
//                 src={Img2}
//                 alt="Nirmaan Logo"
//                 className="h-20 w-20 sm:h-24 sm:w-24 object-contain"
//               />
//               <div className="text-center sm:text-left mt-4 sm:mt-0">
//                 <h1 className="text-3xl sm:text-4xl md:text-5xl">UGFIR Scholarship</h1>
//                 <p className="text-lg sm:text-xl md:text-2xl mt-1">May 2025 Batch Admission Cycle</p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Mobile Dropdown Menu */}
//         {menuOpen && (
//           <div className="absolute top-16 left-0 w-full bg-black bg-opacity-80 z-20 flex flex-col px-4 py-4 text-sm font-medium space-y-2 md:hidden">
//             <a
//               href={applyLink}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="bg-white text-black px-6 py-2 rounded text-base font-semibold text-center"
//             >
//               Apply Now
//             </a>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Ms_Entrepreneurship;























































// import React, { useState, useEffect } from 'react';
// import Img1 from '../Assets/green_bg.webp';
// import Img2 from '../Assets/nirmaan logo.png';
// import Img3 from '../Assets/iitm logo.png';
// import { FaSearch, FaBars, FaTimes } from 'react-icons/fa';

// const Ms_Entrepreneurship = () => {
//   const [activePage, setActivePage] = useState('');
//   const [menuOpen, setMenuOpen] = useState(false);

//   useEffect(() => {
//     const currentPath = window.location.pathname;
//     setActivePage(currentPath);
//   }, []);

//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth >= 768) {
//         setMenuOpen(false);
//       }
//     };
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   const navigate = (path) => {
//     window.location.href = path;
//     setMenuOpen(false);
//   };

//   return (
//     <div>
//       {/* Banner */}
//       <div className="text-center bg-gray-300 py-2">
//         <p className="text-sm font-semibold">Applications open soon—watch this space for updates!</p>
//       </div>

//       {/* Background Image Header */}
//       <div
//         className="w-full h-[250px] text-white relative"
//         style={{
//           backgroundImage: `url(${Img1})`,
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//           backgroundRepeat: 'no-repeat',
//         }}
//       >
//         <div className="flex flex-col h-full bg-black bg-opacity-40 relative z-10">
//           {/* Navbar */}
//           <div className="px-4 md:px-6 pt-4 flex justify-between items-center">
//             <div className="text-lg font-semibold"></div>
//             <div className="md:hidden text-xl cursor-pointer" onClick={toggleMenu}>
//               {menuOpen ? <FaTimes /> : <FaBars />}
//             </div>
//             <div className="hidden md:flex items-center space-x-4 text-sm font-medium">
//               {[
//                 { path: '/ugfir/home', label: 'Home' },
//                 { path: '/ugfir/application', label: 'Application 2025' },
//                 { path: '/ugfir/previous_cohort', label: 'Previous Cohort' },
//               ].map(({ path, label }) => (
//                 <button
//                   key={path}
//                   onClick={() => navigate(path)}
//                   className={`hover:scale-[1.02] transition-all ease-in-out ${
//                     activePage === path ? 'border-b-2 border-white' : ''
//                   }`}
//                 >
//                   {label}
//                 </button>
//               ))}
//               <span className="cursor-pointer">
//                 <FaSearch />
//               </span>
//             </div>
//           </div>

//           {/* Main Heading */}
//           <div className="flex items-center justify-center flex-grow text-center px-4 relative z-10">
//             <div className="flex flex-row items-center space-x-4 flex-wrap justify-center">
//               <img
//                 src={Img3}
//                 alt="IITM Logo"
//                 className="h-20 w-20 sm:h-24 sm:w-24 object-contain"
//               />
//               <img
//                 src={Img2}
//                 alt="Nirmaan Logo"
//                 className="h-20 w-20 sm:h-24 sm:w-24 object-contain"
//               />
//               <div className="text-center sm:text-left mt-4 sm:mt-0">
//                 <h1 className="text-3xl sm:text-4xl md:text-5xl">UGFIR Scholarship</h1>
//                 <p className="text-lg sm:text-xl md:text-2xl mt-1">May 2025 Batch Admission Cycle</p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Mobile Dropdown Menu */}
//         {menuOpen && (
//           <div className="absolute top-16 left-0 w-full bg-black bg-opacity-80 z-20 flex flex-col px-4 py-4 text-sm font-medium space-y-2 md:hidden">
//             {[
//               { path: '/ugfir/home', label: 'Home' },
//               { path: '/ugfir/application', label: 'Application 2025' },
//               { path: '/ugfir/previous_cohort', label: 'Previous Cohort' },
//             ].map(({ path, label }) => (
//               <button
//                 key={path}
//                 onClick={() => navigate(path)}
//                 className={`text-left ${
//                   activePage === path ? 'border-b border-white' : ''
//                 }`}
//               >
//                 {label}
//               </button>
//             ))}
//             <span className="cursor-pointer">
//               <FaSearch />
//             </span>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Ms_Entrepreneurship;
