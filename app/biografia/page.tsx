'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const timelineEvents = [
  {
    year: '2018',
    title: 'Nacimiento de Infinity Sound',
    description: 'Fundamos Infinity Sound con la visión de crear experiencias musicales únicas en Madrid.'
  },
  {
    year: '2019',
    title: 'Primer Gran Festival',
    description: 'Organizamos nuestro primer festival masivo con más de 5,000 asistentes.'
  },
  {
    year: '2020',
    title: 'Adaptación Virtual',
    description: 'Durante la pandemia, innovamos con eventos streaming y experiencias virtuales inmersivas.'
  },
  {
    year: '2021',
    title: 'Expansión Nacional',
    description: 'Llevamos nuestros eventos a Barcelona, Valencia y Sevilla.'
  },
  {
    year: '2022',
    title: 'Colaboraciones Internacionales',
    description: 'Trajimos artistas de renombre mundial como headliners de nuestros eventos.'
  },
  {
    year: '2023',
    title: 'Premios y Reconocimientos',
    description: 'Fuimos galardonados como Mejor Productora de Eventos del año.'
  },
  {
    year: '2024',
    title: 'Innovación Tecnológica',
    description: 'Integramos tecnología de última generación en visuales y sonido.'
  },
  {
    year: '2025',
    title: 'Lanzamiento Global',
    description: 'Expandimos nuestras operaciones a nivel europeo con eventos en Francia y Portugal.'
  }
];

const galleryImages = [
  '/gallery/concert1.jpg',
  '/gallery/concert2.jpg',
  '/gallery/concert3.jpg',
  '/gallery/concert4.jpg',
  '/gallery/concert5.jpg',
  '/gallery/concert6.jpg'
];

function TimelineItem({ event, index }: { event: typeof timelineEvents[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center mb-12`}
    >
      <div className="flex-1">
        <div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:border-brand-purple/50 transition-all duration-300">
          <span className="text-brand-purple font-bold text-lg">{event.year}</span>
          <h3 className="text-xl font-bold mt-2 mb-2">{event.title}</h3>
          <p className="text-gray-400">{event.description}</p>
        </div>
      </div>
      <div className="w-4 h-4 bg-brand-cyan rounded-full mx-4 flex-shrink-0" />
      <div className="flex-1" />
    </motion.div>
  );
}

export default function BiografiaPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-1 pt-16">
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-brand-purple">Quiénes</span> <span className="text-brand-cyan">Somos</span>
            </h1>
            <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">
              Infinity Sound nació en 2018 con una misión clara: transformar la forma en que las personas viven la música. 
              Somos una productora de eventos y conciertos dedicada a crear experiencias inmersivas que combinan 
              tecnología de vanguardia, producción de primer nivel y una pasión inquebrantable por la música.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/5 border border-white/10 rounded-lg p-8 mb-20"
          >
            <h2 className="text-2xl font-bold mb-4 text-brand-purple">Nuestra Misión</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Crear momentos únicos que trasciendan lo ordinario. Cada evento que producimos es una obra de arte 
              donde la música, la tecnología y las emociones se fusionan para crear recuerdos que duran toda la vida.
            </p>
            <h2 className="text-2xl font-bold mb-4 text-brand-cyan">Nuestra Visión</h2>
            <p className="text-gray-300 leading-relaxed">
              Ser referentes mundiales en la producción de experiencias musicales innovadoras, llevando la magia 
              de Infinity Sound a cada rincón del planeta.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold mb-12 text-center">
              <span className="text-brand-purple">Nuestra</span> <span className="text-brand-cyan">Historia</span>
            </h2>
            
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1 w-0.5 h-full bg-gradient-to-b from-brand-purple via-brand-cyan to-brand-purple" />
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
            <h2 className="text-3xl font-bold mb-12 text-center">
              <span className="text-brand-purple">Galería</span> <span className="text-brand-cyan">de Momentos</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryImages.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative aspect-square overflow-hidden rounded-lg group cursor-pointer"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                    <span className="text-white font-bold">Ver más</span>
                  </div>
                  <div className="w-full h-full bg-gradient-to-br from-brand-purple/20 to-brand-cyan/20 flex items-center justify-center">
                    <span className="text-gray-500 text-sm">Imagen {index + 1}</span>
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
