import React from 'react'
import img1 from '../Assets/OIE Logo footer.jpg'
import { FaEnvelope, FaInstagram, FaLinkedin, FaLocationDot, FaMobile, FaPhone } from 'react-icons/fa6'

const Footer = () => {
  return (
    <div className='mt-16 md:mb-auto'>
    <div className='bg-blue-500'>
                <div className='grid grid-cols-4 gap-3'>
                            <div >
                                  <img className=" h-30 m-16" src={img1} alt="cfi image" />
                            </div>
                            <div className="flex flex-col items-center ">
                                    <div>
                                            <h3 className="font-semibold mt-16 mb-3 text-md text-white font-dmsans">Locate us</h3>
                                        <div className="flex items-start mt-2 text-sm text-white font-dmsans">
                                                <FaLocationDot className="mr-2 h-4 w-4" />
                                            <div>
                                                <p>Office of Innovation and Entrepreneurship,</p>
                                                <p>I Floor, Sudha & Shankar Innovation Hub</p>
                                                <p>IIT Madras, Chennai - 600 036</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center text-sm text-white font-dmsans">
                                                <FaEnvelope className="mr-2 h-4 w-4" />
                                                <span>office.ie@imail.iitm.ac.in</span>
                                        </div>
                                        <div className="flex items-center text-sm text-white font-dmsans">
                                                <FaPhone className="mr-2 h-4 w-4" />
                                                <span>044 - 2257 8514</span>
                                        </div>
                                    </div>
                            </div>


                            <div className="flex flex-col items-center  text-center">
                                    <h3 className="font-semibold mt-16 mb-3 text-md text-white font-dmsans">Quick Links</h3>
                                <div className="flex flex-col items-start text-sm text-white font-dmsans">
                                    <button  onClick={() => (window.location.href = "/")}>Home</button>
                                    <button  onClick={() => (window.location.href = "/about_us")}>About</button>
                                    <button  onClick={() => (window.location.href = "/news")}>News</button>
                                    <button  onClick={() => (window.location.href = "/contact")}>Contact us</button>
                                </div>
                            </div>

                            <div className="flex flex-col items-center text-center">
                                        <h3 className="font-semibold mt-16 mb-3 text-md text-white font-dmsans">Connect Us</h3>
                                <div className="flex flex-col items-start space-y-2 text-md text-white font-dmsans">
                                        <a href='https://www.linkedin.com/company/office-of-innovation-and-entrepreneurship/posts/?feedView=all'>
                                        <div className="flex items-center space-x-2">
                                                <FaLinkedin className="text-2xl"/> {/* Increase icon size */}
                                                <span className="text-sm font-dmsans">LinkedIn</span> {/* Add platform name */}
                                        </div></a>
                                        
                                        <a href="https://www.instagram.com/oie.iitm?igsh=aXc4OHQwb3Ezand5">
                                        <div className="flex items-center space-x-2" >
                                                <FaInstagram className="text-2xl"/> {/* Increase icon size */}
                                                <span className="text-sm font-dmsans">Instagram</span> {/* Add platform name */}
                                        </div></a>
                                </div>
                            </div>

                </div>
    </div>
    </div>
  )
}

export default Footer