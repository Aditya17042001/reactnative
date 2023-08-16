
import { useState } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Header from './components/Header';
import TodoItem from './components/TodoItem';

export default function App() {
  const [selectedRadio,setSelectedRadio]=useState(5);
  return (
    <View style={styles.main}>
      <View>
        <Text style={styles.questionText}>Q1. Which of the following relation is correct? Which of the following relation is correct?Which of the following relation is correct?Which of the following relation is correct?</Text>
      </View>
      <TouchableOpacity onPress={()=>setSelectedRadio(1)}>
        <View style={styles.wrapper}>
          <View style={styles.radio}>
          {selectedRadio==1?  <View style={styles.radioBg}></View>:null}
          </View>
          <Text style={styles.radioText}>Radio 1</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity  onPress={()=>setSelectedRadio(2)}>
        <View style={styles.wrapper}>
          <View style={styles.radio}>
          {selectedRadio==2?  <View style={styles.radioBg}></View>:null}
          </View>
          <Text style={styles.radioText}>Radio 2</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity  onPress={()=>setSelectedRadio(3)}>
        <View style={styles.wrapper}>
          <View style={styles.radio}>
          {selectedRadio==3?  <View style={styles.radioBg}></View>:null}
          </View>
          <Text style={styles.radioText}>Radio 3</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity  onPress={()=>setSelectedRadio(4)}>
        <View style={styles.wrapper}>
          <View style={styles.radio}>
          {selectedRadio==4?  <View style={styles.radioBg}></View>:null}
          </View>
          <Text style={styles.radioText}>Radio 4</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.directionWrapper}>
      <View><Text>Prev</Text></View>
       
      <View><Text>Next</Text></View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create(
 
  {
    main:{
    
     
      paddingTop:80
    },
    questionText:{
      margin:20
    },
    radioText: {
      fontSize: 15,
      color: 'black'
    },
    radio: {
      width: 20,
      height: 20,
      borderColor: 'black',
      borderRadius: 10,
      borderWidth: 1.5,
      margin: 10
    },
    wrapper: {
      flexDirection: 'row',
      alignItems: 'center'
    },
    radioBg:{
      backgroundColor:'#00008b',
      height:14,
      width:14,
      margin:1.5,
      borderRadius:10

    },
    directionWrapper:{
      paddingLeft:15,
      flexDirection:'row'
    }
  }
)
