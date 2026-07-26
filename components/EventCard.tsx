'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Event } from '@/lib/events';
import CountdownTimer from './Countdown';

interface EventCardProps {
  event: Event;
  index?: number;
}

export default function EventCard({ event, index = 0 }: EventCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-brand-black border border-brand-gold/30 overflow-hidden hover:border-brand-gold transition-all duration-300 group"
    >
      <div className="relative h-64 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10" />
        <Image
          src={event.image}
          alt={event.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute top-4 left-4 z-20">
          {event.tourName && (
            <span className="font-display text-xs md:text-sm text-brand-gold tracking-widest border border-brand-gold/50 px-2 py-1">
              {event.tourName}
            </span>
          )}
        </div>
        <div className="absolute bottom-0 left-0 right-0 z-20 p-6">
          <h3 className="font-display text-2xl md:text-3xl text-brand-cream leading-tight mb-2">
            {event.title}
          </h3>
          <p className="text-brand-cream/70 text-sm font-sans">{event.location}</p>
        </div>
      </div>
      
      <div className="p-6">
        <div className="mb-4">
          <p className="text-xs text-brand-cream/60 mb-2 font-sans tracking-wide">
            {new Date(event.date).toLocaleDateString('es-ES', { 
              weekday: 'short', 
              year: 'numeric', 
              month: 'short', 
              day: 'numeric' 
            }).toUpperCase()}
          </p>
          <CountdownTimer date={event.date} />
        </div>
        
        <Link
          href={event.ticketsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full bg-brand-gold hover:bg-brand-gold/90 text-brand-black font-display text-center py-3 px-4 transition-colors tracking-wide"
        >
          MÁS INFO
        </Link>
      </div>
    </motion.div>
  );
}
