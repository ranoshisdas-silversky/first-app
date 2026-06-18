/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import FlatCard from './componenet/FlatCard';
import FancyCard from './componenet/FancyCard';
import ScollCard from './componenet/ScollCard';
import PropCard from './componenet/PropCard';

function App() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <PropCard
          name="Ranoshis Das"
          age={22}
          imgLink="https://avatars.githubusercontent.com/u/127428253?v=4"
        />
        <FlatCard />

        <ImageBackground
          source={require('./img/atal-bridge.png')}
          style={{ width: '100%' }}
        >
          <FlatCard />
        </ImageBackground>

        <ScollCard />
        {/* <Image
          source={{ uri: 'ic_launcher' }}
          style={{
            width: 40,
            height: 40,
            // backgroundColor: 'skyblue',
            alignSelf: 'center',
          }}
        /> */}
        <FancyCard />

        <Image
          source={{ uri: 'https://reactjs.org/logo-og.png' }}
          style={{
            width: '90%',
            height: 450,
            marginHorizontal: '5%',
            borderRadius: 10,
            marginVertical: 12,
          }}
        />
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  text: {
    fontSize: 24,
  },
});
export default App;
