import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function ProfileScreen() {
  const navigation = useNavigation();

  // Dummy user data; replace with actual data from your state/API.
  const user = {
    avatar: 'https://example.com/avatar.png', // Replace with your avatar URL
    name: 'John Doe',
    email: 'johndoe@example.com',
    bio: "I'm a passionate developer and active club member who loves participating in events and workshops.",
    club: {
      name: 'Tech Club',
      description: 'A community for tech enthusiasts focused on learning and networking.',
    },
    events: [
      {
        id: 1,
        title: 'React Native Workshop',
        date: '2025-03-15',
      },
      {
        id: 2,
        title: 'Hackathon 2025',
        date: '2025-04-20',
      },
    ],
  };

  // Handler functions for navigation or actions.
  const handleEditProfile = () => {
    navigation.navigate('EditProfile');
  };

  const handleSettings = () => {
    navigation.navigate('Settings');
  };

  const handleMoreOptions = () => {
    navigation.navigate('MoreOptions');
  };

  const handleLogout = () => {
    // Add logout logic here.
    console.log('User logged out');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Profile Header */}
      <View style={styles.profileHeader}>
        <Image source={{ uri: user.avatar }} style={styles.avatar} />
        <Text style={styles.username}>{user.name}</Text>
        <Text style={styles.email}>{user.email}</Text>
        <TouchableOpacity style={styles.editButton} onPress={handleEditProfile}>
          <Ionicons name="create-outline" size={20} color="#fff" />
          <Text style={styles.editButtonText}>Edit Profile</Text>
        </TouchableOpacity>
      </View>

      {/* Bio Section */}
      {user.bio ? (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Bio</Text>
          <Text style={styles.sectionContent}>{user.bio}</Text>
        </View>
      ) : null}

      {/* Club Details Section */}
      {user.club ? (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Club Details</Text>
          <Text style={styles.sectionContent}>
            <Text style={styles.bold}>Club Name: </Text>
            {user.club.name}
          </Text>
          <Text style={styles.sectionContent}>
            <Text style={styles.bold}>Description: </Text>
            {user.club.description}
          </Text>
        </View>
      ) : null}

      {/* Events Participated Section */}
      {user.events && user.events.length > 0 ? (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Events Participated</Text>
          {user.events.map((event) => (
            <View key={event.id} style={styles.eventItem}>
              <Text style={styles.eventTitle}>{event.title}</Text>
              <Text style={styles.eventDate}>{event.date}</Text>
            </View>
          ))}
        </View>
      ) : null}

      {/* Options List */}
      <View style={styles.optionsContainer}>
        <TouchableOpacity style={styles.optionRow} onPress={handleSettings}>
          <Ionicons
            name="settings-outline"
            size={24}
            color="#555"
            style={styles.optionIcon}
          />
          <Text style={styles.optionText}>Settings</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionRow} onPress={handleMoreOptions}>
          <Ionicons
            name="ellipsis-horizontal-outline"
            size={24}
            color="#555"
            style={styles.optionIcon}
          />
          <Text style={styles.optionText}>More Options</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.optionRow} onPress={handleLogout}>
          <Ionicons
            name="log-out-outline"
            size={24}
            color="#555"
            style={styles.optionIcon}
          />
          <Text style={styles.optionText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  profileHeader: {
    alignItems: 'center',
    marginBottom: 30,
    paddingVertical: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 3, // Android shadow
    shadowColor: '#000', // iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  username: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  email: {
    fontSize: 14,
    color: '#777',
    marginBottom: 10,
  },
  editButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e91e63',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
  },
  editButtonText: {
    color: '#fff',
    marginLeft: 5,
    fontSize: 14,
  },
  section: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  sectionContent: {
    fontSize: 16,
    color: '#555',
    marginBottom: 5,
  },
  bold: {
    fontWeight: 'bold',
  },
  eventItem: {
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
    paddingVertical: 10,
  },
  eventTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  eventDate: {
    fontSize: 14,
    color: '#777',
  },
  optionsContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
  },
  optionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
  },
  optionIcon: {
    marginRight: 15,
  },
  optionText: {
    fontSize: 16,
    color: '#333',
  },
});
