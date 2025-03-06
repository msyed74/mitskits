// src/screens/LoginScreen.js
import React, { useEffect } from 'react';
import { View, Text, Button, Alert } from 'react-native';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

export default function LoginScreen({ navigation }) {
  // Configure Google Sign-In once when the component mounts
  useEffect(() => {
    GoogleSignin.configure({
      webClientId: 'YOUR_WEB_CLIENT_ID',
    });
  }, []);

  const signInWithGoogle = async () => {
    try {
      // Ensure the device has Google Play services (for Android)
      await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
      
      // Initiate the sign-in flow
      const { idToken } = await GoogleSignin.signIn();

      if (!idToken) {
        throw new Error("Google sign-in failed: No ID token returned");
      }
      
      // Create a Firebase credential with the Google ID token
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      
      // Sign in the user with the credential
      await auth().signInWithCredential(googleCredential);
      
      // Navigate to the Home screen after successful sign-in
      navigation.navigate('Home');
    } catch (error) {
      console.error('Google sign-in error:', error);
      Alert.alert(
        'Sign In Error',
        error.message || 'An error occurred during Google sign-in.'
      );
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Login Screen</Text>
      <Button title="Sign In with Google" onPress={signInWithGoogle} />
    </View>
  );
}
