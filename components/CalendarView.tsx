'use client';

import { useState, useEffect } from 'react';
import { Event } from '@/lib/events';
import EventModal from './EventModal';

interface CalendarViewProps {
  events: Event[];
}

export default function CalendarView({ events }: CalendarViewProps) {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [isMounted, setIsMounted] = useState(false);
  const [FullCalendar, setFullCalendar] = useState<any>(null);
  const [dayGridPlugin, setDayGridPlugin] = useState<any>(null);
  const [interactionPlugin, setInteractionPlugin] = useState<any>(null);

  useEffect(() => {
    const loadCalendar = async () => {
      const [fcModule, dgModule, intModule] = await Promise.all([
        import('@fullcalendar/react'),
        import('@fullcalendar/daygrid'),
        import('@fullcalendar/interaction')
      ]);
      setFullCalendar(fcModule.default);
      setDayGridPlugin(dgModule.default);
      setInteractionPlugin(intModule.default);
      setIsMounted(true);
    };
    loadCalendar();
  }, []);

  if (!isMounted || !FullCalendar || !dayGridPlugin || !interactionPlugin) {
    return <div className="bg-white/5 border border-white/10 rounded-lg p-4 md:p-6">Cargando calendario...</div>;
  }

  const calendarEvents = events.map(event => ({
    id: event.id,
    title: event.title,
    start: event.date,
    end: event.endDate,
    backgroundColor: '#a855f7',
    borderColor: '#22d3ee',
    extendedProps: { event }
  }));

  const handleEventClick = (info: any) => {
    setSelectedEvent(info.event.extendedProps.event);
  };

  return (
    <div className="bg-white/5 border border-white/10 rounded-lg p-4 md:p-6">
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth'
        }}
        events={calendarEvents}
        eventClick={handleEventClick}
        height="auto"
        eventMouseEnter={(info: any) => {
          info.el.style.cursor = 'pointer';
        }}
      />
      
      {selectedEvent && (
        <EventModal 
          event={selectedEvent} 
          onClose={() => setSelectedEvent(null)} 
        />
      )}
    </div>
  );
}
