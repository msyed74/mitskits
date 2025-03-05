import React, { useState } from 'react';
import { View, TextInput, FlatList, Text, StyleSheet } from 'react-native';

const users = ['Alice', 'Bob', 'Charlie', 'David'];

export default function SearchScreen() {
  const [search, setSearch] = useState('');
  const filteredUsers = users.filter(user => user.toLowerCase().includes(search.toLowerCase()));

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
        keyExtractor={(item) => item}
        renderItem={({ item }) => <Text style={styles.user}>{item}</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
  input: { padding: 10, borderWidth: 1, borderRadius: 5, marginBottom: 10 },
  user: { padding: 10, borderBottomWidth: 1 },
});
