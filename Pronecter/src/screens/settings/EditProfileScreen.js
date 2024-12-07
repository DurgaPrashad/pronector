import React, { useState, useContext } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView } from 'react-native';
import { AuthContext } from '../../context/AuthContext';
import Button from '../../components/common/Button';
import colors from '../../styles/colors';
import typography from '../../styles/typography';

const EditProfileScreen = ({ navigation }) => {
  const { user, updateUserProfile } = useContext(AuthContext);
  const [name, setName] = useState(user.name);
  const [bio, setBio] = useState(user.bio || '');
  const [company, setCompany] = useState(user.company || '');
  const [industry, setIndustry] = useState(user.industry || '');

  const handleSave = async () => {
    try {
      await updateUserProfile(user.id, { name, bio, company, industry });
      navigation.goBack();
    } catch (error) {
      console.error('Error updating profile:', error);
      // Handle error (e.g., show an error message to the user)
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.label}>Name</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Your name"
      />
      <Text style={styles.label}>Bio</Text>
      <TextInput
        style={[styles.input, styles.textArea]}
        value={bio}
        onChangeText={setBio}
        placeholder="Tell us about yourself"
        multiline
        numberOfLines={4}
      />
      <Text style={styles.label}>Company</Text>
      <TextInput
        style={styles.input}
        value={company}
        onChangeText={setCompany}
        placeholder="Your company"
      />
      <Text style={styles.label}>Industry</Text>
      <TextInput
        style={styles.input}
        value={industry}
        onChangeText={setIndustry}
        placeholder="Your industry"
      />
      <Button title="Save Changes" onPress={handleSave} style={styles.saveButton} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: colors.background,
  },
  label: {
    ...typography.body,
    color: colors.text,
    marginBottom: 8,
  },
  input: {
    height: 50,
    borderColor: colors.gray,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 16,
    marginBottom: 16,
    fontSize: 16,
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  saveButton: {
    marginTop: 16,
  },
});

export default EditProfileScreen;

