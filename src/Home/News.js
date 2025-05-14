import React from 'react';
import Navbar from '../Components/Navbar';
import img1 from "../Assets/news1.png";
import img2 from '../Assets/news2.png';
import img3 from '../Assets/news3.png';
import img4 from '../Assets/news4.jpeg';
import img5 from '../Assets/news5.png';
import img6 from '../Assets/news6.png';
import img7 from '../Assets/news7.png';
import img8 from '../Assets/news8.png';
import img9 from '../Assets/news9.png';
import img10 from '../Assets/news10.png';
import img11 from '../Assets/news11.jpg';
import img12 from '../Assets/news12.jpeg';
const posts = [

  {
    id: 1,
    title: "CFI Open House 2025: A Celebration of Innovation and Entrepreneurship",
    date: "15th Mar 2025",
    image: img8,
    content: "CFI Open House 2025 showcased groundbreaking innovations, entrepreneurial ventures, and inspiring student achievements.",
    link:"https://www.linkedin.com/posts/office-of-innovation-and-entrepreneurship_startup-products-ideas-activity-7307278723890720768-CpJh?utm_source=share&utm_medium=member_desktop&rcm=ACoAADFikn4B6jA0Ct1Y84TowFZRR2JHg75s9fg"
  },
  {
    id: 2,
    title: "Delegates from Kenya, Tanzania & UK Join Immersion Program at IIT Madras",
    date: "3rd Mar 2025",
    image: img10,
    content: "Delegates from Kenya, Tanzania, and the UK embark on a 2-week innovation and entrepreneurship immersion at IIT Madras under a landmark quadrilateral MoU.",
    link:"https://www.linkedin.com/posts/office-of-innovation-and-entrepreneurship_kenya-tanzania-uk-activity-7304081419499159552-OwfS?utm_source=share&utm_medium=member_desktop&rcm=ACoAADFikn4B6jA0Ct1Y84TowFZRR2JHg75s9fg"
  },
  {
    id: 3,
    title: "Stellantis, Raftar & CFI Gift EV to IIT Madras for Innovation & Research",
    date: "07th Feb 2025",
    image: img5,
    content: "Stellantis, in collaboration with Raftar and CFI, has gifted an electric vehicle to IIT Madras, enhancing research and supporting CFI and OIE activities.",
    link:"https://www.linkedin.com/posts/office-of-innovation-and-entrepreneurship_cfi-ev-cifi-activity-7293812677972303872-VFVQ?utm_source=share&utm_medium=member_desktop&rcm=ACoAADFikn4B6jA0Ct1Y84TowFZRR2JHg75s9fg"
  },
  {
    id: 4,
    title: "Raftar's Triumph: Leading the Charge in EV Innovation! ",
    date: "22nd Jan 2025",
    image: img6,
    content: "Raftar shines with multiple top honors in EV innovation, setting new benchmarks in engineering excellence!",
    link: "https://www.linkedin.com/posts/office-of-innovation-and-entrepreneurship_formulabharat-raftarracing-evinnovation-activity-7289978534796705794-Uj7a?utm_source=share&utm_medium=member_desktop&rcm=ACoAADFikn4B6jA0Ct1Y84TowFZRR2JHg75s9fg"

  },
  {
    id: 5,
    title: "A Glimpse of IIT Madras Open House 2025",
    date: "3rd & 4th Jan 2025",
    image: img7,
    content: "Thrilled to have been part of an inspiring celebration of innovation at Shaastra 2025—let’s keep pushing boundaries and shaping the future! ",
    link: "https://www.linkedin.com/posts/office-of-innovation-and-entrepreneurship_iitmadras-openhouse2025-innovationinaction-activity-7281306051092590592-aQvp?utm_source=share&utm_medium=member_desktop&rcm=ACoAADFikn4B6jA0Ct1Y84TowFZRR2JHg75s9fg"

  },
  {
    id: 6,
    title: "CSR Awards & Summit 2024",
    date: "13th Dec 2024",
    image: img4,
    content: "The Office of Innovation and Entrepreneurship (OIE) participated in the IIT Madras CSR Awards & Summit 2024, focusing on inclusive growth through CSR and technology. ",
    link: "https://www.linkedin.com/posts/office-of-innovation-and-entrepreneurship_csr-technology-oie-ugcPost-7273587402344935424-0DF-/?utm_source=share&utm_medium=member_desktop"
  },
 
  {
    id: 7,
    title: "Research Conclave 2024",
    date: "26th Oct 2024",
    image: img1,
    content: "Hosted by the Centre For Innovation (CFI), Research Conclave-2024 will unveil groundbreaking ideas crafted by our talented teams and clubs.",
    link: "https://www.linkedin.com/posts/office-of-innovation-and-entrepreneurship_researchconclave2024-cfi-researchconclave2024-activity-7255831808057999361-CZey?utm_source=share&utm_medium=member_desktop"
  },
  
  {
    id: 8,
    title: " The Energy Consortium - IIT Madras",
    date: "29th Oct 2024",
    image: img3,
    content: "Discussions with IIT Madras leaders and visits to labs highlighted advancements in carbon capture, flow batteries, and future electric grids",
    link: "https://www.linkedin.com/posts/the-energy-consortium-iit-madras_eonatiitmadras-sustainablefuture-energytransition-ugcPost-7257334664070135809-vdzj?utm_source=share&utm_medium=member_desktop"
  },
  {
    id: 9,
    title: "NIRMAAN IITM at Demo Day 2024: A Celebration of Innovation & Impact",
    date: "27th Sep 2024",
    image: img9,
    content: " NIRMAAN IITM shines at Demo Day 2024, showcasing innovation, leadership, and deeptech excellence!",
    link: "https://www.linkedin.com/posts/office-of-innovation-and-entrepreneurship_demoday2024-innovationhub-iot-activity-7247916838716596224-RFf_?utm_source=share&utm_medium=member_desktop&rcm=ACoAADFikn4B6jA0Ct1Y84TowFZRR2JHg75s9fg"
  },
  {
    id: 10,
    title: "Investor-Startup meet from IITMIC",
    date: "18th Sep 2024",
    image: img2,
    content: " Our incubated startups—Plenome, Matterize and Interacts AI showcased their innovations and had meaningful one-on-one discussions with the investors.",
    link: "https://www.linkedin.com/posts/iitm-incubation-cell_iitmic-deeptech-iitmstartups-activity-7251916041113518081-T7z-?utm_source=share&utm_medium=member_desktop"
  },
  {
    id: 11,
    title: "IITM Startup Shatam Series- Success talk celebrating Agnicul",
    date: "20th Aug 2024",
    image: img11,
    content: "Team Abhyuday and Inbound Aerospace hosted a success meet with AgniKul Cosmos, celebrating their historic Agnibaan launch and unveiling IITM’s first Innosphere magazine ",
    link:"https://www.linkedin.com/posts/office-of-innovation-and-entrepreneurship_startups-agnibaan-iitm-activity-7231999312501596161-lEw3?utm_source=share&utm_medium=member_desktop&rcm=ACoAADFikn4B6jA0Ct1Y84TowFZRR2JHg75s9fg"
  },
  {
    id: 12,
    title: "Innovating Melodies with A. R. Rahman",
    date: "1st Aug 2024",
    image: img12,
    content: "A.R. Rahman interacted with teams from NIRMAAN IITM, Centre For Innovation, Plenome, and Ewebstore.in. ",
    link:"https://www.linkedin.com/posts/office-of-innovation-and-entrepreneurship_issaipuyal-innovation-vr-activity-7224961542780338176-tBxG?utm_source=share&utm_medium=member_desktop&rcm=ACoAADFikn4B6jA0Ct1Y84TowFZRR2JHg75s9fg"
  },
];

function App() {
  return (
    <div>
      <Navbar />
      <div className="text-center text-5xl font-semibold mt-[110px] mb-[10px] font-dmsans pt-8">
        News
      </div>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-5">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-1xl w-full">
          {posts.map((post) => (
            <div key={post.id} className="bg-white border rounded-lg overflow-hidden">
              <a href={post.link} className="block"target="_blank" rel="noopener noreferrer">
                <img className="w-full h-48 object-cover" src={post.image} alt={post.title} />
                <div className="p-4">
                  <div className="flex items-center space-x-2 text-gray-500 text-sm font-dmsans">
                    <span>{post.date}</span>
                  </div>
                  <h2 className="text-xl font-semibold mt-2 font-dmsans">{post.title}</h2>
                  {post.content && <p className="mt-1 text-gray-700 font-dmsans">{post.content}</p>}
                  <span className="sr-only">Read more about {post.title}</span>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
