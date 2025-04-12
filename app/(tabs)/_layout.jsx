import { Tabs } from "expo-router";
import { Ionicons } from '@expo/vector-icons';

export default function Layout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          switch (route.name) {
            case 'home':
              iconName = 'home-outline';
              break;
            case 'visualize':
              iconName = 'bar-chart-outline';
              break;
            case 'blog':
              iconName = 'book-outline';
              break;
            case 'teams':
              iconName = 'people-outline';
              break;
            default:
              iconName = 'ellipse-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tabs.Screen name="home" options={{ title: "Home" }} />
      <Tabs.Screen name="visualize" options={{ title: "Visualize" }} />
      <Tabs.Screen name="blog" options={{ title: "Blog" }} />
      <Tabs.Screen name="teams" options={{ title: "Teams" }} />
    </Tabs>
  );
}
