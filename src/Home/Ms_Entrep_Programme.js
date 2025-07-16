import React from 'react'
import Navbar from '../Components/Ms_Navbar_Programme'
import img1 from '../Assets/Activities/process.png'

const Ms_Entrep_Programme = () => {
  return (
    <div>   
      <Navbar />  

      <div className="text-left py-6 px-4 md:px-20 lg:px-40 mt-10 font-dmsans">
        <h1 className="text-2xl font-semibold text-sky-700 mb-4">Application Process</h1>
        <h2 className="text-lg text-black">1. Students apply against a call for admission against specific projects as listed in the application process</h2>
        <h2 className="text-lg text-black">2. Applications are screened based on the responses and candidates are called for interview</h2>
        <h2 className="text-lg text-black">3. Interview is done by the committee consisting of a panel of faculty members, including the faculty who proposed the idea</h2>
        <h2 className="text-lg text-black">4. Students selected from the interview are recommended for admission to the MS(E) program subject to availability of seats</h2>
        <h2 className="text-lg text-black">5. Host department will be the department of the main guide (project proposer)</h2>
        <h2 className="text-lg text-black">6. Students will complete recommended courses by the Graduate Test Committee (GTC) and as recommended by the guide</h2>
        <h2 className="text-lg text-black">7. Students will submit a business development thesis, recommended and approved by the GTC for award of the degree</h2>
      </div> 

      <div className="text-left py-6 px-4 md:px-20 lg:px-40 mt-10 font-dmsans">
        <h1 className="text-2xl font-semibold text-sky-700 mb-4">
          The final Thesis submitted will cover the following aspects for award of degree
        </h1>
        <img
          src={img1}
          alt="Application Process Flow"
          className="rounded-md mt-8 w-full max-w-4xl mx-auto"
        />
      </div>
    </div>
  )
}

export default Ms_Entrep_Programme
