import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    Image,
    TextInput,
    Pressable,
    TouchableOpacity,
} from "react-native";
import React, { useState,useEffect } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

import BASE_URL from "../../constants.js"
  const LoginScreen = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [checkBok, setcheckBok] = useState(false);
    const navigation = useNavigation();
    useEffect(() => {
      const checkLoginStatus = async () => {
        try {
          const token = await AsyncStorage.getItem("authToken");
  
        //   if (token) {
        //     navigation.replace("Main");
        //   }
        } catch (err) {
          console.log("error message", err);
        }
      };
      checkLoginStatus();
    }, []);
    const handleLogin = () => {
      const user = {
        email: email,
        password: password,
      };
      const token = "response.data.token";
      AsyncStorage.setItem("authToken", token);
      navigation.replace("Main");
    //   axios
    //     .post("http://localhost:8000/login", user)
    //     .then((response) => {
    //       console.log(response);
    //       const token = response.data.token;
    //       AsyncStorage.setItem("authToken", token);
    //       navigation.replace("Main");
    //     })
    //     .catch((error) => {
    //       Alert.alert("Login Error", "Invalid Email");
    //       console.log(error);
    //     });
    };
    return (
      <SafeAreaView
        style={{ flex: 1, backgroundColor: "white", paddingHorizontal: 20}}
      >
        <View style={styles.header}>
                <TouchableOpacity >
                    <MaterialIcons
                        name="close"
                        size={24}
                        color="gray"
                    />
                </TouchableOpacity>
                <Text style={styles.title}>login </Text>
                <TouchableOpacity onPress={()=>navigation.navigate("")}><Text style={styles.login}>Sign up</Text></TouchableOpacity>
                
            </View>


            <View style={{ marginTop: 70, gap: 20 }}>
                

                <View
                    style={{
                        backgroundColor: "rgba(246, 246, 246, 1)",
                    }}
                >

                    <TextInput
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                        style={{
                            color: "gray",
                            marginVertical: 10,
                            fontSize: email ? 18 : 18,
                            padding: 10
                        }}
                        placeholder="enter your Email"
                    />
                </View>


                <View
                    style={{
                        backgroundColor: "rgba(246, 246, 246, 1)",
                        flexDirection:"row",
                        alignItems:"center",
                        justifyContent:"space-between"

                    }}
                >
                    <TextInput
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                        secureTextEntry={true}
                        style={{
                            color: "gray",
                            marginVertical: 10,
                            fontSize: password ? 18 : 18,
                            padding: 10
                        }}
                        placeholder="enter your Password"
                    />
                    <Pressable style={{marginRight:7}} onPress={()=>console.log("by")}>
                        <Text style={{fontSize:22,color:"blue"}}>Show</Text>
                    </Pressable>
                </View>
            </View>
            <View
                style={{
                    marginTop: 12,
                    flexDirection: "row",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                }}
            >
                <Pressable style={styles.root} onPress={() => setcheckBok(!checkBok)}>
                    <View style={[styles.bg, checkBok && { backgroundColor: "red" }]} />
                </Pressable>

                <Text style={{ fontWeight: "500" }}>
                    I would like to receive your newsletter and other promotional information.
                </Text>
            </View>

            <View style={{ marginTop: 30,alignSelf:"stretch" }} />

            <Pressable
                onPress={handleLogin}
                style={{
                    backgroundColor: "green",
                    borderRadius: 30,
                    marginLeft: "auto",
                    marginRight: "auto",
                    padding: 15,
                    width:"100%"
                }}
            >
                <Text
                    style={{
                        textAlign: "center",
                        color: "white",
                        fontSize: 16,
                        fontWeight: "bold",
                    }}
                >
                    lOGIN
                </Text>
            </Pressable>

            <Pressable
                onPress={() => navigation.goBack()}
                style={{ marginTop: 15 }}
            >
                <Text style={{ textAlign: "center", color: "green", fontSize: 16 }}>
                    Forget Password
                </Text>
            </Pressable>
      </SafeAreaView>
    );
  };
  
  export default LoginScreen;
  
  const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginVertical: 10,
        alignSelf: "stretch"
    },
    title: {
        fontSize: 30
    },
    login: {
        color: "blue"
    },
    root: {
        width: 20,
        height: 20,
        borderWidth: 3,
        borderColor: "black"
    },
    bg: {
        width: '100%',
        height: "100%",

    }
  });