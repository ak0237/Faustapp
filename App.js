import React from 'react';
import { StatusBar, SafeAreaView,  StyleSheet, Text } from 'react-native';
import {useFonts, Lobster_400Regular} from  '@expo-google-fonts/lobster';

import Cesta from './src/telas/Cesta';

export default function App() {
  const fonteCarregada = Lobster_400Regular;

  if (!fonteCarregada) {
    return <View />
  }
  return (
    <SafeAreaView>
      <StatusBar />
      <Cesta />
      
    </SafeAreaView>
  )
}

