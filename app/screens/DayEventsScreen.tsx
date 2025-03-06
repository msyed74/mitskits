// src/screens/DayEventsScreen.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RouteProp } from '@react-navigation/native';

type DrawerParamList = {
  DayEvents: { selectedDate: string };
};

type DayEventsScreenRouteProp = RouteProp<DrawerParamList, 'DayEvents'>;

interface Props {
  route: DayEventsScreenRouteProp;
}

const DayEventsScreen: React.FC<Props> = ({ route }) => {
  const { selectedDate } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Events on {selectedDate}</Text>
      {/* Replace with your events list for the selected date */}
      <Text>No events for this date.</Text>
    </View>
  );
};

export default DayEventsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
