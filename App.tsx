import React from 'react';

import { ScrollView, StyleSheet, View } from 'react-native';
import FlatCard from './componenet/FlatCard';
import FancyCard from './componenet/FancyCard';
import ScollCard from './componenet/ScollCard';

function App() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <FlatCard />
        <ScollCard />
        <FancyCard />
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
