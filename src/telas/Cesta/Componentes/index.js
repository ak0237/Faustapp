import React from 'react';
import {  StyleSheet, View } from 'react-native';


import Topo from './Topo'
import Detalhes from './Detalhes';





export default function Cesta ({ topo, detalhes }){
    return <>
    <Topo {...topo} />

    <View style={estilos.cesta}>
        <Detalhes {...detalhes}/>
    </View>
    </>
}

const estilos = StyleSheet.create({
    cesta: {
        padding: 10,
        margin: 30,
        backgroundColor: "rgba(250, 250, 50, 0.2)",
        borderRadius: 25,
        
    }
});
