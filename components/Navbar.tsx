'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

const links = [
  { href: '/', label: 'Inicio' },
  { href: '/eventos', label: 'Giras' },
  { href: '/biografia', label: 'Biografía' },
  { href: '/contacto', label: 'Contacto' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener('resize', close);
    return () => window.removeEventListener('resize', close);
  }, []);

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="site-header__inner">
        <Link href="/" className="site-logo" aria-label="Infinity Sound inicio">
          <span className="site-logo__infinity">INFINITY</span>
          <span className="site-logo__sound">SOUND</span>
        </Link>

        <nav className="site-nav desktop-nav" aria-label="Navegación principal">
          {links.map((link, index) => (
            <Link key={link.href} href={link.href} className="site-nav__link">
              {link.label}
              {index < links.length - 1 && <span className="site-nav__sep" aria-hidden="true">•</span>}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className={`site-burger ${open ? 'is-open' : ''}`}
          aria-label="Abrir menú"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span></span>
          <span></span>
        </button>
      </div>

      <div className={`mobile-panel ${open ? 'is-open' : ''}`}>
        <nav className="mobile-nav" aria-label="Navegación móvil">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="mobile-nav__link"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
