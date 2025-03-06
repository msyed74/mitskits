// DrawerNavigator.tsx
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

import BottomTabNavigator from './BottomTabNavigator';
import DayEventsScreen from '../screens/DayEventsScreen';
import InboxScreen from '../screens/InboxScreen';
import ProfileScreen from '../screens/ProfileScreen';
import NotificationScreen from '../screens/NotificationScreen';
import SearchScreen from '../screens/SearchScreen';
import AlumniCellScreen from '../screens/AlumniCellScreen';
import CreatePostScreen from '../screens/CreatePostScreen';
import SettingsScreen from '../screens/SettingsScreen';
import EditProfileScreen from '../screens/EditProfileScreen';
import HelpScreen from '../screens/HelpScreen';

import CustomDrawerContent from '../components/CustomDrawerContent';

// HeaderRightButton for navigation (unchanged)
function HeaderRightButton() {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Create Post')}
      style={{ marginRight: 15 }}
    >
      <Ionicons name="add-circle-outline" size={28} color="black" />
    </TouchableOpacity>
  );
}

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: true,
        headerTitle: () => (
          <Image
            source={require('../../assets/images/favicon.png')}
            style={{ width: 120, height: 40, resizeMode: 'contain' }}
          />
        ),
        headerTitleAlign: 'center',
        headerRight: () => <HeaderRightButton />,
      }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="Home" component={BottomTabNavigator} />
      <Drawer.Screen name="Search" component={SearchScreen} />
      <Drawer.Screen name="Notifications" component={NotificationScreen} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
      <Drawer.Screen name="Inbox" component={InboxScreen} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
      <Drawer.Screen name="Alumni Cell" component={AlumniCellScreen} />
      <Drawer.Screen name="Create Post" component={CreatePostScreen} />
      <Drawer.Screen name="Edit Profile" component={EditProfileScreen} />
      <Drawer.Screen name="Help" component={HelpScreen} />
      {/* Hidden DayEvents screen */}
      <Drawer.Screen name='DayEvents' component={DayEventsScreen} options={{ drawerItemStyle: { height: 0 } }} />
    </Drawer.Navigator>
  );
}
