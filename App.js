import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, Text, View, TextInput} from 'react-native';
import { useState } from 'react';

export default function App() {

  const [number, setNumber] = useState(0);//add
  const [number2, setNumber2] = useState(0);// add
  const [number3, setNumber3] = useState(0); // subtract
  const [number4, setNumber4] = useState(0);// subtract 

  const [message, setMessage] = useState('');
  const [message2, setMessage2] = useState('');

  function getSum() {
    const total = number + number2;
    return `The sum of ${number} and ${number2} is ${total}`;
  }

  function onChangeText(input) {
    const inputNumber = parseInt(input) || 0;
    setNumber(inputNumber)
  }

  function onChangeText2(input2) {
    const inputNumber2 = parseInt(input2) || 0;
    setNumber2(inputNumber2)
  }



  function getDiff() {
    const total2 = number3 - number4;
    return `The diff of ${number3} and ${number4} is ${total2}`;
  }

  function onChangeText3(input3) {
    const inputNumber3 = parseInt(input3) || 0;
    setNumber3(inputNumber3)
  }

  function onChangeText4(input4) {
    const inputNumber4 = parseInt(input4) || 0;
    setNumber4(inputNumber4)
  }




  return (
    /** Addition Start  */
    <View style={styles.container}>    
<View style={styles.box}>
<Text style={styles.textHeader}>Add</Text>
  <View style={styles.inputBox1}>
      <Text style={styles.text}>
        Input First Number
      </Text>
      <TextInput onChangeText={onChangeText}
        value={number.toString()}
        keyboardType='numeric'>
      </TextInput></View>
      <View style={styles.inputBox2}>
      <Text style={styles.text}>
        Input Second Number
      </Text>
      <TextInput onChangeText={onChangeText2}
        value={number2.toString()}
        keyboardType='numeric'>
      </TextInput></View>
      
      <Button
        title='Calculate Total'
        onPress = {() => setMessage(getSum)}>
      </Button>
      
      <Text>
        {message}
      </Text></View>  
      {/* Addition end */}

      <View style={styles.box}>
<Text style={styles.textHeader}>Subtract</Text>
  <View style={styles.inputBox1}>
      <Text style={styles.text}>
        Input First Number
      </Text>
      <TextInput onChangeText={onChangeText3}
        value={number3.toString()}
        keyboardType='numeric'>
      </TextInput></View>
      <View style={styles.inputBox2}>
      <Text style={styles.text}>
        Input Second Number
      </Text>
      <TextInput onChangeText={onChangeText4}
        value={number4.toString()}
        keyboardType='numeric'>
      </TextInput></View>
      
      <Button
        title='Calculate Total'
        onPress = {() => setMessage2(getDiff)}>
      </Button>
      
      <Text>
        {message2}
      </Text></View>  
  

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    alignItems: 'center',
    justifyContent: 'center'
  },

  text: {
    color: 'black',
    alignItems: 'center'
  },
  textHeader: {
    fontSize: 16,
    paddingTop: 5,
    color: 'black',
    alignItems: 'center'
  },

  box: {
    borderWidth: 2,
    paddingTop: 5,
    height: 235,
    width: 250,
    borderColor: 'red',
    alignItems: 'center',
    
  },
  inputBox1: {
    borderWidth: 1,
    marginTop: 20,
    marginBottom: 10,
    height: 50,
    width: 170,
    borderColor: 'blue',
    alignItems: 'center',
    
  },
  inputBox2: {
    borderWidth: 1,
    height: 50,
    width: 170,
    marginBottom: 10,
    borderColor: 'green',
    alignItems: 'center',
    
  },

});