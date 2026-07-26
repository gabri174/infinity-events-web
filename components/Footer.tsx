import Link from 'next/link';
import { MessageCircle, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-black border-t border-brand-gold/20 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-display text-xl mb-4">
              <span className="text-brand-gold">INFINITY</span>
              <span className="text-brand-cream"> SOUND</span>
            </h3>
            <p className="text-brand-cream/60 text-sm font-sans leading-relaxed">
              Produciendo eventos de fe, música y activación profética. Creando experiencias transformadoras en la presencia de Dios.
            </p>
          </div>

          <div>
            <h4 className="font-display text-sm text-brand-cream mb-4 tracking-widest">ENLACES</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-brand-cream/60 hover:text-brand-gold text-sm transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/eventos" className="text-brand-cream/60 hover:text-brand-gold text-sm transition-colors">
                  Giras
                </Link>
              </li>
              <li>
                <Link href="/biografia" className="text-brand-cream/60 hover:text-brand-gold text-sm transition-colors">
                  Biografía
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-brand-cream/60 hover:text-brand-gold text-sm transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm text-brand-cream mb-4 tracking-widest">SÍGUENOS</h4>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/infinitysound.concerts"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-cream/60 hover:text-brand-gold transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
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
                className="text-brand-cream/60 hover:text-brand-gold transition-colors"
              >
                <MessageCircle size={20} />
              </a>
              <a
                href="mailto:contact@infinitysound.com"
                className="text-brand-cream/60 hover:text-brand-gold transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-brand-gold/20 flex flex-col md:flex-row justify-between items-center">
          <p className="text-brand-cream/40 text-sm font-sans">
            © {new Date().getFullYear()} Infinity Sound. Todos los derechos reservados.
          </p>
          <Link
            href="/privacidad"
            className="text-brand-cream/40 hover:text-brand-gold text-sm transition-colors mt-4 md:mt-0 font-sans"
          >
            Política de privacidad
          </Link>
        </div>
      </div>
    </footer>
  );
}
