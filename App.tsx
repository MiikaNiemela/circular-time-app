/**
 * Simple one view app to show days and weeks in a circle.
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

const backgroundStyle = (isDarkMode: boolean) => ({
  backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
});

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const monthSlices: Slice[] = Array.from({ length: 12 }, (_, index) => {
    const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange'];
    return { color: colors[index % colors.length], degrees: 30 };
  });
  const weekSlices: Slice[] = Array.from({ length: 52 }, (_, index) => {
    const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange'];
    return { color: colors[index % colors.length], degrees: 360 / 52 };
  });
  const viewStyle = {
    backgroundColor: isDarkMode ? Colors.black : Colors.white,
  };

  return (
    <SafeAreaView style={backgroundStyle(isDarkMode)}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle(isDarkMode).backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle(isDarkMode)}>
        <Header />
        <View style={viewStyle}>
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

