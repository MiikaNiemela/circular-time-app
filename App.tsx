/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  Header,
} from 'react-native/Libraries/NewAppScreen';
import { MultiCircle, Slice } from './circle';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const monthSlices: Slice[] = [
    { color: 'red', degrees: 30 },
    { color: 'blue', degrees: 30 },
    { color: 'green', degrees: 30 },
    { color: 'yellow', degrees: 30 },
    { color: 'purple', degrees: 30 },
    { color: 'orange', degrees: 30 },
    { color: 'red', degrees: 30 },
    { color: 'blue', degrees: 30 },
    { color: 'green', degrees: 30 },
    { color: 'yellow', degrees: 30 },
    { color: 'purple', degrees: 30 },
    { color: 'orange', degrees: 30 },
  ];
  const weekSlices: Slice[] = Array.from({ length: 52 }, (_, index) => {
    const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange'];
    return { color: colors[index % colors.length], degrees: 360 / 52 };
  });
  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <MultiCircle circles={[
            { size: 400, slices: monthSlices },
            { size: 300, slices: weekSlices, lineWidth: 30 },
          ]} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;

