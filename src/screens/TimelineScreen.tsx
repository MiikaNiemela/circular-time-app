import React, { useState } from 'react';
import { View, StyleSheet, useColorScheme } from 'react-native';
import SegmentedControl from '@react-native-segmented-control/segmented-control';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { MultiCircle, Slice } from '../components/timeline/circle';

type TimelineMode = 'day' | 'week' | 'month' | 'year';

export const TimelineScreen: React.FC = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [selectedMode, setSelectedMode] = useState<TimelineMode>('month');

  const monthSlices: Slice[] = Array.from({ length: 12 }, (_, index) => ({
    color: ['red', 'blue', 'green', 'yellow', 'purple', 'orange'][index % 6],
    degrees: 30,
  }));

  const weekSlices: Slice[] = Array.from({ length: 52 }, (_, index) => ({
    color: ['red', 'blue', 'green', 'yellow', 'purple', 'orange'][index % 6],
    degrees: 360 / 52,
  }));

  return (
    <View style={[styles.container, { backgroundColor: isDarkMode ? Colors.black : Colors.white }]}>
      <SegmentedControl
        values={['Day', 'Week', 'Month', 'Year']}
        selectedIndex={['day', 'week', 'month', 'year'].indexOf(selectedMode)}
        onChange={(event) => {
          setSelectedMode(['day', 'week', 'month', 'year'][event.nativeEvent.selectedSegmentIndex] as TimelineMode);
        }}
        style={styles.segmentedControl}
      />
      <MultiCircle circles={[
        { size: 400, slices: monthSlices },
        { size: 300, slices: weekSlices, lineWidth: 30 },
      ]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
  },
  segmentedControl: {
    marginBottom: 20,
    width: '90%',
  },
});
