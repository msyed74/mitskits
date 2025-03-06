import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  Button, 
  StyleSheet, 
  TouchableOpacity, 
  Alert, 
  Image 
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';

export default function CreatePostScreen() {
  const navigation = useNavigation();
  const [postType, setPostType] = useState<'General' | 'Event' | 'Club'>('General');
  const [content, setContent] = useState('');
  const [media, setMedia] = useState<any>(null); // To store selected media

  // Function to pick image or video from gallery
  const handlePickMedia = async () => {
    // Request permission if needed
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permission Required', 'Permission to access gallery is required!');
      return;
    }
    
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All, // Allow images & videos
      allowsEditing: true,
      quality: 1,
    });

    // Check using the new API structure (property "canceled" and "assets" array)
    if (!result.canceled && result.assets && result.assets.length > 0) {
      setMedia(result.assets[0]);
    }
  };

  // Function to handle post creation
  const handlePost = async () => {
    if (!content.trim() && !media) {
      Alert.alert('Error', 'Please add some content or select a media file.');
      return;
    }

    const newPost = {
      id: Date.now().toString(),
      user: 'You', // Replace with actual logged-in user's name
      content,
      type: postType,
      media: media ? media.uri : null,
      mediaType: media ? media.type : null,
    };

    try {
      const storedPosts = await AsyncStorage.getItem('posts');
      const posts = storedPosts ? JSON.parse(storedPosts) : [];
      posts.unshift(newPost); // Add new post at the top
      await AsyncStorage.setItem('posts', JSON.stringify(posts));
      navigation.goBack();
    } catch (error) {
      console.error('Error saving post:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Select Post Type:</Text>
      <View style={styles.buttonContainer}>
        {['General', 'Event', 'Club'].map((type) => (
          <TouchableOpacity
            key={type}
            style={[styles.postTypeButton, postType === type && styles.selected]}
            onPress={() => setPostType(type as 'General' | 'Event' | 'Club')}
          >
            <Text style={styles.postTypeText}>{type}</Text>
          </TouchableOpacity>
        ))}
      </View>
      
      <TextInput
        style={styles.input}
        placeholder="Write your post description..."
        value={content}
        onChangeText={setContent}
        multiline
      />
      
      <Button title="Select Media" onPress={handlePickMedia} />
      
      {media && (
        <View style={styles.mediaPreview}>
          {media.type === 'image' ? (
            <Image source={{ uri: media.uri }} style={styles.mediaImage} />
          ) : (
            <Text style={styles.videoText}>Video Selected</Text>
          )}
        </View>
      )}
      
      <Button title="Post" onPress={handlePost} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  label: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
  buttonContainer: { flexDirection: 'row', justifyContent: 'space-around', marginBottom: 15 },
  postTypeButton: { padding: 10, borderRadius: 8, backgroundColor: '#ddd' },
  selected: { backgroundColor: '#007bff' },
  postTypeText: { fontSize: 16, color: '#fff' },
  input: { 
    height: 100, 
    borderColor: '#ccc', 
    borderWidth: 1, 
    borderRadius: 8, 
    padding: 10, 
    marginBottom: 15 
  },
  mediaPreview: { 
    marginVertical: 15, 
    alignItems: 'center' 
  },
  mediaImage: { 
    width: 200, 
    height: 200, 
    resizeMode: 'cover', 
    borderRadius: 10 
  },
  videoText: { fontSize: 16, color: '#555', marginTop: 10 },
});
