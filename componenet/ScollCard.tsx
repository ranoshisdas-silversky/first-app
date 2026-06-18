import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function ScollCard() {
  return (
    <View>
      <Text style={styles.headingText}>ScollCard</Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.container}>
          <View style={[styles.card, styles.cardOne]}>
            <Text style={styles.whiteText}>Red</Text>
          </View>
          <View style={[styles.card, styles.cardTwo]}>
            <Text style={styles.whiteText}>Green</Text>
          </View>
          <View style={[styles.card, styles.cardThree]}>
            <Text style={styles.whiteText}>Blue</Text>
          </View>
          <View style={[styles.card, styles.cardOne]}>
            <Text style={styles.whiteText}>Red 2</Text>
          </View>
          <View style={[styles.card, styles.cardThree]}>
            <Text style={styles.whiteText}>Blue 2</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 8,
    gap: 10,
    // justifyContent: 'space-evenly',
  },
  card: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    width: 100,
    borderRadius: 10,
    elevation: 5,
  },
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 10,
    backgroundColor: '#b9b9b9a5',
  },
  cardOne: {
    backgroundColor: 'red',
  },
  cardTwo: {
    backgroundColor: 'green',
  },
  cardThree: {
    backgroundColor: '#0000ff',
  },
  whiteText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
