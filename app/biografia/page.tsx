'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

const timelineEvents = [
  {
    year: '2018',
    title: 'Nacimiento de Infinity Sound',
    description: 'Fundamos Infinity Sound con la visión de crear eventos de fe, música y activación profética en España.'
  },
  {
    year: '2019',
    title: 'Primeros Eventos',
    description: 'Organizamos nuestras primeras noches de adoración y activación en Madrid.'
  },
  {
    year: '2020',
    title: 'Adaptación y Crecimiento',
    description: 'Durante tiempos difíciles, innovamos con eventos streaming y experiencias virtuales de adoración.'
  },
  {
    year: '2021',
    title: 'Expansión Nacional',
    description: 'Llevamos nuestros eventos a Barcelona, Valencia y Sevilla.'
  },
  {
    year: '2022',
    title: 'Giras Proféticas',
    description: 'Iniciamos nuestras giras de activación profética por toda España.'
  },
  {
    year: '2023',
    title: 'España Adora',
    description: 'Lanzamos España Adora, nuestro evento nacional de adoración y unidad.'
  },
  {
    year: '2024',
    title: 'EUROTOUR',
    description: 'Expandimos nuestra visión a nivel europeo con eventos en Francia y Portugal.'
  },
  {
    year: '2025',
    title: 'Consolidación',
    description: 'Nos consolidamos como referentes en eventos cristianos de calidad.'
  }
];

const galleryImages = [
  'https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1507692049790-de58290a4334?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1438232992991-995b7058bbb3?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1518176258769-f227c798150e?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1504052434569-70ad5836ab65?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=600&fit=crop'
];

function TimelineItem({ event, index }: { event: typeof timelineEvents[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center mb-12`}
    >
      <div className="flex-1">
        <div className="bg-brand-black border border-brand-gold/30 rounded-lg p-6 hover:border-brand-gold/60 transition-all duration-300">
          <span className="font-display text-brand-gold text-lg">{event.year}</span>
          <h3 className="font-display text-xl mt-2 mb-2 text-brand-cream">{event.title}</h3>
          <p className="text-brand-cream/60 font-sans">{event.description}</p>
        </div>
      </div>
      <div className="w-3 h-3 bg-brand-gold rounded-full mx-4 flex-shrink-0" />
      <div className="flex-1" />
    </motion.div>
  );
}

export default function BiografiaPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-1 pt-20">
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl mb-4">
              <span className="text-brand-gold">Quiénes</span> <span className="text-brand-cream">Somos</span>
            </h1>
            <p className="text-brand-cream/70 max-w-3xl mx-auto text-lg font-sans leading-relaxed">
              Infinity Sound nació en 2018 con una misión clara: transformar la forma en que las personas viven la presencia de Dios a través de la música y la adoración. Somos una productora de eventos cristianos dedicada a crear experiencias transformadoras.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-brand-black border border-brand-gold/20 rounded-lg p-8 mb-20"
          >
            <h2 className="font-display text-2xl mb-4 text-brand-gold">Nuestra Misión</h2>
            <p className="text-brand-cream/80 leading-relaxed mb-6 font-sans">
              Crear momentos únicos donde la presencia de Dios se manifiesta. Cada evento que producimos es una oportunidad para que las personas experimenten el amor de Dios a través de la música, la enseñanza y la activación profética.
            </p>
            <h2 className="font-display text-2xl mb-4 text-brand-gold">Nuestra Visión</h2>
            <p className="text-brand-cream/80 leading-relaxed font-sans">
              Ser referentes en la producción de eventos cristianos de calidad, llevando la gloria de Dios a cada rincón de España y más allá.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-20"
          >
            <h2 className="font-display text-3xl mb-12 text-center">
              <span className="text-brand-gold">Nuestra</span> <span className="text-brand-cream">Historia</span>
            </h2>
            
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1 w-0.5 h-full bg-gradient-to-b from-brand-gold via-brand-red to-brand-gold" />
              {timelineEvents.map((event, index) => (
                <TimelineItem key={event.year} event={event} index={index} />
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h2 className="font-display text-3xl mb-12 text-center">
              <span className="text-brand-gold">Galería</span> <span className="text-brand-cream">Documental</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {galleryImages.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative aspect-square overflow-hidden border border-brand-gold/20 group cursor-pointer"
                  style={{
                    gridColumn: index === 0 ? 'span 2' : 'span 1',
                    gridRow: index === 0 ? 'span 2' : 'span 1',
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                  <img
                    src={image}
                    alt={`Gallery ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                    <span className="font-display text-brand-gold text-lg">VER MÁS</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
