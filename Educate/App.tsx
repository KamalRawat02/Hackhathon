/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <Text style={styles.highlight}>First screen</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  highlight: {
    fontSize: 26,
  },
});

export default App;
