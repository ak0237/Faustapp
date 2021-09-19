import React from 'react';
import {View, Image, StyleSheet, FlatList} from 'react-native';

import Texto from '../../../Componentes/Texto';

export default function Item ({item: {nome, imagem}}) {

   return <View style={estilos.item}> 
        <Image source={imagem} style={estilos.imagem}/>
        <Texto style={estilos.texto}>{nome}</Texto>
     </View>

    
};

const estilos = StyleSheet.create({
    titulo: {
        color: "#464646",
        fontWeight: "bold",
        marginTop: 30,
        marginBottom: 8,
        fontSize: 30,
        lineHeight: 32,
    },
    item: {
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: "#ECECEC",
        paddingVertical: 16,
        alignItems: "center",
        marginHorizontal: 16,
    },
    imagem: {
        borderRadius: 50,
        
    },
    texto: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 11,
        color: "#464646",
    }
})