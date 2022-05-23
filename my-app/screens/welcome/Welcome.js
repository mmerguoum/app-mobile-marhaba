import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'


 const Welcome = ({ navigation }) => {
  return (
    <View style={styles.container}>
        <View style={styles.welcome}>
            <Text style={{color:'white', fontWeight:'bold',fontSize:25}}>Welcome</Text> 
        </View>
        <View style={styles.visage}>
          <View style={styles.yeuxGauche}></View>
          <View style={styles.nez}></View>
          <View style={styles.yeuxDroite}></View>
        </View>
        
        <View style={styles.bouche}></View>
        <TouchableOpacity style={styles.buttom1}  onPress={() => navigation.navigate("Signin")}>
            <Text  style={styles.textButton}>Get Started</Text>
        </TouchableOpacity>
    </View>
  )
}
export default Welcome;

const styles = StyleSheet.create({
    container:{
        backgroundColor:'black',
        height:'100%'
      },
      welcome:{
        height:100,
        textAlign:'center',
        justifyContent:'center',
        borderWidth:2,
        borderColor:'#DFBB00',
        borderBottomRightRadius: 70,
        borderBottomLeftRadius: 70,
        backgroundColor:'black',
        marginBottom:60
      },
      bouche:{
          height: 60,
          width: 300,
          borderColor:'#DFBB00',
          backgroundColor:'#DFBB00',
          marginLeft: 'auto',
          marginRight: 'auto',
          marginTop: 40,
          borderBottomRightRadius : 90,
          borderBottomLeftRadius : 90,
      },
      visage: {
        flexDirection: "row",
        marginLeft: 'auto',
        marginRight: 'auto',
      },
      nez:{
        width: 60,
        height:200,
        borderColor:'white',
        backgroundColor:'#DFBB00',
        borderRadius: 30

      },
      yeuxDroite: {
          width: 50,
          height: 30,
          backgroundColor: '#DFBB00',
          marginLeft: 40,
          marginTop: 30,
          
      },
      yeuxGauche: {
        width: 50,
        height: 30,
        backgroundColor: '#DFBB00',
        marginRight:40,
        marginTop: 30,

    },
      buttom1:{
        marginLeft: 'auto',
        marginRight: 'auto',
        color:'white',
        textAlign:'center',
        marginTop:60,
        borderWidth:4,
        borderColor:'#DFBB00',
        width:160,
        height: 60,
        borderRadius:5,
        marginBottom: 30,
      },
      textButton:{
          color: '#DFBB00',
          marginTop:'auto',
          marginBottom: 'auto',
          fontSize:20,
          fontWeight:'bold',
          

      }
})

