import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import colors from '../../styles/colors';
import typography from '../../styles/typography';

const CategorySelector = ({ categories, selectedCategories, onToggle }) => {
  return (
    <View style={styles.container}>
      {categories.map(category => (
        <TouchableOpacity
          key={category.id}
          style={[
            styles.category,
            selectedCategories.includes(category.id) && styles.selectedCategory
          ]}
          onPress={() => onToggle(category.id)}
        >
          <Text style={[
            styles.categoryText,
            selectedCategories.includes(category.id) && styles.selectedCategoryText
          ]}>
            {category.name}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  category: {
    backgroundColor: colors.lightGray,
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 16,
    margin: 6,
  },
  selectedCategory: {
    backgroundColor: colors.primary,
  },
  categoryText: {
    ...typography.body,
    color: colors.text,
  },
  selectedCategoryText: {
    color: colors.white,
  },
});

export default CategorySelector;

