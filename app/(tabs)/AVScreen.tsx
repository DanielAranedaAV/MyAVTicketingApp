// MyAVTicketingApp/app/(tabs)/AVScreen.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AVScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About AudienceView</Text>
      <Text style={styles.description}>This is a page about AV.</Text>
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
    textAlign: 'center',
  },
});