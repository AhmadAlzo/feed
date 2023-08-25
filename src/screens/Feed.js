import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, TextInput } from 'react-native'
import React, { useState } from 'react'
import { MaterialIcons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { SCREEN_WIDTH } from '../../constants';

const data = [
    {
        id: 1,
        image: "",
        text: "lorem asdasdasd asdas asf bldhvlh h hi hioa sdas asf bldhvlh h hi hioa",
        minuite: "8m",
        header: "header1"
    },
    {
        id: 2,

        image: "",
        text: "lorem asdasdasd asdas asf bldhvlh h hi hioa",
        minuite: "8m",
        header: "header2"
    },
    {
        id: 3,
        image: "",
        text: "lorem asdasdasd asdas asf bldhvlh h hi hioa",
        minuite: "8m",
        header: "header3"
    },
    {
        id: 4,
        image: "",
        text: "lorem asdasdasd asdas asf bldhvlh h hi hioa",
        minuite: "8m",
        header: "header4"
    },
    {
        id: 5,
        image: "",
        text: "lorem asdasdasd asdas asf bldhvlh h hi hioa sdas asf bldhvlh h hi hioa",
        minuite: "8m",
        header: "header5"
    },
    {
        id: 6,

        image: "",
        text: "lorem asdasdasd asdas asf bldhvlh h hi hioa",
        minuite: "8m",
        header: "header6"
    },
    {
        id: 7,
        image: "",
        text: "lorem asdasdasd asdas asf bldhvlh h hi hioa",
        minuite: "8m",
        header: "header7"
    },
    {
        id: 8,
        image: "",
        text: "lorem asdasdasd asdas asf bldhvlh h hi hioa",
        minuite: "8m",
        header: "header8"
    }
]

const data2 = [
    {
        id: 1,
        image: "",
        text: "lorem asdasdasd asdas asf bldhvlh h hi hioa sdas asf bldhvlh h hi hioa",
        minuite: "8m",
        header: "header"
    },
    {
        id: 2,

        image: "",
        text: "lorem asdasdasd asdas asf bldhvlh h hi hioa",
        minuite: "8m",
        header: "header"
    },
    {
        id: 3,
        image: "",
        text: "lorem asdasdasd asdas asf bldhvlh h hi hioa",
        minuite: "8m",
        header: "header"
    },
    {
        id: 4,
        image: "",
        text: "lorem asdasdasd asdas asf bldhvlh h hi hioa",
        minuite: "8m",
        header: "header"
    }
]

const Feed = () => {
    const navigation = useNavigation()
    const [search, setSearch] = useState("")
    return (
        <View style={{ flex: 1, backgroundColor: "white",paddingHorizontal:15 }}>
            <View style={styles.header} >
                <TouchableOpacity onPress={() => navigation.navigate("")}>
                    <Text style={styles.text}>setting</Text>
                </TouchableOpacity>
                <Text style={styles.title}>Feed</Text>
                <TouchableOpacity onPress={() => navigation.navigate("")}>
                    <Text style={styles.text}>Logout</Text>
                </TouchableOpacity>
            </View>
            {/* <View > */}
                <TextInput style={styles.search} value={search} onChangeText={setSearch} />
            {/* </View> */}
            <ScrollView style={{ marginTop: 3, marginBottom: 1 }} showsVerticalScrollIndicator={false} >
                {data.map((e) => {
                    return (
                        <View key={e.id} style={styles.cont}>
                            <View style={styles.imageLeft}>

                            </View>
                            <View style={styles.contante}>
                                <View style={styles.headerminute}>
                                    <Text style={{ fontSize: 21, fontWeight: 700 }}>{e.header}</Text>
                                    <Text>{e.minuite}</Text>
                                </View>
                                <Text>{e.text}</Text>
                            </View>
                        </View>
                    )
                })}{data2.map((e) => {
                    return (
                        <View style={styles.imagefittt} key={e.id}>
                        </View>
                    )
                })}
            </ScrollView>
        </View>

    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingVertical:30,
    },
    title: {
        fontSize: 30,
    },
    search:{
        backgroundColor:"#BDC5CD",
        marginVertical:10,
        borderRadius:30,
        fontSize:20,
        padding:6,
        paddingHorizontal:19
    },
    cont: {
        flexDirection: "row",
        alignItems: "flex-start",
        // paddingHorizontal:15,
        marginTop: 30,
        gap: 1
    },
    imageLeft: {
        width: 50,
        height: 50,
        backgroundColor: "blue",
        marginTop: 6,
        borderRadius: 14

    },
    headerminute: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    contante: {
        gap: 10,

        paddingHorizontal: 10,
        // width:500%
        flexShrink: 2,
        paddingBottom: 10,
        borderBottomWidth: 2,
        borderColor: "block"
    },
    imagefittt: {
        width: SCREEN_WIDTH - 40,

        height: SCREEN_WIDTH - 40,
        backgroundColor: "red",
        marginBottom: 10,
        borderRadius: 30
    }
})


export default Feed