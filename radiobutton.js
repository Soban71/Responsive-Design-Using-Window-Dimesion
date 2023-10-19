import React , {useState} from 'react'
import { RadioButton } from 'react-native-paper';
import {View, Text,useWindowDimensions} from 'react-native';

export default function RadioButtonComponent() {
    const {height , width } =useWindowDimensions();
    const [value, setValue] = useState();


  return (
    <View style={{flexDirection: width > height ? 'row' : 'column' ,width:100,
    marginTop: width>height ? 10 : 0
    }} >
    <Text style={{marginTop:20 }}>      Gender:   </Text>
       <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
       <View style={{flexDirection:"row" , marginTop:10}}>
      <View style={{flexDirection:"row"  , alignItems:'center' , 
      marginLeft: width>height ? 30 : 0 
      
      }}>
        <Text>Male </Text>
        <RadioButton value="Male" />
      </View>
      <View style={{flexDirection:"row" , alignItems:'center'}}>
        <Text> Female </Text>
        <RadioButton value="Female" />
      </View>
      </View>
    </RadioButton.Group>
    </View>
  )
}