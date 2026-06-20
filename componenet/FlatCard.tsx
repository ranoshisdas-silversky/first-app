import { Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';

export default function FlatCard() {
  const [isModelVisible, setModelVisible] = useState(false);
  return (
    <View>
      <Text style={styles.headingText}>FlatCard</Text>
      <View style={styles.container}>
        <Pressable
          onPress={() => setModelVisible(true)}
          style={({ pressed }) => [
            { backgroundColor: pressed ? '#af0000' : '#ff0000' },
            styles.card,
          ]}
        >
          <View>
            <Text style={styles.whiteText}>Red</Text>
          </View>
        </Pressable>

        <View style={[styles.card, styles.cardTwo]}>
          <Text style={styles.whiteText}>Green</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
          <Text style={styles.whiteText}>Blue</Text>
        </View>
        <View style={[styles.card, styles.cardOne]}>
          <Text style={styles.whiteText}>Red 2</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
          <Text style={styles.whiteText}>Green 2</Text>
        </View>
      </View>
      <Modal
        visible={isModelVisible}
        animationType="slide"
        style={styles.modal}
      >
        <Pressable
          onPress={() => setModelVisible(false)}
          style={({ pressed }) => [
            { backgroundColor: pressed ? 'green' : '#00ff00' },
            styles.card,
          ]}
        >
          <View>
            <Text style={styles.modalText}>Press to Close</Text>
          </View>
        </Pressable>
      </Modal>
    </View>
  );
}

// use rowgap, columngap, flexwrap, aligncontent, justifycontent, alignitems to create a grid of cards with space between them and centered in the container.

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    // flex: 1,
    flexWrap: 'wrap',
    alignContent: 'center',
    padding: 8,
    justifyContent: 'space-evenly',
    rowGap: 10,
    columnGap: 10,
  },
  modal: {
    margin: 20,
    backgroundColor: 'orange',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 5,
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
  modalText: {
    fontWeight: 600,
  },
});
