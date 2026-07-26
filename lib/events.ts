export interface Event {
  id: string;
  title: string;
  date: string;
  endDate: string;
  location: string;
  description: string;
  image: string;
  ticketsUrl: string;
}

export const events: Event[] = [
  {
    id: "1",
    title: "Neon Nights Festival 2026",
    date: "2026-08-15T20:00:00",
    endDate: "2026-08-16T06:00:00",
    location: "Madrid Arena, Madrid",
    description: "Una noche mágica llena de luz, sonido y las mejores actuaciones del momento. Preparate para vivir una experiencia única con artistas internacionales y una producción de primer nivel.",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&h=600&fit=crop",
    ticketsUrl: "https://example.com/tickets/neon-nights"
  },
  {
    id: "2",
    title: "Electronic Dreams",
    date: "2026-09-20T22:00:00",
    endDate: "2026-09-21T07:00:00",
    location: "Fabrik, Madrid",
    description: "El evento de música electrónica más esperado del año. DJ's de renombre internacional, visuales impactantes y un sonido que te transportará a otro universo.",
    image: "https://images.unsplash.com/photo-1571266028243-e4733b0f0bb0?w=800&h=600&fit=crop",
    ticketsUrl: "https://example.com/tickets/electronic-dreams"
  },
  {
    id: "3",
    title: "Infinity Sessions Vol. 5",
    date: "2026-10-10T21:00:00",
    endDate: "2026-10-11T04:00:00",
    location: "Sala Riviera, Madrid",
    description: "La quinta edición de nuestras sesiones exclusivas. Una experiencia íntima con los mejores talentos emergentes de la escena musical actual.",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&h=600&fit=crop",
    ticketsUrl: "https://example.com/tickets/sessions-vol5"
  },
  {
    id: "4",
    title: "Cyberpunk Experience",
    date: "2026-11-05T20:00:00",
    endDate: "2026-11-06T05:00:00",
    location: "IFEMA, Madrid",
    description: "Sumérgete en un mundo futurista donde la música y la tecnología se fusionan. Actuaciones en vivo, instalaciones interactivas y una atmósfera cyberpunk única.",
    image: "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=800&h=600&fit=crop",
    ticketsUrl: "https://example.com/tickets/cyberpunk"
  },
  {
    id: "5",
    title: "Winter Bass Festival",
    date: "2026-12-15T21:00:00",
    endDate: "2026-12-16T06:00:00",
    location: "WiZink Center, Madrid",
    description: "El festival que cierra el año con la mejor selección de bass music. Dubstep, trap, drum & bass y mucho más en un espectáculo visual sin precedentes.",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=600&fit=crop",
    ticketsUrl: "https://example.com/tickets/winter-bass"
  },
  {
    id: "6",
    title: "New Year's Eve Infinity",
    date: "2026-12-31T22:00:00",
    endDate: "2027-01-01T07:00:00",
    location: "Puerta de Alcalá, Madrid",
    description: "Despide el año con la fiesta más épica de Madrid. Concierto al aire libre, fuegos artificiales sincronizados con la música y la mejor vibra para recibir el 2027.",
    image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&h=600&fit=crop",
    ticketsUrl: "https://example.com/tickets/new-year"
  }
];

export const getFeaturedEvents = (): Event[] => {
  return events.slice(0, 3);
};

export const getEventById = (id: string): Event | undefined => {
  return events.find(event => event.id === id);
};

export const getUpcomingEvents = (): Event[] => {
  const now = new Date();
  return events.filter(event => new Date(event.date) > now);
};
