import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { events } from '@/lib/events';

const gallery = [
  { src:'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1400&q=85', alt:'Concierto en directo' },
  { src:'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=1400&q=85', alt:'Público en concierto' },
  { src:'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1400&q=85', alt:'Artista sobre el escenario' },
  { src:'https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2?w=1400&q=85', alt:'Luces y escenario' },
];

const cities = [
  { name:'Valencia', x:'42%', y:'64%' },
  { name:'Madrid', x:'48%', y:'48%' },
  { name:'Barcelona', x:'72%', y:'38%' },
];

export default function Home() {
  const nextEvents = events.slice(0,3);
  return <main>
    <section className="hero">
      <div className="hero__backdrop" /><div className="hero__noise" />
      <Navbar />
      <div className="hero__content page-width" data-motion="hero">
        <p className="eyebrow hero__eyebrow">VALENCIA · ESPAÑA · LIVE EXPERIENCES</p>
        <h1 className="hero__title"><span>INFINITY</span><span className="hero__title-accent">SOUND</span><span className="hero__title-outline">ENTERTAINMENT</span></h1>
        <div className="hero__bottom">
          <p className="hero__intro">Creamos conciertos y experiencias de música cristiana que conectan artistas, iglesias y ciudades.</p>
          <div className="hero__actions"><Link href="/eventos" className="button button--light">Ver eventos <span>↗</span></Link><Link href="/contacto" className="button button--ghost">Trabaja con nosotros</Link></div>
        </div>
      </div>
      <div className="hero__scroll">SCROLL <span>↓</span></div>
    </section>

    <section className="statement section" data-motion><div className="page-width statement__grid"><div className="section-index">01 / 05</div><div><p className="eyebrow">INFINITY SOUND ENTERTAINMENT</p><h2 className="display-title">NO SOLO HACEMOS EVENTOS.<br/><em>CREAMOS MOMENTOS.</em></h2><p className="lead">Desde Valencia llevamos artistas y propuestas de música cristiana a escenarios de toda España. Producción, booking y experiencias pensadas para que cada noche deje una historia.</p></div></div></section>

    <section className="events-preview section section--dark" data-motion><div className="page-width"><div className="section-head"><div><p className="eyebrow">02 / PRÓXIMOS EVENTOS</p><h2 className="section-title">LO QUE VIENE</h2></div><Link href="/eventos" className="text-link">Ver agenda completa ↗</Link></div><div className="event-list">{nextEvents.map((event,i)=><Link href={`/eventos/${event.slug}`} className="event-row" key={event.id}><span className="event-row__number">0{i+1}</span><span className="event-row__date">{new Date(event.date).toLocaleDateString('es-ES',{day:'2-digit',month:'short',year:'numeric'})}</span><span className="event-row__title">{event.title}</span><span className="event-row__location">{event.location}</span><span className="event-row__arrow">↗</span></Link>)}</div></div></section>

    <section className="split-feature section" data-motion><div className="split-feature__image" style={{backgroundImage:'url(https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1800&q=85)'}} /><div className="split-feature__content"><p className="eyebrow">03 / CONTACTO</p><h2 className="display-title">¿TIENES UNA<br/><em>FECHA?</em></h2><p className="lead">Si eres iglesia, promotor, sala, festival o quieres llevar un artista a tu ciudad, hablemos.</p><Link href="/contacto" className="button button--dark">Cuéntanos tu proyecto ↗</Link></div></section>

    <section className="past section section--cream" data-motion><div className="page-width"><div className="section-head"><div><p className="eyebrow">04 / HISTORIAS</p><h2 className="section-title">EVENTOS PASADOS</h2></div><Link href="/eventos-pasados" className="text-link">Explorar archivo ↗</Link></div><div className="past-grid">{gallery.slice(0,3).map((item,i)=><Link href="/eventos-pasados" className={`past-card past-card--${i+1}`} key={item.src}><img src={item.src} alt={item.alt}/><span>VER EXPERIENCIAS ↗</span></Link>)}</div></div></section>

    <section className="gallery-preview section section--dark" data-motion><div className="page-width"><div className="section-head"><div><p className="eyebrow">05 / GALERÍA</p><h2 className="section-title">EN EL MOMENTO</h2></div><Link href="/galeria" className="text-link">Ver galería ↗</Link></div><div className="masonry">{gallery.map((item,i)=><img key={item.src} className={`masonry__item masonry__item--${i+1}`} src={item.src} alt={item.alt} loading="lazy"/>)}</div></div></section>

    <section className="locations section" data-motion><div className="page-width locations__grid"><div><p className="eyebrow">DÓNDE HEMOS TRABAJADO</p><h2 className="display-title">DE VALENCIA<br/>A <em>TODA ESPAÑA.</em></h2><p className="lead">Nuestra base está en Valencia y nuestra visión no entiende de fronteras. Hemos trabajado y conectado proyectos en Valencia, Madrid y Barcelona.</p><Link href="/donde-trabajamos" className="button button--dark">Ver ciudades ↗</Link></div><div className="spain-map" aria-label="Mapa de España con Valencia, Madrid y Barcelona"><div className="spain-map__shape"/>{cities.map(city=><a key={city.name} href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(city.name+', España')}`} target="_blank" rel="noreferrer" className="map-pin" style={{left:city.x,top:city.y}}><span>{city.name}</span><i/></a>)}</div></div></section>

    <section className="closing" data-motion><div className="closing__word">INFINITY</div><div className="page-width closing__inner"><p className="eyebrow">INFINITY SOUND ENTERTAINMENT · VALENCIA</p><h2>EL PRÓXIMO<br/><em>EVENTO</em> EMPIEZA AQUÍ.</h2><Link href="/contacto" className="button button--light">Contactar con Infinity Sound ↗</Link></div></section>
    <Footer />
  </main>;
}