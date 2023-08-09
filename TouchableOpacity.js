
import { useState } from 'react';
import { StyleSheet, ScrollView,Image,Text, TextInput, View,Button,TouchableOpacity, FlatList} from 'react-native';

export default function App() {
   const [people,setPeople]=useState(
    [
      {name:'shaun',id:'1'},
      {name:'Yoshi',id:'2'},
      {name:'Mario',id:'3'},
      {name:'luigi',id:'4'},
      {name:'peach',id:'5'},
      {name:'toad',id:'6'},
      {name:'bowser',id:'7'},
      {name:'shaun',id:'8'},
      {name:'Yoshi',id:'9'},
      {name:'Mario',id:'10'},
      {name:'luigi',id:'11'},
      {name:'peach',id:'12'},
      {name:'toad',id:'13'},
      {name:'bowser',id:'14'}
    ]
   );
   const pressHandler=(id)=>{
    personsrem=people.filter((person)=>person.id!=id);
    setPeople(personsrem);
   
   }

 return(
  <View style={styles.container}>
    
    <FlatList 
     numColumns={2}
       keyExtractor={(item)=>item.id}
       data={people}
       renderItem={
        ({item})=>(
         < TouchableOpacity onPress={()=>pressHandler(item.id)}>
          <Text style={styles.item}>{item.name}</Text>
          </TouchableOpacity>
        )
       }/> 
 </View>
 );
}

const styles = StyleSheet.create({
 title:{
  flex:1
 },
 item:{

  backgroundColor:'yellow',
  marginHorizontal:20,
  width:80,
  textAlign:'center',
  height:40,
  marginTop:30,
  borderRadius:8
 },
  container: {
    flex:1,
    marginTop:40,
    display:'flex',
 
    alignItems: 'center',
    justifyContent: 'center',
  },
 
});
