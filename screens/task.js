import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, FlatList, StyleSheet, Alert } from "react-native";
import database from "../config"
import {MaterialIcons} from "@expo/vector-icons"
export default function Task({navigation}){
    const [task, setTask] = useState([])
    useEffect(() => {
        database.collection("Tasks").onSnapshot((query) => {
            const List = []
            query.forEach(doc => {
            List.push({...doc.data(), id: doc.id})
            })
            setTask(List) 
        })
    },[])

function deletTask(id){
    Alert.alert(
        "deletar",
        "Tem certeza que deseja deletar?",
        [{
            text:"cancelar",
            onPress:() => {return;},
            style:"cancel"
        },{
            text:"ok",
            onPress:() => database.collection("Tasks").doc(id).delete()
        },],
        {cancelable: false}
    )
}

    return(
        <View style={styles.container}>
            <FlatList showsVerticalScrollIndicator= {false} data={task} 
            renderItem={({item}) => {
                return(
                    <View style={styles.tasks}>
                        <Text style={styles.descriptionTask}
                        onPress={() => navigation.navigate("Details", {
                            id: item.id,
                            description: item.description
                        })}>
                            {item.description}
                        </Text>
                        <TouchableOpacity style={styles.deletTask} onPress={() => deletTask(item.id)}>
                            <MaterialIcons name="delete-forever" size={25} color="#f64372">

                            </MaterialIcons>
                        </TouchableOpacity>
                    </View>
                )
            }}/>
            <TouchableOpacity style={styles.buttonNewTask} onPress={() => navigation.navigate("New Task")}>
                <Text style={styles.iconButton}>
                    +
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: "#fff",
        paddingTop: 20
    },
    buttonNewTask:{
        width: 60,
        height: 60,
        position: "absolute",
        bottom: 30,
        left: 20,
        backgroundColor: "#f92e41",
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center"
    },
    iconButton:{
        color: "#fff",
        fontSize: 25,
        fontWeight: "bold"
    },
    tasks:{
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 5,
    },
    deletTask:{
        justifyContent: "center",
        paddingRight: 35
    },
    descriptionTask:{
        width: "75%",
        alignContent: "flex-start",
        backgroundColor: "#f5f5f5cf",
        padding: 12,
        paddingHorizontal: 20,
        borderRadius: 50,
        marginBottom: 5,
        marginRight: 15,
        color: "#282b2db5"
    }
})