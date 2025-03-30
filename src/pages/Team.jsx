import React from "react";
import Footer from "../components/Footer";

const teamData = [
  {
    name: "Dr. Kamal Chapagain",
    role: "Principal Investigator",
    position: "Assistant Professor",
    department: "DoEEE, Kathmandu University",
    image: "/images/kamalsir.png",
  },
  {
    name: "Dr. Bhupendra Bimal Chhetri",
    role: "Advisor and Co-Principal Investigator",
    position: "Professor",
    department: "DoEE, Kathmandu University",
    image: "/images/bhupendrasir.png",
  },
  {
    name: "Anand Gachhadhar",
    role: "Co-Principal Investigator",
    position: "Assistant Professor",
    department: "DoEEE, Kathmandu University",
    image: "/images/anandsir.png",
  },
  {
    name: "Dr. Samundra Gurung",
    role: "Advisor",
    position: "Assistant Professor",
    department: "DoEEE, Kathmandu University",
    image: "/images/samundrasir.jpg",
  },
  {
    name: "Varsha S Madhikarmy",
    role: "Researcher",
    position: "Student",
    department: "DoEEE, Kathmandu University",
    image: "/images/noimg.png",
  },
  {
    name: "Aashish LastName",
    role: "Research Intern",
    position: "Student",
    department: "DoEEE, Kathmandu University",
    image: "/images/Aashish.jpeg",
  },
  {
    name: "Sunidhi Sharma",
    role: "Research Intern",
    position: "Student",
    department: "DoCSE, Kathmandu University",
    image: "/images/sunidhi.png",
  },
];

const Team = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-[#48bdd5] text-white text-center py-3 text-sm font-bold">
        kamal.chapagain@ku.edu.np | +977-11-415100
      </div>

      {/* Team Members Section */}
      <div className="max-w-[1240px] mx-auto px-6 py-8">
        <h2 className="text-3xl font-bold text-center mb-6">Meet Our Team</h2>

        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
          {teamData.map((member, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg text-center"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 mx-auto rounded-full mb-4 object-cover"
              />
              <h3 className="text-lg font-bold text-gray-800">{member.role}</h3>
              <h4 className="text-xl font-bold text-black">{member.name}</h4>
              <p className="text-sm text-gray-600">{member.position}</p>
              <p className="text-sm text-gray-600">{member.department}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <Footer/>
    </div>
  );
};

export default Team;
