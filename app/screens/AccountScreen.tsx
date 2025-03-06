import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AccountScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Account Screen</Text>
    </View>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
  text: { 
    fontSize: 20 
  },
});
