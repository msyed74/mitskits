import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';


import HomeScreen from '../screens/HomeScreen';
import InboxScreen from '../screens/InboxScreen';
import AlumniCellScreen from '../screens/AlumniCellScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import CreatePostScreen from '../screens/CreatePostScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

// Drawer Navigator (Main Navigation)
function DrawerNavigator() {
  return (
    <Drawer.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Inbox" component={InboxScreen} />
      <Drawer.Screen name="Alumni Cell" component={AlumniCellScreen} />
      <Drawer.Screen name="Create Post" component={CreatePostScreen} /> 
          
    </Drawer.Navigator>
  );
}

// Stack Navigator (Handles all routes)
export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Main" component={DrawerNavigator} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ gestureEnabled: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
