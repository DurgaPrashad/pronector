import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Avatar from '../common/Avatar';
import colors from '../../styles/colors';

const MentorshipCard = ({ mentor, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Avatar source={{ uri: mentor.avatar }} size={70} />
      <View style={styles.info}>
        <Text style={styles.name}>{mentor.name}</Text>
        <Text style={styles.expertise}>{mentor.expertise}</Text>
        <Text style={styles.company}>{mentor.company}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  info: {
    marginLeft: 16,
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.text,
  },
  expertise: {
    fontSize: 14,
    color: colors.primary,
    marginTop: 4,
  },
  company: {
    fontSize: 14,
    color: colors.darkGray,
    marginTop: 4,
  },
});

export default MentorshipCard;
