import React from 'react';
import Navbar from '../Components/Ms_Navbar_submitpreference';
import formImage from '../Assets/application_Ms.png'; // Make sure this file exists

const MS_Submitpreferences = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="flex justify-center items-center px-4 sm:px-6 lg:px-8 mt-10 sm:mt-16 lg:mt-20">
        <a
          href="https://forms.gle/xcuxodQceJ4uV1Eh6"
          className="bg-white shadow-xl rounded-2xl p-6 sm:p-8 lg:p-10 w-full max-w-md sm:max-w-lg lg:max-w-2xl transition-transform hover:scale-[1.01]"
        >
          <img
            src={formImage}
            alt="Application Form Screenshot"
            className="rounded-xl mb-4 border border-gray-300 w-full object-cover max-h-72 sm:max-h-96"
          />
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-900">
            Application for MS in Entrepreneurship@IITM
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 mt-2 font-dmsans">
            This form is part of the 2 step process to collect further information to consider your application for MS in Entrepreneurship.
          </p>
        </a>
      </div>
    </div>
  );
};

export default MS_Submitpreferences;
