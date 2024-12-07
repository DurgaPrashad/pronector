import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import colors from '../../styles/colors';

const EventCard = ({ event, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <View style={styles.dateContainer}>
        <Text style={styles.date}>{event.date}</Text>
        <Text style={styles.month}>{event.month}</Text>
      </View>
      <View style
={styles.info}>
        <Text style={styles.title}>{event.title}</Text>
        <View style={styles.detailsContainer}>
          <Ionicons name="time-outline" size={16} color={colors.darkGray} />
          <Text style={styles.details}>{event.time}</Text>
          <Ionicons name="location-outline" size={16} color={colors.darkGray} />
          <Text style={styles.details}>{event.location}</Text>
        </View>
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
  dateContainer: {
    backgroundColor: colors.primary,
    borderRadius: 8,
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
  },
  date: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.white,
  },
  month: {
    fontSize: 14,
    color: colors.white,
  },
  info: {
    marginLeft: 16,
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.text,
  },
  detailsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  details: {
    fontSize: 14,
    color: colors.darkGray,
    marginLeft: 4,
    marginRight: 12,
  },
});

export default EventCard;
