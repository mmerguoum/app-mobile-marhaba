import React from 'react';
import {  StyleSheet, TouchableOpacity, Text, View, Image } from 'react-native';


export default function Home({navigation})  {
  return (
    <View style={{background:'black'}}>
      
      <View> 
        <View>
          <Image source={require('../../assets/mangment-food-img.png')} style={styles.imageHome} />
        </View>
          <View style={styles.viewTextImageHome}>
            <Text style={styles.textImageHome}>Receive Your Meal At Home </Text>
          </View>
      </View>
      <View>
          <View style={styles.borderReduction}>
              <Text style={styles.reduction}>Our Reductions</Text>
          </View>
          <View style={styles.viewImages}>
            <View>
            <Image style={styles.images} source={require('../../assets/humberger.webp')} />
                <View style={styles.viewTextImageHome}>
                  <Text style={styles.textImageFeature}>-20% On Our Burger</Text>
                </View>
             </View>
           <View> 
             <View>
             <Image style={styles.images} source={require('../../assets/salade.webp')}  />
                <View style={styles.viewTextImageHome}>
                  <Text style={styles.textImageFeature}>-30% On Our Salad</Text>
                </View>
             </View>
             <View style={{marginBottom:20}}>
             <Image style={styles.images} source={require('../../assets/pizza.webp')}  />
                <View style={styles.viewTextImageHome}>
                  <Text style={styles.textImageFeature}>-40% On Our Pizzas</Text>
                </View>
             </View>
            </View>   
          </View>
      </View>
      <View style={styles.containerButton}>
        <TouchableOpacity style={styles.buttom1} onPress={()=> navigation.navigate('Signin')}>
          <Text style={styles.btn1}>Signin</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> navigation.navigate('Profil')}>
           <Image source={require('../../assets/profil.png')} style={styles.imageProfil}/>
          </TouchableOpacity>
        <TouchableOpacity style={styles.buttom1} onPress={()=> navigation.navigate('Signup')}>
        <Text style={styles.btn1}>Signup</Text>
        </TouchableOpacity>  
      </View>   
    </View>
  )
} 

const styles = StyleSheet.create({
  containerButton : {
    display:'flex',
    flexDirection:'row',
    justifyContent:'end',
    height:'auto',
    backgroundColor:'black', 
  },
  btnin: {
    justifyContent:'center',
    textAlign:'center',
    margin:6,
    width:70,
    height:25,
    borderRadius:6,
    backgroundColor:'#B8B8B8',
  },
  btn1:{
    fontWeight:'bold',
    color:'white'
  },
  btnup: {
    justifyContent:'center',
    textAlign:'center',
    margin:6,
    width:70,
    height:25,
    borderRadius:6,
    backgroundColor:'#FF5000',
    fontWeight:'bold',
    color:'white'
  },
  btn2:{
    fontWeight:'bold',
    color:'black'
  },
  borderReduction:{
    marginLeft:'auto' ,
    marginRight:'auto',
    marginTop:90,
    marginBottom:30,
    borderWidth:3,
    borderColor:'#FF5000',
    borderRadius:8,
    height:40,
    width:200
  },
  reduction:{
    justifyContent:'center',
    textAlign:'center',
    color:'white',
    fontWeight:'bold',
    fontFamily:'notoserif',
    marginTop:8    
  },
  images:{
    height:130,
    width:300,
    borderRadius:30,
    opacity: 0.5,
    marginTop:30
  },
  imageHome: {
    height:450,     
    borderBottomLeftRadius:20,
    borderBottomRightRadius:20,
    borderTopLeftRadius:15,
    borderTopRightRadius:15,
    borderWidth:5,
    marginTop:50,
    backgroundColor:'black',
    // '#FFA500'
    
  },
  viewTextImageHome:{
    position: 'absolute', 
    top:0, 
    left:0, 
    right:0, 
    bottom:0, 
    justifyContent:'center', 
    alignItems:'center',
    color:'white',
    fontWeight:'bold',

  },
  textImageHome:{
    color:'white',
    fontWeight:'bold',
    textAlign:'center',
    fontSize:20,
    marginTop:550
  },
  viewImages:{
    marginLeft:'auto' ,
    marginRight:'auto',
  },
  textImageFeature:{
    
    color:'white',
    fontWeight:'bold',
    textAlign:'center',
    justifyContent:'center',
    fontSize:20,
    marginTop:50
  },
  viewTextImageReduction:{
 
    top:0, 
    left:0, 
    right:0, 
    bottom:0, 
    justifyContent:'center', 
    alignItems:'center',
    color:'white',
    fontWeight:'bold',
  },
  buttom1:{
    marginLeft: 'auto',
    marginRight: 'auto',
    color:'white',
    textAlign:'center',
    marginTop:20,
    borderWidth:4,
    borderColor:'#FF5000',
    width:80,
    height:30,
    borderRadius:5,
    marginBottom:20
  },
  buttom2:{
    color:'white',
    textAlign:'center',
    marginTop:15,
    color:'gray',
  },
  imageProfil:{
    width:70,
    height:70,
    bordiusRadiusLeftTop:10,
    bordiusRadiusrightTop:10,
    bordiusRadiusrightBottom:10,
    bordiusRadiusLeftBottom:10,
    marginTop: 60,
    marginBottom:30
  }
})