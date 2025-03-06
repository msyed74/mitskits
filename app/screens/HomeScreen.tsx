import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, FlatList, StyleSheet, RefreshControl } from 'react-native';
import PostCard from '../components/PostCard'; // Ensure this path is correct
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';

export default function HomeScreen() {
  const [posts, setPosts] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  // Fetch posts from storage or API
  const fetchPosts = async () => {
    try {
      const storedPosts = await AsyncStorage.getItem('posts');
      if (storedPosts) {
        setPosts(JSON.parse(storedPosts));
      }
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  // Refresh posts when the screen is focused
  useFocusEffect(
    useCallback(() => {
      fetchPosts();
    }, [])
  );

  // Pull-to-refresh functionality
  const onRefresh = async () => {
    setRefreshing(true);
    await fetchPosts();
    setRefreshing(false);
  };

  return (
    <View style={styles.container}>
      {posts.length === 0 ? (
        <Text style={styles.emptyText}>No posts yet. Create a new post!</Text>
      ) : (
        <FlatList
          data={posts}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <PostCard user={item.user} content={item.content} />}
          refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10, backgroundColor: '#f9f9f9' },
  emptyText: { textAlign: 'center', fontSize: 16, color: '#666', marginTop: 20 },
});
