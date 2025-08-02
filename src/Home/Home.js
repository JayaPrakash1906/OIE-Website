import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import { GrBookmark } from "react-icons/gr";
import Footer from "../Components/Footer";
import img1 from "../Assets/Home/home_img1.jpg";
import img2 from "../Assets/Home/home_img2.jpg";
import img3 from "../Assets/Home/home_img3.jpg";
import img4 from "../Assets/Home/home_img4.jpg";
import img5 from "../Assets/Home/home_img5.jpg";
import img6 from "../Assets/Home/home_img6.jpg";
import img7 from "../Assets/Home/home_img7.jpg";
import img8 from "../Assets/Home/home_img8.jpg";
import img9 from "../Assets/Home/Director.jpg"; // popup image
import img10 from "../Assets/Home/prajagopal.jpeg";
import img11 from "../Assets/Home/nirmaan logo.png";
import img12 from "../Assets/Home/Nirmaan image.jpg";
import img13 from "../Assets/Home/CFI Logo.jpg";
import img14 from "../Assets/Home/cfi image.jpg";
import img15 from "../Assets/Home/sie_event.jpeg"
import { FaX } from "react-icons/fa6";

const Home = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 500); // Show after 500ms
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <Navbar />

      {/* Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
          <div className="bg-white rounded-lg overflow-hidden shadow-xl relative w-[90%] max-w-[500px]">
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-2 right-2 bg-gray-200 hover:bg-gray-300 text-black rounded-full p-2"
              aria-label="Close"
            >
              <FaX/>
            </button>
            <img
              src={img15}
              alt="Popup"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      )}

      <div className="uppercase text-blue-600 mt-[200px] text-center font-bold font-dmsans text-5xl fade-in">
        Where ideas and
        <span className="block mt-4 fade-in-slow">innovation Prosper</span>
      </div>
      <div className="uppercase text-black mt-4 text-center text-3xl font-dmsans fade-in">
        IIT MADRAS
      </div>

      <div className="w-full px-4 py-10 bg-white">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          <div className="flex justify-center items-start">
            <img src={img1} alt="img1" className="w-full max-w-[150px] sm:max-w-[180px] md:max-w-[200px] object-cover h-[250px] sm:h-[300px] md:h-[360px] rounded-xl shadow-md mt-10 sm:mt-16 md:mt-32 transition-transform duration-300 hover:scale-105" />
          </div>
          <div className="flex flex-col items-center space-y-4">
            <img src={img2} alt="img2" className="w-full max-w-[180px] md:max-w-[210px] h-[250px] sm:h-[300px] md:h-[360px] object-cover rounded-xl shadow-md transition-transform duration-300 hover:scale-105" />
            <img src={img3} alt="img3" className="w-full max-w-[180px] md:max-w-[210px] h-[120px] sm:h-[150px] md:h-[200px] object-cover rounded-xl shadow-md transition-transform duration-300 hover:scale-105" />
          </div>
          <div className="flex flex-col items-center space-y-4 mt-4 sm:mt-8 md:mt-16">
            <img src={img4} alt="img4" className="w-full max-w-[180px] md:max-w-[210px] h-[110px] sm:h-[150px] md:h-[180px] object-cover rounded-xl shadow-md transition-transform duration-300 hover:scale-105" />
            <img src={img5} alt="img5" className="w-full max-w-[180px] md:max-w-[210px] h-[250px] sm:h-[300px] md:h-[360px] object-cover rounded-xl shadow-md transition-transform duration-300 hover:scale-105" />
          </div>
          <div className="flex flex-col items-center space-y-4">
            <img src={img6} alt="img6" className="w-full max-w-[180px] md:max-w-[210px] h-[250px] sm:h-[300px] md:h-[360px] object-cover rounded-xl shadow-md transition-transform duration-300 hover:scale-105" />
            <img src={img7} alt="img7" className="w-full max-w-[180px] md:max-w-[210px] h-[120px] sm:h-[150px] md:h-[190px] object-cover rounded-xl shadow-md transition-transform duration-300 hover:scale-105" />
          </div>
          <div className="flex justify-center items-start">
            <img src={img8} alt="img8" className="w-full max-w-[150px] sm:max-w-[180px] md:max-w-[200px] object-cover h-[250px] sm:h-[300px] md:h-[360px] rounded-xl shadow-md mt-10 sm:mt-16 md:mt-32 transition-transform duration-300 hover:scale-105" />
          </div>
        </div>
      </div>

      <div className="uppercase text-black mt-[150px] text-center font-bold font-dmsans text-4xl sm:text-3xl md:text-4xl opacity-0 translate-y-6 animate-fade-in-up">
        office of innovation and
        <span className="block mt-4 uppercase"> entrepreneurship</span>
      </div>

      <div className="opacity-0 translate-y-6 animate-fade-in-up delay-200">
        <p className="text-center text-lg sm:text-base md:text-lg font-dmsans mt-8">
          The Office of Innovation & Entrepreneurship (OIE) at IIT Madras aims to coordinate all innovation and entrepreneurship
          <br className="hidden sm:block" /> activities and support the development of startups that can grow and make a positive impact.
        </p>
        <div className="flex justify-center items-center opacity-0 translate-y-6 animate-fade-in-up delay-400">
          <button className="mt-4 bg-blue-600 text-white font-dmsans px-8 py-1 sm:px-6 sm:py-2 rounded-2xl hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105">
            Learn More
          </button>
        </div>
      </div>

      <div className="mt-16 px-4 md:mt-32 md:px-32">
        <div className="md:grid md:grid-cols-2 md:gap-10">
          <div className="border-2 border-blue-600 rounded-3xl p-4 transition duration-300 transform hover:scale-105 hover:shadow-lg">
            <div className="font-bold text-black text-2xl md:text-3xl mt-2">VISION</div>
            <p className="mt-4 md:mt-6 font-dmsans text-lg md:text-xl">
              To deliver administrative support to innovation and entrepreneurship activities that include outreach, fundraising, project management, IP, and funding.
            </p>
          </div>
          <div className="border-2 border-blue-600 rounded-3xl p-4 mt-6 md:mt-0 transition duration-300 transform hover:scale-105 hover:shadow-lg">
            <div className="font-bold text-black text-2xl md:text-3xl mt-2">MISSION</div>
            <p className="mt-4 font-dmsans text-lg md:text-xl">
              To provide training in entrepreneurship through structured programs and guidance through experienced and visionary leadership to coordinate events, visits, workshops, and external programs, generating leads for future advancements.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-16 bg-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-16 md:mt-32 px-8 md:px-32">
          <div>
            <div className="ml-0 md:ml-16 font-bold text-black text-2xl mt-2">
              <GrBookmark size={32} className="text-blue-600 mt-8" />
            </div>
            <p className="font-dmsans text-sm ml-0 md:ml-16 mt-8">
              The ‘I&E’ stack at IIT Madras today boasts of the vibrant ‘tinker laboratory’ and Maker Space in the form of the CFI and the pre-incubator Nirmaan.
            </p>
            <div className="flex items-center space-x-4 md:space-x-10 p-4 md:p-16">
              <img className="w-16 h-16 rounded-full object-cover" src={img9} alt="Prof.Kamakoti Veezhinathan" />
              <div>
                <h2 className="text-blue-600 font-bold text-lg font-dmsans">Prof. Kamakoti Veezhinathan</h2>
                <p className="text-gray-500 font-dmsans">Director</p>
                <p className="text-gray-500 font-dmsans">IIT Madras</p>
              </div>
            </div>
          </div>
          <div>
            <div className="ml-0 md:ml-8 font-bold text-black text-2xl mt-8">
              <GrBookmark size={32} className="text-blue-600" />
            </div>
            <p className="font-dmsans text-sm ml-0 md:ml-8 mt-8">
              Thanks in no small measure to efforts by our Director, Deans, benevolent Alumni Donors, students, faculty mentors and staff, present and past, we managed to find the supporting resources.
            </p>
            <div className="flex items-center space-x-4 md:space-x-10 p-4 md:p-16">
              <img className="w-16 h-16 rounded-full object-cover" style={{ objectPosition: "center right" }} src={img10} alt="Prof.Prabhu Rajagopal" />
              <div>
                <h2 className="text-blue-600 font-bold text-lg font-dmsans">Prof. Prabhu Rajagopal</h2>
                <p className="text-gray-500 font-dmsans">Advisor</p>
                <p className="text-gray-500 font-dmsans">OIE, IITM</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Nirmaan Section */}
      <div className="grid grid-cols-1 md:grid-cols-7 lg:grid-cols-7 px-4 md:px-10 mt-10 gap-10 md:gap-14">
        <div className="mt-8 md:mt-16 col-span-1 md:col-span-5">
          <div className="flex items-center justify-center md:justify-start">
            <img className="w-14 h-14 object-cover" src={img11} alt="Nirmaan Logo" />
            <span className="text-2xl md:text-4xl ml-4 font-dmsans font-bold text-green-600">NIRMAAN</span>
          </div>
          <div className="mt-4 font-dmsans text-base md:text-lg px-4 md:px-0 text-justify">
            <p>
              Nirmaan, The Pre-incubator of IIT Madras, is the first of its kind dedicated pre-incubator on a college campus in the country...
            </p>
          </div>
          <div className="flex justify-center md:justify-start items-start">
            <a href="https://nirmaan.iitm.ac.in/" target="_blank" rel="noopener noreferrer">
              <button className="mt-8 md:mt-12 bg-green-500 text-white font-dmsans px-6 md:px-8 py-2 rounded-2xl hover:bg-green-600 transition">
                Learn More
              </button>
            </a>
          </div>
        </div>
        <div className="col-span-1 md:col-span-2 flex justify-center items-center mt-8 md:mt-20">
          <img className="w-72 h-56 md:w-[340px] md:h-[260px] rounded-xl" src={img12} alt="nirmaan_image" />
        </div>
      </div>

      {/* CFI Section */}
      <div className="grid grid-cols-1 md:grid-cols-7 lg:grid-cols-7 px-4 md:px-10 mt-10 gap-10 md:gap-14">
        <div className="mt-8 md:mt-16 col-span-1 md:col-span-5">
          <div className="flex items-center justify-center md:justify-start">
            <img className="w-16 h-14 object-cover" src={img13} alt="CFI Logo" />
            <span className="text-2xl md:text-4xl ml-4 font-dmsans font-bold text-red-600">CENTRE FOR INNOVATION (CFI)</span>
          </div>
          <div className="mt-4 font-dmsans text-base md:text-lg px-4 md:px-0 text-justify">
            <p>
              The Centre for Innovation (CFI) at IIT Madras is a pioneering student-led "Tinker Lab"...
            </p>
          </div>
          <div className="flex justify-center md:justify-start items-start">
            <a href="https://cfi.iitm.ac.in/" target="_blank" rel="noopener noreferrer">
              <button className="mt-8 md:mt-12 bg-red-500 text-white font-dmsans px-6 md:px-8 py-2 rounded-2xl hover:bg-red-600 transition">
                Learn More
              </button>
            </a>
          </div>
        </div>
        <div className="col-span-1 md:col-span-2 flex justify-center items-center mt-8 md:mt-[120px]">
          <img className="w-72 h-56 md:w-[340px] md:h-[260px] rounded-xl" src={img14} alt="centre_for_innovation_image" />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
