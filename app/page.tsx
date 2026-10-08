import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import {events} from '@/lib/events';

const gallery=[
 {src:'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1800&q=90',label:'LIVE / WORSHIP'},
 {src:'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=1800&q=90',label:'PEOPLE / COMMUNITY'},
 {src:'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1800&q=90',label:'ARTISTS / STAGE'},
 {src:'https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2?w=1800&q=90',label:'LIGHTS / ENERGY'}
];
const cities=[{name:'Valencia',x:'42%',y:'64%'},{name:'Madrid',x:'48%',y:'48%'},{name:'Barcelona',x:'72%',y:'38%'}];

export default function Home(){
 const nextEvents=events.slice(0,4);
 return <main className="redesign-home">
  <section className="ow-hero">
   <Navbar/>
   <div className="ow-hero__image"/>
   <div className="ow-hero__shade"/>
   <div className="ow-hero__content page-width">
    <p className="eyebrow ow-gold">VALENCIA · ESPAÑA · LIVE EXPERIENCES</p>
    <h1><span>INFINITY</span><span className="ow-outline">SOUND</span><span>ENTERTAINMENT</span></h1>
    <div className="ow-hero__bottom"><p>Conciertos, booking y experiencias de música cristiana que conectan artistas, iglesias y ciudades.</p><Link href="/eventos" className="ow-circle">VER<br/>EVENTOS<br/><b>↘</b></Link></div>
   </div>
   <div className="ow-scroll">SCROLL <i/></div>
  </section>

  <div className="ow-marquee"><div>INFINITY SOUND · CONCIERTOS · BOOKING · WORSHIP · ESPAÑA · INFINITY SOUND · CONCIERTOS · BOOKING · WORSHIP · ESPAÑA · </div></div>

  <section className="ow-manifesto" data-motion>
   <div className="page-width ow-manifesto__grid">
    <div className="ow-side">01 / MANIFIESTO</div>
    <div><p className="eyebrow">NO SOMOS SOLO PRODUCCIÓN</p><h2>CREAMOS<br/><em>MOMENTOS</em><br/>QUE PERMANECEN.</h2><p className="ow-big-copy">Desde Valencia llevamos artistas y propuestas de música cristiana a escenarios de toda España. Diseñamos noches que se viven antes, durante y después del concierto.</p></div>
   </div>
  </section>

  <section className="ow-black" data-motion>
   <div className="page-width ow-section-intro"><div><p className="eyebrow ow-gold">02 / AGENDA</p><h2>LO QUE<br/><em>VIENE.</em></h2></div><Link href="/eventos" className="ow-underlink">VER TODOS LOS EVENTOS ↗</Link></div>
   <div className="ow-events">
    {nextEvents.map((e,i)=><Link href={`/eventos/${e.slug}`} className="ow-event" key={e.id}>
      <span className="ow-event__n">0{i+1}</span><span className="ow-event__date">{new Date(e.date).toLocaleDateString('es-ES',{day:'2-digit',month:'short',year:'numeric'})}</span><h3>{e.title}</h3><span className="ow-event__place">{e.location}</span><b>↗</b>
    </Link>)}
   </div>
  </section>

  <section className="ow-feature" data-motion>
   <div className="ow-feature__visual"><img src={gallery[2].src} alt={gallery[2].label}/><span>03 / LIVE EXPERIENCE</span></div>
   <div className="ow-feature__copy"><p className="eyebrow">UNA NOCHE. UNA HISTORIA.</p><h2>LA FE<br/>TAMBIÉN<br/><em>SE VIVE.</em></h2><p>Trabajamos con iglesias, promotores, salas y festivales para llevar experiencias de música cristiana a nuevas ciudades.</p><Link href="/contacto" className="ow-button">HABLAR DE TU PROYECTO <b>↗</b></Link></div>
  </section>

  <section className="ow-archive" data-motion>
   <div className="page-width ow-section-intro ow-section-intro--cream"><div><p className="eyebrow">04 / ARCHIVO</p><h2>LO QUE<br/><em>YA PASÓ.</em></h2></div><Link href="/eventos-pasados" className="ow-underlink">EXPLORAR ARCHIVO ↗</Link></div>
   <div className="page-width ow-archive__grid">{gallery.slice(0,3).map((g,i)=><Link href="/eventos-pasados" className={`ow-archive-card ow-archive-card--${i+1}`} key={g.src}><img src={g.src} alt={g.label}/><div><span>0{i+1}</span><strong>{g.label}</strong><b>↗</b></div></Link>)}</div>
  </section>

  <section className="ow-gallery ow-black" data-motion>
   <div className="page-width"><div className="ow-section-intro"><div><p className="eyebrow ow-gold">05 / GALERÍA</p><h2>EN EL<br/><em>MOMENTO.</em></h2></div><Link href="/galeria" className="ow-underlink">VER GALERÍA ↗</Link></div></div>
   <div className="ow-gallery-track">{gallery.concat(gallery).map((g,i)=><img key={i} src={g.src} alt={g.label}/>)}</div>
  </section>

  <section className="ow-cities" data-motion>
   <div className="page-width ow-cities__grid"><div><p className="eyebrow">06 / DÓNDE TRABAJAMOS</p><h2>DE VALENCIA<br/>A <em>TODA ESPAÑA.</em></h2><p>Valencia, Madrid y Barcelona son parte de nuestro recorrido. La siguiente ciudad puede ser la tuya.</p><Link href="/donde-trabajamos" className="ow-button ow-button--dark">VER CIUDADES <b>↗</b></Link></div>
    <div className="spain-map ow-map" aria-label="Mapa de España con Valencia, Madrid y Barcelona"><div className="spain-map__shape"/>{cities.map(c=><a key={c.name} href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(c.name+', España')}`} target="_blank" rel="noreferrer" className="map-pin" style={{left:c.x,top:c.y}}><span>{c.name}</span><i/></a>)}</div>
   </div>
  </section>

  <section className="ow-final" data-motion><div className="ow-final__word">INFINITY</div><div className="page-width"><p className="eyebrow">INFINITY SOUND ENTERTAINMENT · VALENCIA</p><h2>¿LISTOS PARA<br/><em>LA PRÓXIMA?</em></h2><Link href="/contacto" className="ow-circle ow-circle--dark">CONTACTAR<br/>BOOKING<br/><b>↘</b></Link></div></section>
  <Footer/>
 </main>;
}
