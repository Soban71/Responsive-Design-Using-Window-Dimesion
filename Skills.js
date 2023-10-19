import { View, Text ,useWindowDimensions} from 'react-native'


export default function Skills() {
    const {height, width} = useWindowDimensions();

  return (
    
    <View style={{  flexDirection: width > height ? "row" :"column" }} >
      <Text style={{marginTop:10}}>Skills : </Text>
      <View style={{borderWidth:2  ,marginTop:10,width:280 , padding:8}}>
        <Text>C++</Text>
        <Text>Java</Text>
        <Text>Javascript</Text>
        <Text>C#</Text>
      </View>
    </View>
  )
}