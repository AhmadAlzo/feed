import { View, Text, StyleSheet, TouchableOpacity, ScrollView, FlatList,Image, TextInput } from 'react-native'
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


const dataList = [
    {
        id: 1,
        name: "hot",
        data: data
    },
    {
        id: 2,
        name: "market",
        data: data
    },
    {
        id: 3,
        name: "emo",
        data: data
    },
    {
        id: 4,
        name: "ali",
        data: data
    },
    {
        id: 5,
        name: "foo",
        data: data
    },
    {
        id: 6,
        name: "naa",
        data: data
    },
    {
        id: 7,
        name: "kali",
        data: data
    },
    {
        id: 8,
        name: "windoes",
        data: data
    },
]

const Item = ({e}) => (
    <View>
        <Text style={{fontSize:25,paddingLeft:20}}>{e.name}</Text>
        <ScrollView horizontal={true} contentContainerStyle={{gap:30,paddingVertical:10}} showsHorizontalScrollIndicator={false}>
            {e.data.map((e)=>{
                return (
                    <View key={e.id} style={styles.contScroll}>
                        <View style={styles.iagItem}>
                        </View>
                        <Text>{e.header}</Text>
                        <Text>{e.minuite}</Text>
                    </View>
                )
            })}
        </ScrollView>
    </View>
);

const Market = () => {
    const navigation = useNavigation()
    const [search, setSearch] = useState("")
    
    return (
        <View style={{ flex: 1, backgroundColor: "white" }}>
            <View style={styles.header} >
                <TouchableOpacity onPress={() => navigation.navigate("")}>
                    <Text style={styles.text}>setting</Text>
                </TouchableOpacity>
                <Text style={styles.title}>Market</Text>
                <TouchableOpacity onPress={() => navigation.navigate("")}>
                    <Text style={styles.text}>filter</Text>
                </TouchableOpacity>
            </View >
            <View style={{ paddingHorizontal: 15}}>
            <TextInput style={styles.search} value={search} onChangeText={setSearch} placeholder='serach'/>
            </View>
            <FlatList
                data={dataList}
                renderItem={({item}) => <Item e={item} />}
                keyExtractor={item => item.id}
                ItemSeparatorComponent={()=><View style={styles.separete}></View>}
            />
            
        </View>

    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingVertical: 30,
         paddingHorizontal: 15
    },
    title: {
        fontSize: 30,
    },
    search: {
        backgroundColor: "#BDC5CD",
        marginVertical: 10,
        borderRadius: 30,
        fontSize: 20,
        padding: 8,
        paddingHorizontal: 19,
        borderWidth:1,
        borderColor:"black"
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
    },
    contScroll:{
        width:SCREEN_WIDTH/3,
        shadowColor: 'black',
        shadowOpacity: 0.1,
        elevation: 6,
        borderRadius: 10,
        padding:8,
        backgroundColor: '#f2f2f2',
        // shadowOffset: { width: 10, height: 12 },
        gap:6
    },
    iagItem:{
        width:SCREEN_WIDTH/3-16,
        backgroundColor:"red",
        height:SCREEN_WIDTH/3-16,
        borderRadius:10
    },
    separete:{
        width:"100%",
        height:2,
        backgroundColor:"red",
        marginVertical:10
    }
})


export default Market