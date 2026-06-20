import {
  ActivityIndicator,
  Alert,
  Button,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, { useState } from 'react';

type cardProps = {
  name: string;
  age: number;
  imgLink?: string;
};

export default function PropCard(props: cardProps) {
  const imageSource = props.imgLink ? { uri: props.imgLink } : undefined;
  const [isSub, setSub] = useState(false);
  const [isAni, setAni] = useState(false);
  function showAnimation() {
    setAni(true);
    setTimeout(() => {
      setAni(false);
      Alert.alert(
        `Want to ${isSub ? 'Unsubcribed' : 'Subcribed'}?`,
        'Press ok to accept, and cancel to undo the action...!!!',
        [
          { text: 'Cancel' },
          {
            text: 'Ok',
            onPress: () => setSub(isSub ? false : true),
          },
        ],
      );
    }, 3000);
  }
  return (
    <View style={styles.container}>
      <View style={styles.nameCard}>
        <Text style={styles.text}>
          Name:
          <Text style={styles.name}> {props.name}</Text>
        </Text>
        {isSub ? (
          <Text style={styles.text}>
            Age:
            <Text style={styles.age}> {props.age}</Text>
          </Text>
        ) : null}
        <View style={styles.button}>
          <Button
            title={isSub ? 'unsubcribe' : 'subcribe'}
            disabled={isAni}
            onPress={() => {
              showAnimation();
            }}
            color={isSub ? 'red' : 'green'}
          />
        </View>
      </View>
      <ActivityIndicator
        animating={isAni}
        // hidesWhenStopped={false}
        color={'#00ff00'}
        size={'large'}
        /// <reference path="" />
      />
      <View>
        {imageSource ? (
          <Image source={imageSource} style={styles.image} />
        ) : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'skyblue',
    padding: 10,
    borderWidth: 0.5,
    borderColor: '#000000',
  },
  nameCard: {
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  name: {
    color: '#ff00ff',
  },
  age: {
    color: '#0000ff',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginTop: 10,
    backgroundColor: 'white',
  },
  button: {
    borderRadius: 15,
    backgroundColor: 'white',
  },
});
