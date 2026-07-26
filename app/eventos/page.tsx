'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CalendarView from '@/components/CalendarView';
import EventCard from '@/components/EventCard';
import { getUpcomingEvents } from '@/lib/events';
import { motion } from 'framer-motion';

export default function EventosPage() {
  const upcomingEvents = getUpcomingEvents();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-1 pt-16">
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-brand-purple">Calendario</span> <span className="text-brand-cyan">de Eventos</span>
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Descubre todos nuestros próximos eventos. Haz click en cualquier evento del calendario para ver más detalles.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <CalendarView events={upcomingEvents} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold mb-8 text-center">
              <span className="text-brand-purple">Todos</span> <span className="text-brand-cyan">los Eventos</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingEvents.map((event, index) => (
                <EventCard key={event.id} event={event} index={index} />
              ))}
            </div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
