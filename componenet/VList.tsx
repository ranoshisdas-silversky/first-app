import { View, VirtualizedList, StyleSheet, Text } from 'react-native';

type ItemData = {
  id: string;
  title: string;
};

const getItem = (_data: unknown, index: number): ItemData => ({
  id: Math.random().toString(12).substring(0),
  title: `Item ${index + 1}`,
});

const getItemCount = (_data: unknown) => 50;

type ItemProps = {
  title: string;
};

const Item = ({ title }: ItemProps) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const VList = () => (
  <View style={styles.container}>
    <VirtualizedList
      //   maxToRenderPerBatch={3}
      renderItem={({ item }) => <Item title={item.title} />}
      keyExtractor={item => item.id}
      getItemCount={getItemCount}
      getItem={getItem}
      ListHeaderComponent={
        <Text style={styles.headerText}>Vartualized List Start</Text>
      }
      ListFooterComponent={
        <Text style={styles.headerText}>Vartualized List End</Text>
      }
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    marginTop: 10,
    // backgroundColor: '#f00000',
  },
  headerText: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: '600',
  },
  item: {
    backgroundColor: '#f9c2ff',
    height: 150,
    justifyContent: 'center',
    marginVertical: 8,
    marginHorizontal: 16,
    padding: 20,
  },
  title: {
    fontSize: 32,
  },
});

export default VList;
