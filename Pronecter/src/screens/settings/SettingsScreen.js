import React, { useContext } from 'react';
import { View, Text, StyleSheet, Switch, ScrollView } from 'react-native';
import { AuthContext } from '../../context/AuthContext';
import Button from '../../components/common/Button';
import colors from '../../styles/colors';
import typography from '../../styles/typography';

const SettingsScreen = ({ navigation }) => {
  const { logout } = useContext(AuthContext);
  const [isPushNotificationsEnabled, setIsPushNotificationsEnabled] = React.useState(true);
  const [isEmailNotificationsEnabled, setIsEmailNotificationsEnabled] = React.useState(true);

  const togglePushNotifications = () => setIsPushNotificationsEnabled(previousState => !previousState);
  const toggleEmailNotifications = () => setIsEmailNotificationsEnabled(previousState => !previousState);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Notifications</Text>
        <View style={styles.settingItem}>
          <Text style={styles.settingLabel}>Push Notifications</Text>
          <Switch
            trackColor={{ false: colors.gray, true: colors.primary }}
            thumbColor={isPushNotificationsEnabled ? colors.white : colors.lightGray}
            onValueChange={togglePushNotifications}
            value={isPushNotificationsEnabled}
          />
        </View>
        <View style={styles.settingItem}>
          <Text style={styles.settingLabel}>Email Notifications</Text>
          <Switch
            trackColor={{ false: colors.gray, true: colors.primary }}
            thumbColor={isEmailNotificationsEnabled ? colors.white : colors.lightGray}
            onValueChange={toggleEmailNotifications}
            value={isEmailNotificationsEnabled}
          />
        </View>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Account</Text>
        <Button
          title="Edit Profile"
          onPress={() => navigation.navigate('EditProfile')}
          style={styles.button}
        />
        <Button
          title="Change Password"
          onPress={() => navigation.navigate('ChangePassword')}
          style={styles.button}
        />
        <Button
          title="Privacy Policy"
          onPress={() => navigation.navigate('PrivacyPolicy')}
          style={styles.button}
        />
        <Button
          title="Terms of Service"
          onPress={() => navigation.navigate('TermsOfService')}
          style={styles.button}
        />
      </View>
      <Button
        title="Log Out"
        onPress={logout}
        style={[styles.button, styles.logoutButton]}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  section: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGray,
  },
  sectionTitle: {
    ...typography.h3,
    color: colors.text,
    marginBottom: 16,
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  settingLabel: {
    ...typography.body,
    color: colors.text,
  },
  button: {
    marginBottom: 16,
  },
  logoutButton: {
    backgroundColor: colors.error,
    margin: 16,
  },
});

export default SettingsScreen;

