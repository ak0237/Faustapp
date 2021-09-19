import React from 'react';
import { StatusBar, SafeAreaView,  StyleSheet, Text } from 'react-native';


import Cesta from './src/telas/Cesta/Componentes/Cesta';

export default function App() {
 
  
  return (
    <SafeAreaView>
      <StatusBar />
      <Cesta />
      
    </SafeAreaView>
  )
}

