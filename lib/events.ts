export interface Event {
  id: string;
  title: string;
  date: string;
  endDate: string;
  location: string;
  description: string;
  image: string;
  ticketsUrl: string;
  speaker?: string;
  tourName?: string;
}

export const events: Event[] = [
  {
    id: "1",
    title: "Noches de Activación Profética",
    date: "2026-09-30T20:00:00",
    endDate: "2026-10-03T23:00:00",
    location: "Tarragona, España",
    description: "Cuatro noches de adoración profunda, enseñanza y activación espiritual. Únete a nosotros para un tiempo transformador en la presencia de Dios.",
    image: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=800&h=600&fit=crop",
    ticketsUrl: "https://wa.me/34664087827",
    speaker: "Ponente Invitado",
    tourName: "EUROTOUR 2026"
  },
  {
    id: "2",
    title: "España Adora 2026",
    date: "2026-11-15T19:00:00",
    endDate: "2026-11-18T22:00:00",
    location: "Tenerife, España",
    description: "Un evento nacional de adoración y unidad. Ven a experimentar el poder de la adoración colectiva y el mover del Espíritu Santo.",
    image: "https://images.unsplash.com/photo-1507692049790-de58290a4334?w=800&h=600&fit=crop",
    ticketsUrl: "https://wa.me/34664087827",
    speaker: "Varios Ponentes",
    tourName: "EUROTOUR 2026"
  },
  {
    id: "3",
    title: "Noches de Activación Profética",
    date: "2026-12-01T20:00:00",
    endDate: "2026-12-04T23:00:00",
    location: "Barcelona, España",
    description: "Continuación de nuestra gira de activación profética. Tiempo de enseñanza, adoración y ministerio personal.",
    image: "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=800&h=600&fit=crop",
    ticketsUrl: "https://wa.me/34664087827",
    speaker: "Ponente Invitado",
    tourName: "EUROTOUR 2026"
  },
  {
    id: "4",
    title: "Awakening Night",
    date: "2027-01-20T20:00:00",
    endDate: "2027-01-20T23:30:00",
    location: "Madrid, España",
    description: "Una noche especial de despertar espiritual. Adoración, palabra y un tiempo poderoso de ministerio.",
    image: "https://images.unsplash.com/photo-1518176258769-f227c798150e?w=800&h=600&fit=crop",
    ticketsUrl: "https://wa.me/34664087827",
    speaker: "Equipo Infinity Sound",
    tourName: "SPECIAL EVENT"
  },
  {
    id: "5",
    title: "España Adora 2027",
    date: "2027-03-10T19:00:00",
    endDate: "2027-03-13T22:00:00",
    location: "Valencia, España",
    description: "El evento de adoración más grande de España. Tres días de adoración ininterrumpida, enseñanza y comunidad.",
    image: "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=800&h=600&fit=crop",
    ticketsUrl: "https://wa.me/34664087827",
    speaker: "Varios Ponentes",
    tourName: "NATIONAL TOUR"
  },
  {
    id: "6",
    title: "Summer Worship Conference",
    date: "2027-06-15T18:00:00",
    endDate: "2027-06-18T22:00:00",
    location: "Sevilla, España",
    description: "Conferencia de verano enfocada en el desarrollo de líderes de adoración y músicos. Workshops, adoración y networking.",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=600&fit=crop",
    ticketsUrl: "https://wa.me/34664087827",
    speaker: "Infinity Sound Team",
    tourName: "LEADERSHIP CONFERENCE"
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
