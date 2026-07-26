import Link from 'next/link';
import { MessageCircle, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black/50 border-t border-white/10 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">
              <span className="text-brand-purple">INFINITY</span>
              <span className="text-brand-cyan"> SOUND</span>
            </h3>
            <p className="text-gray-400 text-sm">
              Creando experiencias únicas e inolvidables a través de la música y la producción de eventos de primer nivel.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-300 mb-4">Enlaces</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-brand-purple text-sm transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/eventos" className="text-gray-400 hover:text-brand-purple text-sm transition-colors">
                  Eventos
                </Link>
              </li>
              <li>
                <Link href="/biografia" className="text-gray-400 hover:text-brand-purple text-sm transition-colors">
                  Biografía
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-gray-400 hover:text-brand-purple text-sm transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-300 mb-4">Síguenos</h4>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/infinitysound.concerts"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-brand-purple transition-colors"
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
                className="text-gray-400 hover:text-brand-cyan transition-colors"
              >
                <MessageCircle size={20} />
              </a>
              <a
                href="mailto:contact@infinitysound.com"
                className="text-gray-400 hover:text-brand-purple transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Infinity Sound. Todos los derechos reservados.
          </p>
          <Link
            href="/privacidad"
            className="text-gray-500 hover:text-brand-purple text-sm transition-colors mt-4 md:mt-0"
          >
            Política de privacidad
          </Link>
        </div>
      </div>
    </footer>
  );
}
