import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Management = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch data from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://127.0.0.1:5000/api/managment-data");
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        const result = await response.json();

        if (!Array.isArray(result) || result.length === 0) {
          setError("No data available or invalid format");
          setIsLoading(false);
          return;
        }

        // Format data for graphs
        const formattedData = result.map((item) => ({
          time: item.received_at_nepali_time.split(" ")[1], // Show time portion
          totalPower: item.total_power,
          phaseAActivePower: parseFloat(item.phase_data[0].Active_Power),
          phaseBActivePower: parseFloat(item.phase_data[1].Active_Power),
          phaseCActivePower: parseFloat(item.phase_data[2].Active_Power),
          phaseACurrent: parseFloat(item.phase_data[0].Current),
          phaseBCurrent: parseFloat(item.phase_data[1].Current),
          phaseCCurrent: parseFloat(item.phase_data[2].Current),
          phaseAForwardEnergy: parseFloat(item.phase_data[0].Forward_Energy),
          phaseBForwardEnergy: parseFloat(item.phase_data[1].Forward_Energy),
          phaseCForwardEnergy: parseFloat(item.phase_data[2].Forward_Energy),
          phaseAPowerFactor: parseFloat(item.phase_data[0].Power_Factor),
          phaseBPowerFactor: parseFloat(item.phase_data[1].Power_Factor),
          phaseCPowerFactor: parseFloat(item.phase_data[2].Power_Factor),
          phaseAVoltage: parseFloat(item.phase_data[0].Voltage),
          phaseBVoltage: parseFloat(item.phase_data[1].Voltage),
          phaseCVoltage: parseFloat(item.phase_data[2].Voltage),
        }));

        setData(formattedData);
      } catch (fetchError) {
        console.error("Fetch error:", fetchError);
        setError(`Failed to load data: ${fetchError.message}`);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 60 * 1000); // Refresh data every minute

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, []);

  const renderGraphWithLatestReading = (title, dataKeyA, dataKeyB, dataKeyC) => (
    <div className="mb-8">
      <div className="h-64 w-full">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time" />
            <YAxis />
            <Tooltip />
            <Legend />
            {/* Yellow for Phase A, Red for Phase B, Blue for Phase C */}
            <Line type="monotone" dataKey={dataKeyA} name="Phase A" stroke="#FFD700" strokeWidth={2} />
            <Line type="monotone" dataKey={dataKeyB} name="Phase B" stroke="#FF4500" strokeWidth={2} />
            <Line type="monotone" dataKey={dataKeyC} name="Phase C" stroke="#1E90FF" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Latest Reading */}
      {data.length > 0 && (
        <div className="mt-4 bg-gray-50 p-4 rounded-lg">
          <h4 className="font-medium">Latest Reading</h4>
          <p><span className="font-medium">Time:</span> {data[data.length - 1].time}</p>
          <div className="grid grid-cols-3 gap-2 mt-2">
            <div className="p-2 bg-yellow-50 rounded">
              <p className="text-sm font-medium text-yellow-600">Phase A</p>
              <p className="text-lg">{data[data.length - 1][dataKeyA]?.toFixed(2)}</p>
            </div>
            <div className="p-2 bg-red-50 rounded">
              <p className="text-sm font-medium text-red-600">Phase B</p>
              <p className="text-lg">{data[data.length - 1][dataKeyB]?.toFixed(2)}</p>
            </div>
            <div className="p-2 bg-blue-50 rounded">
              <p className="text-sm font-medium text-blue-600">Phase C</p>
              <p className="text-lg">{data[data.length - 1][dataKeyC]?.toFixed(2)}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <div className="w-full bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl text-[#48bdd5] font-bold mb-4">Data Visualization</h2>
      <h3 className="text-l text-[#48bdd5] font-bold mb-4">Department of Management Information</h3>

      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <div className="w-16 h-16 border-4 border-t-4 border-blue-500 rounded-full animate-spin"></div>
        </div>
      ) : error ? (
        <div className="w-full h-64 flex flex-col justify-center items-center bg-red-50 border border-red-200 rounded-lg p-4">
          <p className="text-red-500 font-bold">{error}</p>
        </div>
      ) : data.length > 0 ? (
        <>
          {renderGraphWithLatestReading("Power Consumption (W)", "phaseAActivePower", "phaseBActivePower", "phaseCActivePower")}
          {renderGraphWithLatestReading("Current (A)", "phaseACurrent", "phaseBCurrent", "phaseCCurrent")}
          {renderGraphWithLatestReading("Forward Energy (kWh)", "phaseAForwardEnergy", "phaseBForwardEnergy", "phaseCForwardEnergy")}
          {renderGraphWithLatestReading("Power Factor", "phaseAPowerFactor", "phaseBPowerFactor", "phaseCPowerFactor")}
          {renderGraphWithLatestReading("Voltage (V)", "phaseAVoltage", "phaseBVoltage", "phaseCVoltage")}
        </>
      ) : (
        <div className="flex justify-center items-center h-64 bg-yellow-50 border border-yellow-200 rounded-lg">
          <p className="text-yellow-600">No data available. API returned empty result.</p>
        </div>
      )}
    </div>
  );
};

export default Management;
