import React from "react"
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function ItensListados({ props, funcao }) {
    return (

        <TouchableOpacity onPress={() => funcao(props.id)}>
            
            <View style={styles.caixa}>
                <MaterialIcons name='delete' size={18} color={'#333'} />
                <Text style={styles.itemTexto}>{props.itens}</Text>
            </View>
            
        </TouchableOpacity>
        
    )
}

const styles = StyleSheet.create({
    caixa: {
        padding: 16,
        marginTop: 16,
        borderColor: "#bbb",
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10,
        flexDirection: 'row',
    },

    itemTexto: {
        marginLeft: 10,
    },
});
