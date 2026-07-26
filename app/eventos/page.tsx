'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CalendarView from '@/components/CalendarView';
import EventCard from '@/components/EventCard';
import { getUpcomingEvents } from '@/lib/events';
import { motion } from 'framer-motion';

export default function EventosPage() {
  const upcomingEvents = getUpcomingEvents();
  const [view, setView] = useState<'stages' | 'calendar'>('stages');

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-1 pt-20">
        <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl mb-4">
              <span className="text-brand-gold">EUROTOUR</span> <span className="text-brand-cream">2026</span>
            </h1>
            <p className="text-brand-cream/70 max-w-2xl mx-auto font-sans">
              Noches de activación profética por toda España. Únete a nosotros en estas ciudades.
            </p>
          </motion.div>

          {/* View Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center mb-12"
          >
            <div className="inline-flex bg-brand-black border border-brand-gold/30 rounded-lg p-1">
              <button
                onClick={() => setView('stages')}
                className={`px-6 py-2 font-display text-sm tracking-wide transition-colors ${
                  view === 'stages'
                    ? 'bg-brand-gold text-brand-black'
                    : 'text-brand-cream/60 hover:text-brand-cream'
                }`}
              >
                VISTA LISTA
              </button>
              <button
                onClick={() => setView('calendar')}
                className={`px-6 py-2 font-display text-sm tracking-wide transition-colors ${
                  view === 'calendar'
                    ? 'bg-brand-gold text-brand-black'
                    : 'text-brand-cream/60 hover:text-brand-cream'
                }`}
              >
                VISTA CALENDARIO
              </button>
            </div>
          </motion.div>

          {view === 'stages' ? (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="space-y-8">
                {upcomingEvents.map((event, index) => (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="relative h-[60vh] md:h-[70vh] overflow-hidden border border-brand-gold/30 group"
                  >
                    <div className="absolute inset-0">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                    </div>
                    
                    <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12">
                      {event.tourName && (
                        <span className="font-display text-brand-gold text-sm md:text-base tracking-widest mb-4">
                          {event.tourName}
                        </span>
                      )}
                      <h2 className="font-display text-3xl md:text-5xl lg:text-6xl text-brand-cream mb-2">
                        {event.title}
                      </h2>
                      <div className="flex flex-col md:flex-row gap-4 md:gap-8 text-brand-cream/80 text-lg md:text-xl font-sans mb-6">
                        <span>
                          {new Date(event.date).toLocaleDateString('es-ES', { 
                            weekday: 'short', 
                            year: 'numeric', 
                            month: 'short', 
                            day: 'numeric' 
                          }).toUpperCase()}
                        </span>
                        <span className="hidden md:inline text-brand-gold">•</span>
                        <span>{event.location}</span>
                      </div>
                      <a
                        href={event.ticketsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-brand-gold hover:bg-brand-gold/90 text-brand-black font-display text-center py-3 px-8 transition-colors tracking-wide w-fit"
                      >
                        MÁS INFO
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-16"
            >
              <CalendarView events={upcomingEvents} />
            </motion.div>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
}
