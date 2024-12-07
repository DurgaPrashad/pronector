import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import EventCard from '../../components/premium/EventCard';
import colors from '../../styles/colors';

const events = [
  { id: '1', title: 'Tech Founders Meetup', date: '15', month: 'JUN', time: '18:00', location: 'San Francisco' },
  { id: '2', title: 'Venture Capital Panel', date: '22', month: 'JUN', time: '14:00', location: 'New York' },
  { id: '3', title: 'Startup Pitch Night', date: '30', month: 'JUN', time: '19:00', location: 'London' },
];

const ExclusiveEventsScreen = ({ navigation }) => {
  const handleEventPress = (event) => {
    // Navigate to event detail screen
    console.log('Event pressed:', event);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Exclusive Events</Text>
      <FlatList
        data={events}
        renderItem={({ item }) => (
          <EventCard event={item} onPress={() => handleEventPress(item)} />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: colors.text,
  },
});

export default ExclusiveEventsScreen;

