import React from 'react'
import Navbar from '../Components/Navbar'
import img1 from "../Assets/Tech_Meet.jpg";
import img2 from '../Assets/about middle.jpg';
import img3 from '../Assets/about img.jpg';
import img4 from "../Assets/Nandhini.jpeg";
import img5 from '../Assets/prajagopal.jpg'
import {  FaHotTubPerson, FaPerson, FaPersonDotsFromLine, FaRegLightbulb } from 'react-icons/fa6';
import { FaIdeal, FaThinkPeaks } from 'react-icons/fa';
import Footer from '../Components/Footer';


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
  <p className="text-md mt-8 font-dmsans text-center">
    The Office of Innovation & Entrepreneurship (OIE) at IIT Madras aims to
    coordinate all<br />
    innovation and entrepreneurship activities and support the development of
    startups that can<br />
    grow and make a positive impact. It includes the centre of Innovation (CFI)
    and Nirmaan,<br />
    which helps startups in their early stages. The OIE is located in the Sudha
    & Shankar <br />
    Innovation Hub, inaugurated by the Honorable Vice-President of India, Shri
    Jagdeep<br />
    Dhankhar, on 28th February, 2023.
  </p>

  {/* Image Section */}
  <div className="flex justify-center mt-8 space-x-12">
    <img
      src={img1}
      alt="Image 1"
      className="w-[250px] h-[350px]"
    />
    <img
      src={img2}
      alt="Image 2"
      className="w-[250px] h-[350px] mt-10"
    />
    <img
      src={img3}
      alt="Image 3"
      className="w-[250px] h-[350px]"
    />
  </div>
</div>


          <div className='bg-blue-700 mt-32 text-white '>
            <h1 className='text-6xl text-dmsans font-semibold text-center mb-16 pt-32'>Ecosystem</h1>
              <div className='grid grid-cols-4 gap-3 pb-8'>
                <div className='ml-10'>
                <FaRegLightbulb size={55} />
                <h1 className='text-3xl mt-4 font-dmsans'>Ideate</h1>
                <ul className="list-disc pl-5 mt-4 font-dmsans">
                  <li>M.S. in Entrepreneurship</li>
                  <li>IITM Research Labs & Theses </li>
                  <li>BTP , MTP </li>
                  <li>ID5101, ID5102, ID5031 </li>
                  <li>Student Innovative Projects</li>
                  <li>GDC</li>
                </ul>
    
                </div>
                <div className='ml-2'>
                <FaThinkPeaks size={55} />
                <h1 className='text-3xl mt-4 font-dmsans'>Pre-Incubate</h1>
                <ul className="list-disc pl-5 mt-4 font-dmsans">
                  <li>Nirmaan: A pre-incubation initiative by IITM to support and nurture early-stage ideas and entrepreneurs.</li>
                  
                </ul>
    
                </div>
                <div className='ml-2'>
                <FaHotTubPerson size={55} />
                <h1 className='text-3xl mt-4'  >Incubate</h1>
                <ul className="list-disc pl-5 mt-4 font-dmsans">
                  <li>RTBI (Rural Technology and <br/> Business Incubator)</li>
                  <li>IITM Pravartak - Catalyzing Innovation</li>
                  <li>IITM Incubation Cell</li>
                  <li>HTIC</li>
                  <li>Biotechnology Incubator <br/>(Bionest)</li>
                  
                </ul>
    
                </div>
                <div className='ml-2'>
                <FaPersonDotsFromLine size={55} />
                <h1 className='text-3xl mt-4' >Support</h1>
                <ul className="list-disc pl-5 mt-4 font-dmsans ">
                  <li>IITMEF (IIT Madras <br/> Entrepreneurship Forum)</li>
                  <li>Founder in Residence Programs</li>
                  <li>UGFIR</li>
                  <li>PGFIR</li>
                  <li>RuTAG</li>
                  
                </ul>
    
                </div>
              </div>
              

          </div>
          <div className='mt-16 'style={{  backgroundColor: '	#faebd4' }}>
                    <h1 className='text-black text-4xl text-center font-bold font-dmsans pt-8'>Our Team</h1>
                    <div>
                    <div className="flex justify-center mt-16 mb-16">
      <div className="flex space-x-4 mb-8">
        <div className="w-48"> {/* Adjust width as needed */}
          <img
            src={img5} // Replace with your first image URL
            alt="Image 1"
            className="w-full h-[200px] rounded shadow-lg"
          />
          <h1 className='text-blue-600 font-dmsans font-semibold text-center mt-2'>Dr. Prabhu Rajagopal</h1>
          <h2 className=' font-dmsans text-center'>Faculty Advisor</h2>
           
        </div>
        <div className="w-48"> {/* Adjust width as needed */}
          <img
            src={img4} // Replace with your second image URL
            alt="Image 2"
            className="w-full h-[200px] rounded shadow-md"
          />
          <h1 className='text-blue-600 font-dmsans font-semibold text-center mt-2'>Ms. K S Nandhini</h1>
          <h2 className=' font-dmsans text-center'>Manager</h2>
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