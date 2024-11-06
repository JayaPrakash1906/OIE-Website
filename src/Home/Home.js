import React from "react";
import Navbar from "../Components/Navbar";
import { GrBookmark } from "react-icons/gr";
import Footer from "../Components/Footer";
import img1 from "../Assets/home_img1.jpg";
import img2 from "../Assets/home_img2.jpg";
import img3 from "../Assets/home_img3.jpg";
import img4 from "../Assets/home_img4.jpg";
import img5 from "../Assets/home_img5.jpg";
import img6 from "../Assets/home_img6.jpg";
import img7 from "../Assets/home_img7.jpg";
import img8 from "../Assets/home_img8.jpg";
import img9 from "../Assets/Director.jpg";
import img10 from "../Assets/prajagopal.jpeg";
import img11 from "../Assets/nirmaan logo.png";
import img12 from "../Assets/Nirmaan image.jpg";
import img13 from "../Assets/CFI Logo.jpg";
import img14 from "../Assets/cfi image.jpg";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="uppercase text-blue-600 mt-[200px] text-center font-bold font-dmsans text-5xl fade-in">
  Where ideas and
  <span className="block mt-4 fade-in-slow">innovation Prosper</span>
</div>
<div className="uppercase text-black mt-4 text-center text-3xl font-dmsans fade-in">
  IIT MADRAS
</div>

<div className="grid grid-cols-2 gap-1 sm:grid-cols-3 md:grid-cols-5 md:mt-32">
  <div>
    <img
      src={img1}
      alt="Home image 1"
      className="w-[150px] h-[250px] sm:w-[180px] sm:h-[300px] md:w-[200px] md:h-[360px] object-cover rounded-xl shadow-md ml-4 md:ml-8 mt-16 md:mt-32 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
    />
  </div>

  <div className="flex flex-col items-center space-y-2 sm:space-y-4 ml-1">
    <img
      src={img2}
      alt="Home image 2"
      className="w-[150px] h-[250px] sm:w-[180px] sm:h-[300px] md:w-[210px] md:h-[360px] object-cover rounded-xl shadow-md transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
    />
    <img
      src={img3}
      alt="Home image 3"
      className="w-[150px] h-[120px] sm:w-[180px] sm:h-[150px] md:w-[210px] md:h-[200px] object-cover rounded-xl shadow-md transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
    />
  </div>

  <div className="flex flex-col items-center space-y-2 sm:space-y-4 mt-8 sm:mt-12 md:mt-16">
    <img
      src={img4}
      alt="Home image 4"
      className="w-[150px] h-[110px] sm:w-[180px] sm:h-[150px] md:w-[210px] md:h-[180px] object-cover rounded-xl shadow-md transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
    />
    <img
      src={img5}
      alt="Home image 5"
      className="w-[150px] h-[250px] sm:w-[180px] sm:h-[300px] md:w-[210px] md:h-[360px] object-cover rounded-xl shadow-md transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
    />
  </div>

  <div className="flex flex-col items-center space-y-2 sm:space-y-4 mr-1">
    <img
      src={img6}
      alt="Home image 6"
      className="w-[150px] h-[250px] sm:w-[180px] sm:h-[300px] md:w-[210px] md:h-[360px] object-cover rounded-xl shadow-md transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
    />
    <img
      src={img7}
      alt="Home image 7"
      className="w-[150px] h-[120px] sm:w-[180px] sm:h-[150px] md:w-[210px] md:h-[190px] object-cover rounded-xl shadow-md transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
    />
  </div>

  <div>
    <img
      src={img8}
      alt="Home image 8"
      className="w-[150px] h-[250px] sm:w-[180px] sm:h-[300px] md:w-[200px] md:h-[360px] object-cover rounded-xl shadow-md mr-4 md:mr-9 mt-16 md:mt-32 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
    />
  </div>
</div>


      <div className="uppercase text-black mt-[150px] text-center font-bold font-dmsans text-4xl sm:text-3xl md:text-4xl">
        office of innovation and
        <span className="block mt-4">ENTREPRENEURSHIP</span>
      </div>
      <div>
        <p className="text-center text-lg sm:text-base md:text-lg font-dmsans mt-8">
          The Office of Innovation & Entrepreneurship (OIE) at IIT Madras aims
          to coordinate all innovation and entrepreneurship
          <br className="hidden sm:block" /> activities and support the
          development of startups that can grow and make a positive impact.
        </p>
        <div className="flex justify-center items-center">
          <button className="mt-4 bg-blue-600 text-white font-dmsans px-8 py-1 sm:px-6 sm:py-2 rounded-2xl hover:bg-blue-600 transition">
            Learn More
          </button>
        </div>
      </div>

      <div className="mt-16 px-4 md:mt-32 md:px-32">
  <div className="md:grid md:grid-cols-2 md:gap-10">
    <div className="border-2 border-blue-600 rounded-3xl p-4 transition duration-300 transform hover:scale-105 hover:shadow-lg">
      <div className="font-bold text-black text-2xl md:text-3xl mt-2">
        VISION
      </div>
      <p className="mt-4 md:mt-6 font-dmsans text-lg md:text-xl">
        To deliver administrative support to innovation and
        entrepreneurship activities that include outreach, fundraising,
        project management, IP, and funding.
      </p>
    </div>

    <div className="border-2 border-blue-600 rounded-3xl p-4 mt-6 md:mt-0 transition duration-300 transform hover:scale-105 hover:shadow-lg">
      <div className="font-bold text-black text-2xl md:text-3xl mt-2">
        MISSION
      </div>
      <p className="mt-4 font-dmsans text-lg md:text-xl">
        To provide training in entrepreneurship through structured
        programs and guidance through experienced and visionary leadership
        to coordinate events, visits, workshops, and external programs,
        generating leads for future advancements.
      </p>
    </div>
  </div>
</div>


      <div className="mt-16 bg-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-16 md:mt-32 px-8 md:px-32">
          {/* First Column */}
          <div>
            <div className="ml-0 md:ml-16 font-bold text-black text-2xl mt-2">
              <GrBookmark size={32} className="text-blue-600 mt-8" />
            </div>
            <p className="font-dmsans text-sm ml-0 md:ml-16 mt-8">
              The ‘I&E’ stack at IIT Madras today boasts of the vibrant ‘tinker
              laboratory’ and Maker Space in the form of the CFI and the
              pre-incubator Nirmaan.
            </p>
            <div className="flex items-center space-x-4 md:space-x-10 p-4 md:p-16">
              <img
                className="w-16 h-16 rounded-full object-cover"
                src={img9}
                alt="Prof.Kamakoti Veezhinathan"
              />
              <div>
                <h2 className="text-blue-600 font-bold text-lg font-dmsans">
                  Prof. Kamakoti Veezhinathan
                </h2>
                <p className="text-gray-500 font-dmsans">Director</p>
                <p className="text-gray-500 font-dmsans">IIT Madras</p>
              </div>
            </div>
          </div>

          {/* Second Column */}
          <div>
            <div className="ml-0 md:ml-8 font-bold text-black text-2xl mt-8">
              <GrBookmark size={32} className="text-blue-600" />
            </div>
            <p className="font-dmsans text-sm ml-0 md:ml-8 mt-8">
              Thanks in no small measure to efforts by our Director, Deans,
              benevolent Alumni Donors, students, faculty mentors and staff,
              present and past, we managed to find the supporting resources.
            </p>
            <div className="flex items-center space-x-4 md:space-x-10 p-4 md:p-16">
              <img
                className="w-16 h-16 rounded-full object-cover"
                style={{ objectPosition: "center right" }}
                src={img10}
                alt="Prof.Prabhu Rajagopal"
              />
              <div>
                <h2 className="text-blue-600 font-bold text-lg font-dmsans">
                  Prof. Prabhu Rajagopal
                </h2>
                <p className="text-gray-500 font-dmsans">Advisor</p>
                <p className="text-gray-500 font-dmsans">OIE, IITM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-7 px-10 mt-10 gap-14">
        <div className="mt-16 col-span-5">
          <div className="flex items-center">
            <img
              className="ml-16 w-14 h-14 object-cover"
              src={img11}
              alt="Nirmaan Logo"
            />
            <span className="text-4xl ml-4 font-dmsans font-bold text-green-600">
              NIRMAAN
            </span>
          </div>
          <div className="ml-16 mt-4 font-dmsans text-lg">
            <p>
              Nirmaan, The Pre-incubator of IIT Madras, is the first of its kind
              dedicated pre-incubator on a college campus in the country. Its
              primary objective is to provide technical guidance and business
              mentorship to student teams, assisting them in refining their
              business ideas to achieve both technical robustness and economic
              viability. In addition to offering a well-equipped collaborative
              workspace and essential financial support, Nirmaan cultivates a
              supportive and encouraging environment conducive to innovation.
              Furthermore, the program facilitates valuable connections between
              nascent startups and experienced mentors who provide specialized
              technical and business insights, crucial for translating ideas
              into successful businesses.
            </p>
          </div>
          <div className=" flex justify-start items-start">
            <a href="https://nirmaan.iitm.ac.in/"target="_blank" rel="noopener noreferrer"><button className="ml-16 mt-12 bg-green-500 text-white font-dmsans px-8 py-1 rounded-2xl hover:bg-green-600 transition">
              Learn More
            </button></a>
          </div>
        </div>
        <div className="col-span-2 flex justify-center items-center">
          <img
            className=" w-[340px] h-[260px]  mt-[80px] rounded-xl"
            src={img12}
            alt="Nirmaan Logo"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-7 px-10 mt-10 gap-14">
        <div className="mt-16 col-span-5">
          <div className="flex items-center">
            <img
              className="ml-16 w-16 h-14 object-cover"
              src={img13}
              alt="Nirmaan Logo"
            />
            <span className="text-4xl ml-4 font-dmsans font-bold text-red-600">
              CENTRE FOR INNOVATION (CFI)
            </span>
          </div>
          <div className="ml-16 mt-4 font-dmsans text-lg">
            <p>
              The Centre for Innovation (CFI) at IIT Madras is a pioneering
              student-led "Tinker Lab" and one of the oldest academic entities
              dedicated to “Doing by Learning”. Established by the alumni class
              of 1981, CFI has expanded over the past fifteen years into a
              central hub focusing on nurturing innovation and technological
              inventions. The centre is structured around approximately 14
              'Hobby' clubs and 8 competition teams, complemented by additional
              teams offering expertise in branding, engagement, finance, and web
              operations/coding support.
            </p>
          </div>
          <div className=" flex justify-start items-start">
          <a href="https://cfi.iitm.ac.in/"target="_blank" rel="noopener noreferrer"><button className="ml-16 mt-12 bg-red-500 text-white font-dmsans px-8 py-1 rounded-2xl hover:bg-red-600 transition">
              Learn More
            </button></a>
          </div>
        </div>
        <div className="col-span-2 flex justify-center items-center">
          <img
            className=" w-[340px] h-[260px]  mt-[120px] rounded-xl"
            src={img14}
            alt="cfi image"
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
