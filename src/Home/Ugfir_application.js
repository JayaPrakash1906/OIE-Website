import React from 'react'
import Navbar from '../Components/UGFIR_Navbar'

const Ugfir_application = () => {
  return (
    <div>
      <Navbar/>
      <div className="text-center py-6 mt-16 px-4 sm:px-6">
        <h2 className="text-3xl sm:text-3xl lg:text-5xl font-semibold text-green-700 font-dmsans">
        Claim your place in the May 2025 cohort — application link awaits below!
        </h2>
        <div className="flex justify-center">
  <button className="mt-4 bg-gradient-to-r from-green-600 to-emerald-700 text-white px-6 py-3 rounded-xl hover:from-green-700 hover:to-emerald-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center gap-2">
    <a
      href="https://forms.gle/GaRGLMvodL41pNVX9" target="_blank" rel="noopener noreferrer" className="flex items-center"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor"
      >
        <path
          strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4"
        />
      </svg>
      Apply Now
    </a>
  </button>
</div>


      </div>
    </div>
  )
}

export default Ugfir_application
