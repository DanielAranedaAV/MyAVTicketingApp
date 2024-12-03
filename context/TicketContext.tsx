// MyAVTicketingApp/context/TicketContext.tsx
import React, { createContext, useState, ReactNode } from 'react';

interface Ticket {
  name: string;
  email: string;
  event: string;
}

interface TicketContextProps {
  tickets: Ticket[];
  addTicket: (ticket: Ticket) => void;
}

export const TicketContext = createContext<TicketContextProps | undefined>(undefined);

export const TicketProvider = ({ children }: { children: ReactNode }) => {
  const [tickets, setTickets] = useState<Ticket[]>([]);

  const addTicket = (ticket: Ticket) => {
    setTickets([...tickets, ticket]);
  };

  return (
    <TicketContext.Provider value={{ tickets, addTicket }}>
      {children}
    </TicketContext.Provider>
  );
};