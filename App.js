import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import StartGameScreen from './screens/StartGameScreen';

export default function App() {
  return (
    <LinearGradient colors={['#0061fd','#7e00fd']} style={styles.app}>
      <ImageBackground  source={require('./assets/triangle.jpg')} 
                        resizeMode="cover"
                        style={styles.app}
                        imageStyle={styles.backgroundImage}>
        <StartGameScreen/>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    justifyContent: 'center',
    // backgroundColor: '#fffd80'
  },

  backgroundImage: {
    opacity: 0.5,
  }
});
