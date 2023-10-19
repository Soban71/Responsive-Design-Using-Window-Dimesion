import React, { useState } from 'react';
import { View, Text  , useWindowDimensions} from 'react-native';
import { Checkbox } from 'react-native-paper';

export default function App() {
  const [bioChecked, setBioChecked] = useState(false);
  const [mathChecked, setMathChecked] = useState(false);
  const [physicsChecked, setPhysicsChecked] = useState(false);
  const {height , width } =useWindowDimensions();

  return (
    <View style={{flexDirection: width > height ? 'row' : 'column'}}>
     <Text >Selected subjects</Text>
     <View style={{flexDirection:'row'}}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      
        <Checkbox.Android
          status={bioChecked ? 'checked' : 'unchecked'}
          onPress={() => setBioChecked(!bioChecked)}
        />
        <Text>Phy</Text>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Checkbox.Android
          status={mathChecked ? 'checked' : 'unchecked'}
          onPress={() => setMathChecked(!mathChecked)}
        />
        <Text>Chem</Text>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Checkbox.Android
          status={physicsChecked ? 'checked' : 'unchecked'}
          onPress={() => setPhysicsChecked(!physicsChecked)}
        />
        <Text>Bio</Text>
      </View>

      </View>
    </View>
  );

 
}