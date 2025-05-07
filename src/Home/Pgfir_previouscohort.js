import React, { useState } from "react";
import Navbar from "../Components/PGFIR_Navbar";
import { FaLinkedin } from "react-icons/fa";
import img1 from "../Assets/kgmg2020-1.jpg";
import img2 from "../Assets/kgmg2020-2.jpg";
import img3 from "../Assets/kgmg2020-3.jpg";
import img4 from "../Assets/kgmg2020-4.jpg";
import img5 from "../Assets/kgmg2020-5.jpg";
import img6 from "../Assets/kgmg2020-6.jpg";
import img7 from "../Assets/ugfir-4.png";
import img8 from "../Assets/kgmg2021-1.jpg";
import img9 from "../Assets/kgmg2022-1.jpg";
import img10 from "../Assets/kgmg2022-2.jpg";
import img11 from "../Assets/kgmg2023-1.jpg";
import img12 from "../Assets/kgmg2023-2.jpg";
import img13 from "../Assets/kgmg2023-3.jpg";
import img14 from "../Assets/kgmg2023-4.jpg";
import img15 from "../Assets/kgmg2024-1.jpg";


// Grouped by year
const cohortData = {
  2024: [
    {
      img: img15, name: "Muthu Kumar K", role: "PhD", company: "Riverline", link: "https://www.linkedin.com/company/getrecontact"
    }
    
  ],
  2023: [
    {
      img: img11, name: "Vijayaraja R", role: "MS in Entrepreneurship, Blockchain for Healthcare", company: "", link: "https://www.linkedin.com/in/vijayaraja-rathinasamy/"
    },
    {
      img: img12, name: "Panchal Nikhilkumar Rajnikantbhai", role: "MS, Chemical Engineering", company: "", link: "https://www.linkedin.com/in/nikhilpanchal/?originalSubdomain=in"
    },
    {
      img: img13, name: "ARAVIND I B", role: "MS, Aerospace, Aeronautical and Astronautical/Space Engineering", company: "", link: "https://www.linkedin.com/in/aravindib/?originalSubdomain=in"
    },
    {
        img: img14, name: "Sourav Singha Roy", role: "PhD, Organometallics and Polymer", company: "", link: "https://www.linkedin.com/in/sourav-singha-roy-903a61216/?originalSubdomain=in"
      }
   
   
  ],
  2022: [
    {
      img: img9, name: "Balamurugan L ", role: "MS, Metallurgical Engineering", company: "", link: "https://www.linkedin.com/in/intelaegis/?originalSubdomain=in"
    },
    {
        img: img10, name: "SivaSubramanian M", role: " MS , Entrepreneurship by research", company: "", link: "https://www.linkedin.com/in/sivasubramanian-m-71b070100/?originalSubdomain=in"
    }
  ],
  2021: [
    {
        img: img7, name: "Prabaharan T", role: "PhD ", company: "", link: "https://www.linkedin.com/in/prabaharan-t-b77982155/"
      },
      {
        img: img7, name: "Vijaykumar Pediredla", role: "PhD.Telerobotics, Haptics and Advanced control system design", company: "", link: "https://www.linkedin.com/in/vijay-kumar-pediredla-ph-d-657435112/?originalSubdomain=ca"
      },
      {
        img: img8, name: " Srinivasa Rakesh ", role: "PhD ", company: "", link: "https://www.linkedin.com/in/srinivasarakesh/?originalSubdomain=in"
      }

  ],
  2020: [
    {
      img: img1, name: "  Gautam R  ", role: "MS, Integrated Circuit Design", company: "", link: "https://www.linkedin.com/company/edarlabs/"
    },
    {
      img: img2, name: "Suseendiran Ravichandran ", role: "PhD, Chemical Engineering", company: "", link: "https://www.linkedin.com/in/srsuseendiran/?originalSubdomain=in"
    },
    {
      img: img3, name: "Dhivyaraja Kumaran ", role: "PhD, Atomization & Aerosol Transport ", company: "", link: "https://www.linkedin.com/in/dhivyaraja/?originalSubdomain=in"
    },
    {
      img: img4, name: "MD Homaidur Rahman", role: "PhD ", company: "", link: "https://www.linkedin.com/in/md-homaidur-rahman/"
    },
    {
        img: img5, name: "Vipul Dogra", role: "PhD ", company: "", link: "https://www.linkedin.com/in/vipuldogra2126/"
      },
      {
        img: img6, name: "Kancharla Surendra Reddy", role: "PhD, Transportation Systems Engineering ", company: "", link: "https://www.linkedin.com/in/surendrark92/"
      }
  ]
};

const Ugfir_previouscohort = () => {
  const [selectedYear, setSelectedYear] = useState("2024");

  const handleYearChange = (e) => {
    setSelectedYear(e.target.value);
  };

  return (
    <div>
      <Navbar />
      <div className="text-center py-6 mt-16 px-4 sm:px-6">
        <h2 className="text-xl sm:text-3xl lg:text-4xl font-semibold text-green-700">
          Past Recipients
        </h2>
        <div className="mt-4">
          <select
            value={selectedYear}
            onChange={handleYearChange}
            className="border border-gray-300 rounded px-4 py-2 text-sm"
          >
            {Object.keys(cohortData).sort((a, b) => b - a).map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-10">
        <div className="md:grid md:grid-cols-4 md:gap-5 px-10 mb-8">
          {cohortData[selectedYear].length > 0 ? (
            cohortData[selectedYear].map((member, index) => (
              <div key={index} className="border py-3 mt-3">
                <div className="relative flex justify-center items-center mx-auto w-[144px] h-[144px] mb-4">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="rounded-sm w-full h-full object-cover transition-all duration-500 hover:rounded-full hover:filter hover:brightness-50"
                  />
                  <a
                    href={member.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 flex justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-500"
                  >
                    <FaLinkedin size={25} className="text-white text-3xl" />
                  </a>
                </div>
                <h3 className="text-md font-semibold text-green-600 text-center">{member.name}</h3>
                <p className="text-sm text-center">{member.role}</p>
                <p className="text-sm text-center font-semibold text-gray-500">{member.company}</p>
              </div>
            ))
          ) : (
            <p className="text-center col-span-4 text-gray-500">No data available for {selectedYear}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Ugfir_previouscohort;
