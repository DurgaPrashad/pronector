import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useFoundersByCategory } from '../../hooks/useFoundersByCategory';
import FounderCard from '../../components/features/FounderCard';
import LoadingSpinner from '../../components/common/LoadingSpinner';
import colors from '../../styles/colors';
import typography from '../../styles/typography';

const CategoryDetailScreen = ({ route, navigation }) => {
  const { category } = route.params;
  const { founders, loading, error } = useFoundersByCategory(category.id);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Error: {error}</Text>
      </View>
    );
  }

  const renderFounderItem = ({ item }) => (
    <FounderCard
      founder={item}
      onPress={() => navigation.navigate('FounderProfile', { founder: item })}
    />
  );

  return (
    <View style={styles.container}>
      <Text style={styles.categoryName}>{category.name}</Text>
      <Text style={styles.categoryDescription}>{category.description}</Text>
      <FlatList
        data={founders}
        renderItem={renderFounderItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContent}
        ListHeaderComponent={
          <Text style={styles.foundersTitle}>Founders in this category:</Text>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 16,
  },
  categoryName: {
    ...typography.h2,
    color: colors.text,
    marginBottom: 8,
  },
  categoryDescription: {
    ...typography.body,
    color: colors.darkGray,
    marginBottom: 16,
  },
  foundersTitle: {
    ...typography.h3,
    color: colors.text,
    marginBottom: 16,
  },
  listContent: {
    paddingBottom: 16,
  },
  errorText: {
    ...typography.body,
    color: colors.error,
    textAlign: 'center',
    marginTop: 16,
  },
});

export default CategoryDetailScreen;

