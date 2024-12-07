import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import colors from '../../styles/colors';

const LoadingSpinner = ({ size = 'large', color = colors.primary }) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={size} color={color} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LoadingSpinner;

