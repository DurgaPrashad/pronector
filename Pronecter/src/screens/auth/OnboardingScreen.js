import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { AuthContext } from '../../context/AuthContext';
import Button from '../../components/common/Button';
import CategorySelector from '../../components/features/CategorySelector';
import colors from '../../styles/colors';
import typography from '../../styles/typography';
import { CATEGORIES } from '../../constants/categories';

const OnboardingScreen = ({ navigation }) => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const { user, updateUserProfile } = useContext(AuthContext);

  const handleCategoryToggle = (categoryId) => {
    setSelectedCategories(prev => 
      prev.includes(categoryId)
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  const handleFinishOnboarding = async () => {
    await updateUserProfile(user.id, { categories: selectedCategories });
    navigation.replace('Main');
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Welcome to EliteConnect</Text>
      <Text style={styles.subtitle}>Select your areas of interest:</Text>
      <CategorySelector
        categories={CATEGORIES}
        selectedCategories={selectedCategories}
        onToggle={handleCategoryToggle}
      />
      <Button
        title="Finish"
        onPress={handleFinishOnboarding}
        style={styles.finishButton}
        disabled={selectedCategories.length === 0}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: colors.background,
  },
  title: {
    ...typography.h2,
    color: colors.text,
    marginBottom: 16,
    textAlign: 'center',
  },
  subtitle: {
    ...typography.body,
    color: colors.darkGray,
    marginBottom: 24,
    textAlign: 'center',
  },
  finishButton: {
    marginTop: 32,
  },
});

export default OnboardingScreen;

