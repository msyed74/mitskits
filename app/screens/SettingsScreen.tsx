import React, { useState } from 'react';
import { 
  View, 
  Text, 
  Switch, 
  TouchableOpacity, 
  StyleSheet, 
  Alert 
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function SettingsScreen() {
  const navigation = useNavigation();
  const [darkMode, setDarkMode] = useState(false);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
  };

  const toggleNotifications = () => {
    setNotificationsEnabled(prev => !prev);
  };

  const handleLogout = () => {
    Alert.alert(
      'Logout',
      'Are you sure you want to log out?',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Log Out', onPress: () => console.log('User logged out') },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Settings</Text>
      
      <View style={styles.option}>
        <Text style={styles.optionText}>Dark Mode</Text>
        <Switch value={darkMode} onValueChange={toggleDarkMode} />
      </View>
      
      <View style={styles.option}>
        <Text style={styles.optionText}>Notifications</Text>
        <Switch value={notificationsEnabled} onValueChange={toggleNotifications} />
      </View>
      
      <TouchableOpacity 
        style={styles.option} 
        onPress={() => navigation.navigate('Account')}
      >
        <Text style={styles.optionText}>Account</Text>
        <Ionicons name="chevron-forward" size={20} color="#555" />
      </TouchableOpacity>
      
      <TouchableOpacity 
        style={styles.option} 
        onPress={() => navigation.navigate('Privacy')}
      >
        <Text style={styles.optionText}>Privacy</Text>
        <Ionicons name="chevron-forward" size={20} color="#555" />
      </TouchableOpacity>
      
      <TouchableOpacity 
        style={styles.option} 
        onPress={() => navigation.navigate('Help')}
      >
        <Text style={styles.optionText}>Help & Support</Text>
        <Ionicons name="chevron-forward" size={20} color="#555" />
      </TouchableOpacity>
      
      <TouchableOpacity 
        style={[styles.option, styles.logoutOption]} 
        onPress={handleLogout}
      >
        <Text style={[styles.optionText, { color: 'red' }]}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 20, 
    backgroundColor: '#fff' 
  },
  header: { 
    fontSize: 24, 
    fontWeight: 'bold', 
    marginBottom: 20 
  },
  option: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  optionText: { 
    fontSize: 16, 
    color: '#333' 
  },
  logoutOption: { 
    marginTop: 30 
  },
});
