import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const alumniList = [
  { id: '1', name: 'John Doe', batch: '2018', profession: 'Software Engineer at Google' },
  { id: '2', name: 'Jane Smith', batch: '2019', profession: 'Data Scientist at Microsoft' },
];

export default function AlumniCellScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={alumniList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.name}>{item.name}</Text>
            <Text>Batch: {item.batch}</Text>
            <Text>Profession: {item.profession}</Text>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Connect</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10, backgroundColor: '#f9f9f9' },
  card: { padding: 15, backgroundColor: 'white', marginBottom: 10, borderRadius: 8 },
  name: { fontSize: 16, fontWeight: 'bold' },
  button: { marginTop: 5, padding: 10, backgroundColor: 'blue', borderRadius: 5, alignItems: 'center' },
  buttonText: { color: 'white', fontWeight: 'bold' },
});
