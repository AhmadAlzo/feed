import React,{useEffect} from "react";
import { KeyboardAvoidingView, Platform, StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { STATUSBAR_HEIGHT } from './constants';

//  pages

import LoginScreen from "./src/screens/LoginScreen";
import RegisterScreen from "./src/screens/RegisterScreen";
import HomePage from "./src/screens/HomePage";
import Profile from "./src/screens/Profile";
import Feed from "./src/screens/Feed";
import Market from "./src/screens/Market";
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();



export default function App() {
  // useEffect(() => {
  //   const checkLoginStatus = async () => {
  //     try {
  //       const token = "123123123131231212"
  //       AsyncStorage.setItem("authToken", token);  
  //     } catch (err) {
  //       console.log("error message", err);
  //     }
  //   };
  //   checkLoginStatus();
  // }, []);
  function BottomTabs() {
    return (
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomePage}
          options={{
            tabBarLabel: "Home",
            tabBarLabelStyle: { color: "#008E97",opacity:0 },
            headerShown: false,
            tabBarIcon: ({ focused }) =>
            <View style={[styles.bar,{backgroundColor:focused?"#5db075":"#BDC5CD"}]}></View>
          }}
        />
        <Tab.Screen
          name="Media"
          component={Feed}
          options={{
            tabBarLabel: "Media",
            headerShown: false,
            tabBarLabelStyle: { color: "#008E97",opacity:0 },
            tabBarIcon: ({ focused }) =>
            <View style={[styles.bar,{backgroundColor:focused?"#5db075":"#BDC5CD"}]}></View>
          }}
        />
        <Tab.Screen
          name="Cart"
          component={Market}
          options={{
            tabBarLabel: "Cart",
            tabBarLabelStyle: { color: "#008E97",opacity:0 },
            
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              <View style={[styles.bar,{backgroundColor:focused?"#5db075":"#BDC5CD"}]}></View>
              
          }}
        />
        <Tab.Screen
          name="Profile"
          component={HomePage}
          options={{
            tabBarLabel: "Profile",
            headerShown: false,
            tabBarLabelStyle: { color: "#008E97",opacity:0 },
            tabBarIcon: ({ focused }) =>
            <View style={[styles.bar,{backgroundColor:focused?"#5db075":"#BDC5CD"}]}></View>
          }}
        />
        <Tab.Screen
          name="else6"
          component={Profile}
          options={{
            tabBarLabel: "else6",
            tabBarLabelStyle: { color: "#008E97",opacity:0 },
            headerShown: false,
            tabBarIcon: ({ focused }) =>
            <View style={[styles.bar,{backgroundColor:focused?"#5db075":"#BDC5CD"}]}></View>
          }}
        />
      </Tab.Navigator>
    );
  }
  return (
    <SafeAreaProvider>
      {/* <Provider store={store}>
        <UserContext> */}
      <NavigationContainer >
        
          <View style={styles.container}>
            <Stack.Navigator>
              <Stack.Screen
                name="Main"
                component={BottomTabs}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Login"
                component={LoginScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Register"
                component={RegisterScreen}
                options={{ headerShown: false }}
              />
              {/* <Stack.Screen
                name="Info"
                component={ProductInfoScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Address"
                component={AddAddressScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Add"
                component={AddressScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Confirm"
                component={ConfirmationScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Order"
                component={OrderScreen}
                options={{ headerShown: false }}
              /> */}
            </Stack.Navigator>
          </View >
      </NavigationContainer>
      {/* </UserContext>
      </Provider> */}
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    paddingTop: STATUSBAR_HEIGHT,
    paddingHorizontal: 5
  },
  bar:{
    width:30,
    height:30,
    borderRadius:15,
    marginTop:10
  }
});