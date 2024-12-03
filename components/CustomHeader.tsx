// MyAVTicketingApp/components/CustomHeader.tsx
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from 'expo-router';

export default function CustomHeader() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('index')}>
        <Text style={styles.link}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('AVScreen')}>
        <Text style={styles.link}>About AV</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('EventSelectionScreen')}>
        <Text style={styles.link}>Events</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('TicketListScreen')}>
        <Text style={styles.link}>My Tickets</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('SupportScreen')}>
        <Text style={styles.link}>Support</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  link: {
    fontSize: 16,
    color: '#007BFF',
  },
});