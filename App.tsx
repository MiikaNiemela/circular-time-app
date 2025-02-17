/**
 * Simple one view app to show days and weeks in a circle.
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TimelineScreen} from './src/screens/TimelineScreen';
import {SettingsScreen} from './src/screens/SettingsScreen';
import {RootStackParamList} from './src/navigation/types';
import {Text, TouchableOpacity} from 'react-native';

const Stack = createNativeStackNavigator<RootStackParamList>();

function SettingsButton(navigation: any): React.ReactNode {
  return (
    <HeaderButton
      onPress={() => navigation.navigate('Settings')}
      title='Settings'
    />
  );
}

const HeaderButtonTOStyle = {marginRight: 15};
const HeaderButtonStyle = {color: '#007AFF', fontSize: 16};
// Simple header button component
const HeaderButton: React.FC<{onPress: () => void; title: string}> = ({
  onPress,
  title,
}) => (
  <TouchableOpacity onPress={onPress} style={HeaderButtonTOStyle}>
    <Text style={HeaderButtonStyle}>{title}</Text>
  </TouchableOpacity>
);
function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Timeline'>
        <Stack.Screen
          name='Timeline'
          component={TimelineScreen}
          options={({navigation}) => ({
            headerRight: () => SettingsButton(navigation),
          })}
        />
        <Stack.Screen name='Settings' component={SettingsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
