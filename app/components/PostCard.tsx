import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface PostProps {
  user: string;
  content: string;
}

const PostCard: React.FC<PostProps> = ({ user, content }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.user}>{user}</Text>
      <Text style={styles.content}>{content}</Text>
      <View style={styles.actions}>
        <TouchableOpacity
          style={styles.iconButton}
          accessible
          accessibilityLabel="Like"
        >
          <Ionicons name="heart-outline" size={20} color="red" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.iconButton}
          accessible
          accessibilityLabel="Comment"
        >
          <Ionicons name="chatbubble-outline" size={20} color="gray" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.iconButton}
          accessible
          accessibilityLabel="Share"
        >
          <Ionicons name="share-outline" size={20} color="blue" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 15,
    marginVertical: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    // Added shadow for iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    // Elevation for Android
    elevation: 3,
  },
  user: {
    fontWeight: 'bold',
    marginBottom: 5,
    fontSize: 16,
    color: '#333',
  },
  content: {
    fontSize: 14,
    color: '#555',
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  iconButton: {
    padding: 5,
  },
});

export default PostCard;
