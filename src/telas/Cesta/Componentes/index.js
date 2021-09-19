import React from 'react';
import {  StyleSheet, View, FlatList } from 'react-native';


import Topo from './Topo'
import Detalhes from './Detalhes';
import Item from './item';
import Texto from '../../../Componentes/Texto';


export default function Cesta ({ topo, detalhes, itens }){
    return <>
    <FlatList
        data = {itens.lista}
        renderItem={Item}
        keyExtractor={({nome}) => nome}
        ListHeaderComponent={() =>{
            return <>
                <Topo {...topo} />
                <View style={estilos.cesta}>
                    <Detalhes {...detalhes}/>
                 </View>
                 <View style={{margin: 30}}>
                     <Texto style={estilos.titulo}>{itens.titulo}</Texto> 
                </View>
            </>
        }}
        />   
    </>
}

const estilos = StyleSheet.create({
    titulo: {
        color: "#464646",
        fontWeight: "bold",
        marginTop: 30,
        marginBottom: 8,
        fontSize: 30,
        lineHeight: 32,
        backgroundColor: "#fff"
    },
    cesta: {
        padding: 10,
        margin: 30,
        backgroundColor: "rgba(250, 250, 50, 0.2)",
        borderRadius: 25,
    }
});
