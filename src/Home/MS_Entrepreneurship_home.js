import React from 'react'
import Navbar from '../Components/Ms_Navbar_home'
import img1 from '../Assets/Activities/process.png'

const MS_Entrepreneurship_home = () => {
  return (
    <div className="font-dmsans bg-white text-gray-800">
      <Navbar />

      {/* Header */}
      <div className="text-center py-6 mt-16 px-4 sm:px-6">
        <h2 className="text-xl sm:text-3xl lg:text-4xl font-semibold text-sky-700">
          MS (Entrepreneurship)
        </h2>
      </div>

      {/* About Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-20 lg:px-32">
        <h1 className="text-base sm:text-lg lg:text-xl font-semibold text-sky-700 mb-4">
          About the Program
        </h1>

        <p className="text-sm sm:text-base text-justify mb-4">
          IIT Madras is widely admired as the leading Institute in India promoting Start-ups, incubation,
          and entrepreneurship promotion and support systems, more particularly entrepreneurial ventures
          of the deep technology variety, with an enviable start-up ecosystem. Offered since 1982-83,
          the MS (Entrepreneurship) by Research programme is India's torchbearer among all Institutions
          of higher learning that have aimed to promote entrepreneurship via their programmes. Over the
          last four decades, it has matured steadily and strongly to emerge as a benchmark among all
          entrepreneurship-focused Institutional programmes, as can be evidenced by the prestigious
          international and national awards and honours conferred on the scholars and their start-ups.
        </p>

        <p className="text-sm sm:text-base text-justify mb-4">
          Selected scholars will be guided to systematically and diligently discover entrepreneurial opportunities
          and formally establish their start-ups via an effective combination of taught courses, intense research
          supported by astute supervision, and mentorship by highly accomplished entrepreneurs and others of the
          start-up ecosystem.
        </p>

        <p className="text-sm sm:text-base text-justify mb-4">
          Earlier scholars of the programme have been granted valuable technology patents, which have been
          commercialized through formal technology transfers to leading organizations in specific economic sectors.
          Now, this full-time programme invites applications from among eligible persons, who would be inspired by
          its remarkable history and wish to contribute significantly to its future history.
        </p>

        <p className="text-sm sm:text-base text-justify mb-4 text-blue-600">
          Currently we have 31 students who are well on their way to discover exciting opportunities in the projects
          they applied for. Out of them, 4 are already incorporating their start-up and a few more are in the discovery
          stage.
        </p>

        {/* Next Steps */}
        <h2 className="text-base sm:text-lg lg:text-xl font-semibold text-sky-700 mt-8 mb-2">Next steps:</h2>
        <p className="text-sm sm:text-base text-justify mb-12">
          Please find below a list of topics/projects currently open for applications. You may select up to 2 topics that
          align with your interests and background. Once you’ve made your selection, kindly submit your preferences using
          the ‘Submit Preferences’ button at the top of the page. Shortlisted applicants will be invited for an interview.
        </p>
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

      {/* Projects Table */}
      {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-20 lg:px-32">
        <h1 className="text-xl sm:text-2xl font-semibold text-sky-700 mb-4">
          List of Projects Available for 2025 July Admissions
        </h1>

        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 text-sm sm:text-base">
            <thead className="bg-sky-100 text-left">
              <tr>
                <th className="border border-gray-300 px-4 py-2">S.No.</th>
                <th className="border border-gray-300 px-4 py-2">Topic of the Proposed Project</th>
              </tr>
            </thead>
            <tbody>
              {[
                "Plant-based polymers for food packaging",
                "Medical Device Testing",
                "Development of Indigenous FPGA based programmable real-time controller for Vibration Testing",
                "Development of Scalable Thermoelectric Modules for Electronic Cooling and Smart Wearable Energy Harvesting",
                "Design and development of a low cost multi purpose electric vehicle for medical, restaurant, municipal applications",
                "Techno Economic Analysis",
                "Conversion of carbon dioxide to value added products",
                "Enabling large scale climate and atmospheric monitoring using robotic sensors and technology development",
                "Development of FRP poles and wire mesh for fencing",
                "Development of a Bio-signal based system for early prediction of Preterm Pregnancies",
                "Techno-Economic Evaluation of Platform Chemicals produced by Biorefineries",
                "Environment control system for maintaining cell viability during imaging",
                "Ballistic nanoparticle-injection system for tissues and cells",
                "Implementation of phase-matched substrate strain and fluid-flow over cellular monolayers.",
                "A Sustainable Smart Urban Drainage Network to tackle Urban Flood and Enhance the Fresh Water Resources",
                "Wearable assistive and rehabilitation device (WARD)",
                "Stock Market for Content creators",
                "Drug Reformulation",
                "Enterprise development for dissemination of rural technology",
                "Machine vision based controller for cardamom drying in heat pump systems",
                "Real-time navigation and tracking framework based on Ultra Wideband technology",
                "Developing India’s first secure and reliable flight controller focusing on multi-sensor data fusion with low-cost sensors",
                "Photonics and quantum technology innovations",
                "Gait trainer and lower limb exoskeleton for lower limb rehabilitation of stroke and SCI patients",
                "Damped cutting tools for high performnace machining",
                "Tech-Startup Blueprint for Carbon Capture as a Service (CCaaS) Using Next-Gen Solvent Systems",
                "High performance bimetallic/multi-metallic/composite sheet manufacturing technology",
                "Biodegradable packaging material",
                "Electrochemical Microfluidic device for rapid antibiotic susceptibility testing of urinary tract infections",
                "New Battery Material Development, Scale-up and Commercialization",
                "AI-powered web application for hosting and processing construction digital twins for Automated construction monitoring.",
                "Electrification of materials manufacturing - non-equilibrium processing of materials",
                "Vibrotactile glove as a therapeutic device to help Parkinson's disease patients",
                "Development of an exoskeleton to help people with Brachial plexus injury",
                "Human locomotion-based energy harvester",
                "Ecofriendly treatment technology for hazardous chemicals from industry ",
                "Chlorine free Disinfection system using electochemical ozonation",
                "Reinventing Sanitation with circular economy model ",
                "Formulation and Testing of Inks for Digital Printing",
                "Intelligent home surveillance and management system",
                "Human collaborative robots",
                "Digital dashboards for management of education and nutrition delivery",
              ].map((topic, index) => (
                <tr key={index}>
                   <td className="border border-gray-300 px-4 py-2">{`P${String(index + 1).padStart(2, '0')}`}</td>
                  <td className="border border-gray-300 px-4 py-2">{topic}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className='mt-4'></div>
      </div> */}
     
    </div>
  )
}

export default MS_Entrepreneurship_home
