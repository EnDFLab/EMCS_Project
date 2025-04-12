import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, ImageBackground, TouchableOpacity, StyleSheet } from 'react-native';

export default function Index() {
  const router = useRouter();

  const handleNavigation = () => {
    router.push('/(tabs)/home'); // Takes you to Home page
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/images/KU1.jpg')}
        style={styles.backgroundImage}
      >
        {/* Overlay */}
        <View style={styles.overlay} />

        {/* Content */}
        <View style={styles.content}>
          <Image
            source={require('../assets/images/logo.png')}
            style={styles.logo}
            resizeMode="contain"
          />

          <Text style={styles.title}>EMCS</Text>

          <TouchableOpacity onPress={handleNavigation} style={styles.button}>
            <Text style={styles.buttonText}>VIEW MORE</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>

      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    overflow: 'hidden',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'black',
    opacity: 0.5,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 80,
    height: 80,
    marginBottom: 20,
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    borderColor: 'white',
    borderWidth: 1,
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#40E0D0',
  },
});
