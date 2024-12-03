// MyAVTicketingApp/context/EventContext.tsx
import React, { createContext, useState, ReactNode } from 'react';

interface Event {
  name: string;
  date: string;
  description: string;
  image: string;
}

interface EventContextProps {
  events: Event[];
}

export const EventContext = createContext<EventContextProps | undefined>(undefined);

export const EventProvider = ({ children }: { children: ReactNode }) => {
  const [events] = useState<Event[]>([
    { name: 'JSConf Chile 2024', date: '2024-12-05', description: 'We\'re presenting at this conference right this moment.', image: '../assets/images/events/jsconf.png' },
    { name: 'Rock Band Live', date: '2023-11-20', description: 'Join us for an unforgettable night of rock music.', image: '../assets/images/events/rock-band.png' },
    { name: 'Hamlet', date: '2023-12-05', description: 'Experience the classic Shakespearean play.', image: '../assets/images/events/hamlet.png' },
    { name: 'Soccer Championship', date: '2023-12-15', description: 'Watch the top teams compete for the championship.', image: '../assets/images/events/soccer.png' },
  ]);

  return (
    <EventContext.Provider value={{ events }}>
      {children}
    </EventContext.Provider>
  );
};