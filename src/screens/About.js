import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
export default class About extends React.Component {
  render() {
    return (
        <Text>Im in the About page </Text>
        
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
