import React from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from "react-native"

export default function Signin ({ navigation }) {
  return (
    <View style={styles.container}>
        <View style={styles.signup}>
          <Text style={{color:'white', fontWeight:'bold',fontSize:25}}>Signin</Text> 
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
    height:'100%',
  },
  borderSignin:{
    borderWidth:3,
    borderRadius:8,
    borderColor:'#DFBB00',
    width:350,
    height:300,
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
    marginBottom:120,
    
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
    marginTop:8,

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
