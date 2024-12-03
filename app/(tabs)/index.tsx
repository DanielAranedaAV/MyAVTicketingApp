// MyAVTicketingApp/app/(tabs)/index.tsx
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';
import { useNavigation } from 'expo-router';
// import { addTicket } from '@/services/ticketService'; // Adjust the import based on your project structure

export default function HomeScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [selectedEvent, setSelectedEvent] = useState('');
  const [numTickets, setNumTickets] = useState(1);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const navigation = useNavigation();

  const validateForm = () => {
    const newErrors = {};
    if (!name) newErrors.name = 'Name is required';
    if (!email) newErrors.email = 'Email is required';
    if (!selectedEvent) newErrors.event = 'Event selection is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

//   const handleSubmit = () => {
//     if (validateForm()) {
//       setLoading(true);
//       setTimeout(() => {
//         for (let i = 0; i < numTickets; i++) {
//           addTicket({ name, email, event: selectedEvent });
//         }
//         setLoading(false);
//         navigation.navigate('Confirmation', { name, email, event: selectedEvent, numTickets });
//       }, 2000); // Simulate a network request
//     }
//   };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the Ticket Buying App</Text>
      <Text style={styles.description}>Buy tickets for your favorite events easily and quickly.</Text>
      <Button title="View All Events" onPress={() => navigation.navigate('Events')} />
      {/* <Button title="Submit" onPress={handleSubmit} disabled={loading} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
});