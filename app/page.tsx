'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroEvent from '@/components/Hero3D';
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
        <HeroEvent />
        
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mb-4">
              <span className="text-brand-gold">Próximas</span> <span className="text-brand-cream">Giras</span>
            </h2>
            <p className="text-brand-cream/70 max-w-2xl mx-auto font-sans">
              Eventos de fe, música y activación profética. Únete a nosotros en estas ciudades.
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
              className="inline-block bg-brand-gold hover:bg-brand-gold/80 text-brand-black font-display font-medium py-3 px-8 rounded transition-colors"
            >
              VER TODAS LAS GIRAS
            </Link>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
