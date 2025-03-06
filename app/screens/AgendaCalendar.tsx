// src/screens/AgendaCalendar.tsx
import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { useNavigation } from '@react-navigation/native';

const AgendaCalendar: React.FC = () => {
  const navigation = useNavigation();
  const [selectedDate, setSelectedDate] = useState('');

  const onDayPress = (day: any) => {
     setSelectedDate(day.dateString);
     const parentNav = navigation.navigate.getParent();
     if (parentNav) {
       parentNav.navigate('DayEvents', { selectedDate: day.dateString });
      }else {
        navigation.navigate('DayEvents', { selectedDate: day.dateString });
      }
  };

  return (
    <View style={styles.container}>
      <Calendar
        onDayPress={onDayPress}
        markedDates={{
          [selectedDate]: {
            selected: true,
            disableTouchEvent: true,
            selectedColor: 'blue',
          },
        }}
      />
      <Text style={styles.infoText}>Tap a date to view events.</Text>
    </View>
  );
};

export default AgendaCalendar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  infoText: {
    marginTop: 10,
    textAlign: 'center',
  },
});
