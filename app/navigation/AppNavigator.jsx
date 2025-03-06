import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

// Import Screens
import HomeScreen from '../screens/HomeScreen';
import InboxScreen from '../screens/InboxScreen';
import AlumniCellScreen from '../screens/AlumniCellScreen';
import NotFoundScreen from '../screens/NotFoundScreen'; 
import CalenderScreen from '../screens/CalenderScreen';// Handles unmatched routes

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

// Drawer Navigator (Main Navigation)
function DrawerNavigator() {
  return (
    <Drawer.Navigator initialRouteName="Home" screenOptions={{ headerShown: true }}>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Calender" component={CalenderScreen} />
      <Drawer.Screen name="Inbox" component={InboxScreen} />
      <Drawer.Screen name="Alumni Cell" component={AlumniCellScreen} />
    </Drawer.Navigator>
  );
}

// Stack Navigator (Handles Unmatched Routes)
export default function AppNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Main" component={DrawerNavigator} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ gestureEnabled: false }} />
    </Stack.Navigator>
  );
}
