import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Avatar from './Avatar';
import colors from '../../styles/colors';

const FounderCard = ({ founder, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Avatar source={{ uri: founder.avatar }} size={60} />
      <View style={styles.info}>
        <Text style={styles.name}>{founder.name}</Text>
        <Text style={styles.company}>{founder.company}</Text>
        <Text style={styles.industry}>{founder.industry}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  info: {
    marginLeft: 12,
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.text,
  },
  company: {
    fontSize: 14,
    color: colors.darkGray,
    marginTop: 2,
  },
  industry: {
    fontSize: 12,
    color: colors.gray,
    marginTop: 2,
  },
});

export default FounderCard;
