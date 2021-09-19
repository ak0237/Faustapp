import React from "react";
import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';

import Texto from '../../../Componentes/Texto';



export default function Deatalhes ({nome, iconeLado, lado, descricao, rank, botao}){
    return <> 
        <Texto style={estilos.nome}>{nome}</Texto>
        <View style={estilos.ladao}>
            <Image source={iconeLado} style={estilos.icone}/>
            <Texto style={estilos.lado}>{lado}</Texto>
        </View>
        <Texto style={estilos.descricao}>{descricao}</Texto>
        <Texto style={estilos.rank}>{rank}</Texto>

        <TouchableOpacity style={estilos.botao}>
            <Texto style={estilos.textebotao}>{botao}</Texto>
        </TouchableOpacity>
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
    botao: {
        backgroundColor: "#00ff88",
        paddingVertical: 16,
        paddingHorizontal: 5,
        borderRadius: 25,
    },
    textebotao: {
        textAlign: "center",
        color: "#fff",
        fontSize: 16,
        lineHeight: 16,
        fontWeight: "bold",
    },
})

