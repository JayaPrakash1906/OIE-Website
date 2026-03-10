import React from 'react'
import Navbar from '../Components/Navbar'
import img1 from "../Assets/About/Tech_Meet.jpg";
import img2 from '../Assets/About/about middle.jpg';
import img3 from '../Assets/About/about img.jpg';
import img4 from "../Assets/About/Nandhini.jpeg";
import img5 from '../Assets/About/prajagopal.jpg';
import img6 from '../Assets/About/profsatyav5.webp';
import img7 from '../Assets/About/m anand.png';
import img8 from '../Assets/About/murugaiyan.png';
import {  FaHotTubPerson, FaPerson, FaPersonDotsFromLine, FaRegLightbulb, FaSeedling } from 'react-icons/fa6';
import { FaBeer, FaIdeal, FaThinkPeaks } from 'react-icons/fa';
import Footer from '../Components/Footer';
import { GiLifeSupport, GiNestEggs, GiPlantSeed } from 'react-icons/gi';
import { CgSupport } from 'react-icons/cg';


const About  = () => {
  return (
    <div>
    <Navbar /> 
    <div className="bg-gradient-to-b from-blue-200 to-white mt-[110px] transition-all duration-1000 ease-in-out">
  <div>
    <div className="text-center text-5xl font-semibold font-dmsans pt-8">
      About Us
    </div>
  </div>
  <p className="text-md mt-8 font-dmsans text-center px-4 sm:px-8">
    The Office of Innovation & Entrepreneurship (OIE) at IIT Madras aims to
    coordinate all<br className="hidden sm:block" />
    innovation and entrepreneurship activities and support the development of
    startups that can<br className="hidden sm:block" />
    grow and make a positive impact. It includes the Centre of Innovation (CFI)
    and Nirmaan,<br className="hidden sm:block" />
    which helps startups in their early stages. The OIE is located in the Sudha
    & Shankar <br className="hidden sm:block" />
    Innovation Hub, inaugurated by the Honorable Vice-President of India, Shri
    Jagdeep<br className="hidden sm:block" />
    Dhankhar, on 28th February, 2023.
  </p>

  {/* Image Section */}
  <div className="flex flex-col sm:flex-row justify-center mt-8 items-center gap-12">
  {/* Image 1 - up */}
  <img
    src={img1}
    alt="Image 1"
    className="w-[200px] sm:w-[250px] h-[300px] sm:h-[350px] sm:mt-0"
  />

  {/* Image 2 - down */}
  <img
    src={img2}
    alt="Image 2"
    className="w-[200px] sm:w-[250px] h-[300px] sm:h-[350px] sm:mt-32"
  />

  {/* Image 3 - little up */}
  <img
    src={img3}
    alt="Image 3"
    className="w-[200px] sm:w-[250px] h-[300px] sm:h-[350px] sm:mt-4"
  />
</div>

</div>



<div className='bg-blue-700 mt-32 text-white'>
  <h1 className='text-4xl md:text-6xl font-dmsans font-semibold text-center mb-8 md:mb-16 pt-16 md:pt-32'>
    Ecosystem
  </h1>
  <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6 md:px-0 pb-8'>
    <div className='ml-2 md:ml-10'>
      <FaRegLightbulb size={45} className="md:w-auto md:h-auto" />
      <h1 className='text-2xl md:text-3xl mt-4 font-dmsans'>Ideate</h1>
      <ul className='list-disc pl-5 mt-4 font-dmsans'>
        <li>M.S. in Entrepreneurship</li>
        <li>IITM Research Labs & Theses</li>
        <li>BTP, MTP</li>
        <li>ID5101, ID5102, ID5031</li>
        <li>Student Innovative Projects</li>
        <li>GDC</li>
      </ul>
    </div>

    <div className='ml-2'>
      <GiPlantSeed size={45} className="md:w-auto md:h-auto" />
      <h1 className='text-2xl md:text-3xl mt-4 font-dmsans'>Pre-Incubate</h1>
      <ul className='list-disc pl-5 mt-4 font-dmsans'>
        <li>
          Nirmaan: A pre-incubation initiative by IITM to support and nurture early-stage ideas and entrepreneurs.
        </li>
      </ul>
    </div>

    <div className='ml-2'>
      <FaSeedling size={45} className="md:w-auto md:h-auto" />
      <h1 className='text-2xl md:text-3xl mt-4 font-dmsans'>Incubate</h1>
      <ul className='list-disc pl-5 mt-4 font-dmsans'>
        <li>RTBI (Rural Technology and Business Incubator)</li>
        <li>IITM Pravartak - Catalyzing Innovation</li>
        <li>IITM Incubation Cell</li>
        <li>HTIC</li>
        <li>Biotechnology Incubator (Bionest)</li>
      </ul>
    </div>

    <div className='ml-2'>
      <CgSupport size={45} className="md:w-auto md:h-auto" />
      <h1 className='text-2xl md:text-3xl mt-4 font-dmsans'>Support</h1>
      <ul className='list-disc pl-5 mt-4 font-dmsans'>
        <li>IITMEF (IIT Madras Entrepreneurship Forum)</li>
        <li>Founder in Residence Programs</li>
        <li>UGFIR</li>
        <li>PGFIR</li>
        <li>RuTAG</li>
      </ul>
    </div>
  </div>
</div>

  <div className="mt-16" style={{ backgroundColor: "#faebd4" }}>
  {/* MAIN TITLE */}
  <h1 className="text-black text-4xl text-center font-bold font-dmsans pt-8">
    Our Team
  </h1>



  {/* ================= CORE FACULTY SECTION ================= */}
  <div className="mt-16">
   
{/* ================= FACULTY ================= */}
<div className="flex justify-center mb-16">
  <div className="w-48">
    <img
      src={img5}
      alt="Prof. Prabhu Rajagopal"
      className="w-full h-[200px] rounded shadow-lg"
    />
    <h1 className="text-blue-600 font-dmsans font-semibold text-center mt-2">
      Prof. Prabhu Rajagopal
    </h1>
    <h2 className="font-dmsans text-center">Core Faculty</h2>
  </div>
</div>

    {/* ================= TEAM ================= */}
<div className="flex justify-center mb-16">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
    
    {/* Member 1 */}
    <div className="w-48">
      <img
        src={img6}
        alt="Team Member"
        className="w-full h-[200px] rounded shadow-lg"
      />
      <h1 className="text-blue-600 font-dmsans font-semibold text-center mt-2">
        Prof. Satyanarayanan Seshadri
      </h1>
      <h2 className="font-dmsans text-center">Head-SIE</h2>
    </div>

    {/* Member 2 */}
    <div className="w-48">
      <img
        src={img7}
        alt="Team Member"
        className="w-full h-[200px] rounded shadow-lg"
      />
      <h1 className="text-blue-600 font-dmsans font-semibold text-center mt-2">
        Prof. Manish Anand
      </h1>
      <h2 className="font-dmsans text-center">Advisor-CFI</h2>
    </div>

    {/* Member 3 */}
    <div className="w-48">
      <img
        src={img8}
        alt="Team Member"
        className="w-full h-[200px] rounded shadow-lg"
      />
      <h1 className="text-blue-600 font-dmsans font-semibold text-center mt-2">
        Prof. Murugaiyan Amirthalingam
      </h1>
      <h2 className="font-dmsans text-center">Advisor-Nirmaan & E-Cell</h2>
    </div>

    {/* Member 4 */}
    <div className="w-48 mb-16">
      <img
        src={img4}
        alt="Team Member"
        className="w-full h-[200px] rounded shadow-lg"
      />
      <h1 className="text-blue-600 font-dmsans font-semibold text-center mt-2">
        K S Nandhini 
      </h1>
      <h2 className="font-dmsans text-center">Manager - SIE</h2>
    </div>

  </div>
</div>
  </div>
</div>
              <Footer/>
      </div>
        


  )
}

export default About 