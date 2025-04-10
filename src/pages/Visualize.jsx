import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Menu, ChevronRight } from "lucide-react"; // Icons
import Footer from "../components/Footer";

const Visualize = () => {
    // Sidebar is closed initially
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="min-h-screen flex flex-col bg-gray-100">
            {/* Header */}
            <div className="bg-[#48bdd5] text-white text-center py-3 text-sm font-bold">
                Development of Smart Energy Management and Control System (EMCS) using the Internet of Things
            </div>

            {/* Main Content */}
            <div className="flex flex-1">
                {/* Sidebar */}
                <div className={`bg-gray-200 border-r border-gray-100 p-4 flex flex-col transition-all duration-200 
                    ${isSidebarOpen ? "w-64" : "w-16 items-center"}`}>

                    {/* Toggle Button */}
                    <button 
                        className="mb-4 p-2 flex items-center space-x-2 rounded-md text-gray-700 hover:bg-gray-300 transition"
                        onClick={() => setSidebarOpen(!isSidebarOpen)}
                    >
                        <ChevronRight size={20} className={`transition-transform ${isSidebarOpen ? "rotate-180" : ""}`} />
                    </button>

                    {/* Sidebar Label */}
                    {isSidebarOpen && (
                        <span className="mt-2 px-2 font-semibold text-[#48bdd5]">Select Visualization</span>
                    )}

                    {/* Sidebar Links */}
                    <nav className="flex flex-col space-y-2 mt-2">
                        {[
                            { path: "physics", label: "Department of Physics", icon: "📖" },
                            { path: "bio", label: "Department of Bio-Tech", icon: "🧬" },
                            { path: "civil", label: "Department of Civil Engineering", icon: "🏗" },
                            { path: "management", label: "Department of Management Information", icon: "📊" },
                            { path: "electrical", label: "Department of Electrical & Electronics", icon: "⚡" },
                            { path: "hostel", label: "Boys Hostel", icon: "🏠" },
                            { path: "transformer", label: "Main Transformer", icon: "🔌" }
                        ].map(({ path, label, icon }) => (
                            <NavLink
                                key={path}
                                to={path}
                                className={({ isActive }) =>
                                    `relative flex items-center px-2 py-2 transition rounded-md group ${
                                        isActive ? "bg-gray-300 text-black" : "text-gray-700 hover:bg-gray-300"
                                    }`
                                }
                            >
                                {isSidebarOpen ? label : <span className="text-lg">{icon}</span>}
                                {!isSidebarOpen && (
                                    <span className="absolute left-16 bg-gray-700 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                        {label}
                                    </span>
                                )}
                            </NavLink>
                        ))}
                    </nav>
                </div>

                {/* Dynamic Main Content */}
                <div className="flex-1 p-6">
                    <Outlet />
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default Visualize;
