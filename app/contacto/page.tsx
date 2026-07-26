'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone } from 'lucide-react';

export default function ContactoPage() {
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
              <span className="text-brand-purple">Contáctanos</span>
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              ¿Tienes alguna pregunta o quieres trabajar con nosotros? Estamos aquí para escuchar.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <ContactForm />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-8"
            >
              <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                <h2 className="text-2xl font-bold mb-6 text-brand-purple">Información de Contacto</h2>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-brand-purple/20 p-3 rounded-lg">
                      <MapPin className="text-brand-purple" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Ubicación</h3>
                      <p className="text-gray-400">Madrid, España</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-brand-cyan/20 p-3 rounded-lg">
                      <Mail className="text-brand-cyan" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <p className="text-gray-400">contact@infinitysound.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-brand-purple/20 p-3 rounded-lg">
                      <Phone className="text-brand-purple" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Teléfono</h3>
                      <p className="text-gray-400">+34 900 123 456</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-lg overflow-hidden">
                <h2 className="text-2xl font-bold p-6 text-brand-cyan">Encuéntranos</h2>
                <div className="aspect-video">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.123456789!2d-3.7037902!3d40.4167754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422997800a3c81%3A0xc436dec1618c2269!2sPuerta%20del%20Sol!5e0!3m2!1ses!2ses!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                  />
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                <h2 className="text-xl font-bold mb-4">Síguenos en redes</h2>
                <div className="flex gap-4">
                  <a
                    href="https://instagram.com/infinitysound.concerts"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-brand-purple/20 hover:bg-brand-purple/40 text-brand-purple p-3 rounded-lg transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
                  </a>
                  <a
                    href="https://tiktok.com/@infinitysound"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-brand-cyan/20 hover:bg-brand-cyan/40 text-brand-cyan p-3 rounded-lg transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
