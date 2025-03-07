import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';
import AccountScreen from './screens/AccountScreen';
import PrivacyScreen from './screens/PrivacyScreen';
import HelpScreen from './screens/HelpScreen';
import AppNavigator from './navigation/AppNavigator';


const Stack = createNativeStackNavigator();


const StackNavigator =( ) =>{
   return(
    <Stack.Navigator initialRouteName='Home'>
     
      <Stack.Screen name="Settings" 
      component={SettingsScreen} 
      options={{headerShown: false}}
       />
      <Stack.Screen
       name="Account"
        component={AccountScreen}
        options={{headerShown: false}}
        />
      <Stack.Screen name="Privacy" component={PrivacyScreen} />
      <Stack.Screen
       name="Help"
        component={HelpScreen}
        options={{headerShown: false}}
        />
    </Stack.Navigator>
   )
}

const App = () => {
  return (
    <NavigationContainer indepent={true}>
      <AppNavigator/>
   </NavigationContainer>
  );
}

export default  App ;