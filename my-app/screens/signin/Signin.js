import React from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from "react-native"

export default function Signin ({ navigation }) {
  return (
    <View style={styles.container}>
        <View style={styles.signup}>
          <Text style={{color:'white', fontWeight:'bold',fontSize:25}}>Signup</Text> 
        </View>
            <View style={styles.borderSignin}>
              <View style={{marginTop:60}}>
                <View style={styles.input}>
                    <TextInput placeholder="Email..." style={styles.textInput}></TextInput>
                </View>
                <View style={styles.input}>
                    <TextInput placeholder="Password..." style={styles.textInput}></TextInput>
                </View>
                    <TouchableOpacity >
                        <Text style={styles.buttom1} onPress={() => navigation.navigate("Home")}>Done</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <Text style={styles.buttom2} onPress={() => navigation.navigate("Signup")}> Go To Signup</Text>
                    </TouchableOpacity>      
            </View>
        </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
    backgroundColor:'black',
    height:'100%'
  },
  borderSignin:{
    borderWidth:1,
    borderRadius:8,
    borderColor:'#FF6500',
    width:350,
    height:300,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  signup:{
    height:100,
    textAlign:'center',
    justifyContent:'center',
    borderWidth:2,
    borderColor:'#FF6500',
    borderBottomRightRadius: 70,
    borderBottomLeftRadius: 70,
    backgroundColor:'#FF5000',
    marginBottom:120
  },
  textInput:{
    borderWidth:0.5,
    borderColor:'#FF6500',  
    borderRadius: 12,
    width:250,
    padding:10,
   
  },
  input:{
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop:10,

  },
  buttom1:{
    marginLeft: 'auto',
    marginRight: 'auto',
    color:'white',
    textAlign:'center',
    marginTop:20,
    borderWidth:4,
    borderColor:'#FF6500',
    width:80,
    borderRadius:5,
  },
  buttom2:{
    color:'white',
    textAlign:'center',
    marginTop:15,
    color:'gray',
  }
})
