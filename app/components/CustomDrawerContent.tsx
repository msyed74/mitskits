// src/components/CustomDrawerContent.tsx
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import AgendaCalendar from '../screens/AgendaCalendar';

const CustomDrawerContent: React.FC<any> = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      {/* Calendar is displayed at the top */}
      <View style={styles.calendarContainer}>
        <AgendaCalendar />
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

export default CustomDrawerContent;

const styles = StyleSheet.create({
  calendarContainer: {
    padding: 10,
    backgroundColor: '#fff',
  },
});
