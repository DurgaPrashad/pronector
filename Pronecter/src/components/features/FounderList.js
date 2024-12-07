import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import FounderCard from '../common/FounderCard';

const FounderList = ({ founders, onFounderPress }) => {
  return (
    <FlatList
      data={founders}
      renderItem={({ item }) => (
        <FounderCard founder={item} onPress={() => onFounderPress(item)} />
      )}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={styles.listContent}
    />
  );
};

const styles = StyleSheet.create({
  listContent: {
    paddingHorizontal: 16,
  },
});

export default FounderList;
