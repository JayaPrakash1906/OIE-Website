import React from 'react'
import Navbar from '../Components/Navbar';
import Img1 from '../Assets/Sudha&Shankar.jpg'
import Footer from '../Components/Footer';

const Contact = () => {
  return (
    <div>
      <Navbar />
      <div className="mt-[150px] bg-gray-200 p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center justify-center md:items-end md:justify-end md:mr-10 mb-4 md:mb-0">
            <img src={Img1} className="h-[250px] md:h-[500px] w-full object-cover" alt="Image1" />
          </div>
          <div className="px-4 md:px-16">
            <div className="border bg-blue-200 rounded-xl p-4 md:p-6">
              <h1 className="text-3xl md:text-5xl font-bold font-dmsans text-center md:text-left mt-4 md:mt-6">
                Contact us
              </h1>
              <div className="flex flex-col mt-4">
                <label htmlFor="firstName" className="py-2 font-medium text-gray-700">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  placeholder="First Name"
                  className="p-2 bg-gray-100 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-200 focus:outline-none w-full"
                />
              </div>
              <div className="flex flex-col mt-4">
                <label htmlFor="lastName" className="py-2 font-medium text-gray-700">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  placeholder="Last Name"
                  className="p-2 bg-gray-100 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-200 focus:outline-none w-full"
                />
              </div>
              <div className="flex flex-col mt-4">
                <label htmlFor="email" className="py-2 font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="text"
                  id="email"
                  placeholder="Email"
                  className="p-2 bg-gray-100 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-200 focus:outline-none w-full"
                />
              </div>
              <div className="flex flex-col mt-4">
                <label htmlFor="message" className="py-2 font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="Message"
                  rows="3"
                  className="p-2 bg-gray-100 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-200 focus:outline-none w-full resize-none"
                />
              </div>
              <div className="flex justify-center md:justify-end mt-6">
                <button className="bg-blue-500 text-white font-dmsans px-6 md:px-8 py-2 rounded-2xl hover:bg-blue-600 transition">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Contact
