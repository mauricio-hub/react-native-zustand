import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { styles } from './src/config';
import { BottonTabNavigation } from './src/presentation/navigators/BottonTabNavigation';

export default function App() {
  return (
    <NavigationContainer >
    <BottonTabNavigation/>
    </NavigationContainer>
      
  );
}

