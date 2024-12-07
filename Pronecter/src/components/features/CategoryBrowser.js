import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import CategoryPill from '../common/CategoryPill';

const CategoryBrowser = ({ categories, selectedCategories, onSelectCategory }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        renderItem={({ item }) => (
          <CategoryPill
            category={item}
            onPress={onSelectCategory}
            isSelected={selectedCategories.includes(item.id)}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
});

export default CategoryBrowser;
