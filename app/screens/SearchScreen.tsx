import React, { useState } from 'react';
import { 
  View, 
  TextInput, 
  FlatList, 
  Text, 
  StyleSheet, 
  Image 
} from 'react-native';

const users = [
  { 
    id: '1', 
    name: 'Alice', 
    bio: 'Passionate traveler and foodie', 
    profileImage: 'https://randomuser.me/api/portraits/women/1.jpg' 
  },
  { 
    id: '2', 
    name: 'Bob', 
    bio: 'Tech enthusiast, coder, gamer', 
    profileImage: 'https://randomuser.me/api/portraits/men/2.jpg' 
  },
  { 
    id: '3', 
    name: 'Charlie', 
    bio: 'Nature lover and adventure seeker', 
    profileImage: 'https://randomuser.me/api/portraits/men/3.jpg' 
  },
  { 
    id: '4', 
    name: 'David', 
    bio: 'Musician, artist, and coffee lover', 
    profileImage: 'https://randomuser.me/api/portraits/men/4.jpg' 
  },
];

export default function SearchScreen() {
  const [search, setSearch] = useState('');
  const filteredUsers = users.filter(user => 
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  const renderItem = ({ item }: { item: typeof users[0] }) => (
    <View style={styles.userContainer}>
      <Image source={{ uri: item.profileImage }} style={styles.avatar} />
      <View style={styles.userInfo}>
        <Text style={styles.userName}>{item.name}</Text>
        <Text style={styles.userBio}>{item.bio}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search..."
        value={search}
        onChangeText={setSearch}
      />
      <FlatList
        data={filteredUsers}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
  input: { 
    padding: 10, 
    borderWidth: 1, 
    borderRadius: 5, 
    marginBottom: 10 
  },
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  userInfo: {
    justifyContent: 'center',
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  userBio: {
    fontSize: 14,
    color: '#777',
  },
});
