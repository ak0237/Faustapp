import React from "react";
import {View, Image, StyleSheet} from 'react-native';

import Texto from '../../../Componentes/Texto';
import icone from '../../../../assets/icone.png';


export default function Deatalhes (){
    return <> 
        <Texto style={estilos.nome}>Faustão</Texto>
        <View style={estilos.ladao}>
            <Image source={icone} style={estilos.icone}/>
            <Texto style={estilos.lado}>Cleiton Side</Texto>
        </View>
        <Texto style={estilos.descricao}>O deus da religião Faustonista, criador da Cleiton Power Magic, defende todos de Silvio Santos e sua laia</Texto>
        <Texto style={estilos.rank}>RANK: 22</Texto>
    </>
}

const estilos = StyleSheet.create({
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
})

