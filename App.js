import { StyleSheet, Text, TextInput, View  , useWindowDimensions , TouchableOpacity} from 'react-native';
import RadioButtonComponent from './radiobutton';
import Checkbox from './CheckBox';
import CustomList from './CustomList';
import Skills from './Skills';
import { useState } from 'react';


export default function App() {
  const [text, setText] = useState('');


  const {height , width } =useWindowDimensions();
  return (
    <View style={styles.container}>


      <View style={{flexDirection: width > height ? 'row' : 'column'}}>
      <Text style={styles.labels}>Email:   </Text>
        <TextInput placeholder='30 char max'   style={styles.InputField}/>
        <Text style={styles.labels}>Name:  </Text>
        <TextInput placeholder='30 char max'  style={styles.InputField} />
      </View>

<View style={{flexDirection: width > height ? 'row' : 'column'}}>
<RadioButtonComponent />

<CustomList />
</View>



          
 <View style={{ flexDirection: width > height ? "row" :"column"}}>
      
        <View style={{ flexDirection: "column"}}>
          <View style={{ flexDirection: width > height ? "row" :"column",margin:10 }}>
           <Checkbox />
          </View>
          
        <View style={{ flexDirection: width > height ? "row" :"column",margin:10}}>
            <Skills style={{height:50}}/>
          </View> 
        </View>

        <View >
          <View style={{ flexDirection: width > height ? "row" :"column",margin:10 }}>
            <Text style={{marginTop:width > height ? 10 : 0 ,marginLeft: width > height ? 5:0}}>Address:  </Text>
            <TextInput style={styles.InputTextStyle}/>
          </View>

          
         


         <View style={{ flexDirection: width > height ? "row" :"column" }}>  
         <TouchableOpacity 
         style={[styles.ButtonStyling,{marginTop:width > height ? 20 : 5 , marginLeft:width > height ? 120 : 5,
         }]}> 
         <Text>Submit </Text>
         </TouchableOpacity>
         
 </View>
            </View>
         </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    marginTop:20,
    margin:20
  },
  InputField :{
    borderWidth:2,
    width: 280,
    textAlign:'center'
  } ,

  ButtonStyling:{
alignItems: 'center', 
backgroundColor:'#2fa7ca',
borderRadius:5,
width:80,
padding:10,
color:'white'
  } ,
  labels:{
    marginTop:10,
    marginLeft:20
  },
  InputTextStyle:{
    borderWidth:2,
    width:280,
    height:60
  }
})