import react,{useState} from 'react'
import {View, Text,useWindowDimensions} from 'react-native';
import {List} from 'react-native-paper';


const CustomList=()=>{
  const {height, width} = useWindowDimensions();
  return(
      <View style={{flexDirection: width > height ? 'row' : 'column', marginTop:10,
      
      }}>

      <Text style={{marginTop: width > height ?20:0 , marginLeft: width > height ?255:0}}>Country:  </Text>
         <List.Accordion style={{borderWidth:2,height:55 ,width: 280}}>
          <List.Item title="Pakistan" />
            <List.Item title="USA" />
              <List.Item title="Germany" />
          <List.Item title="Indian" />
          <List.Item title="Bangladesh" />
        </List.Accordion>
      </View>
  )
}
export default CustomList; 