import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

import Sidebar from '../../components/Sidebar';

import Physics from '../../components/visuals/physics';
import BioTech from '../../components/visuals/biotech';
import Civil from '../../components/visuals/civil';
import Management from '../../components/visuals/management';
import Electrical from '../../components/visuals/electrical';
import Hostel from '../../components/visuals/hostel';
import Transformer from '../../components/visuals/transformer';

// import Footer from "../../components/footer";

const Visualize = () => {
  const { dept } = useLocalSearchParams();
  const selectedDept = dept || 'physics';

  // State to control sidebar toggle (initially collapsed)
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  // Toggle the sidebar open/close state
  const toggleSidebar = () => {
    setSidebarOpen((prevState) => !prevState);
  };

  const renderContent = () => {
    switch (selectedDept) {
      case 'physics':
        return <Physics />;
      case 'bio':
        return <BioTech />;
      case 'civil':
        return <Civil />;
      case 'management':
        return <Management />;
      case 'electrical':
        return <Electrical />;
      case 'hostel':
        return <Hostel />;
      case 'transformer':
        return <Transformer />;
      default:
        return <Text style={styles.pageTitle}>Select a Department</Text>;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>
          Development of Smart Energy Management and Control System (EMCS) using the Internet of Things
        </Text>
      </View>

      {/* Main Layout */}
      <View style={styles.mainContent}>
        {/* Pass the state and toggle function to the Sidebar */}
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <View style={styles.dynamicContent}>
          {renderContent()}
        </View>
      </View>
      {/* <Footer /> */}
    </SafeAreaView>
    
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f3f4f6' },
  header: {
    backgroundColor: '#48bdd5',
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  headerText: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 12,
  },
  mainContent: {
    flex: 1,
    flexDirection: 'row',
  },
  dynamicContent: {
    flex: 1,
    padding: 16,
  },
  pageTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Visualize;
