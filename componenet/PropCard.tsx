import { Button, Image, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';

type cardProps = {
  name: string;
  age: number;
  imgLink?: string;
};

export default function PropCard(props: cardProps) {
  const imageSource = props.imgLink ? { uri: props.imgLink } : undefined;
  const [isSub, setSub] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.nameCard}>
        <Text style={styles.text}>
          Name:
          <Text style={styles.name}> {props.name}</Text>
        </Text>
        <Text style={styles.text}>
          Age:
          <Text style={styles.age}> {props.age}</Text>
        </Text>
        <View style={styles.button}>
          <Button
            title={isSub ? 'unsubcribe' : 'subcribe'}
            onPress={() => setSub(isSub ? false : true)}
            color={isSub ? 'red' : 'green'}
          />
        </View>
      </View>
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
