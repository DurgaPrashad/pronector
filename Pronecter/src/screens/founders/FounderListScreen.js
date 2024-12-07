import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import FounderCard from '../../components/common/FounderCard';
import SearchBar from '../../components/common/SearchBar';
import { useFounders } from '../../hooks/useFounders';

export default function FounderListScreen({ navigation }) {
  const [searchQuery, setSearchQuery] = useState('');
  const { founders, loading, error } = useFounders(searchQuery);

  const renderFounder = ({ item }) => (
    <FounderCard
      founder={item}
      onPress={() => navigation.navigate('FounderProfile', { founderId: item.id })}
    />
  );

  return (
    <View style={styles.container}>
      <SearchBar
        placeholder="Search founders..."
        onChangeText={setSearchQuery}
        value={searchQuery}
      />
      <FlatList
        data={founders}
        renderItem={renderFounder}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  listContent: {
    padding: 16,
  },
});

