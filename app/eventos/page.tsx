import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import {events} from '@/lib/events';
export const metadata={title:'Eventos | Infinity Sound Entertainment',description:'Próximos conciertos y eventos de Infinity Sound Entertainment en España.'};
export default function EventosPage(){
 const jsonLd={"@context":"https://schema.org","@type":"ItemList","name":"Eventos de Infinity Sound Entertainment","itemListElement":events.map((e,i)=>({"@type":"ListItem","position":i+1,"url":`https://infinity-events-web.vercel.app/eventos/${e.slug}`,"name":e.title}))};
 return <main><Navbar/><section className="page-hero" data-motion><div className="page-width"><p className="eyebrow">INFINITY SOUND / AGENDA</p><h1 className="page-title">PRÓXIMOS <em>EVENTOS</em></h1><p className="page-subtitle">Conciertos, noches de adoración y experiencias de música cristiana por España.</p></div></section><section className="section section--dark" data-motion><div className="page-width"><div className="event-grid">{events.map(e=><Link className="event-card" href={`/eventos/${e.slug}`} key={e.id}><img src={e.image} alt={e.title}/><div className="event-card__body"><p className="eyebrow">{new Date(e.date).toLocaleDateString('es-ES',{day:'2-digit',month:'long',year:'numeric'})}</p><h2>{e.title}</h2><p>{e.location}</p><span>VER EVENTO ↗</span></div></Link>)}</div></div></section><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(jsonLd).replace(/</g,'\\u003c')}}/><Footer/></main>
}