import React from "react";
import Footer from "../components/Footer";

const NewsEvents = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Header */}
      <div className="bg-[#48bdd5] text-white text-center py-3 text-sm font-bold">
      Development of Smart Energy Management and Control System (EMCS) using the Internet of Things
      </div>

      {/* Main Content */}
      <div className="flex flex-1 flex-col justify-center items-center">
        <h1 className="text-4xl font-bold text-[#48bdd5]">Coming Soon!</h1>
      </div>

      {/* Footer */}
    

    
        <Footer/>
      
    </div>
  );
};

export default NewsEvents;
