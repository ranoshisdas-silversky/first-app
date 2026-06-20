/* eslint-disable react-native/no-inline-styles */
import React, { useCallback, useState } from 'react';

import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  View,
  RefreshControl,
  StatusBar,
} from 'react-native';
import FlatCard from './componenet/FlatCard';
import FancyCard from './componenet/FancyCard';
import ScollCard from './componenet/ScollCard';
import PropCard from './componenet/PropCard';
import ListCard from './componenet/ListCard';

function App() {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 10000);
  }, []);
  return (
    <View style={styles.container}>
      <StatusBar
        hidden={false}
        barStyle={'dark-content'}
        backgroundColor={'#64ff35'}
      />
      <ScrollView
        style={{
          // backgroundColor: '#000',
          paddingTop: 40,
        }}
        contentContainerStyle={{ backgroundColor: '#fff', paddingBottom: 40 }}
        // bounces={false}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            colors={['red', 'blue', 'yellow', 'green']}
            title="Loading..."
            titleColor={'#ffffff'}
            tintColor={'#fff'}
          />
        }
      >
        <ListCard />
        <View>
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
    </View>
  );
}
const styles = StyleSheet.create({
  container: {},

  text: {
    fontSize: 24,
  },
});
export default App;
