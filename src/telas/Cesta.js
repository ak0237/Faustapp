import React from 'react';
import { Image, StyleSheet, Dimensions, Text, View } from 'react-native';

import topo from '../../assets/topo.jpg';
import icone from '../../assets/icone.png';

const width = Dimensions.get('screen').width;

export default function Cesta (){
    return <>
    <Image source={topo} style={estilos.topo} />
    <Text style={estilos.titulo}>FAUSTÃONISMO</Text>

    <View style={estilos.cesta}>
        <Text style={estilos.nome}>Faustão</Text>
        <View style={estilos.ladao}>
            <Image source={icone} style={estilos.icone}/>
            <Text style={estilos.lado}>Cleiton Side</Text>
        </View>
    
        <Text style={estilos.descricao}>O deus da religião Faustonista, criador da Cleiton Power Magic, defende todos de Silvio Santos e sua laia</Text>
        <Text style={estilos.rank}>RANK: 22</Text>
    </View>
    </>
}

const estilos = StyleSheet.create({
    topo: {
        width: "100%",
        height: 512 / 768 * width,
    },
    titulo: {
        width: "100%",
        position: "absolute",
        textAlign: "center",
        fontSize: 23,
        lineHeight: 40,
        color: "white",
        fontWeight: "bold",
        padding: 15
    },
    cesta: {
        padding:  10
    },
    nome: {
        fontSize: 35,
        fontWeight: "bold",
        color: "black",
        textAlign: "center",
        lineHeight: 45,
        padding: 5,
    },
    lado: {
        fontSize: 25,
        color: "gray",
        marginLeft: 12,
        paddingVertical: 10,
        paddingRight: 15
        
    },
    descricao: {
        color: "#cccccc",
        fontSize: 18,
        lineHeight: 20,
        paddingVertical: 15,
        fontFamily: "Lobster_400Regular"
    },
    rank: {
        paddingVertical: 20,
        fontSize: 25,
        fontWeight: "bold",
        color: "gold"
    },
    ladao : {
        flexDirection: "row",
        backgroundColor: "#f5f4b9",
        borderRadius: 30,
        justifyContent: 'space-between'
    },
    icone :{
        width: 60,
        height: 60,
        borderRadius: 50
        
    },
    
});
