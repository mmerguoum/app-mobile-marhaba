// import * as React from 'react';
// import { StyleSheet,TouchableOpacity,Text, View, ScrollView, Image} from "react-native"
// import { Avatar,Card, Title, Paragraph } from 'react-native-paper';
// import axios from 'axios';


// const LeftContent = props => <Avatar.Icon {...props} icon="food" style={styles.icon} />
// const AppURL = "http://localhost:4001/api/meals";


// const Cards =  () => {

//   const [repas, setRepas] = React.useState([])
  
//   function getMeals() {
//     return axios.get(`${AppURL}/all`);
//   }

//   React.useEffect(() => {
//     getMeals().then(res => {
//       setRepas(res.data.repas);
//     })
//   }, [])

//   return(
//     <View style={styles.container}>
//       <ScrollView>
//       {repas.map(repa =>(
//         <Card>
//         <View style={styles.grandTitle} left={LeftContent}>
//           <Text style={styles.TitleGeneral}>RESTAURANT MARHABA</Text>
//         </View>
//         <View style={styles.card}>
//             <View >
//                 <Image style={styles.image} source={require('../../assets/humberger.webp')} />
//             </View>
//             <View style={styles.border}>
//               <Title style={styles.title}>{repa.name}</Title>
//               <Paragraph style={styles.Description}>{repa.description}</Paragraph>
//             <View style={styles.prixBtn}>
//               <Text style={styles.prix}>{repa.prix}</Text>
//               <TouchableOpacity style={styles.btn}>
//                   <Text style={styles.text}>Order Now</Text>
//               </TouchableOpacity>
//             </View>
//             </View>
//         </View>  
//         </Card>
//          ))
//         } 
//       </ScrollView>
//     </View>
//      )
// }

// const styles = StyleSheet.create({
//     container:{
//         backgroundColor:'black',
//         height: '100%'
//     },
//     grandTitle: {
//       height:100,     
//       borderWidth:2,
//       borderColor:'#DFBB00',
//       borderBottomRightRadius: 70,
//       borderBottomLeftRadius: 70,

//     },
//     TitleGeneral: {
//       color: 'white', 
//       textAlign: 'center',
//       marginTop: 'auto',
//       marginBottom: 'auto',
//       fontWeight: 'bold', 
//       fontSize: 25,

//     },
//     title:{
//     color:'white',
//     marginLeft: 10,
//     marginTop: 10,
//     },
//     prixBtn:{
//       flexDirection: 'row',
//       justifyContent: 'space-between',
//     },
//     prix:{
//       color:'white',
//       marginTop: 30,
//       marginLeft: 10,
//       width: 50,
//       fontSize: 15,

//       },
//     Description:{
//     color:'white',
//     marginLeft: 10,
//     marginTop: 10,
//     fontSize: 12,
//     },
//     icon:{
//         backgroundColor:'#DFBB00',
//     },
//     btn:{    
//     backgroundColor:'#DFBB00',
//     borderRadius:8,
//     margin:6,
    
//     width: 110,
//     height: 35,
//     justifyContent:'center',
//     textAlign: 'center',
//     marginTop: 20,
//     },
//     text:{
//         fontWeight:'bold',
//         fontSize:17 
//     }, 
//     picon:{
//         backgroundColor:'#DFBB00',
//         width:200,
//         height:200
//     },
//     image:{
//         width: 280,
//         height:200,
//         marginLeft: 'auto',
//         marginRight: 'auto',
//         marginTop: 20,
//         borderRadius : 8,
//         marginBottom: 10,
//     },
//     card:{
//       marginTop: 30,
//       width: 320,
//       height: 400,
//       marginLeft: 'auto',
//       marginRight: 'auto',
//       borderWidth: 2,
//       borderColor: '#DFBB00',
//       borderRadius : 10,
//     },
//     border: {
//       borderTopColor: '#DFBB00',
//       borderWidth: 1,
//       justifyContent: 'space-evenly'
//     }
// })

// export default Cards;

