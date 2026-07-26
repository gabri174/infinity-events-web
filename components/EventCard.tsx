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
      className="bg-white/5 border border-white/10 rounded-lg overflow-hidden hover:border-brand-purple/50 transition-all duration-300 group"
    >
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
        <Image
          src={event.image}
          alt={event.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute bottom-4 left-4 z-20">
          <h3 className="text-lg font-bold text-white">{event.title}</h3>
          <p className="text-sm text-gray-300">{event.location}</p>
        </div>
      </div>
      
      <div className="p-4">
        <div className="mb-4">
          <p className="text-xs text-gray-400 mb-2">
            {new Date(event.date).toLocaleDateString('es-ES', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </p>
          <CountdownTimer date={event.date} />
        </div>
        
        <div className="flex gap-2">
          <Link
            href={event.ticketsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-brand-purple hover:bg-brand-purple/80 text-white text-center py-2 px-4 rounded font-medium transition-colors"
          >
            Comprar entradas
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
