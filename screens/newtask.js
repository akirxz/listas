import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import database from '../config'

export default function NewTask({navigation}) {
    const [description, setDescription] = useState(null)
    function addTask() {
        database.collection("Task").add({
            description: description,
            status: false,
        })
        navigation.navigate("Task")
    }

    return (
        <View style={styles.container}>
            <Text style={styles.label}>
                Descrição
            </Text>
            <TextInput style={styles.inputText} placeholder="ex:comprar tomate" onChangeText={setDescription} value={description}/>
            <TouchableOpacity style={styles.buttonNewTask} onPress={() => addTask()}>
                <Text style={styles.iconButton}>
                    Salvar
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#fff"
    },
    label:{
        width: "90%",
        marginTop: 20,
        fontSize: 16,
        marginLeft: 20,
        color:"#f92ef4"
    },
    inputText:{
        width: 90,
        marginTop: 10,
        padding: 10,
        height: 50,
        borderBottomWidth: 1,
        borderBottomColor: "#f92ef4",
        marginLeft: "auto",
        marginRight: "auto"
    },
    buttonNewTask: {
        width: 60,
        height: 60,
        position: "absolute",
        bottom: 30,
        left: 20,
        backgroundColor: "#f92ef4",
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center"
    },
    iconButton: {
        color:"#fff",
        fontSize: 16,
        fontWeight: "bold"
    }
})

