import * as React from 'react';
import { StyleSheet,TouchableOpacity,Text, View, ScrollView} from "react-native"
import { Avatar, Card, Title, Paragraph } from 'react-native-paper';
import axios from 'axios';


const LeftContent = props => <Avatar.Icon {...props} icon="food" style={styles.icon} />

const AppURL = "http://172.16.8.155:4001/api";


const Cards = () => {

  const [meals, setMeals] = React.useState([])
  
  function getMeals() {
    return axios.get(`${AppURL}/meals/all`);
    
  }


  React.useEffect(() => {
    getMeals().then(res => {
      
      setMeals(res.data);
      console.log(meals)
    })
  }, [])

  return(
    <View >
    
      <ScrollView>
      {meals.map(meal =>(
        <Card style={styles.container}>
          <Card.Title style={styles.header} title="MEALS" titleStyle={{ color: "#fff" }} subtitle="Restaurant MARHABA" subtitleStyle={{ color:'#808080' }} left={LeftContent}/>
          <Card.Content>
            <Title style={styles.title}>{meal.name}</Title>
            <Paragraph style={styles.title}>{meal.description}</Paragraph>
          </Card.Content>
          <Card.Cover  source={{uri:meal.image }}/>
          <Card.Actions>
            <TouchableOpacity style={styles.btn}>
              <Text style={styles.text}>Order Now</Text>
            </TouchableOpacity>
            <Paragraph style={styles.price}>{meal.price} DH</Paragraph>
          </Card.Actions>
      </Card>
      ))
      }
      </ScrollView>
    </View>
    
  )
};

const styles = StyleSheet.create({
    container:{
        backgroundColor:'black'
    },
    title:{
    color:'white',
    
    },
    icon:{
        backgroundColor:'#DFBB00',
    },
    btn:{    
    backgroundColor:'#DFBB00',
    marginLeft:4,
    padding:8,
    borderRadius:10,
    margin:6,
    marginRight:200
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
    price:{
      color:'white',
      marginLeft: 90,
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
        marginBottom:40
    },

})

export default Cards;