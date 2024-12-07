import React from 'react';
import { Image, StyleSheet } from 'react-native';

export default function Avatar({ source, size = 50, style }) {
  return (
    <Image
      source={typeof source === 'string' ? { uri: source } : source}
      style={[
        styles.avatar,
        { width: size, height: size, borderRadius: size / 2 },
        style,
      ]}
    />
  );
}

const styles = StyleSheet.create({
  avatar: {
    resizeMode: 'cover',
  },
});

