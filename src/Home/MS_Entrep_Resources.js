import React from 'react'
import Navbar from '../Components/Ms_Navbar_Resources'

const MS_Entrep_Resources = () => {
  return (
    <div>
      <Navbar />
      <div className="px-4 sm:px-8 md:px-20 lg:px-40 xl:px-60 py-6 mt-10 font-dmsans">
        <h2 className="text-xl sm:text-xl font-semibold text-black">
          1. Pre-Incubation Cell <a href="https://nirmaan.iitm.ac.in/" className="text-sky-700">(Nirmaan)</a>
        </h2>
        <h2 className="text-xl sm:text-xl font-semibold text-black">
          2. Entrepreneurship Cell <a href="https://ecell.iitm.ac.in/home" className="text-sky-700">(E-Cell)</a>
        </h2>
        <h2 className="text-xl sm:text-xl font-semibold text-black">
          3. Center for Innovation <a href="https://cfi.iitm.ac.in/" className="text-sky-700">(CFI)</a>
        </h2>
        <h2 className="text-xl sm:text-xl font-semibold text-black">
          4. Gopalakrishnan-Deshpande Center for Innovation and Entrepreneurship <a href="https://gdc-iitm.org/" className="text-sky-700">(GDC)</a>
        </h2>
        <h2 className="text-xl sm:text-xl font-semibold text-black">
          5. IIT Madras Incubation Cell <a href="https://rtbi.in/incubationiitm/" className="text-sky-700">(IITMIC)</a>
        </h2>
        <h2 className="text-xl sm:text-xl font-semibold text-black">
          6. IITM Research Park <a href="https://respark.iitm.ac.in/" className="text-sky-700">(IITMRP)</a>
        </h2>
      </div>
    </div>
  )
}

export default MS_Entrep_Resources
