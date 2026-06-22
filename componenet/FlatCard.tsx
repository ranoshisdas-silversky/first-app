import {
  Alert,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, { useState } from 'react';
import VList from './VList';

export default function FlatCard() {
  const [curentInput, newInput] = useState('');
  const [isModelVisible, setModelVisible] = useState(false);
  const [isVisible, setVisible] = useState(false);
  const [tap, setTap] = useState(0);
  function handleTap() {
    setTap(tap + 1);
  }
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

        <TouchableOpacity activeOpacity={0.4} onPress={() => setVisible(true)}>
          <View style={[styles.card, styles.cardThree]}>
            <Text style={styles.whiteText}>Blue</Text>
          </View>
        </TouchableOpacity>

        <View style={[styles.card, styles.cardOne]}>
          <Text style={styles.whiteText}>Red 2</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
          <Text style={styles.whiteText}>Green 2</Text>
        </View>
      </View>
      {/* Model implementations */}
      <Modal
        visible={isModelVisible}
        animationType="slide"
        style={styles.modal}
        onRequestClose={() => {
          setModelVisible(false);
          newInput('');
          Alert.alert(
            curentInput
              ? 'Modal colsed with text!'
              : 'Modal colsed without any text!',
            curentInput,
          );
        }}
      >
        <View style={styles.modalContainter}>
          <Pressable
            onPress={() => {
              setModelVisible(false);
              newInput('');
              Alert.alert(
                curentInput
                  ? 'Modal colsed with text!'
                  : 'Modal colsed without any text!',
                curentInput,
              );
            }}
            style={({ pressed }) => [
              { backgroundColor: pressed ? 'green' : '#00ff00' },
              styles.card,
            ]}
          >
            <View>
              <Text style={styles.modalText}>Press to Close</Text>
            </View>
          </Pressable>
          <TextInput
            style={styles.input}
            value={curentInput}
            onChangeText={newInput}
            placeholder="Enter your message here"
            placeholderTextColor={'white'}
            // caretHidden
            contextMenuHidden
            selectionColor={'red'}
            inputMode="text"
            autoCorrect={false}
            // returnKeyLabel="Done"
            enterKeyHint="done"
            // keyboardType="decimal-pad"
          />
          <VList />
        </View>
      </Modal>
      <Modal
        // transparent
        visible={isVisible}
        backdropColor={'#ffae00'}
        onRequestClose={() => {
          setVisible(false);
          setTap(0);
        }}
        style={[styles.modal]}
      >
        {/* Touchable without feedback  */}
        <TouchableWithoutFeedback onPress={handleTap}>
          <View style={styles.tapView}>
            <Text style={styles.textNomal}>Tap here</Text>
            <Text style={styles.textNomal}>Total tap: {tap}</Text>
          </View>
        </TouchableWithoutFeedback>

        {/* Touchable with highlight */}
        <TouchableHighlight
          underlayColor={'#ff0000'}
          onPress={() => {
            setVisible(false);
            setTap(0);
          }}
        >
          <Text style={styles.exitText}>Exit the Modal</Text>
        </TouchableHighlight>
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
    flex: 1,
    margin: 20,
    borderRadius: 20,
    padding: 35,
    elevation: 5,
  },
  modalContainter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
  input: {
    width: 300,
    height: 50,
    backgroundColor: 'lightblue',
    fontSize: 20,
    borderWidth: 1,
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
  tapView: {
    flex: 1,
    marginTop: 50,
    marginBottom: 30,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  exitText: {
    textAlign: 'center',
    textAlignVertical: 'center',
    backgroundColor: 'grey',
    height: 50,
    fontSize: 24,
    color: '#ffffff',
    fontWeight: 700,
  },
  textNomal: {
    fontSize: 24,
    fontStyle: 'italic',
    fontWeight: 'bold',
  },
});
