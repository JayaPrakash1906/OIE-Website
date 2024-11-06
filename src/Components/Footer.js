import React from 'react'
import img1 from '../Assets/OIE Logo footer.jpg'
import { FaEnvelope, FaInstagram, FaLinkedin, FaLocationDot, FaPhone } from 'react-icons/fa6'

const Footer = () => {
  return (
    <div className='mt-16 md:mb-auto'>
      <div className='bg-blue-500'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3'>
          <div className='flex justify-center sm:justify-start'>
            <img className="h-30 sm:h-30 m-8 sm:m-16" src={img1} alt="cfi logo" />
          </div>

          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <h3 className="font-semibold mt-8 sm:mt-16 mb-3 text-md text-white font-dmsans">Locate us</h3>
            <div className="flex items-start mt-2 text-sm text-white font-dmsans">
              <FaLocationDot className="mr-2 h-4 w-4" />
              <div>
                <p>Office of Innovation and Entrepreneurship,</p>
                <p>I Floor, Sudha & Shankar Innovation Hub</p>
                <p>IIT Madras, Chennai - 600 036</p>
              </div>
            </div>
            <div className="flex items-center text-sm text-white font-dmsans mt-2">
              <FaEnvelope className="mr-2 h-4 w-4" />
              <span>office.ie@imail.iitm.ac.in</span>
            </div>
            <div className="flex items-center text-sm text-white font-dmsans mt-2">
              <FaPhone className="mr-2 h-4 w-4" />
              <span>044 - 2257 8514</span>
            </div>
          </div>

          <div className="flex flex-col md:items-center sm:items-start text-center sm:text-left">
            <h3 className="font-semibold mt-8 sm:mt-16 mb-3 text-md text-white font-dmsans">Quick Links</h3>
            <div className="flex flex-col items-center sm:items-start text-sm text-white font-dmsans space-y-1">
              <button onClick={() => (window.location.href = "/")}>Home</button>
              <button onClick={() => (window.location.href = "/about_us")}>About</button>
              <button onClick={() => (window.location.href = "/news")}>News</button>
              <button onClick={() => (window.location.href = "/contact")}>Contact us</button>
            </div>
          </div>

          <div className="flex flex-col md:items-center sm:items-start text-center sm:text-left">
            <h3 className="font-semibold mt-8 sm:mt-16 mb-3 text-md text-white font-dmsans">Connect Us</h3>
            <div className="flex flex-col items-center sm:items-start text-md text-white font-dmsans space-y-2">
              <a href='https://www.linkedin.com/company/office-of-innovation-and-entrepreneurship/posts/?feedView=all'>
                <div className="flex items-center space-x-2">
                  <FaLinkedin className="text-2xl" />
                  <span className="text-sm font-dmsans">LinkedIn</span>
                </div>
              </a>
              <a href="https://www.instagram.com/oie.iitm?igsh=aXc4OHQwb3Ezand5">
                <div className="flex items-center space-x-2">
                  <FaInstagram className="text-2xl" />
                  <span className="text-sm font-dmsans sm:mb-2">Instagram</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
