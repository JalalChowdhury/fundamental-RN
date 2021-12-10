import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Home from './pages/Home/Home';

export default function App() {
  return (
    <ScrollView >

      <View style={styles.container}>
        <Home></Home>
      </View>
      
    </ScrollView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  },
});
