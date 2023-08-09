
import { useState } from 'react';
import { StyleSheet, ScrollView,Image,Text, TextInput, View,Button ,Alert, ActivityIndicator} from 'react-native';

export default function App() {
   const [people,setPeople]=useState(
    [
      {name:'shaun',key:'1'},
      {name:'Yoshi',key:'2'},
      {name:'Mario',key:'3'},
      {name:'luigi',key:'4'},
      {name:'peach',key:'5'},
      {name:'toad',key:'6'},
      {name:'bowser',key:'7'},
      {name:'shaun',key:'8'},
      {name:'Yoshi',key:'9'},
      {name:'Mario',key:'10'},
      {name:'luigi',key:'11'},
      {name:'peach',key:'12'},
      {name:'toad',key:'13'},
      {name:'bowser',key:'14'}
    ]
   )
 return(
 <View style={styles.container}>
  <ScrollView>
    {
      people.map((item)=>{
       return( <View key={item.key}>
          <Text style={styles.item}>{item.name}</Text>
          </View>)
      })
    }
    </ScrollView>
 </View>
 );
}

const styles = StyleSheet.create({
 
 item:{
  flex:1,
  backgroundColor:'yellow',
  width:300,
  textAlign:'center',
  height:40,
  marginTop:30
 },
  container: {
    flex: 1,
    display:'flex',
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
 
});
