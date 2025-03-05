import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface PostProps {
  user: string;
  content: string;
}

export default function PostCard({ user, content }: PostProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.user}>{user}</Text>
      <Text>{content}</Text>
      <View style={styles.actions}>
        <TouchableOpacity><Ionicons name="heart-outline" size={20} color="red" /></TouchableOpacity>
        <TouchableOpacity><Ionicons name="chatbubble-outline" size={20} color="gray" /></TouchableOpacity>
        <TouchableOpacity><Ionicons name="share-outline" size={20} color="blue" /></TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { padding: 15, marginVertical: 10, backgroundColor: 'white', borderRadius: 10 },
  user: { fontWeight: 'bold', marginBottom: 5 },
  actions: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }
});
