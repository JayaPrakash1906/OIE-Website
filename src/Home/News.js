import React from 'react';
import Navbar from '../Components/Navbar';
import img1 from "../Assets/news1.png";
import img2 from '../Assets/news2.png';
import img3 from '../Assets/news3.png';
import img4 from '../Assets/csr_event.jpeg'

const posts = [
  {
    id: 1,
    title: "CSR Awards & Summit 2024",
    date: "13th Dec 2024",
    image: img4,
    content: "The Office of Innovation and Entrepreneurship (OIE) participated in the IIT Madras CSR Awards & Summit 2024, focusing on inclusive growth through CSR and technology. ",
    link: "https://www.linkedin.com/posts/office-of-innovation-and-entrepreneurship_csr-technology-oie-ugcPost-7273587402344935424-0DF-/?utm_source=share&utm_medium=member_desktop"
  },
  {
    id: 2,
    title: "Research Conclave 2024",
    date: "26th Oct 2024",
    image: img1,
    content: "Hosted by the Centre For Innovation (CFI), Research Conclave-2024 will unveil groundbreaking ideas crafted by our talented teams and clubs.",
    link: "https://www.linkedin.com/posts/office-of-innovation-and-entrepreneurship_researchconclave2024-cfi-researchconclave2024-activity-7255831808057999361-CZey?utm_source=share&utm_medium=member_desktop"
  },
  {
    id: 3,
    title: "Investor-Startup meet from IITMIC",
    date: "Sep 18",
    image: img2,
    content: " Our incubated startups—Plenome, Matterize and Interacts AI showcased their innovations and had meaningful one-on-one discussions with the investors.",
    link: "https://www.linkedin.com/posts/iitm-incubation-cell_iitmic-deeptech-iitmstartups-activity-7251916041113518081-T7z-?utm_source=share&utm_medium=member_desktop"
  },
  {
    id: 4,
    title: " The Energy Consortium - IIT Madras",
    date: "29th Oct 2024",
    image: img3,
    content: "Discussions with IIT Madras leaders and visits to labs highlighted advancements in carbon capture, flow batteries, and future electric grids",
    link: "https://www.linkedin.com/posts/the-energy-consortium-iit-madras_eonatiitmadras-sustainablefuture-energytransition-ugcPost-7257334664070135809-vdzj?utm_source=share&utm_medium=member_desktop"
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
                  <div className="flex items-center space-x-2 text-gray-500 text-sm">
                    <span>{post.date}</span>
                  </div>
                  <h2 className="text-xl font-semibold mt-2">{post.title}</h2>
                  {post.content && <p className="mt-1 text-gray-700">{post.content}</p>}
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
