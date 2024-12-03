// MyAVTicketingApp/app/(tabs)/SupportScreen.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, Linking } from 'react-native';

export default function SupportScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    // Here you can handle form submission, e.g., send the data to a server
    setSubmitted(true);
    Alert.alert('Thank you for your message! We will get back to you soon.');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Support</Text>
      <Text style={styles.description}>
        If you have any questions, need help, or want to provide feedback, please reach out to us using the form below.
      </Text>
      {submitted ? (
        <Text>Thank you for your message! We will get back to you soon.</Text>
      ) : (
        <View>
          <View style={styles.inputContainer}>
            <Text>Name:</Text>
            <TextInput
              style={styles.input}
              value={name}
              onChangeText={setName}
              required
            />
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
          </View>
          <View style={styles.inputContainer}>
            <Text>Message:</Text>
            <TextInput
              style={[styles.input, styles.textArea]}
              value={message}
              onChangeText={setMessage}
              multiline
              numberOfLines={4}
              required
            />
          </View>
          <Button title="Send Message" onPress={handleSubmit} />
        </View>
      )}
      <View style={styles.socialMedia}>
        <Text style={styles.socialMediaTitle}>Follow Us</Text>
        <View style={styles.socialMediaLinks}>
          <Text style={styles.link} onPress={() => Linking.openURL('https://www.facebook.com')}>Facebook</Text>
          <Text style={styles.link} onPress={() => Linking.openURL('https://www.twitter.com')}>Twitter</Text>
          <Text style={styles.link} onPress={() => Linking.openURL('https://www.instagram.com')}>Instagram</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  inputContainer: {
    marginBottom: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
  },
  textArea: {
    height: 100,
  },
  socialMedia: {
    marginTop: 20,
  },
  socialMediaTitle: {
    fontSize: 18,
    marginBottom: 10,
  },
  socialMediaLinks: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  link: {
    color: '#007BFF',
  },
});