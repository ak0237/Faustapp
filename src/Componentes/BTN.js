import React, { Children } from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import Texto from './Texto';

export default function BTN({children, style}){
    return <>
        <TouchableOpacity style={estilos.botao}>
            <Texto style={estilos.textebotao}>{children}</Texto>
        </TouchableOpacity>
    </>
}
const estilos = StyleSheet.create(
    {
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
        }
    }
)