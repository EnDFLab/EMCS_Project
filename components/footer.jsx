import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, Linking } from "react-native";
import { useNavigation } from "@react-navigation/native"; // Assuming you're using React Navigation

const Footer = () => {
  const navigation = useNavigation(); // For navigation to Home screen

  return (
    <View style={styles.footer}>
      {/* Implemented By */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Implemented By</Text>
        <Text style={styles.sectionText}>Smart Energy Management and Control System</Text>
        {/* Logo navigates to Home */}
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Image
            source={require("../assets/images/logo.png")}
            style={styles.logo}
          />
        </TouchableOpacity>
      </View>

      {/* Supported By */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Supported By</Text>
        {/* UGC Logo navigates to external link */}
        <TouchableOpacity onPress={() => Linking.openURL("https://www.ugcnepal.edu.np/")}>
          <Image
            source={require("../assets/images/ugclogo.png")}
            style={styles.logo}
          />
        </TouchableOpacity>
        <Text style={styles.sectionText}>University Grants Commission</Text>

        {/* WRC Logo navigates to external link */}
        <View style={styles.wrcContainer}>
          <TouchableOpacity onPress={() => Linking.openURL("https://ioepas.edu.np/doece")}>
            <Image
              source={require("../assets/images/WRC.png")}
              style={styles.logo}
            />
          </TouchableOpacity>
          <Text style={styles.sectionText}>
            Department of Electronics & Computer Engineering, Pashchimanchal Campus
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    backgroundColor: "#1e3a8a", // bg-blue-900
    paddingVertical: 24,
    paddingHorizontal: 16,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  section: {
    flex: 1,
    alignItems: "center",
    marginHorizontal: 16,
  },
  sectionTitle: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 8,
    color: "white",
  },
  sectionText: {
    fontSize: 14,
    color: "white",
    textAlign: "center",
    marginTop: 8,
  },
  logo: {
    width: 48,
    height: 48,
    marginTop: 16,
    alignSelf: "center",
  },
  wrcContainer: {
    marginTop: 16,
    alignItems: "center",
  },
});

export default Footer;
