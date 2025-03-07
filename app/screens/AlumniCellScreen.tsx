// AlumniCellScreen.tsx
import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';


const alumniList = [
  {
    id: '1',
    name: 'John Doe',
    batch: '2018',
    profession: 'Software Engineer at Google',
    department: 'Computer Science',
    branch: 'CSE',
    photo: 'https://example.com/photo1.jpg',
    designation: 'Senior Developer',
    qualification: 'B.Tech',
    areaOfInterest: 'Mobile Development',
    phone: '+1234567890',
    email: 'john@example.com',
    about:
      'John is a skilled software engineer with 5 years of experience in mobile app development.',
    socialLinks: {
      linkedin: 'https://linkedin.com/in/johndoe',
      twitter: 'https://twitter.com/johndoe',
    },
  },
  {
    id: '2',
    name: 'Jane Smith',
    batch: '2019',
    profession: 'Data Scientist at Microsoft',
    department: 'Information Technology',
    branch: 'IT',
    photo: 'https://example.com/photo2.jpg',
    designation: 'Data Scientist',
    qualification: 'M.Sc',
    areaOfInterest: 'Machine Learning',
    phone: '+1987654321',
    email: 'jane@example.com',
    about:
      'Jane is passionate about data analysis and applying machine learning techniques to real-world problems.',
    socialLinks: {
      linkedin: 'https://linkedin.com/in/janesmith',
      twitter: 'https://twitter.com/janesmith',
    },
  },
  // ... add more alumni data as needed
];

export default function AlumniCellScreen() {
  const navigation = useNavigation();
  const [nameFilter, setNameFilter] = useState('');
  const [departmentFilter, setDepartmentFilter] = useState('');
  const [branchFilter, setBranchFilter] = useState('');

  const filteredAlumni = alumniList.filter((item) => {
    return (
      (nameFilter === '' ||
        item.name.toLowerCase().includes(nameFilter.toLowerCase())) &&
      (departmentFilter === '' ||
        item.department.toLowerCase().includes(departmentFilter.toLowerCase())) &&
      (branchFilter === '' ||
        item.branch.toLowerCase().includes(branchFilter.toLowerCase()))
    );
  });

  const renderItem = ({ item }: { item: typeof alumniList[0] }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate('AlumniDetail', { alumni: item })}
    >
      <Text style={styles.name}>{item.name}</Text>
      <Text>Department: {item.department}</Text>
      <Text>Branch: {item.branch}</Text>
      <Text>Batch: {item.batch}</Text>
      <Text>Profession: {item.profession}</Text>
      <TouchableOpacity style={styles.connectButton}>

        <Text style={styles.buttonText} >
          Connect
          </Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Name"
          value={nameFilter}
          onChangeText={setNameFilter}
        />
        <TextInput
          style={styles.searchInput}
          placeholder="Department"
          value={departmentFilter}
          onChangeText={setDepartmentFilter}
        />
        <TextInput
          style={styles.searchInput}
          placeholder="Branch"
          value={branchFilter}
          onChangeText={setBranchFilter}
        />
      </View>
      <FlatList
        data={filteredAlumni}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f9f9f9',
  },
  searchContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  searchInput: {
    flex: 1,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginHorizontal: 5,
    padding: 8,
  },
  card: {
    padding: 15,
    backgroundColor: 'white',
    marginBottom: 10,
    borderRadius: 8,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  connectButton: {
    marginTop: 5,
    padding: 10,
    backgroundColor: 'blue',
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
