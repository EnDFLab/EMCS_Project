import React from "react";
import { View, Text, Image, ScrollView, SafeAreaView, StyleSheet } from "react-native";
// Import your Footer component

const teamData = [
  {
    name: "Dr. Kamal Chapagain",
    role: "Principal Investigator",
    position: "Assistant Professor",
    department: "DoEEE, Kathmandu University",
    image: require("../../assets/images/kamalsir.png"),
  },
  {
    name: "Dr. Bhupendra Bimal Chhetri",
    role: "Advisor and Co-Principal Investigator",
    position: "Professor",
    department: "DoEE, Kathmandu University",
    image: require("../../assets/images/bhupendrasir.png"),
  },
  {
    name: "Anand Gachhadhar",
    role: "Co-Principal Investigator",
    position: "Assistant Professor",
    department: "DoEEE, Kathmandu University",
    image: require("../../assets/images/anandsir.png"),
  },
  {
    name: "Dr. Samundra Gurung",
    role: "Advisor",
    position: "Assistant Professor",
    department: "DoEEE, Kathmandu University",
    image: require("../../assets/images/samundrasir.jpg"),
  },
  {
    name: "Varsha S Madhikarmy",
    role: "Researcher",
    position: "Student",
    department: "DoEEE, Kathmandu University",
    image: require("../../assets/images/noimg.png"),
  },
  {
    name: "Aashish Bhatta",
    role: "Research Intern",
    position: "Student",
    department: "DoEEE, Kathmandu University",
    image: require("../../assets/images/Aashish.jpeg"),
  },
  {
    name: "Sunidhi Sharma",
    role: "Research Intern",
    position: "Student",
    department: "DoCSE, Kathmandu University",
    image: require("../../assets/images/sunidhi.png"),
  },
];

const TeamMemberCard = ({ member }) => (
  <View style={styles.card}>
    <Image
      source={member.image}
      style={styles.profileImage}
      resizeMode="cover"
    />
    <Text style={styles.role}>{member.role}</Text>
    <Text style={styles.name}>{member.name}</Text>
    <Text style={styles.position}>{member.position}</Text>
    <Text style={styles.department}>{member.department}</Text>
  </View>
);

const Team = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>
          Development of Smart Energy Management and Control System (EMCS) using the Internet of Things
        </Text>
      </View>

      {/* Team Members Section */}
      <ScrollView style={styles.scrollView}>
        <View style={styles.teamSection}>
          <Text style={styles.sectionTitle}>Meet Our Team</Text>

          {/* Team members list */}
          <View style={styles.teamList}>
            {teamData.map((member, index) => (
              <TeamMemberCard key={index} member={member} />
            ))}
          </View>
        </View>
      

      {/* Footer would go here */}
    
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
  scrollView: {
    flex: 1,
  },
  teamSection: {
    paddingHorizontal: 24,
    paddingVertical: 32,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 24,
  },
  teamList: {
    flex: 1,
  },
  card: {
    backgroundColor: "white",
    padding: 24,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    alignItems: "center",
    marginBottom: 16,
  },
  profileImage: {
    width: 96,
    height: 96,
    borderRadius: 48,
    marginBottom: 16,
  },
  role: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#4a5568",
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
  position: {
    fontSize: 14,
    color: "#718096",
  },
  department: {
    fontSize: 14,
    color: "#718096",
  },
});

export default Team;
