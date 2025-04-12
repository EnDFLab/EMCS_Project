import React from "react";
import { View, Text, SafeAreaView, StyleSheet } from "react-native";
// Import your Footer component
// import Footer from '../../components/footer';

const Blog = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>
          Development of Smart Energy Management and Control System (EMCS) using the Internet of Things
        </Text>
      </View>

      {/* Main Content */}
      <View style={styles.mainContent}>
        <Text style={styles.comingSoonText}>Coming Soon!</Text>
      </View>

      
       {/* <Footer />  */}
      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f4f6", // Equivalent to bg-gray-100
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
    justifyContent: "center",
    alignItems: "center",
  },
  comingSoonText: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#48bdd5",
  },
});

export default Blog;
