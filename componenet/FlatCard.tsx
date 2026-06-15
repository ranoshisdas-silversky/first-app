import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function FlatCard() {
  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>FlatCard</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    backgroundColor: 'blue',
  },
});
