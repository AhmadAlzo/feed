import { View, Text, TouchableOpacity,StatusBar } from 'react-native'
import React from 'react'

const HomePage = ({navigation}) => {
  return (
    <View style={{flex:1 ,alignItems:"center",backgroundColor:"white"}}>
        
      <Text> HomePag HomePage HomePage  HomePag HomePage HomePage  HomePag HomePage HomePage HomePage</Text>
      <TouchableOpacity onPress={()=>navigation.navigate("Register")}>
        <Text>register</Text>
      </TouchableOpacity>
    </View>
  )
}

export default HomePage