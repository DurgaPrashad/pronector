import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import colors from '../../styles/colors';

const CategoryPill = ({ category, onPress, isSelected }) => {
  return (
    <TouchableOpacity
      style={[styles.pill, isSelected && styles.selectedPill]}
      onPress={() => onPress(category)}
    >
      <Text style={[styles.text, isSelected && styles.selectedText]}>
        {category.name}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  pill: {
    backgroundColor: colors.lightGray,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    marginRight: 8,
    marginBottom: 8,
  },
  selectedPill: {
    backgroundColor: colors.primary,
  },
  text: {
    color: colors.darkGray,
    fontSize: 14,
  },
  selectedText: {
    color: colors.white,
  },
});

export default CategoryPill;
