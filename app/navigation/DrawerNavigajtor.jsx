import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomTabNavigator from './BottomTabNavigator';
import InboxScreen from '../screens/InboxScreen';
import ProfileScreen from '../screens/ProfileScreen';
import NotificationScreen from '../screens/NotificationScreen';
import SearchScreen from '../screens/SearchScreen';
import AlumniCellScreen from '../screens/AlumniCellScreen';
import NotFoundScreen from '../screens/NotFoundScreen';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }}>
      {/* Bottom Tabs as Main Section */}
      <Drawer.Screen name="Home" component={BottomTabNavigator} />
      
      {/* Separate Screens */}
      <Drawer.Screen name="Search" component={SearchScreen} />
      <Drawer.Screen name="Notifications" component={NotificationScreen} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
      <Drawer.Screen name="Inbox" component={InboxScreen} />
      <Drawer.Screen name="Alumni Cell" component={AlumniCellScreen} />
    </Drawer.Navigator>
  );
}
