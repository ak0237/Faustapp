import React from 'react';
import { Image, StyleSheet, Dimensions, Text, View } from 'react-native';

import Texto from '../../../Componentes/Texto';
import Deatalhes from './Detalhes';
import Topo from './Topo'
import Detalhes from './Detalhes';





export default function Cesta (){
    return <>
    <Topo />

    <View style={estilos.cesta}>
        <Detalhes />
    </View>
    </>
}

const estilos = StyleSheet.create({
   
    cesta: {
        padding:  10
    },
    
    
});
