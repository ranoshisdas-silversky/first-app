import { FlatList, SectionList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import PropCard from './PropCard';

type cardProps = {
  name: string;
  age: number;
  imgLink?: string;
};
// flatList and sectionList used
export default function ListCard() {
  const data: cardProps[] = [
    {
      name: 'John',
      age: 20,
    },
    {
      name: 'Rano',
      age: 22,
    },
    {
      name: 'Bob',
      age: 30,
    },
  ];
  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>ListCard</Text>

      <View style={styles.flatList}>
        <FlatList
          data={data}
          keyExtractor={item => item.name}
          renderItem={({ item }) => (
            <PropCard name={item.name} age={item.age} />
          )}
        />
      </View>
      <View style={styles.sectionList}>
        <SectionList
          sections={[
            {
              title: 'name',
              color: '#ED7839',
              data: data.map(i => i.name),
            },
            {
              title: 'age',
              color: '#3cece9',
              data: data.map(i => i.age.toString()),
            },
          ]}
          keyExtractor={(item, index) => `${item}-${index}`}
          renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
          renderSectionHeader={({ section }) => (
            <Text
              style={[styles.sectionHeader, { backgroundColor: section.color }]}
            >
              {section.title}
            </Text>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    width: '100%',
    height: 300,
  },
  headingText: {
    flex: 0,
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 10,
    paddingTop: 30,
    backgroundColor: '#b9b9b9a5',
  },
  flatList: {
    flex: 1,
    // height: 50,
  },
  sectionList: {
    flex: 1,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingHorizontal: 10,
    // backgroundColor: '#b9b9b9a5',
  },
  item: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
});
