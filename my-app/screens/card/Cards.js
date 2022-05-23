import * as React from 'react';
import { StyleSheet,TouchableOpacity,Text, View, ScrollView, Image} from "react-native"
import { Title, Paragraph } from 'react-native-paper';



const Cards = () => {

  return(
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.grandTitle}>
          <Text style={styles.TitleGeneral}>RESTAURANT MARHABA</Text>
        </View>
        <View style={styles.card}>
            <View >
                <Image style={styles.image} source={require('../../assets/humberger.webp')} />
            </View>
            <View style={styles.border}>
              <Title style={styles.title}>Name</Title>
              <Paragraph style={styles.Description}>Lorem Ipsum is simply dummy text of the printing and typesetting industry</Paragraph>
            <View style={styles.prixBtn}>
              <Text style={styles.prix}>Prix DH</Text>
              <TouchableOpacity style={styles.btn}>
                  <Text style={styles.text}>Order Now</Text>
              </TouchableOpacity>
            </View>
            </View>
        </View>   
      </ScrollView>
    </View>
     )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'black',
        height: '100%'
    },
    grandTitle: {
      height:100,     
      borderWidth:2,
      borderColor:'#DFBB00',
      borderBottomRightRadius: 70,
      borderBottomLeftRadius: 70,

    },
    TitleGeneral: {
      color: 'white', 
      textAlign: 'center',
      marginTop: 'auto',
      marginBottom: 'auto',
      fontWeight: 'bold', 
      fontSize: 25,

    },
    title:{
    color:'white',
    marginLeft: 10,
    marginTop: 10,
    },
    prixBtn:{
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    prix:{
      color:'white',
      marginTop: 30,
      marginLeft: 10,
      width: 50,
      fontSize: 15,

      },
    Description:{
    color:'white',
    marginLeft: 10,
    marginTop: 10,
    fontSize: 12,
    },
    icon:{
        backgroundColor:'#DFBB00',
    },
    btn:{    
    backgroundColor:'#DFBB00',
    borderRadius:8,
    margin:6,
    
    width: 110,
    height: 35,
    justifyContent:'center',
    textAlign: 'center',
    marginTop: 20,
    },
    text:{
        fontWeight:'bold',
        fontSize:17 
    }, 
    picon:{
        backgroundColor:'#DFBB00',
        width:200,
        height:200
    },
    image:{
        width: 280,
        height:200,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 20,
        borderRadius : 8,
        marginBottom: 10,
    },
    card:{
      marginTop: 30,
      width: 320,
      height: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
      borderWidth: 2,
      borderColor: '#DFBB00',
      borderRadius : 10,
    },
    border: {
      borderTopColor: '#DFBB00',
      borderWidth: 1,
      justifyContent: 'space-evenly'
    }
})

export default Cards;

