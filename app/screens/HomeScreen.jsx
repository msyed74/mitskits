import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import PostCard from '../components/PostCard';

const dummyPosts = [
  { id: '1', user: 'Alice', content: 'Excited for the hackathon!' },
  { id: '2', user: 'Bob', content: 'Join the AI club today!' },
];

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={dummyPosts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <PostCard user={item.user} content={item.content} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10, backgroundColor: '#f0f0f0' },
});
