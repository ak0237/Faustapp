import React from 'react';
import { StatusBar, SafeAreaView,  StyleSheet, Text } from 'react-native';


import Cesta from './src/telas/Cesta/Componentes/index';
import mock from './src/mocks/cesta';

export default function App() {
 
  
  return (
    //As reticencias al lado do mock faz com que os parametros sejam passados individualmente 
    <SafeAreaView style={{flex: 1}}>
      <StatusBar />
      <Cesta {...mock} />
      
    </SafeAreaView>
  )
}

