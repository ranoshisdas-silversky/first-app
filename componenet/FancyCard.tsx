import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>FancyCard</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
          source={require('../img/atal-bridge.png')}
          style={styles.image}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Atal Bridge</Text>
          <Text style={styles.location}>Ahmedabad, Gujarat 380007, India</Text>
          <Text style={styles.cardDiscription}>
            Atal Bridge is a cable-stayed bridge over the river Sabarmati in
            Ahmedabad, Gujarat, India. It is the longest cable-stayed bridge in
            India and was inaugurated on 27 March 2022 by Prime Minister
            Narendra Modi.
          </Text>
        </View>
      </View>
    </View>
  );
}

//use image component and use @2x and @3x for different screen density of different devices also use alignself, flexshrink, flexgrow, flexwrap
const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 10,
    backgroundColor: '#b9b9b9a5',
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 8,
    alignSelf: 'center',
  },
  cardBody: {
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 12,
  },
  card: {
    height: 360,
    width: '90%',
    borderRadius: 10,
    // padding: 7,
    marginVertical: 12,
    marginHorizontal: '5%',
  },
  cardElevated: {
    elevation: 10,
    backgroundColor: 'skyblue',
  },
  image: {
    height: 180,
    width: '100%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  location: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#555555',
    alignSelf: 'center',
  },
  cardDiscription: {
    fontSize: 14,
    color: '#242B2E',
    marginTop: 8,
    flexWrap: 'wrap',
    flexShrink: 1,
  },
});
