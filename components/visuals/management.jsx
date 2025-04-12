import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  ActivityIndicator,
  Dimensions,
  StyleSheet,
} from "react-native";
import { LineChart } from "react-native-chart-kit";

const screenWidth = Dimensions.get("window").width;

const Management= () => {
  const [data, setData] = useState([]);
  const [labels, setLabels] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch("http://127.0.0.1:5000/api/management-data");
      const result = await response.json();

      const formatted = result.map((item) => ({
        time: item.received_at_nepali_time.split(" ")[1],
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

      setData(formatted);
      setLabels(formatted.map((d) => d.time));
    } catch (err) {
      setError("Failed to fetch data");
      console.error("Fetch error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 60000);
    return () => clearInterval(interval);
  }, []);

  const chartConfig = {
    backgroundGradientFrom: "#fff",
    backgroundGradientTo: "#fff",
    color: (opacity = 1) => `rgba(30, 144, 255, ${opacity})`,
    strokeWidth: 2,
    decimalPlaces: 2,
    propsForDots: {
      r: "2",
    },
  };

  const getDataset = (keyA, keyB, keyC) => [
    {
      data: data.map((d) => d[keyA]),
      color: () => "#FFD700", // Yellow for Phase A
      strokeWidth: 2,
    },
    {
      data: data.map((d) => d[keyB]),
      color: () => "#FF4500", // Red for Phase B
      strokeWidth: 2,
    },
    {
      data: data.map((d) => d[keyC]),
      color: () => "#1E90FF", // Blue for Phase C
      strokeWidth: 2,
    },
  ];

  const renderChart = (title, keyA, keyB, keyC, unit = "") => {
    const latestData = data.length > 0 ? data[data.length - 1] : null;
    
    return (
      <View style={styles.chartSection}>
        <Text style={styles.chartTitle}>{title}</Text>
        
        <ScrollView horizontal contentContainerStyle={styles.scrollContainer}>
          <LineChart
            data={{
              labels: labels.slice(-6), // show last 6 timestamps
              datasets: getDataset(keyA, keyB, keyC),
              legend: ["Phase A", "Phase B", "Phase C"],
            }}
            width={screenWidth - 32}
            height={220}
            chartConfig={chartConfig}
            
            style={styles.chart}
          />
        </ScrollView>
        
        {latestData && (
          <View style={styles.latestReadingContainer}>
            <Text style={styles.latestReadingTitle}>Latest Reading</Text>
            <Text style={styles.latestReadingTime}>Time: {latestData.time}</Text>
            
            <View style={styles.phaseContainer}>
              <View style={styles.phaseA}>
                <Text style={styles.phaseTitle}>Phase A</Text>
                <Text style={styles.phaseValue}>
                  {latestData[keyA]?.toFixed(2)} {unit}
                </Text>
              </View>
              
              <View style={styles.phaseB}>
                <Text style={styles.phaseTitle}>Phase B</Text>
                <Text style={styles.phaseValue}>
                  {latestData[keyB]?.toFixed(2)} {unit}
                </Text>
              </View>
              
              <View style={styles.phaseC}>
                <Text style={styles.phaseTitle}>Phase C</Text>
                <Text style={styles.phaseValue}>
                  {latestData[keyC]?.toFixed(2)} {unit}
                </Text>
              </View>
            </View>
          </View>
        )}
      </View>
    );
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Department of Management Information</Text>
      <Text style={styles.subHeader}>Data Visualization</Text>

      {isLoading ? (
        <ActivityIndicator size="large" color="#48bdd5" style={styles.loader} />
      ) : error ? (
        <Text style={styles.error}>{error}</Text>
      ) : (
        <View>
          {renderChart(
            "Power Consumption (W)",
            "phaseAActivePower",
            "phaseBActivePower",
            "phaseCActivePower",
            "W"
          )}
          
          {renderChart(
            "Current (A)",
            "phaseACurrent",
            "phaseBCurrent",
            "phaseCCurrent",
            "A"
          )}
          
          {renderChart(
            "Forward Energy (kWh)",
            "phaseAForwardEnergy",
            "phaseBForwardEnergy",
            "phaseCForwardEnergy",
            "kWh"
          )}
          
          {renderChart(
            "Power Factor",
            "phaseAPowerFactor",
            "phaseBPowerFactor",
            "phaseCPowerFactor"
          )}
          
          {renderChart(
            "Voltage (V)",
            "phaseAVoltage",
            "phaseBVoltage",
            "phaseCVoltage",
            "V"
          )}
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { 
    paddingHorizontal: 16, 
    backgroundColor: "#fff" 
  },
  scrollContainer: { 
    flexGrow: 1 
  },
  header: { 
    fontSize: 20, 
    fontWeight: "bold", 
    color: "#48bdd5", 
    marginBottom: 8 
  },
  subHeader: { 
    fontSize: 16, 
    marginBottom: 16 
  },
  chart: { 
    marginVertical: 8, 
    borderRadius: 16 
  },
  chartSection: {
    marginBottom: 24,
  },
  chartTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 8,
  },
  error: { 
    color: "red", 
    textAlign: "center", 
    marginTop: 20 
  },
  loader: {
    marginTop: 50,
  },
  latestReadingContainer: {
    marginTop: 8,
    backgroundColor: "#f7f7f7",
    borderRadius: 8,
    padding: 12,
  },
  latestReadingTitle: {
    fontWeight: "600",
    marginBottom: 4,
  },
  latestReadingTime: {
    marginBottom: 8,
  },
  phaseContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  phaseA: {
    flex: 1,
    backgroundColor: "#FFF9C4", // Light yellow
    padding: 8,
    borderRadius: 6,
    marginRight: 4,
  },
  phaseB: {
    flex: 1,
    backgroundColor: "#FFCCBC", // Light red
    padding: 8,
    borderRadius: 6,
    marginHorizontal: 4,
  },
  phaseC: {
    flex: 1,
    backgroundColor: "#BBDEFB", // Light blue
    padding: 8,
    borderRadius: 6,
    marginLeft: 4,
  },
  phaseTitle: {
    fontWeight: "600",
    color: "#444",
    fontSize: 12,
  },
  phaseValue: {
    fontWeight: "bold",
    fontSize: 16,
    marginTop: 4,
  }
});

export default Management;
