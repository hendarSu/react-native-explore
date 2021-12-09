import React from 'react';
import { StatusBar, View, StyleSheet } from 'react-native';
import { PersonalInformation, Bio } from './components';

export default function App() {
  return (
    <View style={styles.container}>
      <PersonalInformation />
      <Bio />
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
