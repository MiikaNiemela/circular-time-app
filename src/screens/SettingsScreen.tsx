import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch, useColorScheme, TouchableOpacity, Alert } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export const SettingsScreen: React.FC = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [outlookEnabled, setOutlookEnabled] = useState(false);
  const [googleEnabled, setGoogleEnabled] = useState(false);

  const handleAuthOutlook = () => {
    Alert.alert('Authentication', 'Outlook authentication to be implemented');
  };

  const handleAuthGoogle = () => {
    Alert.alert('Authentication', 'Google Calendar authentication to be implemented');
  };

  return (
    <View style={[styles.container, { backgroundColor: isDarkMode ? Colors.black : Colors.white }]}>
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: isDarkMode ? Colors.white : Colors.black }]}>
          Calendar Services
        </Text>

        <View style={styles.settingRow}>
          <Text style={[styles.settingText, { color: isDarkMode ? Colors.white : Colors.black }]}>
            Outlook Calendar
          </Text>
          <View style={styles.settingControls}>
            <Switch
              value={outlookEnabled}
              onValueChange={setOutlookEnabled}
            />
            <TouchableOpacity onPress={handleAuthOutlook} style={styles.authButton}>
              <Text style={styles.authButtonText}>Authenticate</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.settingRow}>
          <Text style={[styles.settingText, { color: isDarkMode ? Colors.white : Colors.black }]}>
            Google Calendar
          </Text>
          <View style={styles.settingControls}>
            <Switch
              value={googleEnabled}
              onValueChange={setGoogleEnabled}
            />
            <TouchableOpacity onPress={handleAuthGoogle} style={styles.authButton}>
              <Text style={styles.authButtonText}>Authenticate</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  settingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  settingText: {
    fontSize: 16,
  },
  settingControls: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  authButton: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
  },
  authButtonText: {
    color: 'white',
    fontSize: 14,
  },
});
