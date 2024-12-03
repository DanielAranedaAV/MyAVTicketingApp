// MyAVTicketingApp/app/(tabs)/TicketListScreen.tsx
import React, { useContext } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { TicketContext } from '@/context/TicketContext';

export default function TicketListScreen() {
  const { tickets } = useContext(TicketContext);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Purchased Tickets</Text>
      {tickets.length > 0 ? (
        <FlatList
          data={tickets}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.ticketItem}>
              <Text style={styles.ticketText}>{item.name} ({item.email}) - {item.event}</Text>
            </View>
          )}
        />
      ) : (
        <Text>No tickets purchased yet.</Text>
      )}
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
  ticketItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  ticketText: {
    fontSize: 16,
  },
});