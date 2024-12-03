// MyAVTicketingApp/app/(tabs)/TicketPurchaseFlowScreen.tsx
import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import { useNavigation } from 'expo-router';
import { EventContext } from '@/context/EventContext';
import { TicketContext } from '@/context/TicketContext';

export default function TicketPurchaseFlowScreen() {
  const navigation = useNavigation();
  const { events } = useContext(EventContext);
  const { addTicket } = useContext(TicketContext);

  const [step, setStep] = useState(1);
  const [selectedEvent, setSelectedEvent] = useState('');
  const [numTickets, setNumTickets] = useState(1);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleEventSelection = (event: string) => {
    setSelectedEvent(event);
    setStep(2);
  };

  const handleNext = () => {
    if (step === 2) {
      setStep(3);
    } else if (step === 3) {
      handleSubmit();
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!name) newErrors.name = 'Name is required';
    if (!email) newErrors.email = 'Email is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      setLoading(true);
      setTimeout(() => {
        for (let i = 0; i < numTickets; i++) {
          addTicket({ name, email, event: selectedEvent });
        }
        setLoading(false);
        setStep(4);
      }, 2000); // Simulate a network request
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {step === 1 && (
        <>
          <Text style={styles.title}>Upcoming Events</Text>
          <View style={styles.eventsGrid}>
            {events.map((event, index) => (
              <TouchableOpacity key={index} style={styles.eventCard} onPress={() => handleEventSelection(event.name)}>
                <Image source={{ uri: event.image }} style={styles.eventImage} />
                <View style={styles.eventDetails}>
                  <Text style={styles.eventName}>{event.name}</Text>
                  <Text>{event.date}</Text>
                  <Text>{event.description}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </>
      )}
      {step === 2 && (
        <View style={styles.stepContainer}>
          <Text style={styles.title}>Choose Number of Tickets for {selectedEvent}</Text>
          <TextInput
            style={styles.input}
            value={String(numTickets)}
            onChangeText={(text) => setNumTickets(Number(text))}
            keyboardType="numeric"
            min="1"
            max="10"
          />
          <View style={styles.buttonContainer}>
            <Button title="Next" onPress={handleNext} />
            <View style={styles.buttonSpacing} />
            <Button title="Go Back" onPress={handleBack} />
          </View>
        </View>
      )}
      {step === 3 && (
        <View style={styles.stepContainer}>
          <Text style={styles.title}>Enter Your Information</Text>
          <View style={styles.inputContainer}>
            <Text>Name:</Text>
            <TextInput
              style={styles.input}
              value={name}
              onChangeText={setName}
              required
            />
            {errors.name && <Text style={styles.error}>{errors.name}</Text>}
          </View>
          <View style={styles.inputContainer}>
            <Text>Email:</Text>
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              required
            />
            {errors.email && <Text style={styles.error}>{errors.email}</Text>}
          </View>
          <View style={styles.buttonContainer}>
            <Button title={loading ? 'Processing...' : 'Purchase Ticket'} onPress={handleNext} disabled={loading} />
            {loading && <ActivityIndicator size="large" color="#0000ff" />}
            <View style={styles.buttonSpacing} />
            <Button title="Go Back" onPress={handleBack} />
          </View>
        </View>
      )}
      {step === 4 && (
        <View style={styles.stepContainer}>
          <Text style={styles.title}>Ticket Purchase Confirmation</Text>
          <View style={styles.confirmationDetails}>
            <Text>Thank you, <Text style={styles.bold}>{name}</Text>!</Text>
            <Text>Your {numTickets} ticket(s) for <Text style={styles.bold}>{selectedEvent}</Text> have been purchased successfully.</Text>
            <Text>A confirmation email has been sent to <Text style={styles.bold}>{email}</Text>.</Text>
          </View>
          <View style={styles.buttonContainer}>
            <Button title="Go to My Tickets" onPress={() => navigation.navigate('TicketListScreen')} />
            <View style={styles.buttonSpacing} />
            <Button title="Go Back" onPress={() => setStep(1)} />
          </View>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  eventsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  eventCard: {
    flexDirection: 'row', // Arrange items in a row
    width: '100%',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    overflow: 'hidden',
  },
  eventImage: {
    width: 100,
    height: 100,
  },
  eventDetails: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
  },
  eventName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  stepContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  inputContainer: {
    marginBottom: 15,
    width: '100%',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    width: '100%',
  },
  error: {
    color: 'red',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonSpacing: {
    width: 10, // Adjust the width to add space between buttons
  },
  confirmationDetails: {
    marginBottom: 20,
  },
  bold: {
    fontWeight: 'bold',
  },
});