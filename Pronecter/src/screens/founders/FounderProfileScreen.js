import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Avatar from '../../components/common/Avatar';
import Button from '../../components/common/Button';
import colors from '../../styles/colors';
import typography from '../../styles/typography';

const FounderProfileScreen = ({ route, navigation }) => {
  const { founder } = route.params;

  const handleConnect = () => {
    // Implement connection logic
    console.log('Connecting with founder:', founder.name);
  };

  const handleMessage = () => {
    // Navigate to messaging screen
    navigation.navigate('Message', { recipient: founder });
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Avatar source={{ uri: founder.avatar }} size={120} />
        <Text style={styles.name}>{founder.name}</Text>
        <Text style={styles.company}>{founder.company}</Text>
        <Text style={styles.industry}>{founder.industry}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>About</Text>
        <Text style={styles.bio}>{founder.bio}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Experience</Text>
        {founder.experience.map((exp, index) => (
          <View key={index} style={styles.experienceItem}>
            <Text style={styles.experienceRole}>{exp.role}</Text>
            <Text style={styles.experienceCompany}>{exp.company}</Text>
            <Text style={styles.experienceDuration}>{exp.duration}</Text>
          </View>
        ))}
      </View>

      <View style={styles.actionButtons}>
        <Button title="Connect" onPress={handleConnect} style={styles.connectButton} />
        <Button title="Message" onPress={handleMessage} style={styles.messageButton} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    alignItems: 'center',
    padding: 24,
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGray,
  },
  name: {
    ...typography.h2,
    color: colors.text,
    marginTop: 16,
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
  section: {
    padding: 24,
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGray,
  },
  sectionTitle: {
    ...typography.h3,
    color: colors.text,
    marginBottom: 12,
  },
  bio: {
    ...typography.body,
    color: colors.darkGray,
  },
  experienceItem: {
    marginBottom: 12,
  },
  experienceRole: {
    ...typography.body,
    fontWeight: 'bold',
    color: colors.text,
  },
  experienceCompany: {
    ...typography.body,
    color: colors.darkGray,
  },
  experienceDuration: {
    ...typography.caption,
    color: colors.gray,
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 24,
  },
  connectButton: {
    flex: 1,
    marginRight: 8,
  },
  messageButton: {
    flex: 1,
    marginLeft: 8,
    backgroundColor: colors.secondary,
  },
});

export default FounderProfileScreen;

