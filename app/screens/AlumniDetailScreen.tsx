// AlumniDetailScreen.tsx
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Linking,
  ScrollView,
} from 'react-native';

export default function AlumniDetailScreen({ route, navigation }: any) {
  const { alumni } = route.params;

  const handleEmailPress = () => {
    Linking.openURL(`mailto:${alumni.email}`);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: alumni.photo }} style={styles.photo} />
      <Text style={styles.name}>{alumni.name}</Text>
      <Text style={styles.designation}>{alumni.designation}</Text>
      <Text style={styles.qualification}>{alumni.qualification}</Text>
      <Text style={styles.areaOfInterest}>
        Area of Interest: {alumni.areaOfInterest}
      </Text>
      <Text style={styles.phone}>Phone: {alumni.phone}</Text>
      <TouchableOpacity onPress={handleEmailPress}>
        <Text style={styles.email}>Email: {alumni.email}</Text>
      </TouchableOpacity>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>About</Text>
        <Text style={styles.sectionContent}>{alumni.about}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Social Links</Text>
        <Text style={styles.link}>LinkedIn: {alumni.socialLinks.linkedin}</Text>
        <Text style={styles.link}>Twitter: {alumni.socialLinks.twitter}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: '#fff', alignItems: 'center' },
  photo: { width: 150, height: 150, borderRadius: 75, marginBottom: 15 },
  name: { fontSize: 22, fontWeight: 'bold', marginBottom: 5 },
  designation: { fontSize: 18, color: '#333', marginBottom: 5 },
  qualification: { fontSize: 16, color: '#555', marginBottom: 5 },
  areaOfInterest: { fontSize: 16, color: '#555', marginBottom: 5 },
  phone: { fontSize: 16, color: '#555', marginBottom: 5 },
  email: { fontSize: 16, color: 'blue', marginBottom: 15 },
  section: { width: '100%', marginVertical: 10 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 5 },
  sectionContent: { fontSize: 16, color: '#555' },
  link: { fontSize: 16, color: 'blue', marginBottom: 5 },
});
