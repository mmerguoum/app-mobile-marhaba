import React, {useState} from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from "react-native"
import { useDispatch, Provider } from "react-redux";
import { loginAction , setRoleAction , setIdAction } from "../../actions/authActions"
import axios from "axios"

const Signin = ({ navigation }) => {

 const [data , setData] = useState({
    email : "",
    password : ""
  });
  
    const [submitted, setSubmitted] = useState(false);
  
    const handleEmail = (e) => {
      setData({ ...data, email: e });
    };

  
    const login =(data)=> {
     return axios.post(`http://localhost:4001/api/users/signin`, data);
   }
  
    const handlePassword = (e) => {
      setData({ ...data,password: e });
    };
  
    const handleSubmit =()=> {
      login(data).then((response) => {
        console.log(response);
        (async () => {
          console.log(response.data.token)
          await dispatch(loginAction());
          await dispatch(setRoleAction(jwtDecode(response.data.token).role));
          await dispatch(setIdAction(jwtDecode(response.data.token)._id));
        })()
        navigation.navigate('Home')
      }).catch((err) => console.log('err',err.response));
      setSubmitted(true);
      navigation.navigate('Home')
    };
  return (

    <View style={styles.container}>
        <View style={styles.signup}>
          <Text style={{color:'white', fontWeight:'bold',fontSize:25}}>Signin</Text> 
        </View>
            <View style={styles.borderSignin}>
              <View style={{marginTop:60}}>
                <View style={styles.input}>                    
                    <TextInput placeholder="Email..." style={styles.textInput} email={data.email} onChangeText={handleEmail} />
                    
                </View>
                <View style={styles.input}>
                    <TextInput placeholder="Password..." secureTextEntry={true} style={styles.textInput} password={data.password} onChangeText={handlePassword} />
                </View>
                    <TouchableOpacity >                    
                        <Text style={styles.buttom1} onPress={handleSubmit}>Done</Text>                       
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <Text style={styles.buttom2} onPress={() => navigation.navigate("Signup")}> Go To Signup</Text>
                    </TouchableOpacity>      
            </View>
        </View>
    </View>
  )  
}
export default Signin

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
    color: 'white',

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

