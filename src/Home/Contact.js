import React from 'react'
import Navbar from '../Components/Navbar';
import Img1 from '../Assets/Sudha&Shankar.jpg'
import Footer from '../Components/Footer';

const Contact = () => {
  return (
    <div>
            <Navbar />
                  <div className="mt-[150px] bg-gray-200 p-6">
                              <div className='grid grid-cols-2 gap-4'>
                                      <div className='flex items-end justify-end md:mr-10' >
                                              <img src={Img1} className="h=[500px]  " alt="Image1" />
                                      </div>
                                          <div className='px-16'>
                                                  <div className='border bg-blue-200 rounded-xl mr-6  '>
                                                        <h1 className='px-6 text-5xl font-bold font-dmsans mt-6'>Contact us</h1>
                                                            <div className="flex flex-col">
                                                                    <label htmlFor="firstName" className="px-6 py-4 font-medium text-gray-700">
                                                                            First Name
                                                                    </label>
                                                                          <div className='px-6'>
                                                                                  <input
                                                                                        type="text"
                                                                                        id="firstName"
                                                                                        placeholder="First Name"
                                                                                        className="p-2 bg-gray-100 border-gray-300 rounded-md focus:ring-2 focus:ring-green-200 focus:outline-none w-full"
                                                                                  />
                                                                            </div>
                                                            </div>
                                                            <div className="flex flex-col">
                                                                    <label htmlFor="firstName" className="px-6 py-4 font-medium text-gray-700">
                                                                            Last Name
                                                                    </label>
                                                                          <div className='px-6'>
                                                                                  <input
                                                                                        type="text"
                                                                                        id="lastName"
                                                                                        placeholder="Last Name"
                                                                                        className="p-2 bg-gray-100 border-gray-300 rounded-md focus:ring-2 focus:ring-green-200 focus:outline-none w-full"
                                                                                  />
                                                                            </div>
                                                            </div>
                                                            <div className="flex flex-col">
                                                                    <label htmlFor="firstName" className="px-6 py-4 font-medium text-gray-700">
                                                                            Email
                                                                    </label>
                                                                          <div className='px-6'>
                                                                                  <input
                                                                                        type="text"
                                                                                        id="email"
                                                                                        placeholder="Email"
                                                                                        className="p-2 bg-gray-100 border-gray-300 rounded-md focus:ring-2 focus:ring-green-200 focus:outline-none w-full"
                                                                                  />
                                                                            </div>
                                                            </div>
                                                            <div className="flex flex-col">
                                                                    <label htmlFor="firstName" className="px-6 py-4 font-medium text-gray-700">
                                                                            Message
                                                                    </label>
                                                                          <div className='px-6'>
                                                                          <textarea
                                                                                          id="message"
                                                                                          placeholder="Message"
                                                                                          rows="3" // Sets the height to approximately three rows
                                                                                          className="p-2 bg-gray-100 border-gray-300 rounded-md focus:ring-2 focus:ring-green-200 focus:outline-none w-full resize-none" // 'resize-none' disables resizing
                                                                                  />   
                                                                            </div>
                                                                            <div className=" flex justify-end items-end">
                                          <button className='mr-6 mt-6 bg-blue-500 text-white font-dmsans px-8 py-1 rounded-2xl hover:bg-blue-600 transition mb-6'>
                                              Submit
                                          </button>
                                   </div>  
                                                            </div>
                                                  </div>
                                      </div>
                              </div>
                  </div>
                  <Footer/>
    </div>
  )
}

export default Contact
