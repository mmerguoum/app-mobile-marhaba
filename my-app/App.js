import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "./screens/home/Home";
import Signin from "./screens/signin/Signin";
import Signup from "./screens/signup/Signup";
import Profil from "./screens/profil/Profil";


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Signin" component={Signin}/>
        <Stack.Screen name="Signup" component={Signup}/>
        <Stack.Screen name="Profil" component={Profil}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}



