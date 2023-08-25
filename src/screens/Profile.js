import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import { MaterialIcons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { SCREEN_WIDTH } from '../../constants';

const data = [
    {
        id:1,
        image: "",
        text: "lorem asdasdasd asdas asf bldhvlh h hi hioa sdas asf bldhvlh h hi hioa",
        minuite: "8m",
        header: "header1"
    },
    {
        id:2,

        image: "",
        text: "lorem asdasdasd asdas asf bldhvlh h hi hioa",
        minuite: "8m",
        header: "header2"
    },
    {
        id:3,
        image: "",
        text: "lorem asdasdasd asdas asf bldhvlh h hi hioa",
        minuite: "8m",
        header: "header3"
    },
    {
        id:4,
        image: "",
        text: "lorem asdasdasd asdas asf bldhvlh h hi hioa",
        minuite: "8m",
        header: "header4"
    },
    {
        id:5,
        image: "",
        text: "lorem asdasdasd asdas asf bldhvlh h hi hioa sdas asf bldhvlh h hi hioa",
        minuite: "8m",
        header: "header5"
    },
    {
        id:6,

        image: "",
        text: "lorem asdasdasd asdas asf bldhvlh h hi hioa",
        minuite: "8m",
        header: "header6"
    },
    {
        id:7,
        image: "",
        text: "lorem asdasdasd asdas asf bldhvlh h hi hioa",
        minuite: "8m",
        header: "header7"
    },
    {
        id:8,
        image: "",
        text: "lorem asdasdasd asdas asf bldhvlh h hi hioa",
        minuite: "8m",
        header: "header8"
    }
]

const data2 = [
    {
        id:1,
        image: "",
        text: "lorem asdasdasd asdas asf bldhvlh h hi hioa sdas asf bldhvlh h hi hioa",
        minuite: "8m",
        header: "header"
    },
    {
        id:2,

        image: "",
        text: "lorem asdasdasd asdas asf bldhvlh h hi hioa",
        minuite: "8m",
        header: "header"
    },
    {
        id:3,
        image: "",
        text: "lorem asdasdasd asdas asf bldhvlh h hi hioa",
        minuite: "8m",
        header: "header"
    },
    {
        id:4,
        image: "",
        text: "lorem asdasdasd asdas asf bldhvlh h hi hioa",
        minuite: "8m",
        header: "header"
    }
]

const ProFile = () => {
    const [switchs, setSwitchs] = useState("post")
    const navigation = useNavigation()
    const handelLogout = () => {
        AsyncStorage.removeItem("authToken");
        navigation.navigate("Login");
    }
    return (
        <View style={{ flex: 1, backgroundColor: "white" }}>
            <View style={{ flex: 2, position: "relative", backgroundColor: "#5db075" }}>
                <View style={styles.header} onPress={() => navigation.navigate("")}><TouchableOpacity >
                    <Text style={styles.text}>setting</Text>
                </TouchableOpacity>
                    <Text style={styles.title}>profile</Text>
                    <TouchableOpacity onPress={() => navigation.navigate("")}>
                        <Text style={styles.text}>Logout</Text>
                    </TouchableOpacity></View>
                <View style={styles.imag}>
                    <Image
                        style={styles.tinyLogo}
                        source={{
                            uri: 'https://jooinn.com/images/autumn-landscape-1.jpg'
                        }}
                    />
                </View>
            </View>
            <View style={{ flex: 6, alignItems: "center" }}>
                <View style={styles.name}>
                    <Text style={{ fontSize: 30 }}>asdas adasd as</Text>
                    <Text>a sdadada asda adsd asd s</Text>
                </View>
                <View style={{ alignSelf: "stretch", padding: 15 }}>
                    <View style={styles.switch}>
                        <TouchableOpacity style={[styles.toglle, { backgroundColor: switchs == "post" ? "white" : "gray" }]} onPress={() => setSwitchs("post")}>
                            <Text>post</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.toglle, { backgroundColor: switchs == "image" ? "white" : "gray" }]} onPress={() => setSwitchs("image")}>
                            <Text >image</Text>
                        </TouchableOpacity>
                    </View>
                    <ScrollView style={{marginTop:3,marginBottom:150}} showsVerticalScrollIndicator={false} >
                        {switchs == "post" ? data.map((e) => {
                            return (
                                <View key={e.id} style={styles.cont}>
                                    <View style={styles.imageLeft}>

                                    </View>
                                    <View style={styles.contante}>
                                        <View style={styles.headerminute}>
                                            <Text style={{fontSize:21,fontWeight:700}}>{e.header}</Text>
                                            <Text>{e.minuite}</Text>
                                        </View>
                                        <Text>{e.text}</Text>
                                    </View>
                                </View>
                            )
                        }) : data2.map((e) => {
                            return (
                                <View style={styles.imagefittt} key={e.id}>
                                </View>
                            )
                        })}
                    </ScrollView>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 20
    },
    title: {
        fontSize: 30,
        color: "white",
    },
    text: {

        color: "white",
    },
    imag: {
        position: "absolute",
        bottom: 0,
        left: "50%",
        width: 100,
        height: 100,
        borderWidth: 3,
        borderColor: "white",
        borderRadius: 1000,
        transform: [{ translateX: -50 }, { translateY: 30 }],
        backgroundColor: "red",
        alignItems: "center",
        justifyContent: "center"
    },
    tinyLogo: {
        width: "100%"
    },
    name: {
        marginTop: 40,
        alignItems: "center",

    },
    switch: {
        backgroundColor: "gray",
        alignSelf: "stretch",
        flexDirection: "row",
        borderRadius: 25,
        padding: 1,
    },
    toglle: {
        padding: 15,
        width: "50%",
        alignItems: "center",
        borderRadius: 25,

    },
    cont:{
        flexDirection:"row",
        alignItems:"flex-start",
        // paddingHorizontal:15,
        marginTop:30,
        gap:1
    },
    imageLeft:{
        width:50,
        height:50,
        backgroundColor:"blue",
        marginTop:6,
        borderRadius:14

    },
    headerminute:{
        flexDirection:"row",
        justifyContent:"space-between",
    },
    contante:{
        gap:10,
        
        paddingHorizontal:10,
        // width:500%
        flexShrink:2,
        paddingBottom:10,
        borderBottomWidth:2,
        borderColor:"block"
    },
    imagefittt:{
        width:SCREEN_WIDTH-40,

        height:SCREEN_WIDTH-40,
        backgroundColor:"red",
        marginBottom:10,
        borderRadius:30
    }
})


export default ProFile