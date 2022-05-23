import React from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from "react-native"

export default function Signup ({ navigation }) {
  return (
    <View style={styles.container}>
        <View style={styles.signup}>
          <Text style={{color:'white', fontWeight:'bold',fontSize:25}}>Signup</Text> 
        </View>
        <View style={styles.borderSignup}>
            <View style={{marginTop:30}}>
                <View style={styles.input}>
                    <TextInput placeholder="Name..." style={styles.textInput}></TextInput>
                </View> 
                <View style={styles.input}>
                    <TextInput placeholder="Email..." style={styles.textInput}></TextInput>
                </View>
                <View style={styles.input}>
                    <TextInput placeholder="Password..." style={styles.textInput}></TextInput>
                </View>
                <View style={styles.input}>
                    <TextInput placeholder="Telephone..." style={styles.textInput}></TextInput>
                </View>
                    <TouchableOpacity >
                        <Text style={styles.buttom1} onPress={() => navigation.navigate("Signin")}>Done</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <Text style={styles.buttom2} onPress={() => navigation.navigate("Signin")}> Go To Signin</Text>
                    </TouchableOpacity>      
            </View>
        </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
    backgroundColor:'black',
    height: '100%'
  },
  borderSignup:{
    borderWidth:3,
    borderRadius:8,
    borderColor:'#DFBB00',
    width:350,
    height:350,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  signup:{
    height:100,
    textAlign:'center',
    justifyContent:'center',
    borderWidth:4,
    borderColor:'#DFBB00',
    borderBottomRightRadius: 70,
    borderBottomLeftRadius: 70,
    backgroundColor:'black',
    marginBottom:80
  },
  textInput:{
    borderWidth:2,
    borderColor:'#DFBB00',  
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
    borderColor:'#DFBB00',
    width:80,
    borderRadius:5,
    fontWeight:'bold',

  },
  buttom2:{
    color:'white',
    textAlign:'center',
    marginTop:15,
    color:'gray',
    fontWeight:'bold',

  }
})
