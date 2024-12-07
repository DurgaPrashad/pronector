import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import SearchBar from '../../components/common/SearchBar';
import FounderList from '../../components/features/FounderList';
import { useFounders } from '../../hooks/useFounders';
import colors from '../../styles/colors';

const FounderSearchScreen = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const { founders, loading, error } = useFounders(searchQuery);

  const handleFounderPress = (founder) => {
    navigation.navigate('FounderProfile', { founder });
  };

  return (
    <View style={styles.container}>
      <SearchBar
        placeholder="Search founders by name, company, or industry..."
        onChangeText={setSearchQuery}
        value={searchQuery}
      />
      <FounderList founders={founders} onFounderPress={handleFounderPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    padding: 16,
  },
});

export default FounderSearchScreen;

