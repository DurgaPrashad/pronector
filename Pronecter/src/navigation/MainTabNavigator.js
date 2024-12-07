import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import CategoryListScreen from '../screens/categories/CategoryListScreen';
import CategoryDetailScreen from '../screens/categories/CategoryDetailScreen';
import FounderListScreen from '../screens/founders/FounderListScreen';
import FounderProfileScreen from '../screens/founders/FounderProfileScreen';
import MentorshipScreen from '../screens/premium/MentorshipScreen';
import PlansScreen from '../screens/subscription/PlansScreen';
import ConversationListScreen from '../screens/messaging/ConversationListScreen';
import MessageScreen from '../screens/messaging/MessageScreen';
import SettingsScreen from '../screens/settings/SettingsScreen';
import EditProfileScreen from '../screens/settings/EditProfileScreen';
import colors from '../styles/colors';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const CategoryStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Categories" component={CategoryListScreen} />
    <Stack.Screen name="CategoryDetail" component={CategoryDetailScreen} />
    <Stack.Screen name="FounderProfile" component={FounderProfileScreen} />
  </Stack.Navigator>
);

const FounderStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Founders" component={FounderListScreen} />
    <Stack.Screen name="FounderProfile" component={FounderProfileScreen} />
  </Stack.Navigator>
);

const MessageStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Conversations" component={ConversationListScreen} />
    <Stack.Screen name="Message" component={MessageScreen} />
  </Stack.Navigator>
);

const SettingsStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Settings" component={SettingsScreen} />
    <Stack.Screen name="EditProfile" component={EditProfileScreen} />
  </Stack.Navigator>
);

const MainTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'CategoriesTab') {
            iconName = focused ? 'grid' : 'grid-outline';
          } else if (route.name === 'FoundersTab') {
            iconName = focused ? 'people' : 'people-outline';
          } else if (route.name === 'Mentorship') {
            iconName = focused ? 'school' : 'school-outline';
          } else if (route.name === 'MessagesTab') {
            iconName = focused ? 'chatbubbles' : 'chatbubbles-outline';
          } else if (route.name === 'Plans') {
            iconName = focused ? 'card' : 'card-outline';
          } else if (route.name === 'SettingsTab') {
            iconName = focused ? 'settings' : 'settings-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.gray,
      })}
    >
      <Tab.Screen name="CategoriesTab" component={CategoryStack} options={{ title: 'Categories' }} />
      <Tab.Screen name="FoundersTab" component={FounderStack} options={{ title: 'Founders' }} />
      <Tab.Screen name="Mentorship" component={MentorshipScreen} />
      <Tab.Screen name="MessagesTab" component={MessageStack} options={{ title: 'Messages' }} />
      <Tab.Screen name="Plans" component={PlansScreen} />
      <Tab.Screen name="SettingsTab" component={SettingsStack} options={{ title: 'Settings' }} />
    </Tab.Navigator>
  );
};

export default MainTabNavigator;

