import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import MentorshipCard from '../../components/premium/MentorshipCard';
import colors from '../../styles/colors';

const mentors = [
  { id: '1', name: 'John Doe', expertise: 'Tech Startups', company: 'TechVentures Inc.', avatar: 'https://example.com/john.jpg' },
  { id: '2', name: 'Jane Smith', expertise: 'Marketing', company: 'Growth Hackers', avatar: 'https://example.com/jane.jpg' },
  { id: '3', name: 'Mike Johnson', expertise: 'Finance', company: 'VC Partners', avatar: 'https://example.com/mike.jpg' },
];

const MentorshipScreen = ({ navigation }) => {
  const handleMentorPress = (mentor) => {
    // Navigate to mentor detail screen or open chat
    console.log('Mentor pressed:', mentor);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Premium Mentorship</Text>
      <FlatList
        data={mentors}
        renderItem={({ item }) => (
          <MentorshipCard mentor={item} onPress={() => handleMentorPress(item)} />
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

export default MentorshipScreen;

