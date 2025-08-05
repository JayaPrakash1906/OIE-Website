import React from 'react';
import Navbar from '../Components/Ms_navbar_selection';
import img1 from "../Assets/MS(E)/Kartheek Korlepara.png";
import img2 from "../Assets/MS(E)/Jayanthi S P.png";
import img3 from "../Assets/MS(E)/Gokula Vishnu Kirti Damodaran.png";
import img4 from "../Assets/MS(E)/Gatram Sravan Kumar.png";
import img5 from "../Assets/MS(E)/Mahalakshmi.jpeg";
import img6 from "../Assets/MS(E)/Sankara narayanan.jpg";
import { FaLinkedin } from 'react-icons/fa';

const selectionList = [
  {
    name: 'Kartheek Korlepara',
    linkedin: 'https://www.linkedin.com/in/kartheek-korlepara-a232291ab/',
    image: img1,
  },
  {
    name: 'Shri Jayanthi S P',
    linkedin: 'https://www.linkedin.com/in/shrijayanthisp/',
    image: img2,
  },
  {
    name: 'Gokula Vishnu Kirti Damodaran',
    linkedin: 'https://www.linkedin.com/in/gokula-vishnu-kirti-damodaran-a3148316b/',
    image: img3,
  },
   {
    name: 'Gatram Sravan Kumar',
    linkedin: 'https://www.linkedin.com/in/sravan-kumar-gatram/',
    image: img4,
  },
   {
    name: 'Mahalakshmi S',
    linkedin: 'https://www.linkedin.com/in/mahalakshmi-vijayaraja/',
    image: img5,
  },
   {
    name: 'Sankara Narayanan V ',
    linkedin: 'https://www.linkedin.com/in/abhinavvsankar/',
    image: img6,
  },
];

const MS_Entrepreneurship_selection = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-10 text-center">
          MS(E) Programme – Selection List
        </h1>

        {/* Grid layout for selection list */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {selectionList.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-40 h-40 rounded-full object-cover mb-4"
              />
              <h2 className="text-xl font-semibold">{item.name}</h2>
              <a
                href={item.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline mt-2"
              >
                <FaLinkedin size={25}/>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MS_Entrepreneurship_selection;
