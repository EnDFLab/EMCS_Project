import React from "react";
// import Header from "../components/Header";
import Footer from "../components/Footer";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 ">
      {/* Header */}
      <div className="bg-[#48bdd5] text-white text-center py-3 text-sm font-bold">
      Development of Smart Energy Management and Control System (EMCS) using the Internet of Things
      </div>

      {/* Main Content */}
      <main className="flex-1">
        {/* Image Section */}
        <div>
          <img src="/images/EEE.jpg" alt="EEE" className=" w-full h-64 object-cover" />
        </div>

        {/* Introduction */}
        <section className="px-10 py-8 ">
          <h1 className="text-3xl text-[#48bdd5] font-bold mb-2">Introduction</h1>
          <h1 className="text-2xl font-bold mb-4">EMCS</h1>
          <p className="text-lg leading-6">
            Energy management is a systematic process of monitoring and optimizing the energy consumption of an organization or a building. The EMCS (Energy Management and Control System) using IoT is an innovative approach to manage and control energy consumption. The main aim of EMCS is to provide proper management of energy and increase energy efficiency to the maximum. Features include smart energy management, condition monitoring, and real-time remote monitoring of renewable energy production. This project involves sensors, energy meters, and automation to achieve its goals.
          </p>
        </section>

        {/* Objectives Section */}
        <section className="px-10 py-8">
          <h2 className="text-2xl font-bold mb-4">Objectives</h2>
          <p className="text-lg leading-6">
            Piloting an IoT-based EMCS for real-time energy consumption monitoring, condition monitoring, and control of critical appliances such as lab equipment, transformers, PV systems, etc.
            Developing accurate electrical forecasting software using state-of-the-art machine learning algorithms for the Integrated Nepal Power System.
            Promoting public awareness of energy consumption and capacity-building training for future customers and engineers to bridge the current gap.
          </p>
        </section>

        {/* Project Impacts Section */}
        <section className="px-10 py-8">
          <h2 className="text-2xl font-bold mb-4">Project Impacts</h2>
          <p className="text-lg leading-6">
            The industrial impact includes opportunities for local software/hardware products in sectors such as commercial buildings, healthcare, and education.
            Socio-economic impacts include improved reliability, reduced energy waste, and lower electricity bills.
            Educational impacts include the establishment of an energy lab at the university for research and development, enabling academic research publications.
          </p>
        </section>

        {/* Project Outcome Section */}
        <section className="px-10 py-8">
          <h2 className="text-2xl font-bold mb-4">Project Outcome</h2>
          <p className="text-lg leading-6 mb-4">
            The EMCS using IoT enables remote energy monitoring at Kathmandu University. Central KU acts as the monitoring hub, with energy meters placed across various buildings. Data is collected into a database to analyze usage patterns, optimize energy supply, and automate real-time insights. This system fosters sustainable energy practices and benefits both providers and consumers.
          </p>
          <img src="/images/projectOutcome1.png" alt="Project Outcome 1" className="w-full h-48 mb-4 object-contain" />
          <img src="/images/projectOutcome2.png" alt="Project Outcome 2" className="w-full h-48 mb-4 object-contain" />
        </section>
      </main>

      {/* Footer */}
      <Footer/>
    </div>
  );
};

export default App;
