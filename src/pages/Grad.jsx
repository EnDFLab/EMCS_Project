import React from "react";
import Footer from "../components/Footer";

const Grad = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <div className="bg-[#48bdd5] text-white text-center py-3 text-sm font-bold">
        Graduate Level Projects in EMCS
      </div>

      <div className="flex flex-1 flex-col justify-center items-center">
        <h1 className="text-4xl font-bold text-[#48bdd5]">Coming Soon!</h1>
      </div>

      <Footer />
    </div>
  );
};

export default Grad;
