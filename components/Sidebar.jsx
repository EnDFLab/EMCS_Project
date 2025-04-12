// components/Sidebar.jsx
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { router } from 'expo-router';

const departments = [
  { key: 'physics', label: ' Department of Physics', icon: '📖' },
  { key: 'bio', label: ' Department of Bio-Tech', icon: '🧬' },
  { key: 'civil', label: 'Department of Civil Engg', icon: '🏗' },
  { key: 'management', label: 'Department of Management Information', icon: '📊' },
  { key: 'electrical', label: 'Department of Electrical and Electronics', icon: '⚡' },
  { key: 'hostel', label: 'Boys Hostel', icon: '🏠' },
  { key: 'transformer', label: 'Transformer', icon: '🔌' },
];

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <View style={[styles.sidebar, isOpen ? styles.expanded : styles.collapsed]}>
      <TouchableOpacity style={styles.toggleButton} onPress={toggleSidebar}>
        <Text>{isOpen ? '←' : '→'}</Text>
      </TouchableOpacity>

      {departments.map((dept) => (
        <TouchableOpacity
          key={dept.key}
          onPress={() => router.push(`/visualize?dept=${dept.key}`)}
          style={styles.link}
        >
          <Text>{isOpen ? dept.label : dept.icon}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  sidebar: {
    backgroundColor: '#e5e7eb',
    borderRightWidth: 1,
    borderColor: '#ccc',
    padding: 10,
  },
  expanded: { width: 180 },
  collapsed: { width: 60, alignItems: 'center' },
  toggleButton: { marginBottom: 10 },
  link: { paddingVertical: 8 },
});

export default Sidebar;
