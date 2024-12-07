import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Avatar from '../common/Avatar';
import colors from '../../styles/colors';
import typography from '../../styles/typography';

const FounderCard = ({ founder, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Avatar source={{ uri: founder.avatar }} size={60} />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{founder.name}</Text>
        <Text style={styles.company}>{founder.company}</Text>
        <Text style={styles.industry}>{founder.industry}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  infoContainer: {
    marginLeft: 16,
    flex: 1,
  },
  name: {
    ...typography.h3,
    color: colors.text,
  },
  company: {
    ...typography.body,
    color: colors.darkGray,
    marginTop: 4,
  },
  industry: {
    ...typography.caption,
    color: colors.gray,
    marginTop: 4,
  },
});

export default FounderCard;

