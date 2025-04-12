import React from "react";
import { View, Text, Image, ScrollView, StyleSheet, SafeAreaView, StatusBar } from "react-native";
import Footer from "../../components/footer";

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#48bdd5" />
      
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>
          Development of Smart Energy Management and Control System (EMCS) using the Internet of Things
        </Text>
      </View>

      {/* Main Content */}
      <ScrollView style={styles.mainContent}>
        {/* Image Section */}
        <View>
          <Image 
            source={require("../../assets/images/EEE.jpg")} 
            style={styles.coverImage} 
            resizeMode="cover"
          />
        </View>

        {/* Introduction */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Introduction</Text>
          <Text style={styles.subTitle}>EMCS</Text>
          <Text style={styles.paragraph}>
            Energy management is a systematic process of monitoring and optimizing the energy consumption of an organization or a building. The EMCS (Energy Management and Control System) using IoT is an innovative approach to manage and control energy consumption. The main aim of EMCS is to provide proper management of energy and increase energy efficiency to the maximum. Features include smart energy management, condition monitoring, and real-time remote monitoring of renewable energy production. This project involves sensors, energy meters, and automation to achieve its goals.
          </Text>
        </View>

        {/* Objectives Section */}
        <View style={styles.section}>
          <Text style={styles.subTitle}>Objectives</Text>
          <Text style={styles.paragraph}>
            Piloting an IoT-based EMCS for real-time energy consumption monitoring, condition monitoring, and control of critical appliances such as lab equipment, transformers, PV systems, etc.
            Developing accurate electrical forecasting software using state-of-the-art machine learning algorithms for the Integrated Nepal Power System.
            Promoting public awareness of energy consumption and capacity-building training for future customers and engineers to bridge the current gap.
          </Text>
        </View>

        {/* Project Impacts Section */}
        <View style={styles.section}>
          <Text style={styles.subTitle}>Project Impacts</Text>
          <Text style={styles.paragraph}>
            The industrial impact includes opportunities for local software/hardware products in sectors such as commercial buildings, healthcare, and education.
            Socio-economic impacts include improved reliability, reduced energy waste, and lower electricity bills.
            Educational impacts include the establishment of an energy lab at the university for research and development, enabling academic research publications.
          </Text>
        </View>

        {/* Project Outcome Section */}
        <View style={styles.section}>
          <Text style={styles.subTitle}>Project Outcome</Text>
          <Text style={styles.paragraph}>
            The EMCS using IoT enables remote energy monitoring at Kathmandu University. Central KU acts as the monitoring hub, with energy meters placed across various buildings. Data is collected into a database to analyze usage patterns, optimize energy supply, and automate real-time insights. This system fosters sustainable energy practices and benefits both providers and consumers.
          </Text>
          <Image 
            source={require("../../assets/images/projectOutcome1.png")} 
            style={styles.outcomeImage} 
            resizeMode="contain"
          />
          <Image 
            source={require("../../assets/images/projectOutcome2.png")} 
            style={styles.outcomeImage} 
            resizeMode="contain"
          />
        </View>
        <Footer />
      </ScrollView>
     
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  header: {
    backgroundColor: "#48bdd5",
    paddingVertical: 12,
    alignItems: "center",
  },
  headerText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 14,
    textAlign: "center",
    paddingHorizontal: 10,
  },
  mainContent: {
    flex: 1,
  },
  coverImage: {
    width: "100%",
    height: 200,
  },
  section: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#48bdd5",
    marginBottom: 8,
  },
  subTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 12,
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 16,
  },
  outcomeImage: {
    width: "100%",
    height: 180,
    marginBottom: 16,
  }
});

export default App;
