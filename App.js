import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Image,Text, TextInput, View,Button ,Alert, ActivityIndicator} from 'react-native';
//Simple Login
export default function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [res,setRes]=useState('');
    


 
   
   

 

  return (
     
    <View style={styles.container}>
      <Image source={require('./assets/mocktestlogo.jpg')}
      style={styles.tinyLogo} />
     
     <TextInput
        style={styles.input}
        placeholder="Username or email"
        onChangeText={newText => setNum1(newText)}
        defaultValue={num1}
      />
       <TextInput
        style={styles.input}
        placeholder="password"
        onChangeText={newText => setNum2(newText)}
        defaultValue={num2}
      />
      <Button  style={styles.btn} onPress={()=>setRes(ans)} title='Login'>
      </Button>
    
       

      
    </View>
  );
}

const styles = StyleSheet.create({
  input :{
    height: 40,
    width:200,
    borderRadius:5,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor:'#777'
  },
  result:{
    marginTop:40
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
   
  
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn:{
    paddingHorizontal: 8,
    paddingVertical: 6,
    elevation: 6
  },
  tinyLogo: {
    width: 100,
    height: 100,
    borderRadius:5,
    marginBottom:30
  },
});
