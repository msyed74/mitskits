import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// Assume navigation is passed via props (if using React Navigation)
export default function EditProfileScreen({ navigation }: any) {
  // Dummy initial user data; replace with real data as needed.
  const [name, setName] = useState('John Doe');
  const [email, setEmail] = useState('johndoe@example.com');
  const [bio, setBio] = useState("I'm a passionate developer and active club member who loves participating in events and workshops.");
  const [clubName, setClubName] = useState('Tech Club');
  const [clubDescription, setClubDescription] = useState('A community for tech enthusiasts focused on learning and networking.');

  const handleSave = () => {
    // Update profile logic goes here.
    console.log('Profile updated:', { name, email, bio, clubName, clubDescription });
    // Navigate back to the Profile screen.
    navigation.goBack();
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Edit Profile</Text>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Name</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
          placeholder="Enter your name"
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="Enter your email"
          keyboardType="email-address"
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Bio</Text>
        <TextInput
          style={[styles.input, styles.multilineInput]}
          value={bio}
          onChangeText={setBio}
          placeholder="Tell us about yourself"
          multiline
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Club Name</Text>
        <TextInput
          style={styles.input}
          value={clubName}
          onChangeText={setClubName}
          placeholder="Enter your club name"
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Club Description</Text>
        <TextInput
          style={[styles.input, styles.multilineInput]}
          value={clubDescription}
          onChangeText={setClubDescription}
          placeholder="Enter club description"
          multiline
        />
      </View>

      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Ionicons name="save-outline" size={20} color="#fff" />
        <Text style={styles.saveButtonText}>Save Changes</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  formGroup: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: '#555',
  },
  input: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 8,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  multilineInput: {
    height: 100,
    textAlignVertical: 'top',
  },
  saveButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e91e63',
    padding: 15,
    borderRadius: 8,
    justifyContent: 'center',
    marginTop: 20,
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 18,
    marginLeft: 10,
  },
});
