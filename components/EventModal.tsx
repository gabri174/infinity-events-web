'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Event } from '@/lib/events';
import { X } from 'lucide-react';

interface EventModalProps {
  event: Event;
  onClose: () => void;
}

export default function EventModal({ event, onClose }: EventModalProps) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-gray-900 border border-white/10 rounded-lg max-w-lg w-full max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative h-48">
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent z-10" />
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-full object-cover"
            />
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 bg-black/50 hover:bg-black/80 rounded-full p-2 transition-colors"
            >
              <X size={20} className="text-white" />
            </button>
          </div>
          
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-2 text-brand-purple">{event.title}</h2>
            
            <div className="space-y-3 mb-6">
              <div>
                <p className="text-sm text-gray-400">Fecha</p>
                <p className="text-white">
                  {new Date(event.date).toLocaleDateString('es-ES', { 
                    weekday: 'long', 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                  })}
                </p>
              </div>
              
              <div>
                <p className="text-sm text-gray-400">Ubicación</p>
                <p className="text-white">{event.location}</p>
              </div>
              
              <div>
                <p className="text-sm text-gray-400">Descripción</p>
                <p className="text-gray-300">{event.description}</p>
              </div>
            </div>
            
            <a
              href={event.ticketsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-brand-purple hover:bg-brand-purple/80 text-white text-center py-3 px-4 rounded font-medium transition-colors"
            >
              Comprar entradas
            </a>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
