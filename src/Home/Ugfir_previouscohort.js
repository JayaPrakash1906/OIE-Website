import React, { useState } from "react";
import Navbar from "../Components/UGFIR_Navbar";
import { FaLinkedin } from "react-icons/fa";
import img1 from "../Assets/2020-1.jpg";
import img2 from "../Assets/2020-2.jpg";
import img3 from "../Assets/2020-3.jpg";
import img4 from "../Assets/2022-1.jpg";
import img5 from "../Assets/2023-1.jpg";
import img6 from "../Assets/2023-2.jpg";
import img7 from "../Assets/2023-3.jpg";
import img8 from "../Assets/2023-5.jpg";
import img9 from "../Assets/2023-6.jpg";
import img10 from "../Assets/ugfir-1.jpg";
import img11 from "../Assets/ugfir-2.jpg";
import img12 from "../Assets/ugfir-3.jpg";
import img13 from "../Assets/ugfir-4.png";
import img14 from "../Assets/ugfir-5.jpg";
import img15 from "../Assets/ugfir-6.jpg";
import img16 from "../Assets/ugfir-7.jpg";
import img17 from "../Assets/ugfir-8.jpg";
import img18 from "../Assets/ugfir-9.jpg";
import img19 from "../Assets/ugfir-10.jpg";
import img20 from "../Assets/ugfir-11.jpg";
import img21 from "../Assets/ugfir-12.jpg";
import img22 from "../Assets/ugfir-13.jpg";
import img23 from "../Assets/ugfir-14.jpg";

const cohortData = {
  2024: [
        {
          img: img10, name: "Jayanth K", role: "Founder", company: "Riverline", link: "https://www.linkedin.com/company/getrecontact"
        },
        {
          img: img11, name: "Phalgun Vyas", role: "Founder", company: "Sukoon", link: "http://linkedin.com/in/phalgunvyas"
        },
        {
          img: img12, name: "Shreepoorna S Rao", role: "Founder", company: "Arctus Aerospace", link: "https://www.linkedin.com/in/shreepoornasrao/"
        },
        {
          img: img13, name: "Vijai Suraj", role: "Founder", company: "Demeter", link: ""
        },
        {
          img: img14,name: "Anirudh Varna",role: "Chief Technology Officer",company: "Plenome",link: "https://www.linkedin.com/company/plenome/"
       },
       {
        img: img15,name: "Prakash Dev",role: "Founder",company: "Electra Wheeler",link: "https://www.linkedin.com/company/96685666/admin/feed/posts/"
       },
       {
        img: img16,name: "Easwar Veeragandham",role: "Founder",company: "Krishaka ",link: "https://www.linkedin.com/in/easwar-veeragandham-132367194/"
      },
      {
        img: img17,name: "Tamminaina Sai Gowtham",role: "Founder",company: "Seat of Joy",link: "https://www.linkedin.com/in/sai-gowtham-tamminaina-b847311b9/"
      },
      {
        img: img18,name: "Sarthak Saurav  ",role: "Founder",company: "Matterize",link: "https://www.linkedin.com/company/matterize/"
      },
        {
          img: img19,name: "Amit Kumar",role: "Founder",company: "Bharat Dream and Devplus",link: "https://www.linkedin.com/in/indian-dream-a126952b8/"
        },
        {
          img: img20,name: "Bindusara Reddy",role: "Founder",company: "Quark",link: "https://www.linkedin.com/in/bindusara-reddy-890b131b9/"
        },
        {
          img: img21,name: "Sujay Srivastava",role: "Founder",company: "Nexuscare",link: "https://www.linkedin.com/company/nexuscare-01/"
        },
        {
          img: img22,name: "Sujith Kumar",role: "Founder",company: "Kinople ",link: "https://www.linkedin.com/in/indian-dream-a126952b8/"
        },
        {
          img: img23,name: "Aditya Ravindran ",role: "Founder",company: "Quark",link: "https://www.linkedin.com/in/aditya-ravindran-1b734b211?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        },
        {
          img: img13,name: "Mohammad Ali ",role: "Founder",company: "Karobar",link: "https://www.linkedin.com/company/karobar-ai/"
        },
      ],
      2023: [
        {
          img: img5, name: "Vibhor Jain", role: "Co-Founder", company: "AeroDome Technologies", link: "https://www.linkedin.com/company/aerodome-technologies/"
        },
        {
          img: img6, name: "LOKESH KABDAL", role: "Co-Founder", company: "AeroDome Technologies", link: "https://www.linkedin.com/company/aerodome-technologies/"
        },
        {
          img: img7, name: "ASHOK KUMAR", role: "Co-Founder", company: "Subspace - Grow90", link: "https://www.linkedin.com/company/officialsubspace/"
        },
        {
          img: img8, name: "Raghav Talwar", role: "Founder", company: " Stealth", link: "https://www.linkedin.com/company/startupwiki/+-"
        },
        {
          img: img9, name: "Akash Anand", role: "Co-Founder", company: "Clueso", link: "https://www.linkedin.com/company/clueso/"
        },
       
      ],
      2022: [
        {
          img: img4, name: "PRAJWAL PRAKASH", role: "Founder", company: "Clueso", link: "https://www.linkedin.com/company/clueso/"
        }
      ],
      
      2020: [
        {
          img: img1, name: "YASHWANTH KUMAR", role: "Founder", company: "EdarLabs", link: "https://www.linkedin.com/company/edarlabs/"
        },
        {
          img: img2, name: "RISHABH VERMA ", role: "Founder", company: "UrbanMatrix", link: "https://www.linkedin.com/company/urbanmatrix/"
        },
        {
          img: img3, name: "KARAN SACHIN BHANUSHALI ", role: "Founder", company: "DbyT Dynamics", link: "https://www.linkedin.com/company/dbyt-dynamics/"
        }
      ]
    
};

const Ugfir_previouscohort = () => {
  const [selectedYear, setSelectedYear] = useState("2024");

  const handleYearChange = (e) => {
    setSelectedYear(e.target.value);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <div className="text-center py-10 mt-20 px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-green-700 mb-4">
          Past Recipients
        </h2>
        <select
          value={selectedYear}
          onChange={handleYearChange}
          className="border border-gray-300 rounded-md px-4 py-2 text-sm shadow-sm focus:outline-none "
        >
          {Object.keys(cohortData)
            .sort((a, b) => b - a)
            .map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
        </select>
      </div>

      <div className="px-6 sm:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {cohortData[selectedYear]?.length > 0 ? (
            cohortData[selectedYear].map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 p-5 text-center mb-6"
              >
                <div className="relative mx-auto w-32 h-32 mb-4 overflow-hidden rounded-full ">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="object-cover w-full h-full transition-all duration-500 hover:brightness-50"
                  />
                  {member.link && (
                    <a
                      href={member.link.replace(/^\[(.*)\]$/, "$1")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute inset-0 flex justify-center items-center opacity-0 hover:opacity-100 bg-black bg-opacity-40 transition-opacity"
                    >
                      <FaLinkedin size={28} className="text-white" />
                    </a>
                  )}
                </div>
                <h3 className="text-lg font-semibold text-green-700">{member.name}</h3>
                <p className="text-sm text-gray-600">{member.role}</p>
                <p className="text-sm font-medium text-gray-500">{member.company}</p>
              </div>
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500">
              No data available for {selectedYear}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Ugfir_previouscohort;




















































// import React, { useState } from "react";
// import Navbar from "../Components/UGFIR_Navbar";
// import { FaLinkedin } from "react-icons/fa";
// import img1 from "../Assets/2020-1.jpg";
// import img2 from "../Assets/2020-2.jpg";
// import img3 from "../Assets/2020-3.jpg";
// import img4 from "../Assets/2022-1.jpg";
// import img5 from "../Assets/2023-1.jpg";
// import img6 from "../Assets/2023-2.jpg";
// import img7 from "../Assets/2023-3.jpg";
// import img8 from "../Assets/2023-5.jpg";
// import img9 from "../Assets/2023-6.jpg";
// import img10 from "../Assets/ugfir-1.jpg";
// import img11 from "../Assets/ugfir-2.jpg";
// import img12 from "../Assets/ugfir-3.jpg";
// import img13 from "../Assets/ugfir-4.png";
// import img14 from "../Assets/ugfir-5.jpg";
// import img15 from "../Assets/ugfir-6.jpg";
// import img16 from "../Assets/ugfir-7.jpg";
// import img17 from "../Assets/ugfir-8.jpg";
// import img18 from "../Assets/ugfir-9.jpg";
// import img19 from "../Assets/ugfir-10.jpg";
// import img20 from "../Assets/ugfir-11.jpg";
// import img21 from "../Assets/ugfir-12.jpg";
// import img22 from "../Assets/ugfir-13.jpg";
// import img23 from "../Assets/ugfir-14.jpg";


// // Grouped by year
// const cohortData = {
//   2024: [
//     {
//       img: img10, name: "Jayanth K", role: "Founder", company: "Riverline", link: "https://www.linkedin.com/company/getrecontact"
//     },
//     {
//       img: img11, name: "Phalgun Vyas", role: "Founder", company: "Sukoon", link: "http://linkedin.com/in/phalgunvyas"
//     },
//     {
//       img: img12, name: "Shreepoorna S Rao", role: "Founder", company: "Arctus Aerospace", link: "https://www.linkedin.com/in/shreepoornasrao/"
//     },
//     {
//       img: img13, name: "Vijai Suraj", role: "Founder", company: "Demeter", link: ""
//     },
//     {
//       img: img14,name: "Anirudh Varna",role: "Chief Technology Officer",company: "Plenome",link: "https://www.linkedin.com/company/plenome/"
//    },
//    {
//     img: img15,name: "Prakash Dev",role: "Founder",company: "Electra Wheeler",link: "https://www.linkedin.com/company/96685666/admin/feed/posts/"
//    },
//    {
//     img: img16,name: "Easwar Veeragandham",role: "Founder",company: "Krishaka ",link: "https://www.linkedin.com/in/easwar-veeragandham-132367194/"
//   },
//   {
//     img: img17,name: "Tamminaina Sai Gowtham",role: "Founder",company: "Seat of Joy",link: "https://www.linkedin.com/in/sai-gowtham-tamminaina-b847311b9/"
//   },
//   {
//     img: img18,name: "Sarthak Saurav  ",role: "Founder",company: "Matterize",link: "https://www.linkedin.com/company/matterize/"
//   },
//     {
//       img: img19,name: "Amit Kumar",role: "Founder",company: "Bharat Dream and Devplus",link: "https://www.linkedin.com/in/indian-dream-a126952b8/"
//     },
//     {
//       img: img20,name: "Bindusara Reddy",role: "Founder",company: "Quark",link: "https://www.linkedin.com/in/bindusara-reddy-890b131b9/"
//     },
//     {
//       img: img21,name: "Sujay Srivastava",role: "Founder",company: "Nexuscare",link: "https://www.linkedin.com/company/nexuscare-01/"
//     },
//     {
//       img: img22,name: "Sujith Kumar",role: "Founder",company: "Kinople ",link: "https://www.linkedin.com/in/indian-dream-a126952b8/"
//     },
//     {
//       img: img23,name: "Aditya Ravindran ",role: "Founder",company: "Quark",link: "https://www.linkedin.com/in/aditya-ravindran-1b734b211?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
//     },
//     {
//       img: img13,name: "Mohammad Ali ",role: "Founder",company: "Karobar",link: "https://www.linkedin.com/company/karobar-ai/"
//     },
//   ],
//   2023: [
//     {
//       img: img5, name: "Vibhor Jain", role: "Co-Founder", company: "AeroDome Technologies", link: "https://www.linkedin.com/company/aerodome-technologies/"
//     },
//     {
//       img: img6, name: "LOKESH KABDAL", role: "Co-Founder", company: "AeroDome Technologies", link: "https://www.linkedin.com/company/aerodome-technologies/"
//     },
//     {
//       img: img7, name: "ASHOK KUMAR", role: "Co-Founder", company: "Subspace - Grow90", link: "https://www.linkedin.com/company/officialsubspace/"
//     },
//     {
//       img: img8, name: "Raghav Talwar", role: "Founder", company: " Stealth", link: "https://www.linkedin.com/company/startupwiki/+-"
//     },
//     {
//       img: img9, name: "Akash Anand", role: "Co-Founder", company: "Clueso", link: "https://www.linkedin.com/company/clueso/"
//     },
   
//   ],
//   2022: [
//     {
//       img: img4, name: "PRAJWAL PRAKASH", role: "Founder", company: "Clueso", link: "https://www.linkedin.com/company/clueso/"
//     }
//   ],
//   2021: [
  
//   ],
//   2020: [
//     {
//       img: img1, name: "YASHWANTH KUMAR", role: "Founder", company: "EdarLabs", link: "https://www.linkedin.com/company/edarlabs/"
//     },
//     {
//       img: img2, name: "RISHABH VERMA ", role: "Founder", company: "UrbanMatrix", link: "https://www.linkedin.com/company/urbanmatrix/"
//     },
//     {
//       img: img3, name: "KARAN SACHIN BHANUSHALI ", role: "Founder", company: "DbyT Dynamics", link: "https://www.linkedin.com/company/dbyt-dynamics/"
//     }
//   ]
// };

// const Ugfir_previouscohort = () => {
//   const [selectedYear, setSelectedYear] = useState("2024");

//   const handleYearChange = (e) => {
//     setSelectedYear(e.target.value);
//   };

//   return (
//     <div>
//       <Navbar />
//       <div className="text-center py-6 mt-16 px-4 sm:px-6">
//         <h2 className="text-xl sm:text-3xl lg:text-4xl font-semibold text-green-700">
//           Past Recipients
//         </h2>
//         <div className="mt-4">
//           <select
//             value={selectedYear}
//             onChange={handleYearChange}
//             className="border border-gray-300 rounded px-4 py-2 text-sm"
//           >
//             {Object.keys(cohortData).sort((a, b) => b - a).map((year) => (
//               <option key={year} value={year}>
//                 {year}
//               </option>
//             ))}
//           </select>
//         </div>
//       </div>

//       <div className="mt-10">
//         <div className="md:grid md:grid-cols-4 md:gap-5 px-10 mb-8">
//           {cohortData[selectedYear].length > 0 ? (
//             cohortData[selectedYear].map((member, index) => (
//               <div key={index} className="border py-3 mt-3">
//                 <div className="relative flex justify-center items-center mx-auto w-[144px] h-[144px] mb-4">
//                   <img
//                     src={member.img}
//                     alt={member.name}
//                     className="rounded-sm w-full h-full object-cover transition-all duration-500 hover:rounded-full hover:filter hover:brightness-50"
//                   />
//                   <a
//                     href={member.link}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="absolute inset-0 flex justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-500"
//                   >
//                     <FaLinkedin size={25} className="text-white text-3xl" />
//                   </a>
//                 </div>
//                 <h3 className="text-md font-semibold text-green-600 text-center">{member.name}</h3>
//                 <p className="text-sm text-center">{member.role}</p>
//                 <p className="text-sm text-center font-semibold text-gray-500">{member.company}</p>
//               </div>
//             ))
//           ) : (
//             <p className="text-center col-span-4 text-gray-500">No data available for {selectedYear}</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Ugfir_previouscohort;
