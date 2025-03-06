import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './navigation/AppNavigator';
import BottomTabNavigator from './navigation/BottomTabNavigator';

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer independent={true}> {/* Added independent prop */}
        <AppNavigator />
        
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
