import React from 'react';
import {  StyleSheet, View, ScrollView } from 'react-native';


import Topo from './Topo'
import Detalhes from './Detalhes';
import Itens from './itens';


export default function Cesta ({ topo, detalhes, itens }){
    return <ScrollView>
    <Topo {...topo} />

    <View style={estilos.cesta}>
        <Detalhes {...detalhes}/>
        <Itens {...itens}/>
    </View>
    </ScrollView>
}

const estilos = StyleSheet.create({
    cesta: {
        padding: 10,
        margin: 30,
        backgroundColor: "rgba(250, 250, 50, 0.2)",
        borderRadius: 25,
        
    }
});
