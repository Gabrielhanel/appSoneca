
import { StyleSheet, Text, View } from 'react-native';
import { ScreensContainer } from './routes';
import { useFonts } from '@expo-google-fonts/quicksand/useFonts';
import {
  Quicksand_300Light,
  Quicksand_400Regular,
  Quicksand_500Medium,
  Quicksand_600SemiBold,
  Quicksand_700Bold,
} from '@expo-google-fonts/quicksand';

export default function App() {
    let [fontsLoaded] = useFonts({
    Quicksand_300Light,
    Quicksand_400Regular,
    Quicksand_500Medium,
    Quicksand_600SemiBold,
    Quicksand_700Bold,
  });

  if (!fontsLoaded) {
    return null; // Or a loading indicator
  }
  return (
      <ScreensContainer />
  );
}