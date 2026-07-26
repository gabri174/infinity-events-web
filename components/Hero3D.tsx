'use client';

import { motion } from 'framer-motion';
import CountdownTimer from './Countdown';

export default function HeroEvent() {
  const title = "INFINITY SOUND";
  const eventTitle = "NOCHES DE ACTIVACIÓN PROFÉTICA";
  const eventDate = "30 SEP - 03 OCT 2026";
  const eventLocation = "ESPAÑA · EUROTOUR 2026";

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1920&q=80")',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          {/* Animated Title with Staggered Letters */}
          <motion.h1
            className="font-display text-[12vw] md:text-[10vw] leading-none mb-4 tracking-tight"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            {title.split('').map((letter, index) => (
              <motion.span
                key={index}
                className="inline-block"
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 1.2,
                  delay: index * 0.05,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <span className="text-brand-gold">{letter === ' ' ? '\u00A0' : letter}</span>
              </motion.span>
            ))}
          </motion.h1>

          {/* Event Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-8 space-y-4"
          >
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl text-brand-cream tracking-wide">
              {eventTitle}
            </h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-brand-cream/80 text-lg md:text-xl font-sans">
              <span>{eventDate}</span>
              <span className="hidden md:inline text-brand-gold">•</span>
              <span>{eventLocation}</span>
            </div>
          </motion.div>

          {/* Countdown */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-12"
          >
            <CountdownTimer date="2026-09-30T20:00:00" className="justify-center" />
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="text-brand-cream/50 text-sm tracking-widest"
        >
          SCROLL
        </motion.div>
      </motion.div>
    </div>
  );
}
