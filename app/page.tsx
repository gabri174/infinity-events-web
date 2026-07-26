'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero3D from '@/components/Hero3D';
import EventCard from '@/components/EventCard';
import { getFeaturedEvents } from '@/lib/events';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Home() {
  const featuredEvents = getFeaturedEvents();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-1">
        <Hero3D />
        
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-brand-purple">Próximos</span> <span className="text-brand-cyan">Eventos</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              No te pierdas nuestros próximos eventos. Experiencias únicas que te transportarán a otro universo.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {featuredEvents.map((event, index) => (
              <EventCard key={event.id} event={event} index={index} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Link
              href="/eventos"
              className="inline-block bg-brand-purple hover:bg-brand-purple/80 text-white font-medium py-3 px-8 rounded-lg transition-colors"
            >
              Ver todos los eventos
            </Link>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
