import React from 'react';
import { Text, View, StyleSheet,TouchableOpacity, Image } from 'react-native';


const Profil = ({ navigation }) => {
  return (
    <View style={styles.container}>
        <View >
            <View style={styles.profil}>
            <Text style={{color:'white', fontWeight:'bold',fontSize:25}}>Profil</Text> 
            </View>
        </View>
        <View>
            <TouchableOpacity onPress={()=> navigation.navigate('Profil')}>
                <Image source={require('../../assets/Avatar-Profile-No-Background.png')} style={styles.imageProfil}/>
            </TouchableOpacity>
        </View>
        <View style={styles.infoBorder}>
            <View style={styles.textInfos}>Infos</View>
            <Text style={styles.infosOne}>fulName : Merguoum Mourad</Text>
            <Text style={styles.infos}>Mobile : 0653866554</Text>
            <Text style={styles.infos}>Adresse : El mountazah rue senhaja imm 65</Text>
        </View>
        <TouchableOpacity>
            <Text style={styles.buttom2} onPress={() => navigation.navigate("Home")}> Go To Home</Text>
        </TouchableOpacity>
   </View>
  )
}

export default Profil;

const styles = StyleSheet.create({
    container:{
        backgroundColor:'black',
        height: '100%'
      },
    profil:{
        height:100,
        textAlign:'center',
        justifyContent:'center',
        borderWidth:2,
        borderColor:'#DFBB00',
        borderBottomRightRadius: 70,
        borderBottomLeftRadius: 70,
        backgroundColor:'black',
        marginBottom:80
    },
    imageProfil:{
        width:100,
        height:100,
        borderBottomRightRadius:50,
        borderBottomLeftRadius:50,
        borderTopLeftRadius:50,
        borderTopRightRadius:50,
        marginBottom:30,
        marginLeft: 'auto',
        marginRight: 'auto',
        borderWidth:3,
        borderColor:'#DFBB00',
    },
    textInfos:{
        textAlign:'center',
        marginRight:'auto',
        marginLeft: 'auto', 
        color: 'gray',
        marginTop: 20,
        fontWeight: 'bolder',
        fontSize: 25,
        borderWidth: 5,
        borderColor: '#DFBB00',
        width:100,
        borderRadius: 10
    },
    infoBorder: {
        width: 300,
        height: 180,
        borderWidth:0.5,
        borderColor: '#DFBB00',
        marginLeft:'auto',
        marginRight:'auto',
        borderRadius: 8,
        marginBottom: 40,
    },
    infosOne: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
        marginTop: 20,
        lineHeight:30
    },
    infos: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold', 
        lineHeight:30
    },
    buttom2:{
        color:'white',
        textAlign:'center',
        marginTop:15,
        color:'gray',
        marginBottom: 20
      }
})
